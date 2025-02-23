import React from "react";
import Review from "../Review/Review";
import Success from "../Success/Success";
import Companionshipabout from "./Companionshipabout";
import Companionshiplanding from "./Companionshiplanding";
// import Companionship from './Companionship';
import Teamcompanionship from "./Teamcompanionship";
import Marque from "../Marque/Marque";
import { Helmet } from "react-helmet-async";

const Companionship = () => {
  return (
    <div>
      <Helmet>
        <title>Companionship at Dhaka</title>
        <meta
          name="description"
          content="Get top-quality professionals  healthcare services at home. Book professional doctors & caregivers online."
        />
        <meta
          name="keywords"
          content="healthcare,home care,home nursing care,top caregiver dhaka,physiotheray dhaka, home doctors, medical caregiver"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Companion   at Dhaka" />
        <meta
          property="og:description"
          content="Get top-quality healthcare services at home"
        />
        <meta
          property="og:image"
          content="http://localhost:3000/static/media/service-companionship.fe2c54273b549fcbe6e2.jpg"
        />
        <meta property="og:url" content="https://hcah.mrg.com.bd" />
        <meta property="og:type" content="website" />.
        <link rel="canonical" href="https://hcah.mrg.com.bd" />
      </Helmet>

      <Companionshiplanding />
      <Companionshipabout />
      {/* <Recoverycompanionship/> */}
      <Review />
      <Success></Success>
      <Marque />
      <Teamcompanionship />
    </div>
  );
};

export default Companionship;
