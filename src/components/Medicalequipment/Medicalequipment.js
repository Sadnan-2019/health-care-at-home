import React from 'react';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Medicalequipmentabout from './Medicalequipmentabout';
import Medicalequipmentlanding from './Medicalequipmentlanding';

const Medicalequipment = () => {
    return (
        <div>
            <Medicalequipmentlanding/>
            <Medicalequipmentabout/>
            <Review/>
            <Success/>
        </div>
    );
};

export default Medicalequipment;