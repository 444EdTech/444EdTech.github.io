import React, { useState, useEffect } from 'react';
import './CoursePageCss.css'; // Ensure this path is correct

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        course: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send form data to your server
        console.log('Registration Data:', formData);
        alert(`Thank you for registering, ${formData.name}!`);
        // Reset form
        setFormData({ name: '', email: '', course: '' });
    };

    useEffect(() => {
        // Scroll to the top of the page on load
        window.scrollTo(0, 0);
    }, []); // The empty dependency array ensures this runs once on mount


    return (
        <div className="RegistrationPage" style={{ paddingTop: '65px' }}>
            <div className="container">
                <div className="jumbotron jumbotron-fluid text-center">
                    <h1>Course Registration</h1>
                    <p>Sign up for your desired course below.</p>
                </div>

                <div className="section">
                    <form onSubmit={handleSubmit} className="registration-form">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="course" className="form-label">Select Course</label>
                            <select
                                id="course"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                required
                                className="form-select"
                            >
                                <option value="">Choose a course...</option>
                                <option value="IT Industry">IT Industry</option>
                                <option value="DSA">Data Structures and Algorithms</option>
                                <option value="Full Stack">Full Stack Development</option>
                                <option value="Data Science">Data Science</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;