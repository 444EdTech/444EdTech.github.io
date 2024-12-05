import React from "react";

const AlumniList = ({ alumni, onDelete, onEdit }) => (
  <div>
    <h3>Alumni List</h3>
    {alumni.map((alumnus, index) => (
      <div key={index} style={{ border: "1px solid #ddd", margin: "10px" }}>
        <h4>{alumnus.name}</h4>
        <p>Email: {alumnus.email}</p>
        <button onClick={() => onEdit(index)}>Edit</button>
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    ))}
  </div>
);

export default AlumniList;
