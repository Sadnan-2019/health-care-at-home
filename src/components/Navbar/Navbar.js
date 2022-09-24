import React from 'react';
import { Link, NavLink } from "react-router-dom";
 
 
 
 
 
 
 
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
        >
          
        </NavLink>
      </li>
      
    </>
  );
 

  return (
    <div className="px-4 md:pl-10  lg:px-24 bg-green-500">
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
            <div className="flex items-center">
              <img className="w-48"   alt="logo" />
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
          {/* {user ? (
            <Link
              to="/"
              className="py-2 px-5 text-white rounded-full bg-primary hover:bg-blue-800 font-medium hidden md:flex"
            >
              GET STARTED
            </Link>
          ) : (
            <Link
              to="/login"
              className="py-2 px-5 text-white rounded-full bg-primary hover:bg-blue-800 font-medium hidden md:flex"
            >
              Login
            </Link>
          )} */}

          <div className="dropdown dropdown-end ml-2">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              {/* <div className="w-10 rounded-full">
                <img
                  src={data?.data?.img ? data?.data?.img : demoUser}
                  alt="user img"
                />
              </div> */}
            </label>
            {/* <ul
              tabindex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard" className="justify-between">
                  Dashboard
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
           
            </ul> */}
          </div>
        </div>
        {/* End navbar end portion */}
      </div>
    </div>
  );
};

export default Navbar;