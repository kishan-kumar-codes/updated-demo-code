// import { useAppSelector } from "@/lib/hooks";
import { useAppSelector } from "@/hooks/hooks";
import React from "react";

interface TransactionSuccessfulProps {
  isDesktop?: boolean;
}

const TransactionSuccessful: React.FC<TransactionSuccessfulProps> = ({
  isDesktop = false,
}) => {
  const getpayAllData = useAppSelector((state) => state.FbPayAll);
  const billingData = getpayAllData.payAllDetails[0].billingInfo;
  const date = new Date().toDateString();

  console.log("getpayAllData", getpayAllData);

  const textSize = isDesktop ? "text-2xl" : "text-sm";

  return (
    <div className="flex flex-col w-full pb-10">
      <div className="flex flex-col w-full gap-1 text-center items-center">
        <span
          className={`text-[#631363] [font-family:Arial] font-bold leading-[normal] text-lg lg:text-[36px]`}>
          Transaction Successful
        </span>
        <span
          className={`text-[#6D6D6D] [font-family:Arial] font-normal leading-[normal] lg:text-[26px] ${textSize}`}>
          Thank you for your payment
        </span>
      </div>

      <div className="flex flex-col w-full gap-2 my-7 lg:px-40 bg-[#E0E0E0] min-h-[350px] justify-start rounded-2xl py-4 p-3 px-4 pb-10">
        <span
          className={`text-[#6D6D6D] [font-family:Arial] font-normal leading-[normal] lg:text-[30px] ${textSize}`}>
          HubSpark NHIKYH
        </span>
        <div className="mt-5 flex justify-between items-center">
          <span
            className={`text-[#6D6D6D] [font-family:Arial] font-bold leading-[normal] lg:text-[20px] ${textSize}`}>
            Date
          </span>
          <span
            className={`text-[#6D6D6D] [font-family:Arial] font-normal leading-[normal] lg:text-[22px] ${textSize}`}>
            {date}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span
            className={`text-[#6D6D6D] [font-family:Arial] font-bold leading-[normal] lg:text-[20px] ${textSize}`}>
            Entry Method
          </span>
          <span
            className={`text-[#6D6D6D] [font-family:Arial] font-normal leading-[normal]  lg:text-[22px] ${textSize}`}>
            Keyed
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span
            className={`text-[#6D6D6D] [font-family:Arial] font-bold leading-[normal] lg:text-[20px] ${textSize}`}>
            Transaction Type
          </span>
          <span
            className={`text-[#6D6D6D] [font-family:Arial] font-normal  lg:text-[22px] leading-[normal] ${textSize}`}>
            Sale
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span
            className={`text-[#6D6D6D] [font-family:Arial] font-bold leading-[normal] lg:text-[20px] ${textSize}`}>
            Confirmation Number
          </span>
          <span
            className={`text-[#6D6D6D] [font-family:Arial] font-normal  lg:text-[22px] leading-[normal] ${textSize}`}>
            4s55as
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span
            className={`text-[#6D6D6D] [font-family:Arial] font-bold leading-[normal] lg:text-[20px] ${textSize}`}>
            Account
          </span>
          <span
            className={`text-[#6D6D6D] [font-family:Arial] font-normal  lg:text-[22px] leading-[normal] ${textSize}`}>
            ****1530 VISA
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span
            className={`text-[#6D6D6D] [font-family:Arial] font-bold leading-[normal] lg:text-[20px] ${textSize}`}>
            Account Holder
          </span>
          <span
            className={`text-[#6D6D6D] [font-family:Arial] font-normal  lg:text-[22px] leading-[normal] ${textSize}`}>
            John
          </span>
        </div>
        <div className="flex justify-between mt-10 items-center">
          <span
            className={`text-[#6D6D6D] [font-family:Arial] font-bold leading-[normal] lg:text-[20px] ${textSize}`}>
            Total
          </span>
          <span
            className={`text-[#6D6D6D] [font-family:Arial] font-normal  lg:text-[22px] lg:font-bold leading-[normal] ${textSize}`}>
            $699.00
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span
            className={`text-[#6D6D6D] [font-family:Arial] font-bold leading-[normal] lg:text-[20px] ${textSize}`}>
            Billing Address
          </span>
          <span
            className={`text-[#6D6D6D] [font-family:Arial]   lg:text-[22px] justify-end flex w-1/2 font-normal leading-[normal] ${textSize}`}>
            {billingData.state}, {billingData.city}, <br /> {billingData.state},{" "}
            {billingData.zipCode}, {billingData.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TransactionSuccessful;
