import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bodyColorAndMenuSlice from "./bodyColorAndMenu/bodyColorAndMenuSlice";
import photosNailsSlice from "./photosNails/photosNailsSlice";
import calendarSlice from "./Calendar/calendarSlice";
import formSlice from "./formSlice/formSlice";

const rootReducer = combineReducers({
  bodyColorAndMenu: bodyColorAndMenuSlice,
  photosNails: photosNailsSlice,
  calendar: calendarSlice,
  form: formSlice
  
});

export const store = configureStore({
  reducer: rootReducer,
});
