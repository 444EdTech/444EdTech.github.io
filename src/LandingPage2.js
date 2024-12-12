import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion
import AboutUs from "./AboutUs";
import AwarenessPrograms from "./AwarenessPrograms";
import ContactUs from "./ContactUs";
import Founders from "./Founders";
import ConnectInfo from './ConnectInfo';
import Home from './Home';
import './LandingPage2.css'; // Import the CSS file

const LandingPage2 = () => {
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
            <motion.section 
                id="Home2" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <Home />
            </motion.section>
            <motion.section 
                id="AboutUs2" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <AboutUs />
            </motion.section>
            <motion.section 
                id="AwarenessPrograms2" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <AwarenessPrograms />
            </motion.section>
            <motion.section 
                id="ConnectInfo2" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <ConnectInfo />
            </motion.section>
            <motion.section 
                id="Founders2" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <Founders />
            </motion.section>
            <motion.section 
                id="ContactUs2" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <ContactUs />
            </motion.section>
        </>
    );
}

export default LandingPage2;