import React from "react";
import resume from "../../assets/service_icon/cv.png";
import friendly from "../../assets/service_icon/friends.png";

import hidden from "../../assets/service_icon/hidden.png";
import liveContent from "../../assets/service_icon/live-chat.png";
import premium from "../../assets/service_icon/premium.png";
import edit from "../../assets/service_icon/resume.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
// import Banner from "../../assets/

const Service = () => {
  return (
    <section className="">
      <div className="md:mx-16 lg:mx-24 mx-8 py-8 ">
        <div className=" ">
          <h2 className="text-3xl text-center   font-bold poppins-b sm:text-4xl" style={{color: "#453364" }} >
            Our Services
          </h2>
          <h1 className="  w-32 h-1 rounded-lg mt-2 mb-4 mx-auto" style={{backgroundColor: "#453364" }}></h1>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img className="w-16" src={premium} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">Nursing</h3>

            <p className="mt-1 text-sm text-left text-gray-800 poppins-t">
              We offer both free and premium features. Want your resume to have
              that extra punch? Upgrade to Premium. On a budget? That's OK too -
              you can use our resume buider completely free of charge.
            </p>
            {/* <button className=' btn btn-sm bg-green-700 border border-green-500 rounded mt-5  '>Service Details</button> */}
            <label
              htmlFor="my-modal-6"
              className="btn btn-sm modal-button mt-3 text-white"
              style={{ backgroundColor: "#453364" }}
            >
              service details
            </label>
          </a>

          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box   ">
            <h1 className="text-2xl font-bold text-center py-5">Nursing Details</h1>
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
                  <img
                    src="https://images.saymedia-content.com/.image/t_share/MTc0MTU0Mzc4MDU0MjE1MTY0/what-is-nursing-care.jpg"
                    alt=""
                  />
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
            <img className="w-16" src={resume} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Physiotherapy
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800">
              Whatever resume template you're looking for, we've got it! Whether
              it's a classic black-and-white template, or something a bit more
              outside the box, we have what you need!
            </p>
            <label
              htmlFor="my-modal-5"
              className="btn btn-sm modal-button mt-3 text-white"
              style={{ backgroundColor: "#453364" }}
            >
              service details
            </label>
          </a>


          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box   ">
            <h1 className="text-2xl font-bold text-center py-5">Physiotherapy Details</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3   mx-auto	 "  >
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
                  <img
                    src="https://thumbs.dreamstime.com/b/highlighted-spine-man-physiotherapy-digital-composite-men-53051926.jpg"
                    alt=""
                  />
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
            <img className="w-16" src={hidden} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Medical Assistant
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800">
              With Novorésumé, you won’t spend hours working on your resume,
              just to be hit with a hidden paywall. Our resume builder will
              notify you if you’re using any of our premium features in advance.
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
            <h1 className="text-2xl font-bold text-center py-5">Medical Assistant Details</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3   mx-auto	 "  >
                <div className="text-sm font-bold">
                  <li>Turing and repositioning </li>
                  <li>24/7 Personal Healthcare</li>
                  <li>Transfer assistance</li>
                  <li>Medication Reminder</li>
                  <li>Maintain Health records </li>
                  <li>Hygiene maintenance</li>
                  
                </div>
                <div className="">
                  <img
                    src="https://media.istockphoto.com/photos/confident-young-female-african-scrub-nurse-wear-blue-uniform-face-picture-id1313904486?k=20&m=1313904486&s=612x612&w=0&h=Mk2xusMyPLXaPF7seFujaaSi5qXBYqDSINKwDHXL-tE="
                    alt=""
                  />
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
            <img className="w-16" src={friendly} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Medical Caregiver
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800">
              Our resume templates are ATS-friendly. It means your resume won’t
              automatically be rejected because an ATS can’t read it.
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
            <h1 className="text-2xl font-bold text-center py-5">Medical Caregiver Details</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3   mx-auto	 "  >
                <div className="text-sm font-bold">
                  
                  <li>24/7 Personal Healthcare</li>
                  <li>Patients Diapar Change</li>
                  <li>Medication Reminder</li>
                  <li>ANG Tube Insert &  Feeding   </li>
                  <li>Hygiene maintenance</li>
                  <li>Good Time pass with patients </li>
                 
                  
                </div>
                <div className="">
                  <img
                    src="https://calbizjournal.com/wp-content/uploads/2021/07/senior-woman-sitting-in-chair-and-laughing-with-nurse-in-retirement-home.jpg"
                    alt=""
                  />
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
            <img className="w-16" src={liveContent} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Caregiver
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800">
              Our CV builder provides real-time feedback on your resume content,
              ensuring that your resume reaches its full potential!
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
            <h1 className="text-2xl font-bold text-center py-5">Caregiver Details</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3   mx-auto	 "  >
                <div className="text-sm font-bold">
                  
                  <li>24/7 Personal Healthcare</li>
                  <li>Patients Diapar Change</li>
                  <li>Medication Reminder</li>
                  <li>ANG Tube Insert &  Feeding   </li>
                  <li>Hygiene maintenance</li>
                  <li>Good Time pass with patients </li>
                 
                  
                </div>
                <div className="">
                  <img
                    src="https://calbizjournal.com/wp-content/uploads/2021/07/senior-woman-sitting-in-chair-and-laughing-with-nurse-in-retirement-home.jpg"
                    alt=""
                  />
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
            <img className="w-16" src={edit} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Lab Support
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800">
              As you edit your resume with our builder, you’ll immediately see
              the changes applied to your document.
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
            <h1 className="text-2xl font-bold text-center py-5">Labsupport Details</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3   mx-auto	 "  >
                <div className="text-sm font-bold">
                  
                  <li>24/7 Personal Healthcare</li>
                  <li>Patients Diapar Change</li>
                  <li>Medication Reminder</li>
                  <li>ANG Tube Insert &  Feeding   </li>
                  <li>Hygiene maintenance</li>
                  <li>Good Time pass with patients </li>
                 
                  
                </div>
                <div className="">
                  <img
                    src="https://calbizjournal.com/wp-content/uploads/2021/07/senior-woman-sitting-in-chair-and-laughing-with-nurse-in-retirement-home.jpg"
                    alt=""
                  />
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


        </div>
      </div>
    </section>
  );
};

export default Service;
