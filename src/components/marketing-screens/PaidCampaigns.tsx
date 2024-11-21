"use client";
import React, { useState } from "react";
import PaidCampaignsCard from "./PaidCampaignsCard";
import ChartFieldCard from "../marketing-desktop/ChartFieldCard";
import { FBIcon, IGIcon } from "@/icons/marketing-screens/icons";
import { DbSvg } from "@/svgs/marketing-screens/svgs";

/**
 * Typography styles for text elements.
 */
const typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * PaidCampaigns Component
 *
 * This component displays a series of paid campaign cards with collapsible details.
 * Each card represents a different type of campaign and displays additional details when clicked.
 *
 * @returns {JSX.Element} The rendered PaidCampaigns component.
 */
const PaidCampaigns: React.FC = () => {
  // State to manage the visibility of detailed views for each campaign
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  // Handlers to toggle the visibility of detailed views
  const handleClick1 = () => setShow1(!show1);
  const handleClick2 = () => setShow2(!show2);
  const handleClick3 = () => setShow3(!show3);
  const handleClick4 = () => setShow4(!show4);
  const handleClick5 = () => setShow5(!show5);

  return (
    <div className="flex flex-col gap-2 mt-5">
      {/* PaidCampaignsCard for Facebook */}
      <PaidCampaignsCard
        title="Free Estimates"
        impressions="02220"
        clicks="1,0770"
        logoSvg={<FBIcon />}
        conversions="1,77000"
        handleClick={handleClick1}
      />
      {show1 && (
        <div className="flex flex-col rounded-3xl -mt-14 z-10  justify-start px-2 bg-[#E0E0E0] py-3">
          <ChartFieldCard
            label={"Impressions"}
            labelValue={"125,258"}
            title={"Client Spend"}
            titleValue={"2,150.07"}
            fontSize="14px"
          />
          <ChartFieldCard
            label={"Clicks"}
            labelValue={"125,258"}
            title={"Average Cost Per Click"}
            titleValue={"2,150.07"}
            fontSize="14px"
          />
          <ChartFieldCard
            label={"Conversions"}
            labelValue={"125,258"}
            title={"Cost Per Conversion"}
            titleValue={"2,150.07"}
            fontSize="14px"
          />
        </div>
      )}

      {/* PaidCampaignsCard for Instagram */}
      <PaidCampaignsCard
        title="Free Estimates"
        impressions="02220"
        logoSvg={<IGIcon />}
        clicks="1,0770"
        conversions="1,77000"
        handleClick={handleClick3}
      />
      {show3 && (
        <div className="flex flex-col rounded-3xl -mt-14 z-10 min-h-[160px] justify-start px-7 ml-2 bg-[#E0E0E0] py-3">
          <ChartFieldCard
            label={"Impressions"}
            labelValue={"125,258"}
            title={"Client Spend"}
            titleValue={"2,150.07"}
            fontSize="14px"
          />
          <ChartFieldCard
            label={"Clicks"}
            labelValue={"125,258"}
            title={"Average Cost Per Click"}
            titleValue={"2,150.07"}
            fontSize="14px"
          />
          <ChartFieldCard
            label={"Conversions"}
            labelValue={"125,258"}
            title={"Cost Per Conversion"}
            titleValue={"2,150.07"}
            fontSize="14px"
          />
        </div>
      )}

      {/* PaidCampaignsCard for Database */}
      <PaidCampaignsCard
        title="Free Estimates"
        impressions="02220"
        clicks="1,0770"
        logoSvg={<DbSvg />}
        conversions="1,77000"
        handleClick={handleClick4}
      />
      {show4 && (
        <div className="flex flex-col rounded-3xl -mt-14 z-10 min-h-[160px] justify-start px-7 ml-2 bg-[#E0E0E0] py-3">
          <ChartFieldCard
            label={"Impressions"}
            labelValue={"125,258"}
            title={"Client Spend"}
            titleValue={"2,150.07"}
            fontSize="14px"
          />
          <ChartFieldCard
            label={"Clicks"}
            labelValue={"125,258"}
            title={"Average Cost Per Click"}
            titleValue={"2,150.07"}
            fontSize="14px"
          />
          <ChartFieldCard
            label={"Conversions"}
            labelValue={"125,258"}
            title={"Cost Per Conversion"}
            titleValue={"2,150.07"}
            fontSize="14px"
          />
        </div>
      )}

      {/* DB Reactivation Section */}
      <div className="flex px-5 my-2 mt-8 py-1">
        <span style={typography}>DB Reactivation</span>
      </div>

      {/* PaidCampaignsCard for DB Reactivation */}
      <PaidCampaignsCard
        title="Friday 20% Off"
        impressions="02220"
        headTitle2="Texts Sent"
        headTitle3="Texts Replied"
        headTitle4="Leads"
        logoSvg={<DbSvg />}
        clicks="1,0770"
        conversions="1,77000"
        handleClick={handleClick5}
      />
      {show5 && (
        <div className="flex flex-col rounded-3xl -mt-14 z-10 min-h-[160px] justify-start px-7 ml-2 bg-[#E0E0E0] py-3">
          <ChartFieldCard
            label={"Texts Replied"}
            labelValue={"536"}
            title={"Average Cost Per Reply"}
            titleValue={"0.47"}
            fontSize="14px"
          />
          <ChartFieldCard
            label={"Texts Replied"}
            labelValue={"536"}
            title={"Average Cost Per Reply"}
            titleValue={"0.47"}
            fontSize="14px"
          />
          <ChartFieldCard
            label={"Texts Replied"}
            labelValue={"536"}
            title={"Average Cost Per Reply"}
            titleValue={"0.47"}
            fontSize="14px"
          />
        </div>
      )}
    </div>
  );
};

export default PaidCampaigns;
