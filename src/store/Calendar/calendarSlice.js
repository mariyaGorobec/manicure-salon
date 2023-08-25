import { createSlice } from "@reduxjs/toolkit";


const initialState = {};

const calendarSlice = createSlice({
    name: "calendarSlice",
    initialState: initialState,
    reducers:{
        changeMaster(state,action){
        
        }
    }
})

export default calendarSlice.reducer;
export const { changeMaster} = calendarSlice.actions;
