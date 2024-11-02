import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
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
                            <img src={alumni.image} alt={alumni.name} className="img-fluid" />
                        </div>
                        <div className="profile-details">
                            <h2>{alumni.name}</h2>
                            <p><strong>Company:</strong> {alumni.company}</p>
                            <p><strong>Position:</strong> {alumni.position}</p>
                            <p><strong>Location:</strong> {alumni.location}</p>

                            <div className="social-coding-links">
                                <p><strong>Profiles:</strong></p>
                                <div className="links">
                                    {alumni.linkedin && (
                                        <p>
                                            <FaLinkedin />
                                            <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                                        </p>
                                    )}
                                    {alumni.instagram && (
                                        <p>
                                            <FaInstagram />
                                            <a href={alumni.instagram} target="_blank" rel="noopener noreferrer"> Instagram</a>
                                        </p>
                                    )}
                                    {alumni.leetcode && (
                                        <p>
                                            <FaCode />
                                            <a href={alumni.leetcode} target="_blank" rel="noopener noreferrer"> LeetCode</a>
                                        </p>
                                    )}
                                    {alumni.gfg && (
                                        <p>
                                            <FaGithub />
                                            <a href={alumni.gfg} target="_blank" rel="noopener noreferrer"> GFG</a>
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="profile-description">
                                <h3>About Work</h3>
                                <p>{alumni.description}</p>
                            </div>
                            <Link to="/SendRequest" state={{ alumni }}>
                                <button type="submit" className="btn btn-primary">Send Connection Request</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ConnectionRequest;