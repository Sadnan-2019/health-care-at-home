import React from "react";
import {
  FaWalking,
  FaChild,
  FaRunning,
  FaLungs,
  FaWheelchair,
} from "react-icons/fa";
import {
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

  <div
    data-aos="fade-up"
    className="inline-flex items-center px-4 py-2 rounded-full bg-[#453364]/10 text-[#453364] font-semibold text-sm mb-5"
  >
    Home Physiotherapy Services in Dhaka
  </div>

  {/* H2 */}

  <h2
    data-aos="fade-up"
    data-aos-delay="100"
    className="text-[28px] md:text-[38px] lg:text-[45px] font-bold leading-tight text-[#453364]"
  >
    Home Physiotherapy for
    <br />
    Pain Relief & Rehabilitation
  </h2>

  {/* Paragraph */}

  <p
    data-aos="fade-up"
    data-aos-delay="200"
    className="mt-6 text-gray-600 leading-8 text-[17px] text-justify"
  >
    Our <strong>home physiotherapy service in Dhaka</strong> helps patients
    recover safely and comfortably without travelling to a clinic.
    Experienced physiotherapists assess your condition, create a
    personalized treatment plan, and provide evidence-based rehabilitation
    using therapeutic exercises, manual therapy, stretching techniques,
    mobility training, and modern physiotherapy equipment. Whether you are
    recovering from a stroke, surgery, sports injury, or managing chronic
    pain, we are committed to improving your movement, reducing pain, and
    restoring independence in the comfort of your home.
  </p>

  {/* Quick Benefits */}

  <div
    data-aos="fade-up"
    data-aos-delay="300"
    className="mt-8 space-y-3"
  >

    <div className="flex items-center gap-3">

      <FaCheckCircle className="text-green-600 flex-shrink-0" />

      <span className="text-gray-700">
        Personalized treatment plans for every patient
      </span>

    </div>

    <div className="flex items-center gap-3">

      <FaCheckCircle className="text-green-600 flex-shrink-0" />

      <span className="text-gray-700">
        Effective pain relief and mobility improvement
      </span>

    </div>

    <div className="flex items-center gap-3">

      <FaCheckCircle className="text-green-600 flex-shrink-0" />

      <span className="text-gray-700">
        Professional home visits across Dhaka
      </span>

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

        <img
          src={item.icon}
          alt={item.title}
          className="w-16 h-16 mx-auto mb-5"
        />

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
