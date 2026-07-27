import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaUserCheck, FaCheckCircle, FaStar } from "react-icons/fa";
import doctor1 from "../../assets/amjadhossain.jpg";
import doctor2 from "../../assets/biru.jpg";
import doctor3 from "../../assets/ziauddin.jpg";
import doctor4 from "../../assets/anwar.jpg";

const Teamphysio = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Healthcare Experts" },
    { number: "10,000+", label: "Patients Served" },
    { number: "100%", label: "Home Visits Across Dhaka" },
  ];

  const doctors = [
    {
      img: doctor1,
      name: "Prof. Dr. M. Amjad Hossain",
      designation: "Orthopedic Consultant & Surgeon",
      qualifications: "MS (Ortho), AO Fellow (Germany)",
      hospital: "Labaid Specialized Hospital, Dhaka",
      specialties: ["Joint Replacement", "Hip & Knee Surgery", "Hand Reconstruction"],
    },
    {
      img: doctor2,
      name: "Prof. Dr. Abu Zaffar Chowdhury (Biru)",
      designation: "Orthopedic Specialist & Sports Medicine Expert",
      qualifications: "MBBS, MS (Ortho), Fellow (UK & India)",
      hospital: "BSMMU (PG Hospital), Dhaka",
      specialties: ["Arthroscopy", "Sports Injury", "Joint Replacement"],
    },
    {
      img: doctor3,
      name: "Dr. Md. Zia Uddin",
      designation: "Spine Surgeon & Rehabilitation Expert",
      qualifications: "MBBS, D-Ortho, MS (Ortho Surgery)",
      hospital: "Labaid Specialized Hospital, Dhaka",
      specialties: ["Spine Surgery", "Bone & Joint Care", "Trauma Care"],
    },
    {
      img: doctor4,
      name: "Prof. Dr. Syed Anwaruzzaman",
      designation: "Orthopedic Specialist & Trauma Surgeon",
      qualifications: "MBBS (CMC), MS (Ortho)",
      hospital: "Cumilla Medical College & Hospital",
      specialties: ["Trauma Care", "Fracture Rehab", "Orthopedic Surgery"],
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 blog" style={{ backgroundColor: "#453364" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
          <FaStar className="text-yellow-400" />
          <span>Medical Expert Team</span>
        </div>

        {/* Primary Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white poppins-b leading-tight">
          Meet Our Orthopedic Consultants & Physiotherapy Specialists
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-gray-200 text-base sm:text-lg poppins-t leading-relaxed">
          Our senior orthopedic surgeons and clinical rehabilitation experts devise evidence-based therapy plans for fast, effective pain relief and recovery at home.
        </p>

        {/* 9. Trust Statistics Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 text-white">
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

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 items-stretch">
          {doctors.map((doc, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-white rounded-2xl p-5 text-left flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Image Header */}
                <div className="relative mb-4">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-56 object-cover rounded-xl"
                  />
                  <span className="absolute bottom-2 left-2 bg-[#453364] text-white text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                    <FaUserCheck className="text-xs text-green-400" /> Supports Home Visits
                  </span>
                </div>

                {/* Name & Title */}
                <h3 className="text-lg font-bold text-[#453364] leading-snug poppins-b mb-1">
                  {doc.name}
                </h3>
                <p className="text-xs font-semibold text-purple-700 mb-2">
                  {doc.designation}
                </p>

                {/* Qualifications & Hospital */}
                <p className="text-xs text-gray-600 mb-1">
                  <span className="font-semibold text-gray-800">Degrees:</span> {doc.qualifications}
                </p>
                <p className="text-xs text-gray-600 mb-4">
                  <span className="font-semibold text-gray-800">Chamber:</span> {doc.hospital}
                </p>

                {/* Specialties */}
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Key Specialties:
                  </p>
                  <ul className="space-y-1">
                    {doc.specialties.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-1.5 text-xs text-gray-700">
                        <FaCheckCircle className="text-green-600 text-[10px] flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tag Footer */}
              <div className="mt-6 pt-3 border-t border-gray-100">
                <span className="inline-block w-full text-center text-[11px] font-semibold bg-purple-50 text-[#453364] py-1.5 rounded-lg">
                  Home Physiotherapy Support
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 shadow-xl max-w-4xl mx-auto text-center border border-purple-100">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#453364] poppins-b">
            Need Expert Physiotherapy at Home?
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl mx-auto">
            Book an appointment today with our experienced home care physiotherapy team. Fast, comfortable, and tailored recovery across Dhaka.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="tel:01619848555"
              className="flex items-center gap-2 bg-[#453364] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition shadow-md"
            >
              <FaPhoneAlt className="text-xs" />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/8801619848555?text=Hi%2C%20I%20want%20to%20consult%20about%20home%20physiotherapy%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition shadow-md"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Teamphysio;