import React from "react";
// import heart1 from "../../assets/heart1.jpg";
// import heart2 from "../../assets/sudden-cardiac-arrest.jpg";
import managment from "../../assets/managmentcardiac.jpg";
// import "./Blog.css";
// import(
//   "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;1,300&display=swap"
// );
const ManagementTreatment = () => {
  return (
    <div>
      <div className=" py-5 blog">
        <p className="text-3xl font-bold    px-10">MANAGEMENT AND TREATMENT</p>
        <p className="text-xl      px-10">Healthcare at Home</p>
        <p className="text-xl      px-10">09 January 2023, 21:55</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10  lg:mx-10  items-center	 lg:px-10 ">
          <div className=" ">
            <img className="py-5  px-10 rounded-md  	" src={managment} alt=""  style={{  borderRadius: "25px" }} />
            <p
              className="text-xl  bg-gradient-to-r from-[#486038] to-[#38235D]   text-white
            p-6 rounded-lg shadow-lg   m-4
            "
            >
              You can treat and reverse sudden cardiac arrest. However,
              emergency action has to start immediately. Survival can be as high
              as 90% if treatment starts within the first minutes after sudden
              cardiac arrest. The rate drops by about 10% each minute longer.
            </p>
          </div>
          <div className="py-10">
           
          
            <div className="p-6 rounded-lg shadow-lg   m-4    mt-2 bg-gradient-to-r from-[#486038] to-[#38235D]   text-white">
            <h2 className="  text-3xl font-bold ">
              How is sudden cardiac arrest treated?
            </h2>
            <p className="text-xl">
              If you see someone experiencing sudden cardiac arrest, do this:
              Start CPR, even if it’s just the hands-only version. CPR can save
              a life. It keeps blood and oxygen circulating until help arrives.
              Use an AED (Automated External Defibrillator) if there’s one
              available. CPR plus defibrillation rescues a person from sudden
              cardiac arrest. Using an AED is the best chance of helping the
              person survive. The shorter the time until defibrillation, the
              greater the chance of survival.
            </p>
            </div>
            <p className="p-6 rounded-lg shadow-lg   m-4 mt-2 text-xl    bg-gradient-to-r from-[#486038] to-[#38235D]   text-white">
              Once emergency personnel arrive, defibrillation can restart the
              person’s heart if they haven’t received a shock from an AED yet.
              Defibrillators shock your heart through paddles placed on your
              chest. Emergency personnel will also give intravenous medications
              called antiarrhythmics that work to restore the heart’s electrical
              rhythm. After successful defibrillation, most people need hospital
              care to recover from the effects of their sudden cardiac arrest
              and to treat and prevent future cardiac problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementTreatment;
