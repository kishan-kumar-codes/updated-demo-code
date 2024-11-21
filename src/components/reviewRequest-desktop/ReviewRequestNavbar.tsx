import React from "react";
import MarketingNavBar from "../marketing-desktop/MarketingNavBar";
import { BgProfileSvg, RefereshSvgs } from "@/svgs/marketing-desktop/svgs";
import Image from "next/image";
const labelStyle: React.CSSProperties = {
  color: "#FFF",
  fontFamily: "Arial",
  fontSize: "28px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};
const ReviewRequestNavbar = () => {
  return (
    <div className="flex w-full  gap-4 relative  bg-white flex-initial">
      <div className="flex  w-full  items-center">
        <MarketingNavBar />
        <div className="flex  flex-col justify-center mt-10 ml-64">
          <span
            style={{ ...labelStyle, color: "#6D6D6D" }}
            className="flex text-4xl text-center justify-center  w-64 ">
            Review Request
          </span>
          <span className="flex text-4xl text-center justify-center   w-64 h-1 bg-[#631363] rounded-full"></span>
        </div>
      </div>
      <div className="flex justify-end items-end w-full sm:ml-1.5  h-[90px] mt-4 flex-wrap">
        <div className="flex">
          <BgProfileSvg />
          <div className="flex absolute gap-4 top-0 py-10 ml-16 justify-center items-center">
            <RefereshSvgs />
            <Image src="/profle.png" alt="Google Icon" width={40} height={40} />
            <span style={labelStyle} className=" ml-4">
              John Doe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewRequestNavbar;
