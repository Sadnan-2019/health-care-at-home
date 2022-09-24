
import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Banner from "../../assets/hero-banner.png";

const Landing = () => {
    return (
        <section className="">
      <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className="max-w-xl text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
          <div className="flex items-center gap-2 bg-gray-100 w-fit px-3 rounded-full py-2 border-[1px] border-gray-200 mb-5">
            <p className=" px-2 py-[2px] text-white rounded-full bg-green-500">
              $
            </p>
            <p>Discover the easiest way to get our service!</p>
          </div>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="md:text-[43px] font-bold text-[26px] text-left poppins-b text-green-500"
            style={{ lineHeight: "120%" }}
          >
            Health Care At Home Bangladesh
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="max-w-lg mt-7 text-left md:text-[17px] poppins-t text-gray-600 "
          >
            First ever one stop healthcare solution at your home in bangladesh.
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex  gap-4 mt-10 text-center"
          >
            <Link
              className="inline-flex items-center px-8 py-3 bg-primary border border-primary rounded hover:bg-transparent active:text-primary focus:outline-none focus:ring transition ease-in-out delay-150  text-white hover:text-black"
              to="/resume-builder/how-to-start"
            >
              <span className="text-sm font-medium"> Get Started </span>
              <BsArrowRight className="text-lg ml-2" />
            </Link>

            <Link
              className="inline-flex items-center px-8 py-3  border border-primary rounded bg-transparent active:text-primary focus:outline-none focus:ring transition ease-in-out delay-150  text-black hover:text-white hover:bg-primary"
              to="/"
            >
              <span className="text-sm font-medium"> Read a blog </span>
            </Link>
          </div>
        </div>
        <div className="lg:order-2 order-1  lg:-mt-2">
          <img className="lg:w-[100%] w-[90%] mx-auto" src={Banner} alt="" />
        </div>
      </div>
    </section>
    );
};

export default Landing;