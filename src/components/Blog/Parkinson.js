import React from "react";
import johirul from "../../assets/shahjahirul.jpg";
const Parkinson = () => {
  return (
    <div>
      <div>
        <div>
          {/* <h2 className="font-bold text-3xl px-5 text-center py-5 m-4">
            Understanding Parkinson’s disease and ways it can be controlled
          </h2> */}
          <div className="md:py-20 py-10  lg:mx-16 mx-8     gap-5 grid grid-cols-1 lg:grid-cols-2   justify-items-center items-center	     	  ">
            <div className="   px-10     text-justify">
              <p className="max-w-lg mt-7 mb-7 md:text-[20px] lg:text-[27px] poppins-t  font-bold text-justify ">
                Understanding Parkinson’s disease and ways it can be controlled
              </p>
              <p className="font-bold  ">
                The human brain is an engineering marvel and the most complex
                biological structure in the universe. It is the body's control
                centre and part of the nervous system, including the spinal cord
                and a massive network of nerves and neurons. Thus, any damage or
                disorder of the brain can have multiple effects on individuals'
                bodies with ranging severities--impact on memory, sensation,
                personality, and life in general.
              </p>
              <p className="font-bold  py-2 ">
                There are numerous brain disorders, including tumours,
                Alzheimer's, Parkinson's, dementia, ASL (Amyotrophic Lateral
                Sclerosis), and many more. Parkinson's disease (PD) is the
                second most common age-related neurodegenerative disorder after
                Alzheimer's disease. PD causes nerve cells or neurons in the
                brain that controls movement to weaken or die. Healthy neurons
                produce a chemical called dopamine that the brain needs to
                regulate the body's movement. However, on the other hand,
                weakened neurons produce lower dopamine levels.
              </p>
            </div>
            <div className=" ">
              <img src={johirul} alt="" />
              <p className="font-bold  py-3">
                Mohammad Shah Jahirul Hoque Chowdhury
              </p>
            </div>
          </div>

          <div className=" font-bold text-justify   lg:mx-16 mx-8     grid grid-cols-1 lg:grid-cols-1   justify-items-center items-center">
            <p className="px-8">
              PD usually begins slowly and then progresses over time. Symptoms
              might include shaking or tremors, rigid muscles, difficulty
              walking, unsteady balance, poor posture, and slowing of body
              movements (bradykinesia). As PD started to progress with time,
              other additional symptoms might occur like slurred or soft speech,
              trouble chewing or swallowing, memory loss, constipation,
              difficulty sleeping, loss of bladder control, anxiety, depression,
              inability to regulate body temperature, sexual dysfunction,
              decreased ability to smell, restless legs, and muscle cramps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parkinson;
