import React from "react";
import physio from "../../assets/servicephysio.webp";
import ambulanceservice from "../../assets/ambulanceservice.jfif";
import icuservice from "../../assets/icu.webp";
import nurseservice from "../../assets/nurseservice.webp";
import servicemedicalassistant from "../../assets/servicemedicalassistant.webp";
import medicalcaregiver from "../../assets/servicemedicalcare-giver.webp";
import caregiver from "../../assets/service-caregiver.webp";
import nanines from "../../assets/service-nanines.webp";
import companionship from "../../assets/service-companionship.webp";
import attendant from "../../assets/attendent.webp";
import equipment from "../../assets/service-medical-equipment.webp";
import "../../../src/components/Blog/Blog.css";
import "./Service.css";
import { Link } from "react-router-dom";
const Service = () => {

 const servicesData = [
  {
    id: "service-home-nursing",
    slug: "/services/home-nursing",
    title: "Home Nursing",
    image: nurseservice,
    altText:
      "Professional Home Nursing Service for Elderly and Patients in Bangladesh",
    description:
      "Our registered nurses provide professional home nursing services for elderly individuals, post-operative recovery, stroke rehabilitation, chronic illness management, and critical care patients. We deliver compassionate nursing care at home with medication administration, wound dressing, catheter care, NG tube support, oxygen therapy, and continuous patient monitoring.",
    details: [
      "24/7 Home Nursing Care",
      "Medication Administration",
      "IV Cannula Insertion",
      "NG Tube Insertion & Care",
      "Urinary Catheter Care",
      "Wound Dressing",
      "Injection Administration",
      "Oxygen Therapy Support",
      "Vital Signs Monitoring",
      "Blood Pressure & Blood Glucose Monitoring",
      "Post-Surgical Nursing Care",
      "Stroke & Elderly Patient Care",
      "Health Record Maintenance"
    ]
  },

  {
    id: "service-home-physiotherapy",
    slug: "/services/home-physiotherapy",
    title: "Home Physiotherapy",
    image: physio,
    altText:
      "Professional Home Physiotherapy Service in Bangladesh",
    description:
      "Our experienced physiotherapists provide personalized home physiotherapy services for stroke recovery, orthopedic conditions, neurological rehabilitation, sports injuries, post-operative care, arthritis, back pain, neck pain, and elderly mobility support using evidence-based treatment techniques.",
    details: [
      "Stroke Rehabilitation",
      "Neurological Physiotherapy",
      "Orthopedic Physiotherapy",
      "Post-Surgery Rehabilitation",
      "Sports Injury Rehabilitation",
      "Back & Neck Pain Treatment",
      "Chest Physiotherapy",
      "Pediatric Physiotherapy",
      "Geriatric Physiotherapy",
      "Musculoskeletal Rehabilitation",
      "Exercise Therapy",
      "Home Mobility Training"
    ]
  },

  {
    id: "service-medical-assistant",
    slug: "/services/medical-assistant",
    title: "Medical Assistant",
    image: servicemedicalassistant,
    altText:
      "Professional Medical Assistant Service at Home",
    description:
      "Our qualified medical assistants provide professional patient support at home for elderly individuals, post-operative recovery, and long-term care. They assist with medication reminders, injections, catheter care, NG tube support, mobility assistance, hygiene maintenance, and routine health monitoring.",
    details: [
      "Patient Assistance",
      "Medication Reminder",
      "Injection Support",
      "Catheter Care",
      "NG Tube Assistance",
      "Patient Transfer Assistance",
      "Bed Positioning",
      "Vital Signs Monitoring",
      "Personal Hygiene Support",
      "Health Record Maintenance",
      "Elderly Care Assistance",
      "Daily Patient Support"
    ]
  },

  {
    id: "service-medical-caregiver",
    slug: "/services/medical-caregiver",
    title: "Medical Caregiver",
    image: medicalcaregiver,
    altText:
      "Professional Medical Caregiver Service for Home Patients",
    description:
      "Our trained medical caregivers provide compassionate home care for elderly individuals, disabled patients, stroke survivors, dementia patients, and those recovering after surgery. They assist with daily living activities, medication reminders, feeding support, hygiene care, mobility assistance, and emotional companionship.",
    details: [
      "24/7 Patient Care",
      "Medication Reminder",
      "Personal Hygiene Assistance",
      "Patient Feeding",
      "Diaper Changing",
      "NG Tube Feeding Support",
      "Mobility Assistance",
      "Patient Walking Support",
      "Daily Health Observation",
      "Companionship",
      "Bedside Assistance",
      "Elderly & Stroke Care"
    ]
  },

  {
  id: "service-caregiver",
  slug: "/services/caregiver",
  title: "Home Caregiver",
  image: caregiver,
  altText:
    "Professional Home Caregiver Service for Elderly and Patients in Bangladesh",
  description:
    "Our trained caregivers provide compassionate home care services for elderly individuals, disabled adults, dementia patients, and people recovering from illness or surgery. They assist with personal hygiene, bathing, grooming, feeding, mobility support, medication reminders, companionship, and daily living activities to help patients remain comfortable and independent at home.",
  details: [
    "24/7 Caregiver Support",
    "Personal Hygiene Assistance",
    "Bathing & Grooming",
    "Patient Feeding",
    "Medication Reminder",
    "Diaper Changing",
    "Walking & Mobility Assistance",
    "Companionship",
    "Doctor Appointment Assistance",
    "Light Housekeeping",
    "Transportation Assistance",
    "Daily Living Support"
  ]
},

{
  id: "service-nanny-care",
  slug: "/services/nanny-care",
  title: "Nanny Care",
  image: nanines,
  altText:
    "Professional Baby Care and Nanny Service at Home in Bangladesh",
  description:
    "Our experienced nannies provide safe and reliable baby care services for newborns, infants, toddlers, and young children. They assist with feeding, bathing, diaper changing, sleep routines, hygiene, playtime, and child supervision while creating a caring and nurturing environment for your little one.",
  details: [
    "Newborn Baby Care",
    "Infant Care",
    "Toddler Care",
    "Bottle Feeding",
    "Baby Bathing",
    "Diaper Changing",
    "Sleep Routine Assistance",
    "Baby Hygiene",
    "Play & Learning Activities",
    "Child Supervision",
    "Safe Baby Handling",
    "Mother Support"
  ]
},

{
  id: "service-companionship",
  slug: "/services/companionship",
  title: "Senior Companionship",
  image: companionship,
  altText:
    "Senior Companion Care Service at Home in Bangladesh",
  description:
    "Our companionship service helps elderly individuals and patients stay socially active, emotionally supported, and mentally engaged at home. Our compassionate companions provide conversation, walking assistance, reading, meal companionship, recreational activities, and emotional support to improve overall well-being and reduce loneliness.",
  details: [
    "Elderly Companionship",
    "Conversation & Emotional Support",
    "Walking Assistance",
    "Reading & Recreation",
    "Meal Companionship",
    "Social Engagement",
    "Light Household Assistance",
    "Medication Reminder",
    "Daily Routine Support",
    "Hospital Visit Companion",
    "Family Relief Care",
    "Friendly Home Visits"
  ]
},

{
  id: "service-attendant",
  slug: "/services/patient-attendant",
  title: "Patient Attendant",
  image: attendant,
  altText:
    "Professional Patient Attendant Service at Home",
  description:
    "Our patient attendants provide dependable bedside support for elderly individuals, hospitalized patients at home, and people recovering from surgery or illness. They assist with mobility, personal care, feeding, hygiene, repositioning, and daily routine activities under family guidance.",
  details: [
    "Bedside Patient Support",
    "Patient Mobility Assistance",
    "Feeding Assistance",
    "Personal Hygiene",
    "Bed Positioning",
    "Wheelchair Assistance",
    "Toilet Assistance",
    "Daily Patient Observation",
    "Hospital Discharge Support",
    "Companion Assistance",
    "Elderly Patient Care",
    "Home Recovery Support"
  ]
},

{
  id: "service-medical-equipment",
  slug: "/services/medical-equipment",
  title: "Medical Equipment Rental",
  image: equipment,
  altText:
    "Medical Equipment Rental and Home Medical Devices in Bangladesh",
  description:
    "We supply high-quality medical equipment for home patient care, post-operative recovery, ICU setup, and long-term treatment. Our medical equipment rental service includes hospital beds, oxygen concentrators, BiPAP machines, wheelchairs, suction machines, nebulizers, patient monitors, and other essential healthcare devices.",
  details: [
    "Hospital Bed Rental",
    "Oxygen Concentrator",
    "Oxygen Cylinder",
    "BiPAP Machine",
    "CPAP Machine",
    "Patient Monitor",
    "Wheelchair",
    "Nebulizer",
    "Suction Machine",
    "Pulse Oximeter",
    "Glucometer",
    "Medical Equipment Delivery"
  ]
},

{
  id: "service-emergency-ambulance",
  slug: "/services/emergency-ambulance",
  title: "Emergency Ambulance",
  image: ambulanceservice,
  altText:
    "24/7 Emergency Ambulance Service in Bangladesh",
  description:
    "Our emergency ambulance service operates 24/7 for patient transfers, emergency response, hospital admissions, ICU transfers, and intercity medical transportation. We provide AC ambulances, non-AC ambulances, ICU ambulances, CCU ambulances, ventilator ambulances, and trained medical support whenever required.",
  details: [
    "24/7 Ambulance Service",
    "ICU Ambulance",
    "CCU Ambulance",
    "Ventilator Ambulance",
    "AC Ambulance",
    "Non-AC Ambulance",
    "Hospital Transfer",
    "Emergency Patient Transport",
    "Intercity Ambulance",
    "Doctor & Nurse Support",
    "Medical Oxygen Support",
    "Critical Care Transport"
  ]
},

{
  id: "service-icu-home-setup",
  slug: "/services/home-icu-setup",
  title: "ICU & Critical Care Setup",
  image: icuservice,
  altText:
    "Home ICU Setup and Critical Care Service in Bangladesh",
  description:
    "We provide complete ICU and critical care setup at home for patients requiring advanced medical support after hospitalization or during long-term recovery. Our service includes ICU-trained nurses, ventilator support, oxygen therapy, patient monitors, suction machines, hospital beds, BiPAP machines, and professional home critical care management.",
  details: [
    "Complete Home ICU Setup",
    "ICU-Trained Nurses",
    "Ventilator Support",
    "BiPAP & CPAP Support",
    "Patient Monitor Setup",
    "Hospital Bed Installation",
    "Oxygen Therapy",
    "Suction Machine",
    "Critical Care Monitoring",
    "Post ICU Recovery",
    "Long-Term Critical Care",
    "24/7 ICU Home Support"
  ]
}

];











  return (
    <section className="blog">
      <div className="py-8 mx-8 md:mx-16 lg:mx-24 ">
        <div className="">
          <h1
            className="text-3xl text-center  text-[#453364]  font-bold poppins-b sm:text-4xl"
         
          >
            Our Services
          </h1>
          <h2
            className="  w-32 h-1 rounded-lg mt-2 mb-4 mx-auto bg-[#453364]"
            
          ></h2>
        </div>

        

<div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">

  {servicesData.map((service) => (

    <article
      key={service.id}
      className="flex flex-col overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-xl hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-duration="1000"
    >

      {/* Service Image */}

      <Link to={service.slug}>
        <img
          src={service.image}
          alt={service.altText}
          title={service.altText}
          loading="lazy"
          className="object-cover w-full h-56 transition-transform duration-300 hover:scale-105"
        />
      </Link>

      {/* Content */}

      <div className="flex flex-col flex-grow p-6">

        <h3 className="text-xl font-bold text-[#453364] leading-7">

          <Link
            to={service.slug}
            className="hover:text-[#6A4FA3] transition-colors duration-200"
          >
            {service.title}
          </Link>

        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-700 flex-grow line-clamp-5">

          {service.description}

        </p>

        {/* Highlights */}

        <ul className="mt-5 space-y-2">

          {service.details.slice(0, 4).map((detail, idx) => (

            <li
              key={idx}
              className="flex items-center text-sm text-gray-600"
            >

              <svg
                className="w-4 h-4 mr-2 text-[#453364] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8
                  8a1 1 0 01-1.414 0l-4-4a1 1
                  0 011.414-1.414L8 12.586l7.293-7.293a1
                  1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              {detail}

            </li>

          ))}

        </ul>

        {/* Button */}

        <Link
          to={service.slug}
          className="mt-6 btn bg-[#453364] hover:bg-[#362850] text-white border-none"
        >
          Learn More
        </Link>

      </div>

    </article>

  ))}

</div>
      </div>
    </section>
  );
};

export default Service;
