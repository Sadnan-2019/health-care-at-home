import React from "react";
import "animate.css";
import hyper1 from "../../assets/HYPER4.png";
import hyper2 from "../../assets/hyper1.jpg";
// import heart3 from "../../assets/sudden-cardiac-arrest2.webp";
const HypertensionSymtoms = () => {
  return (
    <div>
      <div className=" py-5 blog">
        <p className="text-3xl font-bold    px-10">What are the symptoms? </p>
        <p className="text-xl      px-10">Healthcare at Home</p>
        <p className="text-xl      px-10">11 May 2023, 21:55</p>
        <div className=" grid grid-cols-1 lg:grid-cols-2   items-center justify-center px-5 ">
          <div className=" ">
            <img className="py-5  px-10   	w-4/5" src={hyper1} alt="" />
          </div>
          <div className="py-10 bg-gradient-to-r from-[#486038] to-[#38235D]   text-white p-6 rounded-lg shadow-lg   m-4">
            <h2 className="text-3xl font-bold ">What are the symptoms?</h2>

            <p className="text-xl  ">
              People with very high blood pressure (usually 180/120 or higher)
              can experience symptoms including:{" "}
            </p>
            <div className="text-xl  ">
              <li> Severe Headaches.</li>
              <li>Dizziness.</li>
              <li>Chest Pain.</li>
              <li>Dizziness.</li>
              <li>Nausea</li>
              <li>Vomiting</li>
              <li>Anxiety</li>
              <li>Confusion</li>
              <li>Nosebleeds</li>
              <li>Abnormal heart rhythm</li>
              <li>Buzzing in the ears</li>
              <li>Blurred vision or other vision changes .</li>

              <p className="text-xl mt-2 ">
                If you are experiencing any of these symptoms and high blood
                pressure, seek care immediately.
              </p>
            </div>
          </div>
        </div>
        <div className="   grid grid-cols-1 lg:grid-cols-2   items-center justify-center px-5  ">
          <div className="py-10 bg-gradient-to-r from-[#486038] to-[#38235D]   text-white p-6 rounded-lg shadow-lg   m-4">
            <h2 className="text-3xl font-bold ">
            What is the main cause of hypertension?
            </h2>

            <div className="text-xl   ">
              <li>
                {" "}
                Age. The risk of high blood pressure increases with age. 
              </li>
              <li>
                Race. High blood pressure is particularly common among Black
                people. 
              </li>

              <li>Family history. </li>
              <li>Obesity or being overweight. </li>
              <li>Lack of exercise. </li>
              <li>Tobacco use or vaping.  </li>
              <li>Too much salt. </li>
              <li>Low potassium levels.</li>
            </div>
          </div>
          <div className=" ">
          <img className="py-5  px-10 rounded-md  	" src={hyper2} alt="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HypertensionSymtoms;
