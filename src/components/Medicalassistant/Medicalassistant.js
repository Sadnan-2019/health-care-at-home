import React from 'react';
import Asistantlanding from './Asistantlanding';
import Asistentabout from './Asistentabout';
import Recoveryassistant from './Recoveryassistant';
import Review from "../Review/Review";
import Success from '../Success/Success';
import Teamassistant from './Teamassistant';
import Marque from '../Marque/Marque';

const Medicalassistant = () => {
    return (
        <div>
            <Asistantlanding/>
            <Asistentabout/>
            <Recoveryassistant/>
            <Review/>
            <Success/>
            <Marque></Marque> 
           
            <Teamassistant/>

        </div>
    );
};

export default Medicalassistant;