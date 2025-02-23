import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Faq from "../Faq/Faq";
import Landing from "../Landing/Landing";
import Map from "../Map/Map";
import Marque from "../Marque/Marque";

import Review from "../Review/Review";
import Service from "../Service/Service";
import Success from "../Success/Success";
import Team from "../Team/Team";
import YoutubeVideo from "../Blog/YoutubeVideo";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="blog">
      <Helmet>
        <title> HealthCare at Home Bangladesh</title>
        <meta name="description" content="Get top-quality professionals  healthcare services at home. Book professional doctors & caregivers online." />
        <meta name="keywords" content="healthcare,home care,home nursing care,top caregiver dhaka,physiotheray dhaka, home doctors, medical caregiver" />
        <meta name="robots" content="index, follow" />
        {/* <meta property="og:title" content="Healthcare at Home" /> */}
        <meta property="og:title" content=" Best Health care at Home" />
        <meta property="og:title" content="Best Healthcare at Home | HealthCare at Home Bangladesh" />
        <meta property="og:description" content="Get top-quality healthcare services at home." />
        <meta property="og:image" content="https://hcah.mrg.com.bd/static/media/service-caregive.f73bb16bcec38cd23239.jpg" />
        <meta property="og:url" content="https://hcah.mrg.com.bd" />
        <meta property="og:type" content="website" />.
        <link rel="canonical" href="https://hcah.mrg.com.bd" />


       
      </Helmet>
      <Landing></Landing>
      <Service></Service>
      <Review></Review>

      <Success></Success>
      <Marque></Marque>
      <Team></Team>
      <YoutubeVideo></YoutubeVideo>
      <About></About>
      {/* <Faq></Faq> */}
      <Contact></Contact>
      {/* <Map></Map> */}
    </div>
  );
};

export default Home;
