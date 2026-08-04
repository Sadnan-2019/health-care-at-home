import React from 'react';
import { 
  FaCheckCircle, 
  FaTimesCircle, 
  FaSoap, 
  FaHeartbeat, 
  FaBed, 
  FaChartLine, 
  FaPhoneAlt, 
  FaShieldAlt 
} from 'react-icons/fa';

const NannyCareBenefits = () => {
  // Structured Data Schema for Search Engines
  const benefitsSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Baby Care at Home Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nanny Care Bangladesh"
    },
    "areaServed": "Bangladesh",
    "description": "Certified baby care specialists providing medical-grade hygiene, infant CPR readiness, and developmental support for newborns and infants.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Trained Baby Care vs Untrained Help",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Infection Control & Sterilization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Infant CPR & Emergency Response"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Postpartum Mental Health & Sleep Support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Developmental Milestone Tracking"
          }
        }
      ]
    }
  };

  return (
    <section className="bg-white py-12 md:py-20 font-sans text-gray-800">
      {/* Inject Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(benefitsSchema) }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-6xl">
        
        {/* Section Heading */}
        <h2 
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl font-bold poppins-b mb-4 text-left"
          style={{ color: "#453364" }}
        >
          Benefits of Hiring a Professional Baby Care Specialist
        </h2>

        {/* Lead Paragraph */}
        <p 
          data-aos="fade-up"
          data-aos-duration="1200"
          className="text-base sm:text-lg leading-relaxed poppins-t mb-12 text-gray-700 max-w-4xl"
        >
          Attempting to manage complete <strong className="font-semibold text-[#453364]">baby care at home</strong> through untrained domestic help or unverified freelancers introduces critical safety, health, and developmental risks during your child's most delicate growth phases.
        </p>

        {/* COMPARISON MATRIX: TRAINED BABY CARE vs UNTRAINED HELP */}
        <div 
          data-aos="zoom-in"
          data-aos-duration="1400"
          className="bg-slate-50 rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200/80 mb-16 shadow-sm"
        >
          <div className="text-center mb-8 border-b border-gray-200 pb-4">
            <h3 
              className="text-lg sm:text-2xl font-bold poppins-b tracking-wide"
              style={{ color: "#453364" }}
            >
              TRAINED BABY CARE vs. UNTRAINED HELP
            </h3>
            <p className="text-xs sm:text-sm poppins-t text-gray-500 mt-1">
              Comparing verified professional baby care against generic domestic assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* TRAINED BABY CARE SPECIALIST */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/30 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold uppercase px-4 py-1 rounded-bl-xl">
                Recommended
              </div>
              
              <h4 className="text-xl font-bold poppins-b text-emerald-800 mb-6 flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500" />
                Trained Baby Care Specialist
              </h4>

              <ul className="space-y-4 poppins-t text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 mt-1 shrink-0 text-lg" />
                  <span><strong>Certified First Aid &amp; Infant CPR:</strong> Fully trained in emergency intervention and choking management.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 mt-1 shrink-0 text-lg" />
                  <span><strong>Hygienic Milk Handling:</strong> Follows medical-grade sterilization and temperature controls.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 mt-1 shrink-0 text-lg" />
                  <span><strong>Milestone &amp; Growth Tracking:</strong> Proactively supports sensory, motor, and speech development.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 mt-1 shrink-0 text-lg" />
                  <span><strong>Background Checked &amp; Verified:</strong> Multi-layer biometric and address verification.</span>
                </li>
              </ul>
            </div>

            {/* UNTRAINED DOMESTIC HELP */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-rose-200 shadow-sm">
              <h4 className="text-xl font-bold poppins-b text-rose-700 mb-6 flex items-center gap-2">
                <FaTimesCircle className="text-rose-500" />
                Untrained Domestic Help
              </h4>

              <ul className="space-y-4 poppins-t text-sm sm:text-base text-gray-600">
                <li className="flex items-start gap-3">
                  <FaTimesCircle className="text-rose-400 mt-1 shrink-0 text-lg" />
                  <span><strong>No Medical Safety Training:</strong> Unprepared for neonatal emergencies or breathing distress.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaTimesCircle className="text-rose-400 mt-1 shrink-0 text-lg" />
                  <span><strong>High Risk of Contamination:</strong> Lack of structured hygiene protocols during bottle preparation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaTimesCircle className="text-rose-400 mt-1 shrink-0 text-lg" />
                  <span><strong>Purely Passive Supervision:</strong> Limited engagement with developmental play or early learning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaTimesCircle className="text-rose-400 mt-1 shrink-0 text-lg" />
                  <span><strong>Unverified Background History:</strong> Higher risk regarding home security and personal safety.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* 4 CORE ADVANTAGES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Advantage 1 */}
          <div 
            data-aos="fade-up"
            data-aos-duration="1300"
            className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-gray-100 hover:shadow-md transition-all duration-300"
          >
            <div className="p-4 bg-[#453364] text-white rounded-2xl text-2xl h-fit shrink-0">
              <FaSoap />
            </div>
            <div>
              <h4 className="text-lg font-bold poppins-b text-gray-900 mb-2">Infection Control &amp; Sanitization</h4>
              <p className="text-sm sm:text-base poppins-t text-gray-700 leading-relaxed">
                Trained baby care professionals strictly practice clinical hand hygiene, sterilize feeding apparatus correctly, and maintain dedicated clean uniforms inside your home.
              </p>
            </div>
          </div>

          {/* Advantage 2 */}
          <div 
            data-aos="fade-up"
            data-aos-duration="1400"
            className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-gray-100 hover:shadow-md transition-all duration-300"
          >
            <div className="p-4 bg-[#453364] text-white rounded-2xl text-2xl h-fit shrink-0">
              <FaHeartbeat />
            </div>
            <div>
              <h4 className="text-lg font-bold poppins-b text-gray-900 mb-2">Emergency Readiness &amp; First Aid</h4>
              <p className="text-sm sm:text-base poppins-t text-gray-700 leading-relaxed">
                Certified specialists understand infant CPR, choking interventions (back blows and chest thrusts), and immediate home first-aid protocols during unexpected events.
              </p>
            </div>
          </div>

          {/* Advantage 3 */}
          <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-gray-100 hover:shadow-md transition-all duration-300"
          >
            <div className="p-4 bg-[#453364] text-white rounded-2xl text-2xl h-fit shrink-0">
              <FaBed />
            </div>
            <div>
              <h4 className="text-lg font-bold poppins-b text-gray-900 mb-2">Maternal Mental Health &amp; Sleep</h4>
              <p className="text-sm sm:text-base poppins-t text-gray-700 leading-relaxed">
                Having a trusted home baby care specialist reduces the risk of postpartum anxiety and depression by allowing new mothers uninterrupted rest and recovery time.
              </p>
            </div>
          </div>

          {/* Advantage 4 */}
          <div 
            data-aos="fade-up"
            data-aos-duration="1600"
            className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-gray-100 hover:shadow-md transition-all duration-300"
          >
            <div className="p-4 bg-[#453364] text-white rounded-2xl text-2xl h-fit shrink-0">
              <FaChartLine />
            </div>
            <div>
              <h4 className="text-lg font-bold poppins-b text-gray-900 mb-2">Active Developmental Tracking</h4>
              <p className="text-sm sm:text-base poppins-t text-gray-700 leading-relaxed">
                Professionals monitor subtle physical cues, ensuring critical milestones like head control, rolling, sitting, and pincer grasps are intentionally encouraged.
              </p>
            </div>
          </div>

        </div>

        {/* HIGH-CONVERSION CTA BLOCK */}
        <div 
          data-aos="zoom-in"
          data-aos-duration="1400"
          className="rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden"
          style={{ backgroundColor: "#453364" }}
        >
          {/* Subtle Accent Overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

          <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/10">
            <FaShieldAlt className="text-emerald-400" /> Verified &amp; Certified Staff
          </span>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold poppins-b mb-4 leading-tight">
            Ready to Give Your Baby Professional Care?
          </h3>

          <p className="text-base sm:text-lg poppins-t text-slate-200 mb-8 max-w-2xl mx-auto">
            Book a verified, background-checked baby care specialist today and secure safe, expert care tailored to your family's daily routine.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#book-now" 
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-center"
            >
              Book a Trusted Baby Caregiver Today
            </a>
            <a 
              href="tel:+880123456789" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
            >
              <FaPhoneAlt /> Call for Consultation
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NannyCareBenefits;