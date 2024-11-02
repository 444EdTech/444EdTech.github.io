import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for navigation
import './ScrollableAlumni.css';
import alumniData from './data/ConnectionsData.json';


const ScrollableAlumni = () => {
    
    const navigate = useNavigate(); // Hook for navigation

    const handleNext = () => {
        navigate('/Connect'); // Navigate to the Connect page
    };

    return (
        <div className="container p-5">
            <div className="next-page-arrow text-center mt-4">
                <button onClick={handleNext} className="arrow-button">
                    Connect <i className="fa fa-arrow-right"></i> {/* FontAwesome arrow */}
                </button>
            </div>
            <br />
            <div className="scrollable-alumni-container">
                <div className="scrollable-alumni">
                    {alumniData.map((alumni, index) => (
                        <div className="alumni-card" key={index}>
                            <img src={alumni.image} alt={alumni.name} className="alumni-image" />
                            <div className="alumni-info">
                                <p>{alumni.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            
        </div>
    );
};

export default ScrollableAlumni;