import React, { useState } from "react";
import { Button } from "../ui/button";
import GerernalPaymentMethod from "./GerernalPaymentMethod";
import GereralTaxInformation from "./GereralTaxInformation";
import GereralBillingInformation from "./GereralBillingInformation";
import GeneralHistoryCard from "./GeneralChargeCard";
const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};
const GeneralPayments = () => {
  const [activeTab, setActiveTab] = useState("Charge");

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  const reviews1 = [
    {
      id: "in_5**fwe3",
      date: "Sep 11, 2024 2:44:23 PM",
      desc: "Invoice 325DJ87S - 6355",
      cardDetails: "Visa ending 1234",
      amount: "$100",
      status: "Paid",
    },
  ];
  const reviews2 = [
    {
      id: "ch_5**fwe3",
      date: "Sep 11, 2024 2:44:23 PM",
      desc: "Automated Recharge : Messaging credits worth 100 USD added for HubSpark CRM. These credits will be used for SMS, Calls, Emails, phone numbers, etc. Please refer to Agency Billing Page (https://app.hubspark.co/settings/billing/) for more details.",
      cardDetails: "Visa ending 1234",
      amount: "$100",
      status: "Successfull",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-2 px-3">
      <div className="w-full flex justify-end">
        <Button className="bg-[#631363] text-[#FFFFFF] py-3 font-bold rounded-2xl lg:h-12 md:text-sm lg:text-[16px] px-2">
          + Add Payment Method
        </Button>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
        <GerernalPaymentMethod />
        <GereralTaxInformation />
        <GereralBillingInformation />
      </div>
      <div className="w-full flex flex-col  my-1 lg:my-3">
        <span className="text-[#6D6D6D] text-xs md:text-base lg:text-[20px] font-bold leading-normal">
          Payments History
        </span>
        <span className="text-[#6D6D6D] text-xs pt-1 font-normal md:text-base lg:text-[16px] leading-normal">
          Keep track of your payments
        </span>
        <div className="flex my-3 w-full">
          <span
            onClick={() => handleActiveTab("Charge")}
            className="text-[#6D6D6D] flex items-center px-4 border text-xs md:text-base lg:text-[18px] border-[#6D6D6D] rounded-l-full cursor-pointer  lg:h-[40px]  h-[30px] text-center  justify-end"
            style={{
              ...Typography,
              color: activeTab === "Charge" ? "#FFFFFF" : "#6D6D6D",
              backgroundColor:
                activeTab === "Charge" ? "#631363" : "transparent",
            }}>
            Charge
          </span>
          <span
            onClick={() => handleActiveTab("Invoice")}
            className="text-[#6D6D6D] flex px-4 lg:px-5 border border-[#6D6D6D] text-xs  md:text-base lg:text-[18px] rounded-r-full cursor-pointer h-[30px] lg:h-[40px] text-center items-center justify-end"
            style={{
              ...Typography,

              color: activeTab === "Invoice" ? "#FFFFFF" : "#6D6D6D",
              backgroundColor:
                activeTab === "Invoice" ? "#631363" : "transparent",
            }}>
            Invoice
          </span>
        </div>
        <div className="w-full flex">
          {activeTab === "Charge" &&
            reviews1.map((review, index) => (
              <GeneralHistoryCard key={index} review={review} />
            ))}
          {activeTab === "Invoice" &&
            reviews2.map((review, index) => (
              <GeneralHistoryCard key={index} review={review} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralPayments;
