import { configureStore } from '@reduxjs/toolkit'
import notesSlice from './slices/notesSlice'
export const store = configureStore({
  reducer: {
      notes:notesSlice
    }
})