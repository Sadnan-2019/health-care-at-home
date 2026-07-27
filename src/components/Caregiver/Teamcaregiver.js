import React from "react";
import { 
  FaShieldAlt, 
  FaUserCheck, 
  FaHeart, 
  FaBriefcase, 
  FaLanguage, 
  FaUserMd, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaCheckCircle 
} from "react-icons/fa";

import avater from "../../assets/avater.png";
import alamin from "../../assets/alamin.jpeg";

const Teamcaregiver = () => {
  // 1. Trust Statistics Data
  const stats = [
    { number: "200+", label: "Successful Recovery Stories" },
    { number: "100%", label: "Verified & Background Checked" },
    { number: "24/7", label: "Dedicated In-Home Support" },
    { number: " Dhaka-Wide", label: "Trusted Home Healthcare Coverage" },
  ];

  // 2. Trust Pillars Data
  const trustPoints = [
    "Rigorous NID & Background Verification for Complete Family Safety",
    "Specialized Clinical Training for Bedridden & Post-Surgical Care",
    "Compassionate, Patient-Centered Approach for Seniors & Elderly",
    "Flexible Full-Time, Shift-Based, & 24/7 Live-In Options",
  ];

  // 3. Caregiver Detailed Profiles
  const caregivers = [
    {
      img: alamin,
      name: "Md Alamin",
      role: "Professional Home Caregiver",
      experience: "3+ Years Experience",
      languages: ["Bangla", "English"],
      verified: true,
      specializations: ["Bedridden Patient Care", "Stroke Caregiver Support", "Post-Op Rehab"],
      patientTypes: ["Elderly & Senior Care", "Stroke Recovery Patients"],
    },
    {
      img: avater,
      name: "Hannan Hossain",
      role: "Trained Elderly Caregiver",
      experience: "4+ Years Experience",
      languages: ["Bangla"],
      verified: true,
      specializations: ["Parkinson's Care", "Mobility Assistance", "Vital Signs Monitoring"],
      patientTypes: ["Geriatric Patients", "Parkinson's Patients"],
    },
    {
      img: avater,
      name: "Eva Akhter",
      role: "Compassionate Female Caregiver",
      experience: "2+ Years Experience",
      languages: ["Bangla", "Basic English"],
      verified: true,
      specializations: ["Dementia Caregiver", "Personal Hygiene Care", "Medication Management"],
      patientTypes: ["Alzheimer's & Dementia", "Female Patients"],
    },
    {
      img: avater,
      name: "Salim Miya",
      role: "Home Healthcare Professional",
      experience: "5+ Years Experience",
      languages: ["Bangla", "English"],
      verified: true,
      specializations: ["Cancer Caregiver Support", "Catheter & Feeding Tube Care", "Palliative Care"],
      patientTypes: ["Critical Illness Care", "Cancer Patients"],
    },
  ];

  return (
    <section className="blog py-12 md:py-20 lg:py-24" style={{ backgroundColor: "#453364" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 text-yellow-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4">
            <FaShieldAlt />
            <span>Verified Home Healthcare Professionals</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white poppins-b leading-tight">
            Meet Our Expert Home Caregivers in Dhaka
          </h2>

          <p className="mt-4 text-gray-200 text-base sm:text-lg poppins-t leading-relaxed">
            Our specially trained caregivers are experienced, highly professional, and compassionate. We have empowered over 200 successful recovery stories through personalized **home patient care**.
          </p>
        </div>

        {/* 1. Trust Statistics Bar */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-white">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-2xl sm:text-4xl font-extrabold text-yellow-400 poppins-b">
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm font-medium text-gray-200 mt-1 poppins-t">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Why Families Trust Our Caregivers */}
        <div className="mt-12 bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <FaHeart className="text-red-400" />
            <span>Why Families Across Dhaka Trust Our Caregivers</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-400 text-base flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-200 poppins-t">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Professional Caregiver Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 items-stretch text-left">
          {caregivers.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-white rounded-2xl p-5 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100"
            >
              <div>
                {/* Photo & Verification Badge */}
                <div className="relative mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-56 object-cover rounded-xl"
                  />
                  {item.verified && (
                    <span className="absolute bottom-2 left-2 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                      <FaUserCheck className="text-xs" /> Verified Caregiver
                    </span>
                  )}
                </div>

                {/* Caregiver Name & Role */}
                <h3 className="text-lg font-bold text-[#453364] leading-snug poppins-b">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold text-purple-700 mb-3">
                  {item.role}
                </p>

                {/* Experience & Languages */}
                <div className="space-y-1.5 text-xs text-gray-600 mb-4 bg-purple-50/60 p-2.5 rounded-lg border border-purple-100/50">
                  <div className="flex items-center gap-2">
                    <FaBriefcase className="text-[#453364]" />
                    <span><strong className="text-gray-800">Experience:</strong> {item.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLanguage className="text-[#453364] text-sm" />
                    <span><strong className="text-gray-800">Languages:</strong> {item.languages.join(", ")}</span>
                  </div>
                </div>

                {/* Specializations */}
                <div className="mb-3">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Specializations:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.specializations.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-purple-100 text-[#453364] text-[10px] font-bold px-2 py-0.5 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Patient Types Served */}
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Patient Experience:
                  </p>
                  <ul className="space-y-1">
                    {item.patientTypes.map((pType, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-1.5 text-xs text-gray-700">
                        <FaUserMd className="text-purple-600 text-[10px] flex-shrink-0" />
                        <span>{pType}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-3 border-t border-gray-100">
                <span className="block text-center text-[11px] font-semibold text-emerald-700 bg-emerald-50 py-1.5 rounded-lg">
                  Available for Home Assignment
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Book Caregiver Call-To-Action (CTA) */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 shadow-2xl max-w-4xl mx-auto text-center border border-purple-100">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#453364] poppins-b">
            Need a Compassionate & Trained Caregiver at Home?
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl mx-auto poppins-t">
            Contact us today to arrange verified elderly care, stroke recovery assistance, or bedridden patient support anywhere in Dhaka.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="tel:01619848555"
              className="flex items-center gap-2 bg-[#453364] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition shadow-md"
            >
              <FaPhoneAlt className="text-xs" />
              <span>Book Caregiver Now</span>
            </a>

            <a
              href="https://wa.me/8801619848555?text=Hi%2C%20I%20am%20looking%20for%20a%20trained%20home%20caregiver%20in%20Dhaka."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition shadow-md"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Teamcaregiver;