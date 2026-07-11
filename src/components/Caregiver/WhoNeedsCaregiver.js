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
    title: "Elderly Home Care",
    icon: <FaUserFriends className="text-4xl text-white" />,
    description:
      "Older adults who need help with daily living activities such as bathing, dressing, walking, meal preparation, medication reminders, and companionship can benefit from a professional home caregiver. Our caregivers help seniors maintain dignity, comfort, and independence while remaining safely at home.",
    support: [
      "Personal hygiene assistance",
      "Meal preparation & feeding support",
      "Medication reminders",
      "Walking & mobility assistance",
      "Fall prevention support",
      "Companionship & emotional wellbeing",
    ],
  },
  {
    id: 2,
    title: "Stroke Recovery Care",
    icon: <FaBrain className="text-4xl text-white" />,
    description:
      "Stroke survivors often experience weakness, balance problems, speech difficulties, or limited mobility after hospital discharge. A trained caregiver provides daily assistance while supporting the rehabilitation plan recommended by healthcare professionals.",
    support: [
      "Safe mobility assistance",
      "Transfers from bed to chair",
      "Personal hygiene support",
      "Meal assistance",
      "Medication reminders",
      "Daily activity encouragement",
    ],
  },
  {
    id: 3,
    title: "Paralysis Patient Care",
    icon: <FaWheelchair className="text-4xl text-white" />,
    description:
      "Patients living with paralysis often require assistance throughout the day. Our caregivers help with mobility, positioning, hygiene, feeding, and everyday activities while promoting comfort and reducing caregiver stress for families.",
    support: [
      "Position changing",
      "Wheelchair assistance",
      "Personal care",
      "Meal support",
      "Skin care assistance",
      "Daily routine management",
    ],
  },
  {
    id: 4,
    title: "Bedridden Patient Care",
    icon: <FaProcedures className="text-4xl text-white" />,
    description:
      "Bedridden patients require continuous daily support to maintain hygiene, comfort, and overall wellbeing. Professional caregivers assist with routine care while helping reduce the risk of pressure injuries through proper positioning and regular monitoring.",
    support: [
      "Position changes",
      "Skin care support",
      "Feeding assistance",
      "Personal hygiene",
      "Bedside mobility",
      "Family support",
    ],
  },
  {
    id: 5,
    title: "Dementia & Alzheimer's Care",
    icon: <FaBrain className="text-4xl text-white" />,
    description:
      "Individuals living with dementia or Alzheimer's disease benefit from structured routines, supervision, companionship, and assistance with everyday activities. Our caregivers provide compassionate support that helps families manage daily challenges at home.",
    support: [
      "Safety supervision",
      "Daily routine assistance",
      "Companionship",
      "Meal support",
      "Medication reminders",
      "Personal hygiene",
    ],
  },
  {
    id: 6,
    title: "Cancer Patient Care",
    icon: <FaMedkit className="text-4xl text-white" />,
    description:
      "Cancer treatment can cause weakness, fatigue, and reduced mobility. Our home caregivers provide respectful assistance with personal care, nutrition, mobility, and emotional support so patients can recover comfortably at home.",
    support: [
      "Personal care",
      "Meal assistance",
      "Walking support",
      "Daily monitoring",
      "Emotional support",
      "Companionship",
    ],
  },
  {
    id: 7,
    title: "Post-Surgery Recovery Care",
    icon: <FaHeartbeat className="text-4xl text-white" />,
    description:
      "After surgery, patients may temporarily need assistance with mobility, hygiene, dressing, meals, and medication reminders. Our caregivers provide reliable support during the recovery period while encouraging safe independence.",
    support: [
      "Walking assistance",
      "Personal hygiene",
      "Meal preparation",
      "Medication reminders",
      "Recovery support",
      "Hospital follow-up assistance",
    ],
  },
  {
    id: 8,
    title: "Parkinson's Disease Care",
    icon: <FaWalking className="text-4xl text-white" />,
    description:
      "People living with Parkinson's disease may need daily assistance because of tremors, stiffness, and movement difficulties. Our caregivers provide patient-centered support to improve comfort and quality of life at home.",
    support: [
      "Walking support",
      "Fall prevention",
      "Personal hygiene",
      "Meal assistance",
      "Medication reminders",
      "Daily activity support",
    ],
  },
  {
    id: 9,
    title: "Patients with Physical Disabilities",
    icon: <FaHandsHelping className="text-4xl text-white" />,
    description:
      "Adults with temporary or permanent physical disabilities may require help with everyday tasks. Our caregivers assist with mobility, hygiene, meals, and household activities while encouraging independence wherever possible.",
    support: [
      "Mobility assistance",
      "Personal care",
      "Meal support",
      "Wheelchair transfers",
      "Daily activities",
      "Companionship",
    ],
  },
  {
    id: 10,
    title: "Chronic Illness & Long-Term Care",
    icon: <FaUserNurse className="text-4xl text-white" />,
    description:
      "Patients living with chronic medical conditions often require long-term daily support. Our caregivers help families by providing consistent personal care, medication reminders, mobility assistance, and emotional companionship.",
    support: [
      "Daily living assistance",
      "Medication reminders",
      "Mobility support",
      "Meal assistance",
      "Companionship",
      "Routine monitoring",
    ],
  },
];

