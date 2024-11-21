import React from "react";
import MarketingNavBar from "../marketing-desktop/MarketingNavBar";
import { BgProfileSvg, RefereshSvgs } from "@/svgs/marketing-desktop/svgs";
import Image from "next/image";
import { RefreshCw } from "lucide-react";
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
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const CitationNavbar: React.FC = (): JSX.Element => {
  return (
    <div className=" w-full gap-4 md:gap-2 lg:gap-4 hidden md:flex relative bg-white flex-initial">
      {/* Container for the entire navigation bar */}
      <div className="flex w-full items-center">
        {/* Marketing navigation bar component */}
        <MarketingNavBar />
        <div className="flex flex-col justify-center mt-10 lg:ml-64 md:ml-2 ml-0">
          {/* Title of the Citations Builder */}
          <span
            style={{ ...labelStyle, color: "#6D6D6D" }}
            className="flex text-4xl text-center justify-center w-80 md:w-64">
            Citations Builder
          </span>
          {/* Underline for the title */}
          <span className="flex text-4xl text-center justify-center w-80 md:w-64 h-1 bg-[#631363] rounded-full"></span>
        </div>
      </div>
      <div className="flex justify-end h-fit items-end w-full sm:ml-1.5  md:ml-4  mt-4 flex-wrap">
        <div className="flex items-center justify-between">
          {/* Background profile SVG */}
          <BgProfileSvg />
          <div className="flex absolute gap-4 md:ga-1 top-6 justify-center items-center">
            {/* Refresh SVG and profile image */}
            <RefreshCw color="#FFF" />
            <Image src="/profle.png" alt="Google Icon" width={40} height={40} />
            {/* <span style={labelStyle} className="ml-4">
             
            </span> */}
            <span className="text-white font-semibold text-sm lg:text-base">
              John Doe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitationNavbar;
