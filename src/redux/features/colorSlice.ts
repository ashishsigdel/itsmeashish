import { createSlice } from "@reduxjs/toolkit";

interface ColorState {
  color: string;
}

const initialState: ColorState = {
  color: "55, 200, 113", // Default green-like color
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload; // Payload will be the new color in RGB format
    },
    resetColor: (state) => {
      state.color = "55, 200, 113"; // Reset to default color
    },
  },
});

export const { setColor, resetColor } = colorSlice.actions;
export default colorSlice.reducer;
