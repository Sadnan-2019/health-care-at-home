import React from "react";
import { Helmet } from "react-helmet-async";

import "./Caregiver.css";

import Caregiverlanding from "./Caregiverlanding";
import Caregiverabout from "./Caregiverabout";
import WhoNeedsCaregiver from "./WhoNeedsCaregiver";
import Faq from "./Faq";
import Recoverycaregiver from "./Recoverycaregiver";
import Review from "../Review/Review";
import Success from "../Success/Success";
import Marque from "../Marque/Marque";
import Teamcaregiver from "./Teamcaregiver";

const Caregiver = () => {
  const pageTitle =
    "Home Caregiver Service in Bangladesh | Healthcare at Home";

  const pageDescription =
    " Professional home caregiver services in Dhaka. Trained caregivers for elderly care, stroke recovery, dementia, post-surgery and bedridden patients.";

  const pageUrl = "https://hcah.mrg.com.bd/caregiver";

  // Replace with your live image URL
  const imageUrl = "https://hcah.mrg.com.bd/static/media/service-caregiver.fc35f60eac916c309745.webp";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Healthcare at Home Bangladesh",
    url: "https://hcah.mrg.com.bd",
    image: imageUrl,
    logo: "https://hcah.mrg.com.bd/",
    telephone: "+880XXXXXXXXXX", // Replace with your phone number
    description: pageDescription,
    areaServed: {
      "@type": "City",
      name: "Dhaka",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Home Caregiver Service",
    provider: {
      "@type": "MedicalBusiness",
      name: "Healthcare at Home Bangladesh",
      url: "https://hcah.mrg.com.bd",
    },
    areaServed: {
      "@type": "City",
      name: "Dhaka",
    },
    description:
      "Professional caregiver services for elderly care, stroke recovery, post-surgery care, paralysis care, dementia care, Parkinson's disease, cancer care and home patient care.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://hcah.mrg.com.bd",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Caregiver Service",
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does caregiver service cost in Bangladesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost depends on the patient's condition, duration of care and level of support required. Contact Healthcare at Home Bangladesh for a personalized quotation.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide caregiver service in Dhaka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide professional caregiver services across Dhaka for elderly care, home patient care, stroke recovery and long-term caregiving.",
        },
      },
      {
        "@type": "Question",
        name: "Can caregivers stay overnight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide overnight caregiver services as well as 12-hour and 24-hour caregiver support depending on the patient's needs.",
        },
      },
      {
        "@type": "Question",
        name: "Can caregivers help stroke patients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our caregivers assist stroke patients with mobility, personal care, feeding, medication reminders and daily living activities while supporting rehabilitation.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <meta
          name="keywords"
          content="caregiver service in Bangladesh, caregiver service in Dhaka, home caregiver, elderly caregiver, elderly care at home, patient caregiver, home patient care, caregiver for stroke patient, stroke caregiver, paralysis caregiver, dementia caregiver, Alzheimer's caregiver, Parkinson's caregiver, cancer patient caregiver, bedridden patient care, post surgery caregiver, 12 hour caregiver, 24 hour caregiver, overnight caregiver, trained caregiver, professional caregiver, home nursing Bangladesh, healthcare at home Bangladesh"
        />

        <meta name="author" content="Healthcare at Home Bangladesh" />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta name="theme-color" content="#453364" />

        <meta name="geo.region" content="BD" />
        <meta name="geo.placename" content="Dhaka" />

        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Healthcare at Home Bangladesh" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div>
        <Caregiverlanding />
        <Caregiverabout />
        <WhoNeedsCaregiver />
        <Faq />
        <Recoverycaregiver />
        <Review />
        <Success />
        <Marque />
        <Teamcaregiver />
      </div>
    </>
  );
};

export default Caregiver;
