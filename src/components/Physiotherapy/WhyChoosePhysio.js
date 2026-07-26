import React from "react";
import {
  FaUserMd,
  FaHome,
  FaHeartbeat,
  FaHandsHelping,
  FaProcedures,
  FaClock,
} from "react-icons/fa";

const WhyChoosePhysio = () => {
  const features = [
    {
      icon: <FaUserMd />,
      title: "Certified Physiotherapists",
      description:
        "Our experienced B.Sc. and Diploma physiotherapists deliver evidence-based treatment with professional care tailored to your condition.",
    },
    {
      icon: <FaHome />,
      title: "Treatment at Your Home",
      description:
        "Receive high-quality physiotherapy in the comfort of your home, eliminating the need to travel while ensuring convenience and safety.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Personalized Recovery Plans",
      description:
        "Every patient receives a customized rehabilitation program based on their medical condition, mobility, and recovery goals.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Male & Female Therapists",
      description:
        "Choose a male or female physiotherapist according to your comfort and care preferences.",
    },
    {
      icon: <FaProcedures />,
      title: "Advanced Pain & Rehabilitation Care",
      description:
        "We provide treatment for stroke rehabilitation, back pain, neck pain, frozen shoulder, arthritis, sports injuries, and post-surgical recovery.",
    },
    {
      icon: <FaClock />,
      title: "Flexible Home Appointments",
      description:
        "Schedule physiotherapy sessions at a time that suits your daily routine with reliable home visits across Dhaka.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-[#453364]/10 text-[#453364] font-semibold text-sm">
            Why Choose Healthcare at Home Bangladesh
          </span>

          <h2 className="mt-5 text-3xl lg:text-5xl font-bold text-[#453364] leading-tight">
            Why Choose Our Home Physiotherapy Service?
          </h2>

          <p className="mt-5 text-gray-600 leading-8 text-lg">
            Our experienced physiotherapists provide professional home
            physiotherapy services across Dhaka, helping patients recover safely
            from pain, injury, neurological conditions, and surgery through
            evidence-based rehabilitation and personalized treatment plans.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 duration-300"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white mb-6 group-hover:scale-110 duration-300"
                style={{ backgroundColor: "#453364" }}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#453364] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}

        <div
          className="mt-16 rounded-3xl p-8 lg:p-10 text-center"
          style={{ backgroundColor: "#453364" }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white">
            Trusted Home Physiotherapy Services Across Dhaka
          </h3>

          <p className="mt-4 text-gray-200 max-w-3xl mx-auto leading-8">
            Whether you need stroke rehabilitation, pain management, post-surgery
            recovery, or elderly physiotherapy, our team is committed to helping
            you regain mobility and improve your quality of life without leaving
            your home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePhysio;