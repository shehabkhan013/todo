import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from '../../../features/noteSlice';

const Home = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handelChange = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now().toString(32),
      title,
      description,
      createdAt: new Date().toLocaleDateString()
    }
    dispatch(addNote(newNote))
    setTitle("");
    setDescription("");
  }
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className='w-1/4 bg-white shadow-md rounded-md p-4'>
          <div>
            <h1 className='text-3xl font-bold text-center font-mono px-4 box-border mb-4'>Add your Notes</h1>
            <input onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Add Note' type="text" className='w-full rounded-md border border-gray-300 p-4 mb-2' />
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} placeholder='Description' rows={5} className='w-full rounded-md border border-gray-300 p-4 resize-none'></textarea>
            <button onClick={handelChange} className='w-full bg-black hover:bg-gray-500 text-white rounded-md p-4 mt-4'>Save Note</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home