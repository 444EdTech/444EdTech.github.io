import React, { useEffect } from 'react';
import './CoursePageCss.css'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const CareerAwarenessProgram = () => {

    useEffect(() => {
        // Scroll to the top of the page on load
        window.scrollTo(0, 0);
    }, []); // The empty dependency array ensures this runs once on mount

    return (
        <div className="CareerAwarenessProgram" style={{ paddingTop: '65px' }}>
            <div className="container pt-4">
                <div className="jumbotron jumbotron-fluid text-center">
                    <h1>Career Awareness Program</h1>
                    <p>
                        Explore various roles and job opportunities available in the industry.
                    </p>
                </div>
            </div>
            <div className="container section">
                <h2>Overview of Different Industries</h2>
                <p>
                    Industries are categorized into various sectors that encompass a wide range of job roles. Understanding these roles can help you make informed career choices.
                </p>

                <h2>Common Industries and Their Roles</h2>
                <ul>
                    <li>
                        <strong>Information Technology</strong>
                        <ul>
                            <li><strong>Software Developer:</strong> Designs and builds software applications.</li>
                            <li><strong>Data Analyst:</strong> Analyzes data to help organizations make informed decisions.</li>
                            <li><strong>System Administrator:</strong> Manages and maintains IT systems and networks.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Healthcare</strong>
                        <ul>
                            <li><strong>Nurse:</strong> Provides patient care and support in medical settings.</li>
                            <li><strong>Medical Researcher:</strong> Conducts research to advance medical knowledge and treatments.</li>
                            <li><strong>Healthcare Administrator:</strong> Manages healthcare facilities and services.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Finance</strong>
                        <ul>
                            <li><strong>Financial Analyst:</strong> Evaluates financial data to guide investment decisions.</li>
                            <li><strong>Accountant:</strong> Prepares financial statements and ensures compliance with regulations.</li>
                            <li><strong>Investment Banker:</strong> Assists clients with raising capital and financial transactions.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Engineering</strong>
                        <ul>
                            <li><strong>Civil Engineer:</strong> Designs and oversees construction projects.</li>
                            <li><strong>Mechanical Engineer:</strong> Works on the design and production of machinery.</li>
                            <li><strong>Electrical Engineer:</strong> Focuses on electrical systems and components.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Marketing</strong>
                        <ul>
                            <li><strong>Marketing Manager:</strong> Develops marketing strategies to promote products or services.</li>
                            <li><strong>Content Creator:</strong> Produces engaging content for various media platforms.</li>
                            <li><strong>SEO Specialist:</strong> Optimizes web content to improve search engine rankings.</li>
                        </ul>
                    </li>

                    {/* Add more industries as needed */}
                </ul>

                <h2>The Importance of Career Awareness</h2>
                <p>
                    Understanding the various career paths available can help you align your skills and interests with industry demands. This program aims to provide you with insights into potential job roles, their responsibilities, and how they fit into the broader industry landscape.
                </p>

                <h2>Next Steps</h2>
                <p>If you're interested in pursuing a career in any of these fields, consider enrolling in our specialized workshops or courses to gain the necessary skills!</p>

                {/* Registration Button */}
                <div className="text-center">
                    <Link to="/RegistrationPage" className="btn btn-primary btn-lg" role="button">
                        Register Now
                    </Link>
                </div>

            </div>
        </div>

    );
}

export default CareerAwarenessProgram;