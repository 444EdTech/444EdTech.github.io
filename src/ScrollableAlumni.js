import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for navigation
import './ScrollableAlumni.css';

const alumniData = [
    {
        name: 'Sai Ram Charan',
        presntCompany: 'Digital Trust',
        company: 'Digital Trust',
        position: 'Software Engineer',
        location: 'Hyderabad',
        image: 'https://via.placeholder.com/150',
        companyLogo: 'https://via.placeholder.com/50',
    },
    {
        name: 'Yaswanth',
        presntCompany: 'Kharthabook',
        company: 'Jar, Khathabook',
        position: 'Growth',
        location: 'Bangalore',
        image: 'https://via.placeholder.com/150',
        companyLogo: 'https://via.placeholder.com/50',
    },
    {
        name: 'Varshitha',
        presntCompany: 'TCS Digital',
        company: 'TCS Digital, TA Digital',
        position: 'Software Engineer',
        location: 'Hyderabad',
        image: 'https://via.placeholder.com/150',
        companyLogo: 'https://via.placeholder.com/50',
    },

    {
        name: 'Sai Ram Charan',
        presntCompany: 'Digital Trust',
        company: 'Digital Trust',
        position: 'Software Engineer',
        location: 'Hyderabad',
        image: 'https://via.placeholder.com/150',
        companyLogo: 'https://via.placeholder.com/50',
    },
    {
        name: 'Yaswanth',
        presntCompany: 'Kharthabook',
        company: 'Jar, Khathabook',
        position: 'Growth',
        location: 'Bangalore',
        image: 'https://via.placeholder.com/150',
        companyLogo: 'https://via.placeholder.com/50',
    },
    {
        name: 'Varshitha',
        presntCompany: 'TCS Digital',
        company: 'TCS Digital, TA Digital',
        position: 'Software Engineer',
        location: 'Hyderabad',
        image: 'https://via.placeholder.com/150',
        companyLogo: 'https://via.placeholder.com/50',
    },
    // Add more alumni as needed
];

const ScrollableAlumni = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleNext = () => {
        navigate('/connect'); // Navigate to the Connect page
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