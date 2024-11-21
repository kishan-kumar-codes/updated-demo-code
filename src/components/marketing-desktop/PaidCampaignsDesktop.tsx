import React, { useState } from "react";
import Example from "../marketing-screens/chart";
import PaidCampaignsCardDesktop from "./PaidCampaignsCardDesktop";
import { FBIcon, IGIcon } from "@/icons/marketing-screens/icons";
import { DbSvg } from "@/svgs/marketing-screens/svgs";
import ChartFieldCard from "./ChartFieldCard";

/**
 * Common typography styles used across components.
 *
 * @constant typography
 * @type {React.CSSProperties}
 */
const typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * PaidCampaignsDesktop component.
 *
 * Displays a series of campaign cards with associated data. Clicking on a card reveals additional details.
 * 
 * @returns {JSX.Element} The rendered PaidCampaignsDesktop component.
 */
const PaidCampaignsDesktop = (): JSX.Element => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const handleClick2 = () => setShow2(!show2);
  const handleClick3 = () => setShow3(!show3);
  const handleClick4 = () => setShow4(!show4);
  const handleClick1 = () => setShow1(!show1);
  const handleClick5 = () => setShow5(!show5);
  return (
    <div className=" flex flex-col gap-6 justify-center items-center overflow-x-hidden  overflow-y-auto  mt-5 m-9 ">
      <PaidCampaignsCardDesktop
        title="Free Estimates"
        impressions="02220"
        clicks="1,0770"
        logoSvg={<FBIcon />}
        conversions="1,77000"
        handleClick={handleClick1}
      />
      {show1 && (
        <div className="flex rounded-3xl gap-9 pl-2 -mt-16 z-10 min-h-[160px] w-[95%] justify-center items-center ml-16 bg-[#E0E0E0] py-7">
          <ChartFieldCard
            label="Impressions"
            labelValue="125,258"
            title="Client Spend"
            titleValue="2,150.07"
          />
          <ChartFieldCard
            label="Clicks"
            labelValue="125,258"
            title="Average Cost Per Click"
            titleValue="2,150.07"
          />
          <ChartFieldCard
            label="Conversions"
            labelValue="125,258"
            title="Cost Per Conversion"
            titleValue="2,150.07"
          />
        </div>
      )}

      <PaidCampaignsCardDesktop
        title="Free Estimates"
        impressions="02220"
        logoSvg={<IGIcon />}
        clicks="1,0770"
        conversions="1,77000"
        handleClick={handleClick3}
      />
      {show3 && (
        <div className="flex rounded-3xl gap-9 pl-2 -mt-16 z-10 min-h-[160px] w-[95%] justify-center items-center ml-16 bg-[#E0E0E0] py-7">
          <ChartFieldCard
            label="Impressions"
            labelValue="125,258"
            title="Client Spend"
            titleValue="2,150.07"
          />
          <ChartFieldCard
            label="Clicks"
            labelValue="125,258"
            title="Average Cost Per Click"
            titleValue="2,150.07"
          />
          <ChartFieldCard
            label="Conversions"
            labelValue="125,258"
            title="Cost Per Conversion"
            titleValue="2,150.07"
          />
        </div>
      )}
      
      <PaidCampaignsCardDesktop
        title="Free Estimates"
        impressions="02220"
        clicks="1,0770"
        logoSvg={<DbSvg />}
        conversions="1,77000"
        handleClick={handleClick4}
      />
      {show4 && (
        <div className="flex rounded-3xl gap-9 pl-2 -mt-16 z-10 min-h-[160px] w-[95%] justify-center items-center ml-16 bg-[#E0E0E0] py-7">
          <ChartFieldCard
            label="Impressions"
            labelValue="125,258"
            title="Client Spend"
            titleValue="2,150.07"
          />
          <ChartFieldCard
            label="Clicks"
            labelValue="125,258"
            title="Average Cost Per Click"
            titleValue="2,150.07"
          />
          <ChartFieldCard
            label="Conversions"
            labelValue="125,258"
            title="Cost Per Conversion"
            titleValue="2,150.07"
          />
        </div>
      )}

      <div className="flex w-[95%] px-5 ml-16 my-2 mt-8 py-1 justify-start items-start">
        <span style={{ ...typography, fontSize: "25px" }}>DB Reactivation</span>
      </div>
      <PaidCampaignsCardDesktop
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
        <div className="flex rounded-3xl gap-9 pl-2 -mt-16 z-10 min-h-[160px] w-[95%] justify-center items-center ml-16 bg-[#E0E0E0] py-7">
          <ChartFieldCard
            label="Texts Replied"
            labelValue="536"
            title="Average Cost Per Reply"
            titleValue="0.47"
          />
          <ChartFieldCard
            label="Texts Replied"
            labelValue="536"
            title="Average Cost Per Reply"
            titleValue="0.47"
          />
          <ChartFieldCard
            label="Texts Replied"
            labelValue="536"
            title="Average Cost Per Reply"
            titleValue="0.47"
          />
        </div>
      )}
    </div>
  );
};

export default PaidCampaignsDesktop;
