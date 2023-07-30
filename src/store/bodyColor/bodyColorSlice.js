import { createSlice } from "@reduxjs/toolkit";

const initialState = document.body.style.backgroundImage = "linear-gradient(#f0e8c2, #fe8bf1)";

const bodyColorSlice = createSlice({
    name: 'bodyColor',
    initialState: initialState,
    reducers:{
        home(){
            return document.body.style.backgroundImage = "linear-gradient(#f0e8c2, #fe8bf1)";
        },
        aboutUs(){
            return document.body.style.backgroundImage="linear-gradient(#4ad8d6, #8970ef)";
        }
    }
})

export default bodyColorSlice.reducer
export const {home, aboutUs} = bodyColorSlice.actions