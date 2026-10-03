import React from "react";
import { Link } from "react-router-dom";
import caregiverBannerImg from "../../assets/caregiverserviceinbangladesh.webp"; // Adjust path according to your folder structure

const CaregiverBlogBanner = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto my-6">
      <div
        className="relative w-full h-[450px] rounded-xl overflow-hidden flex items-center font-sans bg-cover bg-center bg-no-repeat shadow-xl"
        style={{
          backgroundImage: `url(${caregiverBannerImg})`,
        }}
      >
        {/* Gradient Overlay for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2C59]/95 via-[#0F2C59]/75 to-black/20 pointer-events-none" />

        {/* Content Container Inside Image */}
        <div className="relative z-10 px-8 sm:px-12 py-10 max-w-[720px] text-white flex flex-col items-start">
          {/* Badge */}
          <span className="inline-block bg-[#E5A93C] text-[#0F2C59] text-[13px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
            Home Care Guide
          </span>

          {/* Highlighted Main Title */}
          <h1 className="text-[34px] sm:text-[40px] font-extrabold leading-[1.2] mb-3 text-white tracking-tight">
            CAREGIVER SERVICE <br />
            <span className="inline-block mt-1 text-[#E5A93C] bg-[#E5A93C]/15 border-l-4 border-[#E5A93C] px-2.5 py-0.5 rounded-r">
              IN BANGLADESH
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-normal text-slate-200 opacity-90 m-0 mb-6 leading-snug">
            Professional Home Care for Elderly &amp; Patients
          </p>

          {/* Read More Button */}
          <Link to="/caregiver-service-in-bangladesh">
            <button className="btn btn-sm sm:btn-md text-white bg-gradient-to-r from-[#103264] to-[#303640] border-none hover:from-[#E5A93C] hover:to-[#d49428] hover:text-[#0F2C59] font-semibold rounded-lg px-6 transition-all duration-300 shadow-md">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaregiverBlogBanner;
