import React from 'react';
import Map from '../Map/Map';

const Contact = () => {
     return (
    <div className=' py-14  '>
        <div className=" ">
          <h2 className="text-3xl text-center   font-bold poppins-b sm:text-4xl" style={{color: "#453364" }}>
           Contact 
          </h2>
          <h1 className=' w-32 h-1 rounded-lg mt-2 mb-4 mx-auto' style={{backgroundColor: "#453364" }}></h1>

          
        </div>
    <div className='grid grid-cols-1 lg:grid-cols-2 mx-10 gap-10'>


    <div class="card  transition bg-white  shadow-md rounded-xl mx-auto w-1/2  ">
      <form class="card-body   ">
        <div class="form-control ">
          <label class="label">
            <span class="label-text ">
              Name <span className="text-warning">*</span>
            </span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Type your name"
            class="input border border-gray-300 bg-gray-200 "
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">
              Email <span className="text-warning">*</span>
            </span>
          </label>
          <input
            type="text"
            name="email"
            required
            placeholder="Type your email"
            class="input border border-gray-300 bg-gray-200 "
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">
              Address <span className="text-warning">*</span>
            </span>
          </label>
          <input
            type="text"
            name="address"
            required
            placeholder="address"
            class="input border border-gray-300 bg-gray-200 "
          />
          <label class="label">
            <span class="label-text ">
             Message
              <span className="text-warning">*</span>
            </span>
          </label>
          <textarea
            type="text"
            name="message"
            required
            placeholder="message"
            class="input border border-gray-300 bg-gray-200 h-12 form-control form-control-message " rows="10"
            
          ></textarea>
        </div>
        <div class="form-control mt-2">
          <button type="submit" class="btn  text-white" style={{backgroundColor: "#453364" }}>
            Submit
          </button>
          
        </div>
      </form>
    </div>
      
      <div>



<Map></Map >
      </div>
      </div> 
    </div>
     );
};

export default Contact;