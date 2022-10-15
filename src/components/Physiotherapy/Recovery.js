import React from "react";
import spine from "../../assets/spine.jpg";
import orthopedic from "../../assets/orthopedic.jpg";
import cardiac from "../../assets/cardiac-rehab.jpg";
import stroke from "../../assets/stroke.jpg";
// import spine from "../../assets/spine.jpg"
// import doctor1 from "../../assets/homed.jpg";

const Recovery = () => {
  return (
    <div className="py-12">
      <div className=" md:py-20 py-10 lg:py-10 lg:mx-16 mx-8 grid-cols-1 lg:grid-cols-1 text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
        <p
          className="lg:text-[43px] md:text-[30px] font-bold text-[26px] text-left poppins-b "
          style={{ lineHeight: "120%", color: "#453364" }}
        >
          Recovery Programs
        </p>

        <p className=" mt-7  md:text-[20px] lg:text-[27px] poppins-t text-gray-600 text-justify ">
          Every patient is unique. So is every care journey. But our process &
          quality are always consistent.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 mx-12 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          className="rounded-lg card	border-[1px] w-15	 border-solid	p-5"
          style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
        >
          <img
            src={spine}
            alt="Shoes"
            className="rounded-xl w-15 h-32"
            style={{ color: "#453364" }}
          />
          <p className="poppins-t text-xl text-black mt-5 ">Spine Care</p>
          <p className="poppins-t text-black text-justify ">
            Range of motion (ROM) exercises involve moving the joints through
            their entire range of motion. ... Stretches. ... Aerobic Exercises.
            ... Strengthening Exercises. ... Gait Training. ... At-Home
            Physiotherapy.
          </p>
        </div>
        <div
          className="rounded-lg card	border-[1px] w-15	 border-solid	p-5"
          style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
        >
          <img
            src={orthopedic}
            alt="Shoes"
            className="rounded-xl w-15 h-32"
            style={{ color: "#453364" }}
          />
          <p className="poppins-t text-xl text-black mt-5 ">Orthopedic Care</p>
          <p className="poppins-t text-black text-justify ">
            Orthopedic Physiotherapy is a medical practice that specifically
            focuses on the correction of deformities or functional impairments
            to the skeletal system, particularly the extremities and the spine
            or associated structures like muscles and ligaments. Essentially,
            they focus on the musculoskeletal system.
          </p>
        </div>
        <div
          className="rounded-lg card	border-[1px] w-15	 border-solid	p-5"
          style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
        >
          <img
            src={cardiac}
            alt="Shoes"
            className="rounded-xl h-32 w-15"
            style={{ color: "#453364" }}
          />
          <p className="poppins-t text-xl text-black mt-5 ">
            Chest physiotherapy
          </p>
          <p className="poppins-t text-black text-justify ">
            Chest physiotherapy is a broad term used in research that
            incorporates physiotherapy treatment techniques that address the
            removal of secretion and improve airway clearance thereby help to
            improve respiratory efficiency.Chest physiotherapy is the term for a
            group of treatments designed to eliminate secretions, thus helping
            to decrease work of breathing, promote the expansion of the lungs,
            and prevent the lungs from collapse.
          </p>
        </div>
        <div
          className="rounded-lg card	border-[1px] w-15	 border-solid	p-5"
          style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
        >
          <img
            src={stroke}
            alt="Shoes"
            className="rounded-xl w-15 h-32"
            style={{ color: "#453364" }}
          />
          <p className="poppins-t text-xl text-black mt-5 ">Stroke Care</p>
          <p className="poppins-t text-black text-justify ">
            Exercise should be a main component of PT at home after a stroke.
            Exercise can help improve range of motion, strength, coordination,
            and balance. Your PT may perform exercises during your home-care
            sessions. They may also prescribe a home exercise program for you to
            do independently
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
