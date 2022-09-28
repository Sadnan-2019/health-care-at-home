import React from "react";

const About = () => {
  return (
    <div className="py-10">
      <div
        className="hero min-h-screen"
        data-aos="zoom-in-up"
        data-aos-offset="300"
        data-aos-delay="5000"
        data-aos-duration="4000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg?w=740&t=st=1664271330~exp=1664271930~hmac=294c95056bc771c4e724210f2ecfa9eb73be04f49006075520b2c7e387bd0282")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Why HCAH?</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
