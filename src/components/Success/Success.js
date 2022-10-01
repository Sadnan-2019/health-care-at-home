import React from "react";
import { FaTasks } from "react-icons/fa";

const Success = () => {
  return (
    <div style={{ backgroundColor: "#453364" }}>
      <div
        className="grid grid-cols-1 py-10 "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="stats ">
          <div className="stat">
            <div className="stat-figure  " style={{ color: "#453364" }}>
             
            </div>
            <div className="text-[18px] font-bold" style={{ color: "#453364" }}>
              Successful recovery stories
            </div>
            <div className="stat-value  " style={{ color: "#453364" }}>
              2,378+
            </div>
            {/* <div className="stat-desc text-1xl font-bold">
              21% more than last month
            </div> */}
          </div>

          <div className="stat">
            <div className="stat-figure  " style={{ color: "#453364" }}>
           
            </div>
            <div className="text-[18px] font-bold" style={{ color: "#453364" }}>
              Nurses/Medical Assistant on our platform
            </div>
            <div
              className="stat-value "
              style={{ color: "#453364" }}
            >
              900+
            </div>
            {/* <div className="stat-desc text-1xl font-bold">
              21% more than last month
            </div> */}
          </div>

          <div className="stat">
            <div className=" ">
              <div className="avatar  ">
                <div className="w-26  " style={{ color: "#453364" }}>
                  <img
                    src="https://i.ibb.co/Xy0jSNJ/1776932.png"
                    alt=""
                    style={{ color: "#453364" }}
                  />
                </div>
              </div>
            </div>
            <div className="stat-value" style={{ color: "#453364" }}>
              1,000+ Caregivers
            </div>
          
            {/* <div className="stat-desc text-1xl font-bold">
              31 tasks remaining
            </div> */}
          </div>
          <div className="stat">
            <div className="  ">
              <div className="avatar  ">
                <div className="w-26  " style={{ color: "#453364" }}>
                  <img
                    src="https://i.ibb.co/PWfKLvB/physiotherapy-2393500-1994755.png"
                    alt=""
                    style={{ color: "#453364" }}
                  />
                </div>
              </div>
            </div>
            <div className="  text-xl"  >
              <p className=" stat-value" style={{ color: "#453364" }}>2,000+ Physiotherapy</p>
            </div>
            
            {/* <div className="stat-desc text-1xl font-bold">
              31 tasks remaining
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
