import React from "react";
import hcahfb from "../../../src/assets/hcahfb.jpg";
import "./Footer.css";
import { AiFillStar } from "react-icons/ai";
import Messenger from "../Messenger/Messenger";

const Footer = () => {
  return (
    <div>
      <footer class="blog py-10 " style={{ backgroundColor: "#453364" }}>
        <div class="max-w-screen-xl px-4  pb-6 mx-auto sm:px-6 lg:px-8 ">
          <div class="grid grid-cols-1 gap-8 pt-16 mt-16 border-t border-gray-100 md:grid-cols-4 lg:grid-cols-4 text-white">
            <div class="text-center sm:text-left">
              <a href="/about-us" class="text-lg font-medium text-white">
                About Us
              </a>

              <nav class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Company History
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Employee Handbook
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-white">Our Services</p>

              <nav class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="/nursing"
                    >
                      Nursing
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="/physiotherapy"
                    >
                      Physiotherapy{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="/medical-assistant"
                    >
                      Medical Assistant
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="/medical-caregiver"
                    >
                      Medical Caregiver
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="/caregiver"
                    >
                      Caregiver
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="/medical-equipment"
                    >
                      Medical Equipment
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="text-center sm:text-left">
              <nav class="mt-8">
                <ul class="space-y-4 text-sm">
                  <div className="grid lg:grid-cols-1     ">
                    <div className="   relative  ">
                      <img className=" opacity-80	 " src={hcahfb} alt="" />

                      <div className="  	   mx-2     absolute ">
                        <div className=" rounded-xl   bg-gradient-to-r from-[#486038] to-[#38235D]   text-white">
                          <p className=" p-1  mt-[-30px]  bg-gradient-to-r from-[#486038] to-[#38235D]   text-white  ">
                            HealthCare at Home
                          </p>
                          <div className="flex gap-10 items-center  px-2">
                            <a
                              href="https://www.facebook.com/hcahbd"
                              rel="noopener noreferrer"
                              target="_blank"
                              class="text-primary transition hover:text-blue-800"
                            >
                              <span class="sr-only text-white">Facebook</span>
                              <svg
                                class="w-6 h-6 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <div className="flex items-center gap-2  ">
                                <p className="text-white text-sm font-bold   ">
                                  5{" "}
                                </p>
                                <AiFillStar className="text-white" />
                                <AiFillStar className="text-white" />
                                <AiFillStar className="text-white" />
                                <AiFillStar className="text-white" />
                                <AiFillStar className="text-white" />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </nav>
            </div>

            <div class="text-center sm:text-left"></div>
          </div>

          <div class="pt-6 mt-16 border-t border-gray-100 sm:justify-between sm:items-center sm:flex">
            <p class="text-sm text-center text-white sm:text-left">
              Copyright &copy; 2022. All rights reserved HCAH.
            </p>

            <ul class="flex justify-center gap-6 mt-4 sm:mt-0 sm:justify-start">
              <li>
                <a
                  href="https://www.facebook.com/hcahbd"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-primary transition hover:text-blue-800"
                >
                  <span class="sr-only text-white">Facebook</span>
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  class=" transition text-white hover:text-blue-800"
                >
                  <span class="sr-only">Instagram</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                  />
                  </svg>
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/company/healthcare-at-home-bangladesh/" rel="noopener noreferrer" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  class="w-6 h-6"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0078d4"
                    d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                  ></path>
                  <path
                    d="M30,35v-9c0-1.103-0.897-2-2-2s-2,0.897-2,2v9h-6V18h6v1.027C27.04,18.359,28.252,18,29.5,18	c3.584,0,6.5,2.916,6.5,6.5V35H30z M13,35V18h2.966C14.247,18,13,16.738,13,14.999C13,13.261,14.267,12,16.011,12	c1.696,0,2.953,1.252,2.989,2.979C19,16.733,17.733,18,15.988,18H19v17H13z"
                    opacity=".05"
                  ></path>
                  <path
                    d="M30.5,34.5V26c0-1.378-1.121-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v8.5h-5v-16h5v1.534	c1.09-0.977,2.512-1.534,4-1.534c3.309,0,6,2.691,6,6v10H30.5z M13.5,34.5v-16h5v16H13.5z M15.966,17.5	c-1.429,0-2.466-1.052-2.466-2.501c0-1.448,1.056-2.499,2.511-2.499c1.436,0,2.459,1.023,2.489,2.489	c0,1.459-1.057,2.511-2.512,2.511H15.966z"
                    opacity=".07"
                  ></path>
                  <path
                    fill="#fff"
                    d="M14,19h4v15h-4V19z M15.988,17h-0.022C14.772,17,14,16.11,14,14.999C14,13.864,14.796,13,16.011,13	c1.217,0,1.966,0.864,1.989,1.999C18,16.11,17.228,17,15.988,17z M35,24.5c0-3.038-2.462-5.5-5.5-5.5	c-1.862,0-3.505,0.928-4.5,2.344V19h-4v15h4v-8c0-1.657,1.343-3,3-3s3,1.343,3,3v8h4C35,34,35,24.921,35,24.5z"
                  ></path>
                </svg>
                </a>
              </li>
            </ul>
          </div>
          <Messenger></Messenger>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
