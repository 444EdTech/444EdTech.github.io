import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutUs from "./AboutUs";
import AwarenessPrograms from "./AwarenessPrograms";
import ContactUs from "./ContactUs";
import Founders from "./Founders";
import Home from "./Home";
import ConnectInfo from './ConnectInfo';

const LandingPage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1)); // Remove the '#' from the hash
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
            }
        }
    }, [hash]);

    return ( 
        <>
            <div id="Home"><Home /></div>
            <div id="AboutUs"><AboutUs /></div>
            <div id="AwarenessPrograms"><AwarenessPrograms /></div>
            <div id="ConnectInfo"><ConnectInfo /></div>
            <div id="Founders"><Founders /></div>
            <div id="ContactUs"><ContactUs /></div>
        </>
    );
}

export default LandingPage;
