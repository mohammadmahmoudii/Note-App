import { useState } from "react";
function NoteHeader({ notes,sortBy,onSort }) {
  
  const noteCount = notes.length;
  return (
    <div className="note-header">
      <h1>My Note ({noteCount})</h1>
      <select value={sortBy} onChange={ onSort}>
        <option value={"latest"}>Sort based on latest notes</option>
        <option value={"earlyest"}>Sort based on earlyest notes</option>
        <option value={"complited"}>Sort based on complited notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;
