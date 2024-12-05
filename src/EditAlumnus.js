import React, { useState } from "react";

const EditAlumnus = ({ alumnus, onSave, onCancel }) => {
  const [updatedAlumnus, setUpdatedAlumnus] = useState(alumnus);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedAlumnus);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Alumnus</h3>
      <input
        type="text"
        value={updatedAlumnus.name}
        onChange={(e) =>
          setUpdatedAlumnus({ ...updatedAlumnus, name: e.target.value })
        }
      />
      <input
        type="email"
        value={updatedAlumnus.email}
        onChange={(e) =>
          setUpdatedAlumnus({ ...updatedAlumnus, email: e.target.value })
        }
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditAlumnus;
