import React from "react";
import MarketingNavBar from "../marketing-desktop/MarketingNavBar";
import { BgProfileSvg, RefereshSvgs } from "@/svgs/marketing-desktop/svgs";
import Image from "next/image";
import { MenuIcon, RefreshCw } from "lucide-react";
import "./styles.css";
/**
 * CitationNavbar component
 *
 * This component renders the navigation bar for the Citation Builder.
 * It includes a marketing navigation bar, a title, and user profile information.
 *
 * @returns {JSX.Element} The rendered component
 */
const labelStyle: React.CSSProperties = {
  color: "#FFF",
  fontFamily: "Arial",
  lineHeight: "normal",
};

const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const reputationStyle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: "22px",
};

const CitationNavbar = ({
  heading,
  isHeaderVisible,
}: {
  heading: string;
  isHeaderVisible?: boolean;
}) => {
  return (
    <>
      <div className="flex md:hidden rounded-b-3xl items-center justify-between w-full h-[60px] bg-[#E0E0E0]">
        <div className="px-5 py-4">
          <MenuIcon />
        </div>
        <div className="flex justify-center items-center flex-grow w-full ">
          <span className="-ml-3" style={reputationStyle}>
            {heading}
          </span>
        </div>
      </div>
      <div className=" w-full gap-4 md:gap-2 lg:gap-4 hidden h-fit md:flex relative bg-white flex-initial">
        {/* Container for the entire navigation bar */}
        <div className="flex w-full items-center justify-between">
          {/* Marketing navigation bar component */}
          <MarketingNavBar />
          {isHeaderVisible === false ? (
            ""
          ) : (
            <div className="flex flex-col justify-center">
              {/* Title of the Citations Builder */}
              <div
                style={{ ...labelStyle, color: "#6D6D6D" }}
                className="flex md:text-2xl lg:text-4xl font-semibold text-center justify-center items-end">
                {heading}
              </div>
              {/* Underline for the title */}
              <div className="flex text-4xl text-center justify-center  h-1 bg-[#631363] rounded-full"></div>
            </div>
          )}
          <div className="relative bg-white overflow-hidden h-16 w-[280px]">
            <div
              className="absolute inset-y-0 right-0 w-[115%] bg-[#631363] transform skew-x-[20deg] origin-top-left"
              style={{ right: "-50px" }}></div>
            <div className="relative flex items-center justify-end h-full px-6 z-10">
              <div className="flex items-center space-x-4 text-white">
                <div className="flex absolute gap-4 md:ga-1 top-4 left-20 justify-center items-center">
                  <RefreshCw className="cursor-pointer" color="#FFF" />
                  <Image
                    className="cursor-pointer"
                    src="/profle.png"
                    alt="Google Icon"
                    width={40}
                    height={40}
                  />

                  <span className="text-white cursor-pointer font-semibold text-sm lg:text-base">
                    John Doe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CitationNavbar;
