import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { MessageModel } from "../models/commonModel";

const initialState: MessageModel = {
    messages: [],
};

export const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        setMessages: (
            state,
            action: PayloadAction<
                { messageId: string; message: string; type: string }[]
            >
        ) => {
            state.messages = action.payload;
        },
    },
});

export const selectMessage = (state: RootState) => state.messages;
export const { setMessages } = messageSlice.actions;
export default messageSlice.reducer;
