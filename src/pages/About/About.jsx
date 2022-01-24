import React from 'react';

// components
import Hero from '../../components/Hero/Hero';

const About = () => {
    window.scrollTo({ top: 0 })
    return (
        <div>
            <Hero heroImg="/img/customCake-4.jpg" title="About Us"/>
            About Us
        </div>
    );
};

export default About;
