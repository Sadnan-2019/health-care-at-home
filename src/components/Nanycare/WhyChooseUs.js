import React from 'react';
import { 
  FaUserShield, 
  FaGraduationCap, 
  FaClock, 
  FaTag, 
  FaHeadset 
} from 'react-icons/fa';

export const WhyChooseUs = ({ 
  locationName = "Dhaka, Bangladesh",
  agencyName = "Our Nanny Services" 
}) => {

  const features = [
    {
      id: "vetted-staff",
      title: "100% Vetted & Verified Nannies",
      subtitle: "Background Audits & Family Safety",
      icon: <FaUserShield className="text-xl text-[#453364]" />,
      description: "Every nanny and baby care specialist undergoes rigorous background verification, including NID authentication, police clearance, and permanent address checks for total peace of mind."
    },
    {
      id: "infant-training",
      title: "Specialized Infant Care Training",
      subtitle: "Safe Sleep & First Aid Certified",
      icon: <FaGraduationCap className="text-xl text-[#453364]" />,
      description: "Our nannies and baby nurses are trained in clinical safe sleep practices, newborn hygiene, infant CPR, and emergency response to ensure professional, high-standard infant care."
    },
    {
      id: "flexible-packages",
      title: "Flexible Nanny Service Packages",
      subtitle: "8-Hour Shifts to 24/7 Night Care",
      icon: <FaClock className="text-xl text-[#453364]" />,
      description: "Tailored nanny schedules designed for working parents—choose from 8-hour daily assistance, overnight baby care watches, or full-time live-in nanny support."
    },
    {
      id: "transparent-pricing",
      title: "Transparent Local Nanny Rates",
      subtitle: "No Hidden Agency Commissions",
      icon: <FaTag className="text-xl text-[#453364]" />,
      description: "Fair, straightforward monthly and hourly nanny rates tailored for local family budgets, guaranteed with transparent service contracts and zero hidden fees."
    },
    {
      id: "customer-support",
      title: "Dedicated Care Management",
      subtitle: "Active Nanny Replacement Guarantee",
      icon: <FaHeadset className="text-xl text-[#453364]" />,
      description: "Enjoy ongoing peace of mind with assigned care manager follow-ups, continuous quality checks, and prompt nanny replacement guarantees whenever needed."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Why Families Choose ${agencyName} in ${locationName}`,
    "itemListElement": features.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.title,
      "description": item.description
    }))
  };

  return (
    <section className="bg-slate-50 py-12 md:py-20 font-sans text-gray-800" aria-labelledby="why-choose-us-heading">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-6xl">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#453364] bg-[#453364]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Trusted Nanny & Baby Care Agency
          </span>
          <h2 id="why-choose-us-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Families Choose Our Nanny Services in {locationName}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Reliable, background-checked, and professionally trained nannies tailored to modern household needs.
          </p>
        </div>

        {/* VALUE PROPOSITION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => (
            <article 
              key={item.id} 
              className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-5 shrink-0" aria-hidden="true">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-purple-900 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;