import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nursingabout = () => {
  return (
    <div>
      <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 md:grid-cols-1   lg:grid-cols-2  gap-5">
        <div className="max-w-xl text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
          <p
            className="lg:text-[43px] md:text-[30px] font-bold text-[26px] text-left poppins-b "
            style={{ lineHeight: "120%", color: "#453364" }}
          >
            Nursing for Complete
          </p>
          <p
            className=" lg:text-[43px] md:text-[30px] font-bold text-[26px] text-left poppins-b "
            style={{ lineHeight: "120%", color: "#453364" }}
          >
            Health Support at Home
          </p>

          <p className="max-w-lg mt-7  md:text-[20px] lg:text-[27px] poppins-t text-gray-600 text-justify ">
            Our Skilled Nurses follow clinical protocols at par with
            International standards while delivering the Best Quality Healthcare
            at Home.
          </p>
        </div>
        <div className="max-w-xl text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
          <div className="grid sm:grid-cols-1 mx-12 md:grid-cols-3 lg:grid-cols-3 gap-5">
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/8587/8587740.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
                Total Nursing Care
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/1225/1225711.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
                IV Cannula insertion
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://i.ibb.co/ZBJyqw7/d4b342eb-a312-4ebe-87d7-20f3f64315f3.jpg"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
                NG-tube insertion
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1452/1452259.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
                Catheterization
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/8123/8123627.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
                Dressing wounds
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/8330/8330036.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
              Oxygen support

              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2376/2376100.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
              Health records
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2981/2981444.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
              Hygiene maintenance

              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/5814/5814794.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
              Medication Reminder

              </p>
            </div>
          </div>
        </div>
        {/* <div className="lg:order-2 order-1  lg:-mt-2">
          <img className="lg:w-[100%] w-[90%] mx-auto" src={Banner} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Nursingabout;
