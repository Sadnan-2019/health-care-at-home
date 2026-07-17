import React from "react";
import Slider from "react-slick";
import review5 from "../../assets/review/review5.jpg";
import review6 from "../../assets/review/review6.jpg";
import review1 from "../../assets/review/review1.jpg";
import review2 from "../../assets/review/review2.jpg";
import review3 from "../../assets/review/review3.jpg";
import {
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaPhoneVolume,
} from "react-icons/fa";

import { AiFillStar } from "react-icons/ai";
// import Reviewcard from "./Reviewcard";
import "../../../src/components/Blog/Blog.css";
const Review = () => {
  const patientReviews = [
    {
      id: 1,
      name: "Zariif Akbar",
      location: "Gulshan, Dhaka",
      service: "Caregiver Service",
      rating: 5,
      verified: true,
      image: review1,
      review:
        "The caregiver was compassionate, punctual and well-trained. My father received excellent elderly care after his stroke, and the support gave our family complete peace of mind.",
    },
    {
      id: 2,
      name: "Ryhan Ahmed ",
      location: "Banani, Dhaka",
      service: "Home Nursing",
      rating: 5,
      verified: true,
      image: review2,
      review:
        "The home nursing service was outstanding. The nurse monitored medication, vital signs and wound care professionally. I highly recommend Healthcare At Home Bangladesh.",
    },
    {
      id: 3,
      name: "Abdul Karim",
      location: "Dhanmondi, Dhaka",
      service: "Physiotherapy at Home",
      rating: 5,
      verified: true,
      image: review3,
      review:
        "The physiotherapist helped me recover after knee replacement surgery. Every session was professional and I regained confidence walking again.",
    },
    // {
    //   id: 4,
    //   name: "Farzana Rahman",
    //   location: "Uttara, Dhaka",
    //   service: "Doctor Home Visit",
    //   rating: 5,
    //   verified: true,
    //   // image: review3,
    //   review:
    //     "Booking a doctor home visit was simple. The doctor arrived on time, explained everything clearly and saved us from travelling with an elderly patient.",
    // },
    {
      id: 5,
      name: "Mahmud Hasan",
      location: "Mirpur, Dhaka",
      service: "Elderly Care",
      rating: 5,
      verified: true,
      image: review5,
      review:
        "Our caregiver treated my mother with patience, respect and kindness. The elderly care service exceeded our expectations and made daily life much easier.",
    },
    {
      id: 6,
      name: "Sharmeen Akter",
      location: "Mohammadpur, Dhaka",
      service: "Post-Surgery Care",
      rating: 5,
      verified: true,
      image: review6,
      review:
        "After surgery we needed professional home care. The nursing team managed dressing changes, medication support and recovery guidance with great care.",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    swipe: true,
    swipeToSlide: true,
    draggable: true,
    touchMove: true,
    adaptiveHeight: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "25px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="  py-10 blog bg-[#453364]">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <span className="inline-block px-4 py-1 rounded-full   text-white text-sm font-semibold tracking-wide uppercase">
          Patient Testimonials
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Trusted by Families Across Bangladesh
        </h2>

        <p className="mt-5 text-base md:text-lg leading-8 text-gray-200 max-w-3xl mx-auto">
          Discover what patients and families say about our caregiver service,
          home nursing, physiotherapy, doctor home visit and elderly care. Their
          experiences reflect our commitment to compassionate, professional and
          reliable home healthcare.
        </p>

        <div className="w-24 h-1 bg-white rounded-full mx-auto mt-6"></div>
      </div>

      <div className=" px-10  md:px-10  ">
        <Slider {...settings} className="review-slider">
          {patientReviews.map((item) => (
            <div key={item.id} className="px-3 pb-3">
              <article className="h-full bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Card Body */}
                <div className="p-7 flex flex-col h-full">
                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <div className="text-yellow-400 text-lg tracking-wide">
                      {"★".repeat(item.rating)}
                    </div>

                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      Verified Patient
                    </span>
                  </div>

                  {/* Review */}
                  <p className="mt-6 text-gray-600 leading-7 flex-grow italic">
                    "{item.review}"
                  </p>

                  {/* Service */}
                  <div className="mt-6">
                    <span className="inline-flex items-center rounded-full bg-[#453364]/10 text-[#453364] text-sm font-semibold px-4 py-2">
                      {item.service}
                    </span>
                  </div>

                  {/* Patient */}
                  <div className="flex items-center mt-7 pt-5 border-t border-gray-100">
                    <img
                      src={item.image}
                      alt={`${item.name} received ${item.service} from HealthCare At Home Bangladesh`}
                      loading="lazy"
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#453364]/10"
                    />

                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-[#453364]">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500">{item.location}</p>

                      <p className="text-sm font-medium text-[#453364] mt-1">
                        {item.service}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
