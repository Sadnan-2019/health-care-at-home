import React from 'react';

export default function FlexibleNursingCareSection() {
  const careDurations = [
    {
      title: "Short-Term Nursing Support",
      tag: "12 to 24 Hours / Post-Procedure",
      description: "Ideal for patients recovering from minor surgical procedures, acute injuries, or requiring short-term IV infusions, wound dressing changes, and injections. Our nurses step in for precise durations to bridge the gap during acute recovery phases.",
      duration: "Flexible hourly or daily shifts",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200"
    },
    {
      title: "Long-Term Nursing Care",
      tag: "Extended Care & Rehabilitation",
      description: "Designed for individuals managing chronic illnesses, degenerative conditions, or prolonged rehabilitation. Dedicated long-term nurses ensure consistent clinical oversight, medication management, and daily comfort maintenance over weeks or months.",
      duration: "Weekly or monthly structured plans",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      title: "24/7 Home Nursing Service",
      tag: "Round-the-Clock Critical Support",
      description: "Our comprehensive 24/7 home nursing service provides uninterrupted medical supervision for bedridden, post-stroke, or severely ill patients. Alternating shifts of professional nurses ensure continuous vital monitoring, immediate emergency response, and total peace of mind for families.",
      duration: "Day and night rotational shifts",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-200"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Adaptable Scheduling
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-[43px] font-bold poppins-b tracking-tight mt-3 text-slate-900"
            style={{ lineHeight: "120%", color: "#453364" }}
          >
            Flexible Nursing Care for Different Needs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 poppins-t leading-relaxed">
            Medical recovery timelines vary widely. HCAH offers flexible care durations and scheduling arrangements across Dhaka, matching professional nursing support precisely to your family's daily routine and clinical requirements.
          </p>
        </div>

        {/* 3-Column Modern UI Layout for H3 Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careDurations.map((item, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg ${
                index === 2 
                  ? "bg-gradient-to-b from-[#453364]/5 to-white border-[#453364]/20 relative overflow-hidden" 
                  : "bg-[#F5F1EA]/50 border-[#EAE2D5]"
              }`}
            >
              {index === 2 && (
                <div className="absolute top-0 right-0 bg-teal-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${item.badgeColor}`}>
                  {item.tag}
                </span>

                <h3 className="text-2xl font-bold text-[#453364] mb-3 poppins-b">
                  {item.title}
                </h3>

                <p className="text-gray-600 poppins-t text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs sm:text-sm font-medium text-slate-700">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.duration}
                </span>
                <span className="text-teal-700 font-semibold hover:underline">
                  Inquire →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}