import React from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import InputBarField from "../citations-builder/InputBarField";
import { Input } from "../ui/input";
interface BillingInfoProps {
  setBillingInfo: React.Dispatch<
    React.SetStateAction<{
      address: string;
      country: string;
      state: string;
      city: string;
      zipCode: string;
    }>
  >;
  billingInfo: {
    address: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
  };
}
const BillingInfo = ({ setBillingInfo, billingInfo }: BillingInfoProps) => {
  return (
    <div className="flex flex-col w-full">
      {/* <HeaderBarMobile title="Billing Info" /> */}
      <div className="flex rounded-3xl z-10 min-h-[160px] justify-start flex-col w-full bg-[#E0E0E0]">
        <div
          // onClick={() => setToggle((prev) => !prev)}
          className="w-full rounded-xl text-white text-[16px] cursor-pointer lg:text-[26px] font-bold pl-5 py-2.5 lg:py-4 bg-[#631363] lg:rounded-2xl">
          Billing Info
        </div>
        <div className="flex flex-col w-full gap-2 px-2 lg:px-8 py-8">
          <span className="text-[#6D6D6D] text-xs  lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
            Address
          </span>
          <Input className="rounded-xl bg-[#F4F4F4] h-8 lg:h-12" />
          <span className="text-[#6D6D6D] text-xs  lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
            Country
          </span>
          <Input className="rounded-xl bg-[#F4F4F4] h-8 lg:h-12" />
          <span className="text-[#6D6D6D] text-xs  lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
            State
          </span>
          <Input className="rounded-xl bg-[#F4F4F4] h-8 lg:h-12" />
          <span className="text-[#6D6D6D] text-xs  lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
            City (Optional)
          </span>
          <Input className="rounded-xl bg-[#F4F4F4] h-8 lg:h-12" />
          <span className="text-[#6D6D6D] text-xs  lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
            Zip Code
          </span>
          <Input className="rounded-xl bg-[#F4F4F4] h-8 lg:h-12" />
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;
