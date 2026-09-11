import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What does home nursing service include?",
      answer: "HCAH's home nursing service covers comprehensive clinical support including medication administration, vital signs monitoring, blood glucose testing, IV/IM injections, oxygen support, specialized tube and catheter care, wound dressing, bed sore management, and daily personal hygiene assistance."
    },
    {
      question: "Who can receive nursing care at home?",
      answer: "Nursing care at home is designed for elderly individuals, post-surgery recovering patients, stroke survivors, bedridden patients, and individuals managing chronic illnesses who require professional clinical oversight in a familiar environment."
    },
    {
      question: "Do you provide post-surgery nursing care at home?",
      answer: "Yes, we provide dedicated post-surgery nursing care to assist with surgical site wound dressing, infection prevention, mobility support, and medication management during your recovery transition at home."
    },
    {
      question: "Do you provide wound care at home?",
      answer: "Yes, our certified nurses specialize in professional wound dressing, surgical site care, and advanced bed sore management to ensure proper healing and prevent infections at home."
    },
    {
      question: "Can nurses provide catheter care and NG tube feeding at home?",
      answer: "Yes, our skilled nursing staff is fully trained to perform clinical procedures including NG tube insertion and feeding, professional catheter care, and tracheostomy tube maintenance safely at home."
    },
    {
      question: "Is 24/7 home nursing service available?",
      answer: "Yes, we offer comprehensive 24/7 home nursing service with rotational day and night shifts to provide uninterrupted medical supervision for critical or bedridden patients across Dhaka."
    },
    {
      question: "Can I arrange nursing care for a bedridden patient?",
      answer: "Yes, we specialize in bedridden patient care, providing structured assistance with regular repositioning, skin care, diaper changing, hygiene maintenance, and continuous vital monitoring."
    },
    {
      question: "How can I book a home nurse in Dhaka?",
      answer: "You can easily arrange a home nurse by reaching out to us directly via WhatsApp at 01619-848555 for instant scheduling or calling our support line at 01779-848555 to discuss your custom care requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Got Questions?
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-[43px] font-bold poppins-b tracking-tight mt-3 text-slate-900"
            style={{ lineHeight: "120%", color: "#453364" }}
          >
            Frequently Asked Questions About Home Nursing Service in Dhaka
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 poppins-t leading-relaxed">
            Find clear, straightforward answers regarding our clinical procedures, care arrangements, and booking process.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden transition-colors duration-200 bg-[#F5F1EA]/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#453364] poppins-b pr-4">
                  {faq.question}
                </h3>
                <span className={`w-8 h-8 rounded-full bg-teal-600/10 text-teal-700 flex items-center justify-center shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180 bg-teal-600 text-white" : ""}`}>
                  ↓
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-0 text-gray-600 poppins-t text-sm sm:text-base leading-relaxed border-t border-slate-100/80 mt-2">
                  <p className="pt-4">
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
}