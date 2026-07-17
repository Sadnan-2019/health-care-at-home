import React from "react";
import flyer from "../../assets/hcahflyer.jpg";
import {
  FaUserNurse,
  FaHeartbeat,
  FaHome,
  FaBaby,
  FaProcedures,
  FaUserShield,
} from "react-icons/fa";
import flyer1 from "../../assets/HCAHBrochure1.jpg";
import flyer2 from "../../assets/HCAHBrochure2.jpg";
import { Helmet } from "react-helmet-async";
import "./About.css";
const About = () => {
  const whyChooseUs = [
    {
      id: 1,
      icon: <FaHeartbeat />,
      title: "Affordable Home Healthcare Services",
      description:
        "Receive hospital-quality home healthcare services at affordable rates. From professional nursing care and caregiver support to physiotherapy at home, we help families reduce hospital visits while maintaining quality treatment.",
    },
    {
      id: 2,
      icon: <FaUserNurse />,
      title: "Qualified Nurses, Caregivers & Physiotherapists",
      description:
        "Our experienced nurses, trained caregivers and licensed physiotherapists provide safe patient care, elderly care, baby care at home and rehabilitation services across Bangladesh.",
    },
    {
      id: 3,
      icon: <FaBaby />,
      title: "Personalized Elderly & Baby Care at Home",
      description:
        "Whether you need elderly care, newborn baby care at home or long-term caregiver assistance, every care plan is personalized according to the patient's medical and daily living needs.",
    },
    {
      id: 4,
      icon: <FaProcedures />,
      title: "Professional Nursing Care at Home",
      description:
        "Our diploma nurses provide medication management, wound dressing, catheter care, NG tube feeding, vital sign monitoring and post-surgical nursing care in the comfort of your home.",
    },
    {
      id: 5,
      icon: <FaHome />,
      title: "Physiotherapy at Home for Faster Recovery",
      description:
        "Recover safely with physiotherapy at home for stroke rehabilitation, arthritis, back pain, neck pain, sports injuries, post-operative recovery and mobility improvement.",
    },
    {
      id: 6,
      icon: <FaUserShield />,
      title: "24/7 Monitoring & Family Support",
      description:
        "Every patient receives continuous supervision from our healthcare team with regular follow-up, family communication and quality monitoring to ensure safe and reliable home healthcare.",
    },
  ];

  const whyChooseSection = {
    badge: "Trusted Home Healthcare Provider",

    title: "Why Families Across Bangladesh Choose HealthCare At Home",

    description:
      "From qualified nurses and experienced caregivers to physiotherapy, doctor home visits and elderly care, we deliver safe, compassionate and professional home healthcare services with 24/7 support and personalized patient care.",
  };
  return (
    <div className="py-10 blog">
      <Helmet>
        {/* <title> Health care at Home Bangladesh</title> */}
        <meta
          name="description"
          content="Get top-quality healthcare caregiver physiotherapy diploma nursing services    to bring healthcare services at your home."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Health Care at Home" />
        <meta
          property="og:description"
          content="  Get top-quality healthcare caregiver physiotherapy diploma nursing services  at your home."
        />
        <meta property="og:url" content="https://hcah.mrg.com.bd/about-us" />
      </Helmet>

      <div
        className="max-w-4xl mx-auto text-center mb-14"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#453364] text-white border border-[#453364]/20 text-sm font-semibold">
          {whyChooseSection.badge}
        </span>

        <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#453364] leading-tight">
          {whyChooseSection.title}
        </h2>

        <p className="mt-6 text-base md:text-lg text-gray-600 leading-8 max-w-3xl mx-auto">
          {whyChooseSection.description}
        </p>

        <div className="w-24 h-1 bg-[#453364] rounded-full mx-auto mt-8"></div>
      </div>
      <div className="min-h-screen hero aboutbg">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="">

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
              {whyChooseUs.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 hover:bg-white hover:shadow-2xl transition-all duration-500"
                >
                  {/* Top Gradient */}

                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#453364] via-[#8b6fc7] to-[#453364]"></div>

                  {/* Icon */}

                  <div className="w-16 h-16 rounded-2xl bg-white/15 group-hover:bg-[#453364] text-white group-hover:text-white flex items-center justify-center text-3xl mb-7 transition duration-300">
                    {item.icon}
                  </div>

                  {/* Title */}

                  <h3 className="text-2xl font-bold text-white group-hover:text-[#453364] leading-snug transition">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 text-gray-200 group-hover:text-gray-600 leading-8 text-[16px] transition">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8 py-5 text-white md:grid-cols-2 lg:grid-cols-2">
              {/* <div className="card">
                <img src={flyer} alt="" />
              </div> */}
              <div className="card">
                <img
                  title="home health care this is the our service "
                  src={flyer2}
                  alt="Our all  Services "
                  loading="lazy"
                />
              </div>
              <div className="card">
                <img
                  src={flyer1}
                  alt="Nursing care Our Services "
                  title="Physio Home   care Our Services"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
