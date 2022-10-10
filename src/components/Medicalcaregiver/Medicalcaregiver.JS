import React from 'react';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Medicalcaregiverabout from './Medicalcaregiverabout';
import Medicalcaregiverlanding from './Medicalcaregiverlanding';
import Recoverymedicalcaregiver from './Recoverymedicalcaregiver';
import Teammedicalcaregiver from './Teammedicalcaregiver';


const Medicalcaregiver = () => {
    return (
        <div>
            <Medicalcaregiverlanding/>
            <Medicalcaregiverabout/>
            <Recoverymedicalcaregiver/>
            <Review/>
            <Success/>
            <Teammedicalcaregiver/>
        </div>
    );
};

export default Medicalcaregiver;