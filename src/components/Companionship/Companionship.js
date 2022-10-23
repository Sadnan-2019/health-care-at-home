import React from 'react';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Companionshipabout from './Companionshipabout';
import Companionshiplanding from './Companionshiplanding';
// import Companionship from './Companionship';
import Teamcompanionship from './Teamcompanionship';
import Marque from '../Marque/Marque';

const Companionship = () => {
    return (
        <div>
            <Companionshiplanding/>
            <Companionshipabout/>
            {/* <Recoverycompanionship/> */}
             <Review/>
             <Success></Success>
                <Marque/>
             <Teamcompanionship/>
             
        </div>
    );
};

export default Companionship;