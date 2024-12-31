import { FacebookAdMobileDeleteSvgs } from "@/svgs/FacebookAdMobile/svgs";
import React from "react";

export interface AdSetData {
  adSetName: string;
  startDate: string;
  endDate: string;
  status: string;
  ActionIcon: React.ReactElement;
}
const adSetData: AdSetData[] = [
  {
    adSetName: "New_Adset121",
    startDate: "8/17/2024, 12:00 AM",
    endDate: "8/30/2024, 12:00 AM",
    status: "Active",
    ActionIcon: <FacebookAdMobileDeleteSvgs />,
  },
  {
    adSetName: "New_Adset121",
    startDate: "8/17/2024, 12:00 AM",
    endDate: "8/30/2024, 12:00 AM",
    status: "Active",
    ActionIcon: <FacebookAdMobileDeleteSvgs />,
  },
  {
    adSetName: "New_Adset121",
    startDate: "8/17/2024, 12:00 AM",
    endDate: "8/30/2024, 12:00 AM",
    status: "Active",
    ActionIcon: <FacebookAdMobileDeleteSvgs />,
  },

  // Additional data can be added here
];

const AdSetRow: React.FC<AdSetData> = ({
  adSetName,
  startDate,
  endDate,
  status,
  ActionIcon,
}) => (
  <div className="flex w-full odd:bg-[#FFFFFF]">
    <span className="text-[#6D6D6D] flex-1 px-0.5 text-center justify-center min-w-[25%] border border-r-[#CCCCCC]  items-center text-[10px] lg:text-[20px] leading-normal flex ">
      {adSetName}
    </span>
    <span className="text-[#6D6D6D] px-[27px] text-center lg:text-[20px] min-w-[25%] border justify-center border-l-[#CCCCCC]  items-center text-[10px] leading-normal flex ">
      {startDate}
      <br /> {endDate}
    </span>
    <span className="text-[#6D6D6D] flex-1 lg:text-[20px]  min-w-[25%] border border-l-[#CCCCCC]  justify-center w-full h-full items-center text-xs leading-normal flex text-center py-1 px-2">
      {status}
    </span>
    <span className="text-[#6D6D6D] flex-1  justify-center text-center w-full min-w-[25%] h-full items-center text-xs lg:text-[20px]  leading-normal flex pl-3 py-1 px-2">
      {ActionIcon}
    </span>
  </div>
);
const AdSetsTable = () => {
  // Define column headers and additional classes for the first and last items
  const columns = [
    { label: "Ad Set", extraClasses: "rounded-tl-3xl flex-1" },
    { label: "Time & Date", extraClasses: "" },
    { label: "Status", extraClasses: "flex-1" },
    { label: "Actions", extraClasses: "rounded-tr-3xl flex-1" },
  ];

  // Common styling for all columns
  const commonClasses =
    "text-[#FFFFFF] text-xs lg:text-[22px] p-2 min-w-[25%] font-normal leading-normal border border-l-[#CCCCCC] flex justify-center items-center text-center bg-[#631363]";

  return (
    <div className="flex flex-col my-3 w-full">
      <div className="flex w-full">
        {columns.map((column, index) => (
          <span
            key={index}
            className={`${commonClasses} ${column.extraClasses}`}>
            {column.label}
          </span>
        ))}
      </div>
      {adSetData.map((data, index) => (
        <AdSetRow key={index} {...data} />
      ))}
    </div>
  );
};

export default AdSetsTable;
