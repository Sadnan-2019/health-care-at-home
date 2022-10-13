import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
import "./Medicalcaregiver.css";
const Medicalcaregiverlanding = () => {
  return (
    <div>
      <section className=" h-auto medicalcaregiver ">
        <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid lg:grid-cols-1 grid-cols-1 gap-5">
          <div className="max-w-xl text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
             
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="lg:text-[43px] font-bold text-[20px] text-left poppins-b "
              style={{ lineHeight: "120%", color: "#453364" }}
            >
                Medical caregivers  provide patients  care  service  at your home
            </p>
            {/* <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="lg:text-[43px] font-bold text-[20px] text-left poppins-b "
              style={{ lineHeight: "120%", color: "#453364" }}
            >
              
            </p> */}

            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="max-w-lg mt-7 font-bold   md:text-[25px] poppins-t    "
              style={{ lineHeight: "120%",color:"#453364" }}
            >
              Our medical caregivers are ready to provide quality service to everyone
              in need of assistance, including elders.  
            </p>
            <div
              className="flex items-center mt-5 font-bold"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <FaPhoneVolume
                className="text-2xl "
                style={{ color: "#453364" }}
              />
              <span className="lg:text-2xl text-[22px] " style={{ color: "#453364" }}>
                {" "}
                Call Now: 01619848555
              </span>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="flex  gap-4 mt-10 text-center"
            >
              {/* <Link
                   className="inline-flex items-center px-8 py-3  border   rounded hover:bg-transparent active:text-primary focus:outline-none focus:ring transition ease-in-out delay-150  text-white hover:text-black"
                   to="/resume-builder/how-to-start" style={{backgroundColor: "#453364" }}
                 >
                   <span className="text-sm font-medium"> Get Started </span>
                   <BsArrowRight className="text-lg ml-2" />
                 </Link> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Medicalcaregiverlanding;
