"use client";
import React from "react";
import PaymentInfo from "./PaymentInfo";
import BillingInfo from "./BillingInfo";
import AdditionalInfo from "./AdditionalInfo";
import TransactionSuccessful from "./TransactionSuccessful";
import { usePayAllInfoHooks } from "@/lib/customHooks/FeedbackAds/PayAllInfoHooks";

const PayAllInfo = () => {
  const {
    isTransactionSuccessful,
    paymentInfo,
    setPaymentInfo,
    billingInfo,
    setBillingInfo,
    additionalInfo,
    setAdditionalInfo,
    handleSubmitInfo,
  } = usePayAllInfoHooks();

  return (
    <>
      {isTransactionSuccessful ? (
        <TransactionSuccessful />
      ) : (
        <div className=" flex flex-col w-full gap-4 ">
          <span className="text-[#6D6D6D] [font-family:Arial] text-xs lg:text-[22px] font-bold leading-[normal]">
            Enter your payment details to complete your order.
          </span>
          <PaymentInfo
            paymentInfo={paymentInfo}
            setPaymentInfo={setPaymentInfo}
          />
          <BillingInfo
            billingInfo={billingInfo}
            setBillingInfo={setBillingInfo}
          />
          <AdditionalInfo
            additionalInfo={additionalInfo}
            setAdditionalInfo={setAdditionalInfo}
            handleSubmitInfo={handleSubmitInfo}
          />
        </div>
      )}
    </>
  );
};

export default PayAllInfo;
