"use client";
import React, { useState } from "react";

/**
 * Props for the FollowUpCard component.
 *
 * @property {string} [title] - The title text for the card.
 * @property {string} [headTitle1] - The first header title (default: "Name").
 * @property {string} [headTitle2] - The second header title (default: "Impressions").
 * @property {string} [headTitle3] - The third header title (default: "Clicks").
 * @property {string} [headTitle4] - The fourth header title (default: "Conversions").
 * @property {string} [headTitle5] - The fifth header title.
 * @property {string} [headTitle6] - The sixth header title.
 * @property {string} [headTitle7] - The seventh header title.
 * @property {string} [impressions] - The impressions value to display.
 * @property {string} [clicks] - The clicks value to display.
 * @property {string} [conversions] - The conversions value to display.
 * @property {string} [message] - The message value to display.
 * @property {string} [reply] - The reply value to display.
 * @property {string} [status] - The status value to display.
 * @property {() => void} [handleClick] - Optional callback function for handling clicks on the header.
 */
interface HeadBarProps {
  title?: string;
  headTitle1?: string;
  headTitle2?: string;
  headTitle3?: string;
  headTitle4?: string;
  headTitle5?: string;
  headTitle6?: string;
  headTitle7?: string;
  impressions?: string;
  clicks?: string;
  conversions?: string;
  message?: string;
  reply?: string;
  handleClick?: () => void;
  status?: string;
}

// Define the styles for typography and title
const typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const TitleStyle: React.CSSProperties = {
  ...typography,
  color: "#F4F4F4",
};

/**
 * FollowUpCard Component
 *
 * This component renders a card with a clickable header and various metrics displayed below.
 *
 * @param {HeadBarProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered FollowUpCard component.
 */
const FollowUpCard: React.FC<HeadBarProps> = ({
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

  const handleOnClick = () => {
    setIsClicked(!isClicked);
    if (handleClick) handleClick();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`flex z-20  ${
          isClicked ? "bg-[#40F440]" : "bg-[#631363]"
        } w-[430px] justify-start items-center h-[50px] rounded-t-3xl ${
          handleClick ? "cursor-pointer" : ""
        }`}
        onClick={handleOnClick}>
        <div className="flex  px-2 w-full">
          <div
            className="flex px-2 py-4 text-[9px] md:text-base"
            style={{ ...TitleStyle, color: isClicked ? "#631363" : "#F4F4F4" }}>
            {headTitle1}
          </div>
          <div className="flex w-full ml-4 justify-end">
            <span
              className="flex text-[9px] md:text-base px-1 py-4"
              style={{
                ...TitleStyle,
                color: isClicked ? "#631363" : "#F4F4F4",
              }}>
              {headTitle2}
            </span>
            <span
              className="flex text-[9px] md:text-base px-2 py-4 text-center"
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
            <span
              className="flex px-2 py-4 text-center"
              style={{
                ...TitleStyle,
                color: isClicked ? "#631363" : "#F4F4F4",
              }}>
              {headTitle5}
            </span>
            <span
              className="flex px-2 py-4 text-center"
              style={{
                ...TitleStyle,
                color: isClicked ? "#631363" : "#F4F4F4",
              }}>
              {headTitle6}
            </span>
            <span
              className="flex px-2 py-4 text-center"
              style={{
                ...TitleStyle,
                color: isClicked ? "#631363" : "#F4F4F4",
              }}>
              {headTitle7}
            </span>
          </div>
        </div>
      </div>
      <div className="flex z-20 bg-[#E0E0E0] justify-start items-center py-2 min-h-[50px] rounded-b-3xl">
        <div className="flex px-1 w-[80px] justify-start items-center">
          <span className="flex px-1 py-4" style={typography}>
            {title}
          </span>
        </div>
        <div className="flex">
          <div className="flex justify-center px-1">
            <span className="flex w-[56px] py-4 text-center" style={typography}>
              {impressions}
            </span>
            <span
              className="flex py-4 text-center pl-4 w-[50px]"
              style={typography}>
              {clicks}
            </span>
            <span
              className="flex w-[73px] justify-center items-center py-4 text-center"
              style={typography}>
              {conversions}
            </span>
            <span className="flex w-[59px] py-4 text-center" style={typography}>
              {message}
            </span>
            <span className="flex w-[29px] py-4 text-center" style={typography}>
              {reply}
            </span>
            <span
              className="flex px-2 py-4 text-center"
              style={{ ...typography, color: "#631363" }}>
              {status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUpCard;
