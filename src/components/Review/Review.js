import React from "react";
import Slider from "react-slick";

import { AiFillStar } from "react-icons/ai";

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
          slidesToShow: 3,
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
      <div  className="py-12">
        <Slider {...settings}>
          
        
        <div className="card shadow-md hover:shadow-lg cursor-pointer rounded-md  lg:max-w-[360px] md:max-w-xs     mx-10  ">
              <div className="flex gap-3 items-center">
                <div className="avatar">
                  <div className="w-24 m-5 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <p className="text-2xl font-bold" style={{color: "#453364" }}>Sadnan</p>
              </div>
              <p className="text-md m-3">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500.
              </p>
             <div className="flex justify-start text-lg gap-1 mt-4 ml-3 p-2" style={{color: "#453364" }}>
             <AiFillStar/> 
              <AiFillStar/> 
              <AiFillStar/> 
              <AiFillStar/> 
              <AiFillStar/> 
             </div>
            </div>
        <div className="card shadow-md hover:shadow-lg cursor-pointer rounded-md lg:max-w-[360px] md:max-w-xs     mx-10 ">
              <div className="flex gap-3 items-center">
                <div className="avatar">
                  <div className="w-24 m-5 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <p className="text-2xl font-bold" style={{color: "#453364" }}>Sadnan</p>
              </div>
              <p className="text-md m-3">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500.
              </p>
             <div className="flex justify-start text-lg gap-1 mt-4 ml-3 p-2" style={{color: "#453364" }}>
             <AiFillStar/> 
              <AiFillStar/> 
              <AiFillStar/> 
              <AiFillStar/> 
              <AiFillStar/> 
             </div>
            </div>
        <div className="card shadow-md hover:shadow-lg cursor-pointer rounded-md lg:max-w-[360px] md:max-w-xs     mx-10  ">
              <div className="flex gap-3 items-center">
                <div className="avatar">
                  <div className="w-24 m-5 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <p className="text-2xl font-bold" style={{color: "#453364" }}>Sadnan</p>
              </div>
              <p className="text-md m-3">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500.
              </p>
             <div className="flex justify-start text-lg gap-1 mt-4 ml-3 p-2" style={{color: "#453364" }}>
             <AiFillStar/> 
              <AiFillStar/> 
              <AiFillStar/> 
              <AiFillStar/> 
              <AiFillStar/> 
             </div>
            </div>
        <div className="card shadow-md hover:shadow-lg cursor-pointer rounded-md lg:max-w-[360px] md:max-w-xs     mx-10  ">
              <div className="flex gap-3 items-center">
                <div className="avatar">
                  <div className="w-24 m-5 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <p className="text-2xl font-bold" style={{color: "#453364" }}>Sadnan</p>
              </div>
              <p className="text-md m-3">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500.
              </p>
             <div className="flex justify-start text-lg gap-1 mt-4 ml-3 p-2" style={{color: "#453364" }}>
             <AiFillStar/> 
              <AiFillStar/> 
              <AiFillStar/> 
              <AiFillStar/> 
              <AiFillStar/> 
             </div>
            </div>
        
          
        </Slider>
      </div>
    </div>
  );
};

export default Review;
