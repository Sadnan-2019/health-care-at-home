import React from "react";
import heart1 from "../../assets/progonosis.webp";
// import heart2 from "../../assets/sudden-cardiac-arrest.jpg";
// import heart3 from "../../assets/sudden-cardiac-arrest2.png";
import "animate.css";
// import "./Blog.css";
// import(
//   "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;1,300&display=swap"
// );


const Prognosis = () => {
  return (
    <div>
      <div className="blog py-5">
        <p className="text-3xl font-bold    px-10">OUTLOOK / PROGNOSIS </p>
        <p className="text-xl      px-10">Healthcare at Home</p>
        <p className="text-xl      px-10">09 January 2023, 21:55</p>
        <div className="grid grid-cols-1 lg:grid-cols-3    items-center	 px-10 ">
         
         
            
          <div className=" bg-gradient-to-r from-[#486038] to-[#38235D]   text-white p-6 rounded-lg shadow-lg   m-4">
          <h2 className="text-3xl font-bold ">
              What can I expect if I have sudden cardiac arrest?
            </h2>
          <p className="animate__animated animate__fadeInRight text-xl mt-5">
              Most people (about 90%) who have a sudden cardiac arrest outside
              of a hospital don’t survive. This is usually because they don’t
              get help in time. Most cases of sudden cardiac arrest that don’t
              happen in a hospital take place at home. Every minute that you
              don’t receive help is another minute your brain is without the
              oxygen it needs.
            </p>
          </div>
          <div className=" ">
            <img className="py-5  px-10 rounded-md  mt-5	" src={heart1} alt="" />
          </div>
            <div className=" bg-gradient-to-r from-[#486038] to-[#38235D]   text-white p-6 rounded-lg shadow-lg   m-4">
            <p className="animate__animated animate__backInUp text-xl  mt-5">
              People who survive sudden cardiac arrest have a varied outlook,
              depending on how fast they received medical treatment. They
              usually need help regaining skills they had before their sudden
              cardiac arrest. This happens because you can have brain damage if
              too many minutes pass without oxygen reaching your brain. Other
              organs may also be affected, including resulting in kidney
              failure, liver failure and long-term heart disease.
            </p>
            </div>
            {/* <div className="text-1xl font-bold  ">
              <li>Fainting (losing consciousness).</li>
              <li>Racing heartbeat.</li>
              <li>Chest pain.</li>
              <li>Dizziness.</li>
              <li>Lightheadedness.</li>
              <li>Shortness of breath.</li>
              <li>Feeling sick to your stomach and throwing up.</li>

              <p className="text-1xl font-bold mt-2 ">
                This means that a potentially dangerous heart rhythm problem has
                started, which is why these are also sudden cardiac death
                symptoms.
              </p>
            </div> */}
           
        </div>
      </div>
    </div>
  );
};

export default Prognosis;
