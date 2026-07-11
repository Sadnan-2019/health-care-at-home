import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa";
import "./Caregiver.css"

const Caregiverlanding = () => {
  return (
    <div>
      <section className=" blog  h-auto caregiver  ">
        <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid lg:grid-cols-1 grid-cols-1 gap-5">
          <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="md:text-[43px] font-bold text-[20px] text-left poppins-b "
              style={{ lineHeight: "120%", color: "#453364" }}
            >
              Professional Home Caregiver Service in Dhaka, Bangladesh
            </h1>

            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              className="max-w-lg mt-7 font-bold   md:text-[25px] poppins-t    "
              style={{ lineHeight: "120%", color: "#453364" }}
            >
              Healthcare at Home Bangladesh provides trained caregivers for elderly care, post-surgery recovery, stroke rehabilitation support, bedridden patients, and individuals who need daily assistance at home. Flexible 12-hour and 24-hour caregiver services are available across Dhaka.
            </h2>

            <div className="flex items-center mt-2 font-bold">
              <FaPhoneVolume
                className="lg:text-2xl text-[20px] "
                style={{ color: "#453364" }}
              />
              <span
                className="lg:text-2xl text-[20px] "
                style={{ color: "#453364" }}
              >
                {" "}
                Call Now: 01619848555
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Caregiverlanding;
