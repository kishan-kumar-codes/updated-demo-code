"use client";
import React from "react";
import HeadBar from "../citations-builder/HeadBar";
import Card, { CardProps } from "./Card";
import { RecentR2Icon } from "@/icons/review-dashboard/icons";
import { MarkingFBIcon, RecentGoogleIcon } from "@/icons/marketing/icons";
import { FBIcon, IGIcon } from "@/icons/marketing-screens/icons";
import {
  CallSvgs,
  ChatSvg,
  GrayCallSvg,
  GreenCallSvg,
  MessageSvg,
  RedCrossCallSvg,
} from "@/svgs/marketing-screens/svgs";
import InputBarField from "../citations-builder/InputBarField";
import TabModeLabel from "./TabModeLabel";
import AssignList from "./AssignList";
import ReplyChatTab from "./ReplyChatTab";

export const cardArray: CardProps[] = [
  {
    label: "Maddie Fowler",
    svglogo: <FBIcon />,
    svgAction: <GrayCallSvg />,
    svgCall: <ChatSvg />,
    btnText: "+ Add",
  },
  {
    label: "Gwen Johnson",
    svglogo: <CallSvgs />,
    svgAction: <GreenCallSvg />,
    svgCall: <ChatSvg />,
    btnText: "+ Add",
  },
  {
    label: "Charlotte Brow",
    svglogo: <IGIcon />,
    svgAction: <RedCrossCallSvg />,
    svgCall: <ChatSvg />,
    btnText: "+ Add",
  },
  {
    label: "Seamus O’Ryan",
    svglogo: <MessageSvg />,
    svgAction: <GrayCallSvg />,
    svgCall: <ChatSvg />,
    btnText: "+ Add",
  },
  {
    label: "Seamus O’Ryan",
    svglogo: <FBIcon />,
    svgAction: <GrayCallSvg />,
    svgCall: <ChatSvg />,
    btnText: "+ Add",
  },
  {
    label: "Gwen Johnson",
    svglogo: <CallSvgs />,
    svgAction: <GreenCallSvg />,
    svgCall: <ChatSvg />,
    btnText: "+ Add",
  },
  {
    label: "Charlotte Brow",
    svglogo: <IGIcon />,
    svgAction: <RedCrossCallSvg />,
    svgCall: <ChatSvg />,
    btnText: "+ Add",
  },
  {
    label: "Seamus O’Ryan",
    svglogo: <MessageSvg />,
    svgAction: <GrayCallSvg />,
    svgCall: <ChatSvg />,
    btnText: "+ Add",
  },
  {
    label: "Seamus O’Ryan",
    svglogo: <FBIcon />,
    svgAction: <GrayCallSvg />,
    svgCall: <ChatSvg />,
    btnText: "+ Add",
  },
];
const NewOpportunities = () => {
  const [view, setView] = React.useState(false);
  const [assign, setAssign] = React.useState(false);
  const [reply, setReply] = React.useState(false);
  const [marketing, setMarketing] = React.useState(false);
  const [sales, setSales] = React.useState(false);
  const [services, setServices] = React.useState(false);
  const [installation, setInstallation] = React.useState(false);
  const handleShow = () => {
    setView(!view);
  };
  const handleAssign = () => {
    setAssign(!assign);
  };
  const handleReply = () => {
    setReply(!reply);
  };
  const handleMarketing = () => {
    setMarketing(!marketing);
  };
  const handleSales = () => {
    setSales(!sales);
  };
  const handleServices = () => {
    setServices(!services);
  };
  const handleInstallation = () => {
    setInstallation(!installation);
  };
  return (
    <div className=" flex flex-col gap-4 w-full mt-5 ">
      <div className="flex rounded-3xl w-full  justify-start px-2  py-3">
        <div className="flex-col   ">
          {cardArray.map((card, index) => (
            <Card
              key={index}
              label={card.label}
              svglogo={card.svglogo}
              svgAction={card.svgAction}
              btnText={card.btnText}
              svgCall={card.svgCall}
            />
          ))}
        </div>
      </div>
      <div className="flex -mb-16  " />
      <div className="flex flex-col gap-4 md:-ml-4 -ml-7">
        <HeadBar title="View" handleClick={handleShow} />
        {view && (
          <div className="flex rounded-3xl -mt-14 z-10 min-h-[160px] w-[400px] justify-start ml-5     bg-[#E0E0E0] py-3">
            <div className="flex-col my-4 gap-4 cursor-pointer  pt-8 items-center w-full flex  justify-center ">
              <span className="bg-[#40F440]   font-semibold text-black p-4 rounded-lg  mt-5">
                Open In CRM
              </span>
            </div>{" "}
          </div>
        )}
        <HeadBar title="Assign" handleClick={handleAssign} />
        {assign && (
          <div className="flex rounded-3xl -mt-14 z-10 min-h-[160px] w-[400px] justify-start ml-5     bg-[#E0E0E0] py-3">
            <div className="flex-col -ml-3 my-4 gap-2 cursor-pointer  pt-8 items-center w-full flex  justify-center ">
              <TabModeLabel
                title="ex. Marketing"
                handleClick={handleMarketing}
              />
              {marketing && (
                <div className="flex flex-col rounded-3xl -mt-14 z-10 min-h-[160px] w-[350px] justify-center ml-5  gap-3  items-center   bg-[#F4F4F4] py-3">
                  <AssignList label="Rebecca Riley" />
                  <AssignList label="Rebecca Riley" />{" "}
                  <AssignList label="Rebecca Riley" />{" "}
                  <AssignList label="Rebecca Riley" />
                </div>
              )}
              <TabModeLabel title="ex. Sales" handleClick={handleSales} />
              {sales && (
                <div className="flex flex-col rounded-3xl -mt-14 z-10 min-h-[160px] w-[350px] justify-start ml-5   gap-3  items-center    bg-[#F4F4F4] py-3">
                  <AssignList label="Rebecca Riley" />
                  <AssignList label="Rebecca Riley" />{" "}
                  <AssignList label="Rebecca Riley" />{" "}
                  <AssignList label="Rebecca Riley" />
                </div>
              )}
              <TabModeLabel title="ex. Service" handleClick={handleServices} />
              {services && (
                <div className="flex flex-col rounded-3xl -mt-14 z-10 min-h-[160px] w-[350px] justify-start ml-5   gap-3  items-center   bg-[#F4F4F4] py-3">
                  <AssignList label="Rebecca Riley" />
                  <AssignList label="Rebecca Riley" />{" "}
                  <AssignList label="Rebecca Riley" />{" "}
                  <AssignList label="Rebecca Riley" />
                </div>
              )}
              <TabModeLabel
                title="ex. Installation"
                handleClick={handleInstallation}
              />
              {installation && (
                <div className="flex flex-col rounded-3xl -mt-14 z-10 min-h-[160px] w-[350px] justify-start ml-5    gap-3  items-center  bg-[#F4F4F4] py-3">
                  <AssignList label="Rebecca Riley" />
                  <AssignList label="Rebecca Riley" />{" "}
                  <AssignList label="Rebecca Riley" />{" "}
                  <AssignList label="Rebecca Riley" />
                </div>
              )}
            </div>
          </div>
        )}
        <HeadBar title="Reply" handleClick={handleReply} />
        {reply && (
          <div className="flex rounded-3xl -mt-14 z-10 min-h-[160px] w-[400px] justify-start ml-5     bg-[#E0E0E0] py-3">
            <div className="py-16 ml-4">
              {" "}
              <ReplyChatTab />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewOpportunities;
