import React from "react";
import Slider from "react-slick";

import { AiFillStar } from "react-icons/ai";
import Reviewcard from "./Reviewcard";

const Review = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 " style={{ backgroundColor: "#453364" }}>
      <div className=" md:mx-16 lg:mx-24 mx-8 py-12">
        <h2 className="text-3xl text-center   font-bold poppins-b sm:text-4xl text-white">
          Check Our Recent Reviews!
        </h2>
      </div>

      <div className=" px-5  md:px-10  ">
        <div className="mx-12 ">
          <div className="flex items-center   justify-between mb-5" >
            <p
              className="text-white text-1xl lg:text-3xl font-bold poppins-b 	"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="4000"
            >
              Hear from the Healed
            </p>

            <p className="text-white text-sm lg:text-2xl   font-bold poppins-b	" data-aos="fade-left"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="4000">
              Overall rating{" "}
            </p>
          </div>

          <div className="flex items-center   justify-between mb-8	">
            <p className="text-white text-1xl lg:text-3xl font-bold poppins-b	" data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine">
              Happy patients share their kind words and experiences.
            </p>

            <div className="flex items-center gap-2 " data-aos="fade-left"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="4000">
              <p className="text-white text-sm lg:text-2xl font-bold	">4.8 </p>
              <AiFillStar className="text-white" />
              <AiFillStar className="text-white" />
              <AiFillStar className="text-white" />
              <AiFillStar className="text-white" />
              <AiFillStar className="text-white" />
            </div>
          </div>

          
        </div>
        <Slider {...settings}>
          <Reviewcard />
          <Reviewcard />
          <Reviewcard />
          <Reviewcard />
          <Reviewcard />
        </Slider>
      </div>
    </div>
  );
};

export default Review;
