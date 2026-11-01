import React, { useState } from 'react';
import { Phone, HeartHandshake, ShieldCheck, ArrowRight, CheckCircle2,Heart, 
  UserCheck, 
  Home, 
  Globe, 
  Utensils, 
  Activity, 
  PhoneCall, 
  ShowerHead,
  Footprints,
  UtensilsCrossed,
  Pill,
  Smile,
  AlertCircle,
  ShieldAlert,
  Stethoscope,
  ClockCheck,
  Users,
  BellRing,
  HelpCircle,
  MapPin,
  Globe2,
  Clock,
  Award,
  MessageSquareCheck,
  SlidersHorizontal,
ChevronDown, 
  ChevronUp} from 'lucide-react';
import bannerImage from '../../assets/caregiverserviceinbangladesh.webp';

export default function FamiliesLivingAbroad() {

  const caregiverDuties = [
    { title: "Personal Hygiene & Grooming", desc: "Assistance with daily bathing, dressing, and personal hygiene.", icon: ShieldCheck },
    { title: "Meal Preparation & Feeding", desc: "Preparing meals and providing feeding assistance when needed.", icon: Utensils },
    { title: "Mobility & Walking Support", desc: "Helping parents move safely around the house and stay active.", icon: Activity },
    { title: "Daily Routines & Companionship", desc: "Maintaining daily schedules and providing friendly emotional support.", icon: Heart },
  ];

 
  const careCategories = [
    {
      id: 'hygiene',
      title: 'Personal Care & Hygiene',
      icon: ShowerHead,
      color: 'emerald',
      description: 'Ageing or physical limitations can make everyday personal care more difficult.',
      bullets: [
        'Bathing, dressing, grooming and personal hygiene.',
        'Using the toilet when assistance is needed.',
        'Maintaining cleanliness and changing clothes.',
        'Preserving personal privacy, dignity and comfort.'
      ],
      note: 'Assistance should always respect the person\'s preferences and allow them to do whatever they can independently.'
    },
    {
      id: 'mobility',
      title: 'Mobility & Fall Prevention',
      icon: Footprints,
      color: 'amber',
      description: 'Elderly people with balance problems, weakness or limited mobility may need help moving safely around the house.',
      bullets: [
        'Walking support and transfer assistance between beds and chairs.',
        'Using wheelchairs safely when required.',
        'Keeping frequently used items within reach.',
        'Clearing walking paths and reducing household obstacles to lower fall risks.'
      ]
    },
    {
      id: 'meals',
      title: 'Meal Assistance & Routines',
      icon: UtensilsCrossed,
      color: 'emerald',
      description: 'Maintaining regular meals and hydration is important for everyday wellbeing.',
      bullets: [
        'Preparing meals according to family-provided or medically advised dietary instructions.',
        'Helping with feeding when necessary.',
        'Encouraging regular meals and water intake.',
        'Maintaining consistent sleeping and daily activity routines.'
      ]
    },
    {
      id: 'medication',
      title: 'Medication Reminders & Observation',
      icon: Pill,
      color: 'amber',
      description: 'Caregivers help keep daily health routines on track while carefully monitoring changes.',
      bullets: [
        'Remind elderly parents about prescribed medication schedules.',
        'Help maintain consistent daily health routines.',
        'Observe changes in appetite, mobility, sleep or general condition.',
        'Report concerns promptly to family members or appropriate healthcare professionals.'
      ],
      disclaimer: 'Important: Medication reminders do not mean independently prescribing, changing doses or making medical decisions.'
    },
    {
      id: 'companionship',
      title: 'Companionship & Emotional Support',
      icon: Smile,
      color: 'emerald',
      description: 'Living alone or spending long periods without company can make elderly parents feel isolated.',
      bullets: [
        'Regular conversation and engaging shared activities.',
        'Providing warm emotional companionship.',
        'Respecting cultural preferences and religious routines.',
        'Supporting personal hobbies and everyday interests.'
      ]
    }
  ];

  const followUpItems = [
    'General health and changes in the patient\'s condition.',
    'Blood pressure and blood glucose readings, where applicable.',
    'Heartbeat and oxygen saturation, where applicable.',
    'Pain, discomfort or changes in mobility.',
    'Prescribed medication schedules and daily routines.',
    'Recovery progress and any reported concerns.'
  ];
const caregiverDutiesNew = [
    'Bathing, dressing and personal hygiene.',
    'Walking, mobility and moving between beds and chairs.',
    'Meal preparation and feeding assistance.',
    'Daily routines and companionship.',
    'Reminders about prescribed medication schedules.'
  ];

  const nurseDuties = [
    'Post-surgical recovery and nursing support.',
    'Nursing care following a stroke.',
    'Nursing assessments and clinical observation.',
    'Prescribed nursing procedures.',
    'Healthcare responsibilities requiring professional nursing qualifications.'
  ];

  const comparisonData = [
    { caregiver: 'Bathing and personal hygiene', nurse: 'Nursing assessments' },
    { caregiver: 'Mobility assistance', nurse: 'Prescribed nursing procedures' },
    { caregiver: 'Meal assistance', nurse: 'Clinical nursing interventions' },
    { caregiver: 'Companionship', nurse: 'Recovery-related nursing care' },
    { caregiver: 'Daily routine assistance', nurse: 'Qualified nursing responsibilities' },
    { caregiver: 'Medication reminders', nurse: 'Medication responsibilities within nursing scope' }
  ];

  const stepOneDetails = [
    'Age, general health condition and existing medical conditions.',
    'Mobility limitations and ability to perform daily activities.',
    'Whether your parent lives alone or with family.',
    'Required assistance with meals, hygiene and personal care.',
    'Any special instructions provided by their doctor.'
  ];

  const shiftSchedules = [
    { hours: '8-Hour Support', detail: 'For specific daily assistance during peak hours.' },
    { hours: '12-Hour Support', detail: 'For more extended daytime or nighttime assistance.' },
    { hours: '24-Hour Support', detail: 'For continuous caregiver coverage arrangements.' }
  ];
 const valueProps = [
    {
      title: "Care Arrangements Based on Individual Requirements",
      icon: SlidersHorizontal,
      description: "Every elderly person has different care needs. Some require occasional help with personal hygiene and meals, while others need regular mobility assistance or more comprehensive support. HCAH discusses the parent's health condition, daily activities and required responsibilities to help families identify an appropriate care arrangement. Working hours and assigned duties can also be discussed before placement."
    },
    {
      title: "Access to Caregiver and Professional Nursing Support",
      icon: Stethoscope,
      description: "HCAH offers two separate types of assistance according to individual requirements:",
      listItems: [
        "Caregiver support: Non-clinical assistance with personal hygiene, mobility, meals, daily routines and companionship.",
        "Professional nursing support: Qualified nursing assistance for patients who require nursing assessments, prescribed procedures or clinical care."
      ],
      extraText: "Families can discuss the appropriate service depending on their parent's condition and healthcare requirements."
    },
    {
      title: "Follow-Up and Family Communication",
      icon: MessageSquareCheck,
      description: "Care arrangements require attention even after placement. HCAH maintains communication with assigned caregivers to follow up on attendance, daily responsibilities and relevant patient updates. Reported concerns can be communicated to family members so they can remain informed and discuss any necessary changes. This is particularly helpful for families who cannot regularly visit Dhaka."
    },
    {
      title: "Coordinating Care for Families Living Abroad",
      icon: Globe2,
      description: "Families living in the UK, USA, Canada or other countries can contact HCAH to discuss their parents' care requirements remotely. They can explain the parent's condition, discuss available schedules, confirm responsibilities and coordinate placement with the local team."
    }
  ];

const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "Can elderly care at home be arranged temporarily after hospital discharge?",
      answer: "Yes. Families can discuss temporary caregiver or professional nursing support for parents returning home after hospital discharge. The required assistance depends on recovery needs, mobility and medical advice. Discussing the expected duration and care responsibilities beforehand helps establish a suitable arrangement."
    },
    {
      question: "Can a caregiver assist an elderly parent during nighttime?",
      answer: "Yes. Nighttime caregiver assistance can be discussed when elderly parents need help using the toilet, changing positions, moving safely or following their usual nighttime routine. Families should explain these requirements when discussing the care schedule with HCAH."
    },
    {
      question: "What should I prepare before my parent starts receiving home care?",
      answer: "Prepare relevant medical information, prescribed medication details, dietary instructions, emergency contact numbers and information about your parent's daily routine. Keep frequently used items accessible and explain any mobility limitations or personal preferences to the assigned caregiver."
    },
    {
      question: "Can elderly care arrangements be changed if my parent's needs increase?",
      answer: "Yes. If your parent's mobility, health condition or daily assistance requirements change, communicate the situation to HCAH. The family can discuss adjustments to care responsibilities, working hours or additional nursing assistance, depending on the patient's needs and service availability."
    },
    {
      question: "What should families living abroad consider when arranging emergency support for elderly parents?",
      answer: "Families should establish a local emergency contact, keep important medical information accessible and discuss an emergency communication plan with their parents and care team. Caregiver assistance does not replace emergency medical services. Sudden or serious symptoms require immediate medical attention."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="relative w-full min-h-[600px] flex items-center font-sans overflow-hidden py-16 md:py-24">
      
      {/* 1. Full-bleed background image */}
      <img
        src={bannerImage}
        alt="Caregiver supporting elderly person in Dhaka home"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 2. Your Exact Custom Linear Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(15, 15, 15, 0.65) 100%)'
        }}
      />

      {/* 3. Foreground Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-md">
            <HeartHandshake className="w-4 h-4 text-slate-950" />
            <span>Dedicated Support for NRBs & Diaspora Families</span>
          </div>

          {/* Main Title with Yellow Accent Line */}
          <div className="space-y-2 border-l-4 border-amber-500 pl-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tight drop-shadow-md">
              Elderly Care at Home <br className="hidden sm:inline" />
              <span className="text-amber-400">In Dhaka</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-medium tracking-wide">
              For Families Living Abroad
            </p>
          </div>

          {/* Paragraph Copy */}
          <div className="space-y-4 text-base sm:text-lg text-slate-100 leading-relaxed font-normal drop-shadow-sm">
            <p>
              Living abroad while your elderly parents live in Dhaka can make their everyday care challenging. You may worry about whether they are taking their medicines on time, eating properly, moving safely or receiving help when needed. Although relatives may visit occasionally, providing consistent daily assistance is not always possible, especially when parents need support with personal care, mobility or everyday routines.
            </p>
            <p>
              Elderly care at home in Dhaka offers families a practical way to arrange daily assistance while allowing their parents to remain in familiar surroundings. According to WHO's 2024 Bangladesh healthy ageing factsheet, approximately 16.5 million people in Bangladesh are aged 60 or older, representing around 10% of the population. Healthcare at Home Bangladesh (HCAH) provides caregiver support and professional nursing assistance according to individual care requirements.
            </p>
          </div>

          {/* Fact Highlight Box */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex items-start gap-3 shadow-lg">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-200 leading-normal">
              <strong className="text-white">WHO 2024 Factsheet:</strong> Approximately 16.5 million people in Bangladesh are aged 60 or older (~10% of the population), highlighting the growing need for daily assistance & professional nursing.
            </p>
          </div>

          {/* Action Callout & CTAs */}
          <div className="pt-2 space-y-4">
            <p className="text-base font-semibold text-amber-300">
              Need help arranging care for your parents in Dhaka? Contact HCAH to discuss suitable caregiver or nursing support.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base px-7 py-3.5 rounded-md shadow-xl transition-all duration-200"
              >
                Contact HCAH
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:01619848555"
                className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-600 text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-md transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                01619-848555
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
{/* HERO  */}

<section className=" py-16 lg:py-24 text-black font-sans border-t  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500 border border-amber-500/30 text-white text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>Remote Family Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-black  tracking-tight leading-tight">
            How Can Elderly Care at Home in Dhaka Support Parents Living Abroad?
          </h2>

          <p className="text-base sm:text-lg text-black  leading-relaxed">
            Living abroad can make it difficult to provide daily physical assistance to elderly parents in Dhaka. Regular phone calls help families stay connected, but parents may still need support with meals, personal hygiene, mobility and everyday activities. According to WHO's 2024 Bangladesh Healthy Ageing factsheet, approximately 16.5 million people in Bangladesh are aged 60 or older, highlighting the growing importance of appropriate elderly care.
          </p>
        </div>

        {/* Grid Section: Caregiver Duties & Comfort */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: How Does a Caregiver Help? */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                How Does a Caregiver Help Elderly Parents With Daily Activities?
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              A professional caregiver provides non-clinical assistance based on an elderly person's daily requirements, including:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {caregiverDuties.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="bg-slate-900/60 border border-slate-700/50 p-4 rounded-xl space-y-1.5">
                    <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                      <IconComponent className="w-4 h-4 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 2: Remaining Comfortable at Home */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  How Can Home Care Help Parents Remain Comfortable in Their Own Homes?
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Receiving assistance at home allows elderly parents to remain in familiar surroundings, maintain personal routines and participate in everyday activities as independently as possible. Appropriate support also helps preserve their dignity, privacy and comfort.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Allows seniors to stay in familiar, comforting home surroundings.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Maintains daily routines while encouraging maximum independence.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Preserves vital personal dignity, privacy, and peace of mind.</span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-950/40 border border-emerald-500/30 p-4 rounded-xl text-xs text-emerald-200 mt-6">
              💡 <strong>Peace of Mind:</strong> Professional caregivers bridge the physical gap for family members living thousands of miles away.
            </div>
          </div>

        </div>

        {/* Feature Box: Staying Involved From Abroad + Real Example */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-850 border border-slate-700 rounded-2xl p-6 sm:p-10 space-y-6 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-700/80">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How Can Families Stay Involved in Their Parents' Care From Abroad?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Families can discuss care requirements with Healthcare at Home Bangladesh (HCAH), coordinate suitable caregiver or professional nursing support and communicate with the local care team for relevant updates.
              </p>
            </div>

            <a
              href="tel:01619848555"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-lg shadow-lg transition-all shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
              Talk to HCAH Team
            </a>
          </div>

          {/* Practical Example Callout */}
          <div className="bg-slate-900/90 border-l-4 border-amber-500 p-5 rounded-r-xl space-y-2">
            <div className="text-xs uppercase tracking-wider font-bold text-amber-400">
              Practical Example:
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              A son living in the UK may call his mother every evening, but an assigned caregiver can provide the physical assistance she needs with getting out of bed, preparing meals and managing daily activities.
            </p>
          </div>
        </div>

      </div>
    </section>
{/* SECOND SWECTION  */}

<section className="bg-white py-12 md:py-16 text-slate-800 font-sans  ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Simple Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold">
            <HeartHandshake className="w-4 h-4 text-emerald-600" />
            <span>Daily Care Requirements</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
            What Daily Care and Assistance Do Elderly Parents Need at Home?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Elderly people do not all need the same level of assistance. Some can manage most daily activities independently but need occasional help, while others require regular support with personal hygiene, mobility, meals and everyday routines. The level of care should depend on their physical abilities, health condition and personal preferences. Understanding these needs helps families arrange appropriate support without unnecessarily limiting an elderly parent's independence.
          </p>
        </div>

        {/* Simple Clean Grid - No Complex Tabs */}
        <div className="grid md:grid-cols-2 gap-6">
          {careCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-100 rounded-lg text-emerald-700">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {category.description}
                </p>

                <ul className="space-y-2 pt-1">
                  {category.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {category.note && (
                  <p className="text-xs text-slate-500 pt-2 border-t border-slate-200 italic">
                    {category.note}
                  </p>
                )}

                {category.disclaimer && (
                  <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg flex items-start gap-2 text-xs text-amber-800">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{category.disclaimer}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Practical Examples Box */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 sm:p-6 space-y-3">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
            Practical Examples:
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>A stroke survivor with limited mobility may need help moving from bed to a chair, eating meals and maintaining personal hygiene.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>An otherwise independent elderly woman may only need occasional assistance with bathing, meal preparation and companionship.</span>
            </li>
          </ul>
        </div>

        {/* HCAH Service Explanation */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              At Healthcare at Home Bangladesh (HCAH), caregivers provide non-clinical daily assistance according to individual requirements. They support everyday activities but do not replace nurses, doctors or physiotherapists. The appropriate level of assistance depends on what each elderly person can safely manage independently.
            </p>
          </div>
        </div>

      </div>
    </section>
{/* Thried section  */}

<section className=" py-12 md:py-16 text-slate-800 font-sans   ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <Activity className="w-4 h-4 text-emerald-600" />
            <span>Quality Assurance & Support</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
            How Is Elderly Care at Home in Dhaka Monitored by HCAH?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            For families living abroad, arranging a caregiver is only the first step. They also want to know whether their parents are receiving the agreed assistance and how their condition is being followed up. At Healthcare at Home Bangladesh (HCAH), the team maintains communication with assigned caregivers to check patient updates, caregiver attendance and daily responsibilities. This follow-up helps families stay informed even when they cannot visit regularly.
          </p>
        </div>

        {/* 2-Column Core Monitoring Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Card 1: Daily Follow-Up on Patient Condition */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-100 rounded-lg text-emerald-700">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Daily Follow-Up on the Patient's Condition
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The HCAH team communicates with assigned caregivers to understand the patient's general condition and daily care needs. Depending on the patient's condition and care requirements, follow-up may include:
            </p>

            <ul className="space-y-2 pt-1">
              {followUpItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              These updates help the team understand the patient's reported condition and identify concerns that may require family attention or medical advice.
            </p>
          </div>

          {/* Card 2: Attendance, Responsibilities & Family Updates */}
          <div className="space-y-6">
            
            {/* Attendance & Responsibilities */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-100 rounded-lg text-blue-700">
                  <ClockCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  How Does HCAH Check Caregiver Attendance and Responsibilities?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Regular communication with assigned caregivers also helps HCAH follow up on their attendance and responsibilities. The team checks whether agreed care activities are being performed and asks about the patient's daily assistance. If a caregiver reports difficulties, missed responsibilities or other concerns, the team can discuss the issue and coordinate appropriate action.
              </p>
            </div>

            {/* Keeping Families Updated */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-100 rounded-lg text-indigo-700">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  How Does HCAH Keep Family Members Updated?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Families living outside Bangladesh need relevant information to remain involved in their parents' care. HCAH communicates important patient updates and reported concerns to family members. This helps families understand changes in daily care requirements, discuss concerns with the local team and consider additional assistance when necessary.
              </p>
            </div>

          </div>

        </div>

        {/* Condition Change & Practical Example Box */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 rounded-lg text-amber-700">
              <BellRing className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              What Happens When Your Parent's Condition Changes?
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            If a caregiver notices an unusual change in the patient's condition, they report it to the HCAH team. Relevant concerns can then be communicated to the family so they can arrange appropriate medical advice. If additional clinical assistance is needed, professional nursing support can also be discussed.
          </p>

          <div className="bg-white border-l-4 border-amber-500 p-4 rounded-r-lg space-y-1 shadow-sm">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Practical Example:</span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              An elderly mother with diabetes receives daily caregiver assistance. The caregiver follows her agreed routine and reports relevant blood glucose readings and changes in her general condition to HCAH. If unusual symptoms or concerns arise, the family can be informed to seek appropriate medical advice.
            </p>
          </div>
        </div>

        {/* Important Clinical Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-bold text-amber-900 uppercase">
              Important Distinction:
            </h4>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
              Caregiver follow-up is not the same as clinical monitoring. Caregivers report observations and assist with agreed daily routines; they do not diagnose illnesses, interpret medical results independently or make treatment decisions.
            </p>
          </div>
        </div>

      </div>
    </section>

    {/* Four */}

    <section className="bg-white py-12 md:py-16 text-slate-800 font-sans    ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Making the Right Choice</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
            When Does Your Elderly Parent Need a Caregiver or a Professional Nurse?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Choosing between a caregiver and a professional nurse depends on your parent's health condition, mobility and level of independence. While caregivers help with everyday activities, nurses provide professional support for healthcare needs that require nursing qualifications. Understanding this difference helps families arrange appropriate care without paying for services their parents may not need.
          </p>
        </div>

        {/* 2-Column Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Caregiver Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-100 rounded-lg text-emerald-700">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                When Is a Caregiver Suitable for Everyday Elderly Care?
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A caregiver is suitable when an elderly parent needs regular assistance with non-clinical daily activities, such as:
            </p>

            <ul className="space-y-2.5 pt-1">
              {caregiverDutiesNew.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Nurse Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-100 rounded-lg text-blue-700">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                When Is Professional Nursing Care Necessary?
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Professional nursing may be required when an elderly parent's condition involves clinical care or procedures that require qualified nursing assistance, including:
            </p>

            <ul className="space-y-2.5 pt-1">
              {nurseDuties.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-slate-500 pt-2 border-t border-slate-200 italic">
              The required nursing support should be determined according to the patient's condition and medical advice.
            </p>
          </div>

        </div>

        {/* Table: Caregiver vs Professional Nurse */}
        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-bold text-slate-900">
            Caregiver vs Professional Nurse: Understanding the Difference
          </h3>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                  <th className="py-3 px-4 font-bold w-1/2 border-r border-slate-200">
                    <div className="flex items-center gap-2 text-emerald-700">
                      <UserCheck className="w-4 h-4" />
                      Caregiver Support
                    </div>
                  </th>
                  <th className="py-3 px-4 font-bold w-1/2">
                    <div className="flex items-center gap-2 text-blue-700">
                      <Stethoscope className="w-4 h-4" />
                      Professional Nursing
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 text-slate-700 border-r border-slate-200">
                      {row.caregiver}
                    </td>
                    <td className="py-3 px-4 text-slate-700">
                      {row.nurse}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500">
            Caregivers do not replace nurses, doctors or physiotherapists. Some elderly patients may need both services, particularly when they require everyday assistance alongside clinical nursing care.
          </p>
        </div>

        {/* HCAH Service Connection Callout */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 max-w-3xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                HCAH Service Connection
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Healthcare at Home Bangladesh offers caregiver support and professional nursing assistance as separate arrangements. Families can discuss their parent's actual condition and daily requirements with HCAH before choosing the appropriate support.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            Discuss Care Options
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>

    {/* section 5 */}
    <section className=" py-12 md:py-16 text-slate-800 font-sans    ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <Globe2 className="w-4 h-4 text-emerald-600" />
            <span>Remote Arrangement Process</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
            How to Arrange Elderly Care at Home in Dhaka From Abroad?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Living outside Bangladesh does not mean you have to wait until your next visit to arrange care for your elderly parents. Families can contact Healthcare at Home Bangladesh (HCAH), explain their parent's daily requirements and coordinate suitable home-care support remotely. A clear understanding of the parent's condition and required assistance helps make the arrangement more practical.
          </p>
        </div>

        {/* 5-Step Sequential Workflow */}
        <div className="space-y-6">
          
          {/* Step 1 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 bg-emerald-600 text-white font-bold text-xs rounded-full flex items-center justify-center shrink-0">
                1
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Step 1 – Share Your Parent's Health and Daily Care Requirements
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
              Start by explaining your parent's current condition and everyday needs. Share details such as:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 pl-10 pt-1">
              {stepOneDetails.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 pl-10 pt-1">
              These details help HCAH understand the level of assistance required.
            </p>
          </div>

          {/* Step 2 + Contact Banner */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 bg-emerald-600 text-white font-bold text-xs rounded-full flex items-center justify-center shrink-0">
                2
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Step 2 – Discuss the Suitable Type of Home Care
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
              Discuss your parent's daily responsibilities and health-related requirements with HCAH. Explain whether they need general caregiver assistance, additional mobility support or professional nursing assistance. If different types of support are necessary, discuss whether a combined arrangement is suitable.
            </p>

            {/* In-Step CTA Callout */}
            <div className="ml-0 sm:ml-10 bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-emerald-900 uppercase">
                  Need help arranging elderly care in Dhaka?
                </h4>
                <p className="text-xs text-slate-700">
                  Contact HCAH to discuss your parent's requirements and available care arrangements.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="tel:01619848555"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 text-white text-xs font-semibold px-3.5 py-2 rounded-md hover:bg-emerald-700 transition"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> 01619-848555
                </a>
                <a
                  href="tel:01779848555"
                  className="inline-flex items-center gap-1.5 bg-white border border-slate-300 text-slate-700 text-xs font-semibold px-3.5 py-2 rounded-md hover:bg-slate-50 transition"
                >
                  01779-848555
                </a>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 bg-emerald-600 text-white font-bold text-xs rounded-full flex items-center justify-center shrink-0">
                3
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Step 3 – Choose the Required Care Schedule
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
              Discuss how many hours of assistance your parent needs throughout the day. HCAH offers different caregiver schedule options, including:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pl-0 sm:pl-10">
              {shiftSchedules.map((plan, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-3.5 rounded-lg space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{plan.hours}</span>
                  </div>
                  <p className="text-xs text-slate-600">{plan.detail}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 pl-10 italic">
              Actual availability, staffing arrangements and pricing should be confirmed with HCAH before making a decision.
            </p>
          </div>

          {/* Step 4 & Step 5 Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Step 4 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-emerald-600 text-white font-bold text-xs rounded-full flex items-center justify-center shrink-0">
                  4
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  Step 4 – Coordinate Caregiver Placement
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Once the requirements are discussed, HCAH coordinates the placement according to the agreed care responsibilities and schedule. Families should confirm the assigned duties, working hours and care arrangements before placement.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-emerald-600 text-white font-bold text-xs rounded-full flex items-center justify-center shrink-0">
                  5
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  Step 5 – Stay in Contact With Team
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                After placement, families can remain in contact with the local HCAH team for caregiver follow-ups, relevant patient updates and reported concerns. If the parent's condition or daily requirements change, communicate those changes to discuss appropriate adjustments.
              </p>
            </div>

          </div>

        </div>

        {/* Practical Example Box */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 sm:p-6 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>Practical Arrangement Example:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            A daughter living in Canada wants 12-hour caregiver assistance for her father in Gulshan. She contacts HCAH, explains his mobility limitations and daily needs, discusses the suitable schedule and coordinates caregiver placement without travelling to Dhaka.
          </p>
        </div>

      </div>
    </section>
{/* SECTION 6 */}
<section className="bg-white py-12 md:py-16 text-slate-800 font-sans    ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Why Choose HCAH</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
            Why Choose Healthcare at Home Bangladesh for Elderly Care at Home in Dhaka?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Choosing home care for an elderly parent requires more than arranging someone to provide daily assistance. Families also need to understand the available services, agreed responsibilities and how care is followed up after placement. Healthcare at Home Bangladesh (HCAH) provides caregiver support and professional nursing assistance in Dhaka, allowing families to discuss their parents' individual requirements before selecting a suitable arrangement.
          </p>
        </div>

        {/* 2-Column Grid of Core Features */}
        <div className="grid md:grid-cols-2 gap-6">
          {valueProps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-100 rounded-lg text-emerald-700">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {item.listItems && (
                    <ul className="space-y-2 pt-1">
                      {item.listItems.map((listPt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{listPt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.extraText && (
                    <p className="text-xs text-slate-500 pt-1">
                      {item.extraText}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Note & Banner */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 space-y-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Whether your parent needs a few hours of daily assistance or more extensive support, discussing the requirements beforehand helps establish realistic care arrangements.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-emerald-900 leading-relaxed">
                With HCAH, families can coordinate caregiver or professional nursing support in Dhaka while remaining involved in important decisions about their parents' care.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-sm transition-all"
            >
              Contact HCAH Team
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:01619848555"
              className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 font-semibold text-xs sm:text-sm px-5 py-3 rounded-lg hover:bg-slate-50 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              01619-848555
            </a>
          </div>
        </div>

      </div>
    </section>
<section className="bg-slate-50 py-12 md:py-16 text-slate-800 font-sans border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
            Frequently Asked Questions (FAQs)
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Families living abroad often have additional questions before arranging elderly care for their parents in Dhaka. Here are some important considerations when planning home-care support.
          </p>
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="space-y-3">
          {faqItems.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded-md bg-slate-100 text-slate-600 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Emergency Disclaimer Highlight */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong>Emergency Note:</strong> Caregiver assistance does not replace emergency medical services. In the event of sudden or serious health symptoms, please contact local emergency medical support immediately.
          </p>
        </div>

        {/* Final CTA Callout */}
        <div className="bg-emerald-700 text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">Have more questions about parent care in Dhaka?</h3>
            <p className="text-xs sm:text-sm text-emerald-100">Reach out to our team directly to discuss tailored arrangements.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href="tel:01619848555"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-xs sm:text-sm px-5 py-3 rounded-lg transition-all"
            >
              <PhoneCall className="w-4 h-4 text-emerald-700" />
              01619-848555
            </a>
          </div>
        </div>

      </div>
    </section>
    </div>

    

    
  );
}