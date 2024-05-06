import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import { commonApi } from "./commonApi";
import messageSlice from "./messageSlice";


export const rootReducer = combineReducers({
    auth: authReducer,
    messages: messageSlice,
    [commonApi.reducerPath]: commonApi.reducer,
});
