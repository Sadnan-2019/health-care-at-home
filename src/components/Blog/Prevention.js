import React from "react";
import "animate.css";
import heart1 from "../../assets/Risk.avif";
// import heart2 from "../../assets/sudden-cardiac-arrest.jpg";
// import heart3 from "../../assets/sudden-cardiac-arrest2.png";
const Prevention = () => {
  return (
    <div>
      <div className=" py-5">
        <p className="text-3xl font-bold    px-10">PREVENTION </p>
        <p className="text-xl      px-10">Healthcare at Home</p>
        <p className="text-xl      px-10">09 January 2023, 21:55</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  mx-10  items-center	 px-10 ">
          <div className=" ">
            <img className="py-5  px-10 rounded-md  	" src={heart1} alt="" />
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold ">How can I reduce my risk?</h2>
            {/* <p className="text-1xl font-bold">
              In more than half of the cases, sudden cardiac arrest happens
              without prior symptoms.
            </p> */}
            <p className="text-1xl font-bold">
              You can reduce your risk in many ways, such as: :
            </p>

            <div className="text-1xl font-bold  ">
              <li>
                Keeping your regular follow-up appointments with your healthcare
                provider.
              </li>
              <li>
                Making healthy lifestyle changes such as losing weight and
                eating a low-fat diet.
              </li>
              <li>Avoiding smoking and other tobacco products..</li>
              
              <li>
                Getting an implantable cardioverter defibrillator (ICD) if your
                healthcare provider recommends it.
              </li>
              <li>
                Having procedures or surgery your healthcare provider
                recommends, such as angioplasty or catheter ablation.
              </li>
              <li>
                Taking genetic testing if recommended by your physician to look
                for potential causes of sudden cardiac death.
              </li>
              <li>
                Teaching your family the importance of immediate care and
                learning CPR.
              </li>

              <p className="text-1xl font-bold mt-2 ">
                High school and college athletes should have a heart screening
                every two years. This should include an evaluation of their
                personal and family history (updated annually) and a physical
                exam. Their sports physician may recommend additional testing
                such as an electrocardiogram if there are any concerning
                findings on an initial evaluation.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Prevention;
