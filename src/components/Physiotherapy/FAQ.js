import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
} from "react-icons/fa";

const TreatmentFaq = () => {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "What is a physiotherapy home service in Dhaka?",
      answer:
        "A physiotherapy home service allows a licensed physiotherapist to visit your home and provide professional assessment, treatment, pain management, and rehabilitation without the need to travel to a clinic or hospital.",
    },
    {
      question: "Who needs home physiotherapy treatment?",
      answer:
        "Home physiotherapy is suitable for patients recovering from stroke, surgery, sports injuries, back pain, neck pain, arthritis, frozen shoulder, knee pain, neurological conditions, elderly mobility problems, and other physical disabilities.",
    },
    {
      question: "Do you provide certified physiotherapists at home?",
      answer:
        "Yes. Our home physiotherapy service is delivered by qualified and experienced B.Sc. and Diploma physiotherapists who follow evidence-based rehabilitation techniques and personalized treatment plans.",
    },
    {
      question: "Which areas in Dhaka do you provide home physiotherapy services?",
      answer:
        "We provide physiotherapy home services across most areas of Dhaka, including Gulshan, Banani, Baridhara, Dhanmondi, Uttara, Mirpur, Bashundhara, Mohammadpur, Badda, Motijheel, and surrounding locations.",
    },
    {
      question: "What conditions can be treated with home physiotherapy?",
      answer:
        "Our physiotherapists treat back pain, neck pain, knee pain, frozen shoulder, stroke rehabilitation, arthritis, sports injuries, post-surgery rehabilitation, neurological disorders, elderly rehabilitation, pediatric conditions, and chest physiotherapy.",
    },
    {
      question: "How many physiotherapy sessions will I need?",
      answer:
        "The number of sessions depends on your diagnosis, severity of the condition, and recovery goals. After the initial assessment, your physiotherapist will create a personalized rehabilitation plan and recommend the appropriate treatment schedule.",
    },
    {
      question: "Is home physiotherapy as effective as clinic-based physiotherapy?",
      answer:
        "Yes. Home physiotherapy can be equally effective when performed by experienced physiotherapists. Treatment is personalized, one-to-one, and carried out in a comfortable environment, helping many patients recover safely and consistently.",
    },
    {
      question: "How can I book a home physiotherapy appointment?",
      answer:
        "Booking is simple. Call our healthcare team or contact us through WhatsApp to schedule an assessment. We will arrange a suitable appointment time and send a qualified physiotherapist to your home.",
    },
  ];

  return (
    <section className="py-14 lg:py-24 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Badge */}

        <div className="text-center">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#453364]/10 text-[#453364] text-sm font-semibold">
            <FaQuestionCircle />
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-bold text-[#453364]">
            Home Physiotherapy Service FAQs
          </h2>

          <p className="mt-6 text-gray-600 leading-8 max-w-3xl mx-auto">
            Find answers to the most common questions about our
            <strong> physiotherapy home service in Dhaka</strong>, including
            treatment methods, home visits, rehabilitation, booking procedures,
            and the conditions our experienced physiotherapists treat.
          </p>

        </div>

        {/* FAQ */}

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left px-6 py-5"
              >

                <h3 className="font-semibold text-[#453364] text-lg pr-5">
                  {faq.question}
                </h3>

                {active === index ? (
                  <FaChevronUp className="text-[#453364]" />
                ) : (
                  <FaChevronDown className="text-[#453364]" />
                )}

              </button>

              {active === index && (

                <div className="px-6 pb-6">

                  <p className="text-gray-600 leading-8">
                    {faq.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default TreatmentFaq;