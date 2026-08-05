import React from 'react';
import { FaClock, FaCalendarAlt, FaMoon, FaSun } from 'react-icons/fa';

const BabyCareRoutine = () => {
  // Schedule Data Array for Clean Code & Render Logic
  const routineSchedule = [
    {
      time: "07:00 AM – 08:00 AM",
      activity: "Morning Wake-up & Hygiene",
      focus: "Diaper change, face/hand clean, temperature check, morning bottle/breastfeed.",
      icon: <FaSun className="text-amber-500" />
    },
    {
      time: "08:00 AM – 09:30 AM",
      activity: "Tummy Time & Visual Play",
      focus: "Supervised floor play, high-contrast cards, motor skill encouragement.",
      icon: null
    },
    {
      time: "09:30 AM – 11:00 AM",
      activity: "Morning Nap (Nap 1)",
      focus: "Sleep environment setup (darkened room, white noise, safe flat surface).",
      icon: <FaMoon className="text-indigo-400" />
    },
    {
      time: "11:00 AM – 12:30 PM",
      activity: "Mid-day Feeding & Bathing",
      focus: "Temperature-controlled warm bath, skin moisturizing, midday milk feeding.",
      icon: null
    },
    {
      time: "12:30 PM – 02:00 PM",
      activity: "Soft Outdoor/Window Light Play",
      focus: "Gentle interactive play, nursery rhymes, language engagement.",
      icon: null
    },
    {
      time: "02:00 PM – 03:30 PM",
      activity: "Afternoon Nap (Nap 2)",
      focus: "Supervised crib sleep with regular breathing and position monitoring.",
      icon: <FaMoon className="text-indigo-400" />
    },
    {
      time: "03:30 PM – 05:00 PM",
      activity: "Weaning Meal / Solid Feeding",
      focus: "Age-appropriate porridge or puree administration followed by water hygiene.",
      icon: null
    },
    {
      time: "05:00 PM – 07:00 PM",
      activity: "Evening Wind-down",
      focus: "Quiet interaction, diaper check, preparation for handover or night shift.",
      icon: <FaMoon className="text-purple-500" />
    }
  ];

  // Structured Data Schema for Search Engines
  const routineSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Daily Baby Care Routine for Infants",
    "description": "An age-appropriate daily schedule for a 6-month-old infant to stabilize circadian rhythm, reduce fussiness, and support healthy development.",
    "step": routineSchedule.map((item, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": item.activity,
      "text": `${item.time}: ${item.focus}`
    }))
  };

  return (
    <section className=" py-12 md:py-20 font-sans text-gray-800">
      {/* Inject JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routineSchema) }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-6xl">
        
        {/* Section Heading */}
        <h2 
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl font-bold poppins-b mb-4 text-left"
          style={{ color: "#453364" }}
        >
          Structured Daily Baby Care Routine
        </h2>

        {/* Lead Paragraph */}
        <p 
          data-aos="fade-up"
          data-aos-duration="1200"
          className="text-base sm:text-lg leading-relaxed poppins-t mb-10 text-gray-700 max-w-4xl"
        >
          A predictable daily schedule stabilizes an infant's circadian rhythm, reduces fussiness, and promotes longer sleep stretches. Below is an example of an age-appropriate routine designed for a 6-month-old child to ensure balanced nourishment, growth, and rest throughout the day.
        </p>

        {/* Schedule Table Container */}
        <div 
          data-aos="zoom-in"
          data-aos-duration="1400"
          className="bg-white rounded-3xl shadow-sm border border-gray-200/80 overflow-hidden mb-10"
        >
          {/* Table Header Banner */}
          <div 
            className="p-6 text-white flex items-center justify-between"
            style={{ backgroundColor: "#453364" }}
          >
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-2xl text-purple-200" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold poppins-b">Sample 6-Month Infant Schedule</h3>
                <p className="text-xs sm:text-sm text-purple-200 poppins-t">Balanced day-to-night care plan</p>
              </div>
            </div>
            <span className="hidden sm:inline-block bg-white/10 text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
              Age: 6+ Months
            </span>
          </div>

          {/* Responsive Table Wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/80 border-b border-gray-200 text-gray-900 text-sm poppins-b">
                  <th className="py-4 px-6 min-w-[180px] font-bold">
                    <span className="flex items-center gap-2">
                      <FaClock className="text-[#453364]" /> Time Frame
                    </span>
                  </th>
                  <th className="py-4 px-6 min-w-[200px] font-bold">Core Activity</th>
                  <th className="py-4 px-6 min-w-[300px] font-bold">Primary Care Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 poppins-t text-sm sm:text-base text-gray-700">
                {routineSchedule.map((row, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-slate-50/80 transition-colors duration-150"
                  >
                    <td className="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap bg-slate-50/30">
                      <div className="flex items-center gap-2">
                        {row.icon}
                        <span>{row.time}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-[#453364]">
                      {row.activity}
                    </td>
                    <td className="py-4 px-6 leading-relaxed">
                      {row.focus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-xs sm:text-sm poppins-t text-gray-500 italic max-w-3xl">
          * Note: Care routines are customized based on your baby's individual sleep cues, feeding preferences, and pediatric guidelines.
        </p>

      </div>
    </section>
  );
};

export default BabyCareRoutine;