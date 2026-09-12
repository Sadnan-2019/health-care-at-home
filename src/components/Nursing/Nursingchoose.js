import React from "react";
import rating from "../../assets/nurserating.png";
import consulting from "../../assets/free.png";
import staf from "../../assets/staff.png";
// import "../../../src/components/Blog/Blog.css"
const Nursingchoose = () => {
  const advantages = [
    {
      title: "Experienced Nursing Professionals",
      description: "Our team consists of certified, well-trained medical professionals and caregivers who bring hospital-grade clinical expertise directly to your home in Dhaka.",
      icon: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
    },
    {
      title: "Patient-Focused Care",
      description: "We prioritize individual comfort, dignity, and personalized recovery plans tailored specifically to each patient's physical and emotional needs.",
      icon: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
    },
    {
      title: "Professional Monitoring and Documentation",
      description: "Rigorous tracking of vital signs, medication schedules, and clinical notes ensures transparency, safety, and seamless communication with family members and physicians.",
      icon: "https://cdn-icons-png.flaticon.com/512/2376/2376100.png"
    },
    {
      title: "Doctor Consultation",
      description: "Integrated clinical support that connects home nursing workflows with professional medical guidance to keep treatment plans aligned with expert prescriptions.",
      icon: "https://cdn-icons-png.flaticon.com/512/3063/3063185.png"
    },
    {
      title: "Customer Reviews and Ratings",
      description: "Rated 4.9 out of 5 stars based on verified client reviews. Families across Dhaka trust HealthCare At Home Bangladesh for our reliability, quality services, and round-the-clock customer support.",
      icon: "https://cdn-icons-png.flaticon.com/512/8587/8587740.png"
    }
  ];
  return (
    <div>
      <section className="  py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full border border-teal-200">
            Verifiable Excellence
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-[43px] font-bold poppins-b tracking-tight mt-3 text-slate-900"
            style={{ lineHeight: "120%", color: "#453364" }}
          >
            Why Choose HCAH for Home Nursing?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 poppins-t leading-relaxed">
            We focus on genuine, verifiable advantages rather than generic claims, ensuring your loved ones receive transparent, top-tier medical care in Dhaka.
          </p>
        </div>

        {/* Grid Layout for H3 Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((item, index) => (
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

              {index === 4 && (
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1 text-amber-500 font-semibold text-sm">
                  <span>★ 4.9 / 5 Rating</span>
                  <span className="text-slate-400 font-normal ml-1">(Verified Google Reviews)</span>
                </div>
              )}
            </div>
          ))}

          {/* Trust Summary Card for the remaining grid space */}
          <div className="rounded-2xl p-6 lg:p-8 bg-gradient-to-br from-[#453364] to-slate-900 text-white flex flex-col justify-between shadow-md">
            <div>
              <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/30 mb-4">
                Trusted Across Dhaka
              </span>
              <h3 className="text-xl font-bold mb-3 text-white poppins-b">
                Experience Peace of Mind Today
              </h3>
              <p className="text-slate-300 text-sm sm:text-base poppins-t leading-relaxed">
                Join numerous families who rely on HealthCare At Home Bangladesh for dependable 24/7 patient care and certified professional nursing support.
              </p>
            </div>
            <div className="mt-6">
              <a 
                href="https://wa.me/8801619848555" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm shadow-sm"
              >
                Connect on WhatsApp: 01619-848555
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
  );
};

export default Nursingchoose;
