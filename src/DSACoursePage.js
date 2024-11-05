import { Link } from 'react-router-dom';
import './CoursePageCss.css';
import React, { useEffect } from 'react';

const DSAWorkshopPage = () => {

    useEffect(() => {
        // Scroll to the top of the page on load
        window.scrollTo(0, 0);
    }, []); // The empty dependency array ensures this runs once on mount

    return ( 
        <div className="DSAWorkshopPage" style={{ paddingTop: '65px' }}>
            <div className="container py-4">
                <div className="jumbotron jumbotron-fluid text-center">
                    <h1>Data Structures and Algorithms Workshop</h1>
                    <p>
                        Master the fundamentals of problem-solving with data structures and algorithms.
                    </p>
                </div>
            </div>
            <div className="container section">
                <h2>Why DSA?</h2>
                <p>
                    Data Structures and Algorithms are essential for efficient programming and problem-solving. This workshop is crucial for:
                </p>
                <ul>
                    <li>Understanding complex data organization</li>
                    <li>Improving algorithmic thinking</li>
                    <li>Preparing for technical interviews</li>
                    <li>Enhancing your coding skills in competitive programming</li>
                </ul>
                <h2>What You'll Learn</h2>
                <ul>
                    <li>What is DSA?</li>
                    <li>How and where we use DSA practically?</li>
                    <li>Language to choose</li>
                    <li>How to learn that language</li>
                    <li>Where to practice - LC, GFG</li>
                    <li>Basic DSA terms - Time Complexity, Space Complexity, Test Cases, Inputs, Outputs...</li>
                    <li>Competetive Coding and Solutions</li>
                    <li>Some DSA related projects</li>
                    <li>What companies expect?</li>
                    <li>Which companies ask what?</li>
                    <li>How to explain a problem in interviews</li>
                    <li>Previous DSA interview questions</li>
                </ul>
                <h2>Key Benefits</h2>
                <ul>
                    <li>Get to know how to utilize all available resources over internet</li>
                    <li>Expert guidance from experienced instructors</li>
                    <li>Networking opportunities with fellow programmers</li>
                    <li>Access to exclusive resources and ongoing support</li>
                </ul>
                <h2>Testimonials</h2>
                <div className="testimonial">
                    {/* <img src="https://via.placeholder.com/80" alt="Alex P." /> */}
                    <div>
                        <p>
                            "The DSA Workshop transformed my understanding of algorithms. I'm now more confident in my coding abilities!"
                        </p>
                        <cite>- Karthik</cite>
                    </div>
                </div>
                <div className="testimonial">
                    {/* <img src="https://via.placeholder.com/80" alt="Jamie L." /> */}
                    <div>
                        <p>
                            "Fantastic workshop! The hands-on approach made learning enjoyable and effective."
                        </p>
                        <cite>- Rupa Sri</cite>
                    </div>
                </div>
                <h2>Workshop Details</h2>
                <p><strong>Date:</strong> To Be Announced</p>
                <p><strong>Time:</strong> To Be Announced </p>
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
 
export default DSAWorkshopPage;