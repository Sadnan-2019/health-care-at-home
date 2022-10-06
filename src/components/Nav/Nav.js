import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FcAlarmClock } from "react-icons/fc";
import { FaPhoneVolume } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";

const Nav = () => {
  return (
   <div className="sticky top-0 z-50 ">

<div className="mx-auto bg-base-100">
     <div className="grid sm:grid-cols-2 gap-2 lg:grid-cols-3 items-center justify-items-center  " >


<div>


<Link to="/home">
            <div className="  flex items-center">
              <img
                className="w-48"
                alt="logo"
                src="https://hcah.mrg.com.bd/medicare.bold-themes.com/surgery/wp-content/uploads/sites/16/2018/03/surgery-logo-white.png"
              />
            </div>
          </Link>
</div>

  <div>
  <div className="flex items-center font-bold    gap-2" style={{color: "#453364" }}>
        <div>
          < FaPhoneVolume  className="text-2xl animate-ping	  "/>
        </div>
        <div>
          <p className="text-sm   	"  >
            01619848555
          </p>
          <p className="text-sm  	 	"  >
            info@hcah.mrg.com.bd
          </p>
        </div>
      </div>
      
  </div>
      <div>
      <div className="flex items-center gap-2  " style={{color: "#453364" }}>
        <div className="animate-spin">
          <FcAlarmClock className="text-2xl   "></FcAlarmClock>
        </div>
        <div>
          <div className="	">
            <p className="text-xs  font-bold  	"  >
              24/7days Open
            </p>
      
          </div>
        </div>
        
      </div>
      <div className="flex gap-2 items-center" style={{color: "#453364" }}>
      <div>
 
 <BiLocationPlus className="text-2xl   animate-spin"/>
</div>
<div>
 <p className="text-sm   font-bold 		"  >
   House 11, Road 108, Gulshan 2, Dhaka, Bangladesh. 1212
 </p>
</div>
      </div>
      </div>
     
     </div>
      
      
      
      
    
    </div>
   </div>
  );
};

export default Nav;
