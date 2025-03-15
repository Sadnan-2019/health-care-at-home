import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import { BsWhatsapp } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const active =
    "text-white font-medium border-b-2 border-white-900 pb-1 md:text-white-900 ";
  const normal =
    "text-white-600 font-medium font-bold focus:text-white p-0 lg:text-white";

  const navItem = (
    <>
      <li rel="canonical" className="p-2 nav-item">
        <NavLink
          rel="canonical"
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/home"
          onClick={toggleDrawer} // Close drawer when a nav item is clicked
        >
          Home
        </NavLink>
      </li>
      <li className="p-2 nav-item" rel="canonical">
        <NavLink
          rel="canonical"
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/nursing"
          onClick={toggleDrawer} // Close drawer when a nav item is clicked
        >
          Nursing
        </NavLink>
      </li>
      <li className="p-2 nav-item" rel="canonical">
        <NavLink
          rel="canonical"
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/physiotherapy"
          onClick={toggleDrawer} // Close drawer when a nav item is clicked
        >
          Physiotherapy
        </NavLink>
      </li>
      <li className="p-2 nav-item" rel="canonical">
        <NavLink
          rel="canonical"
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/medical-assistant"
          onClick={toggleDrawer} // Close drawer when a nav item is clicked
        >
          Medical Assistant
        </NavLink>
      </li>
      <li className="p-2 nav-item" rel="canonical">
        <NavLink
          rel="canonical"
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/medical-caregiver"
          onClick={toggleDrawer} // Close drawer when a nav item is clicked
        >
          Medical Caregiver
        </NavLink>
      </li>
      <li className="p-2 nav-item" rel="canonical">
        <NavLink
          rel="canonical"
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/caregiver"
          onClick={toggleDrawer} // Close drawer when a nav item is clicked
        >
          Caregiver
        </NavLink>
      </li>
      <li className="p-2 nav-item" rel="canonical">
        <NavLink
          rel="canonical"
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/nanycare"
          onClick={toggleDrawer} // Close drawer when a nav item is clicked
        >
          Nanycare
        </NavLink>
      </li>
      <li className="p-2 nav-item" rel="canonical">
        <NavLink
          rel="canonical"
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/companion"
          onClick={toggleDrawer} // Close drawer when a nav item is clicked
        >
          Companion
        </NavLink>
      </li>
      <li className="p-2 nav-item" rel="canonical">
        <NavLink
          rel="canonical"
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/medical-equipment"
          onClick={toggleDrawer} // Close drawer when a nav item is clicked
        >
          Medical Equipment
        </NavLink>
      </li>
      <li className="p-2 nav-item" rel="canonical">
        <NavLink
          rel="canonical"
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/payment"
          onClick={toggleDrawer} // Close drawer when a nav item is clicked
        >
          Payment
        </NavLink>
      </li>

      <li
        className="dropdown dropdown-hover hover:border-none bg-[#453364]"
      >
        <div className="flex items-center">
          <label tabIndex={0} className="m-1 text-white bg-[#453364]">
            More
          </label>
          <svg
            className="w-4 h-4 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="w-24 p-2 shadow dropdown-content menu rounded-box lg:w-52 bg-[#453364]"
        >
          <li className="p-2 nav-item" rel="canonical">
            <NavLink
              rel="canonical"
              className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
              to="/blog"
              onClick={toggleDrawer} // Close drawer when a nav item is clicked
            >
              Blog
            </NavLink>
          </li>
          <li className="p-2 nav-item" rel="canonical">
            <NavLink
              rel="canonical"
              className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
              to="/about"
              onClick={toggleDrawer} // Close drawer when a nav item is clicked
            >
              About
            </NavLink>
          </li>
          <li className="p-2 nav-item" rel="canonical">
            <NavLink
              rel="canonical"
              className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
              to="/contact"
              onClick={toggleDrawer} // Close drawer when a nav item is clicked
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
        className="flex items-center justify-between gap-56 px-4 md:pl-10 lg:px-14 header lg:gap-28 bg-[#453364]"
      >
        <div className="navbar header">
          <div className="flex lg:hidden">
            <button onClick={toggleDrawer} className="text-white btn btn-ghost">
              {isOpen ? <IoClose className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
            <div
              className={`fixed top-0 left-0 w-64 h-full bg-gray-00 text-white transform transition-transform z-50 nav-drawer ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
              style={{ transitionDuration: "300ms" }}
            >
              <button onClick={toggleDrawer} className="absolute top-4 right-4 bg-rose-700">
                <IoClose className="w-6 h-6" />
              </button>
              <ul className="p-4 mt-12 bg-[#453364]">{navItem}</ul>
            </div>
          </div>

          <div className="hidden navbar-start lg:flex">
            <ul className="flex items-center p-0 menu-horizontal">{navItem}</ul>
          </div>
        </div>

        <div className="navbar-end">
          <a
            className="bg-green-500 rounded-full btn btn-sm animate-pulse"
            href="https://wa.me/+8801619848555"
            title="WHATSAPP CHAT"
          >
            <BsWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
