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
const LocationPerformanceTable: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col my-5 justify-between w-full -ml-1 items-center">
      <div className="flex w-full justify-center -mt-6 text-xs md:text-lg items-center h-[45px] bg-[#631363] rounded-t-3xl">
        <div className="flex gap-1 w-28 md:w-[20%] border-r border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, fontSize: "14px" }}>Active Users</span>
        </div>
        <div className="flex gap-1 w-fit flex-1 h-[40px] pl-4 justify-center items-center">
          <span style={{ ...typography, fontSize: "14px" }}>
            Review Requests
          </span>
        </div>
      </div>
      <div className="flex w-full z-10 items-center bg-[#F5F5F5] text-xs md:text-lg h-[40px]  ">
        <div className="flex gap-1 w-28 md:w-[20%] border border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#6D6D6D", fontWeight: 400 }}>
            Total
          </span>
        </div>
        <div className="flex gap-1 flex-1 w-fit border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#6D6D6D", fontWeight: 400 }}>
            Total
          </span>
        </div>
        <div className="flex gap-1 flex-1 w-fit border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#6D6D6D", fontWeight: 400 }}>
            Conversions
          </span>
        </div>{" "}
        <div className="flex gap-1 flex-1 w-fit border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#6D6D6D", fontWeight: 400 }}>
            Bounces
          </span>
        </div>
      </div>
      <div className="flex w-full justify-between z-10 items-center  h-[40px] text-xs md:text-lg bg-[#FFFFFF]">
        <div className="flex gap-1 w-28 md:w-[20%] border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#6D6D6D", fontWeight: 400 }}>
            7
          </span>
        </div>
        <div className="flex gap-1 flex-1 w-fit border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#6D6D6D", fontWeight: 400 }}>
            0
          </span>
        </div>
        <div className="flex gap-1 flex-1 w-fit border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#6D6D6D", fontWeight: 400 }}>
            4
          </span>
        </div>{" "}
        <div className="flex gap-1 flex-1 w-fit border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#6D6D6D", fontWeight: 400 }}>
            -2
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocationPerformanceTable;
