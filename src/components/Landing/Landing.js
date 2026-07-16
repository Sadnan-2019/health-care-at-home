import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa";
import messenger from "../../assets/homelanding.webp";

import "./Landing.css";

// Dynamic JSON-LD Local Business Schema for Google Local Search
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "HealthCare At Home Bangladesh",
  alternateName: "HCAH Bangladesh",
  image: "https://hcah.mrg.com.bd/assets/homelanding.webp",
  telephon: "+8801619848555",
  url: "https://hcah.mrg.com.bd",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.8103", // Approximate coordinates for Dhaka, adjust if you have a physical office
    longitude: "90.4125",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59", // Indicating 24/7 service
  },
  areaServed: "Dhaka Division",
  priceRange: "$$",
};

const Landing = () => {
  return (
    <section
      className="relative overflow-hidden min-h-[85vh] flex items-center bg-[#f8fbfb]"
      aria-label="HealthCare At Home Bangladesh Hero"
    >
      {/* Injecting Local Business Schema dynamically into the page head */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* Semantic, Highly-Optimized Hero Background Image */}
      <picture className="absolute inset-0 w-full h-full z-0">
        <source
          media="(max-width: 640px)"
          srcSet={messenger} /* Mobile optimized path if available */
        />
        <img
          src={messenger}
          alt="Compassionate home nursing care and elder support service in Dhaka, Bangladesh"
          className="w-full h-full object-cover object-[75%_center] md:object-right"
          loading="eager"
          fetchpriority="high" // High loading priority for LCP
          decoding="async"
        />
      </picture>

      {/* Background Gradient Overlay for text readability */}
      <div
        className="absolute inset-0 bg-black/45 bg-gradient-to-r from-black/60 via-black/30 to-transparent     z-10"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 xl:col-span-7 text-left flex flex-col justify-center animate-fade-in">
          {/* Trust/SEO Badge */}
          <div className="inline-flex items-center gap-2 bg-[#453364] backdrop-blur-sm w-fit px-4 py-1.5 rounded-full border border-[#453364]/10 mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-semibold text-[#eae4f2] tracking-wide uppercase">
              24/7 Home Nursing Care Dhaka
            </span>
          </div>

          {/* Optimized Semantic H1 Tag */}
          <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] font-extrabold leading-[1.1] text-white tracking-tight">
            Professional Home Care
            <br />
            <span className="text-white"> Services in Bangladesh</span>
          </h1>

          {/* Conversational Description targeting local intents */}
          {/* <p className="max-w-xl mt-6 text-[16px] md:text-[20px] leading-relaxed font-semibold text-gray-700">
            Get reliable, hospital-quality nursing care, elder assistance, and
            professional physical therapy in the comfort of your home.
          </p> */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white">
            Professional
            <strong> Caregiver Service</strong>,<strong> Home Nursing</strong>,
            <strong> Elderly Care</strong>,<strong> Doctor Home Visit</strong>{" "}
            and
            <strong> Physiotherapy at Home</strong> delivered safely by
            experienced healthcare professionals across Dhaka.
          </p>

          {/* Direct Mobile-Friendly Tap-to-Call Link */}
          {/* Phone + CTA */}
          <div className="mt-8 flex flex-col md:flex-row md:items-center   gap-6">
            {/* Phone */}
            <a
              href="tel:01619848555"
              className="inline-flex items-center gap-3 text-[#453364] hover:text-[#5e4588] transition-colors duration-200"
              aria-label="Call our 24/7 hotline at 01619848555"
            >
              <div className="bg-[#453364] text-white p-3.5 rounded-full shadow-md">
                <FaPhoneVolume className="text-lg md:text-xl" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-100 font-bold">
                  Emergency Hotline
                </p>

                <p className="text-xl md:text-2xl font-black text-white">
                  01619-848555
                </p>
              </div>
            </a>

            {/* CTA */}
            <Link
              to="/"
              aria-label="Book Home Healthcare Service"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#453364] border border-[#453364] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#453364] hover:border-[#453364] shadow-md"
            >
              Book Service
              <BsArrowRight className="ml-2 text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
