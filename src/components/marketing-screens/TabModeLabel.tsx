"use client";
import React, { useState } from "react";

/**
 * Props for the TabModeLabel component.
 * 
 * @property {string} title - The title text for the tab label.
 * @property {() => void} [handleClick] - Optional callback function for handling clicks on the tab.
 */
interface HeadBarProps {
  title: string;
  handleClick?: () => void;
}

// Define the styles for the title
const TitleStyle: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * TabModeLabel Component
 * 
 * This component renders a clickable tab label with a dynamic color based on its clicked state.
 * 
 * @param {HeadBarProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered TabModeLabel component.
 */
const TabModeLabel: React.FC<HeadBarProps> = ({ title, handleClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
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

export default TabModeLabel;
