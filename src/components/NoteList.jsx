


function NoteList ({notes, onDelete, onComplete, sortBy}) {

  let sortedNotes = notes; 
  if (sortBy === "earliest") 
    sortedNotes = [...notes].sort(
  (a,b) => new Date(a.createdAt) - new Date(b.createdAt)
); 


  if (sortBy === "latest") 
    sortedNotes = [...notes].sort(
  (a,b) => new Date(b.createdAt) - new Date(a.createdAt)
); 


if(sortBy === "completed") 
  sortedNotes = [...notes].sort(
(a,b) => Number(a.completed) - Number(b.completed)); 

    return (
        <div className="note-list">
            {sortedNotes.map((notes) => (
                    <NoteItem 
                    key={notes.id} 
                    note={note} 
                    onDelete={onDelete}
                    onComplete={onComplete}/>
                ))}
        </div>
    ); 
}


export default function NoteItem({ note, onDelete, onComplete}) {


    const options = {
        year: "numeric", 
        month: "long",
        day: "numeric", 
    }; 

    return (
        <div className={`note-item ${note.completed ? "completed" : ""}`}>
          <div className="note-item__header">
            <div>
              <p className="title">{note.title}</p>
              <p className="desc">{note.description}</p>
            </div>
            <div className="actions">
              <button onClick={() => onDelete(note.id)}>X</button>
              <input 
                type="checkbox" 
                name={note.id} 
                id={note.id} 
                value={note.id} 
                checked={note.completed}
                onChange={onComplete}
              />
            </div>
          </div>
          <div className="note-item__footer">
            {new Date(note.createdAt).toLocaleDateString("en-us", options)}
          </div>
        </div>
      );
    }
