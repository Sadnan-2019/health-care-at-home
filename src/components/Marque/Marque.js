import React from "react";
import Marquee from "react-fast-marquee";
import popular from "../../assets/hospital/popular.png";
import universal from "../../assets/hospital/universal.png";
import labaidcardiac from "../../assets/hospital/labaidcardiac.png";
import labaidspeacial from "../../assets/hospital/labaidspeacial.png";
import labaidcanser from "../../assets/hospital/labaidcanser.png";
import greenlife from "../../assets/hospital/greenlife.png";
import anwarkhan from "../../assets/hospital/anwarkhan.png";
import evercare from "../../assets/hospital/evercare.png";
import united from "../../assets/hospital/united.png";
import ibnesina from "../../assets/hospital/ibnesina.png";
import bangladeshspeacial from "../../assets/hospital/bangladeshspeacial.png";
import impulse from "../../assets/hospital/impulse.png";
import shikdar from "../../assets/hospital/shikdar.png";
import samorita from "../../assets/hospital/samorita.png";
import asgorali from "../../assets/hospital/asgorali.png";
import prime from "../../assets/hospital/prime.png";

const Marque = () => {
  return (
    <div>
      <div className="blog md:mx-16 lg:mx-24 mx-8 py-12">
        <h2 className="text-xl text-center   font-bold poppins-b lg:text-4xl  text-[#453364] ">
          Services Provided To The Patients Coming Home From Leading Hospitals
        </h2>
        <h1 className="  w-64 h-1 rounded-lg mt-2 mb-4 mx-auto bg-[#453364]"></h1>
      </div>
      <Marquee gradientColor={false} speed={80} gradient={false} play={true}>
        <div className="  	 	 mx-10">
          <img
            src={popular}
            alt="Populer Healthcare At Home Bangladesh"
            className="  "
            loading="lazy"
            title="Caregiver  At Home Bangladesh"
          />
        </div>
        <div className="mx-10">
          <img
            src={universal}
            alt="Universal Healthcare At Home Bangladesh"
             title="Nurse  At Home Bangladesh"
            className="  w-52    "
            loading="lazy"
          />
        </div>
        <div className="     	 mx-10 ">
          <img
            src={labaidcardiac}
            alt="Labaid Healthcare At Home Bangladesh"
             title=" Physiotherapy  At Home Bangladesh"
            className="      "
            loading="lazy"
          />
        </div>
        <div className="     	 mx-10 ">
          <img
            src={labaidspeacial}
            alt="Healthcare At Home Bangladesh"
            title=" Stroke Patients Physio At Home"
            className="      "
            loading="lazy"
          />
        </div>
        <div className="     	 mx-10 ">
          <img
            src={labaidcanser}
            alt="Labaid Cancer Healthcare At Home Bangladesh"
            className="      "
            title=" Medical Caregiver At Home Bangladesh"
            loading="lazy"
          />
        </div>
        <div className="      	 mx-10 ">
          <img
            src={greenlife}
            alt="Green Life Healthcare At Home Bangladesh"
            className="      "
            title=" Medical  Nurse Care Dhaka "
            loading="lazy"
          />
        </div>
        <div className="     	 mx-10 ">
          <img
            src={anwarkhan}
            alt="Healthcare At Home Bangladesh"
            className="      "
            loading="lazy"
            title=" Home Physio Care at  Dhaka "
          />
        </div>
        <div className=" 	 mx-10     ">
          <img
            src={evercare}
            alt="Home Caregiver At Home Bangladesh"
            className=" w-52       "
            loading="lazy"
            title=" Home Physio Care at  Dhaka "
          />
        </div>
        <div className=" 	 mx-10     ">
          <img
            src={united}
            alt=" Babysitter  At Home Bangladesh"
            className=" w-52       "
            loading="lazy"
             title=" Home  Companion  Care at  Dhaka "
          />
        </div>
        <div className=" 	 mx-10     ">
          <img
            src={ibnesina}
            alt=" Home Support Caregiver    "
            className=" w-52       "
            loading="lazy"
             title=" Medical Caregiver Home Service Dhaka "
          />
        </div>
        <div className=" 	 mx-10     ">
          <img
            src={bangladeshspeacial}
            alt="Homecare Diploma Nurse Bangladesh"
            className=" w-52       "
            loading="lazy"
            title="  Nursing Home Service Dhaka "
          />
        </div>
        <div className=" 	 mx-10     ">
          <img
            src={impulse}
            alt="Doctor  At Home Bangladesh"
            className=" w-52       "
            loading="lazy"
            title="Consultant Visit  Home Service Dhaka "
          />
        </div>

        <div className=" 	 mx-10     ">
          <img
            src={shikdar}
            alt="Home Care Dhaka"
            className=" w-42       "
            loading="lazy"
            title="Patients  Home Service dhaka "
          />
        </div>
        <div className=" 	 mx-10     ">
          <img
            src={samorita}
            alt="Healthcare At Home Bangladesh"
            className=" w-42       "
            loading="lazy"
            title="Patients Support  at  dhaka "
          />
        </div>
        <div className=" 	 mx-10     ">
          <img
            src={asgorali}
            alt="Home Nanny Support  At Dhaka"
            className=" w-42       "
            loading="lazy"
            title="Stoke   Home Service haka "
          />
        </div>
        <div className=" 	 mx-10     ">
          <img
            src={prime}
            alt="medical home service At Home Bangladesh"
            className=" w-42       "
            loading="lazy"
             title="Stoke  Physio Home Service haka "
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Marque;
