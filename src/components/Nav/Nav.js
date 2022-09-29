import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FcAlarmClock } from "react-icons/fc";
import { FaPhoneVolume } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";

const Nav = () => {
  return (
   <div className="sticky top-0 z-50 ">

<div className="">
     <div className="grid sm:grid-cols-1 gap-2 lg:grid-cols-3 items-center justify-items-center  " style={{backgroundColor: "#453364" }}>
     <div className="flex items-center     gap-2">
        <div>
          < FaPhoneVolume  className="text-2xl animate-ping	 text-white"/>
        </div>
        <div>
          <p className="text-sm text-white 	"  >
            01619848555
          </p>
          <p className="text-sm  	text-white 	"  >
            info@hcah.mrg.com.bd
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2  ">
        <div>
          <FcAlarmClock className="text-2xl text-white animate-ping	"></FcAlarmClock>
        </div>
        <div>
          <div className="	">
            <p className="text-xs text-white font-bold  	"  >
              24/7days Open
            </p>
      
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 ">
        <div>
 
          <BiLocationPlus className="text-2xl text-white "/>
        </div>
        <div>
          <span className="text-sm text-white  		"  >
            House 11, Road 108, Gulshan 2, Dhaka, Bangladesh. 1212
          </span>
        </div>
      </div>
     </div>
      
      
      
      
    
    </div>
   </div>
  );
};

export default Nav;
