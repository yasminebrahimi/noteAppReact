import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteHeader from "./components/NoteHeader";
import NoteStatus from "./components/NoteStatus";



function App() {
  const [notes, setNotes] = useState([]); 
  const [sortBy, setSortBy] = useState("latest")

  const handleAddNote = (newNotes) => {
    setNotes((prevNotes)  => [...prevNotes, newNote]); 
  }


  const handleDeleteNote = (id) => {

    setNotes(prevNotes => prevNotes.filter((n) => n.id !== id)); 
  }; 


  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value); 
    const newNotes = notes.map((note) => 
      note.id === noteId ? {...note,completed:!note.completed}:note
  ); 
  setNotes(newNotes); 


  setNotes(prevNotes => notes.map((note) => 
    note.id === noteId ? {...note,completed:!note.completed}:note 
));
  };  


  
  return (
  <di className= "container">
    <NoteHeader note={notes} sortBy={sortBy} onSort={e => setSortBy(e.target.value)}/>
    <di className="note-header">note header</di>
    <di className="note-app">
      <AddNewNote onAddNote={handleAddNote}/>
      <div className="note-container">
        <NoteStatus notes={notes}/>
        <NoteList   
        notes={notes} 
        sortBy={sortBy}
        onDelete={handleDeleteNote} 
        onComplete={handleCompleteNote}/>
        </div> 
    </di>
  </di>

  ); 
}

export default App;
