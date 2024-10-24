import React, { useState, useEffect } from 'react';
import AlumniCard from './AlumniCard';
import SearchBar from './SearchBar';
import './Connect.css';

const alumniData = [
  {
    name: 'Sai Ram Charan',
    company: 'Digital Trust',
    position: 'Software Engineer',
    location: 'Hyderabad',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/in/sairamcharan',
    instagram: 'https://www.instagram.com/sairamcharan/',
    leetcode: 'https://leetcode.com/sairamcharan/',
    gfg: 'https://www.geeksforgeeks.org/user/sairamcharan/',
    description: 'I am a passionate software engineer with experience in developing scalable web applications. I enjoy tackling complex problems and am always eager to learn new technologies.'
  },
{
  name: 'Yaswanth',
  company: 'Jar, Khathabook',
  position: 'Growth',
  location: 'Bangalore',
  image: 'https://via.placeholder.com/150',
  linkedin: 'https://www.linkedin.com/in/sairamcharan',
  instagram: 'https://www.instagram.com/sairamcharan/',
  leetcode: 'https://leetcode.com/sairamcharan/',
  gfg: 'https://www.geeksforgeeks.org/user/sairamcharan/',
  description: 'I am a passionate software engineer with experience in developing scalable web applications. I enjoy tackling complex problems and am always eager to learn new technologies.'
},
{
  name: 'Varshitha kotari',
  company: 'TCS Digital, TA Digital',
  position: 'Software Engineer',
  location: 'Hyderabad',
  image: 'https://via.placeholder.com/150',
  linkedin: 'https://www.linkedin.com/in/sairamcharan',
  instagram: 'https://www.instagram.com/sairamcharan/',
  leetcode: 'https://leetcode.com/sairamcharan/',
  gfg: 'https://www.geeksforgeeks.org/user/sairamcharan/',
  description: 'I am a passionate software engineer with experience in developing scalable web applications. I enjoy tackling complex problems and am always eager to learn new technologies.'
},

];

function Connect() {
  const [alumniList, setAlumniList] = useState(alumniData);
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  // Function to filter the alumni based on search input
  const searchAlumni = () => {
    const filteredAlumni = alumniData.filter(alumni => {
      const matchesCompany = alumni.company.toLowerCase().includes(companyName.toLowerCase());
      const matchesJobTitle = alumni.position.toLowerCase().includes(jobTitle.toLowerCase());
      return matchesCompany && matchesJobTitle;
    });
    setAlumniList(filteredAlumni);
  };

  // Show default alumni on initial render
  useEffect(() => {
    setAlumniList(alumniData);
  }, []);

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