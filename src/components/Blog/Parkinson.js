import React from "react";
import johirul from "../../assets/shahjahirul.jpg";
import "./Blog.css";
import ('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;1,300&display=swap');
const Parkinson = () => {
  return (
    <div>
      <div>
        <div className="blog">
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
              <img src={johirul} className="mb-3" alt="" />
              <p className="font-bold   ">
                Mohammad Shah Jahirul Hoque Chowdhury
              </p>
            </div>
          </div>

          <div className="py-2 font-bold text-justify   lg:mx-16 mx-8     grid grid-cols-1 lg:grid-cols-1   justify-items-center items-center">
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
          <div className="py-2 font-bold text-justify   lg:mx-16 mx-8     grid grid-cols-1 lg:grid-cols-1   justify-items-center items-center">
            <p className="px-8">
              According to Parkinson's Foundation, more than 10 million people
              globally have PD. According to World Health Rankings and World
              Health Organization (WHO) data published in 2018, 1,363 people
              have died in Bangladesh because of PD in 2018.
            </p>
          </div>
          <div className="py-2 font-bold text-justify   lg:mx-16 mx-8     grid grid-cols-1 lg:grid-cols-1   justify-items-center items-center">
            <p className="px-8">
              Men are 1.5 times more likely to be diagnosed with PD than women,
              according to Parkinson's Foundation. The disease's risk increases
              with age, but some are diagnosed at early years, like before the
              age of 50. Most of the time, PD is not hereditary, but some people
              can inherit it due to altered genes. According to Harvard Health
              Publishing, numerous studies have shown that individuals can have
              PD if they are exposed to chemicals used in pesticides,
              herbicides, and organic pollutants. Repeated blows on the head can
              also increase the risk of developing PD.
            </p>
          </div>
          <div className="py-2 font-bold text-justify   lg:mx-16 mx-8     grid grid-cols-1 lg:grid-cols-1   justify-items-center items-center">
            <p className="px-8">
              Unfortunately, scientists and researchers have been unable to find
              the cause of PD yet, and there is no permanent cure for it. The
              disease itself is not fatal, but it can create complications
              within the body and lifestyle, which later can lead to death.
            </p>
          </div>
          <div className="py-2 font-bold text-justify   lg:mx-16 mx-8     grid grid-cols-1 lg:grid-cols-1   justify-items-center items-center">
            <p className="px-8">
              Although there is no permanent cure for the disease, but there are
              ways it can be controlled to improve the complications and the
              quality of life - deep brain stimulation (DBS). DBS is a surgery
              that can effectively manage tremor, rigidity, and bradykinesia.
              The surgery was first approved in 1997 to treat PD tremor. It can
              also work as a therapeutic option for patients with recent or
              longer-standing motor complications. DBS can improve the quality
              of life and activities of daily living for PD patients, reduce
              medication, and improve drug-related complications.
            </p>
          </div>
          <div className="py-2 font-bold text-justify   lg:mx-16 mx-8     grid grid-cols-1 lg:grid-cols-1   justify-items-center items-center">
            <p className="px-8">
              In DBS surgery, electrodes are inserted into a targeted area of
              the brain, using Magnetic Resonance Imaging (MRI) and recording of
              brain cell activity during the procedure. Following the surgery, a
              second procedure needs to be performed to implant an IPG, which is
              an impulse battery generator (similar to a pacemaker). People who
              undergo surgery are given a controller to turn the device on or
              off.
            </p>
          </div>
          <div className="py-2 font-bold text-justify   lg:mx-16 mx-8     grid grid-cols-1 lg:grid-cols-1   justify-items-center items-center">
            <p className="px-8">
              According to a Parkinson's Disease questionnaire PDQ-39, the DBS
              therapy improves life quality by 13% to 26%, like people will feel
              less embarrassed in public, move around easily, emotionally feel
              better, and feel less physical discomfort.
            </p>
          </div>
          <div className="py-2 font-bold text-justify   lg:mx-16 mx-8     grid grid-cols-1 lg:grid-cols-1   justify-items-center items-center">
            <p className="px-8">
              PD patients should consult with doctors about DBS when medications
              alone aren't providing enough relief but still have some effect.
              It is also recommended to consider the therapy before PD's
              symptoms have progressed beyond 'the window of opportunity,' which
              means when the symptoms stop responding to medication. Moreover,
              people should consult with doctors about PD as early as possible
              cause any disorder in the brain can cause severe complications in
              life. Dr Mohammad Shah Jahirul Hoque Chowdhury, Professor
              (Clinical Neurology), National Institute of Neurosciences &
              Hospital (NINS), Sher-e-Bangla Nagar, Dhaka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parkinson;
