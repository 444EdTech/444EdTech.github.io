import React, { useEffect } from 'react';
import './CoursePageCss.css'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const FullStackProgramPage = () => {

    useEffect(() => {
        // Scroll to the top of the page on load
        window.scrollTo(0, 0);
    }, []); // The empty dependency array ensures this runs once on mount

    return (
        <div className="FullStackProgramPage" style={{ paddingTop: '65px' }}>
            <div className="container py-4">
                <div className="jumbotron jumbotron-fluid text-center">
                    <h1>Full Stack Development Workshop</h1>
                    <p>
                        Become a full-stack developer and build end-to-end web applications.
                    </p>
                </div>
            </div>
            <div className="container section">
                <h2>Why Full Stack Development?</h2>
                <p>
                    Full Stack Development enables you to work on both the front-end and back-end of web applications. This workshop is essential for:
                </p>
                <ul>
                    <li>Understanding the complete web development process</li>
                    <li>Building dynamic and responsive user interfaces</li>
                    <li>Implementing server-side logic and database management</li>
                    <li>Enhancing your career prospects in a competitive job market</li>
                </ul>

                <h2>What You'll Learn</h2>
                <ul>
                    <li>Master front-end technologies (HTML, CSS, JavaScript)</li>
                    <li>Learn back-end development with Node.js and Express</li>
                    <li>Understand database design using MongoDB</li>
                    <li>Deploy applications to cloud platforms like Heroku</li>
                </ul>

                <h2>Key Benefits</h2>
                <ul>
                    <li>Hands-on experience with real-world projects</li>
                    <li>Expert guidance from industry professionals</li>
                    <li>Networking opportunities with fellow developers</li>
                    <li>Access to exclusive resources and ongoing support</li>
                </ul>

                <h2>Testimonials</h2>
                <div className="testimonial">
                    {/* <img src="https://via.placeholder.com/80" alt="Sam R." /> */}
                    <div>
                        <p>
                            "The Full Stack Workshop equipped me with the skills to create my own applications. Highly recommend!"
                        </p>
                        <cite>- Jahnavi</cite>
                    </div>
                </div>

                <div className="testimonial">
                    {/* <img src="https://via.placeholder.com/80" alt="Alex T." /> */}
                    <div>
                        <p>
                            "Fantastic experience! The projects were engaging and relevant to current industry needs."
                        </p>
                        <cite>- Devarshi</cite>
                    </div>
                </div>

                <h2>Workshop Details</h2>
                <p><strong>Date:</strong> To Be Announced</p>
                <p><strong>Time:</strong> To Be Announced</p>
                <p><strong>Location:</strong> Online</p>
                <p><strong>Cost:</strong> Free</p>

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

export default FullStackProgramPage;