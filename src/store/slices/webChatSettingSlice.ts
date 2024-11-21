import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Value } from 'react-phone-number-input';

export interface WebChatTypes {

    // tabselection 
    install: boolean;
    chatBubble: boolean;
    chatWindow: boolean;
    chatHeader: boolean;
    chatFlow: boolean;
    chatBot: boolean;

    // tabselection
    desktopinstall: boolean;
    desktopchatBubble: boolean;
    desktopchatWindow: boolean;
    desktopchatHeader: boolean;
    desktopchatFlow: boolean;
    desktopchatBot: boolean;

    //Install
    installed: ""

    // Chat Bubble
    chatIcon: number;
    chatIconbgColor: string;
    chatIconUpload: string;
    chatIconColor: string;
    showWebChatBubble: boolean;
    showWebChatBubbleSound: boolean;
    showWebChatBubbleMessage: string;

    // Chat Window
    windowSize: string,
    headerColor: string,
    headerTextColor: string,
    buttonColor: string,
    buttontextColor: string,
    loactions: true,
    disclaimer: string

    //Chat Header 
    uploadAvtar: string,
    userName: string,
    windowsOpens: string,
    teamheader: string,
    message: string,


    //Chat Flow
    liveChat: boolean,
    closingMessage: string,
    textToSent: string,

    //Chat bot
    botName: boolean,
    automatedResponse: Array<{ value: string; label: string }>,
    FAQ: Array<{ qus: string; ans: string, location: Array<string> }>,


}

export const initialState: WebChatTypes = {

    // tab Selection 
    install: false,
    chatBubble: false,
    chatWindow: false,
    chatHeader: false,
    chatFlow: false,
    chatBot: false,

    // desktop tab Selection
    desktopinstall: true,
    desktopchatBubble: false,
    desktopchatWindow: false,
    desktopchatHeader: false,
    desktopchatFlow: false,
    desktopchatBot: false,

    // Installed
    installed: "",

    // Chat bubble
    chatIcon: 1,
    chatIconUpload: "",
    chatIconbgColor: "#6B0B22",
    chatIconColor: "#FFFFFF",
    showWebChatBubble: true,
    showWebChatBubbleSound: true,
    showWebChatBubbleMessage: "Have a question? Ask us, we are here to help!",

    //Chat Window
    windowSize: "small",
    headerColor: "#3D3D3D",
    headerTextColor: "#FFFFFF",
    buttonColor: "#6B0B22",
    buttontextColor: "#FFFFFF",
    loactions: true,
    disclaimer: "By sending this message, you expressly consent to receive communications from us. You may opt out at any time. ",

    //Chat header
    uploadAvtar: "",
    userName: "",
    windowsOpens: "true",
    teamheader: "Let's Chat",
    message: "",


    //Chat Flow
    liveChat: false,
    closingMessage: "We will text you !",
    textToSent: "We will follow up with you soon. You can always text us at [Business Phone]",

    //Chat bot
    botName: true,
    automatedResponse: [
        { value: "option1", label: "Bluffton - RB" },
        { value: "option2", label: "Bluffton - RB" },
    ],
    FAQ: [
        { qus: "Testing Question 1", ans: "Answer Question 1", location: ["All Locations", "Private", "Public"] },
        { qus: "Testing Question 2", ans: "Answer Question 2", location: ["All Locations", "Private", "Public"] },
        { qus: "Testing Question 3", ans: "Answer Question 3", location: ["All Locations", "Private", "Public"] },
    ],
};


const webChatSettingsSlice = createSlice({
    name: 'webChat',
    initialState,
    reducers: {
        setWebChat(state, action: PayloadAction<Partial<WebChatTypes>>) {
            return { ...state, ...action.payload };
        },
    },
});


export const { setWebChat } = webChatSettingsSlice.actions;
export default webChatSettingsSlice.reducer;