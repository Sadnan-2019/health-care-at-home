import React from "react";

import { FaPhoneVolume } from "react-icons/fa";
import Marque from "../Marque/Marque";
import Review from "../Review/Review";
import Success from "../Success/Success";

import Nursingabout from "./Nursingabout";
import Nursingchoose from "./Nursingchoose";
import Teamnursing from "./Teamnursing";
import "./Nursing.css"
import "../../../src/components/Blog/Blog.css"  
const Nursing = () => {
  return (
    <div>
      <section
        className="  h-auto blog nursing "
         
      >
        <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid lg:grid-cols-1 grid-cols-1 gap-5">
          <div className="max-w-xl text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
            
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="md:text-[43px] font-bold text-[20px] text-left poppins-b "
              style={{ lineHeight: "120%", color: "#453364" }}
            >
              Diploma Nursing Services at Home
            </p>
        

           
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="max-w-lg mt-7 font-bold   md:text-[25px] poppins-t text-left lg:text-justify "
              style={{ lineHeight: "120%", color: "#453364" }}
            >
              Qualified and experienced diploma nurses to help with daily
              activities and vitals signs monitoring at home.
            </p>
            <div
              className="flex items-center mt-5 font-bold"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <FaPhoneVolume
                className="text-2xl "
                style={{ color: "#453364" }}
              />
              <span className="lg:text-2xl text-[20px] " style={{ color: "#453364" }}>
                {" "}
                Call Now: 01619848555
              </span>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="flex  gap-4 mt-10 text-center"
            >
             
            </div>
          </div>
        </div>
      </section>

      <Nursingabout  ></Nursingabout>
      <Nursingchoose></Nursingchoose>
      <Review></Review>
      <Success></Success>
      <Marque></Marque>
      <Teamnursing></Teamnursing>
    </div>
  );
};

export default Nursing;
