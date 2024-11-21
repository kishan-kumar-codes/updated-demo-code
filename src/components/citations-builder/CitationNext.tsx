import { MenuIcon } from "@/svgs/checkIn/svgs";
import React from "react";
import CitationNavbar from "./CitationNavbar";
import ReviewNavbar from "../review-dashboard-mobile/ReviewNavbar";
import CitationFinal from "./CitationFinal";

const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const CheckInStyle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * Citations component
 *
 * Displays the main structure for the citations builder page, including a header with a menu icon and title,
 * and the `BuilderFiledCard` component which contains the content for managing business details and citations.
 *
 * @returns {JSX.Element} The rendered component.
 */
const CitationsNext: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center md:items-start w-full">
      <div className="flex flex-col  w-full absolute bg-[#F4F4F4] top-0 items-center">
        <ReviewNavbar heading={" Citations Builder"}  isHeaderVisible={false} />
        <div className="flex flex-col justify-center mx-auto my-2 lg:px-28 md:px-10 w-full">
          <CitationFinal />
        </div>
      </div>
    </div>
  );
};

export default CitationsNext;
