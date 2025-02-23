import React from "react";
import Marque from "../Marque/Marque";
import Review from "../Review/Review";
import Success from "../Success/Success";
import Landingphsio from "./Landingphsio";
import Physioabout from "./Physioabout";
import Recovery from "./Recovery";
import Teamphysio from "./Teamphysio";
import { Helmet } from "react-helmet-async";

const Physiotherapy = () => {
  return (
    <div>
      <Helmet>
        <title>Physiotherapy Center at Dhaka</title>
        <meta
          name="description"
          content="Get top-quality professionals  healthcare services at home. Book professional doctors & caregivers online."
        />
        <meta
          name="keywords"
          content="healthcare,home care,home nursing care,top caregiver dhaka,physiotheray dhaka, home doctors, medical caregiver"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Physiotherapy  Center at Dhaka" />
        <meta
          property="og:description"
          content="Get top-quality healthcare services at home"
        />
        <meta
          property="og:image"
          content="https://hcah.mrg.com.bd/static/media/servicephysio.0b3be423f07047da6e10.jpg"
        />
        <meta property="og:url" content="https://hcah.mrg.com.bd" />
        <meta property="og:type" content="website" />.
        <link rel="canonical" href="https://hcah.mrg.com.bd" />
      </Helmet>
      <Landingphsio />
      <Physioabout />
      <Recovery></Recovery>
      <Review></Review>
      <Success></Success>
      <Marque></Marque>
      <Teamphysio></Teamphysio>
    </div>
  );
};

export default Physiotherapy;
