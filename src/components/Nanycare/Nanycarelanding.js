import React from "react";

import {
  FaPhoneVolume,
  FaBriefcase,
  FaHeartbeat,
  FaBaby,
  FaCity,
  FaUsers,
} from "react-icons/fa";
import "./Nanycare.css"; // We'll handle the gradient logic here

const Nanycarelanding = () => {
  return (
    <div className="w-full">
      {/* 
        Hero / Landing Section with Dynamic Linear Gradient and Background Image.
        We apply the base styles and the gradient logic here.
        Tailwind CSS handles the responsiveness.
      */}
      <section className="relative w-full   min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat nanycare">
        {/* Content Container - No change needed here */}
        <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-20">
          <div className="max-w-3xl text-left">
            {/* SEO H1 Tag - No change needed here */}
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight poppins-b mb-6"
              style={{ color: "white" }}
            >
              Baby Care Home Services in Bangladesh
            </h1>

            {/* Intro Content Paragraphs - No change needed here */}
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-base sm:text-lg md:text-xl font-medium leading-relaxed poppins-t mb-4 text-white"
            >
              Welcoming a child into the world brings immense joy, but the
              demands of infant management, recovery after childbirth, and
              balancing professional careers can quickly overwhelm new parents.
              Finding verified, trustworthy, and skilled{" "}
              <strong className="font-semibold text-white">
                baby care home services in Bangladesh
              </strong>{" "}
              is no longer a luxury—it is a critical support system for modern
              urban nuclear families.
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-base sm:text-lg md:text-xl font-medium leading-relaxed poppins-t mb-8 text-white"
            >
              Whether you need a specialized{" "}
              <strong className="font-semibold text-white">
                baby care nurse
              </strong>{" "}
              for a premature newborn in Dhaka, a reliable{" "}
              <strong className="font-semibold text-white">
                live-in nanny
              </strong>{" "}
              for daily management, or short-term{" "}
              <strong className="font-semibold text-white">
                postnatal baby care
              </strong>
              , professional home care offers a safe, hygienic, and nurturing
              environment right inside your own home.
            </p>

            {/* Call To Action Bar - No change needed here */}
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              className="inline-flex items-center gap-3 bg-[#453364] text-white px-6 py-3 rounded-full shadow-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaPhoneVolume className="text-xl sm:text-2xl animate-pulse" />
              <a
                href="tel:01619848555"
                className="text-lg sm:text-2xl font-bold tracking-wide poppins-b"
              >
                Call Now: 01619848555
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          SECTION 2: PROFESSIONAL BABY CARE AT HOME (H2 SECTION)
      ------------------------------------------------------------- */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-5xl">
          {/* Section H2 Heading */}
          <h2
            data-aos="fade-up"
            className="text-2xl sm:text-3xl md:text-4xl font-bold poppins-b mb-6 text-left"
            style={{ color: "#453364" }}
          >
            Professional Baby Care at Home
          </h2>

          {/* Section Paragraph */}
          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-base sm:text-lg leading-relaxed poppins-t mb-10 text-gray-700"
          >
            Professional home baby care bridges the gap between basic domestic
            help and clinical care. Unlike standard domestic workers, trained
            caregivers bring structured knowledge of infant development, strict
            infection control, infant nutrition, and milestone tracking.
          </p>

          {/* Structured Diagram Card */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 mb-10"
          >
            <h3
              className="text-lg sm:text-xl font-bold text-center poppins-b pb-4 mb-6 border-b border-gray-200 tracking-wide"
              style={{ color: "#453364" }}
            >
              STRUCTURED IN-HOME BABY CARE SYSTEM
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Physical Well-being Column */}
              <div className="bg-[#453364]/5 p-5 rounded-xl border-l-4 border-[#453364]">
                <h4
                  className="text-base sm:text-lg font-bold poppins-b mb-3"
                  style={{ color: "#453364" }}
                >
                  PHYSICAL WELL-BEING
                </h4>
                <ul className="space-y-2 text-sm sm:text-base poppins-t text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#453364] font-bold">•</span>
                    <span>Sterile Feeding & Burping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#453364] font-bold">•</span>
                    <span>Umbilical Cord Hygiene</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#453364] font-bold">•</span>
                    <span>Growth & Temperature Checks</span>
                  </li>
                </ul>
              </div>

              {/* Developmental Support Column */}
              <div className="bg-[#453364]/5 p-5 rounded-xl border-l-4 border-[#453364]">
                <h4
                  className="text-base sm:text-lg font-bold poppins-b mb-3"
                  style={{ color: "#453364" }}
                >
                  DEVELOPMENTAL SUPPORT
                </h4>
                <ul className="space-y-2 text-sm sm:text-base poppins-t text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#453364] font-bold">•</span>
                    <span>Tummy Time & Motor Skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#453364] font-bold">•</span>
                    <span>Sensory & Language Play</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#453364] font-bold">•</span>
                    <span>Sleep Association Conditioning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Concluding Paragraph for Location Relevance */}
          <p
            data-aos="fade-up"
            data-aos-duration="1800"
            className="text-base sm:text-lg leading-relaxed poppins-t text-gray-700"
          >
            In urban centers like{" "}
            <strong className="font-semibold text-[#453364]">Dhaka</strong>,{" "}
            <strong className="font-semibold text-[#453364]">Chittagong</strong>
            , and{" "}
            <strong className="font-semibold text-[#453364]">Sylhet</strong>,
            working couples often face the challenge of nuclear family living
            without immediate extended family support. Professional home care
            provides one-on-one attention, ensuring your infant follows a
            personalized daily schedule while remaining safe from external
            pathogens common in commercial daycares.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-5xl">
          <h2
            data-aos="fade-up"
            className="text-2xl sm:text-3xl md:text-4xl font-bold poppins-b mb-4 text-left"
            style={{ color: "#453364" }}
          >
            Who Needs Baby Care Services?
          </h2>

          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-base sm:text-lg leading-relaxed poppins-t mb-8 text-gray-700"
          >
            In-home infant care adapts to a wide range of family needs:
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Working Parents */}
            <div
              data-aos="fade-up"
              data-aos-duration="1300"
              className="p-6 rounded-2xl bg-[#453364] border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-[#453364]/10 text-white text-xl sm:text-2xl">
                  <FaBriefcase />
                </div>
                <h3 className="text-lg sm:text-xl font-bold poppins-b text-white">
                  Working Parents Returning to Work
                </h3>
              </div>
              <p className="text-sm sm:text-base leading-relaxed poppins-t text-white">
                Mothers and fathers managing full-time careers who need
                structured daytime or{" "}
                <strong className="font-semibold text-white">
                  live-in nanny
                </strong>{" "}
                care to maintain uninterrupted work routines.
              </p>
            </div>

            {/* Card 2: C-Section Mothers */}
            <div
              data-aos="fade-up"
              data-aos-duration="1400"
              className="p-6 rounded-2xl bg-[#453364]  border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-[#453364]/10 text-white text-xl sm:text-2xl">
                  <FaHeartbeat />
                </div>
                <h3 className="text-lg sm:text-xl font-bold poppins-b text-white">
                  First-Time Mothers Recovering from C-Section
                </h3>
              </div>
              <p className="text-sm sm:text-base leading-relaxed poppins-t text-white">
  Postpartum physical recovery demands rest. A{" "}
  <strong className="font-semibold text-white">
    newborn nanny or baby care specialist
  </strong>{" "}
  manages night feedings, diaper shifts, and lifting, allowing
  mothers to heal smoothly.
