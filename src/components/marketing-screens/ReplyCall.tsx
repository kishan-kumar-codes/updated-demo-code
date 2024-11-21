import React from "react";
import { ReplySendSvg } from "@/svgs/marketing-screens/svgs";

/**
 * Styles for the title text within the ReplyCall component.
 */
const titleStyle: React.CSSProperties = {
  color: "#000",
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * ReplyCall Component
 * 
 * This component represents a reply message card with a reply icon button.
 * The card contains a message and an icon that can be used to send a reply.
 * 
 * @returns {JSX.Element} The rendered ReplyCall component.
 */
const ReplyCall: React.FC = (): JSX.Element => {
  return (
    <div className="flex z-10 w-[350px] h-[150px] justify-center rounded-3xl bg-[#F4F4F4] relative">
      <div className="flex flex-col my-5">
        <span style={titleStyle}>Jessica, Thank you for the message.</span>
        <div className="flex justify-end absolute right-4 bottom-3 items-center cursor-pointer">
          <span>
            <ReplySendSvg />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReplyCall;
