"use client";
import React from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import HeadBar from "../citations-builder/HeadBar";

import {
  WebchatSettingLargeSvg,
  WebchatSmallSvg,
} from "@/svgs/Webchat-Settings/svgs";
import ColorPickerComponent from "./ColorPicker";
import { ReviewWidgetInfoTooltip } from "../Reputation-mobile/TooltipReputation";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { useDispatch } from "react-redux";
import useWebChatSelectors from "@/hooks/useWebChatSelector";
import { setWebChat } from "@/store/slices/webChatSettingSlice";
import WebChatView from "./WebChatView";

const WebChatWindow = () => {
  const dispatch = useDispatch();

  const {
    chatWindow,
    windowSize,
    headerColor,
    headerTextColor,
    buttonColor,
    buttontextColor,
    showWebChatBubble,
    loactions,
    disclaimer,
  } = useWebChatSelectors();

  const handleWindowSize = (value: string) => {
    dispatch(
      setWebChat({
        windowSize: value,
      })
    );
  };
  const handleSelectWindow = () => {
    dispatch(
      setWebChat({
        chatWindow: !chatWindow,
      })
    );
  };
  const handleHeaderColor = (value: string) => {
    dispatch(
      setWebChat({
        headerColor: value,
      })
    );
  };
  const handleHeaderTextColor = (value: string) => {
    dispatch(
      setWebChat({
        headerTextColor: value,
      })
    );
  };
  const handlebuttonColor = (value: string) => {
    dispatch(
      setWebChat({
        buttonColor: value,
      })
    );
  };
  const handlebuttontextColor = (value: string) => {
    dispatch(
      setWebChat({
        buttontextColor: value,
      })
    );
  };
  const handleShowBubble = (value: boolean) => {
    dispatch(
      setWebChat({
        showWebChatBubble: value,
      })
    );
  };

  const handleDisclaimerChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(
      setWebChat({
        disclaimer: event.target.value,
      })
    );
  };
  return (
    <div className="flex flex-col lg:flex-row justify-center rounded-2xl w-full bg-[#E0E0E0] h-full">
      <div className="flex rounded-3xl min-h-[160px] justify-start px-5  w-full bg-[#E0E0E0] py-3">
        <div className="flex flex-col w-full gap-2 lg:gap-5 p-0 lg:p-4 pt-2">
          <div className=" flex flex-col justify-start lg:justify-between  items-center lg:flex-row gap-2 w-full">
            <div className="text-[#631363] text-sm  md:text-lg w-full lg:text-[22px] font-bold leading-normal">
              Window SIze
            </div>
            <div className="w-full  flex gap-5 lg:max-w-xs items-start justify-start lg:justify-end lg:gap-24">
              <div className="flex gap-2 flex-col">
                <div
                  className={`flex flex-col w-28 h-20 ${windowSize === "small" && "border-2 border-[#631363]"}    bg-[#FFFFFF] rounded-xl relative cursor-pointer`}
                  onClick={() => "small"}>
                  <div className="w-full flex gap-1 p-1 pl-2">
                    <div className="w-1.5 h-1.5 bg-[#6D6D6D] rounded-full" />
                    <div className="w-1.5 h-1.5 bg-[#6D6D6D] rounded-full" />
                    <div className="w-1.5 h-1.5 bg-[#6D6D6D] rounded-full" />
                  </div>
                  <div className="absolute bottom-1 right-2     rounded-sm">
                    {" "}
                    <WebchatSmallSvg />
                  </div>
                </div>
                <div className="text-[#631363] text-xs  md:text-base lg:text-[24px] w-full text-center font-bold leading-normal">
                  Small
                </div>
              </div>
              <div className="flex gap-2 flex-col">
                <div
                  className={`flex flex-col w-28 h-20 ${windowSize === "large" && "border-2 border-[#631363]"} bg-[#FFFFFF] rounded-xl relative cursor-pointer`}
                  onClick={() => "large"}>
                  <div className="w-full flex gap-1 p-1 pl-2">
                    <div className="w-1.5 h-1.5 bg-[#6D6D6D] rounded-full" />
                    <div className="w-1.5 h-1.5 bg-[#6D6D6D] rounded-full" />
                    <div className="w-1.5 h-1.5 bg-[#6D6D6D] rounded-full" />
                  </div>
                  <div className="absolute mt-2 right-0  bottom-0   rounded-sm">
                    {" "}
                    <WebchatSettingLargeSvg />
                  </div>
                </div>
                <div className="text-[#631363] text-xs  md:text-base lg:text-[24px] w-full text-center font-bold leading-normal">
                  Large
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full lg:flex-row  justify-start lg:justify-between items-center pt-2">
            <div className="text-[#631363] text-sm  md:text-lg lg:text-[22px] font-bold w-full leading-normal">
              Header Color
            </div>
            <div className="lg:max-w-xs  w-full items-center justify-between lg:justify-end gap-2 lg:gap-6">
              <div className="text-[#6D6D6D] text-[10px]  md:text-xs lg:text-[18px] font-bold leading-normal pt-1">
                Color Code
              </div>
              <div className="w-full  flex gap-3 items-center pt-0.5">
                <div className="text-[#6D6D6D] bg-[#F4F4F4] h-9 items-center text-sm rounded-2xl font-bold leading-normal flex justify-center w-1/4">
                  {headerColor}
                </div>
                {/* Color Picker Component */}
                <ColorPickerComponent
                  id="bubbleColor"
                  pickColor={headerColor} // Pass current colorm
                  onChange={handleHeaderColor} // Pass handler to update color
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full lg:flex-row justify-start lg:justify-between items-center">
            <div className="text-[#631363] text-sm  md:text-lg lg:text-[22px] font-bold w-full leading-normal pt-2">
              Header Text Color
            </div>
            <div className="lg:max-w-xs  w-full items-center justify-between lg:justify-end gap-2 lg:gap-6">
              <div className="text-[#6D6D6D] text-[10px]  md:text-xs font-bold lg:text-[18px] leading-normal pt-1">
                Color Code
              </div>
              <div className="w-full flex gap-3 items-center pt-0.5">
                <div className="text-[#6D6D6D] bg-[#F4F4F4] h-9 items-center text-sm rounded-2xl font-bold leading-normal flex justify-center w-1/4">
                  {headerTextColor}
                </div>
                {/* Color Picker Component */}
                <ColorPickerComponent
                  id="chatWindowHeaderTextColor"
                  pickColor={headerTextColor} // Pass current color
                  onChange={handleHeaderTextColor} // Pass handler to update color
                />
              </div>
            </div>
          </div>
          <div className="flex pt-2 flex-col w-full lg:flex-row justify-start lg:justify-between items-center">
            <div className="text-[#631363] text-sm  md:text-lg lg:text-[22px] font-bold w-full leading-normal">
              Button Color
            </div>
            <div className="lg:max-w-xs  w-full items-center justify-between lg:justify-end gap-2 lg:gap-6">
              <div className="text-[#6D6D6D] text-[10px]  md:text-xs font-bold lg:text-[18px] leading-normal pt-1">
                Color Code
              </div>
              <div className="w-full flex gap-3 items-center pt-0.5">
                <div className="text-[#6D6D6D] bg-[#F4F4F4] h-9 items-center text-sm rounded-2xl font-bold leading-normal flex justify-center w-1/4">
                  {buttonColor}
                </div>
                {/* Color Picker Component */}
                <ColorPickerComponent
                  id="chatWindowButtonColor"
                  pickColor={buttonColor} // Pass current color
                  onChange={handlebuttonColor} // Pass handler to update color
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-full lg:flex-row justify-start lg:justify-between items-center pt-2">
            <div className="text-[#631363]  text-sm  md:text-lg lg:text-[22px] font-bold w-full leading-normal">
              Button Text Color
            </div>
            <div className="lg:max-w-xs  w-full  items-center justify-between lg:justify-end gap-2 lg:gap-6">
              <div className="text-[#6D6D6D] text-[10px] md:text-xs lg:text-[18px] font-bold leading-normal pt-1">
                Color Code
              </div>
              <div className="w-full flex gap-3 items-center pt-0.5">
                <div className="text-[#6D6D6D] bg-[#F4F4F4] h-9 items-center text-sm rounded-2xl font-bold leading-normal flex justify-center w-1/4">
                  {buttontextColor}
                </div>
                {/* Color Picker Component */}
                <ColorPickerComponent
                  id="chatWindowButtonTextColor"
                  pickColor={buttontextColor} // Pass current color
                  onChange={handlebuttontextColor} // Pass handler to update color
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full lg:flex-row justify-between gap-2 pt-2">
            <div className="flex flex-col">
              <div className="text-[#6D6D6D] text-sm md:text-lg lg:text-[24px] mt-2 font-bold leading-normal">
                GENERAL
              </div>
              <div className="flex gap-1 w-full">
                <div className="text-[#631363] text-[13px] md:text-lg lg:text-[22px] font-bold leading-normall">
                  Locations
                </div>
                <ReviewWidgetInfoTooltip />
              </div>
            </div>
            <div className="flex  flex-col lg:max-w-xs items-start">
              <div className="flex gap-2 lg:gap-[84px]  w-full">
                <Label
                  htmlFor="airplane-mode"
                  className="text-[#6D6D6D] text-sm md:text-lg lg:whitespace-nowrap  lg:text-[16px] font-bold leading-normal">
                  Show Webchat Bubble
                </Label>
                <Switch
                  checked={showWebChatBubble}
                  onCheckedChange={handleShowBubble}
                  id="WebchatBubbleSound"
                />
              </div>
              <div className="flex gap-1 lg:gap-0 w-full">
                <div className="text-[#631363] text-[13px] md:text-sm ml-0 mr-0 lg:text-[18px] font-bold leading-normall">
                  2 Locations
                </div>
                {/* <ReviewWidgetInfoTooltip /> */}
              </div>
            </div>
          </div>

          <div className="flex-col flex w-full lg:flex-row justify-between">
            <div className="flex gap-1 w-full">
              <div className="text-[#631363] text-sm md:text-lg lg:text-[22px] font-bold leading-normal">
                Enabled Teams
              </div>
              <ReviewWidgetInfoTooltip />
            </div>
            <div className="text-[#6D6D6D] pr-0 lg:pr-[11%] justify-start flex-col lg:max-w-xs lg:whitespace-nowrap items-start text-[13px]  lg:text-[16px] font-bold leading-normal">
              {" "}
              <span className="text-[#631363] text-[13px] md:text-base lg:text-[16px] font-bold">
                Click here
              </span>{" "}
              to create your first team.
            </div>
          </div>
          <div className="flex-col flex w-full lg:flex-row justify-between">
            <div className="flex gap-1 mt-2 w-full">
              <div className="flex items-start pb-2">
                <div className="text-[#631363] text-sm md:text-lg lg:text-[22px] font-bold leading-normal">
                  Disclaimer
                </div>
                <div className="pt-2 pl-2">
                  {" "}
                  <ReviewWidgetInfoTooltip />
                </div>
              </div>
            </div>
            <textarea
              value={disclaimer}
              onChange={handleDisclaimerChange}
              className="flex w-full h-28 p-2 lg:max-w-xs rounded-2xl bg-[#F4F4F4] text-[#6D6D6D] text-xs font-normal">
              By sending this message, you expressly consent to receive
              communications from us. You may opt out at any time.
            </textarea>
          </div>
        </div>
      </div>
      <div className="min-w-[33%] border-l-2 border-[#CCCCCC]  hidden justify-start pt-8 flex-col lg:flex">
        <div className="w-full md:text-[24px] text-[32px] text-[#6D6D6D] font-bold text-center">
          Webchat Settings
        </div>
        <WebChatView />
      </div>
    </div>
  );
};

export default WebChatWindow;