</p>
            </div>

            {/* Card 3: Premature / High-Risk Infants */}
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="p-6 rounded-2xl bg-[#453364]  border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-[#453364]/10 text-white text-xl sm:text-2xl">
                  <FaBaby />
                </div>
                <h3 className="text-lg sm:text-xl font-bold poppins-b text-white">
                  Families with Premature or Low-Birth-Weight Infants
                </h3>
              </div>
              <p className="text-sm sm:text-base leading-relaxed poppins-t text-white">
                High-risk babies require clinical precision in vital monitoring,
                medication administration, and strict infection control provided
                by a trained{" "}
                <strong className="font-semibold text-[#453364]">
                  baby care nurse
                </strong>
                .
              </p>
            </div>

            {/* Card 4: Urban Nuclear Families */}
            <div
              data-aos="fade-up"
              data-aos-duration="1600"
              className="p-6 rounded-2xl bg-[#453364] border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-[#453364]/10 text-white text-xl sm:text-2xl">
                  <FaCity />
                </div>
                <h3 className="text-lg sm:text-xl font-bold poppins-b text-white">
                  Nuclear Families Living in Major Urban Centers
                </h3>
              </div>
              <p className="text-sm sm:text-base leading-relaxed poppins-t text-white">
  Families living away from extended kin in premium zones like{" "}
  <strong className="font-semibold text-white">Gulshan</strong>,{" "}
  <strong className="font-semibold text-white">Dhanmondi</strong>,{" "}
  <strong className="font-semibold text-white">Baridhara</strong>,{" "}
  <strong className="font-semibold text-white">Uttara</strong>, or{" "}
  <strong className="font-semibold text-white">Banani</strong>{" "}
  who rely on a professional nanny and babysitter network for a trusted home support system{" "}
  <strong className="font-semibold text-white">across Bangladesh</strong>.
</p>
            </div>

            {/* Card 5: Twins & Multiples */}
            <div
              data-aos="fade-up"
              data-aos-duration="1700"
              className="p-6 rounded-2xl bg-[#453364] border border-slate-100 hover:shadow-lg transition-all duration-300 sm:col-span-1 md:col-span-2"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-[#453364]/10 text-white text-xl sm:text-2xl">
                  <FaUsers />
                </div>
                <h3 className="text-lg sm:text-xl font-bold poppins-b text-white">
                  Parents with Twins or Higher-Order Multiples
                </h3>
              </div>
              <p className="text-sm sm:text-base leading-relaxed poppins-t text-white">
                Managing multiple newborns simultaneously requires an extra set
                of skilled hands to coordinate feeding schedules and sleep
                routines effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nanycarelanding;
