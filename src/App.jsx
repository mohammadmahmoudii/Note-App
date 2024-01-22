// import "./App.css";
import "./App2.css";
import AddNewNote from "./Components/AddNewNote";
import { useState } from "react";
import NoteList from "./Components/NoteList";
const App = () => {
  const [nots,setNots]=useState([]);

  //liftup state from AddNoteList
  const handelNote=(newNot)=>{
    setNots((prevNot)=>[...prevNot,newNot])
  }
  //barakse as farzand miyad be pedar va hazf mikone
  const handelDelete=(id)=>{
    
    setNots((prevNoots)=>prevNoots.filter((n)=>n.id!=id))

    //rahe 2vom
    // const filter=nots.filter(n=>n.id!=id);
    // setNots(filter);
  
  }
  return ( 
    <div className="container">
      <div className="note-header">
        <h1>Note App</h1>
        <p>select options</p>
      </div>
      <div className="note-app">
      
          <AddNewNote onAddNote={handelNote}/>
       
        
        <div className="note-container">
          <NoteList NoteList={nots} onDelete={handelDelete}/>
        </div>
      </div>

    </div>
   );
}
 
export default App;
