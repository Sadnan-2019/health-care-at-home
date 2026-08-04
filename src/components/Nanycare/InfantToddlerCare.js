import React from 'react';
import { FaBaby, FaRunning, FaChild, FaShieldAlt, FaComments, FaCheckCircle } from 'react-icons/fa';

const InfantToddlerCare = () => {
  // Structured Data Schema for Developmental & Toddler Care Services
  const toddlerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Infant & Toddler Care Services",
    "serviceType": "Early Childhood Development & Safety",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nanny Care Bangladesh"
    },
    "areaServed": "Bangladesh",
    "description": "Comprehensive developmental and childproofing care services for infants and toddlers aged 3 to 36 months.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Developmental Stage Care Matrix",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "3 to 6 Months Infant Support",
            "description": "Rolling support, visual tracking, and night routine preparation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "6 to 12 Months Weaning & Crawling Care",
            "description": "Solid food weaning, crawling safety, and separation anxiety comfort."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "12 to 36 Months Toddler Development",
            "description": "Active toddler-proofing, speech and vocabulary stimulation, potty training routines."
          }
        }
      ]
    }
  };

  return (
    <section className="bg-slate-50 py-12 md:py-20 font-sans text-gray-800">
      {/* Inject Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toddlerSchema) }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-6xl">
        
        {/* Section H2 Heading */}
        <h2 
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl font-bold poppins-b mb-6 text-left"
          style={{ color: "#453364" }}
        >
          Infant &amp; Toddler Care Services
        </h2>

        {/* Section Introductory Context */}
        <p 
          data-aos="fade-up"
          data-aos-duration="1200"
          className="text-base sm:text-lg leading-relaxed poppins-t mb-10 text-gray-700 max-w-4xl"
        >
          As your infant transitions past the neonatal stage into active toddlerhood (3 to 36 months), their daily needs shift from purely clinical care to active physical development, motor learning, and indoor safety.
        </p>

        {/* DEVELOPMENTAL STAGE CARE MATRIX */}
        <div 
          data-aos="zoom-in"
          data-aos-duration="1400"
          className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-gray-100 mb-10"
        >
          <div className="text-center mb-8 border-b border-gray-100 pb-4">
            <h3 
              className="text-lg sm:text-2xl font-bold poppins-b tracking-wide"
              style={{ color: "#453364" }}
            >
              DEVELOPMENTAL STAGE CARE MATRIX
            </h3>
            <p className="text-xs sm:text-sm poppins-t text-gray-500 mt-1">
              Tailored growth milestones and age-specific safety protocols
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Stage 1: 3 - 6 Months */}
            <div className="bg-[#453364]/5 p-6 rounded-2xl border-t-4 border-[#453364] hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#453364] text-white rounded-xl text-lg">
                  <FaBaby />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#453364]">Stage 1</span>
                  <h4 className="text-lg font-bold poppins-b text-gray-900">3 – 6 Months</h4>
                </div>
              </div>
              <ul className="space-y-3 text-sm sm:text-base poppins-t text-gray-700">
                <li className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-[#453364] mt-1 shrink-0 text-xs" />
                  <span><strong>Rolling Support:</strong> Head/neck stability and supervised floor posture.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-[#453364] mt-1 shrink-0 text-xs" />
                  <span><strong>Visual Tracking:</strong> High-contrast object engagement and tracking games.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-[#453364] mt-1 shrink-0 text-xs" />
                  <span><strong>Night Routine Prep:</strong> Establishing predictable circadian sleep cues.</span>
                </li>
              </ul>
            </div>

            {/* Stage 2: 6 - 12 Months */}
            <div className="bg-[#453364]/5 p-6 rounded-2xl border-t-4 border-[#453364] hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#453364] text-white rounded-xl text-lg">
                  <FaRunning />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#453364]">Stage 2</span>
                  <h4 className="text-lg font-bold poppins-b text-gray-900">6 – 12 Months</h4>
                </div>
              </div>
              <ul className="space-y-3 text-sm sm:text-base poppins-t text-gray-700">
                <li className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-[#453364] mt-1 shrink-0 text-xs" />
                  <span><strong>Solid Food Weaning:</strong> Hygienic puree and finger-food transition.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-[#453364] mt-1 shrink-0 text-xs" />
                  <span><strong>Crawling Safety:</strong> Supervised movement and sharp-edge protection.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-[#453364] mt-1 shrink-0 text-xs" />
                  <span><strong>Separation Comfort:</strong> Calming routines during parental working hours.</span>
                </li>
              </ul>
            </div>

            {/* Stage 3: 12 - 36 Months */}
            <div className="bg-[#453364]/5 p-6 rounded-2xl border-t-4 border-[#453364] hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#453364] text-white rounded-xl text-lg">
                  <FaChild />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#453364]">Stage 3</span>
                  <h4 className="text-lg font-bold poppins-b text-gray-900">12 – 36 Months</h4>
                </div>
              </div>
              <ul className="space-y-3 text-sm sm:text-base poppins-t text-gray-700">
                <li className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-[#453364] mt-1 shrink-0 text-xs" />
                  <span><strong>Active Toddler-Proofing:</strong> Active supervision during walking and running.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-[#453364] mt-1 shrink-0 text-xs" />
                  <span><strong>Speech &amp; Vocabulary Play:</strong> Storytelling, song repetition, and naming objects.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-[#453364] mt-1 shrink-0 text-xs" />
                  <span><strong>Potty Training Routines:</strong> Gentle habit-building and hygiene independence.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Practical Implementation & Safety Focus Box */}
        <div 
          data-aos="fade-up"
          data-aos-duration="1600"
          className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div className="flex gap-3 text-3xl text-[#453364] bg-[#453364]/10 p-4 rounded-2xl shrink-0">
            <FaShieldAlt />
            <FaComments />
          </div>
          <div>
            <h4 className="text-lg font-bold poppins-b text-gray-900 mb-2">
              Structured Safety &amp; Responsive Caregiving
            </h4>
            <p className="text-base leading-relaxed poppins-t text-gray-700">
              For toddlers, our trained caregivers focus on childproofing home spaces, supervising active play to prevent indoor injuries, establishing structured daily routines, and supporting early language acquisition through <strong className="font-semibold text-[#453364]">responsive caregiving</strong>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfantToddlerCare;