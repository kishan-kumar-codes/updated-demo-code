"use client";

import React from "react";
import { ReviewWidgetInfoTooltip } from "../Reputation-mobile/TooltipReputation";
import { Button } from "../ui/button";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import ReviewWidgetFileUpload from "../Review-Widget-mobile/ReviewWidgetFIleUpload";
import InputBarField from "../citations-builder/InputBarField";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
const GeneralSubInformation = () => {
  const [isToggle, setToggle] = useState(false);
  return (
    <div className="flex w-full gap-3 flex-col ">
      {/* <HeaderBarMobile title="General Information" /> */}
      <div className="flex rounded-xl lg:rounded-3xl flex-col z-10 min-h-fit justify-start w-full bg-[#E0E0E0]">
        <div
          onClick={() => setToggle((prev) => !prev)}
          className="w-full rounded-xl text-white cursor-pointer text-[16px] lg:text-[26px] font-bold pl-5 py-2.5 lg:py-4 bg-[#631363] lg:rounded-2xl">
          General Information
        </div>
        {isToggle && (
          <div className="flex flex-col w-full gap-2 px-5 pt-10 lg:px-16">
            <ReviewWidgetFileUpload isInfo={true} />
            <div className="flex gap-1 pt-1 lg:pt-4 flex-col">
              <Label className="text-[#6D6D6D] text-[10px] md:text-base lg:text-[22px] pl-1  font-bold">
                Friendly Business Name{" "}
              </Label>
              <Input className="rounded-[10px] lg:rounded-xl h-[26px] lg:h-[48px] bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px]" />
            </div>
            <div className="flex gap-1 pt-1 lg:pt-4 flex-col">
              <Label className="text-[#000000] lg:text-[#6D6D6D] text-[10px] md:text-base lg:text-[22px] pl-1 font-bold">
                Legal Business Name
              </Label>
              <Input className="rounded-[10px] lg:rounded-xl h-[26px] lg:h-[48px] bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px]" />
              <span className="text-[#6D6D6D] text-[10px] lg:text-[18px] font-normal leading-normal pl-4 lg:pl-0">
                Enter the exact legal business name, as registered with the EIN
              </span>
            </div>
            <div className="flex gap-1 pt-2 lg:pt-4 w-full ">
              <div className="flex gap-1 w-full flex-col">
                <Label className="text-[#6D6D6D] md:text-base lg:text-[22px] text-[10px] pl-1  font-bold">
                  Business Email
                </Label>
                <Input className="rounded-[10px] lg:rounded-xl h-[26px] lg:h-[48px] bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px]" />
              </div>
              <div className="flex gap-1 w-full  flex-col">
                <Label className="text-[#6D6D6D] text-[10px] md:text-base lg:text-[22px] pl-1  font-bold">
                  Business Phone
                </Label>
                <Input className="rounded-[10px] lg:rounded-xl h-[26px] lg:h-[48px] bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px]" />
              </div>
            </div>
            <div className="flex gap-1 pt-1 lg:pt-4 flex-col">
              <Label className="text-[#6D6D6D] md:text-base lg:text-[22px] pl-1  text-[10px] font-bold">
                Branded Domain
              </Label>
              <Input className="rounded-[10px] lg:rounded-xl h-[26px] lg:h-[48px] bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px]" />
            </div>
            <div className="flex gap-1 pt-1 lg:pt-4 flex-col">
              <Label className="text-[#6D6D6D] md:text-base lg:text-[22px] pl-1  text-[10px] font-bold">
                Business Website
              </Label>
              <Input className="rounded-[10px] lg:rounded-xl h-[26px] lg:h-[48px] bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px]" />
            </div>
            <div className="flex gap-1 pt-1 lg:pt-4 flex-col">
              <Label className="text-[#6D6D6D] md:text-base lg:text-[22px] pl-1  text-[10px] font-bold">
                Business Industry
              </Label>
              <Input className="rounded-[10px] lg:rounded-xl h-[26px] lg:h-[48px] bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px]" />
            </div>
            <span className="text-[#6D6D6D] md:text-base lg:text-[18px] text-[12px] pt-2 font-bold lg:font-normal leading-normal">
              Business Regions Of Operations
            </span>
            <div className="pl-3 lg:pt-12">
              <div className="flex items-center space-x-2">
                <Checkbox
                  className="rounded-sm border-black h-3 w-3 lg:h-[26px] lg:w-[26px]"
                  id="terms"
                />
                <label
                  htmlFor="terms"
                  className="text-[12px] text-[#6D6D6D]  lg:font-normal leading-none peer-disabled:cursor-not-allowed md:text-base lg:text-[26px] peer-disabled:opacity-70">
                  USA
                </label>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox
                  className="rounded-sm border-black h-3 w-3 lg:h-[26px] lg:w-[26px]"
                  id="canada"
                />
                <label
                  htmlFor="canada"
                  className="text-[12px] text-[#6D6D6D] md:text-base lg:font-normal lg:text-[26px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Canada
                </label>
              </div>
            </div>
            <div className="w-full flex gap-5 my-0 lg:my-4">
              <div className="flex gap-2 items-center g ">
                <span className="text-[#6D6D6D] text-xs md:text-base lg:text-[26px]  font-bold leading-normal">
                  API Key
                </span>
                <span className="h-[17px] w-[17px] lg:h-[24px] lg:w-[24px]">
                  <ReviewWidgetInfoTooltip />
                </span>
              </div>
              <Button className="bg-[#631363] text-[12px] h-[31px] w-[98px] md:h-[50px] md:w-[181px] lg:h-14 font-bold md:text-base lg:text-[22px] text-[#F4F4F4] rounded-xl md:rounded-2xl">
                Generate Key
              </Button>
            </div>
            <div className="w-full flex pb-4 lg:pb-14 justify-end">
              <Button className="bg-[#40F440] text-[14px] h-[41px] w-[147px] md:h-[63px] md:w-[250px] text-[#3D3D3D] md:text-base lg:text-[22px] py-3 lg:h-14 font-bold rounded-xl md:rounded-2xl">
                Update Information
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralSubInformation;
