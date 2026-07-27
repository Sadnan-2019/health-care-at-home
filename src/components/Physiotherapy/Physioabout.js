import React from "react";
import {
  FaWalking,
  FaChild,
  FaRunning,
  FaLungs,
  FaWheelchair,
  FaPhoneVolume,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";
import {
  MdOutlineAccessibilityNew,
  MdElderly,
  MdHealthAndSafety,
} from "react-icons/md";

import { GiKneeCap, GiShoulderArmor } from "react-icons/gi";
const Physioabout = () => {


 const conditions = [
  {
    icon: <FaWheelchair className="text-5xl text-[#453364]" />,
    title: "Stroke Rehabilitation",
    description:
      "Improve movement, balance and daily independence after stroke.",
  },
  {
    icon: <MdOutlineAccessibilityNew className="text-5xl text-[#453364]" />,
    title: "Back & Neck Pain",
    description:
      "Reduce pain, improve posture and restore healthy movement.",
  },
  {
    icon: <GiKneeCap className="text-5xl text-[#453364]" />,
    title: "Knee Pain",
    description:
      "Improve joint flexibility, strength and walking ability.",
  },
  {
    icon: <MdHealthAndSafety className="text-5xl text-[#453364]" />,
    title: "Post Surgery Recovery",
    description:
      "Safe rehabilitation after orthopedic and general surgery.",
  },
  {
    icon: <FaChild className="text-5xl text-[#453364]" />,
    title: "Pediatric Physiotherapy",
    description:
      "Supporting children's physical development and movement.",
  },
  {
    icon: <MdElderly className="text-5xl text-[#453364]" />,
    title: "Elderly Rehabilitation",
    description:
      "Improve balance, strength and confidence in older adults.",
  },
  {
    icon: <FaLungs className="text-5xl text-[#453364]" />,
    title: "Chest Physiotherapy",
    description:
      "Improve breathing and help clear respiratory secretions.",
  },
  {
    icon: <FaRunning className="text-5xl text-[#453364]" />,
    title: "Sports Injury",
    description:
      "Recover safely and return to sports with confidence.",
  },
  {
    icon: <GiShoulderArmor className="text-5xl text-[#453364]" />,
    title: "Frozen Shoulder & Arthritis",
    description:
      "Reduce stiffness, improve shoulder movement and joint mobility.",
  },
];
  return (
    <div>
      <div className=" blog md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 md:grid-cols-1   lg:grid-cols-2  gap-5">
        <div className="max-w-xl text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">

  {/* Small Badge */}

   <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#453364]/10 text-[#453364] text-sm font-semibold">
              Physiotherapy Home Service in Dhaka
            </span>

            <h2 className="mt-6 text-3xl md:text-5xl font-bold leading-tight text-[#453364]">
              Expert Home Physiotherapy for Pain Relief & Rehabilitation
            </h2>

            <p className="mt-6 text-gray-600 leading-8 text-justify">
              Our <strong>Physiotherapy Home Service in Dhaka</strong> provides
              personalized treatment for patients recovering from injuries,
              surgery, stroke, arthritis, and other mobility problems. Our
              experienced <strong>physiotherapists at home</strong> assess your
              condition and create an evidence-based rehabilitation plan to
              reduce pain, improve movement, and restore independence.
            </p>

            <p className="mt-5 text-gray-600 leading-8 text-justify">
              Whether you need <strong>back pain treatment</strong>,
              <strong> neck pain physiotherapy</strong>,
              <strong> stroke rehabilitation</strong>,
              <strong> sports injury rehabilitation</strong>, or
              <strong> post-surgery physiotherapy</strong>, we deliver
              professional home physiotherapy services throughout Dhaka with
              patient-centered care.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Certified & Experienced Physiotherapists",
                "Personalized Home Rehabilitation Programs",
                "Pain Relief & Mobility Improvement",
                "Stroke, Orthopedic & Neurological Rehabilitation",
                "Home Visits Across Dhaka",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

</div>
        <div className="lg:ml-8 mt-10">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {conditions.map((item, index) => (

      <div
  key={index}
  data-aos="zoom-in"
  data-aos-delay={index * 100}
  className="bg-[#F5F1EA] rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 duration-300 text-center"
>
  <div className="flex justify-center mb-5 text-[#453364]">
    {item.icon}
  </div>

  <h3 className="text-lg font-bold text-[#453364]">
    {item.title}
  </h3>

  <p className="text-sm text-gray-600 leading-6 mt-3">
    {item.description}
  </p>
</div>

    ))}

  </div>

</div>
     
      </div>
    </div>
  );
};

export default Physioabout;
