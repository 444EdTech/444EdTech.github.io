import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logooo.jpg';

const NavbarComponent = () => {
  // State to toggle between dark and light themes
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Function to handle theme toggle
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Add a class to the body to apply global theme changes
    document.body.classList.toggle('light-theme', !isDarkMode);
    document.body.classList.toggle('dark-theme', isDarkMode);
  };

  return (
    <nav className={`navbar navbar-expand-sm fixed-top ${isDarkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            className="rounded"
            alt="Company Logo"
            style={{ width: 50, height: 50 }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/#Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#AboutUs">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#AwarenessPrograms">
                Awareness Programs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#Founders">
                Founders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#ContactUs">
                Contact Us
              </Link>
            </li>
          </ul>
          <button
            id="themeToggle"
            className={`btn ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'} ms-3`}
            onClick={handleThemeToggle}
          >
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`} id="toggleIcon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
