import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaCalendarCheck, FaCheckCircle } from "react-icons/fa";
import "./Physio.css";

const HeroPhysio = () => {
  const conditions = [
    "Stroke Rehab",
    "Back Pain",
    "Neck Pain",
    "Frozen Shoulder",
    "Knee Pain",
  ];

  const valueProps = [
    "Certified Physiotherapists (B.S.C)",
    "Female & Male Therapists",
    "Stroke Rehabilitation",
    "Home Visit Anywhere in Dhaka",
  ];

  return (
    <section className="h-auto physio relative bg-cover bg-center bg-no-repeat py-12 md:py-20 lg:py-24">
      {/* Optional subtle overlay for background image readability */}
      <div className="absolute inset-0 bg-white/70 lg:bg-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl text-left">
          
          {/* Eyebrow / Trust Tag */}
          <div 
            data-aos="fade-down" 
            className="inline-flex items-center gap-2 bg-purple-100 text-[#453364] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-4"
          >
            <span>Trusted Home Healthcare</span>
          </div>

          {/* H1 Primary Title for SEO */}
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight  text-white leading-tight"
          >
            Physiotherapy Home Service in Dhaka
          </h1>

          {/* Value Proposition Description */}
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-4 text-base sm:text-lg text-white leading-relaxed font-medium"
          >
            Recover from pain with experienced physiotherapists providing professional home physiotherapy services across Dhaka.
          </p>

          {/* Feature Bullets (Grid) */}
          <div 
            data-aos="fade-up"
            data-aos-duration="1200"
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {valueProps.map((prop, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <FaCheckCircle className="text-emerald-600 text-lg flex-shrink-0" />
                <span className="text-sm sm:text-base font-semibold  text-white">
                  {prop}
                </span>
              </div>
            ))}
          </div>

          {/* Condition Tags / Chips */}
          <div 
            data-aos="fade-up"
            data-aos-duration="1400"
            className="mt-6 flex flex-wrap gap-2 items-center"
          >
            <span className="text-xs font-bold text-white uppercase tracking-wider mr-1">
              Treating:
            </span>
            {conditions.map((condition, idx) => (
              <span
                key={idx}
                className="bg-white/90 border border-purple-200 text-[#453364] px-3 py-1 rounded-md text-xs sm:text-sm font-semibold shadow-xs"
              >
                {condition}
              </span>
            ))}
          </div>

          {/* Call-to-Action Group */}
          <div
            data-aos="fade-up"
            data-aos-duration="1600"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {/* Primary Action - Booking */}
           

            {/* Direct Call Button */}
            <a
              href="tel:01619848555"
              className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-5 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 shadow-md"
            >
              <FaPhoneAlt className="text-xs" />
              <span>Call Now</span>
            </a>

            {/* Direct WhatsApp Link */}
            <a
              href="https://wa.me/8801619848555?text=Hi%2C%20I%20want%20to%20book%20a%20home%20physiotherapy%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 shadow-md"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Hyper-Local Coverage Bar */}
          <div 
            data-aos="fade-up"
            data-aos-duration="1800"
            className="mt-8 pt-4 border-t border-purple-100 text-xs sm:text-sm font-medium text-white"
          >
            <span className="font-bold text-white">Serving:</span> Gulshan • Banani • Uttara • Dhanmondi • Mirpur & all major areas
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroPhysio;