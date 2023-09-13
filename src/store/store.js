import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bodyColorAndMenuSlice from "./bodyColorAndMenu/bodyColorAndMenuSlice";
import photosNailsSlice from "./photosNails/photosNailsSlice";
import calendarSlice from "./Calendar/calendarSlice";

const rootReducer = combineReducers({
  bodyColorAndMenu: bodyColorAndMenuSlice,
  photosNails: photosNailsSlice,
  calendar: calendarSlice
  
});

export const store = configureStore({
  reducer: rootReducer,
});
