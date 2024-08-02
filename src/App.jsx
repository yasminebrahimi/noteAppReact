import "./App.css";
import AddNewNote from "./components/AddNewNote";



function App() {
  const [notes, setNotes] = useState([]); 

  
  return <di className= "container">
    <di className="note-header">note header</di>
    <di className="note-app">
      <AddNewNote/>
      <div className="note-container">
        <NoteList />
        </div> 
    </di>
  </di>
}

export default App;
