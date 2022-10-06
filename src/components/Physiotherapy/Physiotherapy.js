import React from 'react';
import Marque from '../Marque/Marque';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Landingphsio from './Landingphsio';
import Physioabout from './Physioabout';
import Teamphysio from './Teamphysio';
 

const Physiotherapy = () => {
    return (
        <div>
          <Landingphsio/>
          <Physioabout/>
          <Review></Review>
      <Success></Success>
      <Marque></Marque>
      <Teamphysio></Teamphysio>
        </div>
    );
};

export default Physiotherapy;