import React from "react";
import {
  FaShower,
  FaUtensils,
  FaBrain,
  FaNotesMedical,
  FaShieldAlt,
  FaThermometerHalf,
  FaEye,
  FaClipboardList,
} from "react-icons/fa";

const Nanycareabout = () => {
  // Structured Data Schema for Search Engines
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Baby Care Home Services in Bangladesh",
    provider: {
      "@type": "LocalBusiness",
      name: "Nanny Care Bangladesh",
    },
    serviceType: "Child Care & Newborn Services",
    areaServed: "Bangladesh",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Baby Care Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Newborn Hygiene & Daily Grooming",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Infant Nutrition & Meal Administration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Developmental & Cognitive Engagement",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Health, Safety & Medical Support",
          },
        },
      ],
    },
  };

  return (
    <div className="w-full text-gray-800 font-sans">
      {/* Inject JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* -------------------------------------------------------------
          SECTION 4: SERVICES INCLUDED IN OUR BABY CARE PACKAGES
      ------------------------------------------------------------- */}
      <section className="bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-6xl">
          <h2
            data-aos="fade-up"
            className="text-2xl sm:text-3xl md:text-4xl font-bold poppins-b mb-4 text-left"
            style={{ color: "#453364" }}
          >
            Services Included in Our Baby Care Packages
          </h2>

          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-base sm:text-lg leading-relaxed poppins-t mb-12 text-gray-700 max-w-3xl"
          >
            Our comprehensive{" "}
            <strong className="font-semibold text-[#453364]">
              child care at home
            </strong>{" "}
            packages cover every critical domain of early childhood management
            to give your baby a safe, structured, and nurturing environment:
          </p>

          {/* 2x2 Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Package 1: Newborn Hygiene */}
            <div
              data-aos="fade-up"
              data-aos-duration="1300"
              className="bg-[#453364] p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3.5 rounded-xl bg-[#453364]/10 text-white text-2xl">
                  <FaShower />
                </div>
                <h3 className="text-xl font-bold poppins-b text-white">
                  1. Newborn Hygiene & Daily Grooming
                </h3>
              </div>
              <ul className="space-y-3 poppins-t text-sm sm:text-base text-white pl-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#453364] font-bold mt-1">•</span>
                  <span>
                    Sponging and temperature-regulated{" "}
                    <strong className="font-semibold text-white">
                      safe bathing
                    </strong>{" "}
                    using hypoallergenic, baby-safe products.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#453364] font-bold mt-1">•</span>
                  <span>
                    Umbilical cord cleaning and daily monitoring for early signs
                    of infection.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#453364] font-bold mt-1">•</span>
                  <span>
                    Proper{" "}
                    <strong className="font-semibold text-white">
                      diaper hygiene
                    </strong>
                    , barrier cream application, and diaper rash prevention
                    protocols.
                  </span>
                </li>
              </ul>
            </div>

            {/* Package 2: Infant Nutrition */}
            <div
              data-aos="fade-up"
              data-aos-duration="1400"
              className="bg-[#453364] p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3.5 rounded-xl bg-[#453364]/10 text-white text-2xl">
                  <FaUtensils />
                </div>
                <h3 className="text-xl font-bold poppins-b text-white">
                  2. Infant Nutrition & Meal Administration
                </h3>
              </div>
              <ul className="space-y-3 poppins-t text-sm sm:text-base text-white pl-2">
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>
                    Breast milk handling, hygienic bottle preparation, and paced
                    bottle-feeding techniques.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>
                    Post-feeding positioning and thorough burping to prevent
                    infant reflux and colic distress.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>
                    Preparation of age-appropriate solid foods (weaning foods,
                    purees, porridge) for infants aged 6 months and older.
                  </span>
                </li>
              </ul>
            </div>

            {/* Package 3: Developmental Engagement */}
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="bg-[#453364] p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3.5 rounded-xl bg-[#453364]/10 text-white text-2xl">
                  <FaBrain />
                </div>
                <h3 className="text-xl font-bold poppins-b text-white">
                  3. Developmental & Cognitive Engagement
                </h3>
              </div>
              <ul className="space-y-3 poppins-t text-sm sm:text-base text-white pl-2">
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>
                    Supervised tummy time sessions to strengthen neck, shoulder,
                    and core muscles.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>
                    Visual and auditory sensory stimulation using high-contrast
                    cards, age-appropriate toys, and songs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>
                    Encouraging language exposure through interactive reading
                    and vocal responses during awake windows.
                  </span>
                </li>
              </ul>
            </div>

            {/* Package 4: Health & Medical Support */}
            <div
              data-aos="fade-up"
              data-aos-duration="1600"
              className="bg-[#453364] p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3.5 rounded-xl bg-[#453364]/10 text-white text-2xl">
                  <FaNotesMedical />
                </div>
                <h3 className="text-xl font-bold poppins-b text-white">
                  4. Health, Safety & Medical Support
                </h3>
              </div>
              <ul className="space-y-3 poppins-t text-sm sm:text-base text-white pl-2">
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>
                    Routine temperature, weight, and general physical condition
                    tracking.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>
                    Timely administration of prescribed medications or pediatric
                    supplements.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>
                    Digital maintenance of{" "}
                    <strong className="font-semibold text-white">
                      vaccination reminders
                    </strong>{" "}
                    and pediatric appointment logs.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          SECTION 5: NEWBORN BABY CARE AT HOME (NEONATAL CARE)
      ------------------------------------------------------------- */}
      <section className="bg-[#453364] py-12 md:py-20">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-6xl">
          <h2
            data-aos="fade-up"
            className="text-2xl sm:text-3xl md:text-4xl font-bold poppins-b mb-6 text-left"
            style={{ color: "white" }}
          >
            Newborn Baby Care at Home
          </h2>

          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-base sm:text-lg leading-relaxed poppins-t mb-10 text-white max-w-4xl"
          >
            The first 28 days of life the neonatal period are the most delicate
            phase of early development. Specialized{" "}
            <strong className="font-semibold text-white">
              newborn care at home
            </strong>{" "}
            focuses on protecting fragile immunity while establishing structured
            health patterns right from day one.
          </p>

          {/* Neonatal Care Priorities Block */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1400"
            className="bg-gradient-to-br from-[#453364]/5 via-purple-50/50 to-slate-50 border border-[#453364]/15 rounded-3xl p-6 sm:p-10 mb-10 shadow-sm"
          >
            <h3
              className="text-lg sm:text-xl font-bold text-center poppins-b mb-8 tracking-wide border-b border-[#453364]/10 pb-4"
              style={{ color: "black" }}
            >
              NEONATAL CARE PRIORITIES (0 – 28 DAYS)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Priority 1 */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <div className="p-3 bg-[#453364]/10 text-[#453364] rounded-full text-xl mb-3">
                  <FaShieldAlt />
                </div>
                <h4 className="font-bold poppins-b text-gray-900 mb-1">
                  1. Cord Care
                </h4>
                <p className="text-xs sm:text-sm poppins-t text-gray-600">
                  Keep dry and monitor daily until natural separation.
                </p>
              </div>

              {/* Priority 2 */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <div className="p-3 bg-[#453364]/10 text-[#453364] rounded-full text-xl mb-3">
                  <FaThermometerHalf />
                </div>
                <h4 className="font-bold poppins-b text-gray-900 mb-1">
                  2. Thermal Control
                </h4>
                <p className="text-xs sm:text-sm poppins-t text-gray-600">
                  Ensure proper swaddling; prevent hypothermia or overheating.
                </p>
              </div>

              {/* Priority 3 */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <div className="p-3 bg-[#453364]/10 text-[#453364] rounded-full text-xl mb-3">
                  <FaEye />
                </div>
                <h4 className="font-bold poppins-b text-gray-900 mb-1">
                  3. Jaundice Watch
                </h4>
                <p className="text-xs sm:text-sm poppins-t text-gray-600">
                  Monitor skin tone and eye sclera under bright natural light.
                </p>
              </div>

              {/* Priority 4 */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <div className="p-3 bg-[#453364]/10 text-[#453364] rounded-full text-xl mb-3">
                  <FaClipboardList />
                </div>
                <h4 className="font-bold poppins-b text-gray-900 mb-1">
                  4. Feeding Log
                </h4>
                <p className="text-xs sm:text-sm poppins-t text-gray-600">
                  Track latch efficiency, bottle volumes, and daily wet diapers.
                </p>
              </div>
            </div>
          </div>

          {/* Concluding Medical Assurance Paragraph */}
          <p
  data-aos="fade-up"
  data-aos-duration="1600"
  className="text-base sm:text-lg leading-relaxed poppins-t text-white max-w-4xl"
>
  Our specialized{" "}
  <strong className="font-semibold text-white">
    baby care nurses and trained nannies
  </strong>{" "}
  implement medical-grade sanitization protocols before every handling
  session. They assist with early latching difficulties, manage
  sleep-wake confusion, and spot early signs of neonatal distress   such
  as infant jaundice, dehydration, or respiratory changes—ensuring
  immediate medical escalation if needed.
</p>
        </div>
      </section>
    </div>
  );
};

export default Nanycareabout;
