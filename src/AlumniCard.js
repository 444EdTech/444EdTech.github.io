import React from 'react';
import { Link } from 'react-router-dom';
import './AlumniCard.css';

function AlumniCard({ alumni }) {
  return (
    <div className="col-12 col-md-4">
      <div className="card alumni-card shadow-sm">
        <div className="row g-0">
          <div className="col-12 text-center mt-3">
            <img src={alumni.image} alt={alumni.name} className="img-fluid rounded-circle profile-image" />
          </div>
          <div className="col-12">
            <div className="card-body text-center">
              <h5 className="card-title alumni-name">{alumni.name}</h5>
              <p className="card-text"><strong>Company:</strong> {alumni.company}</p>
              <p className="card-text"><strong>Position:</strong> {alumni.position}</p>
              <p className="card-text"><strong>Location:</strong> {alumni.location}</p>
              {/* Pass alumni data in state */}
              <Link to="/connection-request" state={{ alumni }}>
                <button className="btn btn-contact">Know More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlumniCard;