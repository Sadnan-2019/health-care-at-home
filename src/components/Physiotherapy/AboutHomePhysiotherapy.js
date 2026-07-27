import React from "react";
 
import { 
  FaCheckCircle, 
  FaHeartbeat, 
  FaUserMd, 
  FaPhoneAlt, 
  FaVenusMars 
} from "react-icons/fa";
const AboutHomePhysiotherapy = () => {


     const conditions = [
    "Stroke Rehabilitation",
    "Chronic Back Pain",
    "Cervical Neck Pain",
    "Knee Osteoarthritis",
    "Frozen Shoulder",
    "Sports Injury Rehab",
    "Arthritis & Joint Pain",
    "Post-Surgical Rehab",
  ];
  return (
    <section className="blog py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Benefits & Local Value */}
        <div className="text-left">
          
          {/* Section Badge */}
           

          {/* Primary H2 Tag for Local SEO */}
          <h2
            className="mt-5 text-3xl sm:text-4xl font-bold leading-tight"
            style={{ color: "#453364" }}
          >
            Benefits of Receiving Physiotherapy at Home in Dhaka
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed text-base sm:text-lg">
            Home physiotherapy allows patients to recover in a comfortable, familiar environment while avoiding Dhaka's stressful traffic. Our certified B.Sc. and Diploma physiotherapists deliver personalized 1-on-1 care tailored to your specific mobility goals.
          </p>

          {/* Key Benefits List */}
          <div className="mt-8 space-y-6">
            
            <div className="flex gap-4 items-start">
              <FaCheckCircle className="text-emerald-600 mt-1 text-xl flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-[#453364]">
                  Personalized 1-on-1 Treatment Plans
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  Every home session is fully customized for stroke recovery, post-surgical rehabilitation, or chronic pain management based on daily progress.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaVenusMars className="text-emerald-600 mt-1 text-xl flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-[#453364]">
                  Male & Female Physiotherapists Available
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  We respect patient privacy and cultural comfort. Request qualified male or female physiotherapists for dedicated home care.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaCheckCircle className="text-emerald-600 mt-1 text-xl flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-[#453364]">
                  No Travel Stress & Safe Environment
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  Eliminate painful commutes across the city. Receive hospital-grade mobility support safely right at your bedside.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaCheckCircle className="text-emerald-600 mt-1 text-xl flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-[#453364]">
                  Full Dhaka Coverage
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  Prompt home visits delivered across Gulshan, Banani, Uttara, Dhanmondi, Mirpur, Bashundhara, and nearby neighborhoods.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Treated Conditions & Doctor Credentials Card */}
        <div
          className="rounded-3xl p-6 sm:p-8 shadow-md border border-purple-50 text-left"
          style={{ backgroundColor: "#F5F1EA" }}
        >
          <h3
            className="text-2xl font-bold leading-snug"
            style={{ color: "#453364" }}
          >
            Conditions We Treat at Home
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            Targeted home rehabilitation for acute injuries and long-term medical conditions:
          </p>

          {/* Condition Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {conditions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/80 p-3 rounded-xl border border-purple-100">
                <FaHeartbeat className="text-[#453364] text-lg flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-800">{item}</span>
              </div>
            ))}
          </div>

          {/* Therapist Credential Callout Box */}
          <div
            className="mt-8 rounded-2xl p-6 text-white shadow-sm"
            style={{ backgroundColor: "#453364" }}
          >
            <div className="flex items-start gap-4">
              <FaUserMd className="text-white text-3xl flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold text-base">
                  Certified & Experienced Physiotherapists
                </h4>
                <p className="text-purple-100 text-xs sm:text-sm mt-1 leading-relaxed">
                  B.Sc. degree & diploma holders delivering evidence-based therapy using portable rehabilitation equipment.
                </p>
                <a
                  href="tel:01619848555"
                  className="mt-4 inline-flex items-center gap-2 bg-white text-[#453364] font-bold text-xs sm:text-sm px-4 py-2 rounded-lg hover:bg-purple-50 transition"
                >
                  <FaPhoneAlt className="text-xs" />
                  <span>Call 01619848555</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHomePhysiotherapy;