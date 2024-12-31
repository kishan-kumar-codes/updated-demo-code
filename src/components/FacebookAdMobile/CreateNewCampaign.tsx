"use client";
import React, { useEffect, useState } from "react";
import ChatDropDown from "../Webchat-Settings/ChatDropDown";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import { Button } from "../ui/button";
import InputBarField from "../citations-builder/InputBarField";
// import { useAppSelector } from "@/lib/hooks";
import { useAppSelector } from "@/hooks/hooks";
import { useCreateNewCampaignHooks } from "@/lib/customHooks/FeedbackAds/CreateNewCampaignHooks";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export interface FaceBookAdProps {
  handleNextStep: () => void;
  handlePrevStep?: () => void;
}
const CreateNewCampaign: React.FC<FaceBookAdProps> = ({ handleNextStep }) => {
  const {
    statusOptions,
    buildingTypeOptions,
    objectiveOptions,
    setSelectedObjective,
    setSelectedStatus,
    setSelectedCategory,
    setSelectedBuyingType,
    campaignName,
    setCampaignName,
    submitted,
    handleCreateCampaign,
  } = useCreateNewCampaignHooks();

  const { campaign } = useAppSelector((state) => state.Fbcampaign);
  console.log("campaign", campaign);

  return (
    <div className="flex flex-col w-full">
      {/* <HeaderBarMobile title="Create New Campaign" /> */}

      <div className="flex flex-col rounded-3xl z-10 min-h-[160px] justify-start  w-full bg-[#E0E0E0]">
        <div
          // onClick={() => setToggle((prev) => !prev)}
          className="w-full rounded-xl text-white text-[16px] cursor-pointer lg:text-[26px] font-bold pl-5 py-2.5 lg:py-4 bg-[#631363] lg:rounded-2xl">
          Create New Campaign
        </div>
        <div className="flex flex-col w-full gap-2 px-2 pt-4">
          <div className="flex items-center justify-end my-2 px-2 lg:px-4 gap-2">
            <Button className="bg-[#631363] text-[#FFF] text-xs lg:text-[22px] lg:h-14 py-3 lg:py-6 font-bold rounded-lg">
              Campaigns
            </Button>
            <Button className="border border-[#631363] text-[#631363] text-xs lg:text-[22px] lg:py-6  lg:h-14   bg-[#E0E0E0] py-3 font-bold rounded-lg">
              Edit
            </Button>
            <Button className="border border-[#631363] text-[#631363] text-xs lg:text-[22px]  lg:h-14  lg:py-6  bg-[#E0E0E0] py-3 font-bold rounded-lg">
              Preview
            </Button>
          </div>
          <div className="flex flex-col w-full gap-2 pb-5 pt-0 lg:pt-1 px-2">
            <span className="text-[#6D6D6D] text-xs  lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
              Campaign Name
            </span>
            <Input className="rounded-xl bg-[#F4F4F4] h-8 lg:h-12" />
            <span className="text-[#6D6D6D] text-xs  lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
              Objective
            </span>
            <div className="flex gap-1 flex-col">
              <Select>
                <SelectTrigger className="w-full font-bold h-8 lg:h-[48px] lg:text-[22px]  mt-0 lg:mt-1 text-[#6D6D6D] text-[10px] bg-[#F4F4F4] rounded-[10px] lg:rounded-2xl">
                  <SelectValue
                    className="bg-[#F4F4F4]  font-bold"
                    placeholder="Select Objective"
                  />
                </SelectTrigger>
                <SelectContent className="bg-[#F4F4F4]">
                  <SelectGroup>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="1">
                      Awareness
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="2">
                      Engagment
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="3">
                      Leads
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="4">
                      Sale
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="5">
                      Traffic
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="6">
                      App Promotion
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <span className="text-[#6D6D6D] text-xs lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
              Status
            </span>
            <div className="flex gap-1 flex-col">
              <Select>
                <SelectTrigger className="w-full font-bold h-8 lg:h-[48px] lg:text-[22px]  mt-0 lg:mt-1 text-[#6D6D6D] text-[10px] bg-[#F4F4F4] rounded-[10px] lg:rounded-2xl">
                  <SelectValue
                    className="bg-[#F4F4F4]  font-bold"
                    placeholder="Select Status"
                  />
                </SelectTrigger>
                <SelectContent className="bg-[#F4F4F4]">
                  <SelectGroup>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="1">
                      Active
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="2">
                      Archived
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="3">
                      Deleted
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="4">
                      Paused
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <span className="text-[#6D6D6D] text-xs lg:text-[22px] px-2 pt-0 lg:pt-4  font-bold leading-normal">
              Special Ad Category
            </span>
            <span className="text-[#6D6D6D] text-[11px] lg:text-[22px] px-2 lg:font-bold font-normal leading-normal">
              Select the categories that best describe what this campaign will
              advertise.
            </span>
            <div className="flex gap-1 flex-col">
              <Select>
                <SelectTrigger className="w-full font-bold h-8 lg:h-[48px] lg:text-[22px]  mt-0 lg:mt-1 text-[#6D6D6D] text-[10px] bg-[#F4F4F4] rounded-[10px] lg:rounded-2xl">
                  <SelectValue
                    className="bg-[#F4F4F4]  font-bold"
                    placeholder="Select Category"
                  />
                </SelectTrigger>
                <SelectContent className="bg-[#F4F4F4]">
                  <SelectGroup>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="1">
                      None
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="2">
                      Employment
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="3">
                      Housing
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="4">
                      Credit
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="5">
                      Issues Elections Politics
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="6">
                      Online Gambling and Gaming
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <span className="text-[#6D6D6D] text-xs lg:text-[22px] px-2 pt-0 lg:pt-4 font-bold leading-normal">
              Buying Type
            </span>
            <div className="flex gap-1 flex-col">
              <Select>
                <SelectTrigger className="w-full font-bold h-8 lg:h-[48px] lg:text-[22px]  mt-0 lg:mt-1 text-[#6D6D6D] text-[10px] bg-[#F4F4F4] rounded-[10px] lg:rounded-2xl">
                  <SelectValue
                    className="bg-[#F4F4F4]  font-bold"
                    placeholder="Select Buying Type"
                  />
                </SelectTrigger>
                <SelectContent className="bg-[#F4F4F4]">
                  <SelectGroup>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="1">
                      Auction
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="2">
                      Reservation
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-end my-2 lg:my-5 gap-2">
              <Button
                className="bg-[#631363] text-[#FFF] lg:text-[22px]  py-3 lg:h-14 lg:py-6 font-bold rounded-lg"
                onClick={handleCreateCampaign}>
                Create Campaign
              </Button>
              <Button
                className="bg-[#40F440] text-[#27272D] py-3 lg:text-[22px] lg:h-14 lg:py-6   font-bold rounded-lg"
                onClick={handleNextStep}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewCampaign;
