import React from "react";

import { FaPhoneVolume } from "react-icons/fa";
import Marque from "../Marque/Marque";
import Review from "../Review/Review";
import Success from "../Success/Success";

import Nursingabout from "./Nursingabout";
import Nursingchoose from "./Nursingchoose";
import Teamnursing from "./Teamnursing";
import "./Nursing.css"
import { Helmet } from "react-helmet-async";
// import "../../../src/components/Blog/Blog.css"  
const Nursing = () => {
  return (
    <div>
        <Helmet>
              <title>Nursing Care at Dhaka</title>
              <meta name="description" content="Get top-quality professionals  healthcare services at home. Book professional doctors & caregivers online." />
              <meta name="keywords" content="healthcare,home care,home nursing care,top caregiver dhaka,physiotheray dhaka, home doctors, medical caregiver" />
              <meta name="robots" content="index, follow" />
              <meta property="og:title" content="Nursing Care at Dhaka" />
              <meta property="og:description" content="Get top-quality healthcare services at home" />
              <meta property="og:image" content="https://hcah.mrg.com.bd/static/media/nurseservice.a7aa8c08eeeb13c8337d.jpg" />
              <meta property="og:url" content="https://hcah.mrg.com.bd" />
              <meta property="og:type" content="website" />.
              <link rel="canonical" href="https://hcah.mrg.com.bd" />
      
      
             
            </Helmet>
      <section
        className="h-auto blog nursing"
         
      >
        <div className="grid grid-cols-1 gap-5 py-10 mx-8 md:py-20 lg:py-24 lg:mx-16 lg:grid-cols-1">
          <div className="order-2 max-w-xl mt-10 text-left md:ml-8 lg:order-1 lg:mt-0">
            
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
              className="flex gap-4 mt-10 text-center"
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
