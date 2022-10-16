import React from 'react';
import doctor1 from "../../assets/homed.jpg";
import nurse1 from "../../assets/nurse1.png";
import nurse2 from "../../assets/nurse2.png";
import nurse3 from "../../assets/nurse5.png";
import nurse6 from "../../assets/nurse6.png";
const Teamnursing = () => {
    return (
        <div>
            <div>
      <div className="py-10" style={{ backgroundColor: "#453364" }}>
        <div className=" ">
          <h2
            className="text-3xl text-center text-white  font-bold poppins-b sm:text-4xl"
           
          >
            Meet Our Experts Nurses
          </h2>
          <p className=" mt-7  md:text-[20px] lg:text-[27px] poppins-t text-white text-justify px-4">
          Our specially trained nurses are well experienced, highly
professional, and compassionate. We have empowered more than 250
successful recovery stories through our qualified & experienced nurses.
          </p>
        
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 gap-10   items-center justify-items-center  py-12">
        <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" style={{height:"400px"}}
          >
            <figure className="">
              <img src={nurse2} alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px",width:"250px"}} />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Arpona </h2> 
              <p>Diploma Nurse</p>
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
              <img src={nurse1} alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px",width:"250px"}} />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Ritu Akther</h2> 
              <p>Trained Nurse</p>
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
              <img src={nurse3} alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px", width:"250px"}} />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Taniya Akther</h2> 
              <p>Diploma Nurse</p>
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
              <img src={nurse6} alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px",width:"250px"}} />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Rahima Akter</h2> 
              <p>Diploma Nurse</p>
              <p>
              4+ years experienced
              </p>
            </div>
          </div>
          
          
         
         
          
        </div>
      </div>
    </div>
        </div>
    );
};

export default Teamnursing;