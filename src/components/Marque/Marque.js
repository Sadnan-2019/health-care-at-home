import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    // https://i.ibb.co/w4NStQ6/hosoital-1-removebg-preview.png
    // https://i.ibb.co/sW7BTzT/cancer-removebg-preview.png
    // https://i.ibb.co/s5Qwp2B/cardiac-removebg-preview.png
    <div>
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
      </Marquee>
    </div>
  );
};

export default Marque;
