import { Link } from "lucide-react";
import React from "react";
import caregiverpriceingulshan from "../../assets/cargiverpricesingulshan.jpg";
import { useNavigate } from "react-router-dom";
const CaregiverServiceDhakaCover = () => {
     const navigate = useNavigate();

  return (
     <div className="w-full max-w-[1200px] mx-auto my-6 px-4 sm:px-0">
    <div
      className="relative w-full h-[450px] rounded-xl overflow-hidden flex items-center font-sans bg-cover bg-center bg-no-repeat shadow-xl"
      style={{
        backgroundImage: `url(${caregiverpriceingulshan})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F2C59]/95 via-[#0F2C59]/75 to-black/20 pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 px-8 sm:px-12 py-10 max-w-[650px] text-white flex flex-col items-start">

        {/* Badge */}
        <span className="inline-block bg-[#E5A93C] text-[#0F2C59] text-[13px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
          2026 HOME CARE GUIDE
        </span>

        {/* Main Title */}
        <h1 className="text-[38px] sm:text-[42px] font-extrabold leading-[1.2] mb-3 text-white tracking-tight">
          CAREGIVER SERVICE
          <br />

          <span className="inline-block mt-1 text-[#E5A93C] bg-[#E5A93C]/15 border-l-4 border-[#E5A93C] px-2.5 py-0.5 rounded-r">
            IN DHAKA
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl font-normal text-slate-200 opacity-90 m-0 mb-6">
          Professional &amp; Trusted Home Care
        </p>

        {/* Read More Button */}
        <button
          type="button"
          onClick={() => navigate("/blog/caregiver-service-in-dhaka")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "140px",
            height: "48px",
            padding: "0 24px",
            backgroundColor: "#E5A93C",
            color: "#0F2C59",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "1",
            textDecoration: "none",
            cursor: "pointer",
            position: "relative",
            zIndex: 100,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
            outline: "none",
          }}
        >
          Read More
        </button>

      </div>
    </div>
  </div>
  );
};

export default CaregiverServiceDhakaCover;
