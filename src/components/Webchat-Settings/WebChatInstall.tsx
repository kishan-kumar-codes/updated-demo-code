import React from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import HeadBar from "../citations-builder/HeadBar";
import { WebchatSettingCrossSvg } from "@/svgs/Webchat-Settings/svgs";
import useWebChatSelectors from "@/hooks/useWebChatSelector";
import { setWebChat } from "@/store/slices/webChatSettingSlice";
import { useDispatch } from "react-redux";

const WebChatInstall = () => {
  const dispatch = useDispatch();
  const { install, desktopinstall } = useWebChatSelectors();

  const handleheaderSelect = () => {
    dispatch(
      setWebChat({
        install: !install,
      })
    );
  };
  return (
    <div className="flex rounded-3xl min-h-[160px] justify-start px-5  w-full bg-[#E0E0E0] py-3">
      <div className="flex flex-col w-full gap-2 lg:gap-0 pt-2 px-0 lg:px-6">
        <div className="text-[#631363] text-sm md:text-lg pt-0 lg:pt-4 lg:text-[24px] font-bold leading-normal">
          Webchat
        </div>
        <div className="text-[#6D6D6D] text-[10px]  md:text-sm py-0 lg:py-2 lg:text-[22px]  font-bold leading-normal md:leading-5 lg:leading-7">
          When webchat is turned on, it will appear on the website it is
          installed on. The installation status was last updated 8 days ago, you
          can
          <strong className="text-[#631363]"> refresh the status.</strong>
        </div>
        <div className="w-full flex gap-2 items-center  pl-5 lg:pl-12 h-[44px] lg:h-[75px] my-2 shrink-0 bg-[#F4F4F4] rounded-2xl">
          <WebchatSettingCrossSvg />{" "}
          <div className="text-[#6D6D6D] text-xs md:text-sm lg:text-[24px]  font-normal leading-normal">
            Not Installed Yet
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-start w-full">
          <div className="flex pb-0  gap-2 lg:pb-6 flex-col w-full py-0 lg:py-4">
            <div className="text-[#631363] text-sm md:text-base lg:text-[24px]  font-bold leading-normal">
              Install Webchat To Your Website
            </div>
            <div className="text-[#6D6D6D] text-[10px] w-full md:text-sm lg:text-[22px]  font-bold leading-normal lg:leading-7">
              Copy and paste the code to the HTML in your website.
              <span className="text-[#631363] pl-1">Learn how to install.</span>
            </div>
          </div>
          <div className="flex justify-end w-full lg:w-fit items-center gap-3 py-2 lg:py-6 px-3">
            <button
              className=" text-xs lg:text-[24px] font-bold leading-normal whitespace-nowrap w-24 lg:w-fit my-1 text-[#631363] cursor-pointer bg-[#E0E0E0]  border-2 border-[#631363]  rounded-lg px-1 lg:px-3 py-2"
              type="submit">
              Email Code
            </button>
            <button className=" text-xs lg:text-[24px] lg:px-3  font-bold whitespace-nowrap leading-normal w-24 lg:w-fit my-1 text-white  cursor-pointer bg-[#631363]    rounded-lg px-1 py-2">
              Copy Code
            </button>
          </div>
        </div>
        <textarea
          placeholder="Copy and paste the code to the HTML in your website."
          className="w-full rounded-2xl md:text-sm flex h-24 focus:outline-none p-2 resize-none"
        />
        <div className="text-[#631363] md:text-lg lg:text-[24px] lg:pt-5 text-sm   py-0 lg:py-2 font-bold leading-normal">
          Google Analytics
        </div>
        <div className="text-[#6D6D6D] text-[10px] md:text-lg  lg:text-[22px]  font-bold lg:font-normal leading-normal">
          Track the Webchat events in your Google Analytics account.
          <span className="text-[#631363] pl-1 cursor-pointer">
            Learn how to find your tracking ID
          </span>
        </div>
        <div className="text-[#631363] text-sm md:text-lg lg:text-[24px]  pt-2 lg:pt-5 font-bold leading-normal">
          Advanced Analytics
        </div>
        <div className="text-[#6D6D6D] text-[10px] md:text-lg lg:text-[22px]  pb-4 font-bold lg:font-normal leading-normal">
          Integrate with Google Tag Manager, Adobe Analytics, and more.
          <span className="text-[#631363] cursor-pointer pl-1">Learn more</span>
        </div>
      </div>
    </div>
  );
};

export default WebChatInstall;
