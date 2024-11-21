"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { TelegramSendSvg } from "@/svgs/Review-Widget-mobile/svgs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

interface SelectReviewSitesProps {
  // setImpContact: React.Dispatch<React.SetStateAction<boolean>>;
  contactSelection: string;
  onCloseModal: () => void;
}

const ImportContacts: React.FC<SelectReviewSitesProps> = ({
  contactSelection,
  // setImpContact,
  onCloseModal,
}) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmailDetais] = useState<string>("");
  const [smsCampaign, setSmsCampaign] = useState(false);
  const [uploadedData, setUploadedData] = useState(false);
  const router = useRouter();

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const handleEmailNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailDetais(e.target.value);
  };

  return (
    <>
      {!smsCampaign ? (
        !uploadedData ? (
          <div
            className={`w-full gap-3 justify-center p-2 flex flex-col max-h-[620px] md:pt-[12%] pt-0" overflow-y-auto`}>
            <div className="flex justify-between items-start w-full  ">
              <div className="text-[#6D6D6D] text-xl md:text-[48px] lg:text-[50px] md:font-normal py-1 font-bold leading-normal">
                Contact Information
              </div>
              <button onClick={onCloseModal} className="text-3xl h-5 w-5">
                <X size={18} color="#6D6D6D" />
              </button>
            </div>
            {contactSelection === "Email" ? (
              <span className="text-[#6D6D6D] text-[10px] tracking-tight md:text-[18px] lg:text-xl md:font-normal pr-2 text-wrap font-bold leading-3 md:leading-5 lg:leading-6">
                Please enter the first name, last name, and email address of
                person you would like to get reviews from.
              </span>
            ) : (
              <span className="text-[#6D6D6D] text-[10px] tracking-tight md:text-[18px] lg:text-xl md:font-normal pr-2 text-wrap font-bold leading-3 md:leading-5 lg:leading-6">
                Please enter the first name, last name, and mobile number of
                person you would like to get reviews from.
              </span>
            )}

            <div className="flex flex-col my-1 gap-4 w-full md:w-[70%] lg:w-[40%] justify-start">
              <div>
                <Label className="text-[10px] text-[#6D6D6D] md:text-[18px] lg:text-xl md:font-normal font-bold leading-normal">
                  First Name
                </Label>
                <Input
                  className="rounded-xl"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div>
                <Label className="text-[10px] text-[#6D6D6D] md:text-[18px] lg:text-xl md:font-normal font-bold leading-normal">
                  Last Name
                </Label>
                <Input
                  className="rounded-xl"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>
              <div>
                <Label className="text-[10px] text-[#6D6D6D]  md:text-[18px] lg:text-xl md:font-normal font-bold leading-normal">
                  {contactSelection === "Email"
                    ? "Email Address"
                    : "Mobile Number"}
                </Label>
                <Input
                  className="rounded-xl"
                  value={email}
                  onChange={handleEmailNameChange}
                />
              </div>
            </div>

            <span className="text-[#6D6D6D] text-[10px] md:text-[18px] lg:text-xl font-normal leading-normal">
              Before we message this person, please confirm:
            </span>
            <div className="flex gap-2 md:gap-3 items-center w-full">
              <Checkbox className="border border-black roun rounded-sm" />
              <Label className="text-[10px] text-[#6D6D6D] w-full md:w-[50%] pt-0 md:pt-6 md:text-[18px] lg:text-xl md:font-normal font-bold leading-3 md:leading-5 lg:leading-6">
                Yes, I have permissions to contact this person for marketing
                purposes in accordance with the{" "}
                <span className="text-[#631363]">Terms & Conditions*</span>
              </Label>
            </div>
            <div className="flex gap-2 md:gap-3 pt-0 md:pt-8 items-center w-full">
              <Checkbox className="border border-black roun rounded-sm" />
              <Label className="text-[10px] text-[#6D6D6D] w-full md:w-[40%]  md:text-[18px] lg:text-xl md:font-normal font-bold leading-3 md:leading-5 lg:leading-6">
                Yes, I have read and agree with the
                <span className="text-[#631363] pl-1">Privacy Policy*</span>
              </Label>
            </div>
            <div className="flex justify-end">
              <button
                className="text-xs font-bold leading-normal md:text-[24px] lg:text-[26px] md:font-normal  my-1 cursor-pointer bg-[#40F440] rounded-2xl px-3 py-2"
                onClick={() => setUploadedData(true)}>
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full gap-3 p-2 justify-center flex flex-col px-2 md:px-8 max-h-[620px]  overflow-y-auto">
            <div className="flex justify-between items-start w-full">
              <span className="text-[#6D6D6D] text-xl md:text-[48px] lg:text-[50px] md:font-normal py-2 font-bold leading-normal">
                Contact Details
              </span>
              <button onClick={onCloseModal} className="text-3xl  h-5 w-5">
                <X size={18} color="#6D6D6D" />
              </button>
            </div>
            <div className="flex w-full gap-2 items-center rounded-2xl py-4 md:py-8 bg-[#C6C6C6]">
              <div className="w-[1.9px] md:w-[3px] h-[25.2px] md:h-[50px] flex justify-start rounded-3xl shrink-0 bg-[#631363]" />
              <div className="text-[#6D6D6D] text-[10px] md:text-[22px] lg:text-[24px] font-normal leading-normal">
                {email} contact added successfully.
              </div>
            </div>
            <div className="flex justify-end w-full items-center gap-3 px-3 pb-2 md:pb-6">
              <button
                className="text-xs font-bold leading-normal  md:text-[22px] lg:text-[24px] md:font-normal my-1 flex items-center gap-2 cursor-pointer bg-[#40F440] rounded-2xl px-3 py-2"
                onClick={() => setSmsCampaign(true)}>
                Send & Start Campaign <TelegramSendSvg />
              </button>
            </div>
          </div>
        )
      ) : (
        <div className="w-full gap-3 p-2 justify-center flex flex-col px-2 md:px-8 py-2 overflow-y-auto">
          <div className="flex justify-between items-start w-full">
            <span className="text-[#6D6D6D] py-2 text-xl md:text-[36px] lg:text-[38px] md:font-normal font-bold leading-normal">
              Email And SMS Campaigns
            </span>
            <button onClick={onCloseModal} className="text-3xl h-5 w-5">
              <X size={18} color="#6D6D6D" />
            </button>
          </div>

          <div className="flex w-full flex-col p-4 gap-3   items-center justify-center rounded-2xl bg-[#FFFFFF]">
            <span className="text-[#6D6D6D] text-base md:text-[30px] lg:text-[32px] md:font-normal font-bold leading-normal">
              Kiosk Mode URL
            </span>
            <span className="text-[#6D6D6D]  md:text-lg lg:text-[20px] leading-3 md:leading-4 lg:leading-5  flex justify-center px-2 md:px-8 text-center text-[10px] font-normal">
              Kiosk Mode allows you to request feedback from your customers on a
              tablet or kiosk, which serves a dedicated, white-labeled web page.
            </span>
            <span className="text-[#6D6D6D] md:text-lg lg:text-[20px] px-2 md:px-[20%]  leading-3 md:leading-4 lg:leading-5  flex justify-center text-center text-[10px] font-normal ">
              Kiosk Mode is ideal for capturing feedback while the customer is
              still at your business location.
            </span>
            <div className="flex gap-2 items-center w-full mt-2">
              <input
                className="h-full py-2 w-full pl-4 md:py-4 rounded-2xl md:text-[22px] lg:text-[24px] md:font-normal focus:outline-none bg-[#F4F4F4]"
                placeholder="http://bit.ly/2wskECU"
              />
              <button
                onClick={() => router.push("/review-widget/get-reviews")}
                className="text-xs font-bold leading-normal md:text-[22px] lg:text-[24px] my-1  md:font-normal cursor-pointer bg-[#40F440] rounded-lg px-3 py-2">
                Copy
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col p-4 gap-4  items-center justify-center rounded-2xl min-h-[190px] bg-[#FFFFFF]">
            <span className="text-[#6D6D6D] text-base md:text-[30px] lg:text-[32px] md:font-normal font-bold leading-normal">
              Link Mode URL
            </span>
            <span className="text-[#6D6D6D] md:text-lg lg:text-[20px]  px-2 md:px-8  leading-3 md:leading-4 lg:leading-5 flex justify-center text-center text-[10px] font-normal ">
              Link Mode allows you to request feedback and reviews from your
              customers via SMS, email signatures, or even business cards by
              using a dedicated, white-labeled URL.
            </span>
            <span className="text-[#6D6D6D] md:text-lg lg:text-[20px] leading-3 md:leading-4 lg:leading-5  px-2 md:px-[20%]   flex justify-center text-center text-[10px] font-normal ">
              Link Mode is ideal for capturing feedback once the customer has
              left your business location.
            </span>
            <div className="flex gap-2 items-center w-full mt-2">
              <input
                className="h-full py-2 w-full pl-4 md:py-4 rounded-2xl md:text-[22px] lg:text-[24px] md:font-normal focus:outline-none bg-[#F4F4F4]"
                placeholder="http://bit.ly/2wskECU"
              />
              <button
                onClick={() => router.push("/review-widget/get-reviews")}
                className="text-xs font-bold leading-normal md:text-[22px] lg:text-[24px] my-1  md:font-normal cursor-pointer bg-[#40F440] rounded-lg px-3 py-2">
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImportContacts;
