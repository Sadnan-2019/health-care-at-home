import React from 'react';
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
        <div>
           <Slider {...settings}>
           <div className="shadow-md hover:shadow-lg cursor-pointer rounded-md lg:max-w-[360px] md:max-w-xs p-5 bg-white">
      <div className="grid grid-cols-12">
        <img
          className="col-span-3 w-14 rounded-full"
          src="https://scontent.fdac120-1.fna.fbcdn.net/v/t31.18172-1/14856032_1774871509457707_293672197382151927_o.jpg?stp=dst-jpg_p160x160&_nc_cat=111&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=1xW9MZr-7oYAX9InJwz&_nc_oc=AQl_JslOtfyATQrAqQwFjw-VqbyFfs1LBLHwJUxxvt_iFEV030SSF44fp7FIg8bPfYY&_nc_ht=scontent.fdac120-1.fna&oh=00_AT-Mb5iWU2RAH1G2VgYvCfzE0uAGwwmrsb9Y8RzBVLJ9hQ&oe=6354C5D8"
          alt="user img"
        />
        <div className="col-span-9">
          <h2 className="text-lg poppins-b font-bold">Sadnan</h2>
          <p className="font-semibold">Developer</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="poppins-r">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          accusantium cumque tenetur ratione ea nobis dolore voluptas! Vel,
          ipsam nisi?
        </p>
        <div className="flex justify-start text-lg gap-1 mt-4 text-blue-800">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
    </div>
          </Slider>
        </div>
    );
};

export default Review;