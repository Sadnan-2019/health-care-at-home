import React from 'react';
import resume from "../../assets/service_icon/cv.png";
import friendly from "../../assets/service_icon/friends.png";
 
import hidden from "../../assets/service_icon/hidden.png";
import liveContent from "../../assets/service_icon/live-chat.png";
import premium from "../../assets/service_icon/premium.png";
import edit from "../../assets/service_icon/resume.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
// import Banner from "../../assets/

const Service = () => {
    return (
        <section className="">
      <div className="md:mx-16 lg:mx-24 mx-8 py-16 ">
        <div className="max-w-lg mr-auto text-left">
          <h2 className="text-3xl text-green-500 font-bold poppins-b sm:text-4xl">
           Our Services 
          </h2>
          <h1 className='bg-green-800 w-32 h-2 rounded-lg mt-2 mb-4'></h1>

          <p className="mt-4 text-gray-800 text-[17px] poppins-t">
            Resume Builder is lightning fast. There's no software to download.
            No multi-part sign-up form. No long-winded tutorials. Just a
            straightforward process.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <a className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer" 
          data-aos="fade-up"
          data-aos-duration="1000"
          >
            <img className="w-16" src={premium} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
            Physiotherapy

            </h3>

            <p className="mt-1 text-sm text-left text-gray-800 poppins-t">
              We offer both free and premium features. Want your resume to have
              that extra punch? Upgrade to Premium. On a budget? That's OK too -
              you can use our resume buider completely free of charge.
            </p>
          </a>
          <a className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="1000"
          >
            <img className="w-16" src={resume} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
        Nursing Care
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800">
              Whatever resume template you're looking for, we've got it! Whether
              it's a classic black-and-white template, or something a bit more
              outside the box, we have what you need!
            </p>
          </a>
          <a className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="1000"
          >
            <img className="w-16" src={hidden} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
            Medical Assistant
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800">
              With Novorésumé, you won’t spend hours working on your resume,
              just to be hit with a hidden paywall. Our resume builder will
              notify you if you’re using any of our premium features in advance.
            </p>
          </a>
          <a className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="1000"
          >
            <img className="w-16" src={friendly} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
            Physiotherapy
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800">
              Our resume templates are ATS-friendly. It means your resume won’t
              automatically be rejected because an ATS can’t read it.
            </p>
          </a>
          <a className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="1000"
          >
            <img className="w-16" src={liveContent} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
            Physiotherapy
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800">
              Our CV builder provides real-time feedback on your resume content,
              ensuring that your resume reaches its full potential!
            </p>
          </a>
          <a className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="1000"
          >
            <img className="w-16" src={edit} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
            Physiotherapy
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800">
              As you edit your resume with our builder, you’ll immediately see
              the changes applied to your document.
            </p>
          </a>
        </div>

         
      </div>
    </section>
    );
};

export default Service;