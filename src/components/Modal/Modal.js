import React from "react";

const Modal = () => {
  return (


    
    <div>
      <label htmlFor="my-modal-6" className="btn modal-button">
        service details
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-56 bg-green-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
            <div>
            
           <li>Total Nursing Care</li>
            <li>IV Cannula insertion</li>
            <li>NG-tube insertion</li>
            <li>Catheterization</li>
            <li>Dressing wounds</li>
            <li>Oxygen support</li>
            <li>Maintain health records</li>
         
            </div>
            <div>
             <img src="https://images.saymedia-content.com/.image/t_share/MTc0MTU0Mzc4MDU0MjE1MTY0/what-is-nursing-care.jpg" alt=""/>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              close!
            </label>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Modal;
