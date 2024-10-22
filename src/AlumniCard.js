import React from 'react';

function AlumniCard({ alumni }) {
  return (
    <div className="col-12 col-md-6">
      <div className="card alumni-card">
        <div className="row g-0">
          <div className="col-3">
            <img src={alumni.image} alt={alumni.name} className="img-fluid rounded-start" />
          </div>
          <div className="col-9">
            <div className="card-body">
              <h5 className="card-title">{alumni.name}</h5>
              <p className="card-text"><strong>Company:</strong> {alumni.company}</p>
              <p className="card-text"><strong>Position:</strong> {alumni.position}</p>
              <p className="card-text"><strong>Location:</strong> {alumni.location}</p>
              <button className="btn btn-connect">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlumniCard;