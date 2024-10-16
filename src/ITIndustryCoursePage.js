import React, { useEffect } from 'react';
import './CoursePageCss.css'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const ITIndustryCoursePage = () => {

    useEffect(() => {
        // Scroll to the top of the page on load
        window.scrollTo(0, 0);
    }, []); // The empty dependency array ensures this runs once on mount

    return (
        <div className="ITIndustryCoursePage" style={{ paddingTop: '65px' }}>
            <div className="container">
                <div className="jumbotron jumbotron-fluid text-center">
                    <h1>Careers in the IT Industry</h1>
                    <p>
                        Explore various roles available in the information technology sector.
                    </p>
                </div>
            </div>
            <div className="container section">
                <h2>Overview of IT Roles</h2>
                <p>
                    The IT industry offers a diverse range of career opportunities that cater to different skills and interests. Below are some common roles within the sector.
                </p>

                <h2>Common IT Roles</h2>
                <ul>
                    <li>
                        <strong>Software Developer</strong>
                        <p>Designs, codes, and tests software applications. Developers work with programming languages such as Java, Python, or C# to create applications that meet user needs.</p>
                    </li>

                    <li>
                        <strong>Data Analyst</strong>
                        <p>Analyzes data sets to identify trends and insights. Data analysts use statistical tools and software to interpret complex data and help organizations make informed decisions.</p>
                    </li>

                    <li>
                        <strong>System Administrator</strong>
                        <p>Manages and maintains an organization’s IT infrastructure. Responsibilities include installing software, managing servers, and ensuring network security.</p>
                    </li>

                    <li>
                        <strong>Network Engineer</strong>
                        <p>Designs and implements computer networks. Network engineers ensure reliable connectivity between devices and troubleshoot issues related to network performance.</p>
                    </li>

                    <li>
                        <strong>Cybersecurity Specialist</strong>
                        <p>Protects an organization’s computer systems and networks from security breaches. Specialists implement security measures and monitor systems for vulnerabilities.</p>
                    </li>

                    <li>
                        <strong>Web Developer</strong>
                        <p>Creates and maintains websites. Web developers work on both front-end (user interface) and back-end (server-side) development to ensure websites function smoothly.</p>
                    </li>

                    <li>
                        <strong>IT Project Manager</strong>
                        <p>Oversees IT projects from inception to completion. Project managers coordinate teams, manage budgets, and ensure projects meet deadlines and objectives.</p>
                    </li>

                    {/* Add more roles as needed */}
                </ul>

                <h2>The Importance of IT Careers</h2>
                <p>
                    The demand for skilled professionals in the IT sector continues to grow as technology evolves. Understanding the various roles available can help you align your skills with industry needs.
                </p>

                <h2>Next Steps</h2>
                <p>If you're interested in pursuing a career in IT, consider enrolling in our specialized courses or workshops designed to equip you with the necessary skills!</p>

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

export default ITIndustryCoursePage;