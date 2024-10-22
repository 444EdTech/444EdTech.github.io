import React from 'react';

function SearchBar({ companyName, jobTitle, setCompanyName, setJobTitle, searchAlumni }) {
  return (
    <div className="search-bar row gx-2 p-3">
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
  );
}

export default SearchBar;