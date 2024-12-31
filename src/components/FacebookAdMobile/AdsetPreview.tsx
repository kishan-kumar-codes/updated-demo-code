// import { useAppSelector } from "@/lib/hooks";
import { useAppSelector } from "@/hooks/hooks";
import React from "react";

interface AdsetPreviewProps {
  isDesktop?: boolean;
}

const AdsetPreview: React.FC<AdsetPreviewProps> = ({ isDesktop }) => {
  const adset = useAppSelector((state) => state.FbadSet.adset);
  const adsetData = adset && adset.length > 0 ? adset[0] : null;

  console.log(adsetData);

  if (!adsetData) {
    return null; // Return null if adsetData is not available
  }

  const textSize = isDesktop ? "text-lg" : "text-sm";
  const valueSize = isDesktop ? "text-sm" : "text-xs";

  return (
    <div className="flex flex-col w-full gap-1 justify-start p-4">
      <div className="flex-col flex">
        <span className={`${textSize} text-[#6D6D6D] font-bold leading-normal`}>
          AdName
        </span>
        <span
          className={`${valueSize} text-[#6D6D6D] font-normal leading-normal`}>
          {adsetData.adSetName || "N/A"}
        </span>
      </div>
      <div className="flex-col flex">
        <span className={`${textSize} text-[#6D6D6D] font-bold leading-normal`}>
          Optimization Goal
        </span>
        <span
          className={`${valueSize} text-[#6D6D6D] font-normal leading-normal`}>
          {adsetData.adSetoptimizationGoal || "N/A"}
        </span>
      </div>
      <div className="flex-col flex">
        <span className={`${textSize} text-[#6D6D6D] font-bold leading-normal`}>
          Page Name
        </span>
        <span
          className={`${valueSize} text-[#6D6D6D] font-normal leading-normal`}>
          {adsetData.adSetBillingEvents || "N/A"}
        </span>
      </div>
      <div className="flex-col flex">
        <span className={`${textSize} text-[#6D6D6D] font-bold leading-normal`}>
          Events
        </span>
        <span
          className={`${valueSize} text-[#6D6D6D] font-normal leading-normal`}>
          {adsetData.adSetBillingEvents || "N/A"}
        </span>
      </div>
      <div className="flex-col flex">
        <span className={`${textSize} text-[#6D6D6D] font-bold leading-normal`}>
          Bid Amount
        </span>
        <span
          className={`${valueSize} text-[#6D6D6D] font-normal leading-normal`}>
          {adsetData.adSetBidAmount || "N/A"}
        </span>
      </div>
      <div className="flex-col flex">
        <span className={`${textSize} text-[#6D6D6D] font-bold leading-normal`}>
          Daily Budget
        </span>
        <span
          className={`${valueSize} text-[#6D6D6D] font-normal leading-normal`}>
          {adsetData.adSetDailyBudget || "N/A"}
        </span>
      </div>
      <div className="flex-col flex">
        <span className={`${textSize} text-[#6D6D6D] font-bold leading-normal`}>
          Status
        </span>
        <span
          className={`${valueSize} text-[#6D6D6D] font-normal leading-normal`}>
          {adsetData.adSetStatus || "N/A"}
        </span>
      </div>
      <div className="flex-col flex">
        <span className={`${textSize} text-[#6D6D6D] font-bold leading-normal`}>
          Start Date
        </span>
        <span
          className={`${valueSize} text-[#6D6D6D] font-normal leading-normal`}>
          {adsetData.adSetStartDate || "N/A"}
        </span>
      </div>
      <div className="flex-col flex">
        <span className={`${textSize} text-[#6D6D6D] font-bold leading-normal`}>
          End Date
        </span>
        <span
          className={`${valueSize} text-[#6D6D6D] font-normal leading-normal`}>
          {adsetData.adSetEndDate || "N/A"}
        </span>
      </div>
      <div className="flex-col flex">
        <span className={`${textSize} text-[#6D6D6D] font-bold leading-normal`}>
          Destination Type
        </span>
        <span
          className={`${valueSize} text-[#6D6D6D] font-normal leading-normal`}>
          {adsetData.adSetCategory || "N/A"}
        </span>
      </div>
      <div className="flex-col flex">
        <span className={`${textSize} text-[#6D6D6D] font-bold leading-normal`}>
          CampaignID
        </span>
        <span
          className={`${valueSize} text-[#6D6D6D] font-normal leading-normal`}>
          {adsetData.id || "N/A"}
        </span>
      </div>
      <div className="flex-col flex">
        <span className={`${textSize} text-[#6D6D6D] font-bold leading-normal`}>
          Location
        </span>
        <span
          className={`${valueSize} text-[#6D6D6D] font-normal leading-normal`}>
          {adsetData.adSetCountry || "N/A"}
        </span>
      </div>
    </div>
  );
};

export default AdsetPreview;
