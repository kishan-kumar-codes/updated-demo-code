import React from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import AdSetsTable from "./AdSetsTable";
import { Button } from "../ui/button";
import { FaceBookAdProps } from "./CreateNewCampaign";

const AdSets = ({ handleNextStep, handlePrevStep }: FaceBookAdProps) => {
  return (
    <div className="flex flex-col w-full">
      {/* <HeaderBarMobile title="Ad Sets" /> */}
      <div className="flex flex-col rounded-3xl z-10 h-[500px] justify-start w-full bg-[#E0E0E0]">
        <div
          // onClick={() => setToggle((prev) => !prev)}
          className="w-full rounded-xl text-white text-[16px] cursor-pointer lg:text-[26px] font-bold pl-5 py-2.5 lg:py-4 bg-[#631363] lg:rounded-2xl">
          Ad Creative
        </div>
        <div className="flex flex-col px-4 lg:px-8 w-full gap-2 pt-8">
          <AdSetsTable />
          <div className="flex items-center justify-between my-2 gap-2">
            <Button
              className="bg-[#631363] text-[#FFF] text-xs lg:text-[22px] lg:h-14 py-3 font-bold rounded-lg"
              onClick={handlePrevStep}>
              Go Back
            </Button>
            <Button
              className="bg-[#40F440] text-[#27272D] text-xs lg:text-[22px] lg:h-14 py-3 font-bold rounded-lg"
              onClick={handleNextStep}>
              Ad Sets
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdSets;
