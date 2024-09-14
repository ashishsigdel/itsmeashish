import { combineReducers } from "@reduxjs/toolkit";
import popupReducer from "./features/popupSlice";
import popupMessageReducer from "./features/popupMessageSlice";
import colorReducer from "./features/colorSlice"; // Add this

const rootReducer = combineReducers({
  popup: popupReducer,
  popupMessage: popupMessageReducer,
  color: colorReducer,
});

export const resetAll = () => {
  const initialState = rootReducer(undefined, { type: "" });
  return {
    type: "RESET_ALL",
    payload: initialState,
  };
};

export default rootReducer;
