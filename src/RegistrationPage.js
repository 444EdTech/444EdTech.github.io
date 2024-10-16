import React from 'react';
import './CoursePageCss.css'; // Ensure this path is correct

const RegistrationPage = () => {
    // Replace this URL with your actual Google Form URL
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfmhjMZrs1S0REWAnqiHTzZChX9GpTNGKDIfswtyub5_QcW_w/viewform";

    return (
        <div className="RegistrationPage" style={{ paddingTop: '65px' }}>
            <div className="container">
                <div className="jumbotron jumbotron-fluid text-center">
                    <h1>Course Registration</h1>
                    <p>Sign up for your desired course below.</p>
                </div>

                <div className="section text-center">
                    <h2>Register Now</h2>
                    <p>Please click the button below to fill out the registration form:</p>
                    <a 
                        href={googleFormUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary btn-lg"
                    >
                        Open Registration Form
                    </a>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;