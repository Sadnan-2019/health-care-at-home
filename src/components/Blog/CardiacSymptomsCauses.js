import React from "react";
import "animate.css";
import heart1 from "../../assets/heart1.jpg";
import heart2 from "../../assets/sudden-cardiac-arrest.jpg";
import heart3 from "../../assets/sudden-cardiac-arrest2.png";

const CardiacSymptomsCauses = () => {
  return (
    <div>
      <div className=" py-5">
        <p className="text-3xl font-bold    px-10">What are the symptoms? </p>
        <p className="text-xl      px-10">Healthcare at Home</p>
        <p className="text-xl      px-10">09 January 2023, 21:55</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  mx-10  items-center	 px-10 ">
          <div className=" ">
            <img className="py-5  px-10 rounded-md  	" src={heart1} alt="" />
          </div>
          <div className="py-10 bg-gradient-to-r from-[#486038] to-[#38235D]   text-white p-6 rounded-lg shadow-lg   m-4">
            <h2 className="text-3xl font-bold ">What are the symptoms?</h2>
            <p className="text-1xl font-bold">
              In more than half of the cases, sudden cardiac arrest happens
              without prior symptoms.
            </p>
            <p className="text-1xl font-bold">
              Sudden cardiac arrest symptoms may include:
            </p>
            <div className="text-1xl font-bold  ">
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
            </div>
          </div>
        </div>
        <div className="  grid grid-cols-1 lg:grid-cols-2 gap-10 mx-10   items-center   px-10  ">
          <div className="py-10 bg-gradient-to-r from-[#486038] to-[#38235D]   text-white p-6 rounded-lg shadow-lg   m-4">
            <h2 className="text-3xl font-bold ">
              What causes a sudden cardiac arrest?
            </h2>
            <p className="text-1xl font-bold">
              Abnormal heart rhythms called arrhythmias cause most sudden
              cardiac arrests. The most common life-threatening arrhythmia is
              ventricular fibrillation. This is an erratic, disorganized firing
              of impulses from your heart’s ventricles (lower chambers). When
              this happens, your heart is unable to pump blood. Without
              treatment, you can die within minutes.
            </p>
            <p className="text-1xl font-bold">
              Other sudden cardiac arrest causes include:
            </p>
            <div className="text-1xl font-bold  ">
              <li>Coronary heart disease.</li>
              <li>Congenital (since birth) heart conditions.</li>

              <li>Congenital (since birth) heart conditions.</li>
              <li>Extreme physical activity or blood loss.</li>
            </div>
          </div>
          <div className=" ">
            <img className="py-5  px-10 rounded-xl  	" src={heart2} alt="" />
          </div>
        </div>
        <div className="  grid grid-cols-1 lg:grid-cols-3    items-center     ">

        
          <div className="py-10 bg-gradient-to-r from-[#486038] to-[#38235D]   text-white p-6 rounded-lg shadow-lg   m-4">
            <h2 className="text-3xl font-bold ">
              What is the most common cause of sudden cardiac death?
            </h2>
            <p className="text-1xl font-bold mt-2">
              Coronary artery disease causes most cases (80%) of sudden cardiac
              death. In people who are younger, congenital (since birth) heart
              defects or genetic abnormalities in their heart’s electrical
              system are often the cause. In people age 35 and older, the cause
              is more often related to coronary artery disease.
            </p>
            <p className="text-1xl font-bold">
              Other sudden cardiac death causes include cardiomyopathy from: :
            </p>
            <div className="text-1xl font-bold  ">
              <li>Alcohol use disorder.</li>
              <li>Obesity.</li>

              <li>
                Genetic disorders of your heart muscle, including hypertrophic
                cardiomyopathy and arrhythmogenic cardiomyopathy.
              </li>
             
           
            </div>
          </div>






          <div className=" ">
            <img className="py-5  px-10 rounded-xl  	" src={heart3} alt="" />
          </div>
          <div className="py-10 bg-gradient-to-r from-[#486038] to-[#38235D]   text-white p-6 rounded-lg shadow-lg   m-4">
          <p className="mt-2">
                Sudden cardiac death in athletes is rare (about 1 in 100,000 to
                one in 300,000 athletes). Most professional athletic programs
                will screen their prospective athletes for the most common
                causes of sudden cardiac death in that population, which in the
                United States is hypertrophic cardiomyopathy. It also happens
                more often in people AMAB.
              </p>
              <p className="mt-2">
              In people who are younger, most
                sudden cardiac death occurs while playing team sports. In
                athletes age 35 and older, it happens more often while running
                or jogging. About 1 in 15,000 joggers and 1 in 50,000 marathon
                runners have sudden cardiac death.
              </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default CardiacSymptomsCauses;
