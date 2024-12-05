import React, { useState, useEffect } from "react";
import alumniData from "./data/AlumniData.json";
import AddAlumnus from "./AddAlumnus";
import EditAlumnus from "./EditAlumnus";
import AlumniList from "./AlumniList";

const AlumniApp = () => {
  const [alumni, setAlumni] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    setAlumni(alumniData);
  }, []);

  const addAlumnus = (newAlumnus) => {
    setAlumni([...alumni, newAlumnus]);
  };

  const editAlumnus = (index, updatedData) => {
    const updatedAlumni = alumni.map((alumnus, i) =>
      i === index ? updatedData : alumnus
    );
    setAlumni(updatedAlumni);
    setEditingIndex(null);
  };

  const deleteAlumnus = (index) => {
    const updatedAlumni = alumni.filter((_, i) => i !== index);
    setAlumni(updatedAlumni);
  };

  return (
    <div>
      <h1>Alumni Management</h1>
      <AddAlumnus onAdd={addAlumnus} />
      {editingIndex !== null ? (
        <EditAlumnus
          alumnus={alumni[editingIndex]}
          onSave={(updatedData) => editAlumnus(editingIndex, updatedData)}
          onCancel={() => setEditingIndex(null)}
        />
      ) : (
        <AlumniList
          alumni={alumni}
          onDelete={deleteAlumnus}
          onEdit={(index) => setEditingIndex(index)}
        />
      )}
    </div>
  );
};

export default AlumniApp;
