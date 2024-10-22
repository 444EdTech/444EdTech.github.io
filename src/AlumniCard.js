import React from 'react';
import { Link } from 'react-router-dom';

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
              {/* Pass alumni data in state */}
              <Link to="/connection-request" state={{ alumni }}>
                <button className="btn btn-primary">Connect</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlumniCard;