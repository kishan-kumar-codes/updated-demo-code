"use client";
import React from "react";
import CurrentStatusCard from "./CurrentStatusCard";
import {
  OnboardingClappingSvgs,
  OnboardingNextStepSvgs,
} from "@/svgs/Onboarding-Campaign-TCR/svgs";
import { Button } from "../ui/button";
import { current } from "@reduxjs/toolkit";

export const statusArray = [
  {
    title: "AT&T",
    title1: "Yes",
    title2: "No",
    title3: "Campaign",
    title4: "240",
    title5: "E",
    title6: "Approved",
  },
  {
    title: "AT&T",
    title1: "Yes",
    title2: "No",
    title3: "Campaign",
    title4: "240",
    title5: "E",
    title6: "Approved",
  },
  {
    title: "AT&T",
    title1: "Yes",
    title2: "No",
    title3: "Campaign",
    title4: "240",
    title5: "E",
    title6: "Approved",
  },
  {
    title: "AT&T",
    title1: "Yes",
    title2: "No",
    title3: "Campaign",
    title4: "240",
    title5: "E",
    title6: "Approved",
  },
];
const CurrentStatus = () => {
  const [showStaus, setShowStaus] = React.useState(false);
  const currentTtit = ["QUALIFY", "MNO REVIEW",  "TPM SCOPE", "TPM", "MESSAGE CLASS", "STATUS"];
  return (
    <div className="flex w-full gap-1 flex-col ">
      {showStaus && (
        <div className="w-full flex  flex-col text-center justify-center items-center gap-2 p-2  my-3 bg-[#E0E0E0] rounded-lg">
          <OnboardingClappingSvgs />
          <span className="text-[#6D6D6D] text-lg font-bold leading-normal">
            Congratulations!
          </span>
          <span className="text-[#6D6D6D] text-sm font-normal leading-normal">
            You have successfully registered the campaign.
          </span>
          <span className="text-[#631363] text-sm font-bold leading-normal mt-6">
            Campaign ID:CVN1LXI
          </span>
        </div>
      )}
      <span className="text-[#6D6D6D] text-lg text-center pb-3 mt-1 mb-5 text-[14px] font-[400] leading-normal">
        Current Status
      </span>
      {statusArray.map((item, index) => (
        <CurrentStatusCard
          key={index}
          title={item.title}
          title1={item.title1}
          title2={item.title2}
          title3={item.title3}
          title4={item.title4}
          title5={item.title5}
          title6={item.title6}
          currentTItle={currentTtit}
        />
      ))}

      <div className="w-full flex  gap-2 p-2  my-3 bg-[#E0E0E0] rounded-lg">
        <div className=" mt-1">
          <OnboardingNextStepSvgs />
        </div>
        <div className="flex flex-col w-full ">
          <span className="text-[#6D6D6D] text-lg font-bold leading-normal">
            Next Steps
          </span>
          <span className="text-[#6D6D6D] py-2 w-[90%]  flex justify-center [font-family:Arial] text-xs font-normal leading-[normal]">
            If your campaign has been approved (status “Approved”), its unique
            Campaign ID has been sent to the OSR live traffic, the Campaign ID
            needs to be associated to an NNID and 10DLC number(s). If you don’t
            have an NNID please reach out to your DCA and provide them with your
            Campaign ID. If your campaign is waiting for MNO review (status
            “REVIEW”), we will inform you via email when the review process is
            complete. If approved, please follow the steps above.
          </span>
        </div>
      </div>

      <div className=" flex justify-center  ">
        <Button
          className="bg-[#631363] text-[#FFF] py-3 font-bold rounded-xl px-20"
          onClick={() => setShowStaus(true)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CurrentStatus;
