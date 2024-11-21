"use client";
import React, { useState } from "react";
import Header from "../Reputation-mobile/Header";
import { WebchatSettingStepCheckSvg } from "@/svgs/Webchat-Settings/svgs";
import UseCaseSelection from "./UseCaseSelection";
import CarrierTermsPreview from "./CarrierTermsPreview";
import CampaignDetailes from "./CampaignDetailes";
import CampiagnProgressStepper from "./CampiagnProgressStepper";

const OnboardingCampaignTCR = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [open, setOpen] = React.useState(false);
  const handleNextStep = (value: number) => setCurrentStep(value);
  return (
    <div className="flex justify-center items-center w-full h-full ">
      <div className="flex flex-col w-full md:w-[430px] justify-center items-center lg:w-[430px] min-h-full ">
        
        <div className="flex flex-col gap-7 justify-center items-center w-full  ">
          <Header
            title={" Onboarding Campaign"}
            displayName=" OnboardingCampaign"
          />
          <div className="flex flex-col w-[90%] gap-3   min-h-[70vh] ">
            <CampiagnProgressStepper currentStep={currentStep} handleNextStep={handleNextStep} />

            {(currentStep === 1 && <UseCaseSelection open={open} setOpen={setOpen}  />) ||
              (currentStep === 2 && <CarrierTermsPreview />) ||
              (currentStep === 3 && <CampaignDetailes />)}
          </div>
        </div>
        <div className={`flex w-full justify-center  ${open  ? "mt-32" : "mt-20"}  items-center bg-[#40F440] h-[45px] rounded-t-3xl  `}></div>

      </div>

    </div>
  );
};

export default OnboardingCampaignTCR;
