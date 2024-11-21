"use client";
import React, { useState } from "react";
import { CircleX } from "lucide-react";
import { X } from "lucide-react";
import SquareCheckBoxButton from "@/components/citations-builder/SquareCheckBox";

interface SetEmailNotificationsProps {
  setEmailNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  setEmailAndSMSCampaign: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseModal: () => void;
}

const SetEmailNotifications = ({
  setEmailNotifications,
  setEmailAndSMSCampaign,
  onCloseModal,
}: SetEmailNotificationsProps) => {
  const [selectedOption, setSelectedOption] = useState<null | string>(null);
  const [isYes, setYes] = useState<boolean>(false);
  const [isNo, setNo] = useState<boolean>(false);
  const [emailInputs, setEmailInputs] = useState<string[]>([""]);

  const handleAddEmail = () => {
    if (emailInputs.length < 5) {
      setEmailInputs([...emailInputs, ""]); // Add a new empty input field
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...emailInputs];
    newInputs[index] = value;
    setEmailInputs(newInputs);
  };

  const handleSelectReview = () => {
    console.log("Setting Email and SMS Campaign to true");
    setEmailAndSMSCampaign(true);
    console.log("Email inputs:", emailInputs);
    setEmailNotifications(false);
  };

  const handleSelectNo = (option: boolean) => {
    setYes(false);
    setNo(option);
  };
  const handleSelectYes = (option: boolean) => {
    setNo(false);
    setYes(option);
  };

  return (
    <div className="w-full gap-3 p-2 justify-center flex flex-col px-2 md:px-10 max-h-[620px] overflow-y-auto">
      <div
        className={`flex justify-between items-start w-full ${isYes ? "md:mt-[60%] lg:mt-[56%] mt-[5%]" : "mt-0"}`}>
        <div className="text-[#6D6D6D] py-2 md:text-2xl pt-2 lg:text-[26px] md:font-normal text-xl font-bold leading-normal">
          Set Email Notifications
        </div>
        <button onClick={onCloseModal} className="text-3xl h-5 w-5">
          <X color="#6D6D6D" />
        </button>
      </div>
      <div className="text-[#6D6D6D] text-[10px] w-full md:w-[70%] md:text-[22px] md:pt-2 lg:text-[24px] md:font-normal font-bold leading-normal md:leading-6 lg:leading-7">
        Would you like to be notified of your Internal Feedback scores as email
        notifications?
      </div>
      <div className="flex w-full gap-2 items-center rounded-xl  md:rounded-md bg-[#C6C6C6]">
        <div className="w-[1.9px] h-[29.2px] md:h-[80px] md:w-[2.9px] flex justify-start rounded-full md:rounded-md shrink-0 bg-[#631363] fill-[#631363]" />
        <div className="text-[#6D6D6D] text-[10px] md:text-[22px] pt-2 lg:text-[24px] px-2 md:px-8 py-2 md:py-8 w-full md:w-[80%] font-normal leading-normal md:leading-6 lg:leading-7">
          {/* Reminder: Follow-up SMSes cost the same number of credits as the first
          message. If you have insufficient credits no Follow-up SMS will be
          sent. */}
          Thumbs and Stars Alerts are not available yet but will be in the near
          future.
        </div>
      </div>
      <SquareCheckBoxButton
        onChange={() => handleSelectNo(true)}
        label={"No"}
        id={"net-nps"}
        checked={isNo}
      />
      <SquareCheckBoxButton
        onChange={() => handleSelectYes(true)}
        label={"Yes"}
        id={"net-nps"}
        checked={isYes}
        // fontSizeMobile={14}
      />
      {/* <SquareCheckBoxButton
        label="No"
        id="No"
        onClick={() => handleSelectOption("No")}
      /> */}
      {/* <SquareCheckBoxButton
        label="Yes"
        id="Yes"
        isMobile
        fontSizeMobile={12}
        onClick={() => handleSelectOption("Yes")}
      /> */}

      {isYes && (
        <div className="w-full flex flex-col gap-2 md:gap-4 text-sm">
          <div className="text-[#6D6D6D] text-[12px] md:text-[24px] pt-2 lg:text-[26px] font-normal leading-normal">
            Would you like email notification?
          </div>
          <SquareCheckBoxButton label="Immediately" id="Immediately" />
          <SquareCheckBoxButton label="Daily" id="Daily" />
          <div className="text-[#6D6D6D] text-[12px] md:text-[24px] pt-2 lg:text-[26px] font-normal leading-normal">
            What feedback would you like to be notified for?
          </div>
          <SquareCheckBoxButton label="Only Negative" id="Only Negative" />
          <SquareCheckBoxButton label="Only Positive" id="Only Positive" />
          <SquareCheckBoxButton label="Everything" id="Everything" />

          <div className="flex flex-col gap-2 items-center w-full md:w-[80%]">
            {emailInputs.map((input, index) => (
              <div key={index} className="w-full flex flex-col gap-2 md:gap-0">
                <div className="text-[#6D6D6D] text-[12px] md:text-[20px] pt-1 lg:text-[22px] md:font-normal font-bold leading-normal">
                  Add Up To 5 Email Addresses:
                </div>
                <div className="flex gap-2 md:gap-4 items-center w-full">
                  <input
                    className="h-full py-3 w-full pl-4 md:h-14 rounded-2xl focus:outline-none bg-[#FFFFFF]"
                    placeholder="johndoe@companyname.com"
                    value={input}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  <button
                    className="text-xs font-bold leading-normal md:text-[22px] pt-2 lg:text-[24px] w-20 my-1 cursor-pointer bg-[#40F440] md:font-normal rounded-lg px-3 py-2 md:py-2.5"
                    onClick={handleAddEmail}
                    disabled={emailInputs.length >= 5}>
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-end w-full items-center pt-4 md:pt-8 gap-3 px-3 pb-4 md:pb-16">
        <button
          className="text-xs font-bold md:font-normal leading-normal md:text-[28px] pt-2 lg:text-[30px]  my-1 cursor-pointer bg-[#40F440] rounded-lg px-3 py-2"
          onClick={handleSelectReview}>
          Save And Continue
        </button>
        <button className="text-xs font-bold md:font-normal leading-normal md:text-[28px] pt-2 lg:text-[30px]  my-1 text-white cursor-pointer bg-[#BA0416] rounded-lg px-3 py-2">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SetEmailNotifications;
