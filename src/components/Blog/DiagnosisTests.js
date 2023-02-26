import React from "react";
// import heart3 from "../../assets/sudden-cardiac-arrest2.png";
import "./DiagnosisTests.css";
// import "./Blog.css";
// import ('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;1,300&display=swap');
const DiagnosisTests = () => {
  return (
    <div className="blog">
         <p className="text-3xl font-bold  py-5  px-10">DIAGNOSIS AND TESTS? </p>
        <p className="text-xl      px-10 ">Healthcare at Home</p>
        <p className="text-xl      px-10 mb-4">09 January 2023, 21:55</p>
      <div className="py-3 text-white diagnosis grid grid-cols-1 lg:grid-cols-2 gap-10 mx-10 justify-center  items-center   px-10  ">
        <div className=" py-10">
          <h2 className="text-3xl font-bold ">
            What tests will be done to diagnose sudden cardiac arrest?
          </h2>

          <p className="text-xl mt-2">
            To prevent future episodes of sudden cardiac arrest, your healthcare
            provider will want to do tests to figure out what caused your
            cardiac event. Tests may include:
            {/* 

 */}
          </p>
          <div className="text-xl ">
            <li> Electrocardiogram (ECG or EKG).</li>
            <li>Heart MRI.</li>
            <li>
              Blood tests to check electrolytes involved in your heart’s
              electrical conduction.
            </li>
            <li>Echocardiogram.</li>
            <li>Cardiac catheterization.</li>
            <li>Electrophysiology study. </li>

           
          </div>
        </div>
        <div className="py-10">
          <h2 className="text-3xl font-bold ">
            How is sudden cardiac arrest diagnosed?
          </h2>

          <p className="text-xl mt-2">
            Your healthcare provider can diagnose a sudden cardiac arrest if
            you:
          </p>
          <div className="text-xl ">
            <li>Aren’t breathing..</li>
            <li>Have no pulse..</li>
            <li>Aren’t conscious.</li>

            <p className="mt-2">
              Many cases of sudden cardiac arrest are diagnosed post-mortem, as
              this condition is often fatal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisTests;
