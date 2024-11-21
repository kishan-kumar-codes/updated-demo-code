import React from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import HeadBar from "../citations-builder/HeadBar";
import { ReviewWidgetInfoTooltip } from "../Reputation-mobile/TooltipReputation";
const OtherResponsibleParties = () => {
  return (
    <div className="flex w-full gap-3 flex-col ">
      <HeadBar title="Other Responsible Parties" />
      <div className="flex rounded-3xl -mt-10 z-10 min-h-[160px] justify-start px-5  w-full bg-[#E0E0E0] py-3">
        <div className="flex flex-col w-full gap-2 pt-10">
          <span className="text-[#6D6D6D] text-xs flex items-center gap-2 font-bold leading-normal pl-2">
            Select your Connectivity Partner* <ReviewWidgetInfoTooltip />
          </span>
          <input
            placeholder=""
            className="w-full p-2 focus:outline-none pl-3 rounded-2xl resize-none text-[#6D6D6D] text-sm font-normal leading-normal  bg-[#F4F4F4]"
          />

          <span className="text-[#6D6D6D] text-xs flex items-center gap-2 font-bold leading-normal pl-2">
            Select if reseller involved <ReviewWidgetInfoTooltip />
          </span>
          <input
            placeholder=""
            className="w-full p-2 focus:outline-none pl-3 rounded-2xl resize-none text-[#6D6D6D] text-sm font-normal leading-normal  bg-[#F4F4F4]"
          />
        </div>
      </div>
    </div>
  );
};

export default OtherResponsibleParties;
