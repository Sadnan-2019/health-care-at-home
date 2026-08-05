import React from 'react';
import { 
  FaUserCheck, 
  FaHeartbeat, 
  FaClock, 
  FaShieldAlt, 
  FaPhoneAlt, 
  FaArrowRight, 
  FaCheck, 
  FaInfoCircle,
  FaBuilding,
  FaGraduationCap,
  FaStethoscope
} from 'react-icons/fa';

const NannyVsBabysitterVsNurse = () => {
  // Enhanced Structured Data (Schema.org) for Search Engine Optimization
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "What is a Nanny, Babysitter, and Baby Care Nurse? Roles & Differences",
    "description": "Learn the definitions and key differences between a Babysitter, Live-in Nanny, and Certified Baby Care Nurse in Bangladesh to choose the best caregiver for your child.",
    "publisher": {
      "@type": "Organization",
      "name": "Trusted Baby Care Home Services BD"
    },
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Babysitter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Babysitter is a temporary or short-term caregiver hired on an hourly or daily basis to provide basic child supervision, feeding, and play during short parental absences."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Live-in Nanny?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Nanny is a dedicated full-time or live-in childcare professional who manages a child's daily routines, early development, hygiene, and household integration long-term."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Baby Care Nurse?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Baby Care Nurse is a medically trained healthcare professional (Diploma or BSc in Nursing) specialized in clinical newborn care, premature baby management, post-NICU surveillance, and medication administration."
        }
      }
    ]
  };

  const comparisonData = [
    {
      feature: "Primary Focus",
      babysitter: "Temporary / Hourly Supervision",
      nanny: "Daily Care Routine & Household Support",
      nurse: "Medical Care & Clinical Health Monitoring"
    },
    {
      feature: "Qualification Level",
      babysitter: "Basic Childcare Training",
      nanny: "Vocational Nanny Certification",
      nurse: "Diploma / BSc in Nursing"
    },
    {
      feature: "Medical Competency",
      babysitter: "Basic First Aid",
      nanny: "Standard First Aid & Hygiene",
      nurse: "Advanced Clinical, Injections, Vitals"
    },
    {
      feature: "Best For",
      babysitter: "Short errands, sudden meetings",
      nanny: "Working parents needing continuous help",
      nurse: "Premature infants, medical recovery, NICU step-down"
    },
    {
      feature: "Schedule Type",
      babysitter: "Hourly or Flexible Shifts",
      nanny: "Full-time live-in or 12-hour shifts",
      nurse: "Scheduled Day/Night Nursing Shifts"
    }
  ];

  return (
    <section className="bg-slate-50 py-12 md:py-20 font-sans text-gray-800">
      {/* Inject Structured Data for Local & Technical SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-6xl">
        
        {/* H2 MAIN HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#453364] bg-[#453364]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Childcare Role Guide &amp; Definitions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold poppins-b mb-4 text-gray-900">
            Nanny vs Babysitter vs Baby Care Nurse
          </h2>
          <p className="text-base sm:text-lg poppins-t text-gray-600 leading-relaxed">
            Understanding the distinct qualifications and responsibilities of each caregiver type helps you choose the safest, most reliable care for your family in Bangladesh.
          </p>
        </div>

        {/* DEFINITION SECTION FOR HIGH SEO KEYWORD INDEXING */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold poppins-b text-gray-900">
              Understanding Each Childcare Role
            </h3>
            <p className="text-sm text-gray-600 poppins-t mt-1">
              Clear definitions to help you determine which caregiver fits your home requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Definition 1: Babysitter */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-[#453364] shrink-0">
                  <FaClock className="text-lg" />
                </div>
                <h3 className="text-lg font-bold poppins-b text-gray-900">What is a Babysitter?</h3>
              </div>
              <p className="text-sm text-gray-600 poppins-t leading-relaxed">
                A <strong>Babysitter</strong> is a temporary caregiver hired to watch over children for short durations. Their primary focus is maintaining child safety, feeding pre-prepared meals, keeping infants entertained, and supervising bedtime routines during brief parental absences.
              </p>
            </div>

            {/* Definition 2: Live-In Nanny */}
            <div className="bg-white p-6 rounded-2xl border-2 border-[#453364] shadow-sm hover:shadow-md transition-shadow relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-[#453364] shrink-0">
                  <FaBuilding className="text-lg" />
                </div>
                <h3 className="text-lg font-bold poppins-b text-gray-900">What is a Nanny?</h3>
              </div>
              <p className="text-sm text-gray-600 poppins-t leading-relaxed">
                A <strong>Nanny</strong> (including Full-Time Day &amp; Live-In Nannies) is a long-term childcare specialist who actively manages a child&apos;s daily routines, early childhood development, emotional well-being, meal preparation, and hygiene habits on a fixed monthly schedule.
              </p>
            </div>

            {/* Definition 3: Baby Care Nurse */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-[#453364] shrink-0">
                  <FaStethoscope className="text-lg" />
                </div>
                <h3 className="text-lg font-bold poppins-b text-gray-900">What is a Baby Care Nurse?</h3>
              </div>
              <p className="text-sm text-gray-600 poppins-t leading-relaxed">
                A <strong>Baby Care Nurse</strong> is a certified clinical health professional holding a Diploma or BSc in Nursing. They specialize in clinical infant care, post-NICU surveillance, handling premature infants, vital monitoring, umbilical cord care, and administering prescribed medications.
              </p>
            </div>

          </div>
        </div>

        {/* ROLE SUMMARY CARDS */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold poppins-b text-gray-900 text-center mb-8">
            Quick Comparison Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Babysitter Summary Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-[#453364] font-bold mb-4">
                  <FaClock className="text-xl" />
                </div>
                <h4 className="text-xl font-bold poppins-b text-gray-900 mb-2">Babysitter</h4>
                <p className="text-xs text-gray-500 poppins-t mb-4">Short-term &amp; hourly support</p>
                
                <ul className="space-y-2.5 text-sm text-gray-600 poppins-t mb-6">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 text-xs mt-1 shrink-0" />
                    <span>Short-term support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 text-xs mt-1 shrink-0" />
                    <span>Basic supervision &amp; play</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 text-xs mt-1 shrink-0" />
                    <span>Hourly or daily shifts</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-gray-100 text-xs text-[#453364] font-semibold flex items-center gap-1.5">
                <FaInfoCircle /> Best for temporary parental errands
              </div>
            </div>

            {/* Live-in Nanny Summary Card */}
            <div className="bg-white p-6 rounded-2xl border-2 border-[#453364] shadow-md relative flex flex-col justify-between">
              <span className="absolute -top-3 right-6 bg-[#453364] text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                Most Popular
              </span>
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-[#453364] font-bold mb-4">
                  <FaUserCheck className="text-xl" />
                </div>
                <h4 className="text-xl font-bold poppins-b text-gray-900 mb-2">Live-In Nanny</h4>
                <p className="text-xs text-gray-500 poppins-t mb-4">Continuous developmental care</p>
                
                <ul className="space-y-2.5 text-sm text-gray-600 poppins-t mb-6">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 text-xs mt-1 shrink-0" />
                    <span>Continuous routine care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 text-xs mt-1 shrink-0" />
                    <span>Long-term emotional bond</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 text-xs mt-1 shrink-0" />
                    <span>Monthly full-time arrangement</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-gray-100 text-xs text-[#453364] font-semibold flex items-center gap-1.5">
                <FaInfoCircle /> Best for working parents needing routines
              </div>
            </div>

            {/* Baby Care Nurse Summary Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-[#453364] font-bold mb-4">
                  <FaHeartbeat className="text-xl" />
                </div>
                <h4 className="text-xl font-bold poppins-b text-gray-900 mb-2">Baby Care Nurse</h4>
                <p className="text-xs text-gray-500 poppins-t mb-4">Clinical support for special health needs</p>
                
                <ul className="space-y-2.5 text-sm text-gray-600 poppins-t mb-6">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 text-xs mt-1 shrink-0" />
                    <span>Clinical nursing expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 text-xs mt-1 shrink-0" />
                    <span>Post-op &amp; Preemie support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 text-xs mt-1 shrink-0" />
                    <span>Vitals monitoring &amp; medications</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-gray-100 text-xs text-[#453364] font-semibold flex items-center gap-1.5">
                <FaInfoCircle /> Best for newborns &amp; post-hospital care
              </div>
            </div>

          </div>
        </div>

        {/* DETAILED FEATURE MATRIX TABLE - DESKTOP */}
        <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#453364] text-white text-sm font-semibold poppins-b">
                <th className="p-4 pl-6">Feature / Attribute</th>
                <th className="p-4">Babysitter</th>
                <th className="p-4">Live-in Nanny</th>
                <th className="p-4 pr-6">Baby Care Nurse</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm poppins-t">
              {comparisonData.map((row, index) => (
                <tr key={index} className="hover:bg-purple-50/30 transition-colors">
                  <td className="p-4 pl-6 font-bold text-gray-900 poppins-b bg-slate-50/50">
                    {row.feature}
                  </td>
                  <td className="p-4 text-gray-600">{row.babysitter}</td>
                  <td className="p-4 font-medium text-gray-800">{row.nanny}</td>
                  <td className="p-4 pr-6 text-gray-600">{row.nurse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* COMPARISON CARDS - MOBILE */}
        <div className="md:hidden flex flex-col gap-4 mb-12">
          {comparisonData.map((row, index) => (
            <div key={index} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <h4 className="font-bold text-sm text-[#453364] poppins-b mb-3 pb-2 border-b border-gray-100">
                {row.feature}
              </h4>
              <div className="space-y-2 text-xs poppins-t">
                <div>
                  <span className="font-semibold text-gray-900 block">Babysitter:</span>
                  <span className="text-gray-600">{row.babysitter}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 block">Live-in Nanny:</span>
                  <span className="text-gray-600">{row.nanny}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 block">Baby Care Nurse:</span>
                  <span className="text-gray-600">{row.nurse}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HIGH-CONVERSION SEO CALL TO ACTION CARD */}
        <div 
          className="rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ backgroundColor: "#453364" }}
        >
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-purple-200 font-bold bg-white/10 px-3 py-1 rounded-full inline-block mb-3">
              Free Care Assessment
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold poppins-b mb-3">
              Unsure Which Caregiver Fits Your Baby&apos;s Needs?
            </h3>
            <p className="text-sm sm:text-base poppins-t text-purple-100 leading-relaxed">
              Consult our child health specialists in Bangladesh today. We will help you select between a trained <strong>babysitter</strong>, full-time <strong>live-in nanny</strong>, or certified <strong>baby care nurse</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <a
              href="#consult-specialist"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-6 py-3.5 rounded-xl transition-all duration-300 text-sm shadow-md text-center"
            >
              <span>Match Caregiver Profile</span>
              <FaArrowRight />
            </a>
            <a
              href="tel:+8801700000000"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 text-sm text-center"
            >
              <FaPhoneAlt className="text-xs" />
              <span>Talk to Care Expert</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NannyVsBabysitterVsNurse;