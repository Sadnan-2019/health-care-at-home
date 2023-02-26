import React from "react";
// import doctor1 from "../../assets/homed.jpg";
import avater from "../../assets/avater.png";
const Teamcompanionship = () => {
  return (
    <div>
      <div className="py-10 blog" style={{ backgroundColor: "#453364" }}>
        <div className=" ">
          <h2 className="text-3xl text-center text-white  font-bold poppins-b sm:text-4xl">
            Meet Our Expert Nannies
          </h2>
          <p className=" mt-7  md:text-[20px] lg:text-[27px] poppins-t text-white text-justify px-4">
            Our specially trained companionship are well experienced, highly
            professional, and compassionate. We have empowered more than 100
            successful recovery stories through our qualified & experienced
            companionship.
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-10 gap-10  items-center justify-items-center  py-12">
          <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "400px" }}
          >
            <figure className="">
              <img
                src={avater}
                alt="Shoes"
                className="  p-4  "
                style={{
                  height: "250px",
                  borderRadius: "25px",
                  width: "250px",
                }}
              />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Kobir Hawalader</h2>
              <p>Companionship</p>
              <p>2+ years experienced</p>
            </div>
          </div>
          <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "400px" }}
          >
            <figure className="">
              <img
                src={avater}
                alt="Shoes"
                className="  p-4  "
                style={{
                  height: "250px",
                  borderRadius: "25px",
                  width: "250px",
                }}
              />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Nasrin Haque </h2>
              <p>Companionship</p>
              <p>2+ years experienced</p>
            </div>
          </div>
          <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "400px" }}
          >
            <figure className="">
              <img
                src={avater}
                alt="Shoes"
                className="  p-4  "
                style={{
                  height: "250px",
                  borderRadius: "25px",
                  width: "250px",
                }}
              />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Cobi Hossain</h2>
              <p>Companionship</p>
              <p>2+ years experienced</p>
            </div>
          </div>
          <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "400px" }}
          >
            <figure className="">
              <img
                src={avater}
                alt="Shoes"
                className="  p-4  "
                style={{
                  height: "250px",
                  borderRadius: "25px",
                  width: "250px",
                }}
              />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Ismail Rahman</h2>
              <p>Companionship</p>
              <p>2+ years experienced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teamcompanionship;
