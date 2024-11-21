import React from "react";
import { ReviewWidgetInfoTooltip } from "../Reputation-mobile/TooltipReputation";
import { Button } from "../ui/button";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import ReviewWidgetFileUpload from "../Review-Widget-mobile/ReviewWidgetFIleUpload";
import InputBarField from "../citations-builder/InputBarField";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
const GeneralSubInformation = () => {
  return (
    <div className="flex w-full gap-3 flex-col ">
      {/* <HeaderBarMobile title="General Information" /> */}
      <div className="flex rounded-3xl flex-col z-10 min-h-[160px] justify-start w-full bg-[#E0E0E0]">
        <div className="w-full rounded-xl text-white text-[16px] font-bold pl-5 py-2.5 bg-[#631363]">
          General Information
        </div>
        <div className="flex flex-col w-full gap-2 px-5 pt-10">
          <ReviewWidgetFileUpload isInfo={true} />
          <div className="flex gap-1 pt-1 flex-col">
            <Label className="text-[#6D6D6D] text-xs pl-1  font-bold">
              Friendly Business Name{" "}
            </Label>
            <Input className="rounded-2xl h-10 bg-white" />
          </div>
          <div className="flex gap-1 pt-1  flex-col">
            <Label className="text-[#6D6D6D] text-xs pl-1 font-bold">
              Legal Business Name
            </Label>
            <Input className="rounded-2xl h-10 bg-white" />
            <span className="text-[#6D6D6D] text-[10px] font-normal leading-normal pl-4">
              Enter the exact legal business name, as registered with the EIN
            </span>
          </div>
          <div className="flex gap-1 pt-2 ">
            <div className="flex gap-1 flex-col">
              <Label className="text-[#6D6D6D] text-xs pl-1  font-bold">
                Business Email
              </Label>
              <Input className="rounded-2xl h-10 bg-white" />
            </div>
            <div className="flex gap-1  flex-col">
              <Label className="text-[#6D6D6D] text-xs pl-1  font-bold">
                Business Phone
              </Label>
              <Input className="rounded-2xl h-10 bg-white" />
            </div>
          </div>
          <div className="flex gap-1 pt-1  flex-col">
            <Label className="text-[#6D6D6D] pl-1  text-xs font-bold">
              Branded Domain
            </Label>
            <Input className="rounded-2xl h-10 bg-white" />
          </div>
          <div className="flex gap-1 pt-1 flex-col">
            <Label className="text-[#6D6D6D] pl-1  text-xs font-bold">
              Business Website
            </Label>
            <Input className="rounded-2xl h-10 bg-white" />
          </div>
          <div className="flex gap-1 pt-1 flex-col">
            <Label className="text-[#6D6D6D] pl-1  text-xs font-bold">
              Business Industry
            </Label>
            <Input className="rounded-2xl h-10 bg-white" />
          </div>
          <span className="text-[#6D6D6D] text-sm pt-2 font-bold leading-normal">
            Business Regions Of Operations
          </span>
          <div>
            <div className="flex items-center space-x-2">
              <Checkbox className="rounded-sm border-black" id="terms" />
              <label
                htmlFor="terms"
                className="text-sm text-[#6D6D6D] font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                USA
              </label>
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox className="rounded-sm border-black" id="canada" />
              <label
                htmlFor="canada"
                className="text-sm text-[#6D6D6D] font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Canada
              </label>
            </div>
          </div>
          <div className="w-full flex gap-5 my-4">
            <div className="flex gap-2 items-center g ">
              <span className="text-[#6D6D6D] text-xs font-bold leading-normal">
                API Key
              </span>
              <ReviewWidgetInfoTooltip />
            </div>
            <Button className="bg-[#631363] font-bold text-[#FFFFFF] rounded-2xl">
              Generate API
            </Button>
          </div>
          <div className="w-full flex pb-4 justify-end">
            <Button className="bg-[#40F440] text-[#3D3D3D] py-3 font-bold rounded-xl">
              Update Information
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSubInformation;
