import React from 'react';
import spine from "../../assets/spine.jpg";
import orthopedic from "../../assets/orthopedic.jpg";
import cardiac from "../../assets/cardiac-rehab.jpg";
import stroke from "../../assets/stroke.jpg";

const Recoverymedicalcaregiver = () => {
    return (
        <div>
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
            <p className="poppins-t text-xl text-black mt-5 ">
              Dementia or Alzheimer's disease
            </p>
            <p className="poppins-t text-black text-justify ">
              Alzheimer care is difficult but our qualified MATS know how to
              take care of this common old age disease.
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
            <p className="poppins-t text-xl text-black mt-5 ">Corona Care</p>
            <p className="poppins-t text-black text-justify ">
              With total protection & PPE they take care of covid-19 patients.
              They follow the protocol provided by physician & treat the patient
              with anti covid treatment.
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
              Post surgical care
            </p>
            <p className="poppins-t text-black text-justify ">
              NG tube feeding,Catheter care,Wound care - they do it all. So that
              recovery is assured.
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
              Medical assistants know how to take care of stroke patients.They
              feed the patient,position the patient,monitor the patient &
              overall care of the patients.
            </p>
          </div>
        </div>
      </div> 
        </div>
    );
};

export default Recoverymedicalcaregiver;