import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  fullName: string;
  email: string;
  role: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: true,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
    },

    removeAuth: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
    },

    resetAuth: () => {
      return initialState;
    },
  },
});

export const { setAuth, removeAuth, resetAuth } = authSlice.actions;
export default authSlice.reducer;
