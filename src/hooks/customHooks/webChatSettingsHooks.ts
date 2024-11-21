import React, { useState, useCallback, useRef } from "react";
// import { useAppDispatch } from "../hooks";
// import {
//     ChatBubbleSettings,
//     updateWebChatSettings,
// } from "../store/slices/webChatSlice"

// Custom hook to manage Web Chat settings with performance optimizations
export function useWebChatSettingsHookas() {
    // const dispatch = useAppDispatch();
    // State for creating new chat settings
    const [create, setCreate] = useState(false);

    // State for tracking active web chat tab (Edit or other tabs)
    const [webChattabActive, setWebChatTabActive] = useState<string>("Edit");

    // Function to handle tab switching, memoized to avoid re-creating on every render
    const handleWebChatTab = useCallback(
        (value: string) => setWebChatTabActive(value),
        []
    );

    // State for installation status
    const [install, setInstall] = useState<boolean>(false);

    // State for chat bubble settings
    const [chatBubble, setChatBubble] = useState<boolean>(false);
    const [selectChatIcon, setSelectChatIcon] = useState<string>("chatIcon1");
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result as string); // Save the image as base64
            };
            reader.readAsDataURL(file);
        }
    };

    // State for bubble background and icon colors
    const [bubbleColors, setBubbleColors] = useState({
        bgColor: "#6B0B22",
        iconColor: "#ffffff",
    });

    // State for chat window settings
    const [chatWindow, setChatWindow] = useState(false);
    const [chatWindowSettings, setChatWindowSettings] = useState({
        size: "small",
        headerColor: "#3D3D3D",
        headerTextColor: "#FFFFFF",
        buttonColor: "#6B0B22",
        buttonTextColor: "#FFFFFF",
    });

    // Handlers for bubble and chat window colors, memoized to avoid unnecessary re-renders
    const handleColorChange = useCallback(
        (newColor: string) =>
            setBubbleColors((prev) => ({ ...prev, bgColor: newColor })),
        []
    );

    const handleIconColorChange = useCallback(
        (newColor: string) =>
            setBubbleColors((prev) => ({ ...prev, iconColor: newColor })),
        []
    );

    const handleChatIconChange = useCallback(
        (value: string) => setSelectChatIcon(value),
        []
    );

    const handleChatWindowSettingChange = useCallback(
        (key: keyof typeof chatWindowSettings, value: string) =>
            setChatWindowSettings((prev) => ({ ...prev, [key]: value })),
        []
    );
    // const wechatsettings: ChatBubbleSettings = {
    //     uploadedImage,
    //     selectChatIcon,
    //     bubbleBgColor: bubbleColors.bgColor,
    //     bubbleIconColor: bubbleColors.iconColor,
    //     chatWindow,
    //     chatWindowSettings: {
    //         size: chatWindowSettings.size,
    //         headerColor: chatWindowSettings.headerColor,
    //         headerTextColor: chatWindowSettings.headerTextColor,
    //         buttonColor: chatWindowSettings.buttonColor,
    //         buttonTextColor: chatWindowSettings.buttonTextColor,
    //     },
    // };
    // // Handle form submission and log all values
    // const handleSubmit = () => {
    //     dispatch(updateWebChatSettings(wechatsettings));

    // };

    return {
        // Basic settings
        create,
        setCreate,
        webChattabActive,
        setWebChatTabActive,
        handleWebChatTab,
        install,
        setInstall,
        chatBubble,
        setChatBubble,

        // Chat icon settings
        uploadedImage,

        fileInputRef,
        handleImageUpload,

        // Chat bubble settings
        selectChatIcon,
        bubbleBgColor: bubbleColors.bgColor,
        bubbleIconColor: bubbleColors.iconColor,
        handleColorChange,
        handleIconColorChange,
        handleChatIconChange,

        // Chat window settings
        chatWindow,
        setChatWindow,
        chatWindowsSize: chatWindowSettings.size,
        chatWindowHeaderColor: chatWindowSettings.headerColor,
        chatWindowHeaderTextColor: chatWindowSettings.headerTextColor,
        chatWindowButtonColor: chatWindowSettings.buttonColor,
        chatWindowButtonTextColor: chatWindowSettings.buttonTextColor,

        // Handlers for chat window settings
        handleChatWindowHeaderColor: (value: string) =>
            handleChatWindowSettingChange("headerColor", value),
        handleChatWindowHeaderTextColor: (value: string) =>
            handleChatWindowSettingChange("headerTextColor", value),
        handleChatWindowButtonColor: (value: string) =>
            handleChatWindowSettingChange("buttonColor", value),
        handleChatWindowButtonTextColor: (value: string) =>
            handleChatWindowSettingChange("buttonTextColor", value),
        handleWindowSize: (value: string) =>
            handleChatWindowSettingChange("size", value),

        // Form submission handler
        // handleSubmit,
    };
}
