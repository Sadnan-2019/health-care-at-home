import React from "react";
import {
  FaUserNurse,
  FaWheelchair,
  FaHeartbeat,
  FaBrain,
  FaWalking,
  FaHandsHelping,
  FaUserFriends,
  FaProcedures,
  FaMedkit,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const patientGroups = [
  {
    id: 1,
    slug: "elderly-home-care",
    title: "Professional Elderly Home Care",
    shortTitle: "Elderly Care",
    icon: <FaUserFriends className="text-4xl text-white" />,
    keywords: [
      "elderly caregiver",
      "senior caregiver",
      "elderly care at home",
      "home caregiver",
      "caregiver service in Bangladesh",
    ],
    description:
      "As people grow older, everyday activities such as bathing, dressing, walking, meal preparation, and medication management can become increasingly difficult. Our professional elderly home caregivers provide compassionate support that helps older adults remain comfortable, independent, and safe while continuing to live in familiar surroundings with dignity.",
    whyNeed:
      "Age-related weakness, arthritis, dementia, Parkinson's disease, reduced balance, and chronic illnesses often make daily tasks challenging. Professional caregiver support reduces the risk of falls, improves wellbeing, and provides peace of mind for family members.",
    howWeHelp: [
      "Assistance with bathing and personal hygiene",
      "Dressing and grooming support",
      "Walking and mobility assistance",
      "Meal preparation and feeding assistance",
      "Medication reminders",
      "Companionship and emotional support",
      "Fall prevention assistance",
      "Light exercise encouragement",
    ],
    bestFor: [
      "Senior citizens",
      "Living alone",
      "Age-related weakness",
      "Limited mobility",
      "Memory loss",
    ],
    internalLinks: [
      {
        title: "Home Nursing Service",
        url: "/home-nursing",
      },
      {
        title: "Physiotherapy at Home",
        url: "/physiotherapy-at-home",
      },
    ],
    note: "If an elderly patient requires injections, IV medications, wound dressing, catheter insertion, or other clinical procedures, our nursing team can provide additional medical support.",
  },

  {
    id: 2,
    slug: "stroke-recovery-care",
    title: "Home Caregiver for Stroke Recovery",
    shortTitle: "Stroke Care",
    icon: <FaBrain className="text-4xl text-white" />,
    keywords: [
      "stroke caregiver",
      "caregiver for stroke patient",
      "stroke patient care at home",
      "stroke rehabilitation",
    ],
    description:
      "Stroke survivors often experience weakness, poor balance, speech difficulties, and limited mobility after returning home. Our professional caregivers provide personalized daily assistance that supports recovery while following the rehabilitation plan developed by physicians and physiotherapists.",
    whyNeed:
      "The first few months after a stroke are critical. Continuous assistance with daily living activities helps reduce complications while encouraging safe independence throughout recovery.",
    howWeHelp: [
      "Safe mobility assistance",
      "Walking support",
      "Transfers between bed and chair",
      "Meal preparation and feeding",
      "Medication reminders",
      "Personal hygiene assistance",
      "Daily exercise encouragement",
      "Family support",
    ],
    bestFor: [
      "Recent stroke survivors",
      "Long-term stroke recovery",
      "Limited mobility",
      "Speech impairment",
      "Balance problems",
    ],
    internalLinks: [
      {
        title: "Home Physiotherapy",
        url: "/physiotherapy-at-home",
      },
      {
        title: "Home Nursing",
        url: "/home-nursing",
      },
    ],
    note: "Stroke patients who require injections, NG tube feeding, catheter care, or wound management can also receive professional nursing services when recommended.",
  },

  {
    id: 3,
    slug: "paralysis-patient-care",
    title: "Professional Caregiver for Paralysis Patients",
    shortTitle: "Paralysis Care",
    icon: <FaWheelchair className="text-4xl text-white" />,
    keywords: [
      "paralysis caregiver",
      "patient caregiver",
      "home caregiver",
      "paralysis care",
    ],
    description:
      "Patients living with paralysis often require daily support with mobility, hygiene, feeding, repositioning, and personal care. Our experienced caregivers help improve comfort while reducing physical and emotional stress for family caregivers.",
    whyNeed:
      "Long-term immobility can increase the risk of pressure injuries, muscle stiffness, and emotional isolation. Consistent caregiver support helps improve quality of life.",
    howWeHelp: [
      "Wheelchair transfers",
      "Position changing",
      "Daily hygiene assistance",
      "Meal support",
      "Mobility assistance",
      "Skin care support",
      "Exercise encouragement",
      "Companionship",
    ],
    bestFor: [
      "Spinal cord injury",
      "Paralysis",
      "Limited mobility",
      "Long-term care",
    ],
    internalLinks: [
      {
        title: "Medical Equipment Rental",
        url: "/medical-equipment-rental",
      },
      {
        title: "Home Nursing",
        url: "/home-nursing",
      },
    ],
    note: "Our caregivers work alongside healthcare professionals whenever advanced nursing procedures or rehabilitation services are required.",
  },

  {
    id: 4,
    slug: "bedridden-patient-care",
    title: "Bedridden Patient Home Caregiver",
    shortTitle: "Bedridden Care",
    icon: <FaProcedures className="text-4xl text-white" />,
    keywords: [
      "bedridden patient care",
      "bedridden caregiver",
      "home patient care",
    ],
    description:
      "Patients confined to bed require continuous support to maintain hygiene, comfort, nutrition, and overall wellbeing. Our caregivers provide respectful assistance while helping reduce complications associated with prolonged bed rest.",
    whyNeed:
      "Professional caregiver support helps reduce the risk of pressure injuries, poor hygiene, muscle stiffness, and caregiver burnout.",
    howWeHelp: [
      "Regular position changes",
      "Personal hygiene",
      "Feeding assistance",
      "Skin care",
      "Bedside mobility",
      "Companionship",
      "Daily comfort support",
      "Family assistance",
    ],
    bestFor: [
      "Bedridden patients",
      "Long-term illness",
      "ICU recovery",
      "Home recovery",
    ],
    internalLinks: [
      {
        title: "Home Nursing",
        url: "/home-nursing",
      },
    ],
    note: "If clinical care is required, our licensed nursing team can provide advanced home nursing support.",
  },

  {
    id: 5,
    slug: "dementia-care",
    title: "Home Caregiver for Dementia & Alzheimer's",
    shortTitle: "Dementia Care",
    icon: <FaBrain className="text-4xl text-white" />,
    keywords: [
      "dementia caregiver",
      "Alzheimer's caregiver",
      "elderly caregiver",
    ],
    description:
      "People living with dementia require patience, structured routines, supervision, and compassionate support. Our caregivers assist with everyday activities while promoting safety, dignity, and emotional wellbeing.",
    whyNeed:
      "Memory loss and confusion can increase the risk of falls, wandering, missed medications, and accidents. Professional caregivers provide continuous supervision and reassurance.",
    howWeHelp: [
      "Daily routine assistance",
      "Medication reminders",
      "Meal support",
      "Personal hygiene",
      "Companionship",
      "Safety supervision",
      "Mobility assistance",
      "Family support",
    ],
    bestFor: ["Alzheimer's disease", "Memory loss", "Dementia"],
    internalLinks: [
      {
        title: "Elderly Care",
        url: "/elderly-care",
      },
    ],
    note: "Our caregivers focus on compassionate daily assistance while working closely with families and healthcare professionals.",
  },
];

const WhoNeedsCaregiver = () => {
  return (
    <section
  className="py-16 lg:py-24 bg-base-100"
  aria-labelledby="who-needs-caregiver"
>
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    {/* ========================= HERO ========================= */}

    <section
      className="relative overflow-hidden rounded-[32px] bg-cover bg-center bg-no-repeat"
      
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C2144]/95 via-[#453364]/90 to-[#453364]/80" />

      <div className="relative z-10 py-20 lg:py-28 px-6 lg:px-16">

        <div className="max-w-5xl">

          <span className="badge badge-primary badge-lg mb-6">
            Trusted Home Caregiver Service in Bangladesh
          </span>

          <h2
            id="who-needs-caregiver"
            className="text-4xl lg:text-6xl font-bold leading-tight text-white"
          >
            Who Needs a Professional Home Caregiver Service in Bangladesh?
          </h2>

          <p className="mt-8 text-lg leading-9 text-white/90">
            Professional home caregiver services help people who need daily
            assistance because of ageing, illness, disability, surgery or
            limited mobility. Whether your loved one requires temporary support
            during recovery or long-term home care, an experienced caregiver
            provides compassionate assistance while allowing patients to remain
            safe, comfortable and independent in their own home.
          </p>

          <p className="mt-5 text-lg leading-9 text-white/80">
            At <strong>Healthcare at Home Bangladesh</strong>, our trained
            caregivers support elderly individuals, stroke survivors,
            bedridden patients, people living with dementia, Parkinson's
            disease, paralysis, cancer and other chronic medical conditions.
            Every care plan is tailored to the patient's physical condition,
            doctor's recommendations and family expectations.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "Elderly Care",
              "Stroke Recovery",
              "Paralysis Care",
              "Bedridden Care",
              "Dementia Care",
              "Cancer Care",
              "24 Hour Caregiver",
              "12 Hour Caregiver",
            ].map((item) => (
              <div
                key={item}
                className="badge badge-outline badge-lg border-white text-white px-4 py-4"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>

    {/* ========================= WHY HIRE ========================= */}

    <section className="max-w-6xl mx-auto mt-16">

      <div className="text-center">

        <h2 className="text-3xl lg:text-5xl font-bold">
          When Should You Hire a Professional Caregiver?
        </h2>

        <p className="mt-6 text-lg leading-9 text-base-content/80 max-w-4xl mx-auto">
          Many families wait until everyday tasks become difficult before
          considering caregiver support. Early professional caregiving can help
          prevent falls, reduce hospital readmissions, improve recovery,
          support medication routines and give family caregivers valuable peace
          of mind.
        </p>

      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-12">

        {[
          "Needs help with bathing or dressing",
          "Frequently falls or loses balance",
          "Cannot prepare meals independently",
          "Requires medication reminders",
          "Recently discharged from hospital",
          "Recovering after surgery",
          "Lives alone without family support",
          "Needs continuous supervision",
        ].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-primary/20 bg-primary/5 p-6 bg-gradient-to-r from-[#2C2144]/95 via-[#453364]/90 to-[#453364]/80"
          >
            <div className="flex gap-3 items-start">
              <FaCheckCircle className="text-success mt-1" />
              <p className="text-white">{item}</p>
            </div>
          </div>
        ))}

      </div>

    </section>

    {/* ========================= CONDITION CARDS ========================= */}

    <section className="mt-20">

      <div className="text-center mb-12">

        <h2 className="text-3xl lg:text-5xl font-bold">
          Conditions That Can Benefit from Professional Home Caregiver Services
        </h2>

        <p className="mt-5 text-lg text-base-content/80 max-w-4xl mx-auto leading-8">
          Every patient has different physical, emotional and medical support
          needs. Our experienced caregivers provide personalised assistance
          based on each patient's health condition, recovery goals and daily
          routine while working alongside families and healthcare professionals.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {patientGroups.map((item) => (

          <article
            key={item.id}
            className="card bg-[#453364] border border-[#5e4a87] hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-xl"
          >

            <div className="card-body">

              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-white mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="text-white/90 leading-8 mt-2">
                {item.description}
              </p>

 
            

              <div className="">

                <h4 className="font-semibold text-white mb-3">
                  Daily Caregiver Support Includes:
                </h4>

                <ul className="space-y-3">

                  {item.howWeHelp.map((support) => (

                    <li
                      key={support}
                      className="flex items-start gap-3 text-white"
                    >
                      <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                      <span>{support}</span>
                    </li>

                  ))}

                </ul>

              </div>

              {/* <div className="mt-6 rounded-xl bg-white/10 p-4">

                <h5 className="font-semibold text-primary mb-2">
                  Best For
                </h5>

                <div className="flex flex-wrap gap-2">

                  {item.bestFor.map((item) => (

                    <span
                      key={item}
                      className="badge badge-outline text-white border-white/30"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

              <div className="mt-6 bg-primary/10 border border-primary/20 rounded-xl p-4">

                <h5 className="font-semibold text-primary mb-2">
                  Clinical Note
                </h5>

                <p className="text-white/80 leading-7">
                  {item.note}
                </p>

              </div> */}

            </div>

          </article>

        ))}

      </div>

    </section>

    {/* ========================= WHY EARLY CARE ========================= */}

    <section className="mt-24 rounded-[30px] bg-[#453364] overflow-hidden">

      <div className="grid lg:grid-cols-2">

        <div className="p-10 lg:p-16">

          <h2 className="text-4xl font-bold text-white">
            Why Families Choose Professional Caregiver Services Early
          </h2>

          <p className="mt-8 leading-9 text-white">
            Professional caregiver support is not only for critically ill
            patients. Early assistance helps prevent falls, improves recovery,
            reduces caregiver burnout and allows patients to remain comfortable
            in familiar surroundings while maintaining dignity and independence.
          </p>

          <div className="space-y-4 mt-10">

            {[
              "Lower risk of falls and injuries",
              "Better recovery after surgery",
              "Medication reminder support",
              "Reduced caregiver burnout",
              "Personalised daily assistance",
              "Improved quality of life",
              "Greater independence",
              "Peace of mind for families",
            ].map((item) => (

              <div
                key={item}
                className="flex gap-3 items-start text-white"
              >
                <FaCheckCircle className="text-success mt-1" />
                <span>{item}</span>
              </div>

            ))}

          </div>

        </div>

        <div className="bg-base-100 p-10 lg:p-16 flex flex-col justify-center">

          <h3 className="text-3xl font-bold">
            Need Help Choosing the Right Caregiver?
          </h3>

          <p className="mt-6 leading-8 text-base-content/80">
            Our care coordinators will assess your loved one's condition and
            recommend the most appropriate caregiver plan based on medical
            needs, mobility level and family preferences.
          </p>

          <a
            href="/contact"
            className="btn btn-primary mt-8 btn-lg"
          >
            Book a Free Care Assessment
            <FaArrowRight />
          </a>

        </div>

      </div>

    </section>

    {/* ========================= SEO CONTENT ========================= */}

    <section className="max-w-6xl mx-auto mt-24">

      <h2 className="text-3xl lg:text-5xl font-bold text-center">
        Why Choose Healthcare at Home Bangladesh for Caregiver Services?
      </h2>

      <div className="mt-10 space-y-8 text-lg leading-9 text-base-content/80">

        <p>
          Healthcare at Home Bangladesh provides professional caregiver services
          for elderly individuals, stroke survivors, post-surgical patients,
          people living with paralysis, dementia, Parkinson's disease, cancer
          and other chronic health conditions. Every caregiver is carefully
          selected, trained and matched according to the patient's physical,
          emotional and personal care requirements.
        </p>

        <p>
          Our home caregivers assist with bathing, dressing, grooming,
          toileting, meal preparation, feeding assistance, medication reminders,
          mobility support, companionship and other daily living activities.
          When additional medical procedures are required, our caregivers work
          alongside qualified home nurses, physiotherapists and doctors to
          ensure coordinated patient care.
        </p>

        <p>
          Whether you require a 12-hour caregiver, 24-hour caregiver or
          long-term home care service in Dhaka, Healthcare at Home Bangladesh is
          committed to providing compassionate, reliable and personalised care
          that improves patient wellbeing while giving families complete peace
          of mind.
        </p>

      </div>

    </section>

  </div>
</section>
  );
};

export default WhoNeedsCaregiver;
