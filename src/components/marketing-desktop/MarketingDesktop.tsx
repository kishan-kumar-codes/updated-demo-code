import React from "react";
import NavBar from "../NavBar";
import MarketingTab from "./MarketingTab";
import { BgProfileSvg, RefereshSvgs } from "@/svgs/marketing-desktop/svgs";
import Image from "next/image";
import MarketingNavBar from "./MarketingNavBar";

/**
 * Inline styles for the label
 */
const labelStyle: React.CSSProperties = {
  color: "#FFF",
  fontFamily: "Arial",
  fontSize: "28px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * MarketingDesktop component
 *
 * This component represents the main layout for the marketing desktop screen.
 *
 * @returns {JSX.Element} The rendered MarketingDesktop component.
 */
const MarketingDesktop = (): JSX.Element => {
  return (
    <div className="flex w-full gap-4 relative bg-white">
      <div className="flex w-full items-center">
        <MarketingNavBar />
        <MarketingTab />
      </div>
      <div className="flex justify-end items-end w-full sm:ml-1.5 h-[90px] mt-4">
        <div className="flex">
          <BgProfileSvg />
          <div className="flex absolute gap-4 top-0 py-10 ml-16 justify-center items-center">
            <RefereshSvgs />
            <Image src="/profle.png" alt="Google Icon" width={40} height={40} />
            <span style={labelStyle} className="ml-4">
              John Doe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingDesktop;
