import React from "react";
import spine from "../../assets/spine.jpg";
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
            className="rounded-xl w-15"
            style={{ color: "#453364" }}
          />
          <p className="poppins-t text-xl text-black mt-5 ">Spine Care</p>
          <p className="poppins-t text-black text-justify ">
            Personalized care plans to bring back the lost physical and
            emotional strength
          </p>
        </div>
        <div
          className="rounded-lg card	border-[1px] w-15	 border-solid	p-5"
          style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
        >
          <img
            src={spine}
            alt="Shoes"
            className="rounded-xl w-15"
            style={{ color: "#453364" }}
          />
          <p className="poppins-t text-xl text-black mt-5 ">Orthopedic Care</p>
          <p className="poppins-t text-black text-justify ">
          Restore strength, endurance, flexibility, & mobility and recover from knee/hip surgery
          </p>
        </div>
        <div
          className="rounded-lg card	border-[1px] w-15	 border-solid	p-5"
          style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
        >
          <img
            src={spine}
            alt="Shoes"
            className="rounded-xl w-15"
            style={{ color: "#453364" }}
          />
          <p className="poppins-t text-xl text-black mt-5 ">Spine Care</p>
          <p className="poppins-t text-black text-justify ">
            Personalized care plans to bring back the lost physical and
            emotional strength
          </p>
        </div>
        <div
          className="rounded-lg card	border-[1px] w-15	 border-solid	p-5"
          style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
        >
          <img
            src={spine}
            alt="Shoes"
            className="rounded-xl w-15"
            style={{ color: "#453364" }}
          />
          <p className="poppins-t text-xl text-black mt-5 ">Spine Care</p>
          <p className="poppins-t text-black text-justify ">
            Personalized care plans to bring back the lost physical and
            emotional strength
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
