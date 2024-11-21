import { MenuIcon } from "@/svgs/checkIn/svgs";
import React from "react";
import TabComponent from "./MarketingTabs";
import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";
/**
 * Typography styles for text elements.
 */
const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * Specific styling for the 'Marketing' title.
 */
const CheckInStyle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: "22px",
};

/**
 * MarketingScreen Component
 *
 * This component serves as the marketing screen interface, including a header with a menu icon, a title, and a tab component.
 * It also features a styled footer section.
 *
 * @returns {JSX.Element} The rendered MarketingScreen component.
 */
const MarketingScreen: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col w-full items-center bg-[#F4F4F4]">
        <CitationNavbar heading={"Marketing"} />
        <div className="flex flex-col items-center">
          <TabComponent />
          <div className="flex relative z-20 -mt-5 justify-center items-center md:hidden bg-[#40F440] h-[55px] rounded-t-3xl">
            {/* Additional content or components can be placed here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingScreen;
