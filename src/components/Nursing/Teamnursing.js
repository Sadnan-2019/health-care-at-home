import React from 'react';
import doctor1 from "../../assets/homed.jpg";
const Teamnursing = () => {
    return (
        <div>
            <div>
      <div className="py-10" style={{ backgroundColor: "#453364" }}>
        <div className=" ">
          <h2
            className="text-3xl text-center text-white  font-bold poppins-b sm:text-4xl"
           
          >
            Meet Our Experts
          </h2>
        
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-10 gap-10  items-center justify-items-center  py-8">
          <div className="card w-92 border    " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <figure className="px-10 pt-10">
              <img src={doctor1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title ">Dr. Sunanda Kandiraju</h2>
              <p>Consultant</p>
              <p>15+ years' experience</p>
            

            </div>
          </div>
          <div className="card w-92 border    " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <figure className="px-10 pt-10">
              <img src={doctor1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title ">Dr. Sunanda Kandiraju</h2>
              <p>Consultant</p>
              <p>15+ years' experience</p>
            </div>
          </div>
          <div className="card w-92 border    " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <figure className="px-10 pt-10">
              <img src={doctor1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title ">Dr. Sunanda Kandiraju</h2>
              <p>Consultant</p>
              <p>15+ years' experience</p>
            </div>
          </div>
          <div className="card w-92 border    "data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <figure className="px-10 pt-10">
              <img src={doctor1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white ">
              <h2 className="card-title ">Dr. Sunanda Kandiraju</h2>
              <p>Consultant</p>
              <p>15+ years' experience</p>
            </div>
          </div>
          
          
         
         
          
        </div>
      </div>
    </div>
        </div>
    );
};

export default Teamnursing;