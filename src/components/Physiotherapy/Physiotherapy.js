import React from "react";
import Marque from "../Marque/Marque";
import Review from "../Review/Review";
import Success from "../Success/Success";
import Landingphsio from "./Landingphsio";
import Physioabout from "./Physioabout";
import Recovery from "./Recovery";
import Teamphysio from "./Teamphysio";
import { Helmet } from "react-helmet-async";
import WhyChoosePhysio from "./WhyChoosePhysio";
import AboutHomePhysiotherapy from "./AboutHomePhysiotherapy";
import TreatmentProcess from "./TreatmentProcess";
import Faq from "../Faq/Faq";

const Physiotherapy = () => {
  return (
    <div>
      <Helmet>
        {/* Primary SEO */}
        <title>
          Physiotherapy Home Service in Dhaka | Healthcare at Home Bangladesh
        </title>

        <meta
          name="description"
          content="Looking for professional physiotherapy home service in Dhaka? Our certified physiotherapists provide stroke rehabilitation, back pain treatment, post-surgery recovery, sports injury rehabilitation, arthritis care, and personalized home physiotherapy across Dhaka."
        />

        <meta
          name="keywords"
          content="physiotherapy home service in Dhaka, home physiotherapy, physiotherapist at home, physiotherapy treatment at home, home rehabilitation, stroke rehabilitation, back pain treatment, neck pain treatment, knee pain physiotherapy, frozen shoulder treatment, arthritis physiotherapy, sports injury rehabilitation, post surgery rehabilitation, elderly physiotherapy, pediatric physiotherapy, chest physiotherapy, pain management, rehabilitation services Dhaka, Healthcare at Home Bangladesh"
        />

        <meta name="robots" content="index,follow" />

        <meta name="author" content="Healthcare at Home Bangladesh" />

        <meta name="theme-color" content="#453364" />

        {/* Canonical */}

        <link
          rel="canonical"
          href="https://hcah.mrg.com.bd/service/physiotherapy-at-home"
        />

        {/* Open Graph */}

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="Healthcare at Home Bangladesh" />

        <meta property="og:locale" content="en_US" />

        <meta
          property="og:url"
          content="https://hcah.mrg.com.bd/static/media/spine.de0f0658e96a6e2c6908.jpg"
        />

        <meta
          property="og:title"
          content="Physiotherapy Home Service in Dhaka | Healthcare at Home Bangladesh"
        />

        <meta
          property="og:description"
          content="Receive expert home physiotherapy services in Dhaka from certified physiotherapists. We provide stroke rehabilitation, pain management, post-surgery recovery, sports injury treatment, and personalized physiotherapy at home."
        />

        <meta
          property="og:image"
          content="https://hcah.mrg.com.bd/static/media/biru.ed400ece376d48a5dd25.jpg"
        />

        <meta
          property="og:image:alt"
          content="Professional Physiotherapy Home Service in Dhaka"
        />

        {/* Twitter */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Physiotherapy Home Service in Dhaka | Healthcare at Home Bangladesh"
        />

        <meta
          name="twitter:description"
          content="Book professional physiotherapy home service in Dhaka. Expert physiotherapists for stroke rehabilitation, back pain, neck pain, arthritis, sports injuries, and post-surgery recovery."
        />

        <meta
          name="twitter:image"
          content="https://hcah.mrg.com.bd/static/media/servicephysio.0b3be423f07047da6e10.jpg"
        />
      </Helmet>
      <Landingphsio />

      <WhyChoosePhysio />

      <AboutHomePhysiotherapy />

      <Physioabout />

      <TreatmentProcess />

      <Recovery />

      <Success />

      <Review />

      <Teamphysio />

      <Marque />

      <Faq />
    </div>
  );
};

export default Physiotherapy;
