import React from "react";

import { FaPhoneVolume } from "react-icons/fa";
import Marque from "../Marque/Marque";
import Review from "../Review/Review";
import Success from "../Success/Success";

import Nursingabout from "./Nursingabout";
import Nursingchoose from "./Nursingchoose";
import Teamnursing from "./Teamnursing";
import "./Nursing.css"
import { Helmet } from "react-helmet-async";
import WhoNeedsNursingSection from "./WhoNeedsNursingSection";
import FlexibleNursingCareSection from "./FlexibleNursingCareSection";
import FAQSection from "./FAQSection";
// import "../../../src/components/Blog/Blog.css"  
const Nursing = () => {
  return (
    <div>
        <Helmet>
              <title>Nursing Care at Dhaka</title>
              <meta name="description" content="Get top-quality professionals  healthcare services at home. Book professional doctors & caregivers online." />
              <meta name="keywords" content="healthcare,home care,home nursing care,top caregiver dhaka,physiotheray dhaka, home doctors, medical caregiver" />
              <meta name="robots" content="index, follow" />
              <meta property="og:title" content="Nursing Care at Dhaka" />
              <meta property="og:description" content="Get top-quality healthcare services at home" />
              <meta property="og:image" content="https://hcah.mrg.com.bd/static/media/nurseservice.a7aa8c08eeeb13c8337d.jpg" />
              <meta property="og:url" content="https://hcah.mrg.com.bd" />
              <meta property="og:type" content="website" />.
              <link rel="canonical" href="https://hcah.mrg.com.bd/nursing" />
      
      
             
            </Helmet>
      <section className="relative  nursing text-white py-20 lg:py-28 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
        style={{ backgroundImage: `url('/images/home-nursing-dhaka.jpg')` }}
        role="img"
        aria-label="Professional nurse caring for a patient at home in Dhaka"
      />
      <div className="absolute inset-0   z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-300 px-3.5 py-1.5 rounded-full text-sm font-medium border border-teal-500/20">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Available 24/7 Across Dhaka City
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
            Home Nursing Service in Dhaka
          </h1>

          <p className="text-lg sm:text-xl text-white leading-relaxed max-w-3xl">
            HCAH delivers professional <strong className="text-white font-semibold">nursing care at home in Dhaka</strong>, bringing certified clinical support directly to your doorstep. Designed for elderly individuals, post-surgery recovering patients, and those managing chronic illnesses, our dedicated <strong className="text-white font-semibold">home healthcare service</strong> ensures hospital-grade medical attention within the comfort of familiar surroundings. From daily <strong className="text-white font-semibold">patient care service</strong> and vital monitoring to specialized clinical procedures, families can easily arrange compassionate, reliable <strong className="text-white font-semibold">nursing services in Dhaka</strong> through our structured care plans.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a 
              href="https://wa.me/8801619848555" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg transition-colors duration-200 inline-flex items-center gap-2"
            >
              WhatsApp: 01619-848555
            </a>
            <a 
              href="tel:+8801779848555" 
              className="bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold px-6 py-3.5 rounded-lg border border-slate-700 transition-colors duration-200 inline-flex items-center gap-2"
            >
              Call: 01779-848555
            </a>
          </div>
        </div>
      </div>
    </section>

      <Nursingabout  ></Nursingabout>
      <WhoNeedsNursingSection></WhoNeedsNursingSection>
      <FlexibleNursingCareSection></FlexibleNursingCareSection>
      <Nursingchoose></Nursingchoose>
      <Review></Review>
      <Success></Success>
      <Marque></Marque>
      <Teamnursing></Teamnursing>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Nursing;
