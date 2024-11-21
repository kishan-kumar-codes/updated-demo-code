"use client";

import React, { useState } from "react";

/**
 * Props for the PaidCampaignsCardDesktop component.
 *
 * @interface HeadBarProps
 * @property {string} [title] - The title of the campaign card.
 * @property {string} [headTitle1] - The label for the first column header.
 * @property {string} [headTitle2] - The label for the second column header.
 * @property {string} [headTitle3] - The label for the third column header.
 * @property {string} [headTitle4] - The label for the fourth column header.
 * @property {React.ReactElement} [logoSvg] - The SVG logo for the campaign card.
 * @property {string} [impressions] - The number of impressions.
 * @property {string} [clicks] - The number of clicks.
 * @property {string} [conversions] - The number of conversions.
 * @property {() => void} [handleClick] - Optional click handler function.
 */
interface HeadBarProps {
  title?: string;
  headTitle1?: string;
  headTitle2?: string;
  headTitle3?: string;
  headTitle4?: string;
  logoSvg?: React.ReactElement;
  impressions?: string;
  clicks?: string;
  conversions?: string;
  handleClick?: () => void;
}

// Define common typography styles
const typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const TitleStyle: React.CSSProperties = {
  ...typography,
  color: "#F4F4F4",
  fontSize: "15px",
};

/**
 * PaidCampaignsCardDesktop component.
 *
 * Displays a campaign card with details such as impressions, clicks, and conversions. 
 * The card can be clicked to trigger a detail view.
 * 
 * @param {HeadBarProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered PaidCampaignsCardDesktop component.
 */
const PaidCampaignsCardDesktop = ({
  title,
  headTitle1 = "Name",
  headTitle2 = "Impressions",
  headTitle3 = "Clicks",
  headTitle4 = "Conversions",
  handleClick,
  logoSvg,
  impressions,
  clicks,
  conversions,
}: HeadBarProps): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    setIsClicked(!isClicked);
    if (handleClick) handleClick();
  };

  return (
    <div className="flex flex-col w-full items-center justify-center ml-11">
      <div
        className={`grid px-2 grid-cols-5 gap-2 z-20 ml-5 ${
          isClicked ? "bg-[#40F440]" : "bg-[#631363]"
        } w-[95%] justify-start items-start h-[50px] rounded-t-3xl ${
          handleClick ? "cursor-pointer" : ""
        }`}
      >
        <span
          className="px-2 py-4 text-left"
          style={{
            ...TitleStyle,
            color: isClicked ? "#631363" : "#F4F4F4",
          }}
        >
          {headTitle1}
        </span>
        <span
          className="px-2 py-4 text-left"
          style={{
            ...TitleStyle,
            color: isClicked ? "#631363" : "#F4F4F4",
          }}
        >
          {headTitle2}
        </span>
        <span
          className="px-2 py-4 text-left"
          style={{
            ...TitleStyle,
            color: isClicked ? "#631363" : "#F4F4F4",
          }}
        >
          {headTitle3}
        </span>
        <span
          className="px-2 py-4 text-left"
          style={{
            ...TitleStyle,
            color: isClicked ? "#631363" : "#F4F4F4",
          }}
        >
          {headTitle4}
        </span>
      </div>
      <div className="grid grid-cols-5 gap-2 z-20 ml-5 bg-[#E0E0E0] w-[95%] justify-start items-center py-2 px-2 min-h-[50px] rounded-b-3xl">
        <div className="flex col-span-1 items-center">
          <span className="px-1 py-4" style={typography}>
            {logoSvg}
          </span>
          <span className="px-1 py-4" style={typography}>
            {title}
          </span>
        </div>
        <span className="px-2 py-4 text-left col-span-1" style={typography}>
          {impressions}
        </span>
        <span className="px-2 py-4 text-left col-span-1" style={typography}>
          {clicks}
        </span>
        <span className="px-2 py-4 text-left col-span-1" style={typography}>
          {clicks}
        </span>

        <div className="justify-center items-left">
          <span
            className="cursor-pointer bg-[#631363] py-3 rounded-lg px-5 h-[35px]"
            style={{ ...typography, color: "#F4F4F4" }}
            onClick={handleOnClick}
          >
            Details
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaidCampaignsCardDesktop;
