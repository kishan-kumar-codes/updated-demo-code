import React from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import InputBarField from "../citations-builder/InputBarField";
import SquareCheckBoxButton from "../citations-builder/SquareCheckBox";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
interface AdditionalInfoProps {
  setAdditionalInfo: React.Dispatch<
    React.SetStateAction<{
      email: string;
      phone: string;
      notificationEmail: string;
      termsAndConditions: boolean;
    }>
  >;
  additionalInfo: {
    email: string;
    phone: string;
    notificationEmail: string;
    termsAndConditions: boolean;
  };
  handleSubmitInfo: () => void;
}
const AdditionalInfo = ({
  additionalInfo,
  setAdditionalInfo,
  handleSubmitInfo,
}: AdditionalInfoProps) => {
  const toggleTermsAndConditions = () => {
    setAdditionalInfo((prevInfo) => ({
      ...prevInfo,
      termsAndConditions: !prevInfo.termsAndConditions,
    }));
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex rounded-3xl flex-col z-10 min-h-[160px] justify-start w-full bg-[#E0E0E0] ">
        <div
          // onClick={() => setToggle((prev) => !prev)}
          className="w-full rounded-xl text-white text-[16px] cursor-pointer lg:text-[26px] font-bold pl-5 py-2.5 lg:py-4 bg-[#631363] lg:rounded-2xl">
          Additional Info
        </div>
        <div className="flex flex-col w-full gap-2 px-2 lg:px-8 py-8">
          <span className="text-[#6D6D6D] text-xs  lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
            Email Address
          </span>
          <Input className="rounded-xl bg-[#F4F4F4] h-8 lg:h-12" />
          <span className="text-[#6D6D6D] text-xs  lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
            Phone Number (Optional)
          </span>
          <Input className="rounded-xl bg-[#F4F4F4] h-8 lg:h-12" />
          <span className="text-[#6D6D6D] text-xs  lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
            Notification Email Address
          </span>
          <Input className="rounded-xl bg-[#F4F4F4] h-8 lg:h-12" />
          <div className="flex items-center gap-2 py-2 lg:py-4 lg:gap-8">
            <Checkbox className="border border-black rounded-sm" />
            <p className="text-[#6D6D6D] text-xs lg:text-[22px] font-bold leading-normal">
              I agree to all the terms and conditions made by Meta
            </p>
          </div>
          <div className="flex w-full items-center my-3 justify-between">
            <span className="text-[#6D6D6D] text-xs lg:text-[22px] font-bold leading-normal">
              Total
            </span>
            <span className="text-[#6D6D6D] text-xs lg:text-[22px] font-bold leading-normal">
              $699.00
            </span>
          </div>
          <div className="flex w-full items-center justify-center">
            <Button
              className="bg-[#631363] text-[#FFF] text-xs lg:text-[30px] lg:h-14 py-3 w-1/2 font-bold rounded-lg"
              onClick={handleSubmitInfo}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
