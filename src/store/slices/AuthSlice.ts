import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import LocalStorage from "../LocalStorage";

export interface Auth {
  refreshToken:string,
  accessToken:string,
  tokenType:string,
  deviceId:string,
}

interface AuthState {
  auth: Auth | null;
}

const initialState: AuthState = {
  auth: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Auth>) => {
      state.auth = action.payload;
      LocalStorage.set(state)
    },
    logout: (state) => {
      state.auth = null;
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;