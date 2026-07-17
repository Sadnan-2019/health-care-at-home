import React from "react";
import { FaTasks } from "react-icons/fa";

const Success = () => {

  const statistics = [
  {
    id: 1,
    number: "2,378+",
    title: "Successful Patient Recoveries",
  },
  {
    id: 2,
    number: "2,000+",
    title: "Healthcare Professionals",
  },
  {
    id: 3,
    number: "3,000+",
    title: "Medical Assistants",
  },
  {
    id: 4,
    number: "150+",
    title: "Experienced Physiotherapists",
  },
  {
    id: 5,
    number: "200+",
    title: "Registered Nurses",
  },
  {
    id: 6,
    number: "250+",
    title: "Professional Caregivers",
  },
];
  return (
    <div className="blog bg-[#453364]">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-semibold tracking-wide uppercase">
          Trusted Healthcare Provider
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Trusted by Thousands of Families Across Bangladesh
        </h2>

        <p className="mt-5 text-base md:text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
          Our experienced caregivers, nurses, physiotherapists and healthcare
          professionals have helped thousands of patients receive safe,
          compassionate and reliable home healthcare services.
        </p>
      </div>
      <div
  className="mt-12"
  data-aos="fade-up"
  data-aos-duration="1000"
>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 py-5">

    {statistics.map((item) => (

      <div
        key={item.id}
        className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
      >

        <h3 className="text-3xl md:text-4xl font-bold text-white">
          {item.number}
        </h3>

        <p className="mt-3 text-sm md:text-base font-medium text-gray-200 leading-6">
          {item.title}
        </p>

      </div>

    ))}

  </div>
</div>
    </div>
  );
};

export default Success;
