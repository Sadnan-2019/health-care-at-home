import React from "react";
import Review from "../Review/Review";
import Success from "../Success/Success";
import Nanycareabout from "./Nanycareabout";
import Nanycarelanding from "./Nanycarelanding";
import Recoverynany from "./Recoverynany";
import Teamnanycare from "./Teamnanycare";
import Marque from "../Marque/Marque";
import { Helmet } from "react-helmet-async";
import InfantToddlerCare from "./InfantToddlerCare";
import NannyCareBenefits from "./NannyCareBenefits";
import BabyCareRoutine from "./BabyCareRoutine";
import SafeFeedingAndSleep from "./SafeFeedingAndSleep";
import NannycareSelection from "./NannySelection";
import ServiceAreasBangladesh from "./ServiceAreasBangladesh.js";
import BabyCarePricingBD from "./BabyCarePricingBD.js";
import NannyVsBabysitterVsNurse from "./NannyVsBabysitterVsNurse.js";
import WhyChooseUs from "./WhyChooseUs.js";
import Faq from "../Faq/Faq.js";
import FAQSection from "./FAQSection.js";

const Nanycare = () => {
  return (
    <div>
     <Helmet>
  <title>Nanycare at Dhaka | Baby Care & Nanny Services</title>

  <meta
    name="description"
    content="Get trusted baby care, nanny, babysitter, and newborn care services at home in Dhaka. Hire trained and verified caregivers for your child."
  />

  <meta
    name="keywords"
    content="nanycare Dhaka, baby care at home, nanny service Dhaka, babysitter Dhaka, newborn care Dhaka, baby care service Bangladesh, child care at home"
  />

  <meta name="robots" content="index, follow" />

  <meta
    property="og:title"
    content="Nanycare at Dhaka | Baby Care & Nanny Services"
  />

  <meta
    property="og:description"
    content="Trusted baby care, nanny, babysitter, and newborn care services at home in Dhaka."
  />

  <meta
    property="og:image"
    content="https://hcah.mrg.com.bd/static/media/nanysrecovery.f88d6a787f8627fbf07b.jpg"
  />

  <meta
    property="og:url"
    content="https://hcah.mrg.com.bd/nanycare"
  />

  <meta property="og:type" content="website" />

  <link
    rel="canonical"
    href="https://hcah.mrg.com.bd/nanycare"
  />
</Helmet>
      <Nanycarelanding />
      <Nanycareabout />
      <InfantToddlerCare></InfantToddlerCare>
      <NannyCareBenefits></NannyCareBenefits>
      <BabyCareRoutine></BabyCareRoutine>
      <SafeFeedingAndSleep></SafeFeedingAndSleep>
    <NannycareSelection></NannycareSelection>
    <ServiceAreasBangladesh></ServiceAreasBangladesh>
    {/* <BabyCarePricingBD></BabyCarePricingBD> */}
    <NannyVsBabysitterVsNurse></NannyVsBabysitterVsNurse>
    <WhyChooseUs></WhyChooseUs>
    
      <Recoverynany />
      <Review />
      <Success />
      <Marque />
      <Teamnanycare />
       <FAQSection></FAQSection>
    </div>
  );
};

export default Nanycare;
