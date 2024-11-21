import { WebchatSettingThreeDotSvg } from "@/svgs/Webchat-Settings/svgs";
import React from "react";

const WebChatTable = () => {
  return (
    <div className="w-full flex my-2 flex-col">
      <div className="w-full flex  bg-[#631363] lg:bg-[#F4F4F4] rounded-t-2xl">
        <div className="w-1/3 pl-3 flex p-2 font-normal leading-normal text-base md:text-xl lg:text-[28px] text-[#FFFFFF] lg:text-[#2B2B2B]  border-r-2 lg:border-r-0 border-[#CCCCCC]">
          Name
        </div>
        <div className="w-2/3 md:text-xl lg:text-[28px] lg:text-[#2B2B2B] flex pl-3 p-2 font-normal leading-normal text-base text-[#FFFFFF]">
          Status
        </div>
      </div>
      <div className="w-full even:bg-[#F4F4F4] border-y-2 border-[#CCCCCC] flex ">
        <div className="w-1/3 pl-3 flex-col flex gap-0.5 lg:gap-1  p-2 font-normal leading-normal text-base   border-r-2 lg:border-r-0 border-[#CCCCCC]">
          <span className="w-full md:text-xl lg:text-[24px] text-[#631363] text-xs font-normal leading-normal">
            {" "}
            Default Widget
          </span>
          <span className="text-[#6D6D6D] md:text-sm lg:text-[18px] w-full text-[10px] font-normal leading-normal">
            {" "}
            All Locations
          </span>
        </div>
        <div className="w-2/3 pl-3  flex justify-between items-center gap-0.5 lg:gap-1  p-2 px-3 font-normal leading-normal text-base  ">
          <span className="w-full md:text-xl lg:text-[24px] text-[#6D6D6D]  text-xs font-normal leading-normal">
            {" "}
            Not Installed
          </span>
          <span className=" cursor-pointer">
            <WebchatSettingThreeDotSvg />
          </span>
        </div>
      </div>
      <div className="w-full bg-[#FFFFFF] lg:bg-[#F4F4F4] flex ">
        <div className="w-1/3 pl-3 flex-col flex gap-0.5 lg:gap-1  p-2 font-normal leading-normal text-base  border-r-2 lg:border-r-0 border-[#CCCCCC]">
          <span className="w-full md:text-xl lg:text-[24px] text-[#631363] text-xs font-normal leading-normal">
            {" "}
            Drawin Widget
          </span>
          <span className="text-[#6D6D6D] md:text-sm lg:text-[18px] w-full text-[10px] font-normal leading-normal">
            {" "}
            2 Locations
          </span>
        </div>
        <div className="w-2/3 pl-3  flex justify-between items-center gap-0.5 lg:gap-1  p-2 px-3 font-normal leading-normal text-base  ">
          <span className="w-full md:text-xl lg:text-[24px] text-[#6D6D6D]  text-xs font-normal leading-normal">
            {" "}
            Not Installed
          </span>
          <span className=" cursor-pointer">
            <WebchatSettingThreeDotSvg />
          </span>
        </div>
      </div>
      <div className="w-full even:bg-[#F4F4F4] border-y-2 border-[#CCCCCC] flex ">
        <div className="w-1/3 pl-3 flex-col flex gap-0.5 lg:gap-1  p-2 font-normal leading-normal text-base  border-r-2 lg:border-r-0 border-[#CCCCCC]">
          <span className="w-full md:text-xl lg:text-[24px] text-[#631363] text-xs font-normal leading-normal">
            {" "}
            Default Widget
          </span>
          <span className="text-[#6D6D6D]  md:text-sm lg:text-[18px] w-full text-[10px] font-normal leading-normal">
            {" "}
            Boston, MA
          </span>
        </div>
        <div className="w-2/3 pl-3  flex justify-between items-center gap-0.5 lg:gap-1  p-2 px-3 font-normal leading-normal text-base  ">
          <span className="w-full md:text-xl lg:text-[24px] text-[#6D6D6D]  text-xs font-normal leading-normal">
            {" "}
            Not Installed
          </span>
          <span className=" cursor-pointer">
            <WebchatSettingThreeDotSvg />
          </span>
        </div>
      </div>
    </div>
  );
};

export default WebChatTable;
