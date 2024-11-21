"use client";
import React, { FC } from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import HeadBar from "../citations-builder/HeadBar";
import { RadioCampaignTypeCardList } from "./RadioCampaignTypeCard";


type StandardCampaignProps = {
  standardCampaignType: boolean;
  setStandardCampaignType: (value: boolean) => void;
};
const StandardCampaign:FC<StandardCampaignProps> = ({standardCampaignType, setStandardCampaignType}) => {

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <HeadBar
        title="Standard Campaign Type "
        handleClick={() => setStandardCampaignType(!standardCampaignType)}
      />
      {standardCampaignType && (
        <div className="flex rounded-3xl -mt-10 z-10 min-h-[160px] justify-start   w-full bg-[#F4F4F4] py-3">
          <div className="flex flex-col w-full gap-2 pt-4">
            <div className="flex w-full h-14 bg-[#E0E0E0] pt-2 rounded-b-3xl justify-between px-4 items-center">
              <span className="text-[#6D6D6D] [font-family:Arial] text-xs font-bold leading-[normal]">
                Use Case
              </span>{" "}
              <span className="text-[#6D6D6D] [font-family:Arial] text-xs font-bold leading-[normal]">
                TCR Monthly fee
              </span>
            </div>
            <span className="text-[#631363] [font-family:Arial] text-center text-[10px] font-normal leading-[normal]">
              *(we do not mark this up, this is the actual cost)
            </span>
            <RadioCampaignTypeCardList />
          </div>
        </div>
      )}
    </div>
  );
};

export default StandardCampaign;
