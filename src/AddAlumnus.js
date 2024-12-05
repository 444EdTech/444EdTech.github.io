import React, { useState } from "react";

const AddAlumnus = ({ onAdd }) => {
  const [newAlumnus, setNewAlumnus] = useState({
    name: "",
    email: "",
    college: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newAlumnus);
    setNewAlumnus({ name: "", email: "", college: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Alumnus</h3>
      <input
        type="text"
        placeholder="Name"
        value={newAlumnus.name}
        onChange={(e) => setNewAlumnus({ ...newAlumnus, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newAlumnus.email}
        onChange={(e) => setNewAlumnus({ ...newAlumnus, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="College"
        value={newAlumnus.college}
        onChange={(e) =>
          setNewAlumnus({ ...newAlumnus, college: e.target.value })
        }
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddAlumnus;
