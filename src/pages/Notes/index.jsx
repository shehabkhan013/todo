import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote, editNote } from '../../../features/noteSlice';

const Notes = () => {
  const notes =useSelector((state)=>state.note.notes)
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleEdit = (note) => {
    return () => {
      setCurrentNote(note);
      setTitle(note.title);
      setDescription(note.description);
      setIsEditing(true);
    };
  };

  const handleSaveEdit = () => {
    if (currentNote) {
      dispatch(editNote({
        id: currentNote.id,
        title,
        description,
        createdAt: new Date().toLocaleDateString(),
      }));
      setIsEditing(false);
      setCurrentNote(null);
      setTitle('');
      setDescription('');
    }
  };
  const handleDeleteNote =(noteId)=>{
    return () => {
      dispatch(deleteNote(noteId));
    };
  }
  return (
    <>
     <div className="container">
     <h1 className='text-3xl font-bold text-center font-mono px-4 box-border mb-4 mt-10'>Notes</h1>
     {isEditing ? (
          <div className='w-1/3 bg-white shadow-md rounded-md p-4 mx-auto'>
            <h2 className="text-xl mb-2">Edit Note</h2>
            <input 
              onChange={(e) => setTitle(e.target.value)} 
              value={title} 
              placeholder='Edit Note' 
              type="text" 
              className='w-full rounded-md border border-gray-300 p-4 mb-2' 
            />
            <textarea 
              onChange={(e) => setDescription(e.target.value)} 
              value={description} 
              placeholder='Description' 
              rows={5} 
              className='w-full rounded-md border border-gray-300 p-4 resize-none'>
            </textarea>
            <div className="flex justify-center gap-5 mt-4">
              <button onClick={handleSaveEdit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Save</button>
              <button onClick={() => setIsEditing(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
            </div>
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-4">
            {notes && notes.map((note) => (
              <li key={note.id} className="w-1/3 bg-white shadow-md rounded-md p-4 mx-auto">
                <h2 className="text-xl mb-2"><strong>ID: </strong>{note.id}</h2>
                <h4 className="text-xl mb-2"><strong>Title: </strong>{note.title}</h4>
                <p className="text-xl mb-2"><strong>Description: </strong>{note.description}</p>
                <p className="text-xl mb-2"><strong>Created At: </strong>{note.createdAt}</p>
                <div className="flex justify-center gap-5 mt-4">
                  <button onClick={handleEdit(note)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                  <button onClick={handleDeleteNote(note.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
     </div>
    </>
  )
}

export default Notes