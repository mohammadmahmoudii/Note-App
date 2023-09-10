import { useState } from "react";

const AddNewNote = () => {
    const[title,setTitle]=useState("");
    const [description,setDescription]=useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    
    const newNote={
        title,
        description,
        id:Date.now(),
        complited:false,
        createAt:new Date().toISOString(),
    }
    console.log(newNote);
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <div className="add-new-note ">
        <h2>Add New Note</h2>
        <form className="note-form" onSubmit={submitHandler}>
          <input 
          value={title}
          onChange={e=>setTitle(e.target.value)}
          type="text"
           className="text-field"
            placeholder="Title"
             />
          <input
          value={description}
          onChange={e=>setDescription(e.target.value)}
            type="text"
            className="text-field"
            placeholder="Descriptions..."
          />
          <button type="submit" className="btn btn--primary">
            Add New Note
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNewNote;
