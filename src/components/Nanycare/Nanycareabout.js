import React from 'react';

const Nanycareabout = () => {
     return (
          <div>
             <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 md:grid-cols-1   lg:grid-cols-2  gap-5">
        <div className="max-w-xl text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
          <p
            className="lg:text-[43px] md:text-[30px] font-bold text-[26px] text-left poppins-b "
            style={{ lineHeight: "120%", color: "#453364" }}
          >
         Our nannies are expert babysitters to take care of your child.
         
          </p>
          {/* <p
            className=" lg:text-[43px] md:text-[30px] font-bold text-[26px] text-left poppins-b "
            style={{ lineHeight: "120%", color: "#453364" }}
          >
          your baby exactly the way you would do it.
          </p> */}

          <p className="max-w-lg mt-7  md:text-[20px] lg:text-[27px] poppins-t text-gray-600 text-justify ">
           Our babysitters are trained & experienced to take of your child.Apart from
           feeding to grooming, they clean the baby,change diaper,shower the baby
           & play with baby.They are reliable & safe.
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
                src="https://cdn-icons-png.flaticon.com/512/979/979009.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
              Feed the baby
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1459/1459122.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
              Pass good time with baby

              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3034/3034187.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
                Playing with baby
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/4187/4187475.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
            Bathing  Grooming

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
                Clean the baby
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/452/452822.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
           Diaper Change
              </p>
            </div>
            <div
              className="rounded-lg card	border-[1px]	 border-solid	p-5"
              style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2920/2920124.png"
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "#453364" }}
              />
              <p className="poppins-t text-gray-600 text-center">
                Shower   the baby
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
      </div>   
          </div>
     );
};

export default Nanycareabout;