"use client";

import React, { useState } from "react";
import NumberOfReview from "./NumberOfReview";
import RecentReviews from "./RecentReviews";
import ReviewRequest from "./ReviewRequest";
import ReviewReports from "./ReviewReports";
import ReviewRequestMobile from "./ReviewRequest";

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

const DashoardTab: React.FC = () => {
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
    <div className="flex md:w-full justify-center flex-col items-center md:px-[8%] :bg-[#F4F4F4] px-4">
      {/* Tab buttons */}
      <div
        className="flex flex-col w-full space-y-3 mb-4 pt-2 md:pt-6 "
        style={tabStyle}>
        <div className="bg-[#631363] pl-[5%] text-white font-[Arial] text-lg font-semibold hidden md:flex  w-full rounded-xl py-4">
          Review Dashboard
        </div>
        <div className="grid grid-cols-4 text-xs md:text-base items-center rounded-md bg-white mx-0 py-0 md:px-2 px-0 md:py-2  md:mx-8">
          <button
            className={`px-2 py-2 rounded ${
              activeTab === "tab1"
                ? "bg-[#40F440] active:font-bold font-normal md:font-bold w-full md:active:font-normal md:w-fit mx-auto md:px-2 md:py-2 md:h-fit h-full text-center text-[#3D3D3D] rounded-l-md"
                : "text-[#3D3D3D] font-normal md:font-semibold"
            }`}
            onClick={() => handleTabChange("tab1")}>
            Number of Reviews
          </button>
          <button
            className={`px-4 py-2 font-bold rounded ${
              activeTab === "tab2"
                ? "bg-[#40F440] active:font-bold font-normal md:font-bold w-full md:active:font-normal md:w-fit mx-auto md:px-2 md:py-2 md:h-fit h-full text-center text-[#3D3D3D]"
                : "text-[#3D3D3D] active:font-bold  md:font-semibold font-normal"
            } `}
            onClick={() => handleTabChange("tab2")}>
            Recent Reviews
          </button>
          <button
            className={`px-4 py-2 font-bold rounded ${
              activeTab === "tab3"
                ? "bg-[#40F440] active:font-bold font-normal md:font-bold w-full md:active:font-normal md:w-fit mx-auto md:px-2 md:py-2 md:h-fit h-full text-center text-[#3D3D3D]"
                : "text-[#3D3D3D] active:font-bold  md:font-semibold font-normal"
            } `}
            onClick={() => handleTabChange("tab3")}>
            Review Request
          </button>
          <button
            className={`px-4 py-2 font-bold rounded ${
              activeTab === "tab4"
                ? "bg-[#40F440] active:font-bold font-normal md:font-bold w-full md:active:font-normal md:w-fit mx-auto md:px-2 md:py-2 md:h-fit h-full text-center text-[#3D3D3D] rounded-r-md"
                : "text-[#3D3D3D] active:font-bold md:font-semibold font-normal"
            }`}
            onClick={() => handleTabChange("tab4")}>
            Review Reports
          </button>
        </div>
      </div>

      {/* Content based on active tab */}
      <div className="flex -pt-10 flex-col w-full justify-center items-center">
        {activeTab === "tab1" && <NumberOfReview />}
        {activeTab === "tab2" && <RecentReviews />}
        {activeTab === "tab3" && <ReviewRequestMobile />}
        {activeTab === "tab4" && <ReviewReports />}
      </div>
      {/* <div className="-pt-10 flex-col w-full hidden md:flex">
        <NumberOfReview />
        <RecentReviews />
        <ReviewRequestMobile />
        <ReviewReports />
      </div> */}
    </div>
  );
};

export default DashoardTab;
