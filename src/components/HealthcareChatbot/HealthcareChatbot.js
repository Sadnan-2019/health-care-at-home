import React, { useEffect, useRef, useState } from "react";
import Groq from "groq-sdk"; // 1. Import Groq SDK
import "./HealthcareChatbot.css";

// 2. Initialize Groq (Ensure you have REACT_APP_GROQ_API_KEY or VITE_GROQ_API_KEY in your frontend env)
const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true, // Required to run Groq directly in the browser
});

// 3. Move your backend system instructions into a frontend constant
const SYSTEM_PROMPT = `
You are HCAH Bangladesh's home healthcare service assistant.

Language rule:
- Detect the user's language automatically.
- If user writes Bangla, reply in Bangla.
- If user writes English, reply in English.
- If user mixes Bangla and English, reply in the same mixed style.
- Do not ask user to choose language.

Your job:
- Understand patient age, illness, mobility, and care needs.
- Understand baby or child care needs, including newborn care, feeding support, supervision, and babysitting support.
- Recommend suitable home healthcare or babysitter services.
- Ask short follow-up questions when information is missing.
- Collect name, phone number, location, and preferred care duration before final handover.
- Keep replies short, clear, friendly, and helpful.
- Do not give diagnosis, medicine, prescription, or emergency treatment.
- If the request is for non-medical baby care, suggest Babysitter / Child Care Service.
- If the baby or child has serious symptoms like breathing problems, unconsciousness, high fever, or emergency condition, tell the user to contact a doctor or emergency support immediately.

Available services:
1. Caregiver Service
2. Medical Caregiver
3. Nursing Care
4. Physiotherapy Support
5. Companion Care
6. Post-operative Care
7. Dementia Care
8. Stroke/Paralysis Support
9. Babysitter / Child Care Service

Recommendation rules:
- Stroke/paralysis = Caregiver + Physiotherapy Support
- Heart surgery/post-operative = Nursing Care + Medical Caregiver
- Bedridden = Trained Caregiver or Medical Caregiver
- Wound/catheter/NG tube = Medical Caregiver or Nursing Care
- Injection/IV/oxygen monitoring = Nursing Care
- Dementia/Alzheimer's = Dementia-trained Caregiver + Companion Care
- Elderly weakness = Caregiver Service
- Loneliness only = Companion Care
- Baby/child care, working parents, newborn support, feeding, diaper change, child supervision = Babysitter / Child Care Service
- Baby with illness, fever, breathing issue, or emergency symptoms = Tell user to contact a doctor/emergency support first, then suggest Nursing Care only if home support is needed

Emergency rule:
If user mentions chest pain, unconsciousness, severe breathing problem, heavy bleeding, or serious emergency, tell them to seek emergency medical support immediately.

Final handover:
When enough patient details are collected, ask for:
- Name
- Phone number
- Location
- Preferred call time

Never say you are a doctor.
Never say this is a confirmed medical plan.
Say final service should be confirmed by care coordinator.
`;

const HealthcareChatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [messages, setMessages] = useState([]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const detectLanguage = (text) => {
    const banglaRegex = /[\u0980-\u09FF]/;
    return banglaRegex.test(text) ? "bn-BD" : "en-US";
  };

  const speakBotReply = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = detectLanguage(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  };

  const startVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice input is not supported in this browser. Please use Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "bn-BD";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => setListening(true);
    recognition.onresult = (event) => setInput(event.results[0][0].transcript);
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognition.start();
  };

  // 4. Refactored Send Message function to call Groq directly
  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      role: "user",
      content: input.trim(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      // Call the Groq SDK directly in frontend
      const completion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.4,
        max_completion_tokens: 600,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...updatedMessages,
        ],
      });

      const replyText =
        completion.choices?.[0]?.message?.content ||
        "Sorry, I could not generate a response.";

      const botMessage = {
        role: "assistant",
        content: replyText,
      };

      setMessages((prev) => [...prev, botMessage]);
      speakBotReply(replyText);
    } catch (error) {
      console.error("Groq frontend error:", error);
      const errorMessage =
        "Sorry, something went wrong. Please call our care team directly.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: errorMessage },
      ]);
      speakBotReply(errorMessage);
    }

    setLoading(false);
  };

  return (
    <div className="hcai-wrapper">
      {open && (
        <div className="hcai-window">
          <div className="hcai-body">
            {messages.length === 0 && (
              <p className="hcai-empty-text">
                Ask us anything, or share patient details.
              </p>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "assistant"
                    ? "hcai-message bot"
                    : "hcai-message user"
                }
              >
                {message.content}
              </div>
            ))}

            {loading && (
              <div className="hcai-message bot typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            <div ref={chatEndRef}></div>
          </div>

          <div className="hcai-input-area">
            <div className="hcai-input-card">
              <input
                value={input}
                placeholder="Message..."
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
              />
              <div className="hcai-icons-row">
                <button type="button" title="Attachment">
                  📎
                </button>
                <button type="button" title="Emoji">
                  😊
                </button>
                <button type="button" title="GIF" className="gif-btn">
                  GIF
                </button>
                <button
                  type="button"
                  title="Voice"
                  className={listening ? "mic-active" : ""}
                  onClick={startVoiceInput}
                >
                  🎙️
                </button>
                <button
                  className="hcai-send-circle"
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                >
                  ↑
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        className={`hcai-floating-btn ${!open ? "pulse" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className="chat-icon">💬</div>
        <div className="chat-text">
          <span>{open ? "Close Chat" : "Home Care AI Assistant"}</span>
          {!open && <small>Ask about patient care</small>}
        </div>
        {!open && <div className="notification-dot"></div>}
      </button>
    </div>
  );
};

export default HealthcareChatbot;
