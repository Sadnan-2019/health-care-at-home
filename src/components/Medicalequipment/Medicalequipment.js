import React from 'react';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Medicalequipmentabout from './Medicalequipmentabout';
import Medicalequipmentlanding from './Medicalequipmentlanding';
import Marque from '../Marque/Marque';
import { Helmet } from 'react-helmet-async';

const Medicalequipment = () => {
    return (
        <div>

             <Helmet>
                    <title>Medicalequipment at Dhaka</title>
                    <meta
                      name="description"
                      content="Get top-quality professionals  healthcare services at home. Book professional doctors & caregivers online."
                    />
                    <meta
                      name="keywords"
                      content="healthcare,home care,home nursing care,top caregiver dhaka,physiotheray dhaka, home doctors, medical caregiver,Medicalequipment Bangladesh"
                    />
                    <meta name="robots" content="index, follow" />
                    <meta property="og:title" content="Medicalequipment at Dhaka" />
                    <meta
                      property="og:description"
                      content="Get top-quality healthcare services at home"
                    />
                    <meta
                      property="og:image"
                      content="http://localhost:3000/static/media/service-companionship.fe2c54273b549fcbe6e2.jpg"
                    />
                    <meta property="og:url" content="https://hcah.mrg.com.bd" />
                    <meta property="og:type" content="website" />.
                    <link rel="canonical" href="https://hcah.mrg.com.bd/medical-equipment" />
                  </Helmet>
            <Medicalequipmentlanding/>
            <Medicalequipmentabout/>
            <Review/>
           
            <Success/>
            <Marque/>
        </div>
    );
};

export default Medicalequipment;