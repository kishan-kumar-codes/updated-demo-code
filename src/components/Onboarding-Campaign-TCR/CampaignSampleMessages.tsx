import React from "react";
import InputBarField from "../citations-builder/InputBarField";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import HeadBar from "../citations-builder/HeadBar";
import { Button } from "../ui/button";

const CampaignSampleMessages = () => {
  return (
    <div className="flex w-full gap-3 flex-col ">
      <HeadBar title="Sample Messages" />
      <div className="flex rounded-3xl -mt-10 z-10 min-h-[160px] justify-start px-5  w-full bg-[#E0E0E0] py-3">
        <div className="flex flex-col w-full gap-2 pt-8">
          <span className="text-[#6D6D6D] text-xs font-bold leading-normal pl-2">
            Sample Message 1
          </span>
          <textarea
            placeholder=""
            rows={4}
            className="w-full   p-2 focus:outline-none pl-3 rounded-2xl resize-none text-[#6D6D6D] text-sm font-normal leading-normal  bg-[#F4F4F4]"
          />
          <div className="w-full flex justify-end  py-3 items-center">
            <Button className="bg-[#631363] text-[#FFF] py-3 font-bold rounded-xl">
              +Add Sample Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignSampleMessages;
