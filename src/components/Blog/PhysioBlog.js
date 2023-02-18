import React from "react";
import cardiac1 from "../../assets/blogcardicac.jpeg";
import doctor2 from "../../assets/biru.jpg";
import doctor3 from "../../assets/ziauddin.jpg";
import doctor4 from "../../assets/anwar.jpg";
import { AiOutlineCaretRight } from "react-icons/ai";
import 'animate.css';


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
            <div
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
                Cut Red meat.                </p>
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

              
            </div>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysioBlog;
