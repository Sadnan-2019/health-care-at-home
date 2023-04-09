import React from "react";
import cardiac1 from "../../assets/blogcardicac.jpeg";
import parkinson from "../../assets/parkinson1.webp";
import heart from "../../assets/heart_2.avif";
import stroke from "../../assets/Brain-Attack-Strok blog.jpg";
import sholder from "../../assets/shoulder-pain.jpg";
import Elbow from "../../assets/Elbow-Pain-blog.jpeg";
import Dry from "../../assets/DRY-NEEDLING.jpg";
import REFLEXOLOGY from "../../assets/Reflexology.jpg";
import manualtherapy from "../../assets/manual-therapy.jpg";
import { BsFacebook } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
// import { AiOutlineCaretRight } from "react-icons/ai";
import "animate.css";
// animate__animated animate__backInLeft
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
                <div className="   flex    justify-between gap-5 lg:gap-8   ">
                  <div className="py-2      ">
                    <Link to="/cardiac-symptoms-causes">
                      <button
                        htmlFor="my-modal-6"
                        className="btn btn-xs	lg:btn-xs modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
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
                        className="btn btn-xs	 lg:btn-xs modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
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
                        className="btn 	btn-xs lg:btn-xs modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                        style={{ backgroundColor: "#453364" }}
                      >
                        Management and Treatment{" "}
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between   sm:gap-5	lg:gap-5      ">
                  <div className="py-2  lg:px-3     ">
                    <Link to="/prevention">
                      <button
                        htmlFor="my-modal-6"
                        className="btn btn-xs	 lg:btn-xs modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
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
                        className=" btn btn-xs	lg:btn-xs modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
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
                        className="btn btn-xs	 lg:btn-xs modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
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

            <div
              class="card  bg-gradient-to-r from-[#486038] to-[#38235D]   text-white mb-5 mt-12"
              style={{ height: "700px" }}
            >
              <img
                src={stroke}
                alt=""
                className="rounded-xl animate__animated animate__backInLeft     w-96 p-2  mx-auto"
                style={{ height: "250px", borderRadius: "25px" }}
              />
              <div class="card-body">
                <h2 class="card-title">
                  Stroke: Treatment and prevention through awareness
                </h2>
                <p className="text-justify">
                  If you had to do all your daily work without using your one
                  hand, one leg, and one portion of the face, you might be able
                  to imagine how critically stroke-affected patients have to
                  spend their lives.A brain stroke causes a severe medical
                  condition due to complications in the brain’s blood vessels.
                  The cells in our brains are extremely sensitive. Even a little
                  lack in the supply of oxygen and carbohydrate causes the cells
                  to start to decay. If the blood flow to any part of the brain
                  is hampered (except due to injuries) and continues to sustain
                  for twenty-four hours or the patient dies by twenty-four hours
                  – then it might be a case of a stroke.
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
                    <Link to="/strokeblog">
                      <button
                        htmlFor="my-modal-6"
                        className="btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                        style={{ backgroundColor: "#453364" }}
                      >
                        Read More{" "}
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
                src={sholder}
                alt=""
                className="rounded-xl animate__animated animate__backInLeft     w-96 p-2  mx-auto"
                style={{ height: "250px", borderRadius: "25px" }}
              />
              <div class="card-body">
                <h2 class="card-title">Shoulder Pain</h2>
                <p className="text-justify">
                  The shoulder has a wide and versatile range of motion. When
                  something goes wrong with your shoulder, it hampers your
                  ability to move freely and can cause a great deal of pain and
                  discomfort. The shoulder joint is the most mobile joint in the
                  body. It moves the shoulder forward and backward. It also
                  allows the arm to move in a You can injure your shoulder by
                  performing manual labor, playing sports, or even by repetitive
                  movement. Certain diseases can bring about pain that travels
                  to the shoulder. These include diseases of the cervical spine
                  of the neck, as well as liver, heart, or gallbladder disease.
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

                {/* <div className="flex justify-end        ">
                  <div className="py-2  lg:px-3     ">
                    <Link to="/strokeblog">
                      <button
                        htmlFor="my-modal-6"
                        className="btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                        style={{ backgroundColor: "#453364" }}
                      >
                        Read More{" "}
                      </button>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <div
              class="card  bg-gradient-to-r from-[#486038] to-[#38235D]   text-white mb-5 mt-12"
              style={{ height: "700px" }}
            >
              <img
                src={Elbow}
                alt=""
                className="rounded-xl animate__animated animate__backInLeft     w-96 p-2  mx-auto"
                style={{ height: "250px", borderRadius: "25px" }}
              />
              <div class="card-body">
                <h2 class="card-title">Elbow Pain</h2>
                <p className="text-justify">
                  Elbow pain can be caused by many problems. A common cause in
                  adults is tendinitis. This is inflammation and injury to the
                  tendons, which are soft tissues that attach muscle to bone.
                  People who play racquet sports are most likely to injure the
                  tendons on the outside of the elbow. This condition is
                  commonly called tennis elbow. Golfers are more likely to
                  injure the tendons on the inside of the elbow. Other common
                  causes of elbow tendinitis are gardening, playing baseball,
                  using a screwdriver, or overusing your wrist and arm. Our
                  physiotherapist may suggest ways to protect the elbow during
                  your activities. Our overall goal is to help your elbow injury
                  heal as soon as possible.
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

                {/* <div className="flex justify-end        ">
                  <div className="py-2  lg:px-3     ">
                    <Link to="/strokeblog">
                      <button
                        htmlFor="my-modal-6"
                        className="btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                        style={{ backgroundColor: "#453364" }}
                      >
                        Read More{" "}
                      </button>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <div
              class="card  bg-gradient-to-r from-[#486038] to-[#38235D]   text-white mb-5 mt-12"
              style={{ height: "700px" }}
            >
              <img
                src={Dry}
                alt=""
                className="rounded-xl animate__animated animate__backInLeft     w-96 p-2  mx-auto"
                style={{ height: "250px", borderRadius: "25px" }}
              />
              <div class="card-body">
                <h2 class="card-title">WHAT IS DRY NEEDLING?</h2>
                <p className="text-justify">
                  Dry needling, also known as myofascial trigger point dry
                  needling is the use of either solid filiform needles (also
                  referred to as acupuncture needles) or hollow-core hypodermic
                  needles for therapy of muscle pain, including pain related to
                  myofascial pain syndrome. Dry needling is sometimes also known
                  as intramuscular stimulation (IMS). Acupuncture is a broad
                  category of needling practices with solid filiform needles.
                  Modern acupuncture notably includes both traditional and
                  Western medical acupuncture; dry needling is arguably one
                  subcategory of western medical acupuncture.
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

                {/* <div className="flex justify-end        ">
                  <div className="py-2  lg:px-3     ">
                    <Link to="/strokeblog">
                      <button
                        htmlFor="my-modal-6"
                        className="btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                        style={{ backgroundColor: "#453364" }}
                      >
                        Read More{" "}
                      </button>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <div
              class="card  bg-gradient-to-r from-[#486038] to-[#38235D]   text-white mb-5 mt-12"
              style={{ height: "700px" }}
            >
              <img
                src={REFLEXOLOGY}
                alt=""
                className="rounded-xl animate__animated animate__backInLeft     w-96 p-2  mx-auto"
                style={{ height: "250px", borderRadius: "25px" }}
              />
              <div class="card-body">
                <h2 class="card-title">BRIEF HISTORY OF REFLEXOLOGY</h2>
                <p className="text-justify">
                  Findings show that reflexology was practiced as early as 2330
                  BC by the ancient Egyptian culture. It is here that the
                  origins of reflexology were developed. This is evidenced by
                  the famous pictograph found on a physician’s tomb in Sarrara,
                  Egypt. From Egypt it is believe that reflexology spread into
                  India and from there in 100 AD, reflexology had spread to
                  China via Buddhist monks. China developed its own techniques
                  in reflexology and out of this comes the modern day
                  acupuncture. As trade between regions and continents grew,
                  reflexology spread. It finally made its way to Europe and in
                  1582 the first book of reflexology was produced by two
                  doctors. It was believed at this time many middle Europeans
                  were using some form of reflexology.
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

                {/* <div className="flex justify-end        ">
                  <div className="py-2  lg:px-3     ">
                    <Link to="/strokeblog">
                      <button
                        htmlFor="my-modal-6"
                        className="btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                        style={{ backgroundColor: "#453364" }}
                      >
                        Read More{" "}
                      </button>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <div
              class="card  bg-gradient-to-r from-[#486038] to-[#38235D]   text-white mb-5 mt-12"
              style={{ height: "700px" }}
            >
              <img
                src={manualtherapy}
                alt=""
                className="rounded-xl animate__animated animate__backInLeft     w-96 p-2  mx-auto"
                style={{ height: "250px", borderRadius: "25px" }}
              />
              <div class="card-body">
                <h2 class="card-title">Manual Therapy
</h2>
                <p className="text-justify">
                  Manual therapy, or manipulative therapy,is a physical
                  treatment primarily used by physiotherapistst and manual
                  therapist treat musculoskeletal pain and disability; it most
                  commonly includes kneading and manipulation of muscles, joint
                  mobilization and joint manipulation. The three most notable
                  forms of manual therapy are manipulation, mobilization and
                  massage. Manipulation is the artful introduction of a rapid
                  rotational, shear or distraction force into an articulation.
                  Manipulation is often associated with an audible popping sound
                  caused by the instantaneous breakdown of gas bubbles that form
                  during joint cavitation.[citation needed] Mobilization is a
                  slower, more controlled process of articular and soft-tissue
                  (myofascial) stretching intended to improve bio-mechanical
                  elasticity. Massage is typically the repetitive rubbing,
                  stripping or kneading of myofascial tissues to principally
                  improve interstitial fluid dynamics.
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

                {/* <div className="flex justify-end        ">
                  <div className="py-2  lg:px-3     ">
                    <Link to="/strokeblog">
                      <button
                        htmlFor="my-modal-6"
                        className="btn btn-sm modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
                        style={{ backgroundColor: "#453364" }}
                      >
                        Read More{" "}
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
