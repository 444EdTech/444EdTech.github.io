import React from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaHandshake, FaUsers } from 'react-icons/fa';
import './ConnectInfo.css';

const ConnectInfo = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Connect with Industry Professionals through Z444</h2>

            <p>
                At Z444, we believe networking is essential to career growth. By connecting with industry experts, alumni, and peers, you can gain valuable insights, mentorship, and new opportunities to advance your career.
            </p>

            <p>
                <FaLightbulb className="me-2 text-warning" />
                <strong>Gain Industry Insights:</strong> Stay updated on industry trends and learn directly from professionals in your field.
            </p>

            <p>
                <FaHandshake className="me-2 text-success" />
                <strong>Career Mentorship:</strong> Receive guidance and advice from experienced professionals who have successfully navigated their careers.
            </p>

            <p>
                <FaUsers className="me-2 text-info" />
                <strong>Expand Your Network:</strong> Building connections through Z444 can lead to job opportunities and collaborative projects.
            </p>

            <div className="text-center mt-6">
                <Link to="/Connect" className="btn btn-primary">
                    Connect <i className="fa fa-arrow-right ms-2"></i>
                </Link>
            </div>
        </div>
    );
};

export default ConnectInfo;