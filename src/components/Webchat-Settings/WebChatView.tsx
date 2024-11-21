"use client";
import {
  WebchatSettingIcon1Svg,
  WebchatSettingIcon2Svg,
  WebchatSettingIcon3Svg,
  WebchatSettingICroxxButtonSvg,
  WebchatSettingMessageChat1Svg,
} from "@/svgs/Webchat-Settings/svgs";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import useWebChatSelectors from "@/hooks/useWebChatSelector";
import { useDispatch } from "react-redux";
import { setWebChat } from "@/store/slices/webChatSettingSlice";

const WebChatView = () => {
  const [phone, setPhone] = useState("");

  const {
    chatIcon,
    chatIconUpload,
    chatIconbgColor,
    chatIconColor,
    showWebChatBubble,
    showWebChatBubbleSound,
    showWebChatBubbleMessage,
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
  } = useWebChatSelectors();

  const dispatch = useDispatch();

  const handleOpenWindow = () => {
    dispatch(setWebChat({ windowsOpens: "true" }));
  };

  return (
    <div className="flex justify-center flex-col items-center rounded-xl py-10 lg:py-0 bg-[#E0E0E0] w-full ">
      {windowsOpens == "true" && (
        <div
          className={` ${windowSize == "large" ? "w-[85%] lg:w-[80%] md:w-[50%]" : "w-[80%] lg:w-[72%] md:w-[40%]"} h-[430.2px] shrink-0 justify-center relative mt-10 bg-white rounded-lg`}>
          <div
            className="w-full flex h-fit bg-[#3D3D3D] rounded-t-lg"
            style={{
              backgroundColor: headerColor,
              color: headerTextColor,
            }}>
            <div className="w-full h-full flex p-2 pl-4 flex-col">
              <span className="text-sm font-bold lg:text-[16px] leading-normal">
                {teamheader}
              </span>
              <span className=" w-full text-wrap text-[10px] font-normal font-['Arial']">
                {showWebChatBubbleMessage}
              </span>
              {uploadAvtar != "" && (
                <Image
                  src={uploadAvtar ? uploadAvtar : ""}
                  alt="chat"
                  width={20}
                  height={20}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span className="text-[8px] pl-1 font-bold">{userName}</span>
            </div>
          </div>

          <div className="w-full flex-col h-full flex  items-center pt-4">
            <div className="w-[80%] justify-center   gap-5  flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-8 px-2  focus:outline-none text-[#606060] text-[12px] leading-[normal] border-b border-[#606060]"
              />{" "}
              <input
                type="email"
                placeholder="Email"
                className="w-full h-8 px-2  focus:outline-none text-[#606060] text-[12px] leading-[normal]  border-b border-[#606060]"
              />
              <PhoneInput
                defaultCountry="ua"
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
              <input
                type="text"
                placeholder="Message"
                className="w-full h-8 px-2  focus:outline-none text-[#606060] text-[12px] leading-[normal]  border-b border-[#606060]"
              />
              <Button
                className="w-full h-8 text-sm font-bold"
                style={{
                  backgroundColor: buttonColor,
                  color: buttontextColor,
                }}>
                Send
              </Button>
              <span className="text-[#969595] text-[10px] lg:text-[9px] -mt-4 leading-normal lg:leading-3">
                {disclaimer}
              </span>
            </div>
          </div>
        </div>
      )}
      {showWebChatBubble && (
        <div className="w-[60%] flex h-full justify-end  my-2">
          <span
            onClick={handleOpenWindow}
            className={`cursor-pointer flex justify-center items-center  w-14 h-14  rounded-full `}
            style={{
              backgroundColor: chatIconbgColor,
            }}>
            {(chatIcon === 1 && (
              <WebchatSettingIcon1Svg color={chatIconColor} />
            )) ||
              (chatIcon === 2 && (
                <WebchatSettingIcon2Svg color={chatIconColor} />
              )) ||
              (chatIcon === 3 && (
                <WebchatSettingIcon3Svg color={chatIconColor} />
              )) ||
              (chatIcon === 4 && (
                <Image
                  src={chatIconUpload}
                  width={100}
                  height={100}
                  alt="Uploaded Icon"
                  className="w-14 h-14 rounded-full"
                />
              ))}
          </span>
        </div>
      )}
    </div>
  );
};

export default WebChatView;
