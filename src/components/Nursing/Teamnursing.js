import React from 'react';
import avater from "../../assets/avater.png";
// import nurse1 from "../../assets/nurse1.png";
// import nurse2 from "../../assets/nurse2.png";
// import nurse3 from "../../assets/nurse5.png";
import nurse6 from "../../assets/nurse6.png";
const Teamnursing = () => {

 const experts = [
    {
      name: "Arpona",
      role: "Diploma Nurse",
      experience: "3+ Years Experience",
      specialty: "Post-Surgery & Clinical Care",
      image: avater,
      alt: "Arpona - Diploma Nurse providing home nursing care in Dhaka"
    },
    {
      name: "Ritu Akther",
      role: "Trained Nurse",
      experience: "4+ Years Experience",
      specialty: "Elderly & Bedridden Care",
      image: avater,
      alt: "Ritu Akther - Trained Nurse specializing in home care support"
    },
    {
      name: "Taniya Akther",
      role: "Diploma Nurse",
      experience: "4+ Years Experience",
      specialty: "Stroke Rehabilitation & Monitoring",
      image: avater,
      alt: "Taniya Akther - Diploma Nurse providing specialized medical care"
    },
    {
      name: "Rahima Akter",
      role: "Diploma Nurse",
      experience: "4+ Years Experience",
      specialty: "Critical & Chronic Illness Support",
      image: nurse6,
      alt: "Rahima Akter - Certified Diploma Nurse at HealthCare At Home Bangladesh"
    }
  ];
    return (
      <section className="py-20 lg:py-28 text-white relative overflow-hidden" style={{ backgroundColor: "#453364" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header optimized for AEO/SEO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-teal-300 bg-teal-500/20 px-3 py-1 rounded-full border border-teal-500/30">
            Certified Medical Professionals
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[43px] font-bold poppins-b tracking-tight mt-3 text-white" style={{ lineHeight: "120%" }}>
            Meet Our Expert Nurses in Dhaka
          </h2>
          <p className="mt-5 text-base sm:text-lg lg:text-xl poppins-t text-slate-200 leading-relaxed text-center">
            Our specially trained nurses are certified, highly professional, and compassionate. We have empowered more than 250 successful recovery stories through our qualified and experienced clinical team at home.
          </p>
        </div>

        {/* Modern Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/15 hover:shadow-xl group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative mb-5 overflow-hidden rounded-2xl shadow-md w-full aspect-square max-w-[200px]">
                <img 
                  src={expert.image} 
                  alt={expert.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#453364]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                  <span className="text-[11px] font-medium text-teal-200 bg-[#453364]/80 px-2.5 py-1 rounded-full border border-teal-400/30">
                    Verified HCAH Expert
                  </span>
                </div>
              </div>

              <div className="w-full">
                <h3 className="text-xl font-bold text-white poppins-b mb-1">
                  {expert.name}
                </h3>
                <p className="text-teal-300 font-medium text-sm mb-2">
                  {expert.role}
                </p>
                <div className="inline-block bg-white/10 text-slate-200 text-xs px-3 py-1 rounded-full border border-white/10 mb-2">
                  {expert.experience}
                </div>
                <p className="text-slate-300 text-xs poppins-t mt-1">
                  Specialty: {expert.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicator footer inside the section */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center max-w-2xl mx-auto">
          <p className="text-sm text-slate-300 poppins-t">
            Looking for a specific type of nursing support? Our clinical coordinators match patients with the most qualified practitioner based on individual care needs.
          </p>
        </div>

      </div>
    </section>
    );
};

export default Teamnursing;