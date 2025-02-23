import React from "react";
import Review from "../Review/Review";
import Success from "../Success/Success";
import Nanycareabout from "./Nanycareabout";
import Nanycarelanding from "./Nanycarelanding";
import Recoverynany from "./Recoverynany";
import Teamnanycare from "./Teamnanycare";
import Marque from "../Marque/Marque";
import { Helmet } from "react-helmet-async";

const Nanycare = () => {
  return (
    <div>
      <Helmet>
        <title>Nanycare at Dhaka</title>
        <meta
          name="description"
          content="Get top-quality professionals  healthcare services at home. Book professional doctors & caregivers online."
        />
        <meta
          name="keywords"
          content="healthcare,home care,home nursing care,top caregiver dhaka,physiotheray dhaka, home doctors, medical caregiver"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Nanycare at Dhaka" />
        <meta
          property="og:description"
          content="Get top-quality healthcare services at home"
        />
        <meta
          property="og:image"
          content="http://localhost:3000/static/media/service-caregive.f73bb16bcec38cd23239.jpg"
        />
        <meta property="og:url" content="https://hcah.mrg.com.bd" />
        <meta property="og:type" content="website" />.
        <link rel="canonical" href="https://hcah.mrg.com.bd" />
      </Helmet>
      <Nanycarelanding />
      <Nanycareabout />
      <Recoverynany />
      <Review />
      <Success />
      <Marque />
      <Teamnanycare />
    </div>
  );
};

export default Nanycare;
