import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import PhysioBlog from "./PhysioBlog";
import "./Blog.css"  
// import ('https://fonts.googleapis.com/css2?family=Merriweather:wght@600&display=swap');
 
  // import  ('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,100&display=swap');
 
//  import ('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@900;display=swap');
 
import ('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;1,300&display=swap');
 
 
// import ('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,100&display=swap');
 
  // import ('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');
 
const Blog = () => {
  return (
    <div className="blog">
      {/* <h2 className="text-center text-4xl font bold py-6 "> </h2> */}
      <h2
        className="text-3xl text-center   mt-10 font-bold poppins-b sm:text-4xl"
        style={{ color: "#453364" }}
      >
        Our Blog
      </h2>
      <PhysioBlog></PhysioBlog>

      {/* <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 px-12">
        <div class="card  bg-gradient-to-r from-[#486038] to-[#38235D] shadow-xl  text-white mb-5 mt-12">
          <img
            src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/dd-20230110120818.jpg"
            alt=""
          />
          <div class="card-body">
            <h2 class="card-title">রোগীর দোরগোড়ায় স্বাস্থ্যসেবা</h2>
            <p>
              ষাটোর্ধ্ব জাহানারা বেগম থাকেন গুলশানে। বিশাল বাসায় সারাদিন একাই
              থাকতে হয় তাকে। অবশ্য তাকে সহায়তা করার জন্য আছেন কয়েকজন গৃহকর্মী।
              একমাত্র সন্তান রাফসান জামান জীবিকার তাগিদে স্ত্রী সন্তান নিয়ে
              থাকেন যুক্তরাষ্ট্রে। ইদানিং বয়সের ভারে জাহানারা বেগমের শরীর আর
              আগের মতো সাড়া দেয় না। ওদিকে ছেলেও সব সময় মায়ের স্বাস্থ্য নিয়ে
              দুঃশ্চিন্তা করেন।
            </p>
            <div className="flex gap-3    mt-5">
           < BsFacebook  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < RxLinkedinLogo  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < AiFillTwitterCircle  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < FaWhatsappSquare  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
           </div>
            <div className="py-2 px-5   flex justify-end">
              <Link to="/blogone">
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
        <div class="card  bg-gradient-to-r from-[#486038] to-[#38235D] shadow-xl  text-white mb-5 mt-12">
          <img
            src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/dd-20230110120818.jpg"
            alt=""
          />
          <div class="card-body">
            <h2 class="card-title">
              Healthcare services at your doorstep riding on power of technology
            </h2>
            <p>
              Jahanara Begum (65) lives in Gulshan. She has to stay alone all
              day in a big house. However, there are some domestic helps to help
              him. Rafsan Zaman, the only child, lives in America with his wife
              and children in order to earn a living.
            </p>
           <div className="flex gap-3    mt-5">
           < BsFacebook  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < RxLinkedinLogo  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < AiFillTwitterCircle  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < FaWhatsappSquare  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
           </div>
            <div className="py-2 px-5   flex justify-end">

           
              <Link to="/blogtwo">
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
      </div> */}

      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 px-12">
        <div class="card  bg-gradient-to-r from-[#486038] to-[#38235D] shadow-xl  text-white mb-5 mt-12">
          <div class="card-body">
            <h2 class="card-title">Health is wealth</h2>
            <p className="font-bold ">
              Health is the primary factor that contributes to the success of
              any individual. The adage “Good health is above wealth” may be
              oft-repeated, but its underlying truth cannot be overstated.
              Several global powers such as the UK, U.S. and China have highly
              efficient healthcare systems that are mostly from the
              public-sector. However, people in poorer countries like Bangladesh
              have to depend on the private sector for best-possible healthcare
              facilities.
            </p>
            <div className="flex gap-3    mt-5">
           < BsFacebook  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < RxLinkedinLogo  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < AiFillTwitterCircle  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < FaWhatsappSquare  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
           </div> 
          </div>
          
        </div>
        <div class="card  bg-gradient-to-r from-[#486038] to-[#38235D] shadow-xl  text-white mb-5 mt-12">
          <div class="card-body">
            <h2 class="card-title">Lessons from pandemic </h2>
            <p>
              The Covid-19 pandemic taught us a lot of things and the most
              important of them was to be more careful about health. While
              individuals met the challenge by being more responsible, the
              health sector in Bangladesh responded to the crisis by evolving
              new and advanced modules to provide better healthcare services.
              One of the new ideas implemented with the help of advanced
              technology was providing healthcare services at home. This type of
              healthcare has been well appreciated and accepted in most
              countries, including Bangladesh.
            </p>
            <div className="flex gap-3    mt-5">
           < BsFacebook  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < RxLinkedinLogo  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < AiFillTwitterCircle  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < FaWhatsappSquare  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
           </div>
          </div>
        </div>
      </div>

      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 px-12">
        <div class="card  bg-gradient-to-r from-[#486038] to-[#38235D] shadow-xl  text-white mb-5 mt-12">
          <div class="card-body">
            <h2 class="card-title">HCAH: A revolutionary healthcare idea</h2>
            <p>
              HealthCare At Home Bangladesh is an organization formed in late
              2019, which started operations in February 2020. It has been
              trying to revolutionize healthcare delivery at doorsteps in
              Bangladesh. Health Care at Home Bangladesh (HCAH) provides at-home
              health care services, including Nursing, Medical caregiving,
              Physiotherapy, Medical Assistant, Counseling, Companionship, and
              Medical Equipment services. HCAH was effective during the Covid-19
              pandemic when most hospitals were filled to capacity. The company
              has served over 500 clients with over 1,000 healthcare
              professionals, many of whom are affiliated to renowned medical
              institutions.
            </p>
            <div className="flex gap-3    mt-5">
           < BsFacebook  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < RxLinkedinLogo  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < AiFillTwitterCircle  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < FaWhatsappSquare  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
           </div>
          </div>
        </div>
        <div class="card  bg-gradient-to-r from-[#486038] to-[#38235D] shadow-xl  text-white mb-5 mt-12">
          <div class="card-body">
            <h2 class="card-title">Committed to serve anytime, anywhere</h2>
            <p>
              The operation module of the company is unique and transparent. Any
              potential client can reach the company via hotline numbers,
              Facebook, LinkedIn, or our website 24x7. The company then
              validates the patient’s health situation and customizes a health
              plan. A list of suitable service providers are chosen and provided
              to the clientele. The client gets the freedom to choose their
              candidate, an option that is rare in the Bangladeshi healthcare
              sector. After finalizing formalities including payment and
              documentation, the service provider is assigned to the client’s
              home. The company assures 24/7 monitoring and supervision of both
              the client and the service provider, ensuring total security.
              There are huge benefits in availing of services from companies
              like HCAH
            </p>
            <div className="flex gap-3    mt-5">
           < BsFacebook  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < RxLinkedinLogo  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < AiFillTwitterCircle  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < FaWhatsappSquare  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
           </div>
          </div>
        </div>
      </div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 px-12">
        <div class="card  bg-gradient-to-r from-[#486038] to-[#38235D] shadow-xl  text-white mb-5 mt-12">
          <div class="card-body">
            <h2 class="card-title">Special services, commitment to nation</h2>
            <p>
              HCAH also brings to you -- for the first time in Bangladesh --
              special care facilities for differently-abled kids and dementia
              patients at home. Our focus is not only limited to providing
              quality services to patients. Our institute is also offering BSc
              degree through State College of Health Sciences, affiliated to
              Dhaka University, to create skilled manpower to cater to the
              growing needs of the healthcare industry in Bangladesh.
            </p>
            <div className="flex gap-3    mt-5">
           < BsFacebook  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < RxLinkedinLogo  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < AiFillTwitterCircle  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < FaWhatsappSquare  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
           </div>
          </div>
        </div>
        <div class="card  bg-gradient-to-r from-[#486038] to-[#38235D] shadow-xl  text-white mb-5 mt-12">
          <div class="card-body">
            <h2 class="card-title">HCAH: Quality services assured </h2>
            <p>
              The services are affordable, dedicated, and customized for each
              individual client. It also ensures the quality of service
              providers by ensuring certification, training, and verification of
              their work experience and identity, respectively. Limitations such
              as providing patients with the correct healthcare plan and
              personal monitoring services in real-time, and providing necessary
              logistical support, can be solved through the operation module
              adopted by HCAH
            </p>
            <div className="flex gap-3    mt-5">
           < BsFacebook  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < RxLinkedinLogo  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < AiFillTwitterCircle  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
            < FaWhatsappSquare  className="lg:text-2xl text-[20px] " style={{  color:"white" }}/>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
