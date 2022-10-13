import React from 'react';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Companionshipabout from './Companionshipabout';
import Companionshiplanding from './Companionshiplanding';
// import Recoverycompanionship from './Recoverycompanionship';

const Companionship = () => {
    return (
        <div>
            <Companionshiplanding/>
            <Companionshipabout/>
            {/* <Recoverycompanionship/> */}
             <Review/>
             <Success></Success>
             
        </div>
    );
};

export default Companionship;