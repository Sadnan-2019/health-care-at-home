import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FcAlarmClock } from "react-icons/fc";
import { FaPhoneVolume } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  const active = "text-blue-900 mx-1 font-medium border-b-2 border-blue-900 pb-1  " ;
  const normal =
    "  mx-1 hover:text-white-600 font-medium focus:text-gray-700 p-0  " ;

  const navItem = (
    <>
      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/"
        >
          HOME
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/service"
        >
          SERVICE
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/review"
        >
          REVIEW
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/about"
        >ABOUT</NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/contact"
        >
          CONTACT
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/profile"
        >PROFILE</NavLink>
      </li>
      <li className="nav-item p-2">
      <input
                    class="sm:w-mx-xs w-full px-6 py-3 focus:border-red-700 rounded-full shadow-sm"
                    type="email"
                    placeholder="Enter your search"
                  />
      </li>

    
    </>
  );

  return (
    <div className="px-4 md:pl-10  lg:px-24 bg-base-100" >
      {/* Navbar start source code from Daisy UI */}
      <div className="navbar py-4  ">
        {/* Navbar left portion */}
        <div className="">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-500 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link to="/">
            <div className="  flex items-center">
              <img
                className="w-48"
                alt="logo"
                src="https://hcah.mrg.com.bd/medicare.bold-themes.com/surgery/wp-content/uploads/sites/16/2018/03/surgery-logo-white.png"
              />
            </div>
          </Link>
        </div>
        
        <div className="navbar-end flex 	  ">
          
         
        <div className="navbar-start hidden   lg:flex      " >
        <div className="     "> 
         <ul className="menu-horizontal p-0 flex items-center    ">{navItem}</ul>
         
         </div>
        </div>
       
        </div>
      
      </div>
    </div>
  );
};

export default Navbar;
