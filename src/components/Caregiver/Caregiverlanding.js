import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";
import "./Caregiver.css";

const Caregiverlanding = () => {
  const patientServices = [
    "Elderly Care",
    "Stroke Care",
    "Bedridden Care",
    "Dementia Care",
    "Post-Surgery Care",
  ];

  const valueProps = [
    "Trained & Verified Home Caregivers",
    "12 & 24 Hour Caregiver Service",
    "Personalized Home Patient Care",
    "Available Across Dhaka",
  ];

  return (
    <section className="h-auto caregiver relative bg-cover bg-center bg-no-repeat py-12 md:py-20 lg:py-24">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/70 lg:bg-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl text-left">

          {/* Trust Badge */}

          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 bg-purple-100 text-[#453364] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-4"
          >
            <span>Trusted Home Healthcare Service</span>
          </div>

          {/* SEO H1 */}

          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            Professional Home Caregiver Service in Bangladesh
          </h1>

          {/* Supporting SEO Copy */}

          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-4 text-base sm:text-lg text-white leading-relaxed font-medium"
          >
            Healthcare at Home Bangladesh provides
            <strong> professional home caregiver services</strong> for
            elderly care, stroke recovery, dementia care, post-surgery
            support and bedridden patients. Our trained caregivers deliver
            compassionate <strong>home patient care</strong> with flexible
            12-hour and 24-hour caregiver services across Dhaka, helping
            patients remain safe, comfortable and independent in their own
            homes.
          </p>

          {/* Trust Value Points */}

          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {valueProps.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5"
              >
                <FaCheckCircle className="text-emerald-500 text-lg flex-shrink-0" />

                <span className="text-sm sm:text-base font-semibold text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Service Keyword Chips */}

          <div
            data-aos="fade-up"
            data-aos-duration="1400"
            className="mt-6 flex flex-wrap gap-2 items-center"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-white mr-1">
              Care Services:
            </span>

            {patientServices.map((service, index) => (
              <span
                key={index}
                className="bg-white/90 border border-purple-200 text-[#453364] px-3 py-1 rounded-md text-xs sm:text-sm font-semibold shadow-sm"
              >
                {service}
              </span>
            ))}
          </div>

                    {/* CTA Buttons */}

          <div
            data-aos="fade-up"
            data-aos-duration="1600"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {/* Book Assessment */}

           

            {/* Call */}

            <a
              href="tel:01619848555"
              className="flex items-center gap-2  bg-[#453364] hover:bg-[#372650] text-white px-5 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 shadow-lg"
            >
              <FaPhoneAlt className="text-xs" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp */}

            <a
              href="https://wa.me/8801619848555?text=Hi,%20I%20need%20a%20professional%20home%20caregiver."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE57] text-white px-5 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 shadow-lg"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Trust Statistics */}

         

          {/* Hyper Local Coverage */}

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="mt-8 pt-4 border-t border-purple-100 text-xs sm:text-sm font-medium text-white"
          >
            <span className="font-bold text-white">
              Serving Across Dhaka:
            </span>{" "}
            Gulshan • Banani • Dhanmondi • Uttara • Mirpur • Bashundhara •
            Mohammadpur • Badda • Mohammadpur • Motijheel & all major areas of
            Dhaka.
          </div>

         

          

                  </div>
      </div>

      {/* Optional Bottom Gradient */}

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
    </section>
  );
};

export default Caregiverlanding;