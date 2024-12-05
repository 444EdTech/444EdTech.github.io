import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './ConnectionRequest.css';
import LinkedInIcon from './icons/LinkedInIcon';
import LeetCodeIcon from './icons/LeetCodeIcon';
import GeeksforGeeksIcon from './icons/GeeksforGeeksIcon';
import HackerRankIcon from './icons/HackerRankIcon';
import CodeChefIcon from './icons/CodeChefIcon';
import CodeforcesIcon from './icons/CodeforcesIcon';

const ConnectionRequest = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const alumni = location.state?.alumni;

    if (!alumni) {
        return <p>No alumni data available.</p>;
    }

    const iconMapping = {
        LinkedIn: <LinkedInIcon />,
        LeetCode: <LeetCodeIcon />,
        GFG: <GeeksforGeeksIcon />,
        HackerRank: <HackerRankIcon />,
        CodeChef: <CodeChefIcon />,
        CodeForces: <CodeforcesIcon />
    };

    return (
        <div className="ConnectRequest" style={{ paddingTop: '44px' }}>
            <div className="container my-5">
                <div className="card shadow-lg">
                    <div className="row g-0">
                        <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
                            <img
                                src={alumni.image}
                                alt={alumni.name}
                                className="img-fluid rounded-circle p-3"
                                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                            />

                            <h2 className="card-title text-primary text-center">{alumni.name}</h2>
                        </div>

                        <div className="col-md-9">
                            <div className="card-body">

                                <p className="card-text"><strong>College:</strong> {alumni.college}</p>
                                <p className="card-text"><strong>Email:</strong> {alumni.email}</p>
                                {/* <p className="card-text"><strong>Phone:</strong> {alumni.phone}</p> */}
                                <p className="card-text"><strong>Current Company:</strong> {alumni.presentCompany}</p>
                                <p className="card-text"><strong>Past Companies:</strong> {alumni.pastCompanies.join(', ')}</p>
                                <p className="card-text"><strong>Current Location:</strong> {alumni.currentLocation}</p>
                                <p className="card-text"><strong>Current Position:</strong> {alumni.currentPosition}</p>
                                <p className="card-text"><strong>BTech Stream:</strong> {alumni.btechStream}</p>
                                <p className="card-text"><strong>Description:</strong> {alumni.description}</p>

                                <div className="skills mb-3">
                                    <strong>Skills:</strong>
                                    <ul className="list-inline">
                                        {alumni.skills.map((skill, skillIndex) => (
                                            <li key={skillIndex} className="list-inline-item badge bg-secondary me-1">
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="profiles mb-3">
                                    {Object.entries(alumni.profiles).some(([_, value]) => value) ? ( // Check if any profile exists
                                        <>
                                            <strong>Profiles:</strong>
                                            <div className="table-responsive mt-2">
                                                <table className="table table-borderless table-sm">
                                                    <tbody>
                                                        {Object.entries(alumni.profiles).map(([key, value]) => (
                                                            value && (
                                                                <tr key={key}>
                                                                    <td className="fw-bold text-capitalize">{key}:</td>
                                                                    <td>
                                                                        <a href={value} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                                                            {value}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </>
                                    ) : (
                                        <p>No profiles available.</p> // Optional message if no profiles exist
                                    )}
                                </div>

                                <div className="profiles mb-3">
                                    {Object.entries(alumni.profiles).some(([_, value]) => value) ? (
                                        <>
                                            <strong>Profiles:</strong>
                                            <div className="d-flex gap-3 mt-2">
                                                {Object.entries(alumni.profiles).map(([key, value]) => (
                                                    value && (
                                                        <a
                                                            key={key}
                                                            href={value}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-decoration-none"
                                                            title={key}
                                                        >
                                                            {iconMapping[key]}
                                                        </a>
                                                    )
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <p>No profiles available.</p>
                                    )}
                                </div>

                                <Link to="/SendRequest" state={{ alumni }}>
                                    <button type="button" className="btn btn-primary">Send Connection Request</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConnectionRequest;