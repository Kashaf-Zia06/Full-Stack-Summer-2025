import { configureStore } from '@reduxjs/toolkit'
import NotesSlicereducer  from './redux/NotesSlice'




export const store = configureStore({
  reducer: {
    note:NotesSlicereducer, //key that will manage the state (note)
  }
})
