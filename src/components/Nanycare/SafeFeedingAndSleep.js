import React from 'react';
import { 
  FaBaby, 
  FaTemperatureLow, 
  FaWineBottle, 
  FaBed, 
  FaShieldAlt, 
  FaSoap, 
  FaCheckCircle, 
  FaExclamationTriangle,
  FaHandsWash
} from 'react-icons/fa';

const SafeFeedingAndSleep = () => {
  // Structured Data Schema for Feeding & Sleep Safety Guidelines
  const safetySchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Safe Infant Feeding and Sleep Guidelines",
    "description": "Essential baby care guidelines for safe feeding workflows, microwave-free milk handling, and ABC safe sleep rules to prevent SIDS.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Sterilize",
        "text": "Boiling water sanitization of all bottle components, breast pump parts, and silicone teats after every single use."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Prepare",
        "text": "Formula or milk temperature check on inner wrist prior to administration."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Paced Feed",
        "text": "Hold bottle horizontally; allow natural pauses so infant actively sucks."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Burp & Elevate",
        "text": "Keep infant upright for 15-20 minutes post-feeding to prevent reflux and colic."
      }
    ]
  };

  return (
    <section className="bg-white py-12 md:py-20 font-sans text-gray-800">
      {/* Inject Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(safetySchema) }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-6xl">
        
        {/* =============================================================
            SECTION: SAFE FEEDING & NUTRITION TIPS
        ============================================================= */}
        <div className="mb-16">
          <h2 
            data-aos="fade-up"
            className="text-2xl sm:text-3xl md:text-4xl font-bold poppins-b mb-4 text-left"
            style={{ color: "#453364" }}
          >
            Safe Feeding &amp; Infant Nutrition Guidelines
          </h2>

          <p 
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-base sm:text-lg leading-relaxed poppins-t mb-10 text-gray-700 max-w-4xl"
          >
            Proper nutritional management during early childhood requires strict attention to hygiene, milk temperature, and feeding posture to prevent infant reflux, colic distress, and accidental choking.
          </p>

          {/* SAFE FEEDING WORKFLOW CARDS */}
          <div 
            data-aos="zoom-in"
            data-aos-duration="1400"
            className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-gray-200/80 mb-10 shadow-sm"
          >
            <h3 
              className="text-lg sm:text-xl font-bold poppins-b tracking-wide text-center mb-6 border-b border-gray-200 pb-3"
              style={{ color: "#453364" }}
            >
              SAFE FEEDING WORKFLOW
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              
              {/* Step 1 */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase bg-[#453364]/10 text-[#453364] px-2.5 py-1 rounded-full">
                      Step 01
                    </span>
                    <FaSoap className="text-[#453364]" />
                  </div>
                  <h4 className="font-bold poppins-b text-gray-900 mb-1">STERILIZE</h4>
                  <p className="text-xs sm:text-sm poppins-t text-gray-600">
                    Boiling water sanitization or steam sterilization of all teats, bottles, and pump parts.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase bg-[#453364]/10 text-[#453364] px-2.5 py-1 rounded-full">
                      Step 02
                    </span>
                    <FaTemperatureLow className="text-[#453364]" />
                  </div>
                  <h4 className="font-bold poppins-b text-gray-900 mb-1">PREPARE</h4>
                  <p className="text-xs sm:text-sm poppins-t text-gray-600">
                    Hygienic formula or breast milk thaw; inner-wrist temperature verification before feeding.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase bg-[#453364]/10 text-[#453364] px-2.5 py-1 rounded-full">
                      Step 03
                    </span>
                    <FaWineBottle className="text-[#453364]" />
                  </div>
                  <h4 className="font-bold poppins-b text-gray-900 mb-1">PACED FEED</h4>
                  <p className="text-xs sm:text-sm poppins-t text-gray-600">
                    Hold bottle horizontally; allow natural pauses so infant controls flow rate actively.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase bg-[#453364]/10 text-[#453364] px-2.5 py-1 rounded-full">
                      Step 04
                    </span>
                    <FaBaby className="text-[#453364]" />
                  </div>
                  <h4 className="font-bold poppins-b text-gray-900 mb-1">BURP &amp; ELEVATE</h4>
                  <p className="text-xs sm:text-sm poppins-t text-gray-600">
                    Maintain upright posture for 15–20 minutes post-feed to prevent infant reflux and colic.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* KEY NUTRITION & HANDLING RULES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex gap-4">
              <FaCheckCircle className="text-[#453364] text-xl shrink-0 mt-1" />
              <div>
                <h4 className="font-bold poppins-b text-gray-900 mb-1">Paced Bottle Feeding Technique</h4>
                <p className="text-sm poppins-t text-gray-700 leading-relaxed">
                  Never prop a bottle up with a pillow. Hold the bottle horizontally so the infant actively sucks rather than being overwhelmed by gravity-fed milk flow.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex gap-4">
              <FaCheckCircle className="text-[#453364] text-xl shrink-0 mt-1" />
              <div>
                <h4 className="font-bold poppins-b text-gray-900 mb-1">Strict Equipment Sterilization</h4>
                <p className="text-sm poppins-t text-gray-700 leading-relaxed">
                  Sterilize all bottle components, breast pump parts, and silicone teats in boiling water or a dedicated steam sterilizer after every single use.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex gap-4">
              <FaExclamationTriangle className="text-amber-600 text-xl shrink-0 mt-1" />
              <div>
                <h4 className="font-bold poppins-b text-gray-900 mb-1">Safe Breast Milk Thawing</h4>
                <p className="text-sm poppins-t text-gray-700 leading-relaxed">
                  Thaw frozen breast milk inside a refrigerator or warm water bath. <strong>Never use a microwave</strong>, which creates heat spots that burn infant mouths and destroy protective nutrients.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex gap-4">
              <FaCheckCircle className="text-[#453364] text-xl shrink-0 mt-1" />
              <div>
                <h4 className="font-bold poppins-b text-gray-900 mb-1">Hydration &amp; Solid Food Boundaries</h4>
                <p className="text-sm poppins-t text-gray-700 leading-relaxed">
                  Exclusively feed breast milk or infant formula until 6 months of age. Do not introduce water, cow's milk, or honey prior to pediatric guidelines.
                </p>
              </div>
            </div>

          </div>
        </div>


        {/* =============================================================
            SECTION: BABY SLEEP & HYGIENE GUIDELINES
        ============================================================= */}
        <div>
          <h2 
            data-aos="fade-up"
            className="text-2xl sm:text-3xl md:text-4xl font-bold poppins-b mb-4 text-left"
            style={{ color: "#453364" }}
          >
            Baby Sleep &amp; Essential Hygiene Protocols
          </h2>

          <p 
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-base sm:text-lg leading-relaxed poppins-t mb-10 text-gray-700 max-w-4xl"
          >
            Following evidence-based safe sleep standards is essential to prevent Sleep-Related Infant Death and Sudden Infant Death Syndrome (SIDS), while daily hygiene protocols safeguard fragile skin immunity.
          </p>

          {/* SAFE SLEEP ENVIRONMENT (ABC RULE) HIGHLIGHT BOX */}
          <div 
            data-aos="zoom-in"
            data-aos-duration="1400"
            className="rounded-3xl p-6 sm:p-8 text-white mb-12 shadow-md relative overflow-hidden"
            style={{ backgroundColor: "#453364" }}
          >
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <FaBed className="text-3xl text-purple-200" />
              <div>
                <h3 className="text-lg sm:text-2xl font-bold poppins-b">SAFE SLEEP ENVIRONMENT (ABC Rule)</h3>
                <p className="text-xs sm:text-sm text-purple-200 poppins-t">Core pediatric guidelines for safe infant rest</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-extrabold text-amber-300 poppins-b block mb-1">A – ALONE</span>
                <p className="text-sm poppins-t text-slate-100">
                  No pillows, heavy quilts, bumper pads, or soft plush toys inside the sleeping space.
                </p>
              </div>

              <div className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-extrabold text-amber-300 poppins-b block mb-1">B – BACK</span>
                <p className="text-sm poppins-t text-slate-100">
                  Always place the baby on their back to sleep for both naps and night routines.
                </p>
              </div>

              <div className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-extrabold text-amber-300 poppins-b block mb-1">C – CRIB</span>
                <p className="text-sm poppins-t text-slate-100">
                  Use a firm, flat, safety-tested mattress covered solely by a tight fitted sheet.
                </p>
              </div>

            </div>
          </div>

          {/* ESSENTIAL HYGIENE PROTOCOLS */}
          <h3 className="text-xl font-bold poppins-b text-gray-900 mb-6 flex items-center gap-2">
            <FaShieldAlt className="text-[#453364]" />
            Essential Home Hygiene Standards
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Diaper Hygiene */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-[#453364]/10 text-[#453364] rounded-xl w-fit mb-4 text-xl">
                <FaBaby />
              </div>
              <h4 className="font-bold poppins-b text-gray-900 mb-2">Diaper Management</h4>
              <p className="text-sm poppins-t text-gray-700 leading-relaxed">
                Change diapers promptly upon wetting or soilage. Wipe thoroughly from front to back (especially for baby girls) to prevent urinary tract infections (UTIs) and apply protective barrier cream.
              </p>
            </div>

            {/* Bathing Guidelines */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-[#453364]/10 text-[#453364] rounded-xl w-fit mb-4 text-xl">
                <FaSoap />
              </div>
              <h4 className="font-bold poppins-b text-gray-900 mb-2">Bathing Guidelines</h4>
              <p className="text-sm poppins-t text-gray-700 leading-relaxed">
                Keep bath duration between 5 to 10 minutes using warm water (tested with the inside wrist or elbow). Ensure skin folds around the neck, thighs, and armpits are fully dried to prevent fungal rashes.
              </p>
            </div>

            {/* Hand Sanitization */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-[#453364]/10 text-[#453364] rounded-xl w-fit mb-4 text-xl">
                <FaHandsWash />
              </div>
              <h4 className="font-bold poppins-b text-gray-900 mb-2">Hand Sanitization</h4>
              <p className="text-sm poppins-t text-gray-700 leading-relaxed">
                Babysitter must thoroughly wash hands with soap and running water for at least 20 seconds before handling the baby, preparing formula or meals, or conducting diaper changes.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SafeFeedingAndSleep;