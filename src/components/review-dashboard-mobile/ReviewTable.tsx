import React from "react";

const typography: React.CSSProperties = {
  color: "#FFF",
  fontFamily: "Arial",
  lineHeight: "normal",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
};

/**
 * LocationPerformanceTable component
 *
 * Displays a table of location performance data with rows showing active users,
 * review requests, conversions, and bounces.
 *
 * @returns {JSX.Element} The rendered location performance table component
 */
const ReviewTable: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full my-5 justify-center -ml-1 items-center">
      <div className="flex w-full justify-center -mt-6 items-center h-[45px] bg-[#631363] rounded-t-3xl">
        <div className="flex gap-1 flex-1 h-[40px] pl-4 justify-start items-center">
          <span style={{ ...typography, fontSize: "14px" }}>
            Employee- John Doe
          </span>
        </div>
      </div>
      <div className="flex w-full justify-center z-10 items-center bg-[#F5F5F5] h-[40px]  ">
        <div className="flex gap-1 flex-1 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span
            className="font-normal text-xs md:text-sm md:font-semibold"
            style={{ ...typography, color: "#6D6D6D" }}>
            Review Requests Sent
          </span>
        </div>
        <div className="flex gap-1 flex-1 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span
            className="font-normal text-xs md:text-sm md:font-semibold"
            style={{ ...typography, color: "#6D6D6D" }}>
            Completed Reviews
          </span>
        </div>
      </div>
      <div className="flex w-full justify-center z-10 items-center  h-[40px] bg-[#FFFFFF]">
        <div className="flex gap-1 flex-1 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span
            className="font-normal text-xs md:text-sm md:font-semibold"
            style={{ ...typography, color: "#6D6D6D" }}>
            6
          </span>
        </div>{" "}
        <div className="flex gap-1 flex-1 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span
            className="font-normal text-xs md:text-sm md:font-semibold"
            style={{ ...typography, color: "#6D6D6D" }}>
            4
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewTable;
