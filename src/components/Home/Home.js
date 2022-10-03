import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Faq from '../Faq/Faq';
import Landing from '../Landing/Landing';
import Map from '../Map/Map';
import Marque from '../Marque/Marque';

import Review from '../Review/Review';
import Service from '../Service/Service';
import Success from '../Success/Success';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <Service></Service>
            <Review></Review>
            
            <Success></Success>
            <Marque></Marque> 
<Team></Team>
            <About></About>
            <Faq></Faq>
            <Contact></Contact>
            {/* <Map></Map> */}
            {/* <Modal/> */}
        </div>
    );
};

export default Home;