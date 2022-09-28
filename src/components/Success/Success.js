import React from 'react';
import { FaTasks } from "react-icons/fa";

const Success = () => {
     return (
          <div style={{backgroundColor: "#453364" }}>

<div className='grid grid-cols-1 py-10 mx-14' data-aos="fade-up"
            data-aos-duration="1000" >
               <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure  " style={{  color:"#453364" }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="text-2xl font-bold"style={{  color:"#453364" }}>Successful recovery stories</div>
    <div className="stat-value  "style={{  color:"#453364" }}>25.6K</div>
    <div className="stat-desc text-1xl font-bold">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure  " style={{  color:"#453364" }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="text-2xl font-bold"style={{  color:"#453364" }}>Page Views</div>
    <div className="stat-value text-secondary" style={{  color:"#453364" }}>2.6M</div>
    <div className="stat-desc text-1xl font-bold" >21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className=" text-secondary">
      <div className="avatar  ">
        <div className="w-16 rounded-full" style={{  color:"#453364" }}>
      <FaTasks/>
        </div>
      </div>
    </div>
    <div className="stat-value" style={{  color:"#453364" }}>86%</div>
    <div className="stat-title text-1xl font-bold">Tasks done</div>
    <div className="stat-desc text-1xl font-bold">31 tasks remaining</div>
  </div>
  
</div>
          </div>
          </div>
     );
};

export default Success;