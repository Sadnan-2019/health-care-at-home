import React from "react";

const Faq = () => {
  return (
   <div >

 
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-items-center py-8">
      <div  className="">
      <h2
            className="text-3xl text-center   font-bold poppins-b sm:text-4xl py-5"
            style={{ color: "#453364" }}
          >
           Frequently Asked Questions
          </h2>
        <div
          tabIndex={0}
          className="collapse collapse-plus  bg-base-100 rounded-box mb-5 "
        >
          <div className="collapse-title text-xl font-medium">
            Focus me to see first content
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus  bg-base-100 rounded-box mb-5 "
        >
          <div className="collapse-title text-xl font-medium">
            Focus me to see first content
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus  bg-base-100 rounded-box mb-5 "
        >
          <div className="collapse-title text-xl font-medium">
            Focus me to see first content
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus  bg-base-100 rounded-box mb-5 "
        >
          <div className="collapse-title text-xl font-medium">
            Focus me to see first content
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        
      </div>
      <div>
      <img className="mask mask-circle w-96" src="https://placeimg.com/160/160/arch"  alt="" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
      </div>
    </div>
   </div>
  );
};

export default Faq;
