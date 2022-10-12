import React from 'react';
import doctor1 from "../../assets/homed.jpg";
import mats1 from "../../assets/mats1.png";
import mats2 from "../../assets/mats2.png";
import mats3 from "../../assets/mats3.png";
import mats4 from "../../assets/mats4.png";

const Teamassistant = () => {
    return (
        <div>
            <div className="py-10" style={{ backgroundColor: "#453364" }}>
        <div className=" ">
          <h2
            className="text-3xl text-center text-white  font-bold poppins-b sm:text-4xl"
           
          >
             Meet Our Expert Medical Assistants
          </h2>
          <p className=" mt-7  md:text-[20px] lg:text-[27px] poppins-t text-white text-justify px-4">
          Our specially trained medical assistant are well experienced, highly
professional, and compassionate. We have empowered more than 250
successful recovery stories through our qualified & experienced medical assistant.
          </p>
        
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-10 gap-10  items-center justify-items-center  py-12">
        <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" style={{height:"400px"}}
          >
            <figure className="">
              <img src={mats1} alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px",width:"250px"}} />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Nurun Nahar Akter</h2> 
              <p>Diploma Medical Assistant</p>
              <p>
              2+ years experienced
              </p>
            </div>
          </div>
        <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" style={{height:"400px"}}
          >
            <figure className="">
              <img src={mats2} alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px",width:"250px"}} />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Shamsun Nahar</h2> 
              <p>Diploma Medical Assistant</p>
              <p>
              3+ years experienced
              </p>
            </div>
          </div>
        <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" style={{height:"400px"}}
          >
            <figure className="">
              <img src={mats3} alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px",width:"250px"}} />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Musfiqur Rahman</h2> 
              <p>Diploma Medical Assistant</p>
              <p>
              4+ years experienced
              </p>
            </div>
          </div>
        <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" style={{height:"400px"}}
          >
            <figure className="">
              <img src={mats4} alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px",width:"250px"}} />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Al Amin</h2> 
              <p>Diploma Medical Assistant</p>
              <p>
              4+ years experienced
              </p>
            </div>
          </div>
           
          
          
         
         
          
        </div>
      </div>
        </div>
    );
};

export default Teamassistant;