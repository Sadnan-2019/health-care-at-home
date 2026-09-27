import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Clock, Heart, Users, MapPin,Stethoscope, 
  HeartHandshake, Activity, Syringe, 
  Thermometer, 
  CheckCircle2, 
  ShieldAlert, 
  Sparkles, 
  UserCheck, 
  Bath, 
  Utensils, 
  Move,
  Sun, 
  Moon, 
  RefreshCw, CalendarDays, HelpCircle,Award, 
  Check
  } from 'lucide-react';
const NursingHomeCareInDhanmondi = () => {
     return (
          <div>
               <section className="relative bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white py-12 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Fast Deployment Location Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full shadow-sm">
              <Clock className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>Fast Deployment Across Dhanmondi Residential & Commercial Areas</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Nursing Home Care in Dhanmondi
            </h1>

            {/* Summary Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Professional nursing and home care support for elderly people, recovering patients, bedridden individuals, and families who need reliable assistance at home in Dhanmondi.
            </p>

            {/* Core Services Provided */}
            <div className="pt-2">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Core Services Provided
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  'In-Home Nursing',
                  'Personal Care',
                  'Elderly Support',
                  'Post-Hospital Recovery'
                ].map((service, index) => (
                  <span
                    key={index}
                    className="bg-white border border-slate-200 text-slate-800 font-medium text-xs sm:text-sm px-3.5 py-2 rounded-lg shadow-sm flex items-center gap-2 hover:border-emerald-500 transition-colors"
                  >
                    <Heart className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Target Audience Bullet Highlights */}
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-xl p-4 sm:p-5 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                <Users className="w-4 h-4 text-emerald-600" /> Dedicated Care Designed For:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Senior Citizens
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Post-Surgical Patients
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Bedridden Loved Ones
                </li>
              </ul>
            </div>

            {/* Primary CTAs (Booking Action) */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3.5">
              <a
                href="tel:+8801619848555"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all text-base sm:text-lg"
              >
                <Phone className="w-5 h-5 fill-white" />
                Call Now
              </a>
              
              <a
                href="https://wa.me/8801619848555"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all text-base sm:text-lg"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                WhatsApp Chat
              </a>
            </div>

          </div>

          {/* Local Area & Trust Card Column */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl relative">
              <div className="absolute -top-3.5 right-6 bg-emerald-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Verified Local Care
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                Serving All Dhanmondi Blocks
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Our certified BSc/Diploma nurses and caregivers are stationed locally to reach your home in Dhanmondi within 1–2 hours.
              </p>

              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">Background Verified Staff</p>
                    <p className="text-xs text-slate-500">NID verified nurses with hospital clinical experience.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">24/7 Rapid Response</p>
                    <p className="text-xs text-slate-500">Continuous day/night shift coverage across Dhanmondi.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <section 
      id="home-nursing-services-dhanmondi" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white font-sans border-t border-slate-100"
      aria-labelledby="nursing-services-heading"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* H2 Heading & Section Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Dedicated In-Home Caregiver & Nursing Care</span>
          </div>

          <h2 
            id="nursing-services-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Home Nursing and Patient Care Services in Dhanmondi
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Professional nurses and caregivers support patients at home with routine clinical care, personal assistance, continuous health monitoring, and recovery support based on individual patient needs.
          </p>
        </div>

        {/* H3 Sub-sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* H3 Card 1: Professional Nursing Care at Home (Clinical) */}
          <article className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

            <div className="space-y-6">
              {/* Header Badge & Title */}
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Clinical Medical Support</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Professional Nursing Care at Home
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our certified Diploma and BSc registered nurses deliver doctor-directed medical care directly to your doorstep in Dhanmondi, ensuring safety, hygiene, and continuous clinical supervision.
              </p>

              {/* Covered Clinical Tasks List */}
              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Medication Administration:</strong> Precise timely dosage management as prescribed by attending doctors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Vital Signs Tracking:</strong> Continuous tracking of Blood Pressure (BP), pulse rate, oxygen saturation (SpO2), and temperature.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Thermometer className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Blood Sugar Monitoring:</strong> Regular diabetes tracking and insulin administration.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Syringe className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>IV & Injection Management:</strong> IV fluid setup, cannula maintenance, and intramuscular/intravenous injections.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Catheter & Tube Care:</strong> Hygienic Foley catheter insertion/care and Ryle's tube feeding assistance.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Staffing: BSc & Diploma Registered Nurses</span>
              <span className="text-emerald-700 font-bold bg-emerald-100/80 px-2.5 py-1 rounded-md">100% Verified</span>
            </div>
          </article>

          {/* H3 Card 2: Personal Care and Daily Assistance (Non-Clinical) */}
          <article className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-teal-500/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

            <div className="space-y-6">
              {/* Header Badge & Title */}
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-600/20">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Daily Living & Hygiene Support</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Personal Care and Daily Assistance
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Dedicated patient care attendants assist seniors, bedridden individuals, and recovering patients with everyday tasks, maintaining dignity, comfort, and personal hygiene.
              </p>

              {/* Covered Non-Clinical Tasks List */}
              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-3">
                  <Bath className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Bathing & Grooming Support:</strong> Assistance with sponge baths, shower assistance, oral hygiene, and hair care.</span>
                </li>
                <li className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Dressing & Personal Hygiene:</strong> Daily clothing changes, diaper changing, and skin fold cleanliness to prevent bedsores.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Move className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Mobility & Bed Transfer:</strong> Safe position shifting in bed, wheelchair transfer, and walk assistance around the house.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Utensils className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Feeding Support:</strong> Patient meal preparation support, oral feeding assistance, and hydration tracking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Daily Patient Comfort:</strong> Light room tidying, bedsheet changes, and compassionate companionship.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Staffing: Trained Patient Care Attendants</span>
              <span className="text-teal-700 font-bold bg-teal-100/80 px-2.5 py-1 rounded-md">Dhanmondi Local</span>
            </div>
          </article>

        </div>

      </div>
    </section>
    <section 
      id="care-durations-pricing-dhanmondi" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 font-sans border-t border-slate-200/80"
      aria-labelledby="care-durations-heading"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* H2 Heading & Section Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>Flexible Shift Plans & Transparent Pricing</span>
          </div>

          <h2 
            id="care-durations-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            12-Hour and 24-Hour Nursing Care in Dhanmondi
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Available care durations allow families to choose support based on the patient's condition, supervision requirements, and whether they need daytime, nighttime, or continuous care.
          </p>
        </div>

        {/* Package & Pricing Comparison Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Plan Comparison</span>
              <h3 className="text-xl font-bold">Nursing & Caregiver Package Breakdown</h3>
            </div>
            <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Dhanmondi Service Area Approved
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 text-xs uppercase tracking-wider font-bold">
                  <th className="py-4 px-6">Shift Duration</th>
                  <th className="py-4 px-6">Staff Qualification</th>
                  <th className="py-4 px-6">Best Suited For</th>
                  <th className="py-4 px-6">Daily Rate</th>
                  <th className="py-4 px-6">Monthly Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700 font-medium">
                
                {/* 8-Hour Package */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                    <Sun className="w-4 h-4 text-amber-500 shrink-0" /> 8-Hour Day Shift
                  </td>
                  <td className="py-4 px-6">
                    <span className="bg-slate-100 text-slate-800 font-semibold px-2.5 py-1 rounded-md text-xs border border-slate-200">
                      Patient Care Attendant
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-600">Elderly companion care, mobility & daytime meal support</td>
                  <td className="py-4 px-6 font-semibold text-slate-900">৳1,200 – ৳1,500</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">৳28,000 / mo</td>
                </tr>

                {/* 12-Hour Package (Highlighted) */}
                <tr className="bg-emerald-50/40 hover:bg-emerald-50/80 transition-colors border-l-4 border-l-emerald-600">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-600 shrink-0" /> 12-Hour Shift (Day/Night)
                    </div>
                    <span className="text-[10px] bg-emerald-600 text-white font-extrabold px-2 py-0.5 rounded uppercase mt-1 inline-block">Popular Choice</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="bg-emerald-100 text-emerald-900 font-semibold px-2.5 py-1 rounded-md text-xs border border-emerald-200">
                      Diploma Nurse / Senior Attendant
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-600">Scheduled meds, vitals tracking, feeding & post-op recovery</td>
                  <td className="py-4 px-6 font-semibold text-slate-900">৳1,800 – ৳2,200</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">৳35,000 / mo</td>
                </tr>

                {/* 24-Hour Package */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                    <Moon className="w-4 h-4 text-indigo-600 shrink-0" /> 24-Hour Continuous Care
                  </td>
                  <td className="py-4 px-6">
                    <span className="bg-indigo-50 text-indigo-900 font-semibold px-2.5 py-1 rounded-md text-xs border border-indigo-200">
                      2 Nurses / Dual Staff Rotation
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-600">Bedridden, stroke recovery, tracheostomy & critical care</td>
                  <td className="py-4 px-6 font-semibold text-slate-900">৳3,000 – ৳3,800</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">৳64,000 – ৳90,000 / mo</td>
                </tr>

              </tbody>
            </table>
          </div>
          
          <div className="p-4 bg-slate-100/60 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
            <span>* Rates vary depending on the patient's medical condition and required nursing specialization.</span>
            <span className="font-bold text-slate-700">Includes replacement guarantees & local supervision</span>
          </div>
        </div>

        {/* H3 Sub-sections Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* H3: 12-Hour Nursing Care */}
          <article className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-emerald-500 transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Sun className="w-5 h-5 text-emerald-600" />
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Day / Night Duty</span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">12-Hour Nursing Care</h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ideal for semi-critical patients who require active clinical monitoring or daily personal care during daytime or overnight hours without needing full 24-hour presence.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 font-medium pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Daytime medication & meal management
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Overnight vital monitoring & assistance
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Scheduled shift options (e.g., 8 AM - 8 PM)
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-emerald-700">
              Shift Choice: Day or Night Coverage
            </div>
          </article>

          {/* H3: 24-Hour Patient Care */}
          <article className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-emerald-500 transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <Moon className="w-5 h-5 text-indigo-600" />
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Round-the-Clock</span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">24-Hour Patient Care</h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Continuous round-the-clock shift-based care delivered by rotating nurses or caregivers for bedridden, stroke, post-surgical, or ICU step-down patients.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 font-medium pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Seamless 12h/12h staff shift rotations
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Bedsore prevention & position rotation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Continuous vital tracking & emergency alert
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-indigo-700">
              Full 24/7 Uninterrupted Supervision
            </div>
          </article>

          {/* H3: Short-Term and Long-Term Care */}
          <article className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-emerald-500 transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <CalendarDays className="w-5 h-5 text-teal-600" />
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Flexible Duration</span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">Short & Long-Term Care</h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Flexible care plans designed to adapt to your family's exact timeframe, whether you need temporary care after surgery or long-term care for elderly relatives.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 font-medium pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Short-term post-op care (3–14 days)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Monthly long-term senior home support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Easy plan adjustment or contract extensions
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-teal-700">
              No Rigid Commitments Required
            </div>
          </article>

        </div>

      </div>
    </section>
          </div>
     );
};

export default NursingHomeCareInDhanmondi;