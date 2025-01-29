import { createSlice, configureStore } from "@reduxjs/toolkit";

interface AuthState {
  isLogin: boolean;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
  } as AuthState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;