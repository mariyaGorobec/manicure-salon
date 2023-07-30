import { combineReducers, configureStore } from "@reduxjs/toolkit"
import bodyColorSlice from "./bodyColor/bodyColorSlice"

const rootReducer = combineReducers({
   bodyColor: bodyColorSlice,
})

export const store = configureStore({
   reducer: rootReducer
})


