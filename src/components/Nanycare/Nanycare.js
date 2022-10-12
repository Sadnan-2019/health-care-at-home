import React from 'react';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Nanycareabout from './Nanycareabout';
import Nanycarelanding from './Nanycarelanding';
import Recoverynany from './Recoverynany';
import Teamnanycare from './Teamnanycare';

const Nanycare = () => {
    return (
        <div>
            <Nanycarelanding/>
            <Nanycareabout/>
            <Recoverynany/>
            <Review/>
            <Success/>
            <Teamnanycare/>
        </div>
    );
};

export default Nanycare;