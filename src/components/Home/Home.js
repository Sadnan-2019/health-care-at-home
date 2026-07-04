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
import serviceListSchema from "../../../src/schema/serviceListSchema";

   const Home = () => {
   

const schemaData = {
  "@context": "https://schema.org",
  "@type": "HomeAndCommunityCare",
  "@id": "https://www.hcah.mrg.com.bd/#organization",

  name: "HealthCare at Home Bangladesh",

  url: "https://www.hcah.mrg.com.bd",

  logo: "https://www.hcah.mrg.com.bd/HCAHBD.png",

  image: "https://www.hcah.mrg.com.bd/HCAHBD.png",

  telephone: "+8801619848555",

  priceRange: "$$",

  description:
    "Professional home nursing, physiotherapy, caregiver, elderly care and medical assistant services in Dhaka and Bangladesh.",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Niloy 11, Road 108, Gulshan 2",
    addressLocality: "Dhaka",
    addressRegion: "Dhaka",
    postalCode: "1212",
    addressCountry: "BD",
  },

  areaServed: {
    "@type": "Country",
    name: "Bangladesh",
  },

  sameAs: [
    "https://www.facebook.com/hcahbd"
  ]
};

   
  return (
    <div className="blog">
      <Helmet>

  {/* Primary SEO */}

  <title>
    Home Healthcare Services in Bangladesh | Nursing, Caregiver & Physiotherapy | HealthCare at Home
  </title>

  <meta
    name="description"
    content="HealthCare at Home Bangladesh provides professional home nursing, caregiver, physiotherapy, elderly care, medical assistant, ICU setup, medical equipment rental, emergency ambulance, and home healthcare services across Bangladesh."
  />

  <meta
    name="keywords"
    content="Home Healthcare Bangladesh, Home Nursing Service, Caregiver Service, Physiotherapy at Home, Elderly Care Bangladesh, Patient Attendant, Medical Assistant, ICU Setup at Home, Medical Equipment Rental, Emergency Ambulance"
  />

  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />

  <link
    rel="canonical"
    href="https://hcah.mrg.com.bd/"
  />



  {/* Open Graph */}

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:locale"
    content="en_US"
  />

  <meta
    property="og:site_name"
    content="HealthCare at Home Bangladesh"
  />

  <meta
    property="og:title"
    content="Home Healthcare Services in Bangladesh | HealthCare at Home"
  />

  <meta
    property="og:description"
    content="Professional home nursing, caregiver, physiotherapy, elderly care, ICU setup, medical equipment rental and ambulance services in Bangladesh."
  />

  <meta
    property="og:url"
    content="https://hcah.mrg.com.bd/"
  />

  <meta
    property="og:image"
    content="https://hcah.mrg.com.bd/HCAHBD.png"
  />



  {/* Twitter */}

  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="Home Healthcare Services in Bangladesh"
  />

  <meta
    name="twitter:description"
    content="Professional home nursing, caregiver, physiotherapy and elderly care services throughout Bangladesh."
  />

  <meta
    name="twitter:image"
    content="https://hcah.mrg.com.bd/HCAHBD.png"
  />



  {/* Schema */}

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schemaData),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(serviceListSchema),
    }}
  />

   
   

</Helmet>
      <Landing></Landing>
      <Service></Service>
      <Review></Review>

      <Success></Success>
      <Marque></Marque>
      <Team></Team>
      <YoutubeVideo></YoutubeVideo>
      <About></About>
      <Faq></Faq>
      <Contact></Contact>
      {/* <Map></Map> */}
    </div>
  );
};

export default Home;
