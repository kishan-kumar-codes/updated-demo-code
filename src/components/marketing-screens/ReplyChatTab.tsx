import React, { useState } from "react";
import { ReplyCallSvg, ReplyChatSvg } from "@/svgs/marketing-screens/svgs";
import ReplyChat from "./ReplyChat";
import ReplyCall from "./ReplyCall";

/**
 * Styles for the tab buttons within the ReplyChatTab component.
 */
const tabStyle: React.CSSProperties = {
  color: "#3D3D3D",
  fontFamily: "Arial",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

/**
 * ReplyChatTab Component
 * 
 * This component manages two tabs: one for the ReplyChat and one for the ReplyCall.
 * It includes button tabs to switch between the two views and displays the active view.
 * 
 * @returns {JSX.Element} The rendered ReplyChatTab component.
 */
const ReplyChatTab: React.FC = () => {
  // State to manage the currently active tab
  const [activeTab, setActiveTab] = useState<string>("tab1");

  /**
   * Function to handle tab changes
   * 
   * @param {React.SetStateAction<string>} tab - The tab identifier to set as active
   */
  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      {/* Tab buttons */}
      <div className="flex z-4 flex-col w-[250px] -ml-[94px] space-y-3" style={tabStyle}>
        <div className="grid grid-cols-4 rounded-t-full h-[55px] bg-[#E0E0E0]">
          <button
            className={`px-4 -ml-0.5 py-2 -pt-10 rounded ${
              activeTab === "tab1"
                ? "bg-[#F4F4F4] font-bold text-[#3D3D3D] rounded-t-full"
                : "text-[#3D3D3D] font-bold"
            } duration-300 ease-in-out`}
            onClick={() => handleTabChange("tab1")}
          >
            <ReplyChatSvg />
          </button>
          <button
            className={`px-4 py-2 -pt-10 h-[70px] font-bold rounded-t-full ${
              activeTab === "tab2"
                ? "bg-[#F4F4F4] text-[#3D3D3D]"
                : "text-[#3D3D3D]"
            } duration-300 ease-in-out`}
            onClick={() => handleTabChange("tab2")}
          >
            <ReplyCallSvg />
          </button>
        </div>
      </div>

      {/* Content based on active tab */}
      <div className="flex flex-col items-center">
        {activeTab === "tab1" && <ReplyChat />}
        {activeTab === "tab2" && <ReplyCall />}
      </div>
    </div>
  );
};

export default ReplyChatTab;
