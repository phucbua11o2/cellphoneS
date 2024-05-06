import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface LoginState {
    userName: string | null;
    token: string | null;
}

const initialState: LoginState = {
    userName: null,
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: () => {
            localStorage.removeItem("jwt");
            return initialState;
        },
        // logout: (state) => {
        //   state.userName = null;
        //   state.token = null;
        // },
        login: (state, action: PayloadAction<LoginState>) => {
            localStorage.setItem("jwt", action.payload.token as string);
            state.userName = action.payload.userName;
            state.token = action.payload.token;
        },
    },
});

export const selectAuth = (state: RootState) => state.auth;
export const { logout, login } = authSlice.actions;
export default authSlice.reducer;
