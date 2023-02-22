import React from "react";
import cardiac1 from "../../assets/blogcardicac.jpeg";
// import weightloss from "../../assets/waitloss.png";
// import doctor3 from "../../assets/ziauddin.jpg";
// import doctor4 from "../../assets/anwar.jpg";
import { BsFacebook } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
// import { AiOutlineCaretRight } from "react-icons/ai";
import "animate.css";
import { Link } from "react-router-dom";

const PhysioBlog = () => {
  return (
    <div>
      <div>
        <div className="">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mx-10 gap-10  items-center justify-items-center  py-12">
            <div class="card  bg-gradient-to-r from-[#486038] to-[#38235D]   text-white mb-5 mt-12">
              <img
                src={cardiac1}
                alt=""
                className="rounded-xl animate__animated animate__backInLeft     w-96 p-2  mx-auto"
              />
              <div class="card-body">
                <h2 class="card-title">
                  Sudden Cardiac Death (Sudden Cardiac Arrest)
                </h2>
                <p className="text-justify">
                  Sudden cardiac arrest is an emergency in which your heart
                  suddenly stops beating. An electrical issue makes your heart
                  stop pumping blood. This leaves your cells unable to receive
                  the oxygen they need. Because of the lack of oxygen to your
                  cells, sudden cardiac arrest can turn fatal in just minutes.
                  Survival odds are best when help is immediate.
                </p>
                <div className="flex gap-3    mt-5">
                  <BsFacebook
                    className="lg:text-2xl text-[20px] "
                    style={{ color: "white" }}
                  />
                  <RxLinkedinLogo
                    className="lg:text-2xl text-[20px] "
                    style={{ color: "white" }}
                  />
                  <AiFillTwitterCircle
                    className="lg:text-2xl text-[20px] "
                    style={{ color: "white" }}
                  />
                  <FaWhatsappSquare
                    className="lg:text-2xl text-[20px] "
                    style={{ color: "white" }}
                  />
                </div>
                <div className="flex justify-between gap-5 lg:gap-8   ">
                  <div className="py-2      ">
                    <Link to="/cardiac-symptoms-causes">
                      <button
                        htmlFor="my-modal-6"
                        className="btn lg:btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                        style={{ backgroundColor: "#453364" }}
                      >
                        Symptoms and Causes{" "}
                      </button>
                    </Link>
                  </div>
                  <div className="py-2       ">
                    <Link to="/diagnosis-tests">
                      <button
                        htmlFor="my-modal-6"
                        className="btn lg:btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                        style={{ backgroundColor: "#453364" }}
                      >
                        Diagnosis and Tests{" "}
                      </button>
                    </Link>
                  </div>
                  <div className="py-2        ">
                    <Link to="/management-treatment">
                      {/* Management and Treatment */}
                      <button
                        htmlFor="my-modal-6"
                        className="btn lg:btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                        style={{ backgroundColor: "#453364" }}
                      >
                        Management and Treatment{" "}
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between   gap-10    ">
                  <div className="py-2  lg:px-3     ">
                    <Link to="/prevention">
                      <button
                        htmlFor="my-modal-6"
                        className="btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                        style={{ backgroundColor: "#453364" }}
                      >
                        Prevention{" "}
                      </button>
                    </Link>
                  </div>

                  <div className="py-2       ">
                    <Link to="/living-with">
                      <button
                        htmlFor="my-modal-6"
                        className=" btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                        style={{ backgroundColor: "#453364" }}
                      >
                        Living With{" "}
                      </button>
                    </Link>
                  </div>
                  <div className="py-2         ">
                    <Link to="/prognosis">
                      <button
                        htmlFor="my-modal-6"
                        className="btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                        style={{ backgroundColor: "#453364" }}
                      >
                        Outlook / Prognosis{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="card  bg-gradient-to-r from-[#486038] to-[#38235D]   text-white mb-5 mt-12">
              <img
                src={cardiac1}
                alt=""
                className="rounded-xl animate__animated animate__backInLeft     w-96 p-2  mx-auto"
              />
              <div class="card-body">
                <h2 class="card-title">
                  Understanding Parkinson’s disease and ways it can be
                  controlled
                </h2>
                <p className="text-justify">
                  The human brain is an engineering marvel and the most complex
                  biological structure in the universe. It is the body's control
                  centre and part of the nervous system, including the spinal
                  cord and a massive network of nerves and neurons.  
                </p>
                <div className="flex gap-3    mt-5">
                  <BsFacebook
                    className="lg:text-2xl text-[20px] "
                    style={{ color: "white" }}
                  />
                  <RxLinkedinLogo
                    className="lg:text-2xl text-[20px] "
                    style={{ color: "white" }}
                  />
                  <AiFillTwitterCircle
                    className="lg:text-2xl text-[20px] "
                    style={{ color: "white" }}
                  />
                  <FaWhatsappSquare
                    className="lg:text-2xl text-[20px] "
                    style={{ color: "white" }}
                  />
                </div>
                
                <div className="flex justify-end        ">
                  <div className="py-2  lg:px-3     ">
                    <Link to="/blogthree">
                      <button
                        htmlFor="my-modal-6"
                        className="btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                        style={{ backgroundColor: "#453364" }}
                      >
                        Read More{" "}
                      </button>
                    </Link>
                  </div>

                  {/* <div className="py-2       ">
                    <Link to="/living-with">
                      <button
                        htmlFor="my-modal-6"
                        className=" btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                        style={{ backgroundColor: "#453364" }}
                      >
                        Living With{" "}
                      </button>
                    </Link>
                  </div>
                  <div className="py-2         ">
                    <Link to="/prognosis">
                      <button
                        htmlFor="my-modal-6"
                        className="btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                        style={{ backgroundColor: "#453364" }}
                      >
                        Outlook / Prognosis{" "}
                      </button>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysioBlog;
