import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    saveNote: (state,action) => { 
        const {id,date,title,description} = action.payload;
        //save the state
      state.value =[...state.value,{id,date,title,description}]
    },
  deleteNote: (state,action) => {
      const {id} = action.payload
        //clone the state
     const notesState=[...state.value];
     //remove the item from the state
    const filteredState=notesState.filter(i=>i.id !== id);
    //set the filteredState to the state
    state.value=filteredState;
  }
  },
})

export const { saveNote,deleteNote} = notesSlice.actions

export default notesSlice.reducer