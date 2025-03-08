import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../Map/Map';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css'; 
import { toast } from 'react-toastify';

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tcuiaj8', 'template_f6q11ak', e.target, 'Fr_p_4r1lKhl_KFYl')
      .then((result) => {
          console.log(result.text);
          toast("SEND SUCCESSFULLY")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }


     return (
    <div className=' py-14'>
        <div className="">
          <h2 className="text-3xl font-bold text-center poppins-b sm:text-4xl text-[#453364]"  >
           Contact 
          </h2>
          <h1 className='w-32 h-1 mx-auto mt-2 mb-4 rounded-lg bg-[#453364]'  ></h1>

          
        </div>
    

<div className="grid items-center grid-cols-1 px-10 py-10 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
          {/* left side */}

   
       

            <div >
            <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
          <div className="card-body">
         
            <form  method='post'  onSubmit={sendEmail} >
             <div className='flex gap-3'>
             <div className="w-full max-w-xs form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                   
                  type="email"
                  name='email'
                  id='email'
                  placeholder="your email"
                  className="w-full max-w-xs input input-bordered"
                />
              
              </div>

              <div className="w-full max-w-xs form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                   
                  type="text"
                  name='name'
                  id='name'
                  placeholder="your name"
                  className="w-full max-w-xs input input-bordered"
                />
              
              </div>
             </div>
             <div className="w-full max-w-xs form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                   
                  type="text"
                  name='phone'
                  id='phone'
                  required
                  placeholder="your phone"
                  className="w-full max-w-xs input input-bordered"
                />
              
              </div>
              <div className="w-full max-w-xs form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                   
                  type="text"
                  name='subject'
                  id='subject'
                  required
                  placeholder="your subject"
                  className="w-full max-w-xs input input-bordered"
                />
              
              </div>
              <div className="w-full max-w-xs form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                   
                  type="text"
                  name="message"
                  id='message'
                  required
                  placeholder="your message"
                  className="w-full h-32 max-w-xs input input-bordered"
              
                ></textarea>
              
              </div>

     <div className='py-5'>
     <input type="submit" className="w-full btn max-w-x bg-[#453364] text-white" value="Send message"  />
     </div>
               
            </form>
 

       
          
          </div>
        </div>
              
            </div>
 



          <div className="">
           <div className=''>
            <Map></Map>
           </div>
          </div>

      

         
        </div>



    </div>
     );
};

export default Contact;