import React from "react";
import Asistantlanding from "./Asistantlanding";
import Asistentabout from "./Asistentabout";
import Recoveryassistant from "./Recoveryassistant";
import Review from "../Review/Review";
import Success from "../Success/Success";
import Teamassistant from "./Teamassistant";
import Marque from "../Marque/Marque";
import { Helmet } from "react-helmet-async";

const Medicalassistant = () => {
  return (
    <div>
      <Helmet>
  {/* Primary SEO */}
  <title>
    Medical Assistant at Home in Dhaka | Healthcare at Home Bangladesh
  </title>

  <meta
    name="description"
    content="Get professional medical assistant care at home in Dhaka. Our trained medical assistants provide vital monitoring, nursing care, wound dressing, catheter care, oxygen support, medication reminders, stroke care, and post-surgical support."
  />

  <meta
    name="keywords"
    content="medical assistant at home in Dhaka, medical assistant home service, medical assistant care at home, medical assistant Dhaka, home medical assistant, home healthcare Dhaka, nursing care at home, elderly care Dhaka, stroke care at home, post surgical care, wound care at home, catheter care, oxygen support at home, healthcare at home Bangladesh"
  />

  <meta name="robots" content="index, follow" />

  <meta
    name="author"
    content="Healthcare at Home Bangladesh"
  />

  <meta
    name="theme-color"
    content="#453364"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://hcah.mrg.com.bd/medical-assistant"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />

  <meta
    property="og:site_name"
    content="Healthcare at Home Bangladesh"
  />

  <meta
    property="og:locale"
    content="en_US"
  />

  <meta
    property="og:url"
    content="https://hcah.mrg.com.bd/medical-assistant"
  />

  <meta
    property="og:title"
    content="Medical Assistant at Home in Dhaka | Healthcare at Home Bangladesh"
  />

  <meta
    property="og:description"
    content="Get professional medical assistant care at home in Dhaka, including vital monitoring, nursing care, wound dressing, catheter care, oxygen support, stroke care, and post-surgical support."
  />

  <meta
    property="og:image"
    content="https://hcah.mrg.com.bd/static/media/postsurgery.0cf128052c4a88893904.png"
  />

  <meta
    property="og:image:alt"
    content="Medical Assistant Care at Home in Dhaka"
  />

  {/* Twitter */}
  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="Medical Assistant at Home in Dhaka | Healthcare at Home Bangladesh"
  />

  <meta
    name="twitter:description"
    content="Book professional medical assistant care at home in Dhaka for vital monitoring, nursing care, wound dressing, catheter care, stroke care, and post-surgical support."
  />

  <meta
    name="twitter:image"
    content="https://hcah.mrg.com.bd/static/media/postsurgery.0cf128052c4a88893904.png"
  />
</Helmet>
      <Asistantlanding />
      <Asistentabout />
      <Recoveryassistant />
      <Review />
      <Success />
      <Marque></Marque>

      <Teamassistant />
    </div>
  );
};

export default Medicalassistant;
