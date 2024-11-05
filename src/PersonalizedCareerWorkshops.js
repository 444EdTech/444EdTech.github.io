import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './PersonalizedCareerWorkshops.css';

const PersonalizedCareerWorkshops = () => {
  
  useEffect(() => {
    // Scroll to the top of the page on load
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs once on mount

  return (
    <div className="PersonalizedCareerWorkshops" style={{ paddingTop: '65px' }}>
      <div className="container py-4">
        <div className="jumbotron jumbotron-fluid text-center">
          <h1>Personalized Career Workshops</h1>
          <p>Tailored programs to help you achieve your career goals.</p>
          <a className="btn btn-primary btn-lg" href="#content" role="button">
            Learn more
          </a>
        </div>

        <div id="content">
          <div className="container" style={{ paddingTop: '65px' }}>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              <div className="col">
                <div className="program-card text-center">
                  <h3>DSA</h3>
                  <p>Dive deep into Data Structures and Algorithms and master the fundamentals of problem-solving.</p>
                  <ul className="list-unstyled">
                    <li>Learn essential data structures</li>
                    <li>Implement efficient algorithms</li>
                    <li>Practice coding challenges</li>
                    <li>Prepare for technical interviews</li>
                  </ul>
                  <Link to="DSACoursePage" className="btn btn-primary" role="button">
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="col">
                <div className="program-card text-center">
                  <h3>Full Stack</h3>
                  <p>Become a full-stack developer and build end-to-end web applications.</p>
                  <ul className="list-unstyled">
                    <li>Master front-end technologies</li>
                    <li>Learn back-end development</li>
                    <li>Understand database design</li>
                    <li>Deploy applications to the cloud</li>
                  </ul>
                  <Link to="FullStackCoursePage" className="btn btn-primary" role="button">
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="col">
                <div className="program-card text-center">
                  <h3>Data Science</h3>
                  <p>Harness the power of data to uncover insights and drive business decisions.</p>
                  <ul className="list-unstyled">
                    <li>Explore data analysis techniques</li>
                    <li>Implement machine learning models</li>
                    <li>Visualize data for effective communication</li>
                    <li>Work on real-world data science projects</li>
                  </ul>
                  <Link to="DataScienceCoursePage" className="btn btn-primary" role="button">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <h2 className="text-center mt-5">Workshop Details</h2>
            <p className="text-center">Date: To Be Announced</p>
            <p className="text-center">Time: To Be Announced</p>
            <p className="text-center">Location: Online</p>
            <p className="text-center">Cost: Free</p>
            {/* Registration Button */}
            <div className="text-center">
                    <Link to="/RegistrationPage" className="btn btn-primary btn-lg" role="button">
                        Register Now
                    </Link>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedCareerWorkshops;