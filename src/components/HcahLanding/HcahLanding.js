import React from "react";
import girl from "../../assets/landinggoogole.png";
import calender from "../../assets/calendar.svg";
import ux from "../../assets/ux-class.svg";
import congrat from "../../assets/congrat.svg";
import "./HcahLanding.css";
const HcahLanding = () => {
  return (
    <div>
      <div class="bg-gradient-to-r from-[#92468E] via-[#132C0A] to-[#38235D]  text-white blog">
        <div class="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
          {/* <!--Left Col--> */}
          <div class="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-justify mb-5 md:mb-0">
            <h1
              data-aos="fade-right"
              data-aos-once="true"
              class="my-4 text-2xl font-bold leading-tight text-darken"
            >
              <span class="text-gray-100 text-justify">
                Experience the transformative blend of professional expertise
                and heartfelt care as our dedicated medical assistants and
                caregivers bring top-tier healthcare services directly to your
                home, ensuring comfort, convenience, and a holistic approach to
                your well-being.
              </span>{" "}
            </h1>
            {/* <p
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              class="  text-2xl mb-8 font-bold leading-tight  "
            >
              Home, ensuring comfort, convenience, and a holistic approach to
              your well-being.
            </p> */}
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="700"
              class="w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
            >
              <a href="/" class="lg:mx-0 bg-gradient-to-r from-[#92468E] via-[#132C0A] to-[#38235D]  text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out  ">
                More Info
              </a>
              <div class="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                <a href="/" class="bg-gradient-to-r from-[#92468E] via-[#132C0A] to-[#38235D] w-14 h-14 rounded-full flex items-center justify-center">
                  <svg
                    class="w-5 h-5 ml-2"
                    viewBox="0 0 24 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                      fill="#23BDEE"
                    />
                  </svg>
                </a>
                <span class="cursor-pointer">Watch how we works</span>
              </div>
            </div>
          </div>
          {/* <!--Right Col--> */}
          <div class="w-full lg:w-6/12 mt-16 floating  relative" id="girl">
            <img
              data-aos="fade-down shadow-2xl "
              data-aos-once="true"
              data-aos-delay="300"
              class="w-10/12 mx-auto 2xl:-mb-20 "
              src={girl}
              alt=""
            />
            {/* <!-- calendar --> */}
            {/* <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              class="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4"
            >
              <img
                class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src={calender}
                alt=""
              />
            </div> */}
            {/* <!-- red --> */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              class="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating"
            >
              {/* <svg
                class="h-16 sm:h-24"
                viewBox="0 0 149 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <rect
                    x="40"
                    y="32"
                    width="69"
                    height="69"
                    rx="14"
                    fill="#F3627C"
                  />
                </g>
                <rect
                  x="51.35"
                  y="44.075"
                  width="47.3"
                  height="44.85"
                  rx="8"
                  fill="white"
                />
                <path
                  d="M74.5 54.425V78.575"
                  stroke="#F25471"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M65.875 58.7375L65.875 78.575"
                  stroke="#F25471"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M83.125 63.9125V78.575"
                  stroke="#F25471"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="149"
                    height="149"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="20" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg> */}
            </div>
            {/* <!-- ux class --> */}
            {/* <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              class="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating"
            >
              <img
                class="bg-white bg-opacity-80 rounded-lg h-20 sm:h-28"
                src={ux}
                alt=""
              />
            </div> */}
            {/* <!-- congrats --> */}
            {/* <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              class="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4"
            >
              <img
                class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src={congrat}
                alt=""
              />




            </div> */}
          </div>
          
        </div>
        <div
            className=" floating   "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="grid lg:grid-cols-6 gap-5 px-5 mx-5 items-center justify-items-center py-8 ">
              <div className="stat">
                <div
                  className="stat-figure  "
                  
                ></div>
                <div className="stat-value  " >
                  2,378+
                </div>
                <div
                  className="text-[18px] font-bold"
                  
                >
                  Successful recovery stories
                </div>

                {/* <div className="stat-desc text-1xl font-bold">
              21% more than last month
            </div> */}
              </div>
              <div className="stat">
                <div
                  className="stat-figure  "
                  
                ></div>
                <div className="stat-value  " >
                  2000+
                </div>
                <div
                  className="text-[18px] font-bold"
                  
                >
                  HealthCare related man power in our platform
                </div>

                
              </div>

            

              <div className="stat">
                <div
                  className="stat-figure  "
                  
                ></div>
                <div className="stat-value  " >
                  3000+
                </div>
                <div
                  className="text-[18px] font-bold"
                  
                >
                  Medical assistant
                </div>
              </div>
              <div className="stat">
                <div
                  className="stat-figure  "
                  
                ></div>
                <div className="stat-value  " >
                  150+
                </div>
                <div
                  className="text-[18px] font-bold"
                  
                >
                  Physiotherapists
                </div>
              </div>
              <div className="stat">
                <div
                  className="stat-figure  "
                
                ></div>
                <div className="stat-value  "  >
                  200+
                </div>
                <div
                  className="text-[18px] font-bold"
                 
                >
                  Nurses
                </div>
              </div>
              <div className="stat">
                <div
                  className="stat-figure  "
                  // 
                ></div>
                <div className="stat-value  "  >
                  250+
                </div>
                <div
                  className="text-[18px] font-bold"
                  // 
                >
                  Caregivers
                </div>
              </div>
            </div>
          </div>
        <div class="text-white -mt-14 sm:-mt-24 lg:-mt-26 z-40 relative">
          <svg
            class="xl:h-40 xl:w-full"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              fill="currentColor"
            ></path>
          </svg>
          <div class="bg-white w-full h-20 -mt-px"></div>
        </div>
        
      
      </div>
    </div>
  );
};

export default HcahLanding;
