import React from 'react';

export default function WhoNeedsNursingSection() {
  const patientConditions = [
    {
      title: "Elderly Patients",
      description: "As loved ones age, managing daily health routines, medication adherence, and mobility support becomes challenging. Our specialized elderly care at home ensures seniors maintain their dignity, comfort, and safety with dedicated professional companionship.",
      icon: "https://cdn-icons-png.flaticon.com/512/2541/2541988.png"
    },
    {
      title: "Post-Surgery Patients",
      description: "Discharge from the hospital is only the first step in recovery. Transitioning home requires careful surgical wound management and infection prevention. Our post-surgery nursing care bridges the gap between hospital and complete recovery right in your living room.",
      icon: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
    },
    {
      title: "Stroke Patients",
      description: "Stroke recovery demands continuous clinical monitoring, mobility assistance, and specialized rehabilitation support. We provide compassionate stroke patient care at home to help patients regain confidence and independence safely.",
      icon: "https://cdn-icons-png.flaticon.com/512/3063/3063185.png"
    },
    {
      title: "Bedridden Patients",
      description: "Long-term immobility requires rigorous prevention against bed sores, hygiene complications, and respiratory distress. Our expert bedridden patient care includes professional repositioning, skin care, and continuous clinical oversight.",
      icon: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
    },
    {
      title: "Patients With Chronic Illness",
      description: "Managing conditions like diabetes, heart disease, or respiratory ailments requires disciplined monitoring. Our structured chronic illness care at home keeps vital signs stable and minimizes hospital readmissions.",
      icon: "https://cdn-icons-png.flaticon.com/512/2382/2382533.png"
    }
  ];

  return (
    <section className="  py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full border border-teal-200">
            Targeted Patient Support
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-[43px] font-bold poppins-b tracking-tight mt-3 text-slate-900"
            style={{ lineHeight: "120%", color: "#453364" }}
          >
            Who Needs Home Nursing Care?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 poppins-t leading-relaxed">
            Every medical journey is unique. HCAH tailors professional nursing interventions to address specific health conditions, ensuring patients receive targeted clinical care within familiar surroundings.
          </p>
        </div>

        {/* Responsive Grid for H3 Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {patientConditions.map((item, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-6 lg:p-8 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5F1EA] flex items-center justify-center mb-5 border border-[#EAE2D5]">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#453364] mb-3 poppins-b">
                  {item.title}
                </h3>
                <p className="text-gray-600 poppins-t text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-teal-700 font-medium text-sm">
                <span className="inline-flex items-center gap-1">
                  Learn about care plans
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}

          {/* Call-to-action summary card for the 6th grid slot */}
          <div className="rounded-2xl p-6 lg:p-8 bg-gradient-to-br from-[#453364] to-slate-900 text-white flex flex-col justify-between shadow-md">
            <div>
              <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/30 mb-4">
                Customized Care Plans
              </span>
              <h3 className="text-xl font-bold mb-3 text-white poppins-b">
                Have a Unique Medical Requirement?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base poppins-t leading-relaxed">
                If your condition or loved one's requirement isn't listed, our clinical team evaluates custom cases across Dhaka to design a personalized nursing plan.
              </p>
            </div>
            <div className="mt-6">
              <a 
                href="https://wa.me/8801619848555" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm shadow-sm"
              >
                Consult Our Care Expert
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}