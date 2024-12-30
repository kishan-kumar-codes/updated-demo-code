import React from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import { Button } from "../ui/button";

const GeneralMissedCallTextBack = () => {
  return (
    <div className="flex w-full gap-3 flex-col lg:mb-10 ">
      {/* <HeaderBarMobile title="Missed Call Text Back" /> */}
      <div className="flex rounded-xl lg:rounded-3xl flex-col z-10 min-h-[160px] justify-start lg:pb-10 w-full bg-[#E0E0E0]">
        <div className="w-full rounded-xl text-white text-[16px] lg:text-[26px] font-bold pl-5 py-2.5 lg:py-4 bg-[#631363] lg:rounded-2xl">
          Missed Call Text Back
        </div>
        <div className="flex flex-col w-full gap-2 pt-4 px-5 lg:px-16 lg:pt-11">
          <textarea
            className=" h-[61px] w-full lg:h-[209px] lg:text-[26px] lg:px-8 lg:py-6 bg-[#F4F4F4] text-[12px]  rounded-xl lg:rounded-2xl p-2 resize-none focus:outline-none leading-tight"
            placeholder="Hi, this is (Name) from (Business Name)! Sorry that I missed your call can you shoot me a quick text and let me know how I can be of help?"
          />
          <div className="flex w-full  justify-end pb-2 pt-0 lg:pt-6 gap-5">
            <Button className="bg-[#40F440] text-[##3D3D3D] lg:text-[22px] lg:h-14 py-3 font-bold rounded-xl lg:rounded-2xl w-[54px] h-[32px ] lg:w-[98px] lg:h-[58px] ">
              Edit
            </Button>
            <Button className="bg-[#40F440] text-[##3D3D3D] py-3 lg:h-14  lg:text-[22px] font-bold rounded-xl lg:rounded-2xl w-[54px] h-[32px ] lg:w-[98px] lg:h-[58px]">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralMissedCallTextBack;
