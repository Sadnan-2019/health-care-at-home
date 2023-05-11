import React from "react";
import managment from "../../assets/managmentcardiac.jpg";
const HypermanagementTreatment = () => {
  return (
    <div>
      <div className=" py-5 blog">
        <p className="text-3xl font-bold    px-10">MANAGEMENT AND TREATMENT</p>
        <p className="text-xl      px-10">Healthcare at Home</p>
        <p className="text-xl      px-10">11 May 2023, 21:55</p>
        <div className="     ">
          <div className=" flex flex-col lg:flex-row bg-gradient-to-r from-[#486038] to-[#38235D]   text-white     lg:gap-8  lg:mx-10  items-center	   ">
           <div>
           <img
              className="py-5  px-10  w-11/12  shadow-lg 	"
              src={managment}
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
                <li>Eating a healthy, low-salt diet</li>
                <li>Losing weight</li>
                <li>Being physically active</li>
                <li>Quitting tobacco.</li>
                <li>Eating a healthy, low-salt diet</li>
                <li>
                  ACE inhibitors including enalapril and lisinopril relax blood
                  vessels and prevent kidney damage.{" "}
                </li>
                <li>
                  Angiotensin-2 receptor blockers (ARBs) including losartan and
                  telmisartan relax blood vessels and prevent kidney damage.
                </li>
                <li>
                  Calcium channel blockers including amlodipine and felodipine
                  relax blood vessels.
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

export default HypermanagementTreatment;
