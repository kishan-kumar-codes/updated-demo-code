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
    <div className="flex flex-col w-full px-2 gap-2">
      {" "}
      <span className="text-[#6D6D6D] text-xs font-bold leading-normal">
        Wallet Balance
      </span>
      <div className="w-full flex px-4 flex-col gap-1 py-1.5 bg-[#FFF] rounded-2xl">
        <div className="w-full flex justify-between items-center my-2 px-2">
          <div className="flex gap-2">
            <span className="text-[#631363] text-[22px] font-bold leading-normal">
              {" "}
              $452.26
            </span>{" "}
            <span className=" mt-4">
              <GerneralDownSvgs />
            </span>
          </div>
          <Button className="bg-[#631363] text-[#FFF] h-9 text-xs py-3 font-bold rounded-3xl">
            + Add Balance
          </Button>
        </div>
      </div>
      <div className="w-full flex px-4 flex-col gap-1  p-3 py-2 bg-[#FFF] rounded-xl">
        <div className="w-full flex items-center  gap-2 ">
          <GeneralRechageCardSvgs />
          <span className="text-[#6D6D6D] text-[10px] w-[84px] font-normal leading-normal">
            {" "}
            Auto recharge with
          </span>
          <span className="text-[#6D6D6D] bg-[#F4F4F4] text-xs gap-2 w-20 font-normal leading-normal rounded-3xl flex py-1 px-3">
            {" "}
            $100{" "}
            <span className=" mt-1.5 pl-3">
              <GerneralDownSvgs />
            </span>{" "}
          </span>
          <span className="text-[#6D6D6D] text-[10px] font-normal leading-normal">
            when balance is
          </span>
        </div>
        <div className="w-full flex  items-center gap-2 ">
          <span className="text-[#6D6D6D] text-[10px]  font-normal leading-normal">
            is lower than
          </span>
          <span className="text-[#6D6D6D] bg-[#F4F4F4] text-xs gap-2  w-20  font-normal leading-normal rounded-3xl flex py-1 px-3">
            {" "}
            $10{" "}
            <span className=" mt-1.5 pl-3">
              <GerneralDownSvgs />
            </span>{" "}
          </span>
        </div>
        <div className="flex w-full gap-4">
          <div className="flex flex-col">
            <div className="text-[#6D6D6D] text-[10px] flex gap-2 font-normal leading-normal">
              {" "}
              <GerneralGreenInfoSvgs /> Recharge amount will be auto-updated
              based on your
            </div>{" "}
            <div className="text-[#6D6D6D] pl-6 text-[10px] font-normal leading-normal">
              {" "}
              recharge history
            </div>{" "}
          </div>
          <GerneralThreeDotsSvgs />
        </div>
      </div>
      <div className="flex flex-col pt-1">
        <span className="text-[#6D6D6D] text-xs pt-1 font-bold leading-normal">
          Wallet Transactions
        </span>
        <span className="text-[#6D6D6D] text-xs font-normal leading-normal">
          Updated every 24 hours
        </span>
      </div>
      <div className="flex my-3 w-full">
        <span
          onClick={() => handleActiveTab("Summary")}
          className="text-[#6D6D6D] flex px-4 border border-[#6D6D6D] rounded-l-full cursor-pointer py-2 h-[30px] text-center items-end justify-end"
          style={{
            ...Typography,
            fontSize: "12px",
            color: activeTab === "Summary" ? "#FFFFFF" : "#6D6D6D",
            backgroundColor:
              activeTab === "Summary" ? "#631363" : "transparent",
          }}>
          Summary
        </span>
        <span
          onClick={() => handleActiveTab("Detailed Transactions")}
          className="text-[#6D6D6D] px-3 border border-[#6D6D6D] rounded-r-full cursor-pointer py-2 h-[30px] text-center items-end justify-end"
          style={{
            ...Typography,
            fontSize: "12px",
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
