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
        },
        price(){
            return document.body.style.backgroundImage="linear-gradient(#f0e6c4, #54d8d3)";
        },
        photos(){
            return document.body.style.backgroundImage="linear-gradient(#918bea, #fef6a4)";
        },
        enroll(){
            return document.body.style.backgroundImage="linear-gradient(#92daf0, #e7b4ec)";
        }
    }
})

export default bodyColorSlice.reducer
export const {home, aboutUs, price, photos, enroll} = bodyColorSlice.actions