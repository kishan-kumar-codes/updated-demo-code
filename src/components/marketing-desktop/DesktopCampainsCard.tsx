"use client";
import React, { useState } from "react";

/**
 * Props for the DesktopCampainsCard component.
 * 
 * @property {string} [title] - The title of the campaign.
 * @property {string} [headTitle1] - The first header title, default is "Name".
 * @property {string} [headTitle2] - The second header title, default is "Impressions".
 * @property {string} [headTitle3] - The third header title, default is "Clicks".
 * @property {string} [headTitle4] - The fourth header title, default is "Conversions".
 * @property {string} [headTitle5] - The fifth header title.
 * @property {string} [headTitle6] - The sixth header title.
 * @property {string} [post] - The post content.
 * @property {React.ReactElement} [logoSvg] - The SVG logo element.
 * @property {string} [impressions] - The number of impressions.
 * @property {string} [clicks] - The number of clicks.
 * @property {string} [conversions] - The number of conversions.
 * @property {string} [message] - The message content.
 * @property {() => void} [handleClick] - The click handler function.
 */
interface HeadBarProps {
  title?: string;
  headTitle1?: string;
  headTitle2?: string;
  headTitle3?: string;
  headTitle4?: string;
  headTitle5?: string;
  headTitle6?: string;
  post?: string;
  logoSvg?: React.ReactElement;
  impressions?: string;
  clicks?: string;
  conversions?: string;
  message?: string;
  handleClick?: () => void;
}

// Default styles for typography used in the component.
const typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

// Default styles for title elements.
const TitleStyle: React.CSSProperties = {
  ...typography,
  color: "#F4F4F4",
  fontSize: "18px",
};

/**
 * DesktopCampainsCard component
 * 
 * @param {HeadBarProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered DesktopCampainsCard component.
 */
const DesktopCampainsCard: React.FC<HeadBarProps> = ({
  title,
  headTitle1 = "Name",
  headTitle5,
  headTitle2 = "Impressions",
  headTitle3 = "Clicks",
  headTitle4 = "Conversions",
  handleClick,
  message,
  logoSvg,
  impressions,
  headTitle6,
  clicks,
  post,
  conversions,
}: HeadBarProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    setIsClicked(!isClicked);
    if (handleClick) handleClick();
  };

  return (
    <div className="flex flex-col items-center justify-center ml-6">
      <div
        className={`grid px-2 grid-cols-6 gap-2 z-20 ml-5 ${
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
        <span
          className="px-2 py-4 text-left"
          style={{
            ...TitleStyle,
            color: isClicked ? "#631363" : "#F4F4F4",
          }}
        >
          {headTitle5}
        </span>
        <span
          className="px-2 py-4 text-left"
          style={{
            ...TitleStyle,
            color: isClicked ? "#631363" : "#F4F4F4",
          }}
        >
          {headTitle6}
        </span>
      </div>
      <div className="grid grid-cols-6 gap-2 z-20 ml-5 bg-[#E0E0E0] w-[95%] justify-start items-center py-2 px-2 min-h-[50px] rounded-b-3xl">
        <div className="flex col-span-1 items-center">
          <span className="px-1 py-4" style={typography}>
            {logoSvg}
          </span>
          <span className="px-1 py-4" style={typography}>
            {title}
          </span>
        </div>
        <span className="px-2 py-4 text-left col-span-1" style={typography}>
        {post}
        </span>
        <span className="px-2 py-4 text-left col-span-1" style={typography}>
        {impressions}
        </span>
        <span className="px-2 py-4 text-left col-span-1" style={typography}>
          {clicks}
        </span>

        <span className="px-2 py-4 text-left col-span-1" style={typography}>
        {conversions}
        </span>
        <span className="px-2 py-4 text-left col-span-1" style={typography}>
        {message}
        </span>
      </div>
    </div>
  );
};

export default DesktopCampainsCard;
