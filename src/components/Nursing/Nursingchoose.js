import React from "react";
import rating from "../../assets/nurserating.png";
import consulting from "../../assets/free.png";
import staf from "../../assets/staff.png";

const Nursingchoose = () => {
  return (
    <div>
      <div className="md:py-20 py-10 lg:py-10 lg:mx-16 mx-8 grid-cols-1 lg:grid-cols-1 ">
        <div className="  text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
          <p
            className="lg:text-[43px] md:text-[30px] font-bold text-[26px] text-left poppins-b "
            style={{ lineHeight: "120%", color: "#453364" }}
          >
            Why Choose HCAH for Nursing Services?
          </p>

          <p className=" mt-7  md:text-[20px] lg:text-[27px] poppins-t text-gray-600 text-justify ">
            Your recovery and wellbeing is our pride. We are pioneers of
            handling more than one lakh patients and delivering World Class care
            standards in more than 60 cities across bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-10  items-center justify-items-center py-10">
          <div
            className="card w-92     "
            
          >
            <figure className="px-10 pt-10">
              <img src={rating} alt="Shoes" className="rounded-xl w-44" />
            </figure>
            <div className="card-body items-center text-center ">
              <h2 className="card-title font-bold  ">Highest Customer Rating</h2>
              <p className="">
                Based on 200+ Facebook & Google Reviews and opinion of more than
                150 users, HCAH has the highest customer rating of 4.8/5
              </p>
            </div>
          </div>{" "}
          <div
            className="card w-92     "
            
          >
            <figure className="px-10 pt-10">
              <img  src={consulting} alt="Shoes" className="rounded-xl w-32" style={{color: "#453364" }}/>
            </figure>
            <div className="card-body items-center text-center  ">
              <h2 className="card-title ">Free Doctor Consultation</h2>
              <p>With Nurses at home, you get one free doctor consultation every week</p>
            </div>
          </div>{" "}
          <div
            className="card w-92     "
             
          >
            <figure className="px-10 pt-10">
              <img src={staf} alt="Shoes" className="rounded-xl w-52" />
            </figure>
            <div className="card-body items-center text-center  ">
              <h2 className="card-title ">Experienced & Certified Staff
</h2>
              <p>Our Nurses are regularly trained in accordance with international protocols and can handle patients with special needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nursingchoose;
