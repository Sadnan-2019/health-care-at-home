import React from "react";

const Faq = () => {



const faqs = [
  {
    question: "What home healthcare services do you provide in Bangladesh?",
    answer:
      "HealthCare at Home Bangladesh provides professional home nursing, caregiver services, physiotherapy, medical assistants, patient attendants, elderly care, nanny care, ICU setup at home, medical equipment rental, companionship, and emergency ambulance services across Bangladesh."
  },

  {
    question: "Do you provide registered nurses for home nursing care?",
    answer:
      "Yes. Our registered nurses provide professional home nursing services including medication administration, wound dressing, catheter care, NG tube care, oxygen therapy, injection administration, vital signs monitoring, and post-operative nursing care according to each patient's healthcare needs."
  },

  {
    question: "Do you provide caregivers for elderly people at home?",
    answer:
      "Yes. Our trained caregivers provide elderly care at home by assisting with bathing, grooming, feeding, mobility support, medication reminders, companionship, personal hygiene, and other daily living activities while helping seniors maintain comfort and dignity."
  },

  {
    question: "Can I hire a caregiver for 24-hour home care?",
    answer:
      "Yes. We provide flexible caregiver services including 12-hour, 24-hour, daytime, nighttime, temporary, and long-term home care depending on the patient's condition and family requirements."
  },

  {
    question: "Do you provide physiotherapy services at home?",
    answer:
      "Yes. Our experienced physiotherapists provide home physiotherapy for stroke rehabilitation, back pain, neck pain, arthritis, post-surgery recovery, neurological conditions, musculoskeletal disorders, and elderly rehabilitation."
  },

  {
    question: "Can you set up ICU or critical care at home?",
    answer:
      "Yes. We provide complete ICU and critical care setup at home including ICU-trained nurses, hospital beds, ventilator support, oxygen concentrators, BiPAP machines, suction machines, patient monitors, and other essential medical equipment for critically ill patients."
  },

  {
    question: "Do you rent medical equipment for home patients?",
    answer:
      "Yes. We provide medical equipment rental including hospital beds, oxygen concentrators, BiPAP machines, wheelchairs, suction machines, nebulizers, patient monitors, pulse oximeters, and other healthcare equipment for home patient care."
  },

  {
    question: "Do you provide emergency ambulance services?",
    answer:
      "Yes. We provide 24/7 emergency ambulance services including AC ambulances, non-AC ambulances, ICU ambulances, ventilator ambulances, hospital transfers, and emergency patient transportation."
  },

  {
    question: "Which areas do you serve in Bangladesh?",
    answer:
      "We primarily provide home healthcare services throughout Dhaka and also serve many other locations across Bangladesh depending on service availability. Please contact our team to confirm coverage in your area."
  },

  {
    question: "How can I book a home nursing or caregiver service?",
    answer:
      "You can book our home healthcare services by calling our hotline, sending a WhatsApp message, or submitting the appointment form on our website. Our team will help you choose the most suitable healthcare service based on your needs."
  },

  {
    question: "Why choose HealthCare at Home Bangladesh?",
    answer:
      "HealthCare at Home Bangladesh focuses on compassionate, professional, and personalized home healthcare. We provide experienced nurses, qualified physiotherapists, trained caregivers, medical assistants, and reliable patient support services designed to improve recovery, independence, and quality of life."
  },

  {
    question: "Can I receive personalized home healthcare based on my medical condition?",
    answer:
      "Yes. Every patient has different healthcare needs. We assess your condition and recommend a personalized home healthcare plan that may include nursing care, caregiver support, physiotherapy, medical assistance, or specialized services to support recovery safely at home."
  }
];








  return (
    <div>
         <div>
       <section className="py-16 lg:py-24 bg-base-100">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-base-100 border border-base-300 rounded-xl shadow-sm"
            >
              <input type="checkbox" />

              <div className="collapse-title">
                <h3 className="text-lg md:text-xl font-semibold pr-8">
                  {faq.question}
                </h3>
              </div>

              <div className="collapse-content">
                <p className="leading-7 text-base-content/80">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
          </div>
    </div>
  );
};

export default Faq;
