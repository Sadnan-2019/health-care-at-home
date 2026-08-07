import React from 'react';
import { 
  FaUserCheck, 
  FaShieldAlt, 
  FaGraduationCap, 
  FaUserNurse, 
  FaArrowRight, 
  FaPhoneAlt,
 FaWhatsapp
} from 'react-icons/fa';

const NannycareSelection = () => {
  // Structured Data Schema for Caregiver Vetting Process
  const recruitmentSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How We Select & Train Professional Baby Care Specialists",
    "description": "Our rigorous 4-step recruitment, background check, and clinical training process for certified in-home baby care specialists and newborn nurses.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Screening & Medical Checkup",
        "text": "National ID verification, background review, and comprehensive physical health screenings for infectious diseases."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Address Audit & Background Verification",
        "text": "Permanent address confirmation, local police clearance, and personal reference audits."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Clinical & Soft Skills Training",
        "text": "Hands-on pediatric care, infant CPR, choking first-aid, milk hygiene, and home privacy ethics."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Senior Nurse Shadow Placement",
        "text": "Supervised home placement shadowed by senior nursing professionals prior to independent care."
      }
    ]
  };

  return (
    <section className="bg-slate-50 py-12 md:py-20 font-sans text-gray-800">
      {/* Structured Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recruitmentSchema) }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-6xl">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#453364] bg-[#453364]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Trusted Baby Care at Home
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold poppins-b mb-4 text-gray-900">
  How We Select & Train Professional Nannies & Baby Caregivers
</h2>
          <p className="text-base sm:text-lg poppins-t text-gray-600 leading-relaxed">
            To ensure complete home safety and exceptional care quality, our hiring framework follows a rigorous 4-step vetting process before placing any professional baby care specialist in your home.
          </p>
        </div>

        {/* 4-STEP VISUAL WORKFLOW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase bg-[#453364] text-white px-3 py-1 rounded-full">
                  Step 01
                </span>
                <FaUserCheck className="text-2xl text-[#453364]" />
              </div>
              <h3 className="font-bold text-base poppins-b text-gray-900 mb-2">
                Screening &amp; Medical Check
              </h3>
              <p className="text-xs sm:text-sm poppins-t text-gray-600 leading-relaxed">
                National ID verification and comprehensive health screening for complete safety.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase bg-[#453364] text-white px-3 py-1 rounded-full">
                  Step 02
                </span>
                <FaShieldAlt className="text-2xl text-[#453364]" />
              </div>
              <h3 className="font-bold text-base poppins-b text-gray-900 mb-2">
                Background &amp; Address Audit
              </h3>
              <p className="text-xs sm:text-sm poppins-t text-gray-600 leading-relaxed">
                Criminal background checks, police record verification, and permanent home address audits.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase bg-[#453364] text-white px-3 py-1 rounded-full">
                  Step 03
                </span>
                <FaGraduationCap className="text-2xl text-[#453364]" />
              </div>
              <h3 className="font-bold text-base poppins-b text-gray-900 mb-2">
                Clinical Care Training
              </h3>
              <p className="text-xs sm:text-sm poppins-t text-gray-600 leading-relaxed">
                Pediatric care, infant CPR, hygiene protocols, and early developmental play.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase bg-[#453364] text-white px-3 py-1 rounded-full">
                  Step 04
                </span>
                <FaUserNurse className="text-2xl text-[#453364]" />
              </div>
              <h3 className="font-bold text-base poppins-b text-gray-900 mb-2">
                Senior Nurse Shadowing
              </h3>
              <p className="text-xs sm:text-sm poppins-t text-gray-600 leading-relaxed">
                Supervised home placement shadowed by senior nurse specialists before solo care.
              </p>
            </div>
          </div>

        </div>

        {/* DETAILED FEATURES LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          
          <div className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm flex gap-4 items-start">
            <div className="p-3 bg-[#453364]/10 rounded-xl text-[#453364] shrink-0">
              <FaShieldAlt className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold poppins-b text-gray-900 mb-1 text-base">
                Rigorous Background Vetting
              </h3>
              <p className="text-sm poppins-t text-gray-600 leading-relaxed">
                Every nanny and nanny caregiver undergoes National ID verification, permanent address audits, personal reference confirmation, and local police record clearance.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm flex gap-4 items-start">
            <div className="p-3 bg-[#453364]/10 rounded-xl text-[#453364] shrink-0">
              <FaUserCheck className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold poppins-b text-gray-900 mb-1 text-base">
                Comprehensive Medical Screening
              </h3>
              <p className="text-sm poppins-t text-gray-600 leading-relaxed">
                Mandatory physical health examinations including diagnostic checks for infectious diseases (Tuberculosis, Hepatitis B, skin infections) prior to home placement.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm flex gap-4 items-start">
            <div className="p-3 bg-[#453364]/10 rounded-xl text-[#453364] shrink-0">
              <FaGraduationCap className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold poppins-b text-gray-900 mb-1 text-base">
                Practical &amp; Clinical Training
              </h3>
              <p className="text-sm poppins-t text-gray-600 leading-relaxed">
                Hands-on training modules supervised by senior nursing professionals covering newborn care at home, infant CPR, choking response, milk hygiene, and weaning routines.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm flex gap-4 items-start">
            <div className="p-3 bg-[#453364]/10 rounded-xl text-[#453364] shrink-0">
              <FaUserNurse className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold poppins-b text-gray-900 mb-1 text-base">
                Soft Skills &amp; Professional Ethics
              </h3>
              <p className="text-sm poppins-t text-gray-600 leading-relaxed">
                Comprehensive coaching in client home privacy, empathetic communication, stress handling, and maintaining clear boundaries inside your family home.
              </p>
            </div>
          </div>

        </div>

        {/* HIGH-CONVERSION SEO CALL TO ACTION CARD */}
        <div 
          className="rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ backgroundColor: "#453364" }}
        >
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-purple-200 font-bold bg-white/10 px-3 py-1 rounded-full inline-block mb-3">
  Verified &amp; Trained Nannies
</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold poppins-b mb-3">
              Find a Verified Baby Care Specialist Near You
            </h3>
            <p className="text-sm sm:text-base poppins-t text-purple-100 leading-relaxed">
              Give your child the safest care possible. Hire a vetted, medically screened nanny for newborn care at home tailored to your family's schedule.
            </p>
          </div>

          {/* CTA BUTTONS */}
<div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
  {/* Primary WhatsApp Booking Action */}
  <a
    href="https://wa.me/8801619848555?text=Hello%2C%20I%20am%20interested%20in%20booking%20a%20professional%20nanny%20or%20babysitter%20package%20for%20my%20child."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-6 py-3.5 rounded-xl transition-all duration-300 text-sm shadow-md text-center"
  >
    <FaWhatsapp className="text-base text-emerald-700" />
    <span>Book Nanny &amp; Babysitter via WhatsApp</span>
    <FaArrowRight className="text-xs" />
  </a>

  {/* Secondary Direct Call Action */}
  <a
    href="tel:+8801619848555"
    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 text-sm text-center"
  >
    <FaPhoneAlt className="text-xs" />
    <span>Call +880 1619-848555</span>
  </a>
</div>
        </div>

      </div>
    </section>
  );
};

export default NannycareSelection;