import React from "react";

const Faq = () => {
  return (
    <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-items-center py-8">
          <div className="mx-[80px]">
            <h2
              className="text-3xl text-center   font-bold poppins-b sm:text-4xl py-5"
              style={{ color: "#453364" }}
            >
              Frequently Asked Questions
            </h2>
            <div
              tabIndex={0}
              className="collapse collapse-plus  bg-base-100 rounded-box mb-5 "
            >
              <div className="collapse-title text-[18px] lg:text-[20px] font-medium  ">
                I would like to get all services at home. How is it possible?
              </div>
              <div className="collapse-content text-[15px] lg:text-[18px]">
                <li>Contact us and talk to our expert</li>
                <li>Select service after baseline evaluation</li>
                <li>Paying for the service</li>
                <p className="mt-5">
                  Our expert will suggest what is best for your specific needs:
                  Recovery Program at home or Center based care.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-plus  bg-base-100 rounded-box mb-5 "
            >
              <div className="collapse-title text-[18px] lg:text-[20px] font-medium  ">
                I am not sure which program fits my needs. What should I do?
              </div>
              <div className="collapse-content text-[15px] lg:text-[18px]">
                <p className="mt-5">
                  Talk to our expert on 01619848555 or visit your nearest HCAH
                  Care Center
                </p>
                <p className="mt-5">
                  They will understand your requirement and suggest the best
                  course of action
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-plus  bg-base-100 rounded-box mb-5 "
            >
              <div className="collapse-title text-[18px] lg:text-[20px] font-medium  ">
                Are all your professionals medically trained?
              </div>
              <div className="collapse-content text-[15px] lg:text-[18px]">
                <p className="mt-5 text-justify">
                  We have certified,registered, and experienced professionals
                  including doctors,nurses,physiotherapists,caregiver,medical
                  assistant,medical caregiver.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-plus  bg-base-100 rounded-box mb-5 "
            >
              <div className="collapse-title text-[18px] lg:text-[20px] font-medium  ">
                What is the difference between recovery at the HCAH care center
                and at the hospital?
              </div>
              <div className="collapse-content text-[15px] lg:text-[18px]">
                <p className="mt-5 text-justify">
                  The objective of treatment at the hospital is to save your life.
                  You are discharged from the hospital once you are medically
                  stable..
                </p>
                <p className="mt-5 text-justify">
                  The objective of the HCAH care center is to rebuild the
                  physical, functional, and cognitive abilities you've lost
                  because of the disease and its the treatment so that you can
                  return to normal life again.
                </p>
                <p className="mt-5 text-justify">
                  When you are discharged from the HCAH care center, you are not
                  just medically stable, you are physically, mentally, and
                  emotionally healthy.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="rounded"
              src="https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2020/04/07/burn_hospital_salahuddin_ahmed_2.jpg?itok=-XDbK1lX&timestamp=1586250124"
              alt=""
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          </div>
        </div>
    </div>
  );
};

export default Faq;
