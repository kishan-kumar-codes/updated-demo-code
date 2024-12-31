"use client";
import React from "react";
import Header from "../Reputation-mobile/Header";

import CreateNewCampaign from "./CreateNewCampaign";
import CreateNewAdset from "./CreateNewAdset";
import AdCreative from "./AdCreative";
import AdSets from "./AdSets";
import PayAllInfo from "./PayAllInfo";
import { useFeedbackAdsHooks } from "@/lib/customHooks/FeedbackAds/FeedbackAdsHooks";
import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";

const FacebookAdMobile = () => {
  const { currentStep, handleNextStep, handlePrevStep } = useFeedbackAdsHooks();
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col w-full justify-center items-center h-full">
        <div className="flex flex-col gap-7 justify-center items-center w-full">
          {/* <Header title={"Facebook Ads"} displayName=" Facebook Ads" /> */}
          <CitationNavbar isHeaderVisible={false} heading="Facebook Ads" />
          <div className="flex flex-col w-[90%] min-h-[490px] ">
            {currentStep === 1 && (
              <CreateNewCampaign handleNextStep={handleNextStep} />
            )}
            {currentStep === 2 && (
              <CreateNewAdset
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
              />
            )}
            {currentStep === 3 && (
              <AdCreative
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
              />
            )}
            {currentStep === 4 && (
              <AdSets
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
              />
            )}
            {currentStep === 5 && <PayAllInfo />}
          </div>
        </div>
        <div className="flex w-full lg:hidden justify-center mt-10 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default FacebookAdMobile;
