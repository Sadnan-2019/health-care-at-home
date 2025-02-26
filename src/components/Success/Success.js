import React from "react";
import { FaTasks } from "react-icons/fa";

const Success = () => {
  return (
    <div className="blog bg-[#453364]" >
      <div
        className="grid grid-cols-1 py-10  "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="stats text-[#453364] ">
          <div className="stat">
            <div className="stat-figure  "  >
             
            </div>
            <div className="stat-value  "  >
              2,378+
            </div>
            <div className="text-[18px] font-bold"  >
              Successful recovery stories
            </div>
            
            {/* <div className="stat-desc text-1xl font-bold">
              21% more than last month
            </div> */}
          </div>
          <div className="stat">
            <div className="stat-figure  "  >
             
            </div>
            <div className="stat-value  "  >
              2000+
            </div>
            <div className="text-[18px] font-bold"  >
            HealthCare related man power in our platform
            </div>
            
            {/* <div className="stat-desc text-1xl font-bold">
              21% more than last month
            </div> */}
          </div>

         

       
        
          <div className="stat">
            <div className="stat-figure  "  >
             
            </div>
            <div className="stat-value  "  >
              3000+
            </div>
            <div className="text-[18px] font-bold"  >
              Medical assistant
            </div>
            
          
          </div>
          <div className="stat">
            <div className="stat-figure  "  >
             
            </div>
            <div className="stat-value  "  >
              150+
            </div>
            <div className="text-[18px] font-bold"  >
              Physiotherapists
            </div>
            
          
          </div>
          <div className="stat">
            <div className="stat-figure  "  >
             
            </div>
            <div className="stat-value  "  >
              200+
            </div>
            <div className="text-[18px] font-bold"  >
Nurses
            </div>
            
          
          </div>
          <div className="stat">
            <div className="stat-figure  "  >
             
            </div>
            <div className="stat-value  "  >
              250+
            </div>
            <div className="text-[18px] font-bold"  >
              Caregivers
            </div>
            
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
