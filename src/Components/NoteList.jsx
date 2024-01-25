const NoteList = ({ NoteList, onDelete, onToggle, sortBy }) => {
  let sortList = NoteList;

  // sort type asd
  if (sortBy == "latest") {
    sortList = [...NoteList].sort(
      (a, b) => new Date(a.ca) - new Date(b.ca)
    );
  }
  //sort type DeSD
  if (sortBy == "earlyest") {
    sortList = [...NoteList].sort(
      (a, b) => new Date(b.ca) - new Date(a.ca)
    );
  }
  // sort type Asd
  if (sortBy == "complited") {
    sortList = [...NoteList].sort(
      (a, b) => Number( a.iscomplited) - Number(b.iscomplited)
    );
  }
  
  return (
    <div className="note-list">
      {sortList.map((note) => {
        return (
          <NoteItem
            note={note}
            key={note.id}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
};

export default NoteList;

const NoteItem = ({ note, onDelete, onToggle }) => {
  const options = {
    year: "numeric",
    month: "long",
    Day: "numeric",
  };

  return (
    <div className={`note-item ${note.iscomplited == true ? "complited" : ""}`}>
      <div className="note-list-header">
        <div>
          <p className="title">{note.title}</p>
          <p className="description">{note.description}</p>
        </div>
        <div className="action">
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input
            onClick={(e) => onToggle(e)}
            type="checkbox"
            name=""
            id=""
            value={note.id}
          />
        </div>
      </div>
      <div className="note-list-footer">
        <div>{new Date(note.ca).toLocaleDateString("en-US", options)}</div>
      </div>
    </div>
  );
};
