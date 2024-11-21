"use client"; // Assuming you're using this in a client component
import React, { useEffect, useRef, useState } from "react";
import HeadBar from "../citations-builder/HeadBar";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import {
  WebchatSettingEditSvg,
  WebchatSettingICroxxButtonSvg,
  WebchatSettingMessageChat1Svg,
  WebchatSettingSendSvg,
  EmojiSvgs,
  WebchatSettingUploadSvg, // Assuming you have an upload icon SVG
} from "@/svgs/Webchat-Settings/svgs";
import moment from "moment";
import { Button } from "../ui/button";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Image from "next/image";
import ChatFlowDialog from "./ChatFlowDialog";
import useWebChatSelectors from "@/hooks/useWebChatSelector";
import { useDispatch } from "react-redux";
import { setWebChat } from "@/store/slices/webChatSettingSlice";

const WebChatFlow: React.FC = () => {
  const [openWebchat, setOpenWebchat] = useState(true);
  const [message, setMessage] = useState<string>(""); // Input message
  const [chatFlowShow, setChatFlowShow] = useState(false);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false); // Emoji picker visibility state
  const [chatMessages, setChatMessages] = useState<
    { text: string; time: string }[]
  >([
    {
      text: "I would like to learn more about this place.",
      time: moment().format("LT"),
    },
  ]);

  const dispatch = useDispatch();

  const { liveChat, closingMessage, textToSent } = useWebChatSelectors();

  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Reference for file input
  const [imageData, setImageData] = useState<string | null>(null); // Store image data URL

  // Handle sending the message
  const handleSaveMessage = () => {
    if (message.trim() || imageData) {
      const timeSent = moment().format("LT"); // Get the current time
      setChatMessages((prevMessages) => [
        ...prevMessages,
        {
          text:
            message +
            (imageData
              ? `<img src="${imageData}" alt="uploaded" style="max-width: 100%; height: auto; border-radius: 10px;" />`
              : ""),
          time: timeSent,
        },
      ]); // Add message with time to chat
      setMessage(""); // Clear input after sending
      setImageData(null); // Clear image data after sending
    }
  };

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  // Handle "Enter" key press to send the message
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSaveMessage();
    }
  };

  // Handle emoji selection and insertion into message
  const handleEmojiSelect = (emoji: any) => {
    setMessage((prevMessage) => prevMessage + emoji.native);
    setEmojiPickerVisible(false); // Close the picker after selecting an emoji
  };

  // Handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result as string); // Store image data for display
        setMessage((prevMessage) => prevMessage + " "); // Add space to allow cursor to be at the end
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconChange = (value: boolean) => {
    dispatch(
      setWebChat({
        liveChat: value,
      })
    );
  };

  return (
    <div className="flex flex-col z-50 rounded-2xl justify-center items-center w-full h-full">
      <div className="flex rounded-3xl z-10 min-h-[160px] justify-start px-5 w-full py-3">
        <div className="flex flex-col w-full gap-4 pt-2 p-0 lg:p-6">
          <div className="w-full flex justify-between">
            <Label
              htmlFor="airplane-mode"
              className="text-[#631363] text-sm md:text-lg lg:text-[24px] font-bold leading-normal">
              Live Chat
            </Label>
            <Switch
              checked={liveChat}
              onCheckedChange={handleIconChange}
              id="open-webchat"
            />
          </div>
          <div className="w-[95%] gap-3 flex-col h-full flex">
            <span className="text-[#6D6D6D] text-[11px] md:text-base lg:text-[22px] lg:leading-7 tracking-tight font-bold leading-normal md:leading-5 ">
              When Live chat is turned on, website visitors can message your
              business and your team can respond directly on your website.
              <strong className="text-[#631363]"> Learn more.</strong>
            </span>
            <span className="text-[#631363] text-sm md:text-lg lg:text-[24px]  flex pt-3 font-bold leading-normal">
              During business hours
            </span>
            <span className="text-[#6D6D6D] text-[11px] md:text-base lg:text-[22px]  tracking-tight font-bold leading-normal">
              This is the chat flow during your business hours
            </span>
          </div>

          <div className="w-full justify-center bg-[#E0E0E0]  items-center flex flex-col my-4 py-2 lg:py-6 h-full">
            {openWebchat && (
              <div className="w-[70%] md:w-[50%] lg:w-[30%] h-[330.2px] lg:h-[480px] shrink-0 relative bg-white rounded-lg">
                <div className="w-full flex h-20 bg-[#3D3D3D] rounded-t-lg">
                  <div className="w-full h-full flex justify-between">
                    <span className="text-white text-sm  md:text-lg lg:text-[24px] font-bold p-2 pt-3 leading-normal">
                      Hello visitor!
                    </span>
                    <span className="p-2">
                      {/* <WebchatSettingEditSvg /> */}
                      <ChatFlowDialog />
                    </span>
                  </div>
                </div>

                {/* Chat message container */}
                <div className="flex flex-col w-full overflow-y-auto no-scrollbar h-[200px]">
                  {chatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex w-full p-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`flex flex-col ${index % 2 === 0 ? "items-end" : "items-start"}`}>
                        <div
                          className={` text-[10px] md:text-sm lg:text-[16px] max-w-[80%] py-2 px-4 ${index % 2 === 0 ? "bg-[#6B0B22] text-[#FFF] rounded-b-xl rounded-tl-xl" : "bg-[#E0E0E0] rounded-b-xl rounded-tr-xl text-[#606060]"} `}
                          dangerouslySetInnerHTML={{ __html: msg.text }} // Render HTML for messages
                        />
                        <div className="text-[6px] md:text-xs lg:text-[16px] text-gray-400 mt-1">
                          {msg.time} {/* Show the time next to the message */}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messageEndRef} />
                </div>

                {/* Message input, emoji icon, upload icon, and send button */}
                {chatFlowShow ? (
                  <div className="absolute bottom-6 w-full px-2">
                    <div className="flex items-center relative">
                      <textarea
                        className={`w-full text-xs py-2 ${imageData ? "pl-7" : "pl-4"}  bg-[#F4F4F4] rounded-xl focus:outline-none resize-none`}
                        value={message}
                        placeholder="Type a message"
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress} // Handle Enter key press
                        rows={1}
                      />
                      {/* Render image if uploaded */}
                      {imageData && (
                        <Image
                          src={imageData}
                          alt="uploaded"
                          width={12}
                          height={12}
                          className="absolute w-3 h-3 rounded-sm top-2 left-3" // Position it as needed
                        />
                      )}
                      <span
                        className="absolute left-2 -bottom-4 p-1 cursor-pointer"
                        onClick={() =>
                          setEmojiPickerVisible(!emojiPickerVisible)
                        }>
                        <EmojiSvgs />
                      </span>
                      <span
                        className="absolute left-6 -bottom-4 p-1 cursor-pointer"
                        onClick={() => fileInputRef.current?.click()} // Trigger file input click
                      >
                        <WebchatSettingUploadSvg />
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleImageUpload} // Handle image upload
                      />
                      <span
                        className="absolute right-2 bottom-1 p-2 cursor-pointer"
                        onClick={handleSaveMessage}>
                        <WebchatSettingSendSvg />
                      </span>
                    </div>
                    {emojiPickerVisible && (
                      <div className="flex absolute z-50 w-[50%] left-1/2 -translate-x-1/2 items-center justify-center">
                        <Picker
                          data={data}
                          onEmojiSelect={handleEmojiSelect}
                          theme="light"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="absolute bottom-2 w-full ">
                    <div className="flex flex-col w-full items-center">
                      <hr className="my-4 border-[#E0E0E0] border w-full " />
                      <div className="w-[80%] gap-2 flex flex-col items-center justify-center pb-2 lg:pb-6">
                        <WebchatSettingMessageChat1Svg />
                        <span className="text-[#6D6D6D] text-[10px] md:text-base lg:text-[20px] font-bold leading-normal">
                          {closingMessage}
                        </span>
                        <span className="text-[#6D6D6D] text-[8px] md:text-sm lg:text-[14px] text-center font-normal leading-normal lg:leading-4">
                          {textToSent}
                        </span>
                        <Button
                          className="bg-[#6B0B22] w-full text-white text-[10px] md:text-sm lg:text-[18px] font-normal leading-normal"
                          onClick={() => setChatFlowShow(true)}>
                          Send Another Message
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div
              className="w-[60%] lg:w-[25%] flex h-full justify-end cursor-pointer my-2"
              onClick={() => setOpenWebchat(!openWebchat)}>
              <WebchatSettingICroxxButtonSvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebChatFlow;
