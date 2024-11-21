import { CheckInIcon, CheckOutIcon } from "@/svgs/checkIn/svgs";
import React from "react";

// CSS styles for the main review message
const RequestReviewStyle: React.CSSProperties = {
  color: "#631363",
  fontFamily: "Arial",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

// CSS styles for the secondary text
const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * RequestMemberReview Component
 * @returns {JSX.Element} The rendered component for requesting member reviews
 */
const RequestMemberReview: React.FC = (): JSX.Element => {
  return (
    <div className="relative bg-[#F4F4F4] w-[350px] py-10 h-[700px] flex justify-center">
      <div className="flex flex-col items-center gap-6 justify-center my-10">
        <CheckInIcon />
        <span style={RequestReviewStyle}>All Done!</span>
        <span style={Typography}>Review request completed successfully.</span>
        <div className="px-5 -mb-16 py-3 cursor-pointer rounded-3xl text-white font-bold bg-[#631363]">
          <button>Request Review</button>
        </div>
        <div className="flex -mb-24">
          <CheckOutIcon />
        </div>
      </div>
      <div className="flex w-[370px] absolute z-0 -mt-3 justify-center items-center bottom-0 bg-[#40F440] h-[55px] rounded-t-3xl"></div>
    </div>
  );
};

export default RequestMemberReview;
