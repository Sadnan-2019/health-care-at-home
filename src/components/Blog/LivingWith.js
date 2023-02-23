import React from "react";
import heart1 from "../../assets/heart1.jpg";
import "./Blog.css";
import(
  "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;1,300&display=swap"
);
const LivingWith = () => {
  return (
    <div>
      <div className="blog py-5">
        <p className="text-3xl font-bold    px-10">LIVING WITH </p>
        <p className="text-xl      px-10">Healthcare at Home</p>
        <p className="text-xl      px-10">09 January 2023, 21:55</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  mx-10  items-center	 px-10 ">
          <div className=" ">
            <img className="py-5  px-10 rounded-md  mt-5	" src={heart1} alt="" />
          </div>
          <div className="py-10">
           <div className="bg-gradient-to-r from-[#486038] to-[#38235D]   text-white p-6 rounded-lg shadow-lg   m-4">
           <h2 className="text-3xl font-bold ">
              How do I take care of myself?
            </h2>
            <p className="animate__animated animate__fadeInRight text-xl   mt-5 ">
              Surviving sudden cardiac arrest is the start of a long recovery
              for many. Depending on how long your brain was without oxygen,
              you’ll likely have brain damage. This means you may not be able to
              do all the things you used to do every day. Also, you may have
              some mental health challenges like stress and depression.
            </p>
           </div>
            
            <p className="animate__animated animate__backInUp text-xl mt-5 bg-gradient-to-r from-[#486038] to-[#38235D]   text-white p-6 rounded-lg shadow-lg   m-4">
              If a rehabilitation program is available, you can use it to regain
              your abilities. This will take time and patience. Researchers have
              found that sudden cardiac arrest survivors’ quality of life got
              better after six months.
            </p>
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
    </div>
  );
};

export default LivingWith;
