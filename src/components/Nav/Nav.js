import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FcAlarmClock } from "react-icons/fc";
import { FaPhoneVolume } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";
import HCAHBD from "../../assets/HCAHBD.png"
import { useState } from "react";
import 'animate.css';




const Nav = () => {

  const [addclose, setClose] = useState(true);

  
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
      
      
    {addclose? (
      <div className=" grid-cols-1 lg:grid-cols-1 px-72   animate__animated animate__backInRight      ">
        {/* <h1 class="animate__animated animate__backInRight">An animated element</h1> */}

      <div class="justify-center align-items-center  flex w-72  	 py-8  	bg-red-500   text-white rounded-lg shadow-md"  >
  <div class="flex ">
   
    <div className="px-3">
      <p class="font-bold">Error</p>
      <p class="text-sm">An error has occurred, please try again later.</p>
    </div>
    
    
  <div className="px-3">
  <button type="button" class="text-white font-bold   top-0 bottom-0 right-0  
  
  " onClick={() => {
    setClose(false);
    // setClose(!true);
    // setaddcloseRemove(true)
  }}
     >
    Close
  </button>
  </div>
  </div>
  
</div>

      </div>
    ):null}
      
    
    </div>
   </div>
  );
};

export default Nav;
