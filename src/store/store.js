import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bodyColorAndMenuSlice from "./bodyColorAndMenu/bodyColorAndMenuSlice";
import photosNailsSlice from "./photosNails/photosNailsSlice";

const rootReducer = combineReducers({
  bodyColorAndMenu: bodyColorAndMenuSlice,
  photosNails: photosNailsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
