import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bodyColorAndMenuSlice from "./bodyColorAndMenu/bodyColorAndMenuSlice";

const rootReducer = combineReducers({
  bodyColorAndMenu: bodyColorAndMenuSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
