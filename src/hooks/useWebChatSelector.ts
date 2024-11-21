import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const useWebChatSelectors = () => {


    //tab selector

    const install = useSelector((state: RootState) => state.webChats.install);
    const chatBubble = useSelector((state: RootState) => state.webChats.chatBubble);
    const chatWindow = useSelector((state: RootState) => state.webChats.chatWindow);
    const chatHeader = useSelector((state: RootState) => state.webChats.chatHeader);
    const chatFlow = useSelector((state: RootState) => state.webChats.chatFlow);
    const chatBot = useSelector((state: RootState) => state.webChats.chatBot);

    //desktop tab selector

    const desktopinstall = useSelector((state: RootState) => state.webChats.desktopinstall);
    const desktopchatBubble = useSelector((state: RootState) => state.webChats.desktopchatBubble);
    const desktopchatWindow = useSelector((state: RootState) => state.webChats.desktopchatWindow);
    const desktopchatHeader = useSelector((state: RootState) => state.webChats.desktopchatHeader);
    const desktopchatFlow = useSelector((state: RootState) => state.webChats.desktopchatFlow);
    const desktopchatBot = useSelector((state: RootState) => state.webChats.desktopchatBot);

    //Install
    // const install = useSelector((state: RootState) => state.webChats.install);

    //Chat Bubble
    const chatIcon = useSelector((state: RootState) => state.webChats.chatIcon);
    const chatIconbgColor = useSelector((state: RootState) => state.webChats.chatIconbgColor);
    const chatIconUpload = useSelector((state: RootState) => state.webChats.chatIconUpload);
    const chatIconColor = useSelector((state: RootState) => state.webChats.chatIconColor);
    const showWebChatBubble = useSelector((state: RootState) => state.webChats.showWebChatBubble);
    const showWebChatBubbleSound = useSelector((state: RootState) => state.webChats.showWebChatBubbleSound);
    const showWebChatBubbleMessage = useSelector((state: RootState) => state.webChats.showWebChatBubbleMessage);

    //  Chat Window
    const windowSize = useSelector((state: RootState) => state.webChats.windowSize);
    const headerColor = useSelector((state: RootState) => state.webChats.headerColor);
    const headerTextColor = useSelector((state: RootState) => state.webChats.headerTextColor);
    const buttonColor = useSelector((state: RootState) => state.webChats.buttonColor);
    const buttontextColor = useSelector((state: RootState) => state.webChats.buttontextColor);
    const loactions = useSelector((state: RootState) => state.webChats.loactions);
    const disclaimer = useSelector((state: RootState) => state.webChats.disclaimer);


    //  Chat Header
    const uploadAvtar = useSelector((state: RootState) => state.webChats.uploadAvtar);
    const userName = useSelector((state: RootState) => state.webChats.userName);
    const windowsOpens = useSelector((state: RootState) => state.webChats.windowsOpens);
    const teamheader = useSelector((state: RootState) => state.webChats.teamheader);
    const message = useSelector((state: RootState) => state.webChats.message);

    //  Chat Header
    const liveChat = useSelector((state: RootState) => state.webChats.liveChat);
    const closingMessage = useSelector((state: RootState) => state.webChats.closingMessage);
    const textToSent = useSelector((state: RootState) => state.webChats.textToSent);

    //chat bot 
    const botName = useSelector((state: RootState) => state.webChats.botName);
    const automatedResponse = useSelector((state: RootState) => state.webChats.automatedResponse);
    const faq = useSelector((state: RootState) => state.webChats.FAQ);


    return {
        install,
        chatBubble,
        chatWindow,
        chatHeader,
        chatFlow,
        chatBot,
        desktopinstall,
        desktopchatBubble,
        desktopchatWindow,
        desktopchatHeader,
        desktopchatFlow,
        desktopchatBot,
        chatIconUpload,
        chatIconbgColor,
        chatIconColor,
        showWebChatBubble,
        showWebChatBubbleSound,
        showWebChatBubbleMessage,
        chatIcon,
        windowSize,
        headerColor,
        headerTextColor,
        buttonColor,
        buttontextColor,
        loactions,
        disclaimer,
        uploadAvtar,
        userName,
        windowsOpens,
        teamheader,
        message,
        liveChat,
        closingMessage,
        textToSent,
        botName,
        automatedResponse,
        faq
    };
};

export default useWebChatSelectors;


