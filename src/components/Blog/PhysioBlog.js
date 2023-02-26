import React from "react";
import cardiac1 from "../../assets/blogcardicac.jpeg";
import parkinson from "../../assets/parkinson1.webp";
import heart from "../../assets/heart_2.avif";
import { BsFacebook } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
// import { AiOutlineCaretRight } from "react-icons/ai";
import "animate.css";
import { Link } from "react-router-dom";
// import "./Blog.css";
// import(
//   "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;1,300&display=swap"
// );

const PhysioBlog = () => {
  return (
    <div>
      <div>
        <div className="blog">
          <div className=" grid grid-cols-1 lg:grid-cols-2   items-center justify-center px-5 gap-5">
            <div
              class="card  bg-gradient-to-r from-[#486038] to-[#38235D]   text-white mb-5 mt-12"
              style={{ height: "700px" }}
            >
              <img
                src={cardiac1}
                alt=""
                className="rounded-xl animate__animated animate__backInLeft     w-96 p-2  mx-auto"
                style={{ height: "250px", borderRadius: "25px" }}
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
                <div className="flex gap-3     ">
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
                <div className="   lg:flex  justify-between gap-5 lg:gap-8   ">
                  <div className="py-2      ">
                    <Link to="/cardiac-symptoms-causes">
                      <button
                        htmlFor="my-modal-6"
                        className="btn btn-sm lg:btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
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
                <div className="flex justify-between       ">
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
            <div
              class="card  bg-gradient-to-r from-[#486038] to-[#38235D]   text-white mb-5 mt-12"
              style={{ height: "700px" }}
            >
              <img
                src={parkinson}
                alt=""
                className="rounded-xl animate__animated animate__backInLeft     w-96 p-2  mx-auto"
                style={{ height: "250px", borderRadius: "25px" }}
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
                  cord and a massive network of nerves and neurons.Thus, any
                  damage or disorder of the brain can have multiple effects on
                  individuals' bodies with ranging severities--impact on memory,
                  sensation, personality, and life in general.
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

            <div
              class="card  bg-gradient-to-r from-[#486038] to-[#38235D]   text-white mb-5 mt-12"
              style={{ height: "700px" }}
            >
              <img
                src={heart}
                alt=""
                className="rounded-xl animate__animated animate__backInLeft     w-96 p-2  mx-auto"
                style={{ height: "250px", borderRadius: "25px" }}
              />
              <div class="card-body">
                <h2 class="card-title">
                  Heart attacks the most common cause of death in Bangladesh
                  last year: BBS{" "}
                </h2>
                <p className="text-justify">
                  Accounted for 21.1% of all deaths in 2020; 8,248 people die
                  from Covid-19 the same year A total of 8,54,253 people died
                  due to different causes in 2020 and around 21.1 percent died
                  of cardiac arrest, according to the Bangladesh Bureau of
                  Statistics (BBS). Some 1,80,408 people have died of heart
                  attacks, according to the data revealed by the BBS today. In
                  the same year, 85,360 people died of brain strokes while 8,248
                  people died from coronavirus infection, the BBS said. In 2019,
                  a total of 8,22,841 people died, the BBS added. Apart from
                  this, 32,075 people died in 2020 due to asthma while 38,290
                  died from the disease in 2019. A total of 786 deaths from
                  dengue have been reported in the last year while in 2019 some
                  2,360 people died of the mosquito-borne disease
                </p>
                <div className="flex gap-3     ">
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
                {/* <div className="flex justify-between gap-5 lg:gap-8   ">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysioBlog;
