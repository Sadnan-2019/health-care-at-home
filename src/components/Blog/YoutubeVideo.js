import React from "react";
import thumbnail from "../../../src/assets/thumnail.jpeg";
import "./YoutubeVideo.css";
const YoutubeVideo = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="grid grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-2 lg:px-20">
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h2
          
                className="animated slide-text text-[25px] lg:text-[40px] font-bold text-left leading-[1.15]"
              >
                Welcome to HealthCare At Home Bangladesh
              </h2>

              <h1
                className="mb-5 text-lg lg:text-xl max-w-lg mt-7 font-bold md:text-[25px] poppins-t leading-[1.15]"
               
              >
                We provide prospective services throughout Bangladesh with
                high-quality, professional caregivers. Our commitment to the
                highest security, transparency, and fair practice remains
                unwavering in our valued caregivers and patients.
              </h1>
            </div>

            {/* Video Content */}
            <div data-aos="fade-up" className="relative mt-10 sm:mt-0">
              <div className="relative z-10">
                <iframe
                  className="w-full h-64 rounded-xl sm:w-3/4 lg:w-4/5 sm:h-80 lg:h-96 floating"
                  src="https://www.youtube.com/embed/51WGcEkKoJc"
                  title="MindMap l S1 EP2 l Dr. Zahiruddin Mahmud l Kotha Nahian l Health l Podcast l 2024 I HCAHBD"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideo;
