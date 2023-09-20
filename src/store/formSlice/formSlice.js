import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        phone: '',
        master_name: "",
        date: "",
        time: ""
    },
    reducers: {
        updateField: (state, action)=>{
            state[action.payload.field] = action.payload.value;
        },
        resetForm: state=>{
            state.name ="";
            state.phone ="";
            state.master_name="";
            state.date="";
            state.time =""
        },
        reservation: (state, action)=>{
            const data = action.payload;
            console.log(data);
        }
    }
});

export const {resetForm, updateField, reservation} = formSlice.actions;

export default formSlice.reducer;