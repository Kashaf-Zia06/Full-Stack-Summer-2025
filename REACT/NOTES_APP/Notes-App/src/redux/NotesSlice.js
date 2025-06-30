import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
    notes: localStorage.getItem("notes")
        ? JSON.parse(localStorage.getItem("notes")) : []
}

export const NotesSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        AddNotes: (state, action) => {
            const notes = action.payload;
            state.notes.push(notes); //this will automatically modify state in global store

            localStorage.setItem("notes", JSON.stringify(state.notes));
            toast('Notes Created Successfully.');

        },
        UpdateNotes: (state, action) => {

            const notes = action.payload
            const index = state.notes.findIndex((item) => item._id === notes._id)

            if (index >= 0) {
                state.notes[index] = notes
                localStorage.setItem("notes", JSON.stringify(state.notes))
                toast.success("Updated successfuly")
            }

        },
        ResetNotes: (state, action) => {

            state.notes = []
            localStorage.removeItem("notes")
        },

        DeleteNotes: (state, action) => {
            const id = action.payload
            const index = state.notes.findIndex((item) => item._id === id)

            if (index >= 0) {
                state.notes.splice(index, 1)
                localStorage.setItem("notes", JSON.stringify(state.notes))
                toast.success("Deleted Successfully")
            }

        },

    },
})

// Action creators are generated for each case reducer function
export const { AddNotes, UpdateNotes, ResetNotes, DeleteNotes } = NotesSlice.actions

export default NotesSlice.reducer