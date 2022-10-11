import React from "react";

const Asistentabout = () => {
  return (
    <div>
      <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 md:grid-cols-1   lg:grid-cols-2  gap-5">
        <div className="max-w-xl text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
          <p
            className="lg:text-[43px] md:text-[30px] font-bold text-[26px] text-left poppins-b "
            style={{ lineHeight: "120%", color: "#453364" }}
          >
            Medical Assistant for Complete
          </p>
          <p
            className=" lg:text-[43px] md:text-[30px] font-bold text-[26px] text-left poppins-b "
            style={{ lineHeight: "120%", color: "#453364" }}
          >
            Health Support at Home
          </p>

          <p className="max-w-lg mt-7  md:text-[20px] lg:text-[27px] poppins-t text-gray-600 text-justify ">
            Our skilled medical assistant follow clinical protocols as per 
            international standards while delivering the best quality Healthcare
             service at home.Medical assistants are qualified diploma holders. They also
            do nursing-care at home. Apart from grooming the patients they give
            injections, Insert NG-tube, Catheter etc. They regularly check BP,
            Sugar, Oxygen, Pulse & other vital parameters.They know how to take
            care of bed-sore as well .
          </p>
          <br></br>
           
          





        </div>
        <div className="max-w-xl text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
          <div className="grid sm:grid-cols-1 mx-12 md:grid-cols-3 lg:grid-cols-3 gap-5">
            <div
              className="rounded-lg card	border-[1px] w-15	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/827/827313.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
                Turing and repositioning
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/6966/6966523.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
                24/7 personal healthcare
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/4326/4326586.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
                Transfer assistance
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1452/1452259.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
                Catheterization
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/8123/8123627.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
                Dressing wounds
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/8330/8330036.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
                Oxygen support
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2376/2376100.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
                Health records
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2981/2981444.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
                Hygiene maintenance
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/5814/5814794.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
                Medication Reminder
              </p>
            </div>
          </div>
        </div>
        {/* <div className="lg:order-2 order-1  lg:-mt-2">
          <img className="lg:w-[100%] w-[90%] mx-auto" src={Banner} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Asistentabout;
