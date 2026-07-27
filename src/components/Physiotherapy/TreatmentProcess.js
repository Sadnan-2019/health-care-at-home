import React from "react";
import { 
  FaCalendarCheck, 
  FaUserMd, 
  FaClipboardList, 
  FaRunning, 
  FaChartLine, 
  FaPhoneAlt, 
  FaWhatsapp 
} from "react-icons/fa";

const TreatmentProcess = () => {
  const steps = [
    {
      step: "Step 01",
      title: "Book Your Appointment",
      desc: "Call or message us on WhatsApp to schedule a home visit. Choose a flexible time slot that suits your schedule.",
      keywordTag: "Physiotherapy Home Service in Dhaka",
      icon: <FaCalendarCheck className="text-2xl text-[#453364]" />,
    },
    {
      step: "Step 02",
      title: "Initial Home Assessment",
      desc: "Our qualified physiotherapist at home conducts a thorough physical assessment, evaluating pain, muscle strength, and joint mobility.",
      keywordTag: "Physiotherapist at Home",
      icon: <FaUserMd className="text-2xl text-[#453364]" />,
    },
    {
      step: "Step 03",
      title: "Personalized Recovery Plan",
      desc: "We design an evidence-based home rehabilitation plan tailored specifically to your condition, medical history, and mobility goals.",
      keywordTag: "Recovery Plan & Rehabilitation",
      icon: <FaClipboardList className="text-2xl text-[#453364]" />,
    },
    {
      step: "Step 04",
      title: "Home Physiotherapy Sessions",
      desc: "Receive professional hands-on treatment, targeted exercises, and electrotherapy using portable equipment in the comfort of your home.",
      keywordTag: "Home Care Physiotherapy",
      icon: <FaRunning className="text-2xl text-[#453364]" />,
    },
    {
      step: "Step 05",
      title: "Progress Monitoring & Re-evaluation",
      desc: "We track your recovery after every session, adjusting exercises to ensure continuous improvement and long-term pain relief.",
      keywordTag: "Rehabilitation Services in Dhaka",
      icon: <FaChartLine className="text-2xl text-[#453364]" />,
    },
  ];

  return (
    <section className="blog py-12 md:py-20 lg:py-24  ">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
        
        {/* Header Section with H2 SEO Target */}
        <div className="max-w-3xl">
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase"
            style={{ backgroundColor: "#F5F1EA", color: "#453364" }}
          >
            Simple 5-Step Process
          </span>

          <h2 
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ color: "#453364" }}
          >
            How Our Home Physiotherapy Service Works
          </h2>

          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Getting professional **home healthcare in Dhaka** is seamless. From your initial call to your final recovery milestone, our certified doctors guide your complete **physiotherapy treatment** journey at home.
          </p>
        </div>

        {/* Vertical / Horizontal Step Timeline */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((item, index) => (
            <div 
              key={index}
              className="bg-[#453364] rounded-2xl p-6 border border-purple-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-md bg-[#F5F1EA] text-[#453364]">
                    {item.step}
                  </span>
                  <div className="p-3 rounded-xl bg-purple-50">
                    {item.icon}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-white text-xs sm:text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              {/* Micro Keyword Tag */}
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] font-medium text-white   px-2.5 py-1 rounded-full inline-block">
                  {item.keywordTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Note & Direct Call Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-purple-100 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-2xl">
            <h4 className="text-xl font-bold text-[#453364]">
              Ready to start your recovery journey today?
            </h4>
            <p className="text-gray-600 text-sm mt-1">
              We offer flexible same-day and scheduled home visits across Gulshan, Banani, Uttara, Dhanmondi, Mirpur, and all major areas in Dhaka.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href="tel:01619848555"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-[#453364] text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition shadow-sm"
            >
              <FaPhoneAlt className="text-xs" />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/8801619848555?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20home%20physiotherapy%20process."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition shadow-sm"
            >
              <FaWhatsapp className="text-base" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TreatmentProcess;