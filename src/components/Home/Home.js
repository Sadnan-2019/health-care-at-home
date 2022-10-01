import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Faq from '../Faq/Faq';
import Landing from '../Landing/Landing';
import Marque from '../Marque/Marque';
import Modal from '../Modal/Modal';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Success from '../Success/Success';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <Service></Service>
            <Review></Review>
            
            <Success></Success>
            <Marque></Marque> 

            <About></About>
            <Faq></Faq>
            <Contact></Contact>
            {/* <Modal/> */}
        </div>
    );
};

export default Home;