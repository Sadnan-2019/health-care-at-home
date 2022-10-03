import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    // https://i.ibb.co/w4NStQ6/hosoital-1-removebg-preview.png
    // https://i.ibb.co/sW7BTzT/cancer-removebg-preview.png
    // https://i.ibb.co/s5Qwp2B/cardiac-removebg-preview.png
    <div>

<div className=" md:mx-16 lg:mx-24 mx-8 py-12">
        <h2 className="text-xl text-center   font-bold poppins-b lg:text-4xl  " style={{ color: "#453364" }}>
      Services Provided To The  Patients Coming Home From Leading Hospitals
        </h2>
        <h1
            className="  w-64 h-1 rounded-lg mt-2 mb-4 mx-auto"
            style={{ backgroundColor: "#453364" }}
          ></h1>
      </div>
      <Marquee   gradientColor={false} speed={80} gradient={false} play={true}>
        <div className="  	 	 mx-10">
          <img
            src="https://i.ibb.co/9YWTCqG/logo-1.png"
            alt="Shoes"
            className="  "
          />
        </div>
        <div className="       	  mx-10">
          <img
            src="https://i.ibb.co/T08q5jK/a06d196f971089762aa864990dd933e8.png"
            alt="Shoes"
            className="  w-52    "
          />
        </div>
        <div className="     	 mx-10 ">
          <img
            src="https://i.ibb.co/s5Qwp2B/cardiac-removebg-preview.png"
            alt="Shoes"
            className="      "
          />
        </div>
        <div className="     	 mx-10 ">
          <img
            src="https://i.ibb.co/w4NStQ6/hosoital-1-removebg-preview.png"
            alt="Shoes"
            className="      "
          />
        </div>
        <div className="     	 mx-10 ">
          <img
            src="https://i.ibb.co/sW7BTzT/cancer-removebg-preview.png"
            alt="Shoes"
            className="      "
          />
        </div>
        <div className="      	 mx-10 ">
          <img
            src="https://i.ibb.co/NTsG5YB/gmc-logo.png"
            alt="Shoes"
            className="      "
          />
        </div>
        <div className="     	 mx-10 ">
          <img
            src="https://i.ibb.co/RgKSNTP/cropped-A-320-75px.png"
            alt="Shoes"
            className="      "
          />
        </div>
        <div className=" 	 mx-10     ">
          <img
            src="https://i.ibb.co/8cFFsQz/Logo-2.png"
            alt="Shoes"
            className=" w-52       "
          />
        </div>
        <div className=" 	 mx-10     ">
          <img
            src="https://i.ibb.co/GQ5yLSb/logo.png"
            alt="Shoes"
            className=" w-52       "
          />
        </div>
        <div className=" 	 mx-10     ">
          <img
            src="https://i.ibb.co/ssbNjrL/download-removebg-preview.png"
            alt="Shoes"
            className=" w-52       "
          />
        </div>
        <div className=" 	 mx-10     ">
          <img
            src="https://i.ibb.co/9cBGkLy/logo-3.png"
            alt="Shoes"
            className=" w-52       "
          />
        </div>
        <div className=" 	 mx-10     ">
          <img
            src="https://i.ibb.co/XDWmYfc/logo-4.png"
            alt="Shoes"
            className=" w-52       "
          />
        </div>
        
        <div className=" 	 mx-10     ">
          <img
            src="https://i.ibb.co/wYNRY3n/cropped-cropped-cropped-132100283-101809165182617-8739750313196910175-n-1.png"
            alt="Shoes"
            className=" w-42       "
          />
        </div>
        <div className=" 	 mx-10     ">
          <img
            src="https://i.ibb.co/HKcVXPt/samorita-logo1.png"
            alt="Shoes"
            className=" w-42       "
          />
        </div>
        <div className=" 	 mx-10     ">
          <img
            src="  https://i.ibb.co/9vsHCfB/Social-Media-Logo-Website-Logo-Transparent-280px-X-85px-2.png"
            alt="Shoes"
            className=" w-42       "
          />
        </div>
        <div className=" 	 mx-10     ">
          <img
            src="  https://i.ibb.co/hMPH7rz/16270122020523.png"
            alt="Shoes"
            className=" w-42       "
          />
        </div>
      

      </Marquee>
    </div>
  );
};

export default Marque;
