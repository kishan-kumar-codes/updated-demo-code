"use client";
import React, { useState } from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import HeadBar from "../citations-builder/HeadBar";
import Campaign from "./Campaign";
import CampaignSampleMessages from "./CampaignSampleMessages";
import CampaignAndContentAttributes from "./CampaignAndContentAttributes";
import OtherResponsibleParties from "./OtherResponsibleParties";
import { Button } from "../ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";
import { OnboardingAlert } from "@/svgs/Onboarding-Campaign-TCR/svgs";
import CurrentStatusCard from "./CurrentStatusCard";
import CurrentStatus from "./CurrentStatus";

const CampaignDetailes = () => {
  const [showRead, setShowRead] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(false);
  return (
    <>
      {!currentStatus ? (
        <div className="flex w-full gap-3 flex-col ">
          <div className="flex w-full gap-3 flex-col ">
            <HeadBar title="Brand" />
            <div className="flex rounded-3xl -mt-10 z-10 min-h-[120px] justify-start px-5  w-full bg-[#E0E0E0] py-3">
              <div className="flex flex-col w-full gap-2 pt-8">
                <div className="flex w-full gap-2">
                  <div className="flex flex-col w-full gap-0.5">
                    <span className="text-[#6D6D6D] text-xs font-bold leading-normal pl-2">
                      Brand Name
                    </span>
                    <input
                      type="text"
                      className="w-full rounded-2xl border h-10 border-[#E0E0E0] font-bold p-2 focus:outline-none text-[#631363] placeholder-[#631363] text-xs  leading-normal"
                      placeholder="BrandName2"
                    />
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <Campaign />
          <CampaignSampleMessages />
          <CampaignAndContentAttributes />
          <OtherResponsibleParties />
          <div className="w-full flex justify-around  pb-7 items-center ">
            <Button className="border border-[#631363]  text-[#631363] bg-[#FFF] py-3 font-bold min-w-[128px] min-h-[33px] text-[18px] rounded-2xl">
              Previous
            </Button>

            <Dialog>
              <DialogTrigger>
                <Button className="bg-[#631363] text-[#FFF] py-3 font-bold min-w-[128px] min-h-[33px] text-[18px] rounded-2xl px-10">
                  Next
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%] flex bg-[#F4F4F4] hide-scrollbar">
                <DialogDescription className="w-full flex rounded-2xl">
                  {!showRead ? (
                    <div className="w-full flex flex-col text-center justify-center items-center ">
                      <span className="text-[#6D6D6D] text-xs font-bold leading-normal pl-2">
                        Click I agree to confirm. <br /> You will be invoiced
                        monthly.
                      </span>
                      <div className="w-full flex justify-center my-4  gap-7 items-center">
                        <Button className="border border-[#631363]  text-[#631363] bg-[#FFF] py-3 font-bold min-w-[128px] min-h-[33px] text-[18px] rounded-2xl">
                          Previous
                        </Button>
                        <Button
                          className="bg-[#631363] text-[#FFF] py-3 font-bold min-w-[128px] min-h-[33px] text-[18px] rounded-2xl px-10"
                          onClick={() => setShowRead(!showRead)}>
                          Next
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full flex flex-col text-center justify-center items-center">
                      <OnboardingAlert />
                      <span className="text-[#6D6D6D] [font-family:Arial] text-sm font-bold leading-[normal]">
                        PLEASE READ
                      </span>
                      <span>The Campaign Registry (”TCR”) is </span>

                      <span className="text-[#6D6D6D] text-xs font-bold leading-normal pl-2">
                        opperational with all the relevant parties in the
                        messaging ecosystem. This means that any campaigns
                        registered now can be enabled with NetNumber,
                        associating the Campaign ID with your desired phone
                        number(s).
                      </span>
                      <div className="w-full flex justify-center my-4  gap-7 items-center">
                        <DialogClose asChild>
                          <Button
                            className="bg-[#631363] text-[#FFF] py-3  min-w-[128px] min-h-[33px] text-[18px] rounded-2xl px-10"
                            onClick={() => setCurrentStatus(!currentStatus)}>
                            ok
                          </Button>
                        </DialogClose>
                      </div>
                    </div>
                  )}
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      ) : (
        <CurrentStatus />
      )}
    </>
  );
};

export default CampaignDetailes;
