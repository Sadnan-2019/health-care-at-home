import React from "react";
import Slider from "react-slick";

import { AiFillStar } from "react-icons/ai";
import Reviewcard from "./Reviewcard";

const Review = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
    <div className="py-10">
      <div className=" md:mx-16 lg:mx-24 mx-8 py-12">
        <h2 className="text-3xl text-center   font-bold poppins-b sm:text-4xl" style={{color: "#453364" }}>
          Check Out Resent Reviews!
        </h2>
        <h1 className="  w-64 h-1 rounded-lg mt-2 mb-4 mx-auto" style={{backgroundColor: "#453364" }}></h1>
      </div>
      <div  className=" px-5 py-12 md:px-10 ">
        <Slider {...settings}>
          
        
       <Reviewcard/>
       <Reviewcard/>
       <Reviewcard/>
       <Reviewcard/>
       <Reviewcard/>
       
          
        </Slider>
      </div>
    </div>
  );
};

export default Review;
