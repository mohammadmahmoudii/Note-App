const NoteList = ({ NoteList,onDelete }) => {
  return (
    <div className="note-list">
      {NoteList.map((note) => {
        return <NoteItem note={note} key={note.id} onDelete={onDelete} />;
      })}
    </div>
  );
};

export default NoteList;



const NoteItem = ({ note,onDelete }) => {
  const options = {
    year: "numeric",
    month: "long",
    Day: "numeric",
  };

  
  return (
    <div className="note-item">
      <div className="note-list-header">
        <div>
          <p className="title">title</p>
          <p className="description">desc</p>
        </div>
        <div className="action">
          <button onClick={()=>onDelete(note.id)}>❌</button>
          <input  type="checkbox" name="" id="" />
        </div>
      </div>
      <div className="note-list-footer">
        <div>
          {new Date(note.ca).toLocaleDateString("en-US", options)}
         
        </div>
      </div>
    </div>
  );
};
