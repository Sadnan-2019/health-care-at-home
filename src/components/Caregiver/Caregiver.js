import React from 'react';
import Caregiverlanding from './Caregiverlanding';

import Caregiverabout from './Caregiverabout';
import "./Caregiver.css"
import Recoverycaregiver from './Recoverycaregiver';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Teamcaregiver from './Teamcaregiver';
import Marque from '../Marque/Marque';

 

const Caregiver = () => {
    return (
        <div>
            <Caregiverlanding/>
            <Caregiverabout/>
            <Recoverycaregiver/>
            <Review/>
            <Success/>
            <Marque/>
            <Teamcaregiver/>

       
        </div>
    );
};

export default Caregiver;