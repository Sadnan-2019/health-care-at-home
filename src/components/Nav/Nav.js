import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FcAlarmClock } from "react-icons/fc";
import { FaPhoneVolume } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";
import HCAHBD from "../../assets/HCAHBD.png"

const Nav = () => {
  return (
   <div className="sticky top-0 z-50 ">

<div className="mx-auto bg-base-100">
     <div className="grid  grid-cols-3 gap-2 lg:grid-cols-3 items-center justify-items-center  " >


<div>


<Link to="/">
            <div className="  flex items-center">
              <img
                className="w-48"
                alt="logo"
                src={HCAHBD}
              />
            </div>
          </Link>
</div>

  <div>
  <div className="flex items-center font-bold    gap-2" style={{color: "#453364" }}>
        <div>
          < FaPhoneVolume  className="text-[10px] lg:text-2xl animate-ping	  "/>
        </div>
        <div>
          <p className="text-[10px] lg:text-sm   	"  >
            01619848555 /
            01779848555
          </p>
          <p className="text-[10px] lg:text-sm	 	"  >
            info@hcah.mrg.com.bd
          </p>
        </div>
      </div>
      
  </div>
      <div>
      <div className="flex items-center gap-2  " style={{color: "#453364" }}>
        <div className="animate-spin">
          <FcAlarmClock className="text-[15px] lg:text-2xl   "></FcAlarmClock>
        </div>
        <div>
          <div className="	">
            <p className="text-[10px] lg:text-sm font-bold  	"  >
              24/7days Open
            </p>
      
          </div>
        </div>
        
      </div>
      <div className="flex gap-2 items-center" style={{color: "#453364" }}>
      <div>
 
 <BiLocationPlus className="text-[15px] lg:text-2xl  animate-spin"/>
</div>
<div>
 <p className="text-[10px] lg:text-sm font-bold 		"  >
   House 11, Road 108, Gulshan 2,<br></br> Dhaka, Bangladesh. 1212
 </p>
</div>
      </div>
      </div>
     
     </div>
      
      
     <div className="grid-col-12 px-10 py-2">
      <div class="  flex  justify-center 	  	  bg-red-500 text-white rounded-lg shadow-md"  >
  <div class="flex">
    <div class="py-1">
      <svg class="fill-current h-6 w-6 text-white mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4z"/>
      </svg>
    </div>
    <div>
      <p class="font-bold">Error</p>
      <p class="text-sm">An error has occurred, please try again later.</p>
    </div>
  </div>
  <button class="text-white font-bold absolute top-0 bottom-0 right-0 px-4 py-3" 
    onclick="this.parentElement.style.display='none'">
    Close
  </button>
</div>
      </div>
      
    
    </div>
   </div>
  );
};

export default Nav;
