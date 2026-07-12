import React from "react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
 
const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const caregiverFaqs = [
    {
      id: 1,
      question: "How much does caregiver service cost in Bangladesh?",
      answer:
        "The cost of caregiver service in Bangladesh depends on the patient's condition, level of assistance required, service duration (12-hour or 24-hour), and whether short-term or long-term home care is needed. Contact Healthcare at Home Bangladesh for a personalized care assessment and quotation.",
      keywords: [
        "caregiver service cost",
        "caregiver cost in Bangladesh",
        "home caregiver cost",
      ],
    },
    {
      id: 2,
      question: "Do you provide caregiver services near me?",
      answer:
        "Yes. Healthcare at Home Bangladesh provides professional home caregiver services across Dhaka. Our care coordinators match experienced caregivers based on your location, patient's medical condition, and preferred schedule.",
      keywords: [
        "caregiver near me",
        "home caregiver near me",
        "patient caregiver near me",
      ],
    },
    {
      id: 3,
      question: "Do you provide caregiver service in Dhaka?",
      answer:
        "Yes. We provide trained home caregivers throughout Dhaka, including Gulshan, Banani, Baridhara, Bashundhara, Uttara, Dhanmondi, Mirpur, Mohammadpur, Badda, Mohakhali, Tejgaon, Motijheel and surrounding areas.",
      keywords: [
        "caregiver service in Dhaka",
        "home caregiver Dhaka",
        "caregiver in Dhaka",
      ],
    },
    {
      id: 4,
      question: "Do you provide caregiver service in Gulshan?",
      answer:
        "Yes. We provide professional home caregiver services throughout Gulshan for elderly individuals, post-surgical patients, stroke survivors, bedridden patients, and people living with chronic medical conditions.",
      keywords: ["caregiver in Gulshan", "Gulshan caregiver service"],
    },
    {
      id: 5,
      question: "Do you provide caregiver service in Banani?",
      answer:
        "Yes. Families in Banani can hire experienced caregivers for elderly care, home patient care, recovery after surgery, dementia support, and long-term caregiving assistance.",
      keywords: ["caregiver in Banani", "home caregiver Banani"],
    },
    {
      id: 6,
      question: "How much does an elderly caregiver cost?",
      answer:
        "Elderly caregiver costs vary depending on the patient's mobility, daily care requirements, working hours, and the type of support needed. We recommend a care assessment so we can recommend the most suitable caregiver plan.",
      keywords: [
        "elderly caregiver cost",
        "senior caregiver cost",
        "elderly care at home cost",
      ],
    },
    {
      id: 7,
      question: "How much does a home caregiver cost?",
      answer:
        "Home caregiver pricing depends on the level of personal care, assistance required, number of service hours, and whether daytime or 24-hour caregiver support is needed. Contact our care coordinators for a customized quotation.",
      keywords: ["home caregiver cost", "caregiver service price"],
    },
    {
      id: 8,
      question: "How can I hire a professional caregiver?",
      answer:
        "Hiring a caregiver is simple. Contact Healthcare at Home Bangladesh, discuss your loved one's condition with our care coordinator, receive a personalized care recommendation, and we'll assign a trained caregiver based on your family's needs.",
      keywords: ["how to hire a caregiver", "hire caregiver", "book caregiver"],
    },
    {
      id: 9,
      question: "Can caregivers stay overnight?",
      answer:
        "Yes. We provide both overnight caregiver services and 24-hour caregiver support for patients who require continuous assistance because of advanced age, illness, disability, or post-surgical recovery.",
      keywords: [
        "overnight caregiver",
        "24 hour caregiver",
        "live-in caregiver",
      ],
    },
    {
      id: 10,
      question: "Can caregivers give medicine?",
      answer:
        "Our caregivers can provide medication reminders and help patients follow their prescribed schedule. However, clinical procedures such as injections, IV medications, catheter insertion, wound dressing, and other nursing procedures should be performed by qualified nurses or healthcare professionals.",
      keywords: [
        "can caregiver give medicine",
        "caregiver medication reminder",
        "caregiver vs nurse",
      ],
    },
    {
      id: 11,
      question: "Can caregivers help stroke patients?",
      answer:
        "Yes. Our caregivers assist stroke survivors with mobility, personal hygiene, meal assistance, medication reminders, transfers, companionship, and daily living activities while supporting the rehabilitation plan recommended by healthcare professionals.",
      keywords: [
        "stroke caregiver",
        "caregiver for stroke patient",
        "stroke patient care at home",
      ],
    },
    {
      id: 12,
      question: "What services are included in home caregiver service?",
      answer:
        "Our home caregivers assist with bathing, grooming, dressing, toileting, feeding, mobility support, medication reminders, companionship, light exercise encouragement, hospital appointment assistance, and other daily living activities based on each patient's personalized care plan.",
      keywords: [
        "home caregiver service",
        "caregiver duties",
        "what does a caregiver do",
      ],
    },
  ];
  return (
    <div>
      <section className="py-16 lg:py-24 bg-base-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="badge badge-primary badge-lg mb-4">
              Frequently Asked Questions
            </span>

            <h2 className="text-3xl lg:text-5xl font-bold">
              Caregiver Service FAQs
            </h2>

            <p className="mt-6 text-lg leading-8 text-base-content/80">
              Find answers to the most common questions about our professional
              home caregiver services in Bangladesh.
            </p>
          </div>

          <div className="space-y-5">
            {caregiverFaqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-[#5F4A88] rounded-2xl overflow-hidden shadow-lg bg-[#453364]"
              >
                {/* Question */}

                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left transition-all duration-300 hover:bg-[#57417E]"
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-white pr-5">
                    {faq.question}
                  </h3>

                  {activeFaq === faq.id ? (
                    <FaChevronUp className="text-primary text-xl flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-primary text-xl flex-shrink-0" />
                  )}
                </button>

                {/* Answer */}

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeFaq === faq.id
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-white/10">
                    <p className="mt-5 text-white/90 leading-8">{faq.answer}</p>

                    <div className="mt-6">
                      <h4 className="text-primary font-semibold mb-3">
                        Related Searches
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {faq.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="badge badge-outline border-primary text-white"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      );
    </div>
  );
};

export default Faq;
