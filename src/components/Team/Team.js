import React from "react";

import doctor2 from "../../assets/Dr.-Sarwar-Iqbal.jpg";
import doctor3 from "../../assets/Dhimanbonik.jpg";
import doctor4 from "../../assets/dr.-abu-sayed.jpg";
import doctor5 from "../../assets/lutfor.jpg";
import doctor6 from "../../assets/zakiahossain.jpeg";
import doctor7 from "../../assets/kibria.jpg";
import doctor8 from "../../assets/Dr Sarwar OPHTHALMOLOGIST.jpg";
import doctor9 from "../../assets/Qazi Musshtaq.jpg";
import doctor10 from "../../assets/Dr Tarafder Runa Liala.jpeg";
import doctor11 from "../../assets/Prof Shahina Subhan Mitu.jpg";
import doctor12 from "../../assets/Prof,Dr AK Akhteruzzaman.jpeg";
import doctor13 from "../../assets/Prof. Masud Iqbal.jpeg";
import doctor14 from "../../assets/Mosharaaf.jpg";

const Team = () => {
  return (
    <div>
      <div className="blog py-10 bg-[#453364] "  >
        <div className="">
          <h2 className="text-3xl font-bold text-center text-white poppins-b sm:text-4xl">
            Meet Our Experts
          </h2>
        </div>
        <div className="grid gap-10 py-8 mx-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"   >
          <div
            className="border card h-96 "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"

             
          >
            <figure className="">
              <img
                src={doctor3}
                alt="Shoes"
                className="h-56 p-4 rounded-3xl "
                // style={{   borderRadius: "25px" }}
              />
            </figure>
            <div className="items-center text-center text-white ">
              <h2 className="font-bold text-center ">Prof. Dr. Dhiman Banik</h2>
              <p>Professor & Senior Consultant Cardiologist</p>
              <p>
                MBBS, D-Card, MD (Card.), Associate Fellow-American College of
                Cardiology
              </p>
            </div>
          </div>
          <div
            className="border card "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
           h-96
          >
            <figure className="">
              <img
                src={doctor2}
                alt="Shoes"
                className="h-56 p-4 rounded-3xl"
             
              />
            </figure>
            <div className="items-center text-center text-white ">
              <h2 className="font-bold text-center ">Dr Sarwar Iqbal</h2>

              <p>Professor & Senior Consultant Cardiologist</p>
              <p>
                MBBS, MD(Nephrology) SPecialist in Kidney Diseases,Professor &
                Head,Dept. of Nephrology,BIRDEM Hospital & Ibrahim Medical
                College.
              </p>
            </div>
          </div>

          <div
            className="border card "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
           h-96
          >
            <figure className="">
              <img
                src={doctor4}
                alt="Shoes"
                className="h-56 p-4 rounded-3xl "
                 
              />
            </figure>
            <div className="items-center text-center text-white ">
              <h2 className="font-bold text-center ">Dr.Mohammad Abu Sayeed</h2>

              <p> Professor and Head of Department NEUROSURGERY</p>
              <p>
                MBBS, MS (NEUROSURGERY) Specialist in Brain & Spine Surgeon.
              </p>
            </div>
          </div>
          <div
            className="border card "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
           h-96
          >
            <figure className="">
              <img
                src={doctor5}
                alt="Shoes"
                className="h-56 p-4 rounded-3xl"
            
              />
            </figure>
            <div className="items-center text-center text-white ">
              <h2 className="font-bold text-center ">Dr. Lutfor Rahman</h2>

              <p>
                Specialist MBBS, MS (CTS) Chief Cardiac Surgeon Labaid Cardiac
                Hospital
              </p>
              {/* <p>
              MBBS, MS (NEUROSURGERY)  
               
               Specialist in Brain & Spine Surgeon.
              </p> */}
            </div>
          </div>
          <div
            className="border card "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
           h-96
          >
            <figure className="">
              <img
                src={doctor6}
                alt="Shoes"
                className="h-56 p-4 rounded-3xl"
              
              />
            </figure>
            <div className="items-center text-center text-white ">
              <h2 className="font-bold text-center ">Dr. Zakia Hossain</h2>

              <p>MD is an Internal Medicine Specialist in USA</p>
         
            </div>
          </div>
          <div
            className="border card "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
           h-96
          >
            <figure className="">
              <img
                src={doctor7}
                alt="Shoes"
                className="h-56 p-4 rounded-3xl "
              
              />
            </figure>
            <div className="items-center text-center text-white ">
              <h2 className="font-bold text-center ">
                PROF. DR. S. M. G. KIBRIA
              </h2>

              <p>
                FRCS (England), FRCS (Glasgow), FRCS (Edinburgh), FRCS
                (General), MSc (Leeds), MBBS (DMC)
              </p>
              {/* <p>
              MBBS, MS (NEUROSURGERY)  
               
               Specialist in Brain & Spine Surgeon.
              </p> */}
            </div>
          </div>
          <div
            className="border card "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
           h-96
          >
            <figure className="">
              <img
                src={doctor8}
                alt="Shoes"
                className="h-56 p-4 rounded-3xl"
            
              />
            </figure>
            <div className="items-center text-center text-white ">
              <h2 className="font-bold text-center ">
                Dr. Sarwar Jahan Muktafi
              </h2>

              <p>
                Consultant Ophthalmologist, Cataract, Medical Retina &
                Oculoplasty Specialist, Bangladesh Eye Hospital. 
              </p>
              {/* <p>
              MBBS, MS (NEUROSURGERY)  
               
               Specialist in Brain & Spine Surgeon.
              </p> */}
            </div>
          </div>
          <div
            className="border card "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
           h-96
          >
            <figure className="">
              <img
                src={doctor9}
                alt="Shoes"
                className="h-56 p-4 rounded-3xl"
             
              />
            </figure>
            <div className="items-center text-center text-white ">
              <h2 className="font-bold text-center ">
                Professor Dr. Qazi Mushtaq Hussain
              </h2>

              <p>
                MBBS (DMC), M.Phil (BSMMU) Higher Training at: Tata Memorial
                Cancer Hospital Mumbai, India St. Lukes Medical Centre, Manila,
                Philippines Cancer Specialist Director,Sr Consultent Labaid Cancer Hospital 
              </p>
              {/* <p>
              MBBS, MS (NEUROSURGERY)  
               
               Specialist in Brain & Spine Surgeon.
              </p> */}
            </div>
          </div>
          <div
            className="border card "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
           h-96
          >
            <figure className="">
              <img
                src={doctor10}
                alt="Shoes"
                className="h-56 p-4 rounded-3xl"
           
              />
            </figure>
            <div className="items-center text-center text-white ">
              <h2 className="font-bold text-center ">
                Associate Prof. Dr Tarafdar Runa Laila
              </h2>

              <p>
                MBBS (DMC), FCPS (OBGYN), MS (OBGYN), Training on Infertility
                (India) Gynecology, Obstetrics Specialist & Surgeon Bangabandhu
                Sheikh Mujib Medical University Hospital
              </p>
              {/* <p>
              MBBS, MS (NEUROSURGERY)  
               
               Specialist in Brain & Spine Surgeon.
              </p> */}
            </div>
          </div>
          <div
            className="border card "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
           h-96
          >
            <figure className="">
              <img
                src={doctor11}
                alt="Shoes"
                className="h-56 p-4 rounded-3xl"
                
              />
            </figure>
            <div className="items-center text-center text-white ">
              <h2 className="font-bold text-center ">
                Prof Shahina Subhan Mitu
              </h2>

              <p>Director, Centre for Medical Education (CME)</p>
              {/* <p>
              MBBS, MS (NEUROSURGERY)  
               
               Specialist in Brain & Spine Surgeon.
              </p> */}
            </div>
          </div>
          <div
            className="border card "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
           h-96
          >
            <figure className="">
              <img
                src={doctor12}
                alt="Shoes"
                className="h-56 p-4 rounded-3xl "
              
              />
            </figure>
            <div className="items-center text-center text-white ">
              <h2 className="font-bold text-center ">
                Prof,Dr AK Akhteruzzaman
              </h2>

              <p>
                Bangabandhu Sheikh Mujib Medical University | BSMMU · Department
                of Anaesthesia, Intensive Care & Pain Medicine MBBS DA MD
              </p>
              {/* <p>
              MBBS, MS (NEUROSURGERY)  
               
               Specialist in Brain & Spine Surgeon.
              </p> */}
            </div>
          </div>
          <div
            className="border card "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
           h-96
          >
            <figure className="">
              <img
                src={doctor13}
                alt="Shoes"
                className="h-56 p-4 rounded-3xl "
              
              />
            </figure>
            <div className="items-center text-center text-white ">
              <h2 className="font-bold text-center ">Md Masud Iqbal</h2>

              <p>
                National Institute of Kidney Diseases & Urology (NIKDU) ·
                Nephrology MBBS, MD(Nephrology)
              </p>
              {/* <p>
              MBBS, MS (NEUROSURGERY)  
               
               Specialist in Brain & Spine Surgeon.
              </p> */}
            </div>
          </div>
          <div
            className="border card "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
           h-96
          >
            <figure className="">
              <img
                src={doctor14}
                alt="Shoes"
                className="h-56 p-4 rounded-3xl"
                
              />
            </figure>
            <div className="items-center text-center text-white ">
              <h2 className="font-bold text-center ">
                Professor Dr. AKM Mosharraf Hossain
              </h2>

              <p>
                MBBS, FCCP (USA), FRCP, PhD, FCPS Fellow Pulmonology Sleep &
                MICU (S'pore) Medicine, Pulmonologist & Sleep Medicine
                Specialist Chairman, Department of Respiratory Medicine
                Bangabandhu Sheikh Mujib Medical University, Dhaka
              </p>
              {/* <p>
              MBBS, MS (NEUROSURGERY)  
               
               Specialist in Brain & Spine Surgeon.
              </p> */}
            </div>
          </div>
        </div>
        <p className="py-8 text-lg text-center text-white md:text-3xl lg:text-3xl">
          Multidisciplinary team of 900+ professionals including doctors,
          nurses, physiotherapists, medical assistant & medical caregiver.
        </p>

     
      </div>
    </div>
  );
};

export default Team;
