import React from "react";
import thumbnail from "../../../src/assets/thumnail.jpeg";
import "./YoutubeVideo.css";
const YoutubeVideo = () => {
  return (
    <div>
      <div className="       ">
        <div className="  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 lg:px-20 py-10">
      {/* Text Content */}
      <div className="flex flex-col justify-center">
        <h2
          style={{ lineHeight: "120%" }}
          className="animated slide-text text-[25px] lg:text-[40px] font-bold text-left"
        >
          Welcome to EDU SOLUTIONS
        </h2>

        <h1
          className="mb-5 text-lg lg:text-xl max-w-lg mt-7 font-bold md:text-[25px] poppins-t"
          style={{ lineHeight: "120%", color: "black" }}
        >
          We provide prospective students worldwide with high-quality and
          professional University Admission services. Our commitment to the
          highest level of integrity, transparency, and fair practice remains
          unwavering in our interactions with valued students and partners.
        </h1>
      </div>

      {/* Video Content */}
      <div data-aos="fade-up" className="relative mt-10 sm:mt-0">
         <div className="relative z-10">
          <iframe
            className="rounded-xl w-full sm:w-3/4 lg:w-4/5 h-64 sm:h-80 lg:h-96 floating"
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
