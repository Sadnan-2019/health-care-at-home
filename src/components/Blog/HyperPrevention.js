import React from "react";
import "animate.css";
import heart1 from "../../assets/Prevensionhyper.PNG";
import "./HypertensionSyemtoms.css";
const HyperPrevention = () => {
  return (
    <div>
      <div className=" py-5 blog">
        <p className="text-3xl font-bold    px-10">Prevention</p>
        <p className="text-xl      px-10">Healthcare at Home</p>
        <p className="text-xl      px-10">11 May 2023, 21:55</p>
        <div className="     ">
          <div className="symtoms flex flex-col lg:flex-row bg-gradient-to-r from-[#486038] to-[#38235D]   text-white     lg:gap-10  lg:mx-10  items-center	   ">
            <div>
              <img
                className="py-5  px-10    shadow-lg 	"
                src={heart1}
                alt=""
                style={{ borderRadius: "80px" }}
              />
            </div>
            <div
              className="text-xl    text-white
            p-6 rounded-lg shadow-lg   m-4
            "
            >
              <div>
                <li>Eat more vegetables and fruits</li>
                <li>Sit less.</li>
                <li>
                  Be more physically active, which can include walking, running,
                  swimming, dancing or activities that build strength, like
                  lifting weights.
                </li>
                <li>
                  Get at least 150 minutes per week of moderate-intensity
                  aerobic activity or 75 minutes per week of vigorous aerobic
                  activity.
                </li>
                <li>Do strength building exercises 2 or more days each week.</li>
                <li>
                Lose weight if you’re overweight or obese
                </li>
                <li>
                Take medicines as prescribed by your health care professional.
                </li>
                <li>
                Keep appointments with your health care professional.
                </li>
                <li>
                  Diuretics including hydrochlorothiazide and chlorthalidone
                  eliminate extra water from the body, lowering blood pressure.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HyperPrevention;
