import React from "react";
import doctor1 from "../../assets/homed.jpg";
import doctor2 from "../../assets/Dr.-Sarwar-Iqbal.jpg";
import doctor3 from "../../assets/Dhimanbonik.jpg";
import doctor4 from "../../assets/dr.-abu-sayed.jpg";
import doctor5 from "../../assets/lutfor.jpg";
import doctor6 from "../../assets/zakiahossain.jpeg";
import doctor7 from "../../assets/kibria.jpg";

const Team = () => {
  return (
    <div>
      <div className="py-10" style={{ backgroundColor: "#453364" }}>
        <div className=" ">
          <h2 className="text-3xl text-center text-white  font-bold poppins-b sm:text-4xl">
            Meet Our Experts
          </h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-10 gap-10      py-8">
          <div
            className="card  border    "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" style={{height:"350px"}}
          >
            <figure className="">
              <img src={doctor3} alt="Shoes"   className="rounded-2xl p-4  " style={{height:"250px"  ,borderRadius:"25px"}} />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center">Prof. Dr. Dhiman Banik</h2>
              <p>Professor & Senior Consultant Cardiologist</p>
              <p>
                MBBS, D-Card, MD (Card.), Associate Fellow-American College of
                Cardiology
              </p>
            </div>
          </div>
          <div
            className="card w-92 border    "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <figure className="px-10 pt-10">
              <img src={doctor2} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title ">Dr Sarwar Iqbal</h2>
              {/* <p>Consultant</p> */}
              <p>
                MBBS, MD(Nephrology) SPecialist in Kidney Diseases,Professor &
                Head,Dept. of Nephrology,BIRDEM Hospital & Ibrahim Medical
                College.
              </p>
            </div>
          </div>
          <div
            className="card w-92 border    "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <figure className="px-10 pt-10">
              <img src={doctor4} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title ">Dr.Mohammad Abu Sayeed</h2>
              <p>
                Qualification: MBBS, MS (NEUROSURGERY) Designation: Associate
                Professor and Head. Department: NEUROSURGERY Expertise:
                Specialist in Brain & Spine Surgeon.
              </p>
            </div>
          </div>
          <div
            className="card w-92 border    "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <figure className="px-10 pt-10">
              <img src={doctor5} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title ">Dr. Lutfor Rahman</h2>
              <p>Speciality MBBS, MS (CTS) Chief Cardiac Surgeon</p>
              {/* <p>15+ years' experience</p> */}
            </div>
          </div>
          <div
            className="card w-92 border    "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <figure className="px-10 pt-10">
              <img src={doctor6} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title ">Dr. Zakia Hossain</h2>
              <p>MD is an Internal Medicine Specialist in Woodside</p>
              
            </div>
          </div>
          <div
            className="card w-92 border    "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <figure className="px-10 pt-10">
              <img src={doctor7} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title ">PROF. DR. S. M. G. KIBRIA</h2>
              <p>FRCS (England), FRCS (Glasgow), FRCS (Edinburgh), FRCS (General), MSc (Leeds), MBBS (DMC)</p>
            </div>
          </div>
        </div>
        <p className="text-white text-3xl text-center py-8">
          Multidisciplinary team of 900+ professionals including doctors,
          nurses, physiotherapists, medical assistant & medical caregiver.
        </p>
      </div>
    </div>
  );
};

export default Team;
