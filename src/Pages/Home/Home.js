import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact Us/Contact';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            {/* import the all component  */}
            <Banner></Banner>
            <Services></Services>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;