import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../Map/Map';
import emailjs from '@emailjs/browser';
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
    <div className=' py-14  '>
        <div className=" ">
          <h2 className="text-3xl text-center   font-bold poppins-b sm:text-4xl" style={{color: "#453364" }}>
           Contact 
          </h2>
          <h1 className=' w-32 h-1 rounded-lg mt-2 mb-4 mx-auto' style={{backgroundColor: "#453364" }}></h1>

          
        </div>
    

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-10  py-10 items-center justify-items-center">
          {/* left side */}

   
       

            <div >
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
         
            <form  method='post'  onSubmit={sendEmail} >
             <div className='flex gap-3'>
             <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                   
                  type="email"
                  name='email'
                  id='email'
                  placeholder="your email"
                  className="input input-bordered w-full max-w-xs"
                />
              
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                   
                  type="text"
                  name='name'
                  id='name'
                  placeholder="your name"
                  className="input input-bordered w-full max-w-xs"
                />
              
              </div>
             </div>
             <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                   
                  type="text"
                  name='phone'
                  id='phone'
                  required
                  placeholder="your phone"
                  className="input input-bordered w-full max-w-xs"
                />
              
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                   
                  type="text"
                  name='subject'
                  id='subject'
                  required
                  placeholder="your subject"
                  className="input input-bordered w-full max-w-xs"
                />
              
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                   
                  type="text"
                  name="message"
                  id='message'
                  required
                  placeholder="your message"
                  className="input input-bordered w-full max-w-xs h-32"
              
                ></textarea>
              
              </div>

     <div className='py-5'>
     <input type="submit" className="btn  w-full max-w-x " value="Send message" style={{backgroundColor: "#453364", color:"white" }}/>
     </div>
               
            </form>
 

       
          
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