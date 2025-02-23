import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import { BsWhatsapp } from "react-icons/bs";

import "./Navbar.css";


const Navbar = () => {
  const active =
    "text-white  font-medium border-b-2 border-white-900 pb-1 md:text-white-900 ";
  const normal =
    "   text-white-600 font-medium font-bold focus:text-white p-0 lg:text-white   ";

  const navItem = (
    <>
      <li rel="canonical"  className="p-2 nav-item ">
        <NavLink rel="canonical" 
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/home"
        >
          Home
        </NavLink>
      </li>
      <li className="p-2 nav-item ">
        <NavLink rel="canonical" 
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/nursing"
        >
          Nursing
        </NavLink>
      </li>
      <li className="p-2 nav-item">
        <NavLink rel="canonical" 
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/physiotherapy"
        >
          Physiotherapy
        </NavLink>
      </li>
      <li className="p-2 nav-item">
        <NavLink rel="canonical" 
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/medical-assistant"
        >
          Medical Assistant
        </NavLink>
      </li>
      <li className="p-2 nav-item">
        <NavLink rel="canonical" 
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/medical-caregiver"
        >
          Medical Caregiver
        </NavLink>
      </li>
      <li className="p-2 nav-item">
        <NavLink rel="canonical" 
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/caregiver"
        >
          Caregiver
        </NavLink>
      </li>

      <li className="p-2 nav-item">
        <NavLink rel="canonical" 
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/nanycare"
        >
          Nanycare
        </NavLink>
      </li>
      <li className="p-2 nav-item">
        <NavLink rel="canonical" 
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/companion"
        >
          Companion
        </NavLink>
      </li>
      <li className="p-2 nav-item">
        <NavLink rel="canonical" 
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/medical-equipment"
        >
          Medical Equipment
        </NavLink>
      </li>
      <li className="p-2 nav-item">
        <NavLink rel="canonical" 
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/payment"
        >
          Payment
        </NavLink>
      </li>

      <li
        className="dropdown dropdown-hover hover:border-none"
        style={{ backgroundColor: "#453364" }}
      >
        <div className="flex items-center">
          <label
            tabIndex={0}
            className="m-1 text-white"
            style={{ backgroundColor: "#453364" }}
          >
            More
          </label>
          <svg
            class="fill-current h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </div>

        <ul
          tabIndex={0}
          className="w-24 p-2 shadow dropdown-content menu rounded-box lg:w-52"
          style={{ backgroundColor: "#453364" }}
        >
          <li className="p-2 nav-item">
            <NavLink rel="canonical" 
              className={({ isActive }) =>
                isActive ? `${active}` : `${normal}`
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li className="p-2 nav-item">
            <NavLink rel="canonical" 
              className={({ isActive }) =>
                isActive ? `${active}` : `${normal}`
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="p-2 nav-item">
            <NavLink rel="canonical" 
              className={({ isActive }) =>
                isActive ? `${active}` : `${normal}`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 header blog">
      <Nav />
     
      <div
        className="flex items-center justify-between gap-56 px-4 md:pl-10 lg:px-14 header lg:gap-28 "
        style={{ backgroundColor: "#453364" }}
      >
        {/* Navbar start source code from Daisy UI */}

        <div className="navbar header ">
          {/* Navbar left portion */}
          <div className="">
            <div className="dropdown">
              <label
                tabindex="0"
                className="text-white btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
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
                className="p-2 mt-3 shadow-xl menu menu-compact dropdown-content rounded-box w-52"
                style={{ backgroundColor: "#453364", color: "white" }}
              >
                {navItem}
              </ul>
            </div>
          </div>

          <div className="flex ">
            <div className="hidden navbar-start lg:flex ">
              <div className="">
                <ul className="flex items-center p-0 menu-horizontal ">
                  {navItem}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=" navbar-end">
          <a
            className="bg-green-500 rounded-full btn btn-sm animate-pulse "
            href="https://wa.me/+8801619848555"
            // href="https://wa.me/+8801767564737"
            title="WHATSAPP CHAT"
          >
            {" "}
            <BsWhatsapp></BsWhatsapp>
          </a>

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
