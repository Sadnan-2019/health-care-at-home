import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import { BsWhatsapp } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services' | 'more' | null
  
  const servicesRef = useRef(null);
  const moreRef = useRef(null);

  // Close desktop dropdowns if clicking anywhere outside the navbar
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        servicesRef.current && !servicesRef.current.contains(event.target) &&
        moreRef.current && !moreRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const gotoBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const active = "text-white font-semibold border-b-2 border-white pb-0.5";
  const normal = "text-gray-200 font-bold hover:text-white transition-all duration-200";

  const NavItemLink = ({ to, label }) => (
    <li className="nav-item" onClick={gotoBtn}>
      <NavLink
        className={({ isActive }) => (isActive ? active : normal)}
        to={to}
        onClick={closeAll}
      >
        {label}
      </NavLink>
    </li>
  );

  return (
    <div className="sticky top-0 z-50 w-full shadow-md header-main">
      <Nav />

      <nav className="navbar-container">
        
        {/* 1. LEFT SIDE: MOBILE HAMBURGER */}
        <div className="lg:hidden flex-1 justify-start">
          <button onClick={toggleDrawer} className="p-2 text-white rounded-md hover:bg-white/10" aria-label="Toggle Menu">
            {isOpen ? <IoClose className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
          </button>
        </div>

        {/* 2. CENTERED AREA: LOGO & DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <ul className="desktop-menu-list">
            
            <NavItemLink to="/home" label="Home" />

            {/* SERVICES CLICKABLE DROPDOWN */}
            <li className="nav-dropdown-wrapper" ref={servicesRef}>
              <button 
                onClick={() => toggleDropdown("services")} 
                className={`dropdown-trigger ${activeDropdown === "services" ? "text-white" : ""}`}
              >
                <span>Our Services</span>
                <svg className={`w-4 h-4 fill-current transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className={`custom-dropdown-menu ${activeDropdown === "services" ? "show" : ""}`}>
                <NavItemLink to="/nursing" label="Nursing" />
                <NavItemLink to="/physiotherapy" label="Physiotherapy" />
                <NavItemLink to="/medical-assistant" label="Medical Assistant" />
                <NavItemLink to="/medical-caregiver" label="Medical Caregiver" />
                <NavItemLink to="/caregiver" label="Caregiver" />
                <NavItemLink to="/nanycare" label="Nanycare" />
                <NavItemLink to="/companion" label="Companion" />
                <NavItemLink to="/medical-equipment" label="Medical Equipment" />
              </ul>
            </li>

            <NavItemLink to="/payment" label="Payment" />
            <NavItemLink to="/service-protocol" label="Our Service Protocol" />
            <NavItemLink to="/blog" label="Blog" />
            <NavItemLink to="/about" label="About" />
            <NavItemLink to="/contact" label="Contact" />

          </ul>
        </div>

        {/* 3. RIGHT SIDE: WHATSAPP CTA CALL UP */}
        <div className="flex flex-1 lg:flex-initial justify-end">
          <a
            className="flex items-center justify-between gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full text-xs shadow transition-all transform hover:scale-105 animate-pulse whitespace-nowrap"
            href="https://wa.me/+8801619848555"
            target="_blank"
            rel="noopener noreferrer"
            title="WHATSAPP CHAT"
          >
            <BsWhatsapp className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>

        {/* MOBILE BACKDROP OVERLAY */}
        {isOpen && <div className="drawer-overlay" onClick={closeAll} />}

        {/* MOBILE SLIDE DRAWER MENU */}
        <div className={`nav-drawer ${isOpen ? "open" : "closed"}`}>
          <div className="flex justify-end p-4">
            <button onClick={closeAll} className="p-1 bg-rose-700 text-white rounded-md" aria-label="Close Menu">
              <IoClose className="w-6 h-6" />
            </button>
          </div>
          
          <ul className="flex flex-col gap-1 p-4 list-none m-0">
            <NavItemLink to="/home" label="Home" />
            
            {/* SERVICES INDIVIDUAL SEPARATION GROUP */}
            <li className="text-gray-400 text-xs font-bold uppercase tracking-wider mt-4 px-2 mb-1 border-b border-white/10 pb-1">Our Services</li>
            <NavItemLink to="/nursing" label="Nursing" />
            <NavItemLink to="/physiotherapy" label="Physiotherapy" />
            <NavItemLink to="/medical-assistant" label="Medical Assistant" />
            <NavItemLink to="/medical-caregiver" label="Medical Caregiver" />
            <NavItemLink to="/caregiver" label="Caregiver" />
            <NavItemLink to="/nanycare" label="Nanycare" />
            <NavItemLink to="/companion" label="Companion" />
            <NavItemLink to="/medical-equipment" label="Medical Equipment" />

            {/* CORE INDIVIDUAL LINK SEPARATIONS */}
            <li className="text-gray-400 text-xs font-bold uppercase tracking-wider mt-4 px-2 mb-1 border-b border-white/10 pb-1">More Links</li>
            <NavItemLink to="/payment" label="Payment" />
            <NavItemLink to="/service-protocol" label="Our Service Protocol" />
            <NavItemLink to="/blog" label="Blog" />
            <NavItemLink to="/about" label="About" />
            <NavItemLink to="/contact" label="Contact" />
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;