import React from 'react';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Medicalequipmentabout from './Medicalequipmentabout';
import Medicalequipmentlanding from './Medicalequipmentlanding';
import Marque from '../Marque/Marque';

const Medicalequipment = () => {
    return (
        <div>
            <Medicalequipmentlanding/>
            <Medicalequipmentabout/>
            <Review/>
           
            <Success/>
            <Marque/>
        </div>
    );
};

export default Medicalequipment;