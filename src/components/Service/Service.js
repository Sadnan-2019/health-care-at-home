import React from "react";
import physio from "../../assets/servicephysio.jpg";
import ambulanceservice from "../../assets/ambulanceservice.jfif";
import nurseservice from "../../assets/nurseservice.jpg";
import servicemedicalassistant from "../../assets/servicemedicalassistant.jpg";
import medicalcaregiver from "../../assets/servicemedicalcare-giver.webp";
import caregiver from "../../assets/service-caregive.jpg";
import nanines from "../../assets/service-nanines.jpg";
import companionship from "../../assets/service-companionship.jpg";
import equipment from "../../assets/service-medical-equipment.jpeg";
import "../../../src/components/Blog/Blog.css"  
import "./Service.css";
const Service = () => {
  return (
    <section className="blog">
      <div className="md:mx-16 lg:mx-24 mx-8 py-8 ">
        <div className=" ">
          <h2
            className="text-3xl text-center   font-bold poppins-b sm:text-4xl"
            style={{ color: "#453364" }}
          >
            Our Services
          </h2>
          <h1
            className="  w-32 h-1 rounded-lg mt-2 mb-4 mx-auto"
            style={{ backgroundColor: "#453364" }}
          ></h1>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 py-5">
          <a
            className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img className="w-96 h-52 rounded-lg " src={nurseservice} alt="" />

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
                className="btn btn-sm modal-button mt-3 text-white   "
                style={{ backgroundColor: "#453364" }}
              >
                service details
              </label>
            </div>
          </a>

          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box   ">
              <h1 className="text-2xl font-bold text-center py-5">
                Nursing Details
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
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
                  <img src={nurseservice} alt="" />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-6"
                  className="btn text-white "
                  style={{ backgroundColor: "#453364" }}
                >
                  close!
                </label>
              </div>
            </div>
          </div>

          <a
            className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img className="w-96 h-52 rounded-lg " src={physio} alt="" />

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
                className="btn btn-sm modal-button mt-3 text-white   "
                style={{ backgroundColor: "#453364" }}
              >
                service details
              </label>
            </div>
          </a>

          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box   ">
              <h1 className="text-2xl font-bold text-center py-5">
                Physiotherapy Details
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3   mx-auto	 ">
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
                  <img src={physio} alt="" />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-5"
                  className="btn text-white "
                  style={{ backgroundColor: "#453364" }}
                >
                  close!
                </label>
              </div>
            </div>
          </div>

          <a
            className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="w-96 h-52 rounded-lg"
              src={servicemedicalassistant}
              alt=""
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
              className="btn btn-sm modal-button mt-3 text-white"
              style={{ backgroundColor: "#453364" }}
            >
              service details
            </label>
          </a>

          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box   ">
              <h1 className="text-2xl font-bold text-center py-5">
                Medical Assistant Details
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3   mx-auto	 ">
                <div className="text-sm font-bold">
                  <li>Turing and repositioning </li>
                  <li>24/7 Personal Healthcare</li>
                  <li>Transfer assistance</li>
                  <li>Medication Reminder</li>
                  <li>Maintain Health records </li>
                  <li>Hygiene maintenance</li>
                </div>
                <div className="">
                  <img src={servicemedicalassistant} alt="" />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-4"
                  className="btn text-white "
                  style={{ backgroundColor: "#453364" }}
                >
                  close!
                </label>
              </div>
            </div>
          </div>

          <a
            className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="w-96 h-56 rounded-lg"
              src={medicalcaregiver}
              alt=""
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
              className="btn btn-sm modal-button mt-3 text-white"
              style={{ backgroundColor: "#453364" }}
            >
              service details
            </label>
          </a>

          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box   ">
              <h1 className="text-2xl font-bold text-center py-5">
                Medical Caregiver Details
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3   mx-auto	 ">
                <div className="text-sm font-bold">
                  <li>24/7 Personal Healthcare</li>
                  <li>Patients Diapar Change</li>
                  <li>Medication Reminder</li>
                  <li>NG Tube Feeding </li>
                  <li>Hygiene maintenance</li>
                  <li>Pass good time with patients </li>
                </div>
                <div className="">
                  <img src={medicalcaregiver} alt="" />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-3"
                  className="btn text-white "
                  style={{ backgroundColor: "#453364" }}
                >
                  close!
                </label>
              </div>
            </div>
          </div>

          <a
            className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img className="w-96 h-56 rounded-lg" src={caregiver} alt="" />

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
              className="btn btn-sm modal-button mt-3 text-white"
              style={{ backgroundColor: "#453364" }}
            >
              service details
            </label>
          </a>

          <input type="checkbox" id="my-modal-2" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box   ">
              <h1 className="text-2xl font-bold text-center py-5">
                Caregiver Details
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3   mx-auto	 ">
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
                  <img src={caregiver} alt="" />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-2"
                  className="btn text-white "
                  style={{ backgroundColor: "#453364" }}
                >
                  close!
                </label>
              </div>
            </div>
          </div>
          <a
            className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img className="w-96 h-56 rounded-lg" src={nanines} alt="" />

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
              className="btn btn-sm modal-button mt-3 text-white"
              style={{ backgroundColor: "#453364" }}
            >
              service details
            </label>
          </a>

          <input type="checkbox" id="my-modal-1" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box   ">
              <h1 className="text-2xl font-bold text-center py-5">Nannycare</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3   mx-auto	 ">
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
                  <img src={nanines} alt="" />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-1"
                  className="btn text-white "
                  style={{ backgroundColor: "#453364" }}
                >
                  close!
                </label>
              </div>
            </div>
          </div>
          <a
            className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img className="w-96 h-56 rounded-lg" src={companionship} alt="" />

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
              className="btn btn-sm modal-button mt-3 text-white"
              style={{ backgroundColor: "#453364" }}
            >
              service details
            </label>
          </a>

          <input type="checkbox" id="my-modal-7" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box   ">
              <h1 className="text-2xl font-bold text-center py-5">
                Companionship
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3   mx-auto	 ">
                <div className="text-sm font-bold">
                  <li>Good manner</li>
                  <li>Walking</li>
                  <li>Watching TV </li>
                  <li>24/7 Personal care </li>
                  <li>Cooking</li>
                  <li>Feeding care</li>
                
                </div>
                <div className="rounded-lg">
                  <img src={companionship} alt="" />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-7"
                  className="btn text-white "
                  style={{ backgroundColor: "#453364" }}
                >
                  close!
                </label>
              </div>
            </div>
          </div>
          <a
            className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img className="w-96 h-56 rounded-lg" src={equipment} alt="" />

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
              className="btn btn-sm modal-button mt-3 text-white"
              style={{ backgroundColor: "#453364" }}
            >
              service details
            </label>
          </a>

          <input type="checkbox" id="my-modal-8" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box   ">
              <h1 className="text-2xl font-bold text-center py-5">
                Medical Equipment
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3   mx-auto	 ">
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
                  <img src={equipment} alt="" />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-8"
                  className="btn text-white "
                  style={{ backgroundColor: "#453364" }}
                >
                  close!
                </label>
              </div>
            </div>
          </div>

          <a
            className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="w-96 h-56 rounded-lg"
              src={ambulanceservice}
              alt=""
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
              className="btn btn-sm modal-button mt-3 text-white"
              style={{ backgroundColor: "#453364" }}
            >
              service details
            </label>
          </a>

          <input type="checkbox" id="my-modal-9" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box   ">
              <h1 className="text-2xl font-bold text-center py-5">
                Emergency Ambulance
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3   mx-auto	 ">
                <div className="text-sm font-bold">
                  <li>24/7 dayes open</li>
                  <li>Very cost affordable</li>
                  <li>Good time management </li>
                  <li>Experience driver</li>
                  <li>Good vehicles</li>
                </div>
                <div className="">
                  <img src={ambulanceservice} alt="" />
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal-9"
                  className="btn text-white "
                  style={{ backgroundColor: "#453364" }}
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
