import React from 'react';

function SearchBar({ companyName, jobTitle, setCompanyName, setJobTitle, searchAlumni }) {
  return (
    <div className="row justify-content-start">
      {/* This will center the search bar and make it span 8 out of 12 columns on larger screens */}
      <div className="search-bar col-12 col-lg-7 row gx-2 p-5">
        <div className="col-12 col-md-5 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-5 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by job title, ID, or keyword"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-2 mb-2">
          <button className="btn btn-primary w-100" onClick={searchAlumni}>
            Find Alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
