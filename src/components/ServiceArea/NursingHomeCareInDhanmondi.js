import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock,
  Heart,
  Users,
  MapPin,
  Stethoscope,
  HeartHandshake,
  Activity,
  Syringe,
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
  CalendarDays,
  Check,
  Footprints,
  ClipboardList,
  Smile,
  Brain,
  Bed,
  Home,
  Bandage,
  HeartPulse,
  PhoneCall,
  Dumbbell,
  ClipboardCheck,
  MessageSquareHeart,
  Pill,
  ArrowRight,
  FileText,
  Zap,
  Navigation,
  HospitalIcon,
  Building2,
  HelpCircle,
  ChevronDown,
  MessageSquare,
  User,
  Send,
} from "lucide-react";

import  heroBg from "../../assets/nursingcareindhanmondi.webp"
import { Helmet } from "react-helmet-async";
const NursingHomeCareInDhanmondi = () => {

const inclusions = [
    {
      icon: Activity,
      title: "Routine Vital Signs Monitoring",
      description: "Around-the-clock tracking of blood pressure, pulse rate, oxygen levels (SpO2), and blood sugar to catch any physical changes early.",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200"
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Timely administration of all prescribed oral, IV, and injection medicines strictly following your attending doctor's instructions.",
      color: "text-blue-600 bg-blue-50 border-blue-200"
    },
    {
      icon: Bath,
      title: "Hygiene & Personal Grooming",
      description: "Gentle daily assistance with sponge baths, warm showers, oral care, hair grooming, and keeping skin dry and comfortable.",
      color: "text-indigo-600 bg-indigo-50 border-indigo-200"
    },
    {
      icon: Utensils,
      title: "Dedicated Feeding Support",
      description: "Patient feeding care adapted to their needs—whether oral meals, precise Ryle's tube feeding, or PEG tube nutrition routines.",
      color: "text-amber-600 bg-amber-50 border-amber-200"
    },
    {
      icon: Move,
      title: "Mobility & Position Shifting",
      description: "Safe bed transfers, wheelchair support, and scheduled 2-hour body re-positioning to prevent painful pressure sores.",
      color: "text-rose-600 bg-rose-50 border-rose-200"
    },
    {
      icon: Bandage,
      title: "Sterile Wound Dressing",
      description: "Professional care for post-surgical incisions, bedsores, and diabetic ulcers using clean, aseptic dressing techniques.",
      color: "text-teal-600 bg-teal-50 border-teal-200"
    },
    {
      icon: ShieldAlert,
      title: "Catheter & Drainage Maintenance",
      description: "Hygienic urinary catheter handling, drainage bag flushing, and infection prevention monitoring.",
      color: "text-cyan-600 bg-cyan-50 border-cyan-200"
    },
    {
      icon: ClipboardCheck,
      title: "Daily Nursing Logs",
      description: "Detailed daily patient charts recording medicines given, vital trends, diet intake, and doctor-directed recovery steps.",
      color: "text-purple-600 bg-purple-50 border-purple-200"
    },
    {
      icon: MessageSquareHeart,
      title: "Family Status Updates",
      description: "Transparent, regular communication sent straight to family members so you always know exactly how your loved one is doing.",
      color: "text-emerald-700 bg-emerald-100/80 border-emerald-300"
    }
  ];

  const steps = [
    {
      stepNumber: "01",
      icon: ClipboardList,
      title: "Tell Us About the Patient",
      description: "Share essential details including the patient's age, medical conditions, current health status, exact location in Dhanmondi, and specific care preferences.",
      badge: "Step 1: Initial Inquiry",
      accentColor: "border-emerald-500 text-emerald-600 bg-emerald-50"
    },
    {
      stepNumber: "02",
      icon: Stethoscope,
      title: "Discuss the Required Care",
      description: "Consult with our care coordinator to determine whether your patient needs a clinical BSc/Diploma registered nurse or a trained patient care attendant.",
      badge: "Step 2: Care Assessment",
      accentColor: "border-blue-500 text-blue-600 bg-blue-50"
    },
    {
      stepNumber: "03",
      icon: Clock,
      title: "Select the Care Duration",
      description: "Choose the shift duration that fits your family's routine—8-hour day shifts, 12-hour day/night shifts, or continuous 24-hour round-the-clock care.",
      badge: "Step 3: Schedule Choice",
      accentColor: "border-indigo-500 text-indigo-600 bg-indigo-50"
    },
    {
      stepNumber: "04",
      icon: UserCheck,
      title: "Arrange the Nurse or Caregiver",
      description: "We match background-checked, NID-verified local nursing staff based on your patient's specific medical profile and household preferences.",
      badge: "Step 4: Verification & Match",
      accentColor: "border-purple-500 text-purple-600 bg-purple-50"
    },
    {
      stepNumber: "05",
      icon: Home,
      title: "Start Care at Home",
      description: "Prompt staff deployment to your Dhanmondi residence, supported by ongoing supervision, daily care logs, and continuous care management.",
      badge: "Step 5: Active Care",
      accentColor: "border-emerald-600 text-emerald-700 bg-emerald-100/80"
    }
  ];

const differentiators = [
    {
      icon: ShieldCheck,
      title: "Trained & Verified Staff",
      description: "Certified BSc/Diploma registered nurses and NID-verified patient caregivers with rigorous background checks.",
      highlight: "100% Background Checked",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200"
    },
    {
      icon: Clock,
      title: "Flexible Shift Options",
      description: "Adaptable scheduling to match your routine—choose between 8-hour, 12-hour, or continuous 24-hour daily/monthly coverage.",
      highlight: "8h / 12h / 24h Care Shifts",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      icon: UserCheck,
      title: "Personalized Care Plans",
      description: "Customized patient care tailored precisely to your attending doctor's prescriptions and unique health needs.",
      highlight: "Doctor-Directed Care",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200"
    },
    {
      icon: Home,
      title: "In-Home Comfort & Safety",
      description: "Rest and recover peacefully at home while avoiding secondary hospital-acquired infections and expensive cabin daily charges.",
      highlight: "Safe Home Healing",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-200"
    },
    {
      icon: FileText,
      title: "Transparent Communication",
      description: "Detailed daily nursing progress logs and regular health updates sent directly to family members for complete peace of mind.",
      highlight: "Daily Health Tracking",
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200"
    },
    {
      icon: Zap,
      title: "Rapid Local Dispatch",
      description: "Fast deployment and prompt response times for nursing staff across all residential roads in Dhanmondi.",
      highlight: "Fast Dhanmondi Deployment",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200"
    }
  ];
const roadsAndBlocks = [
    "Satmasjid Road",
    "Road 2 & 2A",
    "Road 8A",
    "Road 15 (Old 28)",
    "Road 27 (Mirpur Road)",
    "Green Road",
    "Dhanmondi Lake Area",
    "Central Road",
    "Sobhanbag & Kalabagan End"
  ];

  const medicalLandmarks = [
    { name: "Anwer Khan Modern Medical College", sub: "Dhanmondi 8" },
    { name: "Popular Diagnostic Centre", sub: "Dhanmondi 2" },
    { name: "Bangladesh Medical College", sub: "Dhanmondi 14/A" },
    { name: "Square Hospital", sub: "Panthapath / Green Road" },
    { name: "Labaid Specialized Hospital", sub: "Dhanmondi 4" },
    { name: "Ibn Sina Hospital", sub: "Dhanmondi 15" }
  ];

  const nearbyAreas = [
    "Mohammadpur",
    "Lalmatia",
    "Jigatola",
    "Kalabagan",
    "Shankar",
    "New Market",
    "Elephant Road",
    "Kathalbagan"
  ];


  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is nursing home care in Dhanmondi?",
      answer: "Nursing home care in Dhanmondi provides professional clinical nursing and personal caregiver assistance directly inside a patient's residence. This allows individuals recovering from illness, surgery, or managing chronic conditions to receive quality healthcare in the comfort of their home without lengthy hospital stays."
    },
    {
      question: "Do you provide nursing care at home in Dhanmondi?",
      answer: "Yes, we deploy certified Diploma and BSc registered nurses as well as background-checked patient caregivers to residences across all roads and blocks in Dhanmondi."
    },
    {
      question: "Do you provide 12-hour and 24-hour care?",
      answer: "Yes, we offer flexible scheduling options including 8-hour day shifts, 12-hour day or night shifts, and full 24-hour continuous round-the-clock home care."
    },
    {
      question: "Can I arrange short-term nursing care?",
      answer: "Yes, you can hire nursing support for short periods—such as a few days for post-surgical recovery or temporary caregiver relief—as well as long-term monthly arrangements."
    },
    {
      question: "Do you provide elderly care at home?",
      answer: "Yes, our caregivers assist senior citizens with daily personal hygiene, medication reminders, mobility support, dementia safety management, and general companionship."
    },
    {
      question: "Can you provide post-hospital or post-surgical care?",
      answer: "Yes, our nurses follow your attending doctor's discharge plan to provide sterile wound dressings, surgical drain maintenance, IV/injection administration, and continuous vital monitoring."
    },
    {
      question: "Do you provide physiotherapy at home?",
      answer: "Yes, qualified physiotherapists conduct home visits in Dhanmondi to deliver specialized rehabilitation for stroke recovery, joint stiffness, post-orthopedic surgery, and balance training."
    },
    {
      question: "How do I arrange a nurse or caregiver?",
      answer: "Simply contact us by phone or message, share the patient's condition and location in Dhanmondi, select your preferred shift duration, and we will match and deploy a verified caregiver to your home."
    },
    {
      question: "How much does home nursing care in Dhanmondi cost?",
      answer: "Pricing depends on whether you require a registered nurse or a patient attendant, as well as the shift duration (8, 12, or 24 hours). We provide a transparent price breakdown before care begins."
    },
    {
      question: "Can care be customized according to the patient's condition?",
      answer: "Yes, every care plan is tailored to the patient's specific medical diagnosis, mobility level, and prescribed doctor instructions rather than a standard one-size-fits-all package."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data for SEO (FAQPage Schema)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };


  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    condition: '',
    location: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    setSubmitted(true);
  };

  const whatsappNumber = "01619848555";
  const formattedWhatsapp = "8801619848555";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Nursing Home Care Services in Dhanmondi",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Health Care at Home Bangladesh",
      "url": "https://hcah.mrg.com.bd",
      "logo": "https://hcah.mrg.com.bd/assets/logo.png",
      "telephone": "+8801619848555"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Dhanmondi, Dhaka, Bangladesh"
    },
    "serviceType": "In-Home Nursing, Elderly Care, Caregiver Support, Home Physiotherapy",
    "description": "24/7 professional home nursing care, trained patient attendants, and physiotherapy services available across all roads in Dhanmondi.",
    "url": "https://hcah.mrg.com.bd/nursing-home-care-dhanmondi"
  };
  return (
    <div>

      <Helmet>
      {/* Standard Meta Tags */}
      <title>Nursing Home Care Services in Dhanmondi | Call 01619848555</title>
      <meta
        name="description"
        content="Book professional home care services in Dhanmondi, Dhaka. Hire certified BSc/Diploma nurses, patient attendants, and physiotherapists for 12h or 24h home shifts."
      />
      <meta
        name="keywords"
        content="Nursing home care Dhanmondi, Home nurse service Dhanmondi, Patient attendant service Dhanmondi, Elderly home care Dhanmondi, Home physiotherapy Dhanmondi"
      />

      {/* Canonical Tag (Landing Page Path) */}
      <link rel="canonical" href="https://hcah.mrg.com.bd/nursing-home-care-dhanmondi" />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:title" content="Nursing Home Care Services in Dhanmondi | In-Home Patient Support" />
      <meta
        property="og:description"
        content="Reliable home nursing, caregiver deployment, and post-hospital recovery care across Dhanmondi blocks and roads."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hcah.mrg.com.bd/nursing-home-care-dhanmondi" />
      <meta property="og:image" content="https://hcah.mrg.com.bd/static/media/nurseservice.add7cff892fcfd3d80f4.webp" />
      <meta property="og:site_name" content="Health Care at Home Bangladesh" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Nursing Home Care Services in Dhanmondi | In-Home Patient Support" />
      <meta
        name="twitter:description"
        content="Find certified home nurses, patient attendants, and physiotherapists in Dhanmondi. Explore 12-hour and 24-hour shift options."
      />
      <meta name="twitter:image" content="https://hcah.mrg.com.bd/static/media/nurseservice.add7cff892fcfd3d80f4.webp" />

      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
      <section className="relative bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white py-12 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-slate-950/30"></div>
      </div>
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Fast Deployment Location Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full shadow-sm">
              <Clock className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>Fast Deployment Across Dhanmondi Residential &amp; Commercial Areas</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#d44401] leading-tight tracking-tight">
              Nursing Home Care in Dhanmondi
            </h1>

            {/* Summary Paragraph */}
            <p className="text-base sm:text-lg text-[#d44401]  leading-relaxed max-w-2xl">
              Professional nursing and home care support for elderly people, recovering patients, bedridden individuals, and families who need reliable assistance at home in Dhanmondi.
            </p>

            {/* Core Services Provided */}
            <div className="pt-2">
              <span className="block text-xs font-bold text-[#d44401] uppercase tracking-wider mb-3">
                Core Services Provided
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "In-Home Nursing",
                  "Personal Care",
                  "Elderly Support",
                  "Post-Hospital Recovery",
                ].map((service, index) => (
                  <span
                    key={index}
                    className="bg-white/80 border border-slate-200 text-slate-900 font-medium text-xs sm:text-sm px-3.5 py-2 rounded-lg shadow-sm flex items-center gap-2 hover:border-emerald-500 transition-colors"
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
          <div className="lg:col-span-5 z-10 relative">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl">
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
              Professional nurses and caregivers support patients at home with
              routine clinical care, personal assistance, continuous health
              monitoring, and recovery support based on individual patient
              needs.
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
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                      Clinical Medical Support
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                      Professional Nursing Care at Home
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Our certified Diploma and BSc registered nurses deliver
                  doctor-directed medical care directly to your doorstep in
                  Dhanmondi, ensuring safety, hygiene, and continuous clinical
                  supervision.
                </p>

                {/* Covered Clinical Tasks List */}
                <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Medication Administration:</strong> Precise timely
                      dosage management as prescribed by attending doctors.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Vital Signs Tracking:</strong> Continuous tracking
                      of Blood Pressure (BP), pulse rate, oxygen saturation
                      (SpO2), and temperature.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Thermometer className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Blood Sugar Monitoring:</strong> Regular diabetes
                      tracking and insulin administration.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Syringe className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>IV & Injection Management:</strong> IV fluid
                      setup, cannula maintenance, and intramuscular/intravenous
                      injections.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Catheter & Tube Care:</strong> Hygienic Foley
                      catheter insertion/care and Ryle's tube feeding
                      assistance.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span>Staffing: BSc & Diploma Registered Nurses</span>
                <span className="text-emerald-700 font-bold bg-emerald-100/80 px-2.5 py-1 rounded-md">
                  100% Verified
                </span>
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
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                      Daily Living & Hygiene Support
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                      Personal Care and Daily Assistance
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Dedicated patient care attendants assist seniors, bedridden
                  individuals, and recovering patients with everyday tasks,
                  maintaining dignity, comfort, and personal hygiene.
                </p>

                {/* Covered Non-Clinical Tasks List */}
                <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-3">
                    <Bath className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Bathing & Grooming Support:</strong> Assistance
                      with sponge baths, shower assistance, oral hygiene, and
                      hair care.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Dressing & Personal Hygiene:</strong> Daily
                      clothing changes, diaper changing, and skin fold
                      cleanliness to prevent bedsores.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Move className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Mobility & Bed Transfer:</strong> Safe position
                      shifting in bed, wheelchair transfer, and walk assistance
                      around the house.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Feeding Support:</strong> Patient meal preparation
                      support, oral feeding assistance, and hydration tracking.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Daily Patient Comfort:</strong> Light room
                      tidying, bedsheet changes, and compassionate
                      companionship.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span>Staffing: Trained Patient Care Attendants</span>
                <span className="text-teal-700 font-bold bg-teal-100/80 px-2.5 py-1 rounded-md">
                  Dhanmondi Local
                </span>
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
              Available care durations allow families to choose support based on
              the patient's condition, supervision requirements, and whether
              they need daytime, nighttime, or continuous care.
            </p>
          </div>

          {/* Package & Pricing Comparison Table */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Plan Comparison
                </span>
                <h3 className="text-xl font-bold">
                  Nursing & Caregiver Package Breakdown
                </h3>
              </div>
              <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Dhanmondi
                Service Area Approved
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
                      <Sun className="w-4 h-4 text-amber-500 shrink-0" /> 8-Hour
                      Day Shift
                    </td>
                    <td className="py-4 px-6">
                      <span className="bg-slate-100 text-slate-800 font-semibold px-2.5 py-1 rounded-md text-xs border border-slate-200">
                        Patient Care Attendant
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      Elderly companion care, mobility & daytime meal support
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      ৳1,200 – ৳1,500
                    </td>
                    <td className="py-4 px-6 font-bold text-emerald-700">
                      ৳28,000 / mo
                    </td>
                  </tr>

                  {/* 12-Hour Package (Highlighted) */}
                  <tr className="bg-emerald-50/40 hover:bg-emerald-50/80 transition-colors border-l-4 border-l-emerald-600">
                    <td className="py-4 px-6 font-bold text-slate-900">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-emerald-600 shrink-0" />{" "}
                        12-Hour Shift (Day/Night)
                      </div>
                      <span className="text-[10px] bg-emerald-600 text-white font-extrabold px-2 py-0.5 rounded uppercase mt-1 inline-block">
                        Popular Choice
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="bg-emerald-100 text-emerald-900 font-semibold px-2.5 py-1 rounded-md text-xs border border-emerald-200">
                        Diploma Nurse / Senior Attendant
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      Scheduled meds, vitals tracking, feeding & post-op
                      recovery
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      ৳1,800 – ৳2,200
                    </td>
                    <td className="py-4 px-6 font-bold text-emerald-700">
                      ৳35,000 / mo
                    </td>
                  </tr>

                  {/* 24-Hour Package */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                      <Moon className="w-4 h-4 text-indigo-600 shrink-0" />{" "}
                      24-Hour Continuous Care
                    </td>
                    <td className="py-4 px-6">
                      <span className="bg-indigo-50 text-indigo-900 font-semibold px-2.5 py-1 rounded-md text-xs border border-indigo-200">
                        2 Nurses / Dual Staff Rotation
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      Bedridden, stroke recovery, tracheostomy & critical care
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      ৳3,000 – ৳3,800
                    </td>
                    <td className="py-4 px-6 font-bold text-emerald-700">
                      ৳64,000 – ৳90,000 / mo
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-100/60 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
              <span>
                * Rates vary depending on the patient's medical condition and
                required nursing specialization.
              </span>
              <span className="font-bold text-slate-700">
                Includes replacement guarantees & local supervision
              </span>
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
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Day / Night Duty
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    12-Hour Nursing Care
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ideal for semi-critical patients who require active clinical
                  monitoring or daily personal care during daytime or overnight
                  hours without needing full 24-hour presence.
                </p>

                <ul className="space-y-2 text-xs text-slate-700 font-medium pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />{" "}
                    Daytime medication & meal management
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />{" "}
                    Overnight vital monitoring & assistance
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />{" "}
                    Scheduled shift options (e.g., 8 AM - 8 PM)
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
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Round-the-Clock
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    24-Hour Patient Care
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Continuous round-the-clock shift-based care delivered by
                  rotating nurses or caregivers for bedridden, stroke,
                  post-surgical, or ICU step-down patients.
                </p>

                <ul className="space-y-2 text-xs text-slate-700 font-medium pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />{" "}
                    Seamless 12h/12h staff shift rotations
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />{" "}
                    Bedsore prevention & position rotation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />{" "}
                    Continuous vital tracking & emergency alert
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
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Flexible Duration
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    Short & Long-Term Care
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Flexible care plans designed to adapt to your family's exact
                  timeframe, whether you need temporary care after surgery or
                  long-term care for elderly relatives.
                </p>

                <ul className="space-y-2 text-xs text-slate-700 font-medium pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />{" "}
                    Short-term post-op care (3–14 days)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />{" "}
                    Monthly long-term senior home support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Easy
                    plan adjustment or contract extensions
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

      <section
        id="elderly-care-dhanmondi"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white font-sans border-t border-slate-100"
        aria-labelledby="elderly-care-heading"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* H2 Heading & Section Intro */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full">
              <Heart className="w-4 h-4 text-rose-600 fill-rose-100" />
              <span>Compassionate Senior Home Support</span>
            </div>

            <h2
              id="elderly-care-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              Elderly Care in Dhanmondi
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Elderly patients receive personalized support at home when they
              need help with daily activities, mobility, medication routines,
              companionship, or regular supervision.
            </p>
          </div>

          {/* H3 Sub-sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* H3: Personalized Senior Care Plans */}
            <article className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-emerald-500 transition-all relative overflow-hidden">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
                  <ClipboardList className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Custom Routine
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Personalized Senior Care Plans
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Customized daily care routines tailored to the senior's
                  specific health conditions, daily habits, and attending
                  physician guidelines.
                </p>

                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Physician recommendation adherence</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Customized medication & dietary schedules</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Adapted care routines for dementia or chronic conditions
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs font-bold text-emerald-700">
                Tailored Care Schedule
              </div>
            </article>

            {/* H3: Daily Living and Mobility Support */}
            <article className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-emerald-500 transition-all relative overflow-hidden">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                  <Footprints className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                    Physical Well-being
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Daily Living and Mobility Support
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Safe assistance with walking, wheelchair transfers, fall
                  prevention, light exercise routines, and bathroom assistance
                  to preserve senior independence.
                </p>

                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Fall-risk assessment & safe walking assistance</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Wheelchair & bed transfer support</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Light stretching & passive joint movement</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs font-bold text-blue-700">
                Safe Movement & Fall Prevention
              </div>
            </article>

            {/* H3: Companionship and Family Support */}
            <article className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-emerald-500 transition-all relative overflow-hidden">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-md shadow-rose-600/20">
                  <Smile className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    Emotional Health
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Companionship and Family Support
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Emotional engagement, conversation, mental stimulation,
                  regular updates to family members, and essential relief for
                  primary family caregivers.
                </p>

                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>
                      Meaningful conversation & recreational activities
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>Daily health logging & family status reports</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>Respite care giving relief to family members</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs font-bold text-rose-700">
                Mental Stimulation & Respite Care
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="specialized-home-care-dhanmondi"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 font-sans border-t border-slate-200/80"
        aria-labelledby="specialized-care-heading"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* H2 Heading & Section Intro */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Condition-Specific In-Home Patient Support</span>
            </div>

            <h2
              id="specialized-care-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              Specialized Home Care for Different Patient Needs
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Adaptable care tailored to specific medical conditions rather than
              offering one standard package for every patient.
            </p>
          </div>

          {/* H3 Sub-sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {/* H3: Care for Bedridden Patients */}
            <article className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <Bed className="w-6 h-6 text-purple-700" />
                </div>

                <div>
                  <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                    Bedridden Care
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Care for Bedridden Patients
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Specialized in-bed personal hygiene, position rotation every 2
                  hours to prevent pressure ulcers (bedsores), incontinence
                  management, and Ryle's tube/PEG feeding care.
                </p>

                <ul className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />{" "}
                    Bedsore prevention & 2-hour rotation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />{" "}
                    Incontinence & diaper management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />{" "}
                    Ryle's tube & PEG tube feeding care
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-purple-700">
                Pressure Ulcer & Hygiene Protocol
              </div>
            </article>

            {/* H3: Post-Hospital Recovery Care */}
            <article className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Home className="w-6 h-6 text-emerald-700" />
                </div>

                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Hospital-to-Home
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Post-Hospital Recovery Care
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Smooth transition support after hospital discharge, vital sign
                  monitoring, medication regimen management, and doctor
                  instruction compliance at home.
                </p>

                <ul className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />{" "}
                    Discharge discharge plan adherence
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />{" "}
                    Continuous vital sign tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />{" "}
                    Emergency escalation to treating doctors
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-emerald-700">
                Seamless Hospital Discharge Continuity
              </div>
            </article>

            {/* H3: Post-Surgical Care at Home */}
            <article className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  <Bandage className="w-6 h-6 text-rose-700" />
                </div>

                <div>
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    Surgical Recovery
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Post-Surgical Care at Home
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Sterile wound dressing, surgical drain care, pain level
                  tracking, infection surveillance, and preventing
                  post-operative complications during recovery.
                </p>

                <ul className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />{" "}
                    Sterile wound dressing & suture care
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />{" "}
                    Surgical drain output tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />{" "}
                    Infection prevention & pain monitoring
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-rose-700">
                Sterile Clinical Wound Management
              </div>
            </article>

            {/* H3: Support for Elderly and Chronically Ill Patients */}
            <article className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  <HeartPulse className="w-6 h-6 text-blue-700" />
                </div>

                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                    Chronic Illness
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Support for Chronic Conditions
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ongoing management for diabetes, hypertension, dementia,
                  Alzheimer's, chronic kidney disease (CKD), and respiratory
                  ailments requiring steady routines.
                </p>

                <ul className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />{" "}
                    Glucose & blood pressure monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />{" "}
                    Dementia & Alzheimer's safety care
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />{" "}
                    Kidney disease fluid & diet tracking
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-blue-700">
                Long-Term Medical Management
              </div>
            </article>

            {/* H3: Stroke and Neurological Care Support */}
            <article className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-emerald-500 hover:shadow-md transition-all lg:col-span-2">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  <Brain className="w-6 h-6 text-indigo-700" />
                </div>

                <div>
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    Neurological Support
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Stroke and Neurological Care Support
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dedicated care for stroke survivors and neurological patients,
                  assisting with daily speech/physical therapy exercises, safe
                  dysphagia feeding techniques, paralysis management, and
                  mobility restoration.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />{" "}
                    Assistance with daily physical therapy
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />{" "}
                    Safe feeding for swallowing difficulties
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />{" "}
                    Paralysis position changing & comfort
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />{" "}
                    Speech therapy exercise encouragement
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-indigo-700">
                Comprehensive Post-Stroke Rehabilitation Support
              </div>
            </article>
          </div>
        </div>
      </section>

      <section 
      id="physiotherapy-home-service-dhanmondi" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white font-sans border-t border-slate-100"
      aria-labelledby="physiotherapy-heading"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* H2 Heading & Section Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full">
            <Activity className="w-4 h-4 text-teal-600" />
            <span>In-Home Rehabilitation & Mobility Recovery</span>
          </div>

          <h2 
            id="physiotherapy-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Physiotherapy Home Service in Dhanmondi
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Patients receive professional physiotherapy at home when mobility limitations, pain management, or post-hospital recovery make traveling to a clinic difficult.
          </p>
        </div>

        {/* Content Grid: Target Candidates & Services Offered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Target Candidates Card */}
          <article className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="space-y-6">
              
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-600/20">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Who Needs Home Therapy</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Target Candidates for Home Physiotherapy
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Home physiotherapy eliminates the stress and pain of traveling through Dhaka traffic, providing specialized therapy right in the comfort of your room in Dhanmondi.
              </p>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Seniors with Joint & Back Pain:</strong> Relief for arthritis, osteoarthritis, stiffness, and chronic lumbar/cervical pain.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Stroke Recovery Patients:</strong> Rehabilitation to restore motor control, balance, speech therapy coordination, and walking capability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Post-Orthopedic Surgery:</strong> Recovery support following knee replacement, hip surgery, fracture fixation, or ligament repairs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Paralyzed & Bedridden Individuals:</strong> Passive movements to prevent muscle atrophy, joint contractures, and bed stiffness.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Patient-Centric Care</span>
              <span className="text-teal-700 font-bold bg-teal-100/80 px-2.5 py-1 rounded-md">Tailored Treatment Plans</span>
            </div>
          </article>

          {/* Services Offered Card */}
          <article className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="space-y-6">
              
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Therapeutic Techniques</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    In-Home Physiotherapy Services Offered
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Qualified physiotherapists bring professional therapeutic equipment to deliver comprehensive physical rehabilitation at home.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Footprints className="w-4 h-4 text-emerald-600" /> Joint Mobility
                  </div>
                  <p className="text-xs text-slate-500">Targeted passive and active range-of-motion exercises to relieve stiffness.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Dumbbell className="w-4 h-4 text-emerald-600" /> Muscle Strengthening
                  </div>
                  <p className="text-xs text-slate-500">Progressive resistance training to rebuild weakened muscles post-illness.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Activity className="w-4 h-4 text-emerald-600" /> Balance Rehab
                  </div>
                  <p className="text-xs text-slate-500">Postural stability and gait training to prevent accidental falls in seniors.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Sparkles className="w-4 h-4 text-emerald-600" /> Pain Relief Therapies
                  </div>
                  <p className="text-xs text-slate-500">Manual therapy, electrotherapy (TENS/UST), and therapeutic massage.</p>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Practitioners: Qualified Physiotherapists (BPT / MPT)</span>
              <span className="text-emerald-700 font-bold bg-emerald-100/80 px-2.5 py-1 rounded-md">Verified Professionals</span>
            </div>
          </article>

        </div>

        {/* Booking Process Workflow */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-xl space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Simple Booking Process</span>
            <h3 className="text-xl sm:text-2xl font-bold">How to Schedule a Home Visit in Dhanmondi</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Get an expert physiotherapist deployed to your address in Dhanmondi in 3 simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 space-y-3 relative">
              <div className="w-8 h-8 rounded-lg bg-teal-500 text-slate-900 font-extrabold flex items-center justify-center text-sm">
                1
              </div>
              <h4 className="font-bold text-base text-white">Initial Consultation</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Call or message us to share the patient's diagnosis, medical reports, and current physical limitations.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 space-y-3 relative">
              <div className="w-8 h-8 rounded-lg bg-teal-500 text-slate-900 font-extrabold flex items-center justify-center text-sm">
                2
              </div>
              <h4 className="font-bold text-base text-white">Physiotherapist Matching</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We assign a specialized physiotherapist experienced in the patient's specific condition (neuro, ortho, or geriatric).
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 space-y-3 relative">
              <div className="w-8 h-8 rounded-lg bg-teal-500 text-slate-900 font-extrabold flex items-center justify-center text-sm">
                3
              </div>
              <h4 className="font-bold text-base text-white">Start Home Sessions</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                The therapist conducts a thorough physical assessment at your home in Dhanmondi and begins the customized therapy sessions.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4 border-t border-slate-800">
            <span className="text-xs sm:text-sm text-slate-300 font-medium">Ready to schedule a session?</span>
            <a
              href="tel:+8801619848555"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-slate-900 font-bold px-6 py-2.5 rounded-xl shadow-md transition-all text-sm"
            >
              <PhoneCall className="w-4 h-4 fill-slate-900" /> Book Physiotherapist Now
            </a>
          </div>
        </div>

      </div>
    </section>

<section 
      id="care-inclusions-dhanmondi" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 font-sans border-t border-slate-200/80"
      aria-labelledby="inclusions-heading"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* H2 Heading & Section Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Complete Care Transparency</span>
          </div>

          <h2 
            id="inclusions-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            What Does Nursing Home Care in Dhanmondi Include?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            When you bring our nursing care into your home, you get a dedicated healthcare professional who looks after every aspect of your patient's comfort, clinical recovery, and day-to-day well-being.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inclusions.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Included in standard care
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>



<section 
      id="how-it-works-dhanmondi" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white font-sans border-t border-slate-100"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* H2 Heading & Section Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Simple & Transparent Onboarding Process</span>
          </div>

          <h2 
            id="how-it-works-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            How Our Home Care Service Works
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From your first inquiry to active caregiver deployment, our step-by-step process ensures a smooth, stress-free experience for your family in Dhanmondi.
          </p>
        </div>

        {/* 5-Step Vertical / Grid Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <article 
                key={index}
                className={`bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-emerald-500 transition-all relative ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="space-y-5">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-slate-300 tracking-wider">
                      {step.stepNumber}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${step.accentColor}`}>
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center shadow-sm">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {index + 1}. {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Footer Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Verified Process
                  </span>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-400 hidden lg:block" />
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Action Callout Box */}
        <div className="bg-emerald-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold">Need assistance starting care today?</h3>
            <p className="text-xs sm:text-sm text-emerald-100">
              Speak with our Dhanmondi care coordinator for immediate staff deployment.
            </p>
          </div>
          <a
            href="tel:+8801619848555"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-900 font-bold px-6 py-3 rounded-xl shadow-md transition-all text-sm shrink-0"
          >
            Start Consultations Now
          </a>
        </div>

      </div>
    </section>
<section 
      id="why-choose-home-care-dhanmondi" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 font-sans border-t border-slate-200/80"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* H2 Heading & Section Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Trusted Local Healthcare Partner</span>
          </div>

          <h2 
            id="why-choose-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Why Choose Home Nursing Care in Dhanmondi?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Families choose our in-home nursing care for the unmatched comfort of home, clinical safety, personalized attention, and hassle-free recovery support without hospital stress.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <article 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${item.badgeColor}`}>
                      {item.highlight}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Standard in Dhanmondi Care
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>


    <section 
      id="areas-served-dhanmondi" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white font-sans border-t border-slate-100"
      aria-labelledby="areas-served-heading"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* H2 Heading & Section Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>Local Service Coverage</span>
          </div>

          <h2 
            id="areas-served-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Areas We Serve Around Dhanmondi
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Quickly verify home care service availability for your exact address across Dhanmondi residential blocks and adjacent neighborhoods.
          </p>
        </div>

        {/* Coverage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Dhanmondi Roads & Blocks */}
          <article className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Primary Zone</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Dhanmondi Blocks & Main Roads
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Full nursing care and caregiver coverage across all key residential roads, apartments, and quiet sectors within Dhanmondi.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {roadsAndBlocks.map((road, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    {road}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/80 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" /> Direct Home Doorstep Delivery
            </div>
          </article>

          {/* Card 2: Hospital Proximity */}
          <article className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                  <HospitalIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Hospital Hubs</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Proximity to Medical Centers
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rapid response and smooth post-discharge transfers near major healthcare institutions in and around Dhanmondi.
              </p>

              <ul className="space-y-2.5 pt-2">
                {medicalLandmarks.map((hospital, idx) => (
                  <li key={idx} className="bg-white p-3 rounded-xl border border-slate-200/80 flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">{hospital.name}</p>
                      <p className="text-[11px] text-slate-500">{hospital.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/80 text-xs font-semibold text-blue-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" /> Fast Hospital-to-Home Transition
            </div>
          </article>

          {/* Card 3: Surrounding Neighborhoods */}
          <article className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Extended Coverage</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Nearby Surrounding Areas
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Prompt nurse and caregiver dispatch to neighboring areas adjacent to Dhanmondi.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2">
                {nearbyAreas.map((area, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white border border-slate-200/80 text-slate-800 text-xs font-semibold p-2.5 rounded-lg flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    {area}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/80 text-xs font-semibold text-indigo-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" /> Expanded Local Network
            </div>
          </article>

        </div>

      </div>
    </section>

<section 
      id="faq-dhanmondi" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 font-sans border-t border-slate-200/80"
      aria-labelledby="faq-heading"
    >
      {/* Injecting FAQ Schema for Search Engines */}
      

      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* H2 Heading & Section Intro */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 
            id="faq-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Nursing Home Care in Dhanmondi: Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Clear, straightforward answers to practical questions families ask before arranging home nursing or caregiver support.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 pr-2">
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "bg-emerald-100 text-emerald-700 rotate-180" : "bg-slate-100 text-slate-500"}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 space-y-3">
                    <p>{faq.answer}</p>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Standard Care Policy
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Contact Callout */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center space-y-4 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">Have a specific question not listed here?</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Our Dhanmondi care management team is available to discuss your patient's exact requirements.
          </p>
          <a
            href="tel:+8801619848555"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl transition-all text-sm shadow-sm"
          >
            <PhoneCall className="w-4 h-4" /> Call Care Advisory
          </a>
        </div>

      </div>
    </section>

    <section 
      id="get-nursing-care-dhanmondi" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white font-sans border-t border-slate-800"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>24/7 Rapid Staff Deployment</span>
          </div>

          <h2 
            id="cta-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight"
          >
            Get Nursing Home Care in Dhanmondi
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Take the first step toward professional in-home care for your loved one. Request a callback or connect directly with our care coordinator now.
          </p>
        </div>

        {/* Main Grid: Form + Quick Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Intake Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">Request Home Care Consultation</h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Fill out this quick form and our care team in Dhanmondi will reach out within 15 minutes.
            </p>

            {submitted ? (
              <div className="bg-emerald-950/80 border border-emerald-500/50 rounded-xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Inquiry Received Successfully!</h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Our Dhanmondi care advisor will call you shortly at <strong>{formData.phone}</strong> to discuss your patient's care plan.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Md. Tanvir Hossain"
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 01712345678"
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="condition" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Patient Condition & Required Service *
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      id="condition"
                      name="condition"
                      required
                      value={formData.condition}
                      onChange={handleChange}
                      placeholder="e.g. Elderly Care, Post-Stroke Rehab, 24-Hour Nursing"
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Location in Dhanmondi *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Road 8A, Satmasjid Road, Green Road"
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm mt-2"
                >
                  <Send className="w-4 h-4" /> Submit Request for Immediate Call Back
                </button>
              </form>
            )}
          </div>

          {/* Direct Booking Buttons & Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Call Box */}
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 space-y-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Direct Phone Hotline</h4>
                  <p className="text-xs text-slate-400">Speak immediately with a care manager</p>
                </div>
              </div>
              
              <a
                href={`tel:${whatsappNumber}`}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2.5 text-sm shadow-sm"
              >
                <PhoneCall className="w-4 h-4" /> Call Now: {whatsappNumber}
              </a>
            </div>

            {/* WhatsApp Box */}
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 space-y-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">WhatsApp Assistance</h4>
                  <p className="text-xs text-slate-400">Send prescriptions or query details instantly</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${formattedWhatsapp}?text=Hello%2C%20I%20am%20looking%20for%20home%20nursing%20care%20services%20in%20Dhanmondi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2.5 text-sm shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" /> Send a Message ({whatsappNumber})
              </a>
            </div>

            {/* Trust Badges */}
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NID-Verified & Background Checked Nursing Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom Shift Plans: 8h, 12h, or 24h Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Serving All Residential Roads Across Dhanmondi</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    </div>
  );
};

export default NursingHomeCareInDhanmondi;
