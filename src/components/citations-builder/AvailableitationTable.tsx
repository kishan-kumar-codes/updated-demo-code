import React from "react";
import {
  BuildermergeSvgs,
  CallSvgs,
  ContactSvgs,
} from "@/svgs/citations-builder/svgs";
import { CitationRow } from "./CitiationRow";

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
 * TableHeader component
 *
 * Renders the header section of the citation table, including icons and column headers.
 * The header provides visual cues and context for the data in the citation table.
 *
 * @returns {JSX.Element} The rendered header component
 */
const TableHeader: React.FC = (): JSX.Element => {
  return (
    <>
      {/* Header section with icons and column titles */}
      <div className="flex w-full justify-between border-2 border-[#631363] items-center h-[65px] rounded-t-3xl bg-[#F2F2F2]">
        <div
          className="flex w-full -mt-4 h-full md:gap-1 gap-0 justify-between px-0 md:px-2 text-xs md:text-lg"
          style={{ ...typography, color: "#6D6D6D" }}>
          <div className="flex justify-between w-fit px-1 md:px-4">
            <div className="text-[10px] whitespace-nowrap tracking-tighter md:text-base flex justify-center items-center">
              <CallSvgs />
              <span> - Requires Phone Verification</span>{" "}
            </div>
          </div>
          <div className="flex w-full whitespace-nowrap tracking-tighter justify-center items-center text-[10px] md:text-base">
            <ContactSvgs />
            <span>- Requires Business Owner Verification</span>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center -mt-6 py-1 items-center h-[45px] bg-[#631363] rounded-t-3xl">
        <div className="flex p-2 text-xs md:text-lg w-full gap-2 justify-around items-center">
          <div className="flex gap-1 h-[40px] justify-between items-center">
            <span style={{ ...typography }}>Citation Site</span>{" "}
            <span className="mt-0.5 font-[13px]">
              {/* <BuildermergeSvgs /> */}
            </span>
          </div>
          <div className="flex  gap-1 h-[40px] justify-center items-center">
            <span className="text-center w-full" style={{ ...typography }}>
              Type of Site
            </span>
            <span className="mt-0.5 font-[13px]">
              {/* <BuildermergeSvgs /> */}
            </span>
          </div>
          <div className="flex  gap-1 h-[40px] justify-center items-center">
            <span style={{ ...typography }}>Authority</span>
            <span className="mt-0.5 font-[13px]">
              {/* <BuildermergeSvgs /> */}
            </span>
          </div>
          <div className="flex w-[80px] h-[40px] justify-center items-center">
            <span className="text-center" style={{ ...typography }}>
              Citation <br /> Value
            </span>
          </div>
          <div className="flex w-[80px] h-[40px] justify-center items-center">
            <span style={{ ...typography }}>Notes</span>
          </div>
        </div>
      </div>
    </>
  );
};

/**
 * AvailableitationTable component
 *
 * Displays a table of citation data with rows showing various citation details.
 * The table includes headers and multiple rows, each representing a citation.
 *
 * @returns {JSX.Element} The rendered citation table component
 */
const AvailableitationTable: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full justify-center -ml-1 items-center">
      <TableHeader />
      {/* Render multiple citation rows */}
      <CitationRow
        site="google.com"
        type="General Directory"
        authority="94"
        value="Very High"
        bgColor="#ffffff"
        notes={[
          {
            icon: <CallSvgs key="call" />,
            notes: "Requires phone verification after submission.",
          },
          {
            icon: <ContactSvgs key="contact" />,
            notes: "Requires Business Owner Verification",
          }, // You can add specific notes here
        ]}
      />
      <CitationRow
        site="maps.apple.com"
        type="General Directory"
        authority="81"
        value=" High"
        bgColor="#f2f2f2"
        notes={[
          {
            icon: <CallSvgs key="call" />,
            notes: "Requires phone verification after submission.",
          },
          {
            icon: <ContactSvgs key="contact" />,
            notes: "Requires Business Owner Verification",
          }, // You can add specific notes here
        ]}
      />
      <CitationRow
        site="mamta.com"
        type="General Directory"
        authority="76"
        bgColor="#ffffff"
        value="Very High"
        notes={[
          {
            icon: <CallSvgs key="call" />,
            notes: "Requires phone verification after submission.",
          },
          {
            icon: <ContactSvgs key="contact" />,
            notes: "Requires Business Owner Verification",
          }, // You can add specific notes here
        ]}
      />
      <CitationRow
        site="yelp.com"
        type="General Directory"
        authority="82"
        bgColor="#f2f2f2"
        value="Very High"
        notes={[
          {
            icon: <CallSvgs key="call" />,
            notes: "Requires phone verification after submission.",
          },
          {
            icon: <ContactSvgs key="contact" />,
            notes: "Requires Business Owner Verification",
          }, // You can add specific notes here
        ]}
      />
      <CitationRow
        site="avvo.com"
        type="General Directory"
        authority="51"
        bgColor="#ffffff"
        value=" High"
        notes={[
          {
            icon: <CallSvgs key="call" />,
            notes: "Requires phone verification after submission.",
          },
          {
            icon: <ContactSvgs key="contact" />,
            notes: "Requires Business Owner Verification",
          }, // You can add specific notes here
        ]}
      />
      <CitationRow
        site="botw.org"
        type="General Directory"
        authority="72"
        bgColor="#f2f2f2"
        value="Very High"
        notes={[
          {
            icon: <CallSvgs key="call" />,
            notes: "Requires phone verification after submission.",
          },
          {
            icon: <ContactSvgs key="contact" />,
            notes: "Requires Business Owner Verification",
          }, // You can add specific notes here
        ]}
      />
      <CitationRow
        site="ezlocal.com"
        type="General Directory"
        authority="94"
        bgColor="#ffffff"
        value=" High"
        notes={[
          {
            icon: <CallSvgs key="call" />,
            notes: "Requires phone verification after submission.",
          },
          {
            icon: <ContactSvgs key="contact" />,
            notes: "Requires Business Owner Verification",
          }, // You can add specific notes here
        ]}
      />
    </div>
  );
};

export default AvailableitationTable;
