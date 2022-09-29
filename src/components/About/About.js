import React from "react";

const About = () => {
  return (
    <div className="py-10">
      <div
        className="hero min-h-screen"
        // data-aos="zoom-in-up"
        // data-aos-offset="300"
        // data-aos-delay="5000"
        // data-aos-duration="4000"
        // // data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="false"
        style={{
          backgroundImage: `url(" https://i.ibb.co/MpB7WHX/Whats-App-Image-2022-09-29-at-4-02-29-PM.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className=" text-5xl font-bold text-white py-12 ">Why HCAH?</h1>

            <div className="text-white 	 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="card">
                <p className="text-xl font-bold mb-4">Monetary satisfaction </p>
                <p className="text-justify	text-[15px] ">
                  One of the most significant and favorable advantages of
                  healthcare services at home is that it costs much less than
                  keeping a patient in a healing center or hospital. Home based
                  healthcare experts give the full bouquet of services to
                  individuals who are released from the doctor’s facility yet
                  need certain medicinal care all through the length of their
                  recuperation. Apart from this, it also saves you the visiting
                  costs of the doctor and your time by seeking the same amount
                  of care at home itself.
                </p>
              </div>
              <div>
                <p className="text-xl font-bold mb-4">Nature of Care</p>
                <p className="text-justify text-[15px] ">
                  Another essential advantage of home care is that patients get
                  one-on-one consideration, something they would not get as an
                  occupant in a healing center. When patients are monitored on a
                  continuous basis and health care providers are able to access
                  real time data, diseases are treated before they get out of
                  hand.
                </p>
              </div>
              <div>
                <p className="text-xl font-bold mb-4">Improved Management of Drugs</p>
                <p className="text-justify  text-[15px] ">
                 The management of drugs/
                  medicines is a major task when it comes to taking proper care.
                  Most family members are not trained to provide the kind of
                  help patients need and having in-home professional help
                  relieves them of the need to do work for which they are not
                  prepared. Home health care professionals can ensure the right
                  medications are being taken at the right times to control
                  health conditions and prevent harmful drug reactions – Hence,
                  an in-house health expert is always a good option without any
                  risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
