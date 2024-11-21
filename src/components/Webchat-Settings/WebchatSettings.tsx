"use client";
import React from "react";
import Header from "../Reputation-mobile/Header";
import { RepuSearchSvgs } from "@/svgs/review-dashboard-mobile/svgs";
import WebChatTable from "./WebChatTable";
import {
  WidgetEditSvgs,
  WidgetViewSvgs,
} from "@/svgs/Widget-Design-Mobile/svgs";
import WebChatEdit from "./WebChatEdit";
import WebChatView from "./WebChatView";
import { useWebChatSettingsHookas } from "@/hooks/customHooks/webChatSettingsHooks";
import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";
import { Pencil } from "lucide-react";

const WebchatSettings = () => {
  const {
    create,
    setCreate,
    webChattabActive,
    handleWebChatTab,
    install,
    setInstall,
    chatBubble,
    setChatBubble,
    uploadedImage,

    fileInputRef,
    handleImageUpload,
    selectChatIcon,
    bubbleBgColor,
    bubbleIconColor,
    handleColorChange,
    handleIconColorChange,
    handleChatIconChange,
    chatWindow,
    setChatWindow,
    chatWindowsSize,
    chatWindowHeaderColor,
    chatWindowHeaderTextColor,
    chatWindowButtonColor,
    chatWindowButtonTextColor,
    handleChatWindowHeaderColor,
    handleChatWindowHeaderTextColor,
    handleChatWindowButtonColor,
    handleChatWindowButtonTextColor,
    handleWindowSize,
    // handleSubmit,
  } = useWebChatSettingsHookas();

  return (
    <div className="flex justify-center bg-[#F4F4F4] items-center w-full h-full">
      <div className="flex flex-col w-full bg-[#F4F4F4] justify-center items-center h-full">
        <div className="flex flex-col gap-7 justify-center items-center w-full">
          <CitationNavbar heading="Webchat Settings" isHeaderVisible={false} />
          {/* <Header title={"Webchat Settings"} displayName=" Webchat Settings" /> */}
          {!create ? (
            <div className="flex flex-col gap-3  w-[90%] h-full">
              <span className="text-[#6D6D6D] w-full text-xl  py-0 md:py-2 md:text-2xl lg:text-[36px] font-bold leading-normal">
                3 Webchat Widgets
              </span>
              <div className="flex flex-col w-full  items-center gap-2 min-h-[490px] h-full pt-4">
                <div className="flex gap-3 z-20 items-center justify-end w-full ">
                  <div className="flex z-10 items-center justify-center md:justify-end relative w-full md:w-[20%]">
                    <input
                      className="flex w-full h-9 lg:h-12 appearance-none pl-10 rounded-2xl focus:outline-none bg-[#FFFFFF]"
                      placeholder="Search"
                    />
                    <div className="absolute inset-y-0 justify-center items-center left-2 flex p-2">
                      <RepuSearchSvgs />
                    </div>
                  </div>
                  <button
                    className="flex z-50 gap-2 cursor-pointer h-9 md:h-12 justify-center items-center bg-[#631363] w-fit focus:outline-none rounded-2xl px-3 appearance-none"
                    onClick={() => setCreate(!create)}>
                    <span className="w-[81.803px] whitespace-nowrap md:w-fit text-white text-xs md:text-base lg:text-[24px] font-bold leading-normal">
                      Create Widget
                    </span>
                  </button>
                </div>
                <WebChatTable />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3  w-[90%] h-full">
              <div className="flex z-20 flex-col lg:flex-row  w-full">
                <div className=" flex w-full justify-start pl-0 lg:pl-4">
                  <div className="flex flex-col w-fit">
                    <div className="text-[#6D6D6D] text-xl lg:text-[28px] font-bold leading-normal">
                      Darwin Widget
                    </div>{" "}
                    <div className="text-[#631363] text-sm lg:text-[28px] font-normal leading-normal">
                      2 Locations
                    </div>{" "}
                  </div>
                  <div className="text-[#631363] pl-3 lg:text-[22px] items-start mt-[2%] lg:mt-1 flex gap-1  text-sm font-normal leading-normal">
                    <div className="pt-1 lg:pt-3">
                      {" "}
                      <WidgetEditSvgs />
                    </div>{" "}
                    Edit
                  </div>
                </div>
                <div className="flex justify-end w-full items-center gap-3 px-3">
                  <button
                    className=" text-xs lg:text-[24px] md:w-fit font-bold leading-normal w-16 my-1  cursor-pointer bg-[#40F440]    rounded-lg px-3 py-2"
                    type="submit"
                    // onClick={handleSubmit}
                  >
                    Save
                  </button>
                  <button className=" text-xs lg:text-[24px] md:w-fit font-bold leading-normal w-20 my-1 text-white  cursor-pointer bg-[#BA0416]    rounded-lg px-3 py-2">
                    Cancel
                  </button>
                </div>
              </div>

              <div className="flex justify-center lg:hidden my-1 items-center w-full h-10 gap-1">
                <div
                  className={`flex justify-center items-center cursor-pointer w-1/2 h-full font-bold gap-1 ${webChattabActive === "Edit" ? "bg-[#40F440]" : "bg-[#F4F4F4]"} rounded-l-xl`}
                  onClick={() => handleWebChatTab("Edit")}>
                  <WidgetEditSvgs /> Edit
                </div>
                <div
                  className={`flex justify-center items-center cursor-pointer w-1/2 h-full font-bold gap-1 ${webChattabActive === "View" ? "bg-[#40F440]" : "bg-[#F4F4F4]"} rounded-r-xl`}
                  onClick={() => handleWebChatTab("View")}>
                  <WidgetViewSvgs /> View
                </div>
              </div>
              {webChattabActive === "Edit" ? (
                <WebChatEdit
                  install={install}
                  setInstall={setInstall}
                  chatBubble={chatBubble}
                  setChatBubble={setChatBubble}
                  selectChatIcon={selectChatIcon}
                  bubbleBgColor={bubbleBgColor}
                  bubbleIconColor={bubbleIconColor}
                  handleColorChange={handleColorChange}
                  handleIconColorChange={handleIconColorChange}
                  handleChatIconChange={handleChatIconChange}
                  chatWindow={chatWindow}
                  setChatWindow={setChatWindow}
                  chatWindowsSize={chatWindowsSize}
                  chatWindowHeaderColor={chatWindowHeaderColor}
                  chatWindowHeaderTextColor={chatWindowHeaderTextColor}
                  chatWindowButtonColor={chatWindowButtonColor}
                  chatWindowButtonTextColor={chatWindowButtonTextColor}
                  handleChatWindowHeaderColor={handleChatWindowHeaderColor}
                  handleChatWindowHeaderTextColor={
                    handleChatWindowHeaderTextColor
                  }
                  handleChatWindowButtonColor={handleChatWindowButtonColor}
                  handleChatWindowButtonTextColor={
                    handleChatWindowButtonTextColor
                  }
                  handleWindowSize={handleWindowSize}
                  uploadedImage={uploadedImage}
                  fileInputRef={fileInputRef}
                  handleImageUpload={handleImageUpload}
                />
              ) : (
                <WebChatView />
              )}
            </div>
          )}
        </div>
        <div className="flex md:hidden w-full justify-center mt-10 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default WebchatSettings;
