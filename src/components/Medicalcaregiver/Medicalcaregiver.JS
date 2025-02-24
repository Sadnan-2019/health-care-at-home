import React from "react";
import Medicalcaregiverlanding from "./Medicalcaregiverlanding";
import Medicalcaregiverabout from "./Medicalcaregiverabout";
import Recoverymedicalcaregiver from "./Recoverymedicalcaregiver";
import Teammedicalcaregiver from "./Teammedicalcaregiver";
import Review from "../Review/Review";
import Success from "../Success/Success";
import Marque from "../Marque/Marque";
import { Helmet } from "react-helmet-async";
const Medicalcaregiver = () => {
  return (
    <div>
      <Helmet>
        <title>Medical Caregiver at Dhaka</title>
        <meta
          name="description"
          content="Get top-quality professionals  healthcare services at home. Book professional doctors & caregivers online."
        />
        <meta
          name="keywords"
          content="healthcare,home care,home nursing care,top caregiver dhaka,physiotheray dhaka, home doctors, medical caregiver"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Medical Caregiver at Dhaka" />
        <meta
          property="og:description"
          content="Get top-quality healthcare services at home"
        />
        <meta
          property="og:image"
          content="http://localhost:3000/static/media/servicemedicalcare-giver.28294dc37754040210c8.webp"
        />
        <meta property="og:url" content="https://hcah.mrg.com.bd" />
        <meta property="og:type" content="website" />.
        <link rel="canonical" href="https://hcah.mrg.com.bd/medical-caregiver" />
      </Helmet>
      <Medicalcaregiverlanding />
      <Medicalcaregiverabout />
      <Recoverymedicalcaregiver />
      <Review />
      <Success />
      <Marque />
      <Teammedicalcaregiver />
    </div>
  );
};

export default Medicalcaregiver;
