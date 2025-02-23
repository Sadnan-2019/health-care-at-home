import React from 'react';
import Caregiverlanding from './Caregiverlanding';

import Caregiverabout from './Caregiverabout';
import "./Caregiver.css"
import Recoverycaregiver from './Recoverycaregiver';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Teamcaregiver from './Teamcaregiver';
import Marque from '../Marque/Marque';
import { Helmet } from 'react-helmet-async';

 

const Caregiver = () => {
    return (
        <div>
              <Helmet>
                    <title>Caregiver at Dhaka</title>
                    <meta
                      name="description"
                      content="Get top-quality professionals  healthcare services at home. Book professional doctors & caregivers online."
                    />
                    <meta
                      name="keywords"
                      content="healthcare,home care,home nursing care,top caregiver dhaka,physiotheray dhaka, home doctors, medical caregiver"
                    />
                    <meta name="robots" content="index, follow" />
                    <meta property="og:title" content="Caregiver at Dhaka" />
                    <meta
                      property="og:description"
                      content="Get top-quality healthcare services at home"
                    />
                    <meta
                      property="og:image"
                      content="http://localhost:3000/static/media/service-caregive.f73bb16bcec38cd23239.jpg"
                    />
                    <meta property="og:url" content="https://hcah.mrg.com.bd" />
                    <meta property="og:type" content="website" />.
                    <link rel="canonical" href="https://hcah.mrg.com.bd" />
                  </Helmet>
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