import React, { useState, useEffect } from 'react';
import alumniData from './data/ConnectionData.json'; // Adjust the path as needed
import AlumniCard from './AlumniCard';
import SearchBar from './SearchBar';
import './Connect.css';

function Connect() {
  const [alumniList, setAlumniList] = useState(alumniData); // Initialize with imported data
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to filter the alumni based on search input
  const searchAlumni = () => {
    const filteredAlumni = alumniData.filter(alumni => {
      const matchesCompany = alumni.company.toLowerCase().includes(companyName.toLowerCase());
      const matchesJobTitle = alumni.position.toLowerCase().includes(jobTitle.toLowerCase());
      return matchesCompany && matchesJobTitle;
    });
    setAlumniList(filteredAlumni);
  };

  return (
    <div id="AlumniCard" style={{ paddingTop: '65px' }}>
      <div className="header-section">
        <h1>Because Impact Matters</h1>
        <SearchBar
          companyName={companyName}
          jobTitle={jobTitle}
          setCompanyName={setCompanyName}
          setJobTitle={setJobTitle}
          searchAlumni={searchAlumni}
        />
      </div>

      <div id="alumniResults" className="alumni-results">
        <h2>Alumni Details:</h2>
        <div className="row" id="alumniList">
          {alumniList.length ? (
            alumniList.map((alumni, index) => (
              <AlumniCard key={index} alumni={alumni} />
            ))
          ) : (
            <p>No alumni found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Connect;
