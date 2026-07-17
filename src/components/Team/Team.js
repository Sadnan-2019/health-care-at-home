import React from "react";

import doctor2 from "../../assets/Dr.-Sarwar-Iqbal.jpg";
import doctor3 from "../../assets/Dhimanbonik.jpg";
import doctor4 from "../../assets/dr.-abu-sayed.jpg";
import doctor5 from "../../assets/lutfor.jpg";
import doctor6 from "../../assets/zakiahossain.jpeg";
import doctor7 from "../../assets/kibria.jpg";
import doctor8 from "../../assets/Dr Sarwar OPHTHALMOLOGIST.jpg";
import doctor9 from "../../assets/Qazi Musshtaq.jpg";
import doctor10 from "../../assets/Dr Tarafder Runa Liala.jpeg";
import doctor11 from "../../assets/Prof Shahina Subhan Mitu.jpg";
import doctor12 from "../../assets/Prof,Dr AK Akhteruzzaman.jpeg";
import doctor13 from "../../assets/Prof. Masud Iqbal.jpeg";
import doctor14 from "../../assets/Mosharaaf.jpg";

const Team = () => {
  const doctors = [
    {
      id: 1,
      image: doctor3,
      name: "Prof. Dr. Dhiman Banik",
      designation: "Professor & Senior Consultant Cardiologist",
      qualification:
        "MBBS, D-Card, MD (Card.), Associate Fellow, American College of Cardiology",
      hospital: "Cardiology Specialist",
      alt: "Portrait of Prof. Dr. Dhiman Banik, Senior Consultant Cardiologist",
    },
    {
      id: 2,
      image: doctor2,
      name: "Dr. Sarwar Iqbal",
      designation: "Professor & Head, Department of Nephrology",
      qualification: "MBBS, MD (Nephrology), Kidney Disease Specialist",
      hospital: "BIRDEM Hospital & Ibrahim Medical College",
      alt: "Portrait of Dr. Sarwar Iqbal, Kidney Disease Specialist",
    },
    {
      id: 3,
      image: doctor4,
      name: "Dr. Mohammad Abu Sayeed",
      designation: "Professor & Head, Neurosurgery",
      qualification: "MBBS, MS (Neurosurgery), Brain & Spine Surgeon",
      hospital: "Neurosurgery Specialist",
      alt: "Portrait of Dr. Mohammad Abu Sayeed, Brain and Spine Surgeon",
    },
    {
      id: 4,
      image: doctor5,
      name: "Dr. Lutfor Rahman",
      designation: "Chief Cardiac Surgeon",
      qualification: "MBBS, MS (CTS), Cardiac Surgery Specialist",
      hospital: "Labaid Cardiac Hospital",
      alt: "Portrait of Dr. Lutfor Rahman, Chief Cardiac Surgeon",
    },
    {
      id: 5,
      image: doctor6,
      name: "Dr. Zakia Hossain",
      designation: "Internal Medicine Specialist",
      qualification: "MD, Internal Medicine",
      hospital: "USA",
      alt: "Portrait of Dr. Zakia Hossain, Internal Medicine Specialist",
    },
    {
      id: 6,
      image: doctor7,
      name: "Prof. Dr. S. M. G. Kibria",
      designation: "Senior General & Colorectal Surgeon",
      qualification:
        "FRCS (England, Glasgow, Edinburgh), MSc (Leeds), MBBS (DMC)",
      hospital: "General Surgery Specialist",
      alt: "Portrait of Prof. Dr. S. M. G. Kibria",
    },
    {
      id: 7,
      image: doctor8,
      name: "Dr. Sarwar Jahan Muktafi",
      designation: "Consultant Ophthalmologist",
      qualification: "Cataract, Medical Retina & Oculoplasty Specialist",
      hospital: "Bangladesh Eye Hospital",
      alt: "Portrait of Dr. Sarwar Jahan Muktafi, Ophthalmologist",
    },
    {
      id: 8,
      image: doctor9,
      name: "Professor Dr. Qazi Mushtaq Hussain",
      designation: "Cancer Specialist & Senior Consultant",
      qualification: "MBBS (DMC), M.Phil (BSMMU), Higher Training in Oncology",
      hospital: "Labaid Cancer Hospital",
      alt: "Portrait of Professor Dr. Qazi Mushtaq Hussain",
    },
    {
      id: 9,
      image: doctor10,
      name: "Associate Prof. Dr. Tarafdar Runa Laila",
      designation: "Gynecology, Obstetrics Specialist & Surgeon",
      qualification:
        "MBBS, FCPS (OBGYN), MS (OBGYN), Infertility Training (India)",
      hospital: "Bangabandhu Sheikh Mujib Medical University",
      alt: "Portrait of Associate Prof. Dr. Tarafdar Runa Laila",
    },
    {
      id: 10,
      image: doctor11,
      name: "Prof. Shahina Subhan Mitu",
      designation: "Director",
      qualification: "Centre for Medical Education (CME)",
      hospital: "Medical Education Specialist",
      alt: "Portrait of Prof. Shahina Subhan Mitu",
    },
    {
      id: 11,
      image: doctor12,
      name: "Prof. Dr. A. K. Akhteruzzaman",
      designation: "Anaesthesia, Intensive Care & Pain Medicine Specialist",
      qualification: "MBBS, DA, MD",
      hospital: "Bangabandhu Sheikh Mujib Medical University",
      alt: "Portrait of Prof. Dr. A. K. Akhteruzzaman",
    },
    {
      id: 12,
      image: doctor13,
      name: "Dr. Md. Masud Iqbal",
      designation: "Nephrology Specialist",
      qualification: "MBBS, MD (Nephrology)",
      hospital: "National Institute of Kidney Diseases & Urology (NIKDU)",
      alt: "Portrait of Dr. Md. Masud Iqbal",
    },
    {
      id: 13,
      image: doctor14,
      name: "Professor Dr. A. K. M. Mosharraf Hossain",
      designation: "Pulmonologist & Sleep Medicine Specialist",
      qualification: "MBBS, FCCP (USA), FRCP, PhD, FCPS",
      hospital: "Bangabandhu Sheikh Mujib Medical University",
      alt: "Portrait of Professor Dr. A. K. M. Mosharraf Hossain",
    },
  ];

  const expertSection = {
    badge: "Trusted Medical Professionals",
    title: "Meet Our Experienced Doctors & Healthcare Specialists",
    description:
      "Our multidisciplinary team includes experienced physicians, specialist consultants, surgeons, physiotherapists and healthcare professionals dedicated to delivering safe, compassionate and high-quality home healthcare services across Bangladesh.",
  };
  return (
    <div>
      <div
        className="max-w-4xl mx-auto text-center mb-14"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#453364] border border-white/20 text-white text-sm font-semibold tracking-wide">
          {expertSection.badge}
        </span>

        <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#453364] leading-tight">
          {expertSection.title}
        </h2>

        <p className="mt-6 text-gray-200 text-base md:text-lg leading-8 max-w-3xl mx-auto">
          {expertSection.description}
        </p>

        <div className="w-24 h-1 bg-white rounded-full mx-auto mt-8"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8   mx-8 py-8">
        {doctors.map((doctor, index) => (
          <article
            key={doctor.id}
            className="group bg-[#453364] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="800"
          >
            {/* Doctor Image */}
            <div className="relative h-80 bg-gradient-to-b from-gray-50 to-white overflow-hidden flex items-end justify-center">
              <img
                src={doctor.image}
                alt={doctor.alt}
                loading="lazy"
                decoding="async"
                className="max-h-[300px] w-auto object-contain transition duration-300 group-hover:scale-105"
              />

              <div className="absolute top-4 left-4 bg-[#453364] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                Medical Expert
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Doctor Name */}
              <h3 className="text-2xl font-bold text-white  leading-snug">
                {doctor.name}
              </h3>

              {/* Designation */}
              <p className="mt-2 text-base font-semibold text-white ">
                {doctor.designation}
              </p>

              {/* Qualification */}
              <p className="mt-4 text-sm leading-7 text-white ">
                {doctor.qualification}
              </p>

              {/* Hospital */}
              <div className="mt-5 pt-5 border-t border-gray-100 flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#453364]/10 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 21V5a2 2 0 00-2-2h-2V1H9v2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0H5m8-12h.01M12 12h.01M12 16h.01M8 12h.01M8 16h.01M16 12h.01M16 16h.01"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-white ">
                    Affiliation
                  </p>

                  <p className="text-sm font-semibold text-white ">
                    {doctor.hospital}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Team;
