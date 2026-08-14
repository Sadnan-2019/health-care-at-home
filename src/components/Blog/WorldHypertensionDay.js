import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { RxLinkedinLogo } from 'react-icons/rx';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';

// Local image import
import caregiverpriceingulshan from "../../assets/hyper2.jpeg";

const WorldHypertensionDay = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto my-8">
      <div
        className="relative w-full max-w-[1200px] h-[450px] rounded-xl overflow-hidden flex items-center font-sans bg-cover bg-center bg-no-repeat shadow-xl"
        style={{
          backgroundImage: `url(${caregiverpriceingulshan})`
        }}
      >
        {/* Dark Gradient Overlay for optimal contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2C59]/95 via-[#0F2C59]/80 to-black/30 pointer-events-none" />

        {/* Banner Content Container */}
        <div className="relative z-10 px-6 sm:px-12 py-8 max-w-[720px] text-white">
          {/* Badge */}
          <span className="inline-block bg-[#E5A93C] text-[#0F2C59] text-[12px] sm:text-[13px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
            2026 Home Care Cost Guide
          </span>

          {/* Main Title */}
          <h1 className="text-[28px] sm:text-[38px] font-extrabold leading-[1.25] mb-3 text-white tracking-tight">
            World Hypertension Day: <br />
            <span className="inline-block mt-1 text-[#E5A93C] bg-[#E5A93C]/15 border-l-4 border-[#E5A93C] px-2.5 py-1 rounded-r">
              Diet That Helps Reduce Disease Risk
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-sm sm:text-base font-normal text-slate-200 leading-relaxed mb-4 opacity-90">
            Hypertension (high blood pressure) occurs when pressure in your blood vessels is too high (140/90 mmHg or higher). 
          </p>

          {/* Social Share Icons */}
          {/* <div className="flex gap-3 items-center mb-6">
            <BsFacebook className="text-xl sm:text-2xl text-white hover:text-[#E5A93C] transition-colors cursor-pointer" />
            <RxLinkedinLogo className="text-xl sm:text-2xl text-white hover:text-[#E5A93C] transition-colors cursor-pointer" />
            <AiFillTwitterCircle className="text-xl sm:text-2xl text-white hover:text-[#E5A93C] transition-colors cursor-pointer" />
            <FaWhatsappSquare className="text-xl sm:text-2xl text-white hover:text-[#E5A93C] transition-colors cursor-pointer" />
          </div> */}

          {/* Two Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <Link to="/hyper-symptoms-causes">
              <button className="btn btn-sm sm:btn-md text-white bg-gradient-to-r from-[#103264] to-[#303640] border-none hover:from-[#E5A93C] hover:to-[#d49428] hover:text-[#0F2C59] font-semibold rounded-lg px-5 transition-all duration-300 shadow-md">
                Symptoms &amp; Causes
              </button>
            </Link>

            {/* <Link to="/hyper-management-treatment">
              <button className="btn btn-sm sm:btn-md text-[#0F2C59] bg-[#E5A93C] hover:bg-white border-none font-bold rounded-lg px-5 transition-all duration-300 shadow-md animate-pulse">
                Caregiver Prices in Gulshan
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldHypertensionDay;