"use client";
import React, { useState, useRef } from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import HeadBar from "../citations-builder/HeadBar";
import {
  WebchatSettingIcon1Svg,
  WebchatSettingIcon2Svg,
  WebchatSettingIcon3Svg,
  WebchatSettingIcon4Svg,
} from "@/svgs/Webchat-Settings/svgs";
import ColorPickerComponent from "./ColorPicker";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import Image from "next/image";
import { setWebChat } from "@/store/slices/webChatSettingSlice";
import useWebChatSelectors from "@/hooks/useWebChatSelector";
import useDispatchAction from "@/store/helper/dispatchState";
import { useDispatch } from "react-redux";
import WebChatView from "./WebChatView";

interface WebChatBubbleProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const WebChatBubble: React.FC<WebChatBubbleProps> = ({ fileInputRef }) => {
  const handleDispatch = useDispatchAction(setWebChat);
  const dispatch = useDispatch();

  const {
    chatBubble,
    chatIcon,
    chatIconbgColor,
    chatIconColor,
    showWebChatBubble,
    chatIconUpload,
    showWebChatBubbleSound,
    showWebChatBubbleMessage,
  } = useWebChatSelectors();

  const handleheaderSelect = () => {
    dispatch(
      setWebChat({
        chatBubble: !chatBubble,
      })
    );
  };

  const handleIconChange = (value: number) => {
    handleDispatch("chatIcon", value);
  };

  const handleIconBgChange = (value: string) => {
    handleDispatch("chatIconbgColor", value);
  };

