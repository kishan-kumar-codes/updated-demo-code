"use client";
import React from "react";
import ReviewSiteDropDown from "./ReviewSiteDropDown";
import { GoogleReviewSvg } from "@/svgs/review-dashboard/svgs";
import { FBShareSvgs } from "@/svgs/review-dashboard-mobile/svgs";
import { R2IconGoogleMobile } from "@/icons/reviewRequest-desktop/icons";
import InputBarField from "@/components/citations-builder/InputBarField";
import { CircleX } from "lucide-react";
import { X } from "lucide-react";

interface SelectReviewSitesProps {
  setSelectReview: React.Dispatch<React.SetStateAction<boolean>>;
  setEmailNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseModal: () => void;
}
const SelectReviewSites = ({
  setSelectReview,
  onCloseModal,
  setEmailNotifications,
}: SelectReviewSitesProps) => {
  const handleSelectReview = () => {
    setSelectReview(false);
    setEmailNotifications(true);
  };
  const members = [
    { value: "option1", label: "Google", icon: <R2IconGoogleMobile /> },
    { value: "option2", label: "Facebook", icon: <FBShareSvgs /> },
  ];

  // Callback function for handling member selection
  const handleSelect = (option: any) => {
    console.log("Selected option:", option);
    // You can perform additional actions like setting the state or making API calls here
  };

  return (
    <div className="flex flex-col w-full justify-end px-0 py-0 md:px-8">
      <div className="flex justify-between items-start w-full">
        <div className="text-[#6D6D6D] md:text-2xl pt-2 lg:text-[26px] md:font-normal font-[Arial] text-[20px] p-1 px-2 text-xl font-bold leading-normal">
          Select Review Sites
        </div>
        <button onClick={onCloseModal} className="text-3xl h-5 w-5">
          <X size={18} color="#6D6D6D" />
        </button>
      </div>
      <div className="w-full gap-3 p-2 justify-center flex flex-col h-1/2">
        <div className="text-[#6D6D6D] text-[10px] md:text-lg lg:text-[20px] md:font-normal font-[Arial]  font-bold leading-normal md:leading-4 lg:leading-6">
          Select which review sites you want to direct people to leave reviews
          on. You can select a maximum of 3 sites.
        </div>
        <div className="text-[#6D6D6D] text-[10px] md:text-xl lg:text-[22px] md:font-normal font-bold leading-normal pt-2 md:pt-4">
          At least 1 Review Site is required.
        </div>

        <div className="w-full flex flex-col shrink-0 rounded-2xl gap-3 p-2 px-2 md:px-6 bg-[#FFFFFF]">
          <div className="w-full  items-center flex gap-4">
            <div className="text-[#6D6D6D] flex-shrink-0 text-xs md:text-lg lg:text-[20px] md:font-normal font-bold leading-normal">
              Review Site:
            </div>
            <ReviewSiteDropDown options={members} onSelect={handleSelect} />
          </div>
          <div className="w-full items-center flex gap-4">
            <div className="text-[#6D6D6D] text-xs flex-shrink-0 md:text-lg lg:text-[20px] md:font-normal font-bold leading-normal">
              Profile URL:
            </div>
            <input
              className="h-12 w-[70%] md:w-full pl-4 rounded-2xl focus:outline-none placeholder:italic bg-[#F4F4F4]"
              placeholder="www.google.com/search..."
            />
          </div>
        </div>
        <div className="w-full h-[130px] flex flex-col shrink-0 rounded-2xl gap-3 p-2  px-2 md:px-6 bg-[#FFFFFF]">
          <div className="w-full  items-center flex gap-4">
            <div className="text-[#6D6D6D] text-xs flex-shrink-0 md:text-lg lg:text-[20px] md:font-normal font-bold leading-normal">
              Review Site:
            </div>
            <ReviewSiteDropDown options={members} onSelect={handleSelect} />
          </div>
          <div className="w-full items-center flex gap-4">
            <div className="text-[#6D6D6D] text-xs flex-shrink-0 md:text-lg lg:text-[20px] md:font-normal font-bold leading-normal">
              Profile URL:
            </div>
            <input
              className="h-12 w-[70%] md:w-full pl-4 rounded-2xl focus:outline-none placeholder:italic bg-[#F4F4F4]"
              placeholder="http://www.facebook.com"
            />
          </div>
        </div>
        <div className="w-full h-[130px] flex flex-col shrink-0 rounded-2xl gap-3 p-2 px-2 md:px-6 bg-[#FFFFFF]">
          <div className="w-full  items-center flex gap-4">
            <div className="text-[#6D6D6D] text-xs flex-shrink-0 md:text-lg lg:text-[20px] md:font-normal font-bold leading-normal">
              Review Site:
            </div>
            <ReviewSiteDropDown options={members} onSelect={handleSelect} />
          </div>
          <div className="w-full items-center  flex gap-4">
            <div className="text-[#6D6D6D] text-xs flex-shrink-0  md:text-lg lg:text-[20px] md:font-normal font-bold leading-normal">
              Profile URL:
            </div>
            <input
              className="h-12 w-[70%] md:w-full pl-4 rounded-2xl focus:outline-none placeholder:italic bg-[#F4F4F4]"
              placeholder="http://www.facebook.com"
            />
          </div>
        </div>
        <div className="flex justify-end w-full items-center gap-3 px-3">
          <button
            className=" text-xs md:text-[22px] lg:text-[24px] md:font-normal font-bold leading-normal my-1  cursor-pointer bg-[#40F440]    rounded-lg px-3 py-2"
            onClick={handleSelectReview}>
            Continue
          </button>
          <button className=" text-xs md:text-[22px] lg:text-[24px] md:font-normal font-bold leading-normal my-1 text-white  cursor-pointer bg-[#BA0416]    rounded-lg px-3 py-2">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectReviewSites;
