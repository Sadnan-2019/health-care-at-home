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
    {/* <div className='grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-[60px] px-[30px] justify-items-center items-center'>


    <div class="    transition bg-white  shadow-md rounded-xl     ">
      <form class="  ">
       <div className='flex gap-3'>
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
            className="input border border-gray-300 bg-gray-200 h-12 form-control form-control-message h-32 "  
            
          ></textarea>
        </div>
        <div class="form-control mt-2">
          <button type="submit" class="btn  text-white" style={{backgroundColor: "#453364" }}>
            Submit
          </button>
          
        </div>
      </form>
    </div>
      
      <div   className=' py-10   mx-10'>



<Map  ></Map >
      </div>
      </div>  */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto   py-10 items-center justify-items-center">
          {/* left side */}

          <div className="  lg:[width:85%] md:w-[90%] py-8 rounded">
       

            <div >
               
              
              <div className="bg-opacity-30 lg:p-5 pt-10 rounded-lg bg-blue-900  ">
                
                 
           
                <div class=" w-full ">
                  <form   class=" ">
                  <div className='flex gap-3   items-center justify-items-center'>
                  <div class="form-control  sm:[w-25%] md:w-[50%]">
                      <label class="label">
                        <span class="label-text text-white">
                          Name <span className="text-warning">*</span>
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="name"
                        class="input border border-slate-400 bg-slate-800  text-white"
                      />
                    </div>
                    <div class="form-control sm:[w-25%] md:w-[50%]">
                      <label class="label">
                        <span class="label-text text-white">
                          Email <span className="text-warning">*</span>
                        </span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        required
                        placeholder="email"
                        class="input border border-slate-400 bg-slate-800  text-white"
                      />
                    </div>
                  </div>
                    
                    <div class="form-control sm:w-25%">
                      <label class="label">
                        <span class="label-text text-white">
                          Subject <span className="text-warning">*</span>
                        </span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        placeholder="subject"
                        class="input border border-slate-400 bg-slate-800  text-white"
                      />
                    </div>
                    <div class="form-control sm:w-25% ">
                      <label class="label">
                        <span class="label-text text-white">
                          Message <span className="text-warning">*</span>
                        </span>
                      </label>
                      <textarea
                        type="text"
                        name="message"
                        required
                        placeholder="message"
                        class="input border border-slate-400 bg-slate-800 h-32 text-white"
                      ></textarea>
                    </div>
                    <input class="sm:btn-sm btn   " type="submit" value="Send Message" style={{background:"#453364"}}/>
                  </form>
                </div>
              </div>
            </div>
          </div>



          <div className="   ">
           <div className=''>
            <Map></Map>
           </div>
          </div>

      

         
        </div>



    </div>
     );
};

export default Contact;