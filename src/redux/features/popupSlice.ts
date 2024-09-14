import { createSlice } from "@reduxjs/toolkit";

interface PopUpState {
  isOpen: boolean;
  count: number;
}

const initialState: PopUpState = {
  isOpen: false,
  count: 0,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    togglePopup(state) {
      state.isOpen = !state.isOpen;
      state.count = ++state.count;
    },
  },
});

export const { togglePopup } = popupSlice.actions;
export default popupSlice.reducer;
