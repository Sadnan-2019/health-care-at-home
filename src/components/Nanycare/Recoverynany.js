import React from "react";

// Asset Imports
import babyfeed from "../../assets/nanysrecovery.jpg";
import babygrooming from "../../assets/baby-grooming.jpg";
import babysleep from "../../assets/babyslepping.jpg";
import diaper from "../../assets/babydiaper.jpg";

const Recoverynany = () => {
  // Service Card Data structured with keywords and semantic copy
  const services = [
    {
      id: "infant-feeding",
      image: babyfeed,
      alt: "Professional nanny providing infant care feeding in Bangladesh",
      title: "Infant Feeding & Nutrition",
      description:
        "Our trained nannies assist with bottle feeding, proper burping techniques after every meal, and hygienic preparation of age-appropriate semisolid foods and vegetable purees."
    },
    {
      id: "baby-grooming",
      image: babygrooming,
      alt: "Nanny performing baby grooming and safe bathing at home in Dhaka",
      title: "Baby Grooming & Hygiene",
      description:
        "Maintaining essential infant hygiene including gentle nail trimming, soft hair grooming, sponge baths, complete bathing, and early oral/gum care routines."
    },
    {
      id: "sleep-routine",
      image: babysleep,
      alt: "Newborn baby care at home showing managed baby sleep routine",
      title: "Baby Sleep Routine Management",
      description:
        "Establishing healthy, safe baby sleep routines. Our newborn caregivers ensure babies receive recommended rest hours and safe sleep monitoring essential for early childhood development."
    },
    {
      id: "diaper-care",
      image: diaper,
      alt: "Child care at home caregiver managing diaper hygiene and care",
      title: "Diaper Hygiene & Skin Care",
      description:
        "Prompt diaper changes, anti-rash hygiene maintenance, thorough cleansing, and daily warm sponge bathing to keep your baby clean, comfortable, and healthy."
    }
  ];

  // Schema.org Structured Data for Services
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Nanny & Baby Care Home Services in Bangladesh",
    "description": "Comprehensive infant care at home services including feeding, grooming, sleep routine management, and diaper hygiene.",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": service.title,
      "description": service.description
    }))
  };

  return (
    <section className="py-12 md:py-16 bg-white font-sans" aria-labelledby="nanny-services-heading">
      
      {/* Inject Schema.org JSON-LD for rich snippet rankings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#453364] bg-[#453364]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Professional Childcare Programs
          </span>
          <h2 
            id="nanny-services-heading" 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#453364] leading-tight mb-4"
          >
            Comprehensive Baby Care & Nanny Services in Bangladesh
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Every newborn and child is unique. Our professional baby caregivers follow structured, safe, and hygienic care routines tailored specifically to your baby&apos;s daily growth and home environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-[#F5F1EA] rounded-2xl p-5 border border-amber-100/60 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="overflow-hidden rounded-xl h-44 mb-5">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Recoverynany;