import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ChatBubbleSettings {
    uploadedImage: string | null;
    selectChatIcon: string;
    bubbleBgColor: string;
    bubbleIconColor: string;
    chatWindow: boolean;
    chatWindowSettings: {
        size: string;
        headerColor: string;
        headerTextColor: string;
        buttonColor: string;
        buttonTextColor: string;
    };
}


interface IWebChatSettings {
    webChatValues: ChatBubbleSettings; // Change to not allow null
}

const initialState: IWebChatSettings = {
    webChatValues: {
        uploadedImage: "/user.png",
        selectChatIcon: "chatIcon1",
        bubbleBgColor: "#F4F4F4",
        bubbleIconColor: "#6D6D6D",
        chatWindow: false,
        chatWindowSettings: {
            size: "small",
            headerColor: "#F4F4F4",
            headerTextColor: "#6D6D6D",
            buttonColor: "#F4F4F4",
            buttonTextColor: "#6D6D6D",
        },
    },
};

export const webChatSlice = createSlice({
    name: "webChat",
    initialState,
    reducers: {
        updateWebChatSettings: (state, action: PayloadAction<Partial<ChatBubbleSettings>>) => {
            const newValues = action.payload;

            // Only update values if newValues contains at least one property
            if (Object.keys(newValues).length > 0) {
                state.webChatValues = { ...state.webChatValues, ...newValues };
            }
        },
    },
});

export const { updateWebChatSettings } = webChatSlice.actions;
export default webChatSlice.reducer;
