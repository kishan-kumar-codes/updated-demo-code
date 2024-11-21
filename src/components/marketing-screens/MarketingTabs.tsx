"use client";

import React, { useState } from "react";
import NewOpportunities from "./NewOpportunities";
import PaidCampaigns from "./PaidCampaigns";
import OrganicCampaigns from "./OrganicCampaigns";
import FollowUpCampaigns from "./FollowUpCampaigns";

/**
 * Styles for tab buttons.
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
 * TabComponent Component
 *
 * This component displays a set of tabs for different campaigns. Users can switch between tabs to view different types of campaign content.
 * It maintains state for the currently active tab and renders the corresponding content.
 *
 * @returns {JSX.Element} The rendered TabComponent.
 */
const TabComponent: React.FC = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState<string>("tab1");

  /**
   * Handles the tab change by updating the active tab state.
   *
   * @param tab - The tab to be set as active.
   */
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex w-full justify-center flex-col items-center">
      {/* Tab buttons */}
      <div
        className="flex flex-col px-2 py-4 w-full space-y-3 mb-4"
        style={tabStyle}>
        <div className="grid grid-cols-4  rounded-full h-[55px] bg-[#f1eeeeee]">
          <button
            className={`px-3 py-2 rounded ${
              activeTab === "tab1"
                ? "bg-[#40F440] font-bold text-[#3D3D3D] rounded-l-full"
                : "text-[#3D3D3D] font-bold"
            } duration-300 ease-in-out`}
            onClick={() => handleTabChange("tab1")}>
            New Opportunities
          </button>
          <button
            className={`px-3 py-2 font-bold rounded ${
              activeTab === "tab2"
                ? "bg-[#40F440] text-[#3D3D3D]"
                : "text-[#3D3D3D]"
            } duration-300 ease-in-out`}
            onClick={() => handleTabChange("tab2")}>
            Paid Campaigns
          </button>
          <button
            className={`px-3 py-2 font-bold rounded ${
              activeTab === "tab3"
                ? "bg-[#40F440] text-[#3D3D3D]"
                : "text-[#3D3D3D]"
            } duration-300 ease-in-out`}
            onClick={() => handleTabChange("tab3")}>
            Organic Campaigns
          </button>
          <button
            className={`px-3 py-2 font-bold rounded ${
              activeTab === "tab4"
                ? "bg-[#40F440] text-[#3D3D3D] rounded-r-full"
                : "text-[#3D3D3D]"
            } duration-300 ease-in-out`}
            onClick={() => handleTabChange("tab4")}>
            Follow Up Campaigns
          </button>
        </div>
      </div>

      {/* Content based on active tab */}
      <div className="flex -pt-10 flex-col items-center">
        {activeTab === "tab1" && <NewOpportunities />}
        {activeTab === "tab2" && <PaidCampaigns />}
        {activeTab === "tab3" && <OrganicCampaigns />}
        {activeTab === "tab4" && <FollowUpCampaigns />}
      </div>
    </div>
  );
};

export default TabComponent;
