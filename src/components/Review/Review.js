import React from "react";
import Slider from "react-slick";

import { AiFillStar } from "react-icons/ai";
import Reviewcard from "./Reviewcard";

const Review = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
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
          <div className="flex items-center   justify-between mb-5">
            <p
              className="text-white text-1xl lg:text-3xl font-bold poppins-b 	"
              // data-aos="fade-right"
              // data-aos-offset="100"
              // data-aos-easing="ease-in-sine"
              // data-aos-duration="4000"
            >
              Hear from the healed
            </p>

            <p
              className="text-white text-sm lg:text-2xl   font-bold poppins-b	"
              //  data-aos="fade-left"
              //   data-aos-offset="100"
              //   data-aos-easing="ease-in-sine"
              //   data-aos-duration="4000"
            >
              Overall rating
            </p>
          </div>

          <div className="flex items-center   justify-between mb-8	">
            <p
              className="text-white text-1xl lg:text-3xl font-bold poppins-b	"
              // data-aos="fade-right"
              //   data-aos-offset="100"
              //   data-aos-easing="ease-in-sine"
            >
              Happy patients share their kind words and experiences.
            </p>

            <div
              className="flex items-center gap-2 "
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="4000"
            >
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
          {/* <Reviewcard />
          <Reviewcard />
          <Reviewcard />
          <Reviewcard />
          <Reviewcard /> */}

          <div
            className="shadow-md hover:shadow-lg cursor-pointer rounded-md lg:max-w-[360px] md:max-w-xs p-5 h-92 bg-white"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="grid grid-cols-12">
              <img
                className="col-span-3 w-14 rounded-full"
                src="https://i.ibb.co/0G3KtxL/67765339-10156244818227341-9007235577279414272-n.jpg"
                alt="user img"
              />
              <div className="col-span-9">
                <h2 className="text-lg poppins-b font-bold">Ryan Ahmed</h2>
                {/* <p className="font-semibold">Patients</p> */}
              </div>
            </div>
            <div className="mt-4">
              <p className="poppins-r text-justify">
                We have tried several home care services, both independent and
                company managed, HealthCare at Home Bangladesh stood out to us
                as the most qualified and dependable. Many thanks to Dr. Mahmud
                for taking house calls and making a personal effort to ensure
                all our service needs are met from medical assistance to
                rehabilitative physical therapy, not to mention regular primary
                care consultation
              </p>
              <div
                className="flex justify-start text-lg gap-1 mt-4  "
                style={{ color: "#453364" }}
              >
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div
            className="shadow-md hover:shadow-lg cursor-pointer rounded-md lg:max-w-[360px] md:max-w-xs p-5 bg-white"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="grid grid-cols-12">
              <img
                className="col-span-3 w-14 rounded-full"
                src="https://i.ibb.co/KjkngXm/48363655-123584831995747-5640631604113047552-n.jpg"
                alt="user img"
              />
              <div className="col-span-9">
                <h2 className="text-lg poppins-b font-bold">Zareef Akbar</h2>
                {/* <p className="font-semibold">Patients</p> */}
              </div>
            </div>
            <div className="mt-4">
              <p className="poppins-r">
                Very professional and prompt service. Would highly recommend. A
                very practical way to get health care during these times of
                social paranoia.
              </p>
              <div
                className="flex justify-start text-lg gap-1 mt-4  "
                style={{ color: "#453364" }}
              >
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div
            className="shadow-md hover:shadow-lg cursor-pointer rounded-md lg:max-w-[360px] md:max-w-xs p-5 h-92 bg-white"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="grid grid-cols-12">
              <img
                className="col-span-3 w-14 rounded-full"
                src="https://i.ibb.co/ZdXv6Gq/276992917-5666764293351014-5477055171169912471-n.jpg"
                alt="user img"
              />
              <div className="col-span-9">
                <h2 className="text-lg poppins-b font-bold">Badruddin Hasan Saky</h2>
                {/* <p className="font-semibold">Patients</p> */}
              </div>
            </div>
            <div className="mt-4">
              <p className="poppins-r">
              An excellent healthcare at home provider with qualified and well trained medical personnel. You can put your trust here.
              </p>
              <div
                className="flex justify-start text-lg gap-1 mt-4  "
                style={{ color: "#453364" }}
              >
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div
            className="shadow-md hover:shadow-lg cursor-pointer rounded-md lg:max-w-[360px] md:max-w-xs p-5 bg-white"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="grid grid-cols-12">
              <img
                className="col-span-3 w-14 rounded-full"
                src="https://placeimg.com/192/192/people"
                alt="user img"
              />
              <div className="col-span-9">
                <h2 className="text-lg poppins-b font-bold">Sadnan</h2>
                <p className="font-semibold">Patients</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="poppins-r">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis accusantium cumque tenetur ratione ea nobis dolore
                voluptas! Vel, ipsam nisi?
              </p>
              <div
                className="flex justify-start text-lg gap-1 mt-4  "
                style={{ color: "#453364" }}
              >
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div
            className="shadow-md hover:shadow-lg cursor-pointer rounded-md lg:max-w-[360px] md:max-w-xs p-5 bg-white"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="grid grid-cols-12">
              <img
                className="col-span-3 w-14 rounded-full"
                src="https://placeimg.com/192/192/people"
                alt="user img"
              />
              <div className="col-span-9">
                <h2 className="text-lg poppins-b font-bold">Sadnan</h2>
                <p className="font-semibold">Patients</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="poppins-r">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis accusantium cumque tenetur ratione ea nobis dolore
                voluptas! Vel, ipsam nisi?
              </p>
              <div
                className="flex justify-start text-lg gap-1 mt-4  "
                style={{ color: "#453364" }}
              >
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
    </div>
  );
};

export default Review;
