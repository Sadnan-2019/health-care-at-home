import React from "react";
import doctor1 from "../../assets/amjadhossain.jpg";
import doctor2 from "../../assets/biru.jpg";
import doctor3 from "../../assets/ziauddin.jpg";
import doctor4 from "../../assets/anwar.jpg";
const Teamphysio = () => {
  return (
    <div>
      <div>
        <div className="py-10" style={{ backgroundColor: "#453364" }}>
          <div className=" ">
            <h2 className="text-3xl text-center text-white  font-bold poppins-b sm:text-4xl">
              Meet Our Experts Physiotherapist
            </h2>
            <p className=" mt-7  md:text-[20px] lg:text-[27px] poppins-t text-white text-justify px-4">
              Our highly qualified experts devise personalized physiotherapy
              plans for smooth, early, and effective relief from pain.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-10 gap-10  items-center justify-items-center  py-12">
            <div
              className="card w-92 border    "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <figure className="px-10 pt-10">
                <img src={doctor1} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center text-white ">
                <h2 className="card-title ">Professor Dr. M. Amjad Hossain</h2>
                <p>
                  MS (Ortho), AO Fellow (Germany) Hand Reconstruction (Madras)
                  Trained in Hip & Knee Surgery (USA, India)
                  Hospital Chief Consultant & Head Dept. of Orthopaedic Surgery
                  Labaid Specialized Hospital, Dhaka.
                </p>
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
                <img src={doctor2} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center text-white ">
                <h2 className="card-title ">
                  Prof. Dr. Abu Zaffar Chowdhury (Biru){" "}
                </h2>
                <p>Orthopedics, Arthroscopy, Arthroplasty & Trauma Surgeon</p>
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
                <img src={doctor3} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center text-white ">
                <h2 className="card-title ">Dr. Md. Zia Uddin</h2>
                <p>
                  MBBS, D-Ortho, MS (Ortho Surgery) Bone & Joint Specialist &
                  Spine Surgeon Ex. Consultant, Shahid Sohrawardy Hospital Sr.
                  Consultant, Labaid Specialized Hospital
                </p>
                <p>15+ years' experience</p>
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
                <h2 className="card-title ">Prof. Dr. Syed Anwaruzzaman</h2>
                <p>
                  MBBS (CMC), MS (ORTHO) Orthopedic Specialist & Trauma Surgeon
                  Cumilla Medical College & Hospital
                </p>
                <p>15+ years' experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teamphysio;
