import React from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import { Button } from "../ui/button";

const GeneralMissedCallTextBack = () => {
  return (
    <div className="flex w-full gap-3 flex-col ">
      {/* <HeaderBarMobile title="Missed Call Text Back" /> */}
      <div className="flex rounded-3xl flex-col z-10 min-h-[160px] justify-start w-full bg-[#E0E0E0]">
        <div className="w-full rounded-xl text-white text-[16px] font-bold pl-5 py-2.5 bg-[#631363]">
          Missed Call Text Back
        </div>
        <div className="flex flex-col w-full gap-2 pt-4 px-5">
          <textarea
            className="w-full h-[100px] bg-[#F4F4F4] text-sm rounded-2xl p-2 resize-none focus:outline-none"
            placeholder="Hi, this is (Name) from (Business Name)! Sorry that I missed your call can you shoot me a quick text and let me know how I can be of help?"
          />
          <div className="flex w-full  justify-end pb-2 gap-5">
            <Button className="bg-[#40F440] text-[##3D3D3D] py-3 font-bold rounded-xl">
              Edit
            </Button>
            <Button className="bg-[#40F440] text-[##3D3D3D] py-3 font-bold rounded-xl">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralMissedCallTextBack;
