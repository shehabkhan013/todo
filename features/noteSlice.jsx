import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    notes: []
}
const saveNotes = JSON.parse(localStorage.getItem('notes'))
if (saveNotes) {
    initialState.notes = saveNotes
}

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes = [...state.notes, action.payload]
            localStorage.setItem('notes', JSON.stringify(state.notes))
        },
        editNote: (state, action) => {
            state.notes = state.notes.map(note => note.id === action.payload.id ? action.payload : note)
            localStorage.setItem('notes', JSON.stringify(state.notes))
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload)
            localStorage.setItem('notes', JSON.stringify(state.notes))
        }
    }
})


export const { addNote,editNote, deleteNote } = noteSlice.actions
export default noteSlice.reducer