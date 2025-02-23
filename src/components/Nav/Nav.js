import React from "react";
import { Link,   } from "react-router-dom";
 
import schs from "../../assets/schs.png";
import { FcAlarmClock } from "react-icons/fc";
import { FaPhoneVolume } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";
import HCAHBD from "../../assets/HCAHBD.png";
 
import "animate.css";
import "animate.css";

const Nav = () => {
  // const [addclose, setClose] = useState(true);

  return (
    <div className="sticky top-0 z-50 blog ">
      <div className="mx-auto bg-base-100">
        <div className="grid items-center grid-cols-2 lg:gap-10 lg:grid-cols-4 justify-items-center">
          <div>
            <Link rel="canonical"   to="/">
              <div className="flex items-center ">
                <img className="w-48" alt="logo" src={HCAHBD} />
              </div>
            </Link>
          </div>

          <div>
            <div
              className="flex items-center gap-2 font-bold"
              style={{ color: "#453364" }}
            >
              <div>
                <FaPhoneVolume className="text-[10px] lg:text-2xl animate-ping	  " />
              </div>
              <div>
                <p className="text-[10px]   font-bold lg:text-xs    bg-clip-text   	">
                  <a href="tel:+01619-848555 " className="">
                    01619848555
                  </a>
                  /
                  <a href="tel:+01779848555 " className="">
                    01779848555
                  </a>
                </p>
                <p className="text-[10px]   font-bold lg:text-xs    bg-clip-text	 	">
                  info@hcah.mrg.com.bd
                </p>
              </div>
            </div>
          </div>
          <div className="mx-3 ">
            <div
              className="flex items-center gap-2 "
              style={{ color: "#453364" }}
            >
              <div className="animate-spin">
                <FcAlarmClock className="text-[15px] lg:text-2xl   "></FcAlarmClock>
              </div>
              <div>
                <div className="">
                  <p className="text-[10px]   font-bold lg:text-xs    bg-clip-text 	">
                    24/7days Open
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex items-center gap-2"
              style={{ color: "#453364" }}
            >
              <div>
                <BiLocationPlus className="text-[15px] lg:text-2xl  animate-spin" />
              </div>
              <div>
                <p className="text-[10px]   font-bold 	 lg:text-xs    bg-clip-text	">
                  House 11, Road 108, Gulshan 2,<br></br> Dhaka, Bangladesh.
                  1212
                </p>
              </div>
            </div>
          </div>
          <div
            className="items-center gap-2 font-bold lg:flex justify-items-center"
            style={{ color: "white" }}
          >
            <div>
              <p className="text-[5px] sm:m-4 lg:text-xs text-transparent  bg-clip-text bg-gradient-to-r from-[#486038] to-[#38235D] shadow-xl  text-white 	">
                Link Organization
              </p>
            </div>
            <div className=" animate__animated animate__backInLeft">
              {/* <a href="https://www.facebook.com/TMCTrishal" target="_blank" ><img src={sub} className="w-10 ml-6 lg:w-12 lg:ml-4" alt=""/></a> */}
              <a  href="https://schs.edu.bd/" target="_blank" rel="noreferrer">
                <img src={schs} className="w-40 lg:w-28" alt="" />
              </a>
              {/* <a href="https://schs.edu.bd/" target="_blank" ><img src={schs} className="w-40 lg:w-28" alt=""/></a> */}
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Nav;
