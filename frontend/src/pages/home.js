import React from 'react';
import AboutMe from '../component/aboutMe';
import Nav from '../component/header';
import Copyright from '../component/copyright';

const Homepage = () => {

    return (
        <>
            <Nav />
            <AboutMe />
            <Copyright />
        </>
    );
}

export default Homepage;