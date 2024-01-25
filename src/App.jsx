// import "./App.css";
import "./App2.css";
import AddNewNote from "./Components/AddNewNote";
import { useState } from "react";
import NoteList from "./Components/NoteList";
import NoteStatus from "./Components/NoteStatus";
import NoteHeader from "./Components/Noteheader";
const App = () => {
  const [nots, setNots] = useState([]);
  const [sortBy,setSortBy] = useState("latest");
  //liftup state from AddNoteList
  const handelNote = (newNot) => {
    setNots((prevNot) => [...prevNot, newNot]);
  };
  //barakse as farzand miyad be pedar va hazf mikone
  const handelDelete = (id) => {
    setNots((prevNoots) => prevNoots.filter((n) => n.id != id));

    //rahe 2vom
    // const filter=nots.filter(n=>n.id!=id);
    // setNots(filter);
  };

  const handelToggle = (e) => {
    const noteId = e.target.value;
    console.log({ noteId });

    //uppdate list of state 1
    // const newNods = nots.map((not) =>
    //   not.id == Number(noteId) ? { ...not, iscomplited: !not.iscomplited } : not
    // );
    // setNots(newNods);

    setNots((prevNote) =>
      prevNote.map((note) =>
        note.id == Number(noteId)
          ? { ...note, iscomplited: !note.iscomplited }
          : note
      )
    );
    console.log(nots);
  };
  return (
    <div className="container">
      <NoteHeader notes={nots} sortBy={sortBy} onSort={e=>setSortBy(e.target.value)} />

      <div className="note-app">
        <AddNewNote onAddNote={handelNote} />

        <div className="note-container">
          <NoteStatus notes={nots} />
          <NoteList
            NoteList={nots}
            sortBy={sortBy}
            onDelete={handelDelete}
            onToggle={handelToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
