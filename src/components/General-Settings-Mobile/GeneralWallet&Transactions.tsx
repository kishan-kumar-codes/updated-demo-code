"use client";
import {
  GeneralExportSvgs,
  GeneralFilterSvgs,
  GeneralRechageCardSvgs,
  GerneralDownSvgs,
  GerneralEditSvgs,
  GerneralGreenInfoSvgs,
  GerneralThreeDotsSvgs,
  GerneralVisaSvgs,
} from "@/svgs/General-Settings-Mobile/svgs";
import React, { useState } from "react";
import { Button } from "../ui/button";
import GeneralHistoryCard from "./GeneralHistoryCard";
// import { DatePickerWithRanges } from "./GeneralDateRangePicker";
import GeneralDetailedTransactions from "./GeneralDetailedTransactions";
import GeneralSummary from "./GeneralSummary";
const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};
const GeneralWalletTransactions = () => {
  const [activeTab, setActiveTab] = useState("Detailed Transactions");

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col w-full px-2 lg:px-5 gap-2">
      {" "}
      <span className="text-[#6D6D6D] text-xs lg:text-[22px] font-bold leading-normal">
        Wallet Balance
      </span>
      <div className="w-full flex px-4 flex-col gap-1 py-1.5 bg-[#FFF] rounded-2xl">
        <div className="w-full flex justify-between items-center my-2 px-2">
          <div className="flex gap-2">
            <span className="text-[#631363] text-[22px] lg:text-[34px] font-bold leading-normal">
              {" "}
              $452.26
            </span>{" "}
            <span className=" mt-4">
              <GerneralDownSvgs />
            </span>
          </div>
          <Button className="bg-[#631363] text-[#FFF] h-9 lg:h-12 lg:text-[20px] text-xs py-3 font-bold rounded-3xl">
            + Add Balance
          </Button>
        </div>
      </div>
      <div className="w-full flex px-4 flex-col gap-1  p-3 lg:p-5 py-2 lg:py-4 bg-[#FFF] rounded-xl">
        <div className="w-full flex  lg:items-center  gap-2 lg:gap-6">
          <GeneralRechageCardSvgs />
          <div className="text-[#6D6D6D] text-[10px] flex flex-wrap items-center gap-1 lg:gap-3 lg:text-[20px]  font-normal leading-normal">
            {" "}
            Auto recharge with{" "}
            <div className="text-[#6D6D6D] bg-[#F4F4F4] flex-wrap text-xs lg:text-[20px]  gap-2 font-normal leading-normal rounded-3xl flex py-1 px-3">
              {" "}
              $100{" "}
              <div className=" mt-1.5 pl-3">
                <GerneralDownSvgs />
              </div>{" "}
            </div>
            <div className="text-[#6D6D6D] text-[10px] lg:text-[20px]  font-normal leading-normal">
              when balance
            </div>
            <div className="text-[#6D6D6D] text-[10px] lg:text-[20px] font-normal leading-normal">
              is lower than
            </div>
            <span className="text-[#6D6D6D] bg-[#F4F4F4] text-xs lg:text-[20px]  gap-2 font-normal leading-normal rounded-3xl flex py-1 px-3">
              {" "}
              $10{" "}
              <div className=" mt-1.5 pl-3">
                <GerneralDownSvgs />
              </div>{" "}
            </span>
          </div>
        </div>
        <div className="flex w-full items-center py-1 lg:py-3 justify-between gap-4">
          <div className="flex flex-col">
            <div className="text-[#6D6D6D] text-[10px] lg:text-[20px] flex items-center gap-2 font-normal leading-normal">
              {" "}
              <GerneralGreenInfoSvgs /> Recharge amount will be auto-updated
              based on your recharge history
            </div>{" "}
            <div className="text-[#6D6D6D] pl-6 text-[10px] font-normal leading-normal">
              {" "}
            </div>{" "}
          </div>
          <GerneralThreeDotsSvgs />
        </div>
      </div>
      <div className="flex flex-col pt-1">
        <span className="text-[#6D6D6D] text-xs lg:text-[20px] pt-1 font-bold leading-normal">
          Wallet Transactions
        </span>
        <span className="text-[#6D6D6D] text-xs lg:text-[20px] font-normal leading-normal">
          Updated every 24 hours
        </span>
      </div>
      <div className="flex my-3 w-full">
        <span
          onClick={() => handleActiveTab("Summary")}
          className="text-[#6D6D6D] text-xs lg:text-[18px] flex px-4 items-center border border-[#6D6D6D] rounded-l-full cursor-pointer py-2 lg:py-4 h-[30px] lg:h-[40px] text-center justify-end"
          style={{
            ...Typography,
            color: activeTab === "Summary" ? "#FFFFFF" : "#6D6D6D",
            backgroundColor:
              activeTab === "Summary" ? "#631363" : "transparent",
          }}>
          Summary
        </span>
        <span
          onClick={() => handleActiveTab("Detailed Transactions")}
          className="text-[#6D6D6D] text-xs lg:text-[18px] flex px-4 items-center border border-[#6D6D6D] rounded-r-full cursor-pointer py-2 lg:py-4 h-[30px] lg:h-[40px] text-center justify-end"
          style={{
            ...Typography,
            color:
              activeTab === "Detailed Transactions" ? "#FFFFFF" : "#6D6D6D",
            backgroundColor:
              activeTab === "Detailed Transactions" ? "#631363" : "transparent",
          }}>
          Detailed Transactions
        </span>
      </div>
      {activeTab === "Summary" ? (
        <GeneralSummary />
      ) : (
        <GeneralDetailedTransactions />
      )}
    </div>
  );
};

export default GeneralWalletTransactions;
