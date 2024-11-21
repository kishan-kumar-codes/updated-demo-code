"use client";
import React, { useState } from "react";
import Header from "../Reputation-mobile/Header";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import { Button } from "../ui/button";
import GeneralPayments from "./GeneralPayments";
import GeneralWalletTransactions from "./GeneralWallet&Transactions";

const GeneralBillings = () => {
  const [billingTab, setBillingTab] = useState("Payments");
  const handleWebChatTab = (value: string) => setBillingTab(value);
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col w-full md:w-[430px] justify-center items-center lg:w-[430px] h-full">
        <div className="flex flex-col gap-7 justify-center items-center w-full">
          <Header title={"General Settings"} displayName=" General Settings" />
          <div className="flex flex-col   w-[90%] h-full">
            <div className="flex flex-col w-full  items-center gap-2 min-h-[490px] h-full pt-2">
              <div className="flex w-full gap-3 flex-col ">
                {/* <HeaderBarMobile title="Billing Dashboard" /> */}
                <div className="flex rounded-3xl flex-col z-10 min-h-[160px] justify-start w-full bg-[#E0E0E0]">
                  <div className="w-full rounded-xl text-white text-[16px] font-bold pl-5 py-2.5 bg-[#631363]">
                    Billing Dashboard
                  </div>
                  <div className="flex flex-col w-full gap-2 pt-3">
                    <div className="flex justify-center my-1 items-center w-full h-10 gap-1">
                      <div
                        className={`flex justify-center items-center cursor-pointer w-1/2 h-10 font-normal gap-1 ${billingTab === "Payments" ? "bg-[#40F440]" : "bg-[#F4F4F4]"} rounded-l-xl`}
                        onClick={() => handleWebChatTab("Payments")}>
                        Payments
                      </div>
                      <div
                        className={`flex justify-center items-center cursor-pointer w-1/2 h-10 font-normal gap-1 ${billingTab === "Wallet & Transactions" ? "bg-[#40F440]" : "bg-[#F4F4F4]"} rounded-r-xl`}
                        onClick={() =>
                          handleWebChatTab("Wallet & Transactions")
                        }>
                        Wallet & Transactions
                      </div>
                    </div>

                    {billingTab === "Payments" && <GeneralPayments />}
                    {billingTab === "Wallet & Transactions" && (
                      <GeneralWalletTransactions />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center mt-10 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default GeneralBillings;