const WhoNeedsCaregiver = () => {
  return (
    <section
      className="py-16 lg:py-24 bg-base-100"
      aria-labelledby="who-needs-caregiver"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <section
          className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('../../../src/assets/caregiverlanding.png)", // Change to your image
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Optional Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center text-white">
              <span className="badge badge-primary badge-lg mb-5">
                Professional Home Caregiver Service
              </span>

              <h2
                id="who-needs-caregiver"
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              >
                Who Needs a Professional Home Caregiver?
              </h2>

              <p className="mt-6 text-base sm:text-lg lg:text-xl leading-8 text-white/90">
                Professional home caregiver services are designed for people who
                need assistance with daily living activities while remaining in
                the comfort of their own home. Whether recovering from surgery,
                living with a chronic illness, caring for an elderly family
                member, or supporting someone with limited mobility, a trained
                caregiver can provide compassionate assistance that improves
                comfort, safety, and quality of life.
              </p>

              <p className="mt-5 text-sm sm:text-base lg:text-lg leading-8 text-white/80">
                At <strong>Healthcare at Home Bangladesh</strong>, our
                experienced caregivers support elderly individuals, stroke
                survivors, bedridden patients, people living with dementia,
                paralysis, Parkinson's disease, cancer, and other conditions
                requiring dependable home care. Every care plan is personalized
                to meet the patient's health condition, independence level, and
                family requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 py-8">
          {patientGroups.map((item) => (
            <article
              key={item.id}
              className="card bg-[#453364] border border-base-300 hover:border-primary transition-all duration-300 hover:shadow-2xl"
            >
              <div className="card-body">
                <div className="mb-5">{item.icon}</div>

                <h3 className="card-title text-2xl mb-3 text-white">{item.title}</h3>

                <p className="leading-7 text-white">
                  {item.description}
                </p>

                <div className="divider my-4"></div>

                <h4 className="font-semibold mb-3 text-white">
                  Daily Caregiver Support Includes:
                </h4>

                <ul className="space-y-3">
                  {item.support.map((support, index) => (
                    <li
                      key={index}
                      className="text-white flex items-start gap-3 text-sm leading-6"
                    >
                      <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                      <span>{support}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Why Early Care */}
        <div className="mt-20 rounded-3xl bg-[#453364] text-white-content p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Why Early Caregiver Support Matters
              </h2>

              <p className="leading-8 opacity-95 text-white">
                Delaying professional caregiving support can increase the risk
                of falls, medication errors, poor nutrition, reduced mobility,
                caregiver burnout, and avoidable hospital readmissions.
                Receiving the right support at the right time helps patients
                recover safely while reducing physical and emotional stress for
                family members.
              </p>

              <p className="mt-5 leading-8 opacity-95 text-white">
                Our caregivers work alongside families and healthcare
                professionals to provide respectful, compassionate, and
                personalized assistance that promotes comfort, dignity, and
                independence at home.
              </p>
            </div>

            <div className="bg-base-100 rounded-2xl p-8 text-base-content shadow-xl">
              <h3 className="text-2xl font-bold mb-5">
                Benefits of Professional Home Care
              </h3>

              <ul className="space-y-4">
                {[
                  "Safe assistance with daily living activities",
                  "Reduced risk of falls and injuries",
                  "Personalized care plans",
                  "Improved comfort at home",
                  "Medication reminders",
                  "Support for family caregivers",
                  "Compassionate companionship",
                  "Better quality of life",
                ].map((benefit, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="btn btn-primary w-full mt-8"
                aria-label="Book caregiver consultation"
              >
                Book a Free Care Consultation
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="max-w-5xl mx-auto mt-20">
          <h2 className="text-3xl font-bold mb-8">
            Professional Caregiver Services Tailored to Every Patient
          </h2>

          <div className="space-y-6 leading-8 text-base-content/80">
            <p>
              Choosing the right caregiver service is one of the most important
              decisions for families caring for elderly parents, recovering
              patients, or individuals living with chronic medical conditions.
              Every patient has unique physical, emotional, and personal care
              requirements. For this reason, Healthcare at Home Bangladesh
              provides personalized caregiver services based on each patient's
              health condition, mobility level, daily routine, and family
              expectations.
            </p>

            <p>
              Our professional home caregivers assist with bathing, dressing,
              grooming, feeding, mobility, companionship, medication reminders,
              and other daily activities while encouraging independence whenever
              possible. Whether you need an elderly caregiver, a caregiver for a
              stroke survivor, post-surgery support, dementia care, or long-term
              home care, our experienced team is committed to delivering
              compassionate, reliable, and patient-centered care in the comfort
              of your home.
            </p>

            <p>
              We proudly provide dependable home caregiver services across
              Dhaka, helping families access professional care without the need
              for prolonged hospital stays whenever home-based support is
              appropriate. Our goal is to improve patient wellbeing while giving
              families peace of mind through safe, respectful, and high-quality
              caregiving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoNeedsCaregiver;
