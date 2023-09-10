import "./App.css";
import AddNewNote from "./components/AddNewNote";
const App = () => {
  return ( 
    <>
    <div className="container">
      <div className="note-header">Note header</div>
      <div className="note-app">
      <AddNewNote/>
        <div className="note-container"> note container</div>
      </div>
    </div>
    </>
   );
}
 


export default App;
