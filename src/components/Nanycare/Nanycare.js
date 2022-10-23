import React from 'react';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Nanycareabout from './Nanycareabout';
import Nanycarelanding from './Nanycarelanding';
import Recoverynany from './Recoverynany';
import Teamnanycare from './Teamnanycare';
import Marque from '../Marque/Marque';

const Nanycare = () => {
    return (
        <div>
            <Nanycarelanding/>
            <Nanycareabout/>
            <Recoverynany/>
            <Review/>
            <Success/>
            <Marque/>
            <Teamnanycare/>
        </div>
    );
};

export default Nanycare;