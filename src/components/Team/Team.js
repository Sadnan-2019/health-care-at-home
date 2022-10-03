import React from "react";
import doctor1 from "../../assets/homed.jpg";

const Team = () => {
  return (
    <div>
      <div className="py-10" style={{ backgroundColor: "#453364" }}>
        <div className=" ">
          <h2
            className="text-3xl text-center text-white  font-bold poppins-b sm:text-4xl"
           
          >
            Meet Our Experts
          </h2>
          <h1
            className=" w-32 h-1 rounded-lg mt-2 mb-4 mx-auto"
            style={{ backgroundColor: "#453364" }}
          ></h1>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-10 gap-10  items-center justify-items-center  ">
          <div className="card w-92 border    ">
            <figure className="px-10 pt-10">
              <img src={doctor1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title ">Dr. Sunanda Kandiraju</h2>
              <p>Consultant</p>
              <p>15+ years' experience</p>
            

            </div>
          </div>
          <div className="card w-92 border    ">
            <figure className="px-10 pt-10">
              <img src={doctor1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title ">Dr. Sunanda Kandiraju</h2>
              <p>Consultant</p>
              <p>15+ years' experience</p>
            </div>
          </div>
          <div className="card w-92 border    ">
            <figure className="px-10 pt-10">
              <img src={doctor1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title ">Dr. Sunanda Kandiraju</h2>
              <p>Consultant</p>
              <p>15+ years' experience</p>
            </div>
          </div>
          <div className="card w-92 border    ">
            <figure className="px-10 pt-10">
              <img src={doctor1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title ">Dr. Sunanda Kandiraju</h2>
              <p>Consultant</p>
              <p>15+ years' experience</p>
            </div>
          </div>
          <div className="card w-92 border    ">
            <figure className="px-10 pt-10">
              <img src={doctor1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title ">Dr. Sunanda Kandiraju</h2>
              <p>Consultant</p>
              <p>15+ years' experience</p>
            </div>
          </div>
          <div className="card w-92 border    ">
            <figure className="px-10 pt-10">
              <img src={doctor1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title ">Dr. Sunanda Kandiraju</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
         
         
          
        </div>
        <p className="">Multidisciplinary team of 900+ professionals including doctors, nurses, physiotherapists, medical assistant & medical caregiver.</p>
      </div>
    </div>
  );
};

export default Team;
