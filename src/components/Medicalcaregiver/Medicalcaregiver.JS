import React from 'react';
import Medicalcaregiverlanding from './Medicalcaregiverlanding';
import Medicalcaregiverabout from './Medicalcaregiverabout';
import Recoverymedicalcaregiver from './Recoverymedicalcaregiver';
import Teammedicalcaregiver from './Teammedicalcaregiver';
import Review from '../Review/Review';
import Success from '../Success/Success';
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