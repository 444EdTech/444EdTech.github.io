import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ConnectionRequest.css';
import { FaLinkedin, FaInstagram, FaGithub, FaCode } from 'react-icons/fa'; // Importing icons

const ConnectionRequest = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const location = useLocation();
    const alumni = location.state?.alumni; // Use optional chaining

    if (!alumni) {
        return <p>No alumni data available.</p>; // Handle case where alumni data is not available
    }

    return (
        <>
            <div className="ConnectionRequest" style={{ paddingTop: '65px' }}>
                <div className="connection-request-container">
                <div className="profile-content">
                    <div className="profile-image">
                        <img src={alumni.image} alt={alumni.name} className="img-fluid rounded-circle" />
                    </div>
                    <div className="profile-details">
                        <h2>{alumni.name}</h2>
                        <p><strong>Company:</strong> {alumni.company}</p>
                        <p><strong>Position:</strong> {alumni.position}</p>
                        <p><strong>Location:</strong> {alumni.location}</p>
                        
                        <div className="social-links">
                            <h5>Social Links</h5>
                            <p>
                                <FaLinkedin /> 
                                <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                            </p>
                            <p>
                                <FaInstagram /> 
                                <a href={alumni.instagram} target="_blank" rel="noopener noreferrer"> Instagram</a>
                            </p>
                        </div>

                        <div className="coding-profiles">
                            <h5>Coding Profiles</h5>
                            <p>
                                <FaCode /> 
                                <a href={alumni.leetcode} target="_blank" rel="noopener noreferrer"> LeetCode</a>
                            </p>
                            <p>
                                <FaGithub /> 
                                <a href={alumni.gfg} target="_blank" rel="noopener noreferrer"> GFG</a>
                            </p>
                        </div>
                        <div className="profile-description">
                            <h3>About Work</h3>
                            <p>{alumni.description}</p>
                        </div>
                        <button className="btn btn-primary">Send Connection Request</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default ConnectionRequest;