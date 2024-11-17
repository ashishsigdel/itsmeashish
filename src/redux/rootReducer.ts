import { combineReducers } from "@reduxjs/toolkit";
import popupReducer from "./features/popupSlice";
import popupMessageReducer from "./features/popupMessageSlice";
import colorReducer from "./features/colorSlice"; // Add this
import authReducer from "./features/authSlice";

const rootReducer = combineReducers({
  popup: popupReducer,
  popupMessage: popupMessageReducer,
  color: colorReducer,
  auth: authReducer,
});

export const resetAll = () => {
  const initialState = rootReducer(undefined, { type: "" });
  return {
    type: "RESET_ALL",
    payload: initialState,
  };
};

export default rootReducer;
