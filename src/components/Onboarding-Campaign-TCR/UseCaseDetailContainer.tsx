import {  OnboardingQuestionWithoutSvgs } from "@/svgs/Onboarding-Campaign-TCR/svgs";
import React from "react";
import UseCaseTable from "./UseCaseTable";

interface UseCaseDetailContainerProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSpecialAndStandardCampaignOpen:boolean
}
const UseCaseDetailContainer = ({ setOpen , isSpecialAndStandardCampaignOpen }: UseCaseDetailContainerProps ) => {
  return (
    <div
      className={`flex flex-col   absolute -top-3.5 left-0 mt-3 w-full items-center justify-center `}
    >
      <div
        className="flex w-full bg-[#631363] z-50 cursor-pointer pl-4 rounded-full py-2 -mt-[64px]"
        onClick={() => setOpen(!open)}
      >
        <OnboardingQuestionWithoutSvgs />
      </div>
      <div className="w-[95%] justify-end flex flex-col min-h-[250px] ml-4 border border-[#631363] z-40 rounded-t-2xl -mt-7 pt-10 p-3 bg-[#E0E0E0] ">
        <h3 className="text-[#631363] font-bold text-sm mb-4">
          What are Use-Cases?
        </h3>
        <p className="text-xs text-[#6D6D6D] mb-3">
          The Use-Case describes the specific purpose of the Campaign.
        </p>
        <h3 className="text-[#631363] font-bold text-sm mb-3">
          What are Standard Campaign Types?
        </h3>
        <p className="text-xs text-[#6D6D6D] mb-3">
          Standard Use-Cases are generally available to TCR-registered Brands,
          meaning that approval for a Campaign will most probably not require
          pre- or post-registration approval from the MNOs.
        </p>
        <h3 className="text-[#631363] font-bold text-sm mb-3">
          What are Special Campaign Types?
        </h3>
        <p className="text-xs text-[#6D6D6D] mb-3">
          Special Use-Cases are sensitive or critical in nature and may require
          pre- or post-registration approval by the MNOs.
        </p>
        <h3 className="text-[#631363] font-bold text-sm mb-3">
          What is the TCR fee?
        </h3>
        <p className="text-xs text-[#6D6D6D] mb-3">
          The quarterly fee for registering a Campaign that is payable to The
          Campaign Registry.
        </p>
        <p className="text-xs text-[#6D6D6D] ">
          Some “Use Cases”, as requested by carriers, might be exclusively
          available to either vetted brands or specific entity types, or require
        </p>
        {isSpecialAndStandardCampaignOpen && <UseCaseTable />}
        

      </div>
      <div className="flex w-full items-center text-[10px] ml-4 z-40 justify-center text-[#E0E0E0] rounded-b-3xl bg-[#631363] h-[20px]">
      Having trouble? Let us help you csp.support@hubspark.com
          </div>
    </div>
  );
};

export default UseCaseDetailContainer;
