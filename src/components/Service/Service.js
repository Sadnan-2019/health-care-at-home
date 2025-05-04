import React from "react";
import physio from "../../assets/servicephysio.webp";
import ambulanceservice from "../../assets/ambulanceservice.jfif";
import icuservice from "../../assets/icu.webp";
import nurseservice from "../../assets/nurseservice.webp";
import servicemedicalassistant from "../../assets/servicemedicalassistant.webp";
import medicalcaregiver from "../../assets/servicemedicalcare-giver.webp";
import caregiver from "../../assets/service-caregiver.webp";
import nanines from "../../assets/service-nanines.webp";
import companionship from "../../assets/service-companionship.webp";
import attendant from "../../assets/attendent.webp";
import equipment from "../../assets/service-medical-equipment.webp";
import "../../../src/components/Blog/Blog.css";
import "./Service.css";
const Service = () => {
  return (
    <section className="blog">
      <div className="py-8 mx-8 md:mx-16 lg:mx-24 ">
        <div className="">
          <h1
            className="text-3xl text-center  text-[#453364]  font-bold poppins-b sm:text-4xl"
         
          >
            Our Services
          </h1>
          <h2
            className="  w-32 h-1 rounded-lg mt-2 mb-4 mx-auto bg-[#453364]"
            
          ></h2>
        </div>

        <div className="grid grid-cols-1 gap-8 py-5 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="block p-8 transition bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img title="Nursing Home Care" className="rounded-lg w-96 h-52 " src={nurseservice} alt="Nursing Home Care" loading="lazy" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">Nursing</h3>

            <p className="mt-1 text-sm text-left text-gray-800 poppins-t lg:text-justify">
              HealthCare at home offers most comprehensive and hollistic nursing
              care at home. They provide physical & psychological support to the
              patients.Our nurses administer oral & parenteral medication.All
              time they are analysis heartbeat, BP, Temperature, Oxygen
              saturation, & blood glucose.
            </p>

            <div>
              <label
                htmlFor="my-modal-6"
                className="btn btn-sm modal-button mt-3 text-white  bg-[#453364] "
                
              >
                 service details
              </label>
            </div>
          </div>

          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box ">
              <h1 className="py-5 text-2xl font-bold text-center">
                Home Nursing Details
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                <div className="text-sm font-bold">
                  <li>Total Nursing Care</li>
                  <li>IV Cannula insertion</li>
                  <li>NG-tube insertion</li>
                  <li>Catheterization</li>
                  <li>Dressing wounds</li>
                  <li>Oxygen support</li>
                  <li>Maintain health records</li>
                </div>
                <div>
                  <img title="Nursing Home Care"  src={nurseservice} alt="Nursing Home Care" loading="lazy" />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-6"
                  className="btn text-white bg-[#453364] "
     
                >
                  close!
                </label>
              </div>
            </div>
          </div>

          <div 
            className="block p-8 transition bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img title="Physiotherapy Service  at home"  className="rounded-lg w-96 h-52 " alt="Physiotherapy Service  at home"  src={physio}   loading="lazy" 
             />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Physiotherapy
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800 poppins-t lg:text-justify">
              HealthCare at home has got a good number of diploma and B.Sc
              physiotherapists. They are experienced & specially trained.Most of
              them carry instruments such as IRR, TENS, Ultrasound. They are
              qualified to take care of patients of all ages.They can address
              Musculoskeletal, Neurological, Post-operative, Stroke patients'
              condition.
            </p>

            <div>
              <label
                htmlFor="my-modal-5"
                className="btn btn-sm modal-button mt-3 text-white  bg-[#453364]  "
             
              >
                service details
              </label>
            </div>
          </div>

          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box ">
              <h1 className="py-5 text-2xl font-bold text-center">
                Physiotherapy Details
              </h1>
              <div className="grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-2 ">
                <div className="text-sm font-bold">
                  <li>Musculoskeletal Physiotherapy </li>
                  <li>Neurological Physiotherapy</li>
                  <li>Geriatric Physiotherapy</li>
                  <li>Post Operative Physiotherapy</li>
                  <li>Pediatric Physiotherapy</li>
                  <li>Stroke Physiotherapy</li>
                  <li>Chest Physiotherapy</li>
                  <li>Gynecological Physiotherapy</li>
                  <li>Sports Physiotherapy</li>
                  <li>All kinds of Musculoskeletal Rehabilitation</li>
                </div>
                <div className="">
                  <img title="Physiotherapy Service  at home" src={physio} alt="Physiotherapy Service  at home"  loading="lazy"  />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-5"
                  className="btn text-white bg-[#453364] "
              
                >
                  close!
                </label>
              </div>
            </div>
          </div>

          <div
            className="block p-8 transition bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="rounded-lg w-96 h-52"
              src={servicemedicalassistant}
              alt=" Medical Assistant  Care at Your Home " 
              loading="lazy" 
              title="Medical Assistant  Care at Your Home "
            />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Medical Assistant
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800 lg:text-justify">
              Medical assistants are qualified diploma holders. They also do
              nursing-care at home. Apart from grooming the patients they give
              injections, Insert NG-tube, Catheter etc. They regularly check BP,
              Sugar, Oxygen, Pulse & other vital parameters.They know how to
              take care of bed-sore .
            </p>

            <label
              htmlFor="my-modal-4"
              className="btn btn-sm modal-button mt-3 text-white bg-[#453364]"
          
            >
              service details
            </label>
          </div>

          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box ">
              <h1 className="py-5 text-2xl font-bold text-center">
                Medical Assistant Details
              </h1>
              <div className="grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-2 ">
                <div className="text-sm font-bold">
                  <li>Turing and repositioning </li>
                  <li>24/7 Personal Healthcare</li>
                  <li>Transfer assistance</li>
                  <li>Medication Reminder</li>
                  <li>Maintain Health records </li>
                  <li>Hygiene maintenance</li>
                </div>
                <div className="">
                  <img src={servicemedicalassistant} alt="Medical Assistant  Care at Your Home " title="Medical Assistant  Care at Your Home "  loading="lazy"  />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-4"
                  className="btn text-white bg-[#453364] "
               
                >
                  close!
                </label>
              </div>
            </div>
          </div>

          <div
            className="block p-8 transition bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="h-56 rounded-lg w-96"
              src={medicalcaregiver}
              alt="Medical Caregiver Support at Your Home" 
              loading="lazy" 
              title="Medical Caregiver Support at Your Home"
            />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Medical Caregiver
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800 lg:text-justify">
              Our Medical caregiver is one who takes care of patients by
              feeding, grooming, bathing, giving medication,talking & walking
              the patient. They also check vital parameters & blood-sugar label
              etc.
            </p>
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm modal-button mt-3 text-white bg-[#453364]"
           
            >
              service details
            </label>
          </div>

          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box ">
              <h1 className="py-5 text-2xl font-bold text-center">
                Medical Caregiver Details
              </h1>
              <div className="grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-2 ">
                <div className="text-sm font-bold">
                  <li>24/7 Personal Healthcare</li>
                  <li>Patients Diapar Change</li>
                  <li>Medication Reminder</li>
                  <li>NG Tube Feeding </li>
                  <li>Hygiene maintenance</li>
                  <li>Pass good time with patients </li>
                </div>
                <div className="">
                  <img   src={medicalcaregiver} alt="Medical Caregiver Support at Your Home"  title="Medical Caregiver Support at Your Home" loading="lazy" />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-3"
                  className="btn text-white bg-[#453364]  "
              
                >
                  close!
                </label>
              </div>
            </div>
          </div>

          <div
            className="block p-8 transition bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img title="Best Quality Experience  Caregiver" className="h-56 rounded-lg w-96" src={caregiver} alt="Top Caregiver Home Service "  loading="lazy"  />
            
            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Caregiver
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800 lg:text-justify ">
              Our Caregiver gives medication,feed to the patient,clean the
              patients, change diaper,light house-keeping.They also walk & talk
              with the patients. A Caregiver dress & undress the patients.
            </p>

            <label
              htmlFor="my-modal-2"
              className="btn btn-sm modal-button mt-3 text-white bg-[#453364]"
            
            >
              service details
            </label>
          </div>

          <input type="checkbox" id="my-modal-2" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box ">
              <h1 className="py-5 text-2xl font-bold text-center">
                Caregiver Details
              </h1>
              <div className="grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-2 ">
                <div className="text-sm font-bold">
                  <li>
                    Provide personal services such as bathing and grooming etc
                  </li>
                  <li>Patients Diaper Change</li>
                  <li>Medication Reminder</li>
                  <li>Accompany patients to their doctor visits</li>
                  <li>Hygiene maintenance</li>
                  <li>Light house keeping </li>
                  <li>Arrange transport </li>
                </div>
                <div className="">
                  <img src={caregiver} title="Best Quality Experience  Caregiver" alt="Top  elder caregiver at your home"  loading="lazy" />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-2"
                  className="btn text-white  bg-[#453364]"
                 
                >
                  close!
                </label>
              </div>
            </div>
          </div>
          <div
            className="block p-8 transition bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img title="nannies to take care of your loving child" className="h-56 rounded-lg w-96" src={nanines} alt="   Baby  care at home or office"  loading="lazy" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Nannycare
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800 lg:text-justify">
              We have experienced nannies to take care of your loving child.
              They will love & care the way you do it.They feed the baby,clean
              the baby ,shower the baby they do it all.They are reliable & trust
              worthy.They sincere & hard working.Your loving child is safe with
              us.
            </p>

            <label
              htmlFor="my-modal-1"
              className="btn btn-sm modal-button mt-3 text-white bg-[#453364]"
            
            >
              service details
            </label>
          </div>

          <input type="checkbox" id="my-modal-1" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box ">
              <h1 className="py-5 text-2xl font-bold text-center">Nannycare</h1>
              <div className="grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-2 ">
                <div className="text-sm font-bold">
                  <li>Work like a mother of the baby</li>
                  <li>Behave nicely with everyone in the house</li>
                  <li> Feed the baby in a proper way </li>
                  <li> Burb the baby after feeding </li>
                  <li>Clean the baby after removing the diaper. </li>
                  <li>Use baby wipes or wet cotton</li>
                  <li>Make sure there are no diaper rash</li>
                  <li>Sometimes leave the baby </li>
                  <li>Handle the baby softly</li>
                </div>
                <div className="">
                  <img title="nannies to take care of your loving child"  src={nanines} alt="Baby  care at home or office"   loading="lazy" />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-1"
                  className="btn text-white bg-[#453364]"
               
                >
                  close!
                </label>
              </div>
            </div>
          </div>
          <div
            className="block p-8 transition bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img title="Companions are to give support to lonely people at home" className="h-56 rounded-lg w-96" src={companionship} alt="Companions are trained to give company to lonely people at home"  loading="lazy"  />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Companionship
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800 lg:text-justify">
              Our companions work with your dear ones with compassion &
              confidence.They give their time to the patients with empathy &
              care.They are trained & reliable.They walk the patients outside
              home,read newspaper to the patients.
            </p>

            <label
              htmlFor="my-modal-7"
              className="btn btn-sm modal-button mt-3 text-white bg-[#453364]"
           
            >
              service details
            </label>
          </div>

          <input type="checkbox" id="my-modal-7" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box ">
              <h1 className="py-5 text-2xl font-bold text-center">
                Companionship
              </h1>
              <div className="grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-2 ">
                <div className="text-sm font-bold">
                  <li>Good manner</li>
                  <li>Walking</li>
                  <li>Watching TV </li>
                  <li>24/7 Personal care </li>
                  <li>Cooking</li>
                  <li>Feeding care</li>
                </div>
                <div className="rounded-lg">
                  <img title="Companions are to give support to lonely people at home" src={companionship} alt=" Companions are to give support to lonely people at home "  loading="lazy"  />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-7"
                  className="btn text-white bg-[#453364]"
               
                >
                  close!
                </label>
              </div>
            </div>
          </div>


          <div
            className="block p-8 transition bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img title="Attendant service at your Home " className="h-56 rounded-lg w-96" src={attendant} alt="Attendant service  at your home"  loading="lazy"  />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Attendant
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800 lg:text-justify">
              Our attendant work with your dear ones with compassion &
              confidence.They give their time to the patients with empathy &
              care.They are trained & reliable.They walk the patients outside
              home,read newspaper to the patients.
            </p>

            <label
              htmlFor="my-modal-11"
              className="btn btn-sm modal-button mt-3 text-white bg-[#453364]"
         
            >
              service details
            </label>
          </div>

          <input type="checkbox" id="my-modal-11" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box ">
              <h1 className="py-5 text-2xl font-bold text-center">
              Attendant
              </h1>
              <div className="grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-2 ">
                <div className="text-sm font-bold">
                  <li>Good manner</li>
                  <li>Walking</li>
                  <li>Watching TV </li>
                  <li>24/7 Personal care </li>
                  <li>Cooking</li>
                  <li>Feeding care</li>
                </div>
                <div className="rounded-lg">
                  <img title="Attendant service at your Home " src={attendant} alt="Attendant service at your Home"  loading="lazy"  />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-11"
                  className="btn text-white bg-[#453364]"
               
                >
                  close!
                </label>
              </div>
            </div>
          </div>











          <div
            className="block p-8 transition bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img title="Medical Equipment Service" className="h-56 rounded-lg w-96" src={equipment} alt=" Medical Equipment Service "  loading="lazy"
            />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Medical Equipment
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800 lg:text-justify">
              We arranged all kindes of medical equipment related product to
              provide patients care at home. Such as Patients bed, Bedtable, IV
              stand, nebulizer, pulse oximeter, glucometer, BP machine, Bipap,
              Oxygen cylinder & many more. We provide high quality products.We
              set up post ICU equipments at home & high quality professional
              service.
            </p>

            <label
              htmlFor="my-modal-8"
              className="btn btn-sm modal-button mt-3 text-white bg-[#453364]"
            
            >
              service details
            </label>
          </div>

          <input type="checkbox" id="my-modal-8" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box ">
              <h1 className="py-5 text-2xl font-bold text-center">
                Medical Equipment
              </h1>
              <div className="grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-2 ">
                <div className="text-sm font-bold">
                  <li>Oxygen Mask</li>
                  <li>Glucometer</li>
                  <li>Oximeter </li>
                  <li>Hospital Bed </li>
                  <li>Alfa Mattress </li>
                  <li>Bed Table</li>
                  <li>IV Cannula</li>
                  <li>NG Tube</li>
                  <li>Bad Site Monitor</li>
                  <li>Catheter </li>
                </div>
                <div className="rounded-lg">
                  <img title="Medical Equipment Service" src={equipment} alt="Medical Equipment Service"  loading="lazy"/>
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-8"
                  className="btn text-white  bg-[#453364]"
              
                >
                  close!
                </label>
              </div>
            </div>
          </div>

          <div
            className="block p-8 transition bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="h-56 rounded-lg w-96"
              src={ambulanceservice}
              alt="24/7 ambulanceservice  whole bangladesh      " 
              title="24/7 ambulanceservice for any patients   whole bangladesh  "
              loading="lazy"
            />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Emergency Ambulance
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800 lg:text-justify">
              The latest model Ambulance service is available. We Provide
              different types of ambulance services like Ac ambulance service,
              Non-Ac ambulance service, freezing ambulance service and Basic
              life support ambulance service. If you need Basic Life Support
              ICU, CCU, NICU, PICU Ambulance Support with Doctors or Brothers
              then contact us.
            </p>

            <label
              htmlFor="my-modal-9"
              className="btn btn-sm modal-button mt-3 text-white bg-[#453364]"
          
            >
              service details
            </label>
          </div>

          <input type="checkbox" id="my-modal-9" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box ">
              <h1 className="py-5 text-2xl font-bold text-center">
                Emergency Ambulance
              </h1>
              <div className="grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-2 ">
                <div className="text-sm font-bold">
                  <li>24/7 dayes open</li>
                  <li>Very cost affordable</li>
                  <li>Good time management </li>
                  <li>Experience driver</li>
                  <li>Good vehicles</li>
                </div>
                <div className="">
                  <img src={ambulanceservice} alt="24/7 ambulanceservice  whole bangladesh      " 
              title="24/7 ambulanceservice for any patients   whole bangladesh  " loading="lazy"/>
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-9"
                  className="btn text-white bg-[#453364]"
              
                >
                  close!
                </label>
              </div>
            </div>
          </div>
          <div
            className="block p-8 transition bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img className="h-56 rounded-lg w-96" src={icuservice} alt=" ICU & CCU Setup At Your Home " title="ICU & CCU Setup At Your Home"  loading="lazy" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              ICU & CCU Setup
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800 lg:text-justify">
              HealthCare at Home is doing something new & exciting. We are
              setting up critical care services at home. We provide a complete
              set of types of equipment & accessories. We also provided critical
              care specialist doctors. To support the patients critically ill,
              with a tracheostomy, PEG tube, Catheter, NG tube, and Central
              line- we provide ICU-trained nurses. We Supply patient beds, Bipap
              machines, Oxygen concentrators, Suction machines, monitors,
              nebulizers, Wheel-chair & all other types of equipment we need to
              take care of critically ill patients. We also can provide
              ventilator support.
            </p>

            <label
              htmlFor="my-modal-10"
              className="btn btn-sm modal-button mt-3 text-white bg-[#453364]"
        
            >
              Service details
            </label>
          </div>

          <input type="checkbox" id="my-modal-10" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box ">
              <h1 className="py-5 text-2xl font-bold text-center">
                ICU & CCU Setup
              </h1>
              <div className="grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-2 ">
                <div className="text-sm font-bold">
                  <li>24/7 dayes open</li>
                  <li>Very cost affordable</li>
                  <li>Good time management </li>
                  <li>Experience </li>
                  <li>Good vehicles</li>
                </div>
                <div className="">
                  <img src={icuservice} alt=" ICU & CCU Setup At Your Home " title="ICU & CCU Setup At Your Home"    loading="lazy"/>
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-10"
                  className="btn text-white bg-[#453364] "
              
                >
                  close!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
