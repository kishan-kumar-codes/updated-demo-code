import {
  GBPReputationSvgs,
  PluxReputationSvgs,
} from "@/svgs/Reputation-mobile/svgs";
import React from "react";
interface ReportCardProps {
  svgs: React.ReactNode;
  title: string;
  desc: string;
}
const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  lineHeight: "normal",
};

const ReportCard = ({ svgs, title, desc }: ReportCardProps) => {
  return (
    <div className="flex flex-col bg-[#F4F4F4] w-full md:w-fit rounded-3xl items-center   my-4">
      <div className="flex p-4 gap-3 w-full h-full">
        <div className=" flex">{svgs}</div>
        <div className=" flex flex-col gap-1">
          <span
            className="text-sm font-semibold md:text-xl lg:text-[32px]"
            style={Typography}>
            {title}
          </span>
          <span
            className="text-[11px] lg:text-xl font-normal max-w-sm md:text-sm"
            style={{ ...Typography }}>
            {desc}
          </span>
          <div className="flex gap-1 items-center md:my-2 w-fit p-2 h-fit  cursor-pointer bg-[#40F440] justify-center rounded-md">
            <PluxReputationSvgs />{" "}
            <span
              className="text-xs font-bold md:text-lg lg:text-xl"
              style={{ ...Typography, color: "#27272D" }}>
              Connect
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
