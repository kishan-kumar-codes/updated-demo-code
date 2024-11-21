"use client";
import React, { useState } from "react";

/**
 * HeadBarProps interface
 * 
 * This interface defines the properties for the FollowUpDesktopCard component.
 * 
 * @property {string} [title] - The title of the card.
 * @property {string} [headTitle1="Name"] - The heading for the first column.
 * @property {string} [headTitle2="Impressions"] - The heading for the second column.
 * @property {string} [headTitle3="Clicks"] - The heading for the third column.
 * @property {string} [headTitle4="Conversions"] - The heading for the fourth column.
 * @property {string} [reply] - The value for the reply column.
 * @property {string} [headTitle5] - The heading for the fifth column.
 * @property {string} [headTitle6] - The heading for the sixth column.
 * @property {string} [headTitle7] - The heading for the seventh column.
 * @property {string} [impressions] - The value for the impressions column.
 * @property {string} [clicks] - The value for the clicks column.
 * @property {string} [conversions] - The value for the conversions column.
 * @property {string} [message] - The value for the message column.
 * @property {() => void} [handleClick] - The click handler function.
 * @property {string} [status] - The value for the status column.
 */
interface HeadBarProps {
  title?: string;
  headTitle1?: string;
  headTitle2?: string;
  headTitle3?: string;
  headTitle4?: string;
  reply?: string;
  headTitle5?: string;
  headTitle6?: string;
  headTitle7?: string;
  impressions?: string;
  clicks?: string;
  conversions?: string;
  message?: string;
  handleClick?: () => void;
  status?: string;
}

const typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const TitleStyle: React.CSSProperties = {
  ...typography,
  color: "#F4F4F4",
  fontSize: "18px",
};

/**
 * FollowUpDesktopCard component
 *
 * This component renders a desktop card with various headings and values.
 * It supports an onClick handler to change the background color and other styles dynamically.
 *
 * @param {HeadBarProps} props - The properties to pass to the component.
 * @returns {JSX.Element} The rendered FollowUpDesktopCard component.
 */
const FollowUpDesktopCard = ({
  title,
  headTitle1 = "Name",
  headTitle5,
  headTitle2 = "Impressions",
  headTitle3 = "Clicks",
  headTitle4 = "Conversions",
  status,
  handleClick,
  message,
  impressions,
  clicks,
  reply,
  headTitle6,
  headTitle7,
  conversions,
}: HeadBarProps): JSX.Element => {
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
    <div className="flex flex-col items-center justify-center ml-6">
      <div
        className={` z-20 ml-5  ${
          isClicked ? "bg-[#40F440]" : "bg-[#631363]"
        } w-[95%] justify-start items-center h-[50px] rounded-t-3xl ${
          handleClick ? "cursor-pointer" : ""
        }`}
      >
        <div className="grid grid-cols-7 w-full gap-2 justify-center items-center px-3">
          <span
            className="flex px-2 py-4"
            style={{ ...TitleStyle, color: isClicked ? "#631363" : "#F4F4F4" }}
          >
            {headTitle1}
          </span>

          <span
            className="flex px-1 py-4"
            style={{
              ...TitleStyle,
              color: isClicked ? "#631363" : "#F4F4F4",
            }}
          >
            {headTitle2}
          </span>
          <span
            className="flex px-2 py-4 text-center"
            style={{
              ...TitleStyle,
              color: isClicked ? "#631363" : "#F4F4F4",
            }}
          >
            {headTitle3}
          </span>
          <span
            className="flex px-2 py-4 text-center"
            style={{
              ...TitleStyle,
              color: isClicked ? "#631363" : "#F4F4F4",
            }}
          >
            {headTitle4}
          </span>
          <span
            className="flex px-2 py-4 text-center"
            style={{
              ...TitleStyle,
              color: isClicked ? "#631363" : "#F4F4F4",
            }}
          >
            {headTitle5}
          </span>
          <span
            className="flex px-2 py-4 text-center"
            style={{
              ...TitleStyle,
              color: isClicked ? "#631363" : "#F4F4F4",
            }}
          >
            {headTitle6}
          </span>
          <span
            className="flex px-2 py-4 text-center"
            style={{
              ...TitleStyle,
              color: isClicked ? "#631363" : "#F4F4F4",
            }}
          >
            {headTitle7}
          </span>
        </div>
      </div>
      <div className="flex z-20 ml-5 bg-[#E0E0E0] w-[95%] justify-start items-center py-2 min-h-[50px] rounded-b-3xl">
        <div className="grid grid-cols-7 w-full ml-3 gap-2 justify-around items-center px-3">
          <span
            className="flex py-4"
            style={{
              ...typography,
            }}
          >
            {title}
          </span>

          <span
            className="flex px-1 py-4 text-center"
            style={{
              ...typography,
            }}
          >
            {impressions}
          </span>
          <span
            className="flex px-2 py-4 text-center"
            style={{
              ...typography,
            }}
          >
            {clicks}
          </span>
          <span
            className="flex px-2 py-4 text-center"
            style={{
              ...typography,
            }}
          >
            {conversions}
          </span>
          <span
            className="flex px-2 py-4 text-center"
            style={{
              ...typography,
            }}
          >
            {message}
          </span>
          <span
            className="flex px-2 py-4 text-center"
            style={{
              ...typography,
            }}
          >
            {reply}
          </span>
          <span
            className="flex px-2 py-4 text-center"
            style={{
            ...typography,color: "#631363"
            }}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FollowUpDesktopCard;
