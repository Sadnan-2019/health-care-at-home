import React from 'react';
import Medicalcaregiverabout from './Medicalcaregiverabout';
import Medicalcaregiverlanding from './Medicalcaregiverlanding';
import Recoverymedicalcaregiver from './Recoverymedicalcaregiver';


const Medicalcaregiver = () => {
    return (
        <div>
            <Medicalcaregiverlanding/>
            <Medicalcaregiverabout/>
            <Recoverymedicalcaregiver/>
        </div>
    );
};

export default Medicalcaregiver;