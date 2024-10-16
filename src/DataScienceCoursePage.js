import './CoursePageCss.css';
import React, { useEffect } from 'react';

const DataScienceCoursePage = () => {

    useEffect(() => {
        // Scroll to the top of the page on load
        window.scrollTo(0, 0);
      }, []); // The empty dependency array ensures this runs once on mount

    return ( 
        <div className="DataScienceCoursePage" style={{ paddingTop: '65px' }}>
            <div className="container py-4">
                <div className="jumbotron jumbotron-fluid text-center">
                    <h1>Data Science Workshop</h1>
                    <p>
                        Harness the power of data to uncover insights and drive business
                        decisions.
                    </p>
                </div>
            </div>
            <div className="container section">
                <h2>Why Data Science?</h2>
                <p>
                Data Science is revolutionizing industries by enabling data-driven
                decision-making. This workshop is essential for:
                </p>
                <ul>
                <li>Understanding data patterns and trends</li>
                <li>Building predictive models</li>
                <li>Improving business strategies through data insights</li>
                <li>Enhancing your career prospects in a data-driven world</li>
                </ul>
                <h2>What You'll Learn</h2>
                <ul>
                <li>Data analysis techniques using Python and R</li>
                <li>Machine learning algorithms and their applications</li>
                <li>Data visualization with tools like Matplotlib and Seaborn</li>
                <li>Real-world projects to apply your skills</li>
                </ul>
                <h2>Key Benefits</h2>
                <ul>
                <li>Hands-on experience with real datasets</li>
                <li>Expert guidance from industry professionals</li>
                <li>Networking opportunities with like-minded individuals</li>
                <li>Access to exclusive resources and ongoing support</li>
                </ul>
                <h2>Testimonials</h2>
                <div className="testimonial">
                <img src="https://via.placeholder.com/80" alt="Mia K." />
                <div>
                    <p>
                    "The Data Science Workshop opened my eyes to the power of data. I feel
                    equipped to tackle real-world challenges!"
                    </p>
                    <cite>- Mia K.</cite>
                </div>
                </div>
                <div className="testimonial">
                <img src="https://via.placeholder.com/80" alt="Jordan H." />
                <div>
                    <p>
                    "Fantastic workshop! The projects were engaging and relevant to
                    current industry needs."
                    </p>
                    <cite>- Jordan H.</cite>
                </div>
                </div>
                <h2>Workshop Details</h2>
                <p>
                <strong>Date:</strong> August 29, 2024
                </p>
                <p>
                <strong>Time:</strong> 9:00 AM - 5:00 PM
                </p>
                <p>
                <strong>Location:</strong> 123 Main Street, Anytown USA
                </p>
                <p>
                <strong>Cost:</strong> $99
                </p>
                <a className="btn btn-primary" href="#" role="button">
                Register Now
                </a>
            </div>
            </div>

     );
}
 
export default DataScienceCoursePage;