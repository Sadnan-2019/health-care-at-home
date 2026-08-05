import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export const FAQSection = ({ 
  locationName = "Dhaka, Bangladesh",
  agencyName = "Our Baby Care Agency" 
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured FAQs incorporating primary, secondary, and semantic keywords naturally
  const faqs = [
    {
      question: "What is included in your professional baby care home services in Bangladesh?",
      answer: "Our baby care home services in Bangladesh provide comprehensive support tailored for newborns and toddlers. A professional baby caregiver or baby care nurse handles essential daily care, including safe bathing, diaper hygiene, newborn feeding schedules, baby sleep routines, and tracking key developmental milestones. We also assist parents with vaccination reminders and responsive caregiving to ensure complete peace of mind."
    },
    {
      question: "How do you vet your nannies and newborn caregivers in Bangladesh?",
      answer: "Every nanny service provider and newborn caregiver undergoes a rigorous background audit. This includes National ID (NID) authentication, local police clearance, permanent address verification, and health screenings. Furthermore, our baby sitting service staff receives continuous training in postnatal baby care, infant CPR, hygiene, and early childhood care."
    },
    {
      question: "What is the baby care service price in Bangladesh?",
      answer: "The baby care service price in Bangladesh depends on the required schedule, duration, and level of specialization. Options range from flexible 8-hour day shifts to night baby care and full-time live-in nanny packages. Transparent rates generally vary depending on whether you need a general child care assistant or a specialized baby care nurse in Dhaka and other major cities, with zero hidden agency commission fees."
    },
    {
      question: "Do you offer night baby care or live-in nanny options in Dhaka?",
      answer: "Yes, we offer flexible night baby care and live-in nanny services across Dhaka and surrounding regions. Overnight care is designed for working parents or mothers needing postnatal baby care support, focusing on midnight infant nutrition, soothing techniques, and maintaining a consistent baby sleep routine."
    },
    {
      question: "What is the difference between a baby sitting service and a professional baby care nurse?",
      answer: "A standard baby sitting service or nanny primarily focuses on active supervision, play, and basic meal assistance for toddlers. In contrast, a specialized baby care nurse or trained newborn caregiver possesses clinical skills tailored for infant care at home—including umbilical cord care, lactation support, health monitoring, and structured early childhood development routines."
    },
    {
      question: "How quickly can I hire a nanny or baby caregiver for child care at home?",
      answer: "We can match your family with a qualified nanny or professional baby caregiver within 24 to 48 hours following an initial consultation. If your family requires a quick replacement or adjusted hours for infant care at home, our dedicated care managers coordinate replacements immediately."
    }
  ];

  // Schema.org FAQPage JSON-LD for Search Engine Rich Results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="bg-white py-12 md:py-20 font-sans text-gray-800" aria-labelledby="faq-heading">
      
      {/* Inject JSON-LD FAQ Schema dynamically */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-4xl">
        
        {/* H2 Header mapped strictly to target keyword cluster */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#453364] bg-[#453364]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Parenting Support & Clarity
          </span>
          <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions About Baby Care Home Services in Bangladesh
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Find clear answers regarding nanny vetting, schedules, pricing, and infant care at home.
          </p>
        </div>

        {/* FAQ Accordions using semantic <dl>, <dt>, and <dd> tags */}
        <dl className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
              >
                <dt>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                      {faq.question}
                    </span>
                    <span className={`p-2 rounded-full bg-purple-100 text-[#453364] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                      <FaChevronDown className="text-xs" aria-hidden="true" />
                    </span>
                  </button>
                </dt>
                
                {isOpen && (
                  <dd className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 mt-1">
                    {faq.answer}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>

      </div>
    </section>
  );
};

export default FAQSection;