"use client";

import React, { useState } from "react";

/**
 * Props for the PaidCampaignsCard component.
 *
 * @property {string} [title] - The title text for the card.
 * @property {string} [headTitle1] - The first header title (default: "Name").
 * @property {string} [headTitle2] - The second header title (default: "Impressions").
 * @property {string} [headTitle3] - The third header title (default: "Clicks").
 * @property {string} [headTitle4] - The fourth header title (default: "Conversions").
 * @property {React.ReactElement} [logoSvg] - Optional SVG element to display as a logo.
 * @property {string} [impressions] - The impressions value to display.
 * @property {string} [clicks] - The clicks value to display.
 * @property {string} [conversions] - The conversions value to display.
 * @property {() => void} [handleClick] - Optional callback function for handling clicks on the details button.
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

// Define the styles for typography and title
const typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const TitleStyle: React.CSSProperties = {
  ...typography,
  color: "#F4F4F4",
  fontSize: "12px",
};

/**
 * PaidCampaignsCard Component
 *
 * This component renders a card for paid campaigns with a clickable header and various metrics displayed below.
 *
 * @param {HeadBarProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered PaidCampaignsCard component.
 */
const PaidCampaignsCard: React.FC<HeadBarProps> = ({
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
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    setIsClicked(!isClicked);
    if (handleClick) handleClick();
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div
        className={`flex z-20 ml-5 ${
          isClicked ? "bg-[#40F440]" : "bg-[#631363]"
        } w-[430px] justify-start items-center h-[50px] rounded-t-3xl ${
          handleClick ? "cursor-pointer" : ""
        }`}
        onClick={handleOnClick}>
        <div className="flex w-full">
          <span
            className="flex px-2 py-4"
            style={{ ...TitleStyle, color: isClicked ? "#631363" : "#F4F4F4" }}>
            {headTitle1}
          </span>
          <div className="flex w-full ml-24">
            <span
              className="flex px-2 py-4"
              style={{
                ...TitleStyle,
                color: isClicked ? "#631363" : "#F4F4F4",
              }}>
              {headTitle2}
            </span>
            <span
              className="flex px-2 py-4 text-center"
              style={{
                ...TitleStyle,
                color: isClicked ? "#631363" : "#F4F4F4",
              }}>
              {headTitle3}
            </span>
            <span
              className="flex px-2 py-4 text-center"
              style={{
                ...TitleStyle,
                color: isClicked ? "#631363" : "#F4F4F4",
              }}>
              {headTitle4}
            </span>
          </div>
        </div>
      </div>
      <div className="flex z-20 ml-5 bg-[#E0E0E0] w-[430px] justify-start items-center py-2 min-h-[50px] rounded-b-3xl">
        <div className="flex px-1">
          <span className="flex px-1 py-4" style={typography}>
            {logoSvg}
          </span>
          <span className="flex px-1 py-4" style={typography}>
            {title}
          </span>
        </div>
        <div className="flex flex-1">
          <div className="flex gap-4 ml-4 px-3">
            <span
              className="flex px-2 py-4 text-center w-[53px]"
              style={typography}>
              {impressions}
            </span>
            <span
              className="flex px-2 py-4 text-center w-[53px]"
              style={typography}>
              {clicks}
            </span>
            <span
              className="flex w-[53px] px-2 py-4 text-center"
              style={typography}>
              {conversions}
            </span>
          </div>
          <div
            className="flex -ml-1 bg-[#631363] h-[30px] justify-center mt-2 rounded-lg px-2 items-center"
            onClick={handleOnClick}>
            <span
              className="flex cursor-pointer"
              style={{ ...typography, color: "#F4F4F4" }}>
              Details
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidCampaignsCard;
