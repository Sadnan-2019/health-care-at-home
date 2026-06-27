import React from 'react';
import messenger from "../../assets/messenger.png"
import "./Messenger.css"
const Messenger = () => {
    const messengerLink = 'https://m.me/105187501050744';
    return (
        // <div> 
        //     <div>
        //     <a  rel="noreferrer" className="" target="_blank"  onClick={() => window.location.href = messengerLink}>
        //     <img title='babysitter for 24/7' src={messenger} alt='our homecare messenger'
        //       // onClick={gotoBtn}
        //       className=" float-right w-12 top-btn   cursor-pointer"
        //     />
        //   </a>
        //     </div>
        // </div>


        <div> 
            <div>
                {/* Changed onClick to an actual href for better accessibility/practice */}
                <a rel="noreferrer" target="_blank" href={messengerLink}>
                    <img 
                        title='babysitter for 24/7' 
                        src={messenger} 
                        alt='our homecare messenger'
                        // Changed float-right to float-left
                        className="float-left w-12 top-btn cursor-pointer" 
                    />
                </a>
            </div>
        </div>
    );
};

export default Messenger;