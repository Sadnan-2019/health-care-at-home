import React from 'react';
import messenger from "../../assets/messenger.png"
import "./Messenger.css"
const Messenger = () => {
    const messengerLink = 'https://m.me/105187501050744';
    return (
        <div> 
            <div>
            <a className="" target="_blank"  onClick={() => window.location.href = messengerLink}>
            <img src={messenger}
              // onClick={gotoBtn}
              className=" float-right w-12 top-btn   cursor-pointer"
            />
          </a>
            </div>
        </div>
    );
};

export default Messenger;