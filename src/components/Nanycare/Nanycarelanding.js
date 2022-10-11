import React from 'react';
import { FaPhoneVolume } from "react-icons/fa";
import "./Nanycare.css"
const Nanycarelanding = () => {
    return (
        <div>
           <section className="   h-auto nanycare  ">
        <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid lg:grid-cols-1 grid-cols-1 gap-5">
          <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="md:text-[43px] font-bold text-[20px] text-left poppins-b "
              style={{ lineHeight: "120%", color: "#453364" }}
            >
              We have experienced nannies to take care of your loving child
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="max-w-lg mt-7 font-bold   md:text-[25px] poppins-t    "
              style={{ lineHeight: "120%", color: "#453364" }}
            >
              Our compassionate  are here to provide your loved one
              with exceptional support, always ready giving you the peace of
              mind you deserve.
            </p>

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

export default Nanycarelanding;