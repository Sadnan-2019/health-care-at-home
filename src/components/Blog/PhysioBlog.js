import React from "react";
import cardiac1 from "../../assets/blogcardicac.jpeg";
import weightloss from "../../assets/waitloss.png";
import doctor3 from "../../assets/ziauddin.jpg";
import doctor4 from "../../assets/anwar.jpg";
import { BsFacebook } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import "animate.css";
import { Link } from "react-router-dom";

const PhysioBlog = () => {
  return (
    <div>
      <div>
        <div
          className="py-10"
          // style={{ backgroundColor: "#453364" }}
        >
          {/* <div className=" ">
            <h2 className="text-3xl text-center text-white  font-bold poppins-b sm:text-4xl">
              Meet Our Experts Physiotherapist
            </h2>
            <p className=" mt-7  md:text-[15px] lg:text-[27px] poppins-t text-white text-justify px-4">
              Our highly qualified experts devise personalized physiotherapy
              plans for smooth, early, and effective relief from pain.
            </p>
          </div> */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mx-10 gap-10  items-center justify-items-center  py-12">
            {/* <div
              className="card  border  bg-gradient-to-r from-[#486038] to-[#38235D] shadow-xl  text-white   "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              style={{ height: "600px" }}
            >
              <div className="       ">
                <figure className="">
                  <img
                    src={cardiac1}
                    alt="Shoes"
                    className="  p-4  "
                    style={{ height: "250px", borderRadius: "25px" }}
                  />
                </figure>
                <div className="  text-white p-2 ">
                  <h2 className="text-2xl text-center  font-bold">
                    Can You Prevent Sudden Cardiac Arrest?
                  </h2>
                </div>

                <div className="mx-10 flex items-center justify-items-center gap-10 animate__animated animate__backInLeft">
                  <div>
                    <div className="flex items-center justify-start  ">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                       </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Weight Losses.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Straise Management.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Control HTM, DM.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Foods Habit.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        ECG & Angiogram Check Every Year.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Cut Red meat.{" "}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-start  ">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Avoids Smoking, Alchohol.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Check Cholostorel.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Take Baby aspirin every day.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Regular exercise.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Cut Down Saturated fat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div class="card  bg-gradient-to-r from-[#486038] to-[#38235D] shadow-xl  text-white mb-5 mt-12">
              <img
                src={cardiac1}
                alt=""
              />
              <div class="card-body">
                <h2 class="card-title">
                  Sudden Cardiac Death (Sudden Cardiac Arrest)
                </h2>
                <p className="text-justify">
                  Sudden cardiac arrest is an emergency in which your heart
                  suddenly stops beating. An electrical issue makes your heart
                  stop pumping blood. This leaves your cells unable to receive
                  the oxygen they need. Because of the lack of oxygen to your
                  cells, sudden cardiac arrest can turn fatal in just minutes.
                  Survival odds are best when help is immediate
                </p>
                <div className="flex gap-3    mt-5">
                  <BsFacebook
                    className="lg:text-2xl text-[20px] "
                    style={{ color: "white" }}
                  />
                  <RxLinkedinLogo
                    className="lg:text-2xl text-[20px] "
                    style={{ color: "white" }}
                  />
                  <AiFillTwitterCircle
                    className="lg:text-2xl text-[20px] "
                    style={{ color: "white" }}
                  />
                  <FaWhatsappSquare
                    className="lg:text-2xl text-[20px] "
                    style={{ color: "white" }}
                  />
                </div>
                <div className="flex gap-5">
                <div className="py-2      ">
                  <Link to="/blogone">
                    <button
                      htmlFor="my-modal-6"
                      className="btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                      style={{ backgroundColor: "#453364" }}
                    >
                      Symptoms and Causes{" "}
                    </button>
                  </Link>
                </div>
                <div className="py-2       ">
                  <Link to="/blogone">
                    <button
                      htmlFor="my-modal-6"
                      className="btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                      style={{ backgroundColor: "#453364" }}
                    >
                      Diagnosis and Tests{" "}
                    </button>
                  </Link>
                </div>
                <div className="py-2        ">
                  <Link to="/blogone">
                    <button
                      htmlFor="my-modal-6"
                      className="btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                      style={{ backgroundColor: "#453364" }}
                    >
                      Management and Treatment{" "}
                    </button>
                  </Link>
                </div>




               
                </div>
                <div className="flex gap-5">
                <div className="py-2       ">
                  <Link to="/blogone">
                    <button
                      htmlFor="my-modal-6"
                      className="btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                      style={{ backgroundColor: "#453364" }}
                    >
                      Prevention{" "}
                    </button>
                  </Link>
                </div>
                <div className="py-2       ">
                  <Link to="/blogone">
                    <button
                      htmlFor="my-modal-6"
                      className="btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                      style={{ backgroundColor: "#453364" }}
                    >
                      Outlook / Prognosis{" "}
                    </button>
                  </Link>
                </div>
                <div className="py-2       ">
                  <Link to="/blogone">
                    <button
                      htmlFor="my-modal-6"
                      className="btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                      style={{ backgroundColor: "#453364" }}
                    >
                     Living With{" "}
                    </button>
                  </Link>
                </div>




               
                </div>
              </div>
            </div>
            {/* <div
              className="card  border  bg-gradient-to-r from-[#486038] to-[#38235D] shadow-xl  text-white   "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              style={{ height: "600px" }}
            >
              <div className="       ">
                <figure className="">
                  <img
                    src={cardiac1}
                    alt="Shoes"
                    className="  p-4  "
                    style={{ height: "250px", borderRadius: "25px" }}
                  />
                </figure>
                <div className="  text-white p-2 ">
                  <h2 className="text-2xl text-center  font-bold">
                    Sudden Cardiac Death (Sudden Cardiac Arrest)
                  </h2>
                  <p className="px-2 mx-4 text-justify">
                    Sudden cardiac arrest is an emergency in which your heart
                    suddenly stops beating. An electrical issue makes your heart
                    stop pumping blood. This leaves your cells unable to receive
                    the oxygen they need. Because of the lack of oxygen to your
                    cells, sudden cardiac arrest can turn fatal in just minutes.
                    Survival odds are best when help is immediate.
                  </p>
                </div>

                <div className="mx-10 flex items-center justify-items-center gap-10 animate__animated animate__backInLeft">
                  <div>
                    <div className="flex items-center justify-start  ">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                    
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Weight Losses.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Straise Management.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Control HTM, DM.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Foods Habit.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        ECG & Angiogram Check Every Year.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Cut Red meat.{" "}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-start  ">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Avoids Smoking, Alchohol.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Check Cholostorel.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Take Baby aspirin every day.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Regular exercise.
                      </p>
                    </div>
                    <div className="flex items-center justify-start">
                      <span>
                        <AiOutlineCaretRight className="text-2xl text-white-900"></AiOutlineCaretRight>
                      </span>
                      <p className="text-[15px] font-medium text-justify py-2 ml-3">
                        Cut Down Saturated fat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysioBlog;
