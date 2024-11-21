"use client";
import React, { useState } from "react";

/**
 * Props for the Campaigns component.
 *
 * @property {string} [title] - The title text for the campaign.
 * @property {string} [headTitle1] - The first header title.
 * @property {string} [headTitle2] - The second header title.
 * @property {string} [headTitle3] - The third header title.
 * @property {string} [headTitle4] - The fourth header title.
 * @property {string} [headTitle5] - The fifth header title.
 * @property {string} [headTitle6] - The sixth header title.
 * @property {string} [post] - The post text for the campaign.
 * @property {React.ReactElement} [logoSvg] - The logo element for the campaign.
 * @property {string} [impressions] - The impressions text for the campaign.
 * @property {string} [clicks] - The clicks text for the campaign.
 * @property {string} [conversions] - The conversions text for the campaign.
 * @property {string} [message] - The message text for the campaign.
 * @property {() => void} [handleClick] - The function to handle click events.
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
 * Campaigns Component
 *
 * This component renders a campaign header and details.
 *
 * @param {HeadBarProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered component.
 */
const Campaigns = ({
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
}: HeadBarProps): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    setIsClicked(!isClicked);
    if (handleClick) handleClick();
  };

  return (
    <div className="flex flex-col items-center justify-center -ml-3">
      <div
        className={`flex z-20 ml-5  ${
          isClicked ? "bg-[#40F440]" : "bg-[#631363]"
        } w-[430px] justify-start items-center h-[50px] rounded-t-3xl ${
          handleClick ? "cursor-pointer" : ""
        }`}
      >
        <div className="flex -ml-2 px-2 w-full">
          <span
            className="flex px-2  py-4"
            style={{ ...TitleStyle, color: isClicked ? "#631363" : "#F4F4F4" }}
          >
            {headTitle1}
          </span>
          <div className="flex w-full gap-2   ml-16">
            <span
              className="flex px-1 py-4"
              style={{
                ...TitleStyle,
                color: isClicked ? "#631363" : "#F4F4F4",
              }}
            >
              {headTitle6}
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
          </div>
        </div>
      </div>
      <div className="flex z-20 ml-5  bg-[#E0E0E0] w-[430px] justify-start items-center py-2 min-h-[50px] rounded-b-3xl">
        <div className="flex px-1 w-[110px] justify-start items-center ">
          <span className="flex px-1 py-4" style={typography}>
            {logoSvg}
          </span>
          <span className="flex px-1  py-4" style={typography}>
            {title}
          </span>
        </div>
        <div className="flex flex-1">
          <div className="flex gap-4 ml-4 px-3">
            <span
              className="flex px-2 py-4 text-center w-[53px]"
              style={typography}
            >
              {post}
            </span>
            <span
              className="flex px-2 py-4 text-center w-[53px]"
              style={typography}
            >
              {impressions}
            </span>
            <span
              className="flex px-2 py-4 text-center w-[53px]"
              style={typography}
            >
              {clicks}
            </span>
            <span
              className="flex w-[53px] px-2 py-4 text-center"
              style={typography}
            >
              {conversions}
            </span>
            <span
              className="flex w-[53px] px-2 py-4 text-center"
              style={typography}
            >
              {message}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
