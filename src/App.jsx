import "./App.css";
import AddNewNote from "./components/AddNewNote";



function App() {
  const [notes, setNotes] = useState([]); 

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
    <di className="note-header">note header</di>
    <di className="note-app">
      <AddNewNote onAddNote={handleAddNote}/>
      <div className="note-container">
        <NoteList 
        notes={notes} 
        onDelete={handleDeleteNote} 
        onComplete={handleCompleteNote}/>
        </div> 
    </di>
  </di>

  ); 
}

export default App;