  const handleIconColorChange = (value: string) => {
    handleDispatch("chatIconColor", value);
  };
  const hanldeShowBubble = (value: boolean) => {
    handleDispatch("showWebChatBubble", value);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleDispatch("chatIconUpload", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBubbleMessage = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    handleDispatch("showWebChatBubbleMessage", event.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center rounded-2xl w-full bg-[#E0E0E0] h-full">
      <div className="flex rounded-3xl min-h-[160px] justify-start px-5 w-full  bg-[#E0E0E0] py-3">
        <div className="flex flex-col w-full gap-3 lg:gap-8 h-full pt-1 p-0 lg:p-4">
          <div className="w-full flex flex-col gap-2 justify-between lg:flex-row">
            <div className="text-[#631363] text-sm lg:whitespace-nowrap md:text-lg lg:text-[22px] font-bold leading-normal">
              Chat Icon (60 X 60 px )
            </div>
            <div className="flex w-full h-14  lg:max-w-xs items-center md:justify-start  lg:justify-end gap-5 lg:gap-7">
              {/* Icons with selection logic */}
              <div
                style={{
                  backgroundColor: chatIcon === 1 ? chatIconbgColor : "#F4F4F4",
                }}
                onClick={() => handleIconChange(1)}
                className={`cursor-pointer flex justify-center items-center ${
                  chatIcon === 1
                    ? `w-14 h-14 rounded-full`
                    : "w-14 h-14 rounded-full"
                }`}>
                <WebchatSettingIcon1Svg
                  color={chatIcon === 1 ? chatIconColor : "#6D6D6D"}
                />
              </div>
              <div
                style={{
                  backgroundColor: chatIcon === 2 ? chatIconbgColor : "#F4F4F4",
                }}
                onClick={() => handleIconChange(2)}
                className={`cursor-pointer flex justify-center items-center  ${
                  chatIcon === 2
                    ? `w-14 h-14  rounded-full`
                    : "w-14 h-14  rounded-full"
                }`}>
                <WebchatSettingIcon2Svg
                  color={chatIcon === 2 ? chatIconColor : "#6D6D6D"}
                />
              </div>
              <div
                style={{
                  backgroundColor: chatIcon === 3 ? chatIconbgColor : "#F4F4F4",
                }}
                onClick={() => handleIconChange(3)}
                className={`cursor-pointer flex justify-center items-center  ${
                  chatIcon === 3
                    ? `w-14 h-14  rounded-full`
                    : "w-14 h-14 border-2 rounded-full"
                }`}>
                <WebchatSettingIcon3Svg
                  color={chatIcon === 3 ? chatIconColor : "#6D6D6D"}
                />
              </div>
              <div
                onClick={() => handleIconChange(4)}
                className="flex flex-col items-end text-center pt-4 gap-1">
                <div
                  style={{
                    backgroundColor:
                      chatIcon === 4 ? chatIconbgColor : "#F4F4F4",
                  }}
                  onClick={() => {
                    fileInputRef.current?.click(); // Trigger file input on click
                  }}
                  className={`cursor-pointer flex justify-center items-center  ${
                    chatIcon === 4
                      ? "w-14 h-14 bg-[#631363] rounded-full"
                      : "w-14 h-14 bg-[#F4F4F4] rounded-full"
                  }`}>
                  {chatIconUpload !== "" ? (
                    <Image
                      src={chatIconUpload}
                      width={100}
                      height={100}
                      alt="Uploaded Icon"
                      className="w-14 h-14 rounded-full"
                    />
                  ) : (
                    <WebchatSettingIcon4Svg
                      color={chatIcon === 4 ? chatIconColor : "#6D6D6D"}
                    />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleImageUpload} // Handle image upload
                  />
                </div>
                <div className="text-[#631363] font-bold text-[10px] pt-1 leading-[normal]">
                  Upload Icon
                </div>
              </div>
            </div>
          </div>

          {/* Background Color Picker */}
          <div className="flex flex-col lg:flex-row w-full gap-1 justify-start lg:justify-between ">
            <div className="text-[#631363] text-sm md:text-lg lg:text-[22px] lg:whitespace-nowrap font-bold leading-normal pt-2">
              Background Color
            </div>
            <div className="w-full lg:max-w-xs px-0  lg:px-4 flex flex-col items-start justify-start lg:justify-start gap-0 lg:gap-2">
              <div className="text-[#6D6D6D] text-[10px] md:text-xs lg:text-[14px] pt-1 font-bold leading-normal">
                Color Code
              </div>
              <div className="w-full flex gap-3 justify-start items-start">
                <div className="text-[#6D6D6D] bg-[#F4F4F4] h-9 items-center text-sm rounded-2xl pt-0.5 font-bold leading-normal flex justify-center w-1/4">
                  {chatIconbgColor}
                </div>
                {/* Color Picker Component */}
                <ColorPickerComponent
                  id="bubbleColor"
                  pickColor={chatIconbgColor} // Pass current color
                  onChange={handleIconBgChange} // Pass handler to update color
                />
              </div>
            </div>
          </div>

          {/* Icon Color Picker */}
          <div className="flex flex-col lg:flex-row justify-between w-full gap-1">
            <div className="text-[#631363] text-sm lg:whitespace-nowrap   md:text-lg lg:text-[22px] font-bold leading-normal pt-2">
              Icon Color
            </div>
            <div className="w-full lg:max-w-xs px-0  lg:px-4 flex-col gap-1 items-start lg:items-end justify-start lg:justify-end lg:gap-2s">
              <div className="text-[#6D6D6D] text-[10px]  md:text-xs lg:text-[14px] font-bold leading-normal pt-1">
                Color Code
              </div>
              <div className="w-full flex gap-3 justify-start items-center">
                <div className="text-[#6D6D6D] bg-[#F4F4F4] h-9 pt-0.5 items-center text-sm rounded-2xl font-bold leading-normal flex justify-center w-1/4">
                  {chatIconColor}
                </div>
                {/* Color Picker Component */}
                <ColorPickerComponent
                  id="bubbleIconColor"
                  pickColor={chatIconColor} // Pass current color
                  onChange={handleIconColorChange} // Pass handler to update color
                />
              </div>
            </div>
          </div>
          {/* Switches */}
          <div className="flex items-center  justify-between space-x-4">
            <Label
              htmlFor="airplane-mode"
              className="text-[#631363] text-sm  md:text-lg whitespace-nowrap lg:text-[22px] font-bold leading-normal">
              Show Webchat Bubble
            </Label>
            <div className="lg:max-w-xs w-full px-0 lg:px-4">
              <Switch
                checked={showWebChatBubble}
                onCheckedChange={hanldeShowBubble}
                id="airplane-mode"
              />
            </div>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <Label
              htmlFor="open-with-sound"
              className="text-[#631363] text-sm  md:text-lg whitespace-nowrap lg:text-[22px] font-bold leading-normal">
              Open Webchat Bubble With Sound
            </Label>
            <div className="lg:max-w-xs px-0 lg:px-4 w-full">
              <Switch id="open-with-sound" />
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-start gap-2 lg:justify-between">
            <div className="text-[#631363] text-sm  md:text-lg lg:text-[22px] font-bold whitespace-nowrap leading-normal">
              Webchat Bubble With Message
            </div>
            <div className="flex w-full lg:max-w-xs h-28 pb-4">
              <textarea
                value={showWebChatBubbleMessage}
                onChange={handleBubbleMessage}
                className="w-full p-3 placeholder:tracking-tight focus:outline-none pl-3 rounded-2xl text-[#6D6D6D] text-xs font-normal h-full bg-[#F4F4F4] resize-none"
                // placeholder="Have a question? Ask us, we are here to help!"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[33%] border-l-2 border-[#CCCCCC] hidden justify-center mx-auto flex-col lg:flex">
        <div className="w-full  md:text-[24px] text-[32px] lg:pt-8 text-[#6D6D6D] pt-4 font-bold text-center">
          Webchat Settings
        </div>
        <WebChatView />
      </div>
    </div>
  );
};

export default WebChatBubble;
