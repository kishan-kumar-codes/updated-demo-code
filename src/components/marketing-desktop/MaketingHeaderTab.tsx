"use client";
import React, { useState } from "react";

/**
 * HeadBarProps interface
 * 
 * This interface defines the properties for the MarketingHeaderTab component.
 * 
 * @property {string} title - The title of the tab.
 * @property {() => void} [handleClick] - The click handler function.
 */
interface HeadBarProps {
  title: string;
  handleClick?: () => void;
}

const TitleStyle: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * MarketingHeaderTab component
 *
 * This component renders a header tab with a title. It supports an onClick handler to change the text color dynamically.
 *
 * @param {HeadBarProps} props - The properties to pass to the component.
 * @returns {JSX.Element} The rendered MarketingHeaderTab component.
 */
const MarketingHeaderTab = ({ title, handleClick }: HeadBarProps): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);

  /**
   * Handle onClick event
   *
   * This function toggles the isClicked state and triggers the handleClick callback if provided.
   */
  const handleOnClick = (): void => {
    setIsClicked(!isClicked);
    if (handleClick) handleClick();
  };

  return (
    <div
      className={`flex z-20 ml-5 bg-[#F4F4F4] w-[350px] justify-start items-center h-[50px] rounded-3xl ${
        handleClick ? "cursor-pointer" : ""
      }`}
      onClick={handleOnClick}
    >
      <span
        className="flex px-5 ml-7 py-4"
        style={{ ...TitleStyle, color: isClicked ? "#631363" : "#6D6D6D" }}
      >
        {title}
      </span>
    </div>
  );
};

export default MarketingHeaderTab;
