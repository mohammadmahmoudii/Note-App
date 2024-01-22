import { useState } from "react";

const AddNewNote = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    if(!title|| !description) return null
    const newNote = {
      title: title,
      description: description,
      id: Date.now(),
      iscomplited: false,
      ca: new Date().toISOString(),
    };
    console.log(newNote);
    // setNots((prevNots)=>[...prevNots,newNote]);
    onAddNote(newNote);
    setTitle("");
    setDescription("");
  };

  
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleChange}>
        <input
          value={title}
          type="text"
          name="title"
          className="text-field"
          placeholder="Add Note.."
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={description}
          type="text"
          className="text-field"
          placeholder="add descriptions ..."
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-primary">Add New Note</button>
      </form>
    </div>
  );
};

export default AddNewNote;
