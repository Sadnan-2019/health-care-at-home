import React from 'react';
import Contact from '../Contact/Contact';
import Landing from '../Landing/Landing';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <Service></Service>
            <Contact></Contact>
        </div>
    );
};

export default Home;