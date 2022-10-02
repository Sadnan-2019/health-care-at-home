import React from 'react';
import doctor1 from '../../assets/homed.jpg'

const Team = () => {
     return (
          <div>
         <div className='bg-red-900'>
         <div className=" ">
          <h2 className="text-3xl text-center   font-bold poppins-b sm:text-4xl" style={{color: "#453364" }}>
          Meet Our Experts

          </h2>
          <h1 className=' w-32 h-1 rounded-lg mt-2 mb-4 mx-auto' style={{backgroundColor: "#453364" }}></h1>

          
        </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-10 gap-10  items-center justify-items-center  '>
               
            <div className="card w-92 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={doctor1}alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            <div className="card w-92 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={doctor1}alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            <div className="card w-92 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={doctor1}alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            <div className="card w-92 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={doctor1}alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
               
               </div>   
         </div>
          </div>
     );
};

export default Team;