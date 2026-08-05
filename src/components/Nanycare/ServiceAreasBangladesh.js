import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaPhoneAlt, 
  FaArrowRight, 
  FaCity 
} from 'react-icons/fa';

const ServiceAreasBangladesh = () => {
  // Structured Schema for Local Business Area Served SEO
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Professional Baby Care & Babysitting Services Bangladesh",
    "description": "Trusted baby care service, newborn nanny care, and home babysitting teams available across Dhaka City, Greater Dhaka, Chittagong, Sylhet, Rajshahi, and Khulna.",
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Dhaka" },
      { "@type": "AdministrativeArea", "name": "Gulshan" },
      { "@type": "AdministrativeArea", "name": "Banani" },
      { "@type": "AdministrativeArea", "name": "Uttara" },
      { "@type": "AdministrativeArea", "name": "Dhanmondi" },
      { "@type": "AdministrativeArea", "name": "Bashundhara R/A" },
      { "@type": "AdministrativeArea", "name": "Mirpur" },
      { "@type": "AdministrativeArea", "name": "Chittagong" },
      { "@type": "AdministrativeArea", "name": "Sylhet" }
    ]
  };

  const dhakaHubs = [
    { title: "Baby Care Service in Gulshan", desc: "Full coverage in Gulshan 1 & 2 for newborn care and infant nanny support." },
    { title: "Baby Care Service in Banani", desc: "Dedicated baby sitting service and flexible daily home care teams." },
    { title: "Baby Care Service in Uttara", desc: "Specialized baby care package coverage across Sectors 1–18." },
    { title: "Baby Care Service in Dhanmondi", desc: "Reliable home nanny care and pediatric hygiene assistance." },
    { title: "Baby Care Service in Bashundhara", desc: "Full-day & night-shift baby care specialists in Bashundhara R/A." },
{ 
  title: "Baby Care Service in Mirpur", 
  desc: "Professional child care at home with full-time trained nannies and baby care specialists." 
}  ];

  return (
    <section className="bg-slate-50 py-12 md:py-20 font-sans text-gray-800">
      {/* Inject Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-6xl">
        
        {/* H2 MAIN SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#453364] bg-[#453364]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Nationwide Home Care Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold poppins-b mb-4 text-gray-900">
            Service Areas in Bangladesh
          </h2>
          <p className="text-base sm:text-lg poppins-t text-gray-600 leading-relaxed">
            We offer specialized <strong>baby sitting service</strong> and verified home care teams across major urban hubs in Bangladesh, delivering safe <strong>baby care at home</strong> when you need it most.
          </p>
        </div>

        {/* H3 DHAKA CITY HIGHLIGHT HUB */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
            <FaCity className="text-2xl text-[#453364]" />
            <h3 className="text-xl sm:text-2xl font-bold poppins-b text-gray-900">
              Baby Care Service in Dhaka
            </h3>
          </div>

          <p className="text-sm sm:text-base poppins-t text-gray-700 leading-relaxed mb-8 max-w-4xl">
  Our verified nannies and baby care specialists provide comprehensive <strong>newborn care at home</strong> and professional baby sitting services across every major neighborhood in Dhaka City, including Baridhara, Mohammadpur, Lalmatia, Malibagh, Nikunja, and Old Dhaka.
</p>

          {/* GRID FOR H3 DHAKA SPECIFIC NEIGHBORHOODS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dhakaHubs.map((hub, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[#453364]">
                    <FaMapMarkerAlt className="shrink-0" />
                    <h3 className="font-bold text-base sm:text-lg poppins-b text-gray-900">
                      {hub.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm poppins-t text-gray-600 leading-relaxed">
                    {hub.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#453364]">
                  <FaCheckCircle className="text-emerald-500" />
                  <span>Verified Specialists Available</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GREATER DHAKA & REGIONAL HUBS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Greater Dhaka Card */}
          <div className="bg-white p-7 rounded-2xl border border-gray-200/80 shadow-sm">
            <h3 className="text-lg font-bold poppins-b text-gray-900 mb-3 flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#453364]" />
              Greater Dhaka &amp; Industrial Zones
            </h3>
            <p className="text-sm poppins-t text-gray-600 leading-relaxed mb-4">
              Extending professional <strong>child care at home</strong> to rapidly growing industrial &amp; residential zones:
            </p>
            <div className="flex flex-wrap gap-2">
              {['Savar', 'Gazipur', 'Narayanganj', 'Keraniganj'].map((zone, i) => (
                <span key={i} className="text-xs font-medium bg-slate-100 text-gray-800 px-3 py-1.5 rounded-lg border border-gray-200">
                  {zone}
                </span>
              ))}
            </div>
          </div>

          {/* Regional Hubs Card */}
          <div className="bg-white p-7 rounded-2xl border border-gray-200/80 shadow-sm">
            <h3 className="text-lg font-bold poppins-b text-gray-900 mb-3 flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#453364]" />
              Regional Metropolitan Hubs
            </h3>
            <p className="text-sm poppins-t text-gray-600 leading-relaxed mb-4">
              Providing vetted <strong>baby care specialist</strong> placements in key divisional headquarters:
            </p>
            <div className="flex flex-wrap gap-2">
              {['Chittagong Metro', 'Sylhet Sadar', 'Rajshahi', 'Khulna'].map((hub, i) => (
                <span key={i} className="text-xs font-medium bg-slate-100 text-gray-800 px-3 py-1.5 rounded-lg border border-gray-200">
                  {hub}
                </span>
              ))}
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
              Fast Home Placement
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold poppins-b mb-3">
              Need a Trusted Baby Sitting Service in Your Area?
            </h3>
            <p className="text-sm sm:text-base poppins-t text-purple-100 leading-relaxed">
              Book a verified <strong>baby care specialist</strong> in Dhaka, Chittagong, or Sylhet today. Choose a flexible <strong>baby care package</strong> customized for your home.
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <a
              href="#book-service"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-6 py-3.5 rounded-xl transition-all duration-300 text-sm shadow-md text-center"
            >
              <span>Book Your Local Baby Care Package</span>
              <FaArrowRight />
            </a>
            <a
              href="tel:+8801700000000"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 text-sm text-center"
            >
              <FaPhoneAlt className="text-xs" />
              <span>Call Area Care Coordinator</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceAreasBangladesh;