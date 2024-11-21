import React, { useState } from "react";
import { X } from "lucide-react";

import {
  ReviewCellPhoneSvgs,
  ReviewEmailSIgnMobileSvgs,
  ReviewMultipleUsersMobileSvgs,
  ReviewSingleUserMobileSvgs,
} from "@/svgs/Review-Widget-mobile/svgs";

interface SelectReviewSitesProps {
  setEmailAndSMSCampaign: React.Dispatch<React.SetStateAction<boolean>>;
  setImpContact: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseModal: () => void;
  setContactSelection: React.Dispatch<React.SetStateAction<string>>;
  setSingleContact: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailSMSCampaigns = ({
  setEmailAndSMSCampaign,
  setContactSelection,
  setImpContact,
  onCloseModal,
  setSingleContact,
}: SelectReviewSitesProps) => {
  const [showMultipleEmailButton, setShowMultipleEmailButton] = useState(true);
  const [showMultipleSmsButton, setShowMultipleSmsButton] = useState(true);

  const handleSelectReview = () => {
    setImpContact(true);
    setEmailAndSMSCampaign(false);
  };

  const handleSmsSelectReview = () => {
    setImpContact(true);
    setEmailAndSMSCampaign(false);
  };

  const handleSingleEmailSelect = () => {
    setImpContact(false);
    setSingleContact(true);
    setContactSelection("Email");
    setEmailAndSMSCampaign(false);
  };

  const handleSingleSmsSelect = () => {
    setImpContact(false);
    setEmailAndSMSCampaign(false);
    setSingleContact(true);
    setContactSelection("Sms");
  };

  return (
    <div
      className={`w-full gap-3 p-2 justify-center flex flex-col max-h-[620px]  overflow-y-auto`}>
      <div className="flex justify-between md:pt-[18%] lg:pt-[12%] pt-0  items-start w-full">
        <div className="w-full flex">
          <div className="text-[#6D6D6D]  flex w-full justify-center text-[20px] md:text-[46px] pt-0 md:pt-2 lg:text-[48px] md:font-normal font-bold p-1 leading-normal">
            Email And SMS Campaigns
          </div>
          <button onClick={onCloseModal} className="text-3xl h-5 ">
            <X color="#6D6D6D" />
          </button>
        </div>
      </div>

      <div className="flex w-full flex-col p-4 gap-2 items-center justify-center rounded-2xl bg-[#FFFFFF]">
        <div className="text-[#6D6D6D] text-base pt-1 md:text-[38px] lg:text-[40px] md:font-normal font-bold leading-normal">
          Email Campaign
        </div>
        <span className="text-[#6D6D6D] flex justify-center w-full md:w-[60%] text-center text-[10px] md:text-[24px] pt-2 lg:text-[26px] font-normal leading-3 md:leading-6 lg:leading-7">
          Send an email campaign to multiple contacts using a CSV or to a single
          email address.
        </span>
        <div className="text-[#6D6D6D] bg-[#F4F4F4] w-fit p-2 md:p-3 rounded-full flex justify-center text-center text-[10px] font-normal leading-normal">
          <ReviewEmailSIgnMobileSvgs />
        </div>

        <div className="flex gap-3  items-center justify-center">
          {showMultipleEmailButton && (
            <button
              onClick={handleSelectReview}
              className="text-xs font-bold leading-normal md:text-[24px] lg:text-[26px] md:font-normal flex items-center gap-3 my-1 cursor-pointer bg-[#40F440] rounded-2xl px-3 md:px-8  py-2">
              <ReviewMultipleUsersMobileSvgs /> Multiple
            </button>
          )}
          <button
            onClick={handleSingleEmailSelect}
            className="text-xs font-bold leading-normal md:text-[24px] lg:text-[26px] md:font-normal flex items-center gap-3 my-1 cursor-pointer bg-[#40F440] rounded-2xl px-3 md:px-8 lg:px-10 py-2">
            <ReviewSingleUserMobileSvgs /> Single
          </button>
        </div>
      </div>
      <div className="flex w-full flex-col p-4 gap-3 items-center justify-center rounded-2xl bg-[#FFFFFF]">
        <span className="text-[#6D6D6D] text-base md:text-[38px] lg:text-[40px] md:font-normal  font-bold leading-normal">
          SMS Campaign
        </span>
        <span className="text-[#6D6D6D] flex md:w-[60%] text-center text-[10px] md:text-[24px] pt-2 lg:text-[26px] md:font-normal font-normal leading-3 md:leading-6 lg:leading-7 justify-center ">
          Send an SMS campaign to multiple contacts using a CSV or to a single
          mobile number.
        </span>
        <span className="text-[#6D6D6D] bg-[#F4F4F4] w-fit px-3 md:px-4 py-2 md:py-3 rounded-full flex justify-center text-center text-[10px] font-normal leading-normal">
          <ReviewCellPhoneSvgs />
        </span>
        <div className="flex gap-3  items-center justify-center">
          {showMultipleSmsButton && (
            <button
              onClick={handleSmsSelectReview}
              className="text-xs font-bold leading-normal flex md:text-[24px] lg:text-[26px] md:font-normal items-center gap-3 my-1 cursor-pointer bg-[#40F440] rounded-2xl px-3 md:px-8  py-2">
              <ReviewMultipleUsersMobileSvgs /> Multiple
            </button>
          )}
          <button
            onClick={handleSingleSmsSelect}
            className="text-xs font-bold leading-normal flex md:text-[24px] lg:text-[26px] md:font-normal items-center gap-3 my-1 cursor-pointer bg-[#40F440] rounded-2xl px-3 py-2 md:px-10 ">
            <ReviewSingleUserMobileSvgs /> Single
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSMSCampaigns;
