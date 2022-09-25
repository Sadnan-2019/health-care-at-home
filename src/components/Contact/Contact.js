import React from 'react';

const Contact = () => {
     return (
    <div className=' py-14'>
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
            class="input border border-gray-300 bg-gray-200 "
          ></textarea>
        </div>
        <div class="form-control mt-2">
          <button type="submit" class="btn btn-success">
            Submit
          </button>
          
        </div>
      </form>
    </div>
    </div>
     );
};

export default Contact;