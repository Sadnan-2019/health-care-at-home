import React from 'react';
// import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import bkash from "../../assets/bkash.png"
import EFT from "../../assets/EFT.webp"
import CASH from "../../assets/CASH.jpg"
import deposit from "../../assets/deposit.jpg"
import 'animate.css';
 

const Payment = () => {
    return (
        <div>
        <h2
        className="text-3xl text-center py-6  font-bold poppins-b sm:text-4xl"
        style={{ color: "#453364" }}
      >
        Our Payment 
      </h2>

      <div className=" grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-4 px-12">
        <div class="card animate__animated animate__backInRight   bg-gradient-to-r from-[#486038] to-[#38235D] shadow-xl  text-white mb-5 mt-12">
          <div class="card-body">
             <img src={bkash} className="w-92 h-32      rounded-md 	" alt='' />
            {/* <div className="flex gap-3    mt-5">
           < BsFacebook  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < RxLinkedinLogo  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < AiFillTwitterCircle  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < FaWhatsappSquare  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
           </div>  */}
           <h2
        className="text-3xl text-center py-6  font-bold poppins-b sm:text-4xl"
        style={{ color: "white" }}
      >
Bkash Merchant Payment      </h2>
          </div>
          
        </div>
        <div class="card animate__animated   animate__bounceInUp  bg-gradient-to-r from-[#486038] to-[#38235D] shadow-xl  text-white mb-5 mt-12">
          <div class="card-body">
             <img src={EFT} className="w-92 h-32  rounded-md	" alt=''/>
             <h2
        className="text-3xl text-center py-6  font-bold poppins-b sm:text-4xl"
        style={{ color: "white" }}
      >
Electronic Fund  Transfer     </h2>
          </div>
          
        </div>
        <div class="card animate__animated animate__backInLeft bg-gradient-to-r from-[#486038] to-[#38235D] shadow-xl  text-white mb-5 mt-12">
          <div class="card-body">
             <img src={CASH} className="w-92 h-32   rounded-md	" alt=''/>
             <h2
        className="text-3xl text-center py-6  font-bold poppins-b sm:text-4xl"
        style={{ color: "white" }}
      >
Cash Payment   </h2>
          </div>
          
        </div>
        <div class="card animate__animated animate__backInLeft bg-gradient-to-r from-[#486038] to-[#38235D] shadow-xl  text-white mb-5 mt-12">
          <div class="card-body">
             <img src={deposit} className="w-92 h-32   rounded-md	" alt=''/>
             <h2
        className="text-3xl text-center py-6  font-bold poppins-b sm:text-4xl"
        style={{ color: "white" }}
      >
Deposit To Account  </h2>
          </div>
          
        </div>
       
      </div>
        </div>
    );
};

export default Payment;