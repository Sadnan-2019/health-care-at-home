import React from "react";
import babyfeed from "../../assets/nanysrecovery.jpg";
// import orthopedic from "../../assets/orthopedic.jpg";
import grooming from "../../assets/grooming.jpg";
import feeding from "../../assets/feeding.jpg";
const Recoverynany = () => {
  return (
    <div>
      <div className="py-12">
        <div className=" md:py-20 py-10 lg:py-10 lg:mx-16 mx-8 grid-cols-1 lg:grid-cols-1 text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
          <p
            className="lg:text-[43px] md:text-[30px] font-bold text-[26px] text-left poppins-b "
            style={{ lineHeight: "120%", color: "#453364" }}
          >
            Recovery Programs
          </p>

          <p className=" mt-7  md:text-[20px] lg:text-[27px] poppins-t text-gray-600 text-justify ">
            Every patient is unique. So is every care journey. But our process &
            quality are always consistent.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 mx-12 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            className="rounded-lg card	border-[1px] w-15	 border-solid	p-5"
            style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
          >
            <img
              src={babyfeed}
              alt="Shoes"
              className="rounded-xl w-15 h-32"
              style={{ color: "#453364" }}
            />
            <p className="poppins-t text-xl text-black mt-5 ">
              Feeding the baby
            </p>
            <p className="poppins-t text-black text-justify ">
              The nannies feeds the baby orally or with bottle. They do not
              forget to burb the baby after each feeding.They give semisolid
              food with some vegetables.
            </p>
          </div>
          <div
            className="rounded-lg card	border-[1px] w-15	 border-solid	p-5"
            style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
          >
            <img
              src={grooming}
              alt="Shoes"
              className="rounded-xl w-15 h-32"
              style={{ color: "#453364" }}
            />
            <p className="poppins-t text-xl text-black mt-5 ">
              Grooming the baby
            </p>
            <p className="poppins-t text-black text-justify ">
              Fixing the hair,nibbling the nails,sponging & bathing.Maintain
              the tooth hygiene.
            </p>
          </div>
          <div
            className="rounded-lg card	border-[1px] w-15	 border-solid	p-5"
            style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
          >
            <img
              src="https://i.ibb.co/56NQTxh/urine.jpg"
              alt="Shoes"
              className="rounded-xl h-32 w-15"
              style={{ color: "#453364" }}
            />
            <p className="poppins-t text-xl text-black mt-5 ">Sleeping schedule</p>
            <p className="poppins-t text-black text-justify ">
              Babies must  sleep at least 12h a day.Our nannies make sure of that.
              New research shows baby should sleep on chest for some time of the day.
              This is important for babies growth.
            </p>
          </div>
          <div
            className="rounded-lg card	border-[1px] w-15	 border-solid	p-5"
            style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}
          >
            <img
              src={babyfeed}
              alt="Shoes"
              className="rounded-xl w-15 h-32"
              style={{ color: "#453364" }}
            />
            <p className="poppins-t text-xl text-black mt-5 ">Diaper Change  </p>
            <p className="poppins-t text-black text-justify ">
              Our babysitter will change diapers & clean the baby.They also 
              sponge & give bath to the baby.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recoverynany;
