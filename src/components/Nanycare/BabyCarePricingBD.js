import React from 'react';
import { 
  FaCalculator, 
  FaUserShield, 
  FaClock, 
  FaCheckCircle, 
  FaPhoneAlt, 
  FaWhatsapp
} from 'react-icons/fa';

const BabyCarePricingBD = () => {
  // Structured Schema for Pricing Page / Local Service SEO
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "Baby Care Service Price in Bangladesh",
    "description": "Comprehensive price guide for home baby care services, nannies, babysitters, and specialized baby care nurses across Bangladesh.",
    "priceCurrency": "BDT",
    "eligibleRegion": {
      "@type": "Country",
      "name": "Bangladesh"
    }
  };

  const pricingData = [
    {
      model: "Part-Time Baby Sitting",
      duration: "8 Hours / Day",
      price: "৳600 – ৳1,200 / day",
      inclusions: "Daytime supervision, feeding, basic play, diaper care, and emergency home coverage.",
      popularFor: "Occasional or flexible daytime help"
    },
    {
      model: "Full-Time Day Nanny",
      duration: "12 Hours / Day",
      price: "৳12,000 – ৳20,000 / month",
      inclusions: "Complete daytime infant management, meal prep, hygiene, developmental play.",
      popularFor: "Working parents needing daily routines"
    },
    {
      model: "Live-in Nanny",
      duration: "24 Hours (Full Stay)",
      price: "৳21,000 – ৳36,000 / month",
      inclusions: "Round-the-clock care, night feedings, dedicated infant support, complete household integration.",
      popularFor: "Full-time parental support & shift workers"
    },
    {
      model: "Night Baby Care Specialist",
      duration: "12 Hours (Overnight)",
      price: "৳15,000 – ৳25,000 / month",
      inclusions: "Night sleep training, soothing, midnight bottle/diaper shifts, postpartum rest support.",
      popularFor: "New mothers recovering from childbirth"
    },
    {
      model: "Specialized Baby Care Nurse",
      duration: "12 to 24 Hours",
      price: "৳28,000 – ৳40,000+ / month",
      inclusions: "Premature care, vitals monitoring, medication administration, clinical post-hospital care.",
      popularFor: "Medical needs, preterm & ICU recovery"
    }
  ];

  return (
    <section className="bg-slate-50 py-12 md:py-20 font-sans text-gray-800">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-6xl">
        
        {/* H2 MAIN HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#453364] bg-[#453364]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Transparent Pricing &amp; Packages
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold poppins-b mb-4 text-gray-900">
            Baby Care Service Price in Bangladesh
          </h2>
          <p className="text-base sm:text-lg poppins-t text-gray-600 leading-relaxed">
            Understanding the <strong>baby care service price in Bangladesh</strong> helps families choose the right service model for their household budget. Costs vary based on babysitter and nannies  qualifications, duty duration, and specialized medical needs.
          </p>
        </div>

        {/* DESKTOP PRICING TABLE */}
        <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#453364] text-white text-sm font-semibold poppins-b">
                <th className="p-4 pl-6">Service Model</th>
                <th className="p-4">Shift / Duration</th>
                <th className="p-4">Estimated Price Range (BDT)</th>
                <th className="p-4 pr-6">Core Service Inclusions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm poppins-t">
              {pricingData.map((item, index) => (
                <tr key={index} className="hover:bg-purple-50/40 transition-colors">
                  <td className="p-4 pl-6 font-bold text-gray-900 poppins-b">
                    {item.model}
                  </td>
                  <td className="p-4 text-gray-600 flex items-center gap-1.5 mt-2">
                    <FaClock className="text-[#453364] text-xs" />
                    <span>{item.duration}</span>
                  </td>
                  <td className="p-4 font-bold text-[#453364]">
                    {item.price}
                  </td>
                  <td className="p-4 pr-6 text-gray-600 leading-relaxed">
                    {item.inclusions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE PRICING CARDS */}
        <div className="md:hidden flex flex-col gap-4 mb-12">
          {pricingData.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-base text-gray-900 poppins-b">{item.model}</h3>
                <span className="text-xs font-semibold bg-purple-100 text-[#453364] px-2.5 py-1 rounded-full shrink-0">
                  {item.duration}
                </span>
              </div>
              <p className="text-lg font-bold text-[#453364] mb-3">{item.price}</p>
              <p className="text-xs text-gray-600 poppins-t leading-relaxed">
                {item.inclusions}
              </p>
            </div>
          ))}
        </div>

        {/* KEY FACTORS INFLUENCING PRICING */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-sm mb-14">
          <h3 className="text-xl font-bold poppins-b text-gray-900 mb-4 flex items-center gap-2">
            <FaCalculator className="text-[#453364]" />
            Factors Affecting Baby Care Home Service Costs in BD
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm poppins-t text-gray-600">
            <div className="flex gap-3">
              <FaCheckCircle className="text-emerald-500 text-base shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900 block poppins-b mb-0.5">Babysitter  Experience</strong>
                Certified diploma nurses and senior nannies command higher tier pricing than basic babysitters.
              </div>
            </div>
            <div className="flex gap-3">
              <FaCheckCircle className="text-emerald-500 text-base shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900 block poppins-b mb-0.5">Location &amp; Hub</strong>
                Dhaka metro (Gulshan, Banani, Uttara) rates vary slightly compared to regional cities like Rajshahi or Khulna.
              </div>
            </div>
            <div className="flex gap-3">
              <FaCheckCircle className="text-emerald-500 text-base shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900 block poppins-b mb-0.5">Medical Needs</strong>
                Premature infant care, tube feeding, or post-NICU surveillance requires specialized nursing rates.
              </div>
            </div>
          </div>
        </div>

        {/* HIGH-CONVERSION HIGH-VALUE CTA CARD */}
        {/* HIGH-CONVERSION HIGH-VALUE CTA CARD */}
<div 
  className="rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
  style={{ backgroundColor: "#453364" }}
>
  {/* SEO-Optimized Marketing Content */}
  <div className="max-w-2xl text-center md:text-left">
    <span className="text-xs uppercase tracking-widest text-purple-200 font-bold bg-white/10 px-3 py-1 rounded-full inline-block mb-3">
      Nanny Service Pricing Guide
    </span>
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold poppins-b mb-3">
      Need a Custom Nanny &amp; Babysitter Package for Your Budget?
    </h3>
    <p className="text-sm sm:text-base poppins-t text-purple-100 leading-relaxed">
      Get an accurate cost estimate based on your shift duration, specific neighborhood in Bangladesh, and custom infant childcare requirements.
    </p>
  </div>

  {/* Clean Dual CTA Layout (Strictly 2 Buttons) */}
  <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
    {/* Button 1: Primary WhatsApp Pricing Action */}
    <a
      href="https://wa.me/8801619848555?text=Hello%2C%20I%20want%20to%20get%20a%20custom%20price%20quote%20for%20a%20nanny%20or%20babysitter%20package."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-6 py-3.5 rounded-xl transition-all duration-300 text-sm shadow-md text-center"
    >
      <FaWhatsapp className="text-base text-emerald-700" />
      <span>Get Quote via WhatsApp</span>
    </a>

    {/* Button 2: Secondary Call Dialer */}
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

export default BabyCarePricingBD;