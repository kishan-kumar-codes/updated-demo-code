"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EmojiSvgs, WebchatSettingEditSvg } from "@/svgs/Webchat-Settings/svgs";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import ChatDropDown from "./ChatDropDown";
import { useDispatch } from "react-redux";
import useWebChatSelectors from "@/hooks/useWebChatSelector";
import { setWebChat } from "@/store/slices/webChatSettingSlice";
const ChatFlowDialog = () => {
  const [message, setMessage] = useState<string>("");
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false); // Emoji picker visibility state
  const handleEmojiSelect = (emoji: any) => {
    setMessage((prevMessage) => prevMessage + emoji.native);
    setEmojiPickerVisible(false); // Close the picker after selecting an emoji
  };

  const dispatch = useDispatch();

  const { liveChat, closingMessage, textToSent } = useWebChatSelectors();

  const members = [
    { value: "option1", label: "Personalize" },
    { value: "option2", label: "Contact Address" },
    { value: "option3", label: "Order Status" },
    { value: "option4", label: "Order Number" },
  ];

  // Callback function for handling member selection
  const handleSelect = React.useCallback(
    ({ label, value }: { label: string; value: string }) =>
      console.log("Selected option:", { label, value }),
    []
  );

  const handleClosingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setWebChat({
        closingMessage: event.target.value,
      })
    );
  };

  const handletextSentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(
      setWebChat({
        textToSent: event.target.value,
      })
    );
  };

  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger>
          {" "}
          <WebchatSettingEditSvg />{" "}
        </DialogTrigger>
        <div className="flex justify-center w-full">
          <DialogContent className="w-[75%] lg:w-[70%] p-4 rounded-xl bg-[#F4F4F4] flex">
            <DialogDescription className="w-full flex">
              <div className="flex  w-full  ">
                <div className="w-1/8 flex  ">
                  <div className="w-full items-center h-full flex flex-col ">
                    <span className="text-[#FFF] z-50 bg-[#631363] w-10 flex justify-center items-center h-10 rounded-full">
                      1
                    </span>
                    <hr className="h-10 w-0.5 flex z-20 -mt-1 justify-center items-center bg-[#631363]" />
                    <span className="text-[#FFF] z-50 bg-[#631363] w-10 flex justify-center items-center h-10 rounded-full">
                      2
                    </span>
                    <hr className="h-44 lg:h-60 w-0.5 flex z-20 -mt-1 justify-center items-center bg-[#631363]" />
                    <span className="text-[#FFF] z-50 bg-[#631363] w-10 flex justify-center items-center h-10 rounded-full">
                      3
                    </span>
                  </div>
                </div>
                <div className="w-full h-full items-center  gap-2 flex flex-col px-2 ">
                  <div className="w-full flex items-center h-10">
                    <span className="text-[#6D6D6D] h-10 text-sm lg:text-[24px]  flex items-center font-normal leading-normal">
                      Contacts fill out form
                    </span>
                  </div>
                  <div className="w-full flex items-center mt-7 h-10">
                    <span className="text-[#6D6D6D] h-10 text-sm  lg:text-[24px] flex items-center font-normal leading-normal">
                      Closing message
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="We will text you !"
                    onChange={handleClosingChange}
                    value={closingMessage}
                    className="w-full p-1 lg:p-3 focus:outline-none pl-3  lg:text-[22px] rounded-2xl bg-white text-[#6D6D6D] text-sm font-normal leading-normal h-[39.3px]"
                  />
                  <div className="relative justify-center flex items-center z-50 w-full">
                    <textarea
                      placeholder="We will follow up with you soon. You can always text us at [Business Phone]"
                      rows={5}
                      onChange={handletextSentChange}
                      value={textToSent}
                      className="w-full mt-3  p-2 lg:p-3 lg:text-[22px]  focus:outline-none pl-3 rounded-2xl resize-none text-[#6D6D6D] text-xs font-normal leading-4 lg:leading-7  bg-white"
                    />
                    <span
                      className=" absolute left-1 bottom-2 p-1 cursor-pointer"
                      onClick={() =>
                        setEmojiPickerVisible(!emojiPickerVisible)
                      }>
                      <EmojiSvgs />
                    </span>
                    <span className="absolute w-1/2 right-1 bottom-0">
                      <ChatDropDown
                        options={members}
                        onSelect={handleSelect}
                        bgColor="#FFFFFF"
                        color="#631363"
                      />
                    </span>
                    {emojiPickerVisible && (
                      <div className="flex z-50  -ml-28  ">
                        <Picker
                          data={data}
                          onEmojiSelect={handleEmojiSelect}
                          theme="light"
                        />
                      </div>
                    )}
                  </div>
                  <div className="w-full flex items-center h-10">
                    <span className="text-[#6D6D6D] h-10 text-sm  lg:text-[24px] flex items-center font-normal leading-normal">
                      Text sent to contact
                    </span>
                  </div>
                  <div className="relative justify-center flex -mt-5 items-center z-20 w-full">
                    <textarea
                      placeholder="We will follow up with you soon. You can always text us at [Business Phone]"
                      rows={5}
                      onChange={handletextSentChange}
                      value={textToSent}
                      className="w-full mt-3  p-2 lg:p-3 lg:text-[22px] focus:outline-none pl-3 rounded-2xl resize-none text-[#6D6D6D] text-xs leading-4 lg:leading-7 font-normal bg-[#FFFFFF]"
                    />
                    <span
                      className=" absolute left-1 bottom-2 p-1 cursor-pointer"
                      onClick={() =>
                        setEmojiPickerVisible(!emojiPickerVisible)
                      }>
                      <EmojiSvgs />
                    </span>
                    <span className="absolute w-1/2 right-1 bottom-0">
                      <ChatDropDown
                        options={members}
                        onSelect={handleSelect}
                        bgColor="#FFFFFF"
                        color="#631363"
                      />
                    </span>
                    {emojiPickerVisible && (
                      <div className="flex z-50  -ml-28  ">
                        <Picker
                          data={data}
                          onEmojiSelect={handleEmojiSelect}
                          theme="light"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default ChatFlowDialog;
