import {
  BuildermergeSvgs,
  BuilderRectangleSvgs,
} from "@/svgs/citations-builder/svgs";
import React from "react";

// Styles for typography
const typography: React.CSSProperties = {
  color: "#FFF",
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
};

/**
 * CitationTable component
 *
 * This component renders a table header for citations and a message indicating
 * no data available. It includes columns for Citation Site, Business Name + Address,
 * Zip/Postcode, Phone Number, Update button, and Actions.
 *
 * @returns {JSX.Element} The rendered CitationTable component.
 */
const CitationTable: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full justify-between -ml-1 items-center">
      {/* Header row */}
      <div className="flex w-full justify-between items-center bg-[#631363] rounded-t-3xl">
        <div className="flex p-2 text-[11px] md:text-lg  w-full gap-2 justify-center items-center">
          <div className="flex w-full gap-1 justify-center items-center">
            <span style={{ ...typography }}>
              Citation Site{" "}
              <span className="mt-0.5 font-[13px] lg:text-[20px]">
                {/* <BuildermergeSvgs /> */}
              </span>
            </span>
          </div>
          <div className="flex  w-full justify-center items-center">
            <span className="text-center " style={{ ...typography }}>
              Business Name + Address
            </span>
          </div>
          <div className="flex  w-full h-[40px] justify-center items-center">
            <span className="text-center" style={{ ...typography }}>
              Zip/ Postcode
            </span>
          </div>
          <div className="flex  w-full h-[40px] justify-center items-center">
            <span className="text-center" style={{ ...typography }}>
              Phone Number
            </span>
          </div>
          <div className="flex w-full flex-col h-[40px] justify-center items-center">
            <span style={{ ...typography }}>
              {" "}
              <span className=" px-1 font-[400]">
                <BuilderRectangleSvgs />
              </span>
              Update
            </span>
          </div>
          <div className="flex w-full h-[40px] justify-center items-center">
            <span style={{ ...typography }}>Actions</span>
          </div>
        </div>
      </div>
      {/* No data row */}
      <div className="flex w-full justify-center items-center h-[45px] bg-[#F2F2F2]">
        <div
          className="text-xs md:text-lg"
          style={{ ...typography, color: "#6D6D6D" }}>
          No data matching the selected criteria could be found
        </div>
      </div>
    </div>
  );
};

export default CitationTable;
