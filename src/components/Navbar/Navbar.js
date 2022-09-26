import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FcAlarmClock } from "react-icons/fc";
import { FaPhoneVolume } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  const active = "text-white mx-1 font-medium border-b-2 border-white-600 pb-1";
  const normal =
    "text-white mx-1 hover:text-white-600 font-medium focus:text-gray-700 p-0";

  const navItem = (
    <>
      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/home"
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
          to="/cvTemplate"
        >
          ABOUT
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/resumeTemplate"
        >
          CONTACT
        </NavLink>
      </li>

      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/quiz"
        ></NavLink>
      </li>
    </>
  );

  return (
    <div className="px-4 md:pl-10  lg:px-24 bg-green-500" >
      {/* Navbar start source code from Daisy UI */}
      <div className="navbar py-4">
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
        {/* End Navbar left Portion */}

        {/* Navbar center portion */}
        <div className="navbar-start hidden ml-8 lg:flex">
          <ul className="menu-horizontal p-0 flex items-center">{navItem}</ul>
        </div>
        {/* End Navbar center portion */}

        {/* Navbar end portion */}
        <div className="navbar-end">
          
          <div className="flex items-center gap-2 mr-9">
            <div>
              <FaPhoneVolume />
            </div>
            <div>
              <p className="text-sm text-slate-200		">01779-848666</p>
              <p className="text-sm text-slate-200		">info@hcah.mrg.com.bd</p>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <div>
              <FcAlarmClock></FcAlarmClock>
            </div>
            <div>
            <div className="	">
              <p className="text-xs text-slate-200	 	">24/7days Open</p>
              {/* <p className="text-sm text-slate-200		">24h 7d Care provides</p> */}
            </div>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-6">
            <div>
              {/* <FcAlarmClock></FcAlarmClock> */}
              <BiLocationPlus />
            </div>
            <div>
              <span className="text-sm text-slate-200		">House 11, Road 108, Gulshan 2, Dhaka, Bangladesh. 1212</span>
              
            </div>
          </div>

          {/* <div className="dropdown dropdown-end ml-2"></div> */}
        </div>
        {/* End navbar end portion */}
      </div>
    </div>
  );
};

export default Navbar;
