import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutUs from "./AboutUs";
import AwarenessPrograms from "./AwarenessPrograms";
import ContactUs from "./ContactUs";
import Founders from "./Founders";
import ConnectInfo from './ConnectInfo';
import Home from './Home';
import './LandingPage1.css';

const LandingPage1 = () => {
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
        <div className="ai-cards-container">
            <div id="Home" className="ai-card"><Home /></div>
            <div id="AboutUs" className="ai-card"><AboutUs /></div>
            <div id="AwarenessPrograms" className="ai-card"><AwarenessPrograms /></div>
            <div id="ConnectInfo" className="ai-card"><ConnectInfo /></div>
            <div id="Founders" className="ai-card"><Founders /></div>
            <div id="ContactUs" className="ai-card"><ContactUs /></div>
        </div>
    );
}

export default LandingPage1;
