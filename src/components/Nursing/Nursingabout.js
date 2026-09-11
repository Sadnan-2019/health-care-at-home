import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa";
import { Link } from "react-router-dom";
// import "../../../src/components/Blog/Blog.css"
const Nursingabout = () => {
  return (
    <div>
      <section className="">
        <div className="blog md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Headings, Descriptions & Complete Tag Structure */}
          <div className="max-w-xl text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                Expert Clinical Support
              </span>
              <h2
                className="lg:text-[43px] md:text-[30px] font-bold text-[26px] text-left poppins-b mt-3"
                style={{ lineHeight: "120%", color: "#453364" }}
              >
                Professional Nursing Care at Home in Dhaka
              </h2>
            </div>

            <p className="max-w-lg mt-4 md:text-[18px] lg:text-[20px] poppins-t text-gray-600 text-justify">
              Our skilled nurses follow rigorous clinical protocols at par with
              international standards while delivering the best quality
              healthcare at home. Our professional{" "}
              <strong className="font-semibold text-gray-800">
                home nursing services in Dhaka
              </strong>{" "}
              ensure comprehensive support from clinical procedures to recovery
              care helping patients heal safely in familiar surroundings.
            </p>

            <div className="mt-6 space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-[#453364] text-lg mb-1">
                  Clinical Nursing Support
                </h3>
                <p className="text-sm text-gray-600 text-justify">
                  Our nurses handle medication administration, vital signs
                  monitoring, blood glucose testing, IV/IM medication support,
                  and oxygen support.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#453364] text-lg mb-1">
                  Tube, Catheter & Specialized Care
                </h3>
                <p className="text-sm text-gray-600 text-justify">
                  Expert handling of NG tube insertion and feeding, professional
                  catheter care, and tracheostomy care.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#453364] text-lg mb-1">
                  Wound & Recovery Care
                </h3>
                <p className="text-sm text-gray-600 text-justify">
                  Dedicated wound dressing, bed sore care, and post-operative
                  nursing support to facilitate smooth recoveries.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#453364] text-lg mb-1">
                  Personal & Hygiene Support
                </h3>
                <p className="text-sm text-gray-600 text-justify">
                  Compassionate bathing and sponging, hygiene maintenance,
                  diaper changing, and daily patient assistance.
                </p>
              </div>
            </div>

            <br />

            <div className="max-w-lg md:text-[20px] lg:text-[20px] poppins-t text-gray-600 text-justify">
              <ul className="space-y-2">
                <li>Perform glucose test using Glucometer</li>
                <li>Tracheostomy tube care</li>
                <li>Provide oxygen inhalation</li>
                <li>Change diaper & clean the patients</li>
                <li>Do bed sore care</li>
                <li>Bathing & sponging the patient</li>
                <li>Measure vital signs</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="max-w-xl text-left md:ml-8 lg:order-2 order-1 mt-10 lg:mt-0">
            <div className="grid sm:grid-cols-1 mx-12 md:grid-cols-3 lg:grid-cols-3 gap-5">
              <div
                className="rounded-lg card border-[1px] border-solid p-5 flex flex-col items-center justify-center shadow-sm"
                style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/8587/8587740.png"
                  alt="Total Nursing Care"
                  className="rounded-xl w-12 h-12 object-contain mb-3"
                />
                <p className="poppins-t text-gray-700 font-medium text-center text-sm">
                  Total Nursing Care
                </p>
              </div>

              <div
                className="rounded-lg card border-[1px] border-solid p-5 flex flex-col items-center justify-center shadow-sm"
                style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1225/1225711.png"
                  alt="IV Cannula insertion"
                  className="rounded-xl w-12 h-12 object-contain mb-3"
                />
                <p className="poppins-t text-gray-700 font-medium text-center text-sm">
                  IV Cannula insertion
                </p>
              </div>

              <div
                className="rounded-lg card border-[1px] border-solid p-5 flex flex-col items-center justify-center shadow-sm"
                style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
              >
                <img
                  src="https://i.ibb.co/ZBJyqw7/d4b342eb-a312-4ebe-87d7-20f3f64315f3.jpg"
                  alt="NG-tube insertion"
                  className="rounded-xl w-12 h-12 object-cover mb-3"
                />
                <p className="poppins-t text-gray-700 font-medium text-center text-sm">
                  NG-tube insertion
                </p>
              </div>

              <div
                className="rounded-lg card border-[1px] border-solid p-5 flex flex-col items-center justify-center shadow-sm"
                style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1452/1452259.png"
                  alt="Catheterization"
                  className="rounded-xl w-12 h-12 object-contain mb-3"
                />
                <p className="poppins-t text-gray-700 font-medium text-center text-sm">
                  Catheterization
                </p>
              </div>

              <div
                className="rounded-lg card border-[1px] border-solid p-5 flex flex-col items-center justify-center shadow-sm"
                style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/8123/8123627.png"
                  alt="Dressing wounds"
                  className="rounded-xl w-12 h-12 object-contain mb-3"
                />
                <p className="poppins-t text-gray-700 font-medium text-center text-sm">
                  Dressing wounds
                </p>
              </div>

              <div
                className="rounded-lg card border-[1px] border-solid p-5 flex flex-col items-center justify-center shadow-sm"
                style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/8330/8330036.png"
                  alt="Oxygen support"
                  className="rounded-xl w-12 h-12 object-contain mb-3"
                />
                <p className="poppins-t text-gray-700 font-medium text-center text-sm">
                  Oxygen support
                </p>
              </div>

              <div
                className="rounded-lg card border-[1px] border-solid p-5 flex flex-col items-center justify-center shadow-sm"
                style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2376/2376100.png"
                  alt="Health records"
                  className="rounded-xl w-12 h-12 object-contain mb-3"
                />
                <p className="poppins-t text-gray-700 font-medium text-center text-sm">
                  Health records
                </p>
              </div>

              <div
                className="rounded-lg card border-[1px] border-solid p-5 flex flex-col items-center justify-center shadow-sm"
                style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2981/2981444.png"
                  alt="Hygiene maintenance"
                  className="rounded-xl w-12 h-12 object-contain mb-3"
                />
                <p className="poppins-t text-gray-700 font-medium text-center text-sm">
                  Hygiene maintenance
                </p>
              </div>

              <div
                className="rounded-lg card border-[1px] border-solid p-5 flex flex-col items-center justify-center shadow-sm"
                style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5814/5814794.png"
                  alt="Medication Reminder"
                  className="rounded-xl w-12 h-12 object-contain mb-3"
                />
                <p className="poppins-t text-gray-700 font-medium text-center text-sm">
                  Medication Reminder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nursingabout;
