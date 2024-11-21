"use client";
import React, { useState } from "react";
import NewOpportunitiesDesktop from "./NewOpportunitiesDesktop";
import PaidCampaignsDesktop from "./PaidCampaignsDesktop";
import OrganicCampaignsDesktop from "./OrganicCampaignsDesktop";
import FollowUpCampaignsDesktop from "./FollowUpCampaignsDesktop";

/**
 * Inline styles for tab buttons and underline
 */
const tabStyle: React.CSSProperties = {
  color: "#6D6D6D",
  textAlign: "center",
  fontFamily: "Arial",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const underlineStyle: React.CSSProperties = {
  height: "4px",
  backgroundColor: "#631363",
  position: "absolute",
  bottom: "-2px",
  width: "100%",
};

/**
 * TabComponent component
 * 
 * This component renders a tab interface with buttons and content panels. It allows users to switch between different content views based on the selected tab.
 *
 * @returns {JSX.Element} The rendered TabComponent component.
 */
const TabComponent = (): JSX.Element => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("tab1");

  /**
   * Handles the change of the active tab.
   * 
   * @param {React.SetStateAction<string>} tab - The identifier of the tab to be activated.
   */
  const handleTabChange = (tab: React.SetStateAction<string>): void => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex gap-3 relative flex-col">
        {/* Tab buttons */}
        <div className="flex flex-col mb-16" style={tabStyle}>
          <div className="flex h-[55px] gap-4">
            {["tab1", "tab2", "tab3", "tab4"].map((tab) => (
              <div key={tab} className="relative flex my-10 w-[150px] flex-shrink flex-col items-center">
                <button style={tabStyle} onClick={() => handleTabChange(tab)}>
                  {tab === "tab1" && "New Opportunities"}
                  {tab === "tab2" && "Paid Campaigns"}
                  {tab === "tab3" && "Organic Campaigns"}
                  {tab === "tab4" && "Follow Up Campaigns"}
                </button>
                {activeTab === tab && <div className="flex w-[150px] h-[4px] -my-16 bottom-0" style={underlineStyle}></div>}
              </div>
            ))}
          </div>
        </div>

      {/* Content based on active tab */}

    </div><div className="flex absolute -bottom-20 left-16 right-0 w- flex-shrink -ml-32   h-full pt-10 flex-col ">
        {activeTab === "tab1" && <div><NewOpportunitiesDesktop /></div>}
        {activeTab === "tab2" && <div><PaidCampaignsDesktop /></div>}
        {activeTab === "tab3" && <div><OrganicCampaignsDesktop /></div>}
        {activeTab === "tab4" && <div><FollowUpCampaignsDesktop /></div>}
      </div></>
  );

};

export default TabComponent;
