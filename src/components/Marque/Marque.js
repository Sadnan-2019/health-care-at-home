import React from "react";
import Marquee from "react-fast-marquee";
import popular from "../../assets/hospital/popular.png";
import universal from "../../assets/hospital/universal.png";
import labaidcardiac from "../../assets/hospital/labaidcardiac.png";
import labaidspeacial from "../../assets/hospital/labaidspeacial.png";
import labaidcanser from "../../assets/hospital/labaidcanser.png";
import greenlife from "../../assets/hospital/greenlife.png";
import anwarkhan from "../../assets/hospital/anwarkhan.png";
import evercare from "../../assets/hospital/evercare.png";
import united from "../../assets/hospital/united.png";
import ibnesina from "../../assets/hospital/ibnesina.png";
import bangladeshspeacial from "../../assets/hospital/bangladeshspeacial.png";
import impulse from "../../assets/hospital/impulse.png";
import shikdar from "../../assets/hospital/shikdar.png";
import samorita from "../../assets/hospital/samorita.png";
import asgorali from "../../assets/hospital/asgorali.png";
import prime from "../../assets/hospital/prime.png";

const Marque = () => {

const hospitals = [
  {
    id: 1,
    name: "Popular Diagnostic Centre",
    image: popular,
    alt: "Popular Diagnostic Centre logo",
  },
  {
    id: 2,
    name: "Universal Medical College Hospital",
    image: universal,
    alt: "Universal Medical College Hospital logo",
  },
  {
    id: 3,
    name: "Labaid Cardiac Hospital",
    image: labaidcardiac,
    alt: "Labaid Cardiac Hospital logo",
  },
  {
    id: 4,
    name: "Labaid Specialized Hospital",
    image: labaidspeacial,
    alt: "Labaid Specialized Hospital logo",
  },
  {
    id: 5,
    name: "Labaid Cancer Hospital",
    image: labaidcanser,
    alt: "Labaid Cancer Hospital logo",
  },
  {
    id: 6,
    name: "Green Life Hospital",
    image: greenlife,
    alt: "Green Life Hospital logo",
  },
  {
    id: 7,
    name: "Anwer Khan Modern Hospital",
    image: anwarkhan,
    alt: "Anwer Khan Modern Hospital logo",
  },
  {
    id: 8,
    name: "Evercare Hospital Dhaka",
    image: evercare,
    alt: "Evercare Hospital Dhaka logo",
  },
  {
    id: 9,
    name: "United Hospital Dhaka",
    image: united,
    alt: "United Hospital Dhaka logo",
  },
  {
    id: 10,
    name: "Ibn Sina Hospital",
    image: ibnesina,
    alt: "Ibn Sina Hospital logo",
  },
  {
    id: 11,
    name: "Bangladesh Specialized Hospital",
    image: bangladeshspeacial,
    alt: "Bangladesh Specialized Hospital logo",
  },
  {
    id: 12,
    name: "Impulse Hospital",
    image: impulse,
    alt: "Impulse Hospital logo",
  },
  {
    id: 13,
    name: "Shikder Medical College Hospital",
    image: shikdar,
    alt: "Shikder Medical College Hospital logo",
  },
  {
    id: 14,
    name: "Samorita Hospital",
    image: samorita,
    alt: "Samorita Hospital Limited logo",
  },
  {
    id: 15,
    name: "Asgar Ali Hospital",
    image: asgorali,
    alt: "Asgar Ali Hospital logo",
  },
  {
    id: 16,
    name: "Prime Hospital",
    image: prime,
    alt: "Prime Hospital logo",
  },
];



  return (
    <section
  className="py-16 lg:py-20 bg-white"
  aria-labelledby="trusted-hospitals"
>
  <div className="container mx-auto px-6 lg:px-12">

    {/* Heading */}

    <div
      className="max-w-4xl mx-auto text-center mb-12"
      data-aos="fade-up"
      data-aos-duration="1000"
    >

      <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#453364] text-white text-sm font-semibold tracking-wide uppercase">

        Trusted Continuity of Care

      </span>

      <h2
        id="trusted-hospitals"
        className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#453364] leading-tight"
      >
        Supporting Patients After Treatment at Leading Hospitals
      </h2>

      <p className="mt-5 text-gray-600 text-base md:text-lg leading-8 max-w-3xl mx-auto">

        Our experienced caregivers, nurses, physiotherapists and home healthcare professionals continue quality care for patients after hospital discharge from many leading hospitals across Bangladesh.

      </p>

    </div>

    {/* Hospitals */}

    <Marquee

      speed={45}
      gradient={true}
      gradientWidth={80}
      pauseOnHover={true}
      autoFill={true}

    >

      {hospitals.map((hospital) => (

        <div
          key={hospital.id}
          className="mx-5"
        >

          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-28 w-52 flex items-center justify-center p-6">

            <img
              src={hospital.image}
              alt={hospital.alt}
              loading="lazy"
              decoding="async"
              className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />

          </div>

        </div>

      ))}

    </Marquee>

  </div>
</section>
  );
};

export default Marque;
