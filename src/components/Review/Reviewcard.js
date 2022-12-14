import React from 'react';
import { AiFillStar } from "react-icons/ai";

const Reviewcard = () => {
    return (
      
        <div>
          <div className="shadow-md hover:shadow-lg cursor-pointer rounded-md lg:max-w-[360px] md:max-w-xs p-5 bg-white"
          data-aos="fade-up"
            data-aos-duration="3000"  >
        <div className="grid grid-cols-12">
          <img
            className="col-span-3 w-14 rounded-full"
            src="https://placeimg.com/192/192/people"

            alt="user img"
          />
          <div className="col-span-9">
            <h2 className="text-lg poppins-b font-bold">Sadnan</h2>
            <p className="font-semibold">Patients</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="poppins-r">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            accusantium cumque tenetur ratione ea nobis dolore voluptas! Vel,
            ipsam nisi?
          </p>
          <div className="flex justify-start text-lg gap-1 mt-4  "style={{color: "#453364" }}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
      </div>

      
        </div>
     
    );
};

export default Reviewcard;