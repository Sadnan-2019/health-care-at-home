import React from 'react';
import Contact from '../Contact/Contact';
import Landing from '../Landing/Landing';
import Review from '../Review/Review';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <Service></Service>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;