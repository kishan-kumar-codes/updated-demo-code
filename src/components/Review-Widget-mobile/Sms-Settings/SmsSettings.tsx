"use client";
// import { HeaderBarMobile } from "@/components/citations-builder/HeadBar";

import Header from "@/components/Reputation-mobile/Header";
import React, { useState } from "react";
import SwitchComponent from "../Email-Settings/SwitchComponent";
import CounterTextArea from "./CounterTextArea";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";

import PhoneLayout from "./PhoneLayout";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import TextEditor from "../Email-Settings/TextEditor";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const typography: React.CSSProperties = {
  color: "#631363",
  fontFamily: "Arial",
};
const SmsSettings = ({
  setCurrentTab,
}: {
  setCurrentTab: (sms: string) => void;
}) => {
  const [activeTab, setActiveTab] = useState("SMS");

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  const handleNextPage = () => {
    setCurrentTab("loading");
  };

  const text = `You can use {{FirstName}} and {{BusinessName}} as
placeholders in your SMS text. {{FirstName}} will be taken
from the CSV file. {{BusinessName}} will be taken from
Reputation Manager report settings.`;
  return (
    <div className="flex flex-col justify-center items-center w-full bg-[#F4F4F4]">
      <CitationNavbar heading="Review Widget" isHeaderVisible={false} />
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col gap-7 justify-center items-center w-full bg-[#F4F4F4]">
          <div className="flex flex-col w-[90%] py-6">
            {/* <HeaderBarMobile title="SMS Settings" /> */}
            <div className="flex flex-col rounded-3xl z-10  justify-start w-full bg-[#E0E0E0] pb-8">
              <div className="flex flex-col w-full gap-5 ">
                <div className="bg-[#631363] pl-[3%] text-white font-[Arial] md:text-2xl lg:text-[26px] md:font-normal text-[16px] font-bold flex  w-full rounded-2xl py-2">
                  SMS Settings
                </div>
                <div className="grid grid-cols-1 px-4 md:px-[3%] w-full gap-1 lg:gap-10 lg:grid-cols-2">
                  <div>
                    <div className="flex w-full  justify-start items-center ">
                      <div className="flex w-full items-center py-1 md:py-2 ">
                        <div
                          onClick={() => handleActiveTab("SMS")}
                          className="text-[#6D6D6D] flex border border-[#6D6D6D] rounded-l-full md:text-xl lg:text-[22px] md:font-normal text-[8px] cursor-pointer px-3 py-2 md:px-4 text-center font-bold items-center justify-center"
                          style={{
                            ...typography,
                            color: activeTab === "SMS" ? "#FFFFFF" : "#6D6D6D",
                            backgroundColor:
                              activeTab === "SMS" ? "#631363" : "transparent",
                          }}>
                          SMS
                        </div>
                        <div
                          onClick={() => handleActiveTab("Rating Page")}
                          className="text-[#6D6D6D] md:text-xl lg:text-[22px] px-3 py-2 md:px-4 md:font-normal font-bold text-[8px]  flex border border-[#6D6D6D] rounded-r-full cursor-pointer  text-center  items-center justify-center"
                          style={{
                            ...typography,
                            color:
                              activeTab === "Rating Page"
                                ? "#FFFFFF"
                                : "#6D6D6D",
                            backgroundColor:
                              activeTab === "Rating Page"
                                ? "#631363"
                                : "transparent",
                          }}>
                          Rating Page
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full gap-3">
                      {" "}
                      <div className="text-[#6D6D6D]  text-[10px] pt-2 md:pt-4 md:text-xl lg:text-[22px] md:font-normal font-bold leading-3 tracking-tight md:leading-5 lg:leading-6">
                        The Follow-up SMS is only sent if the recipient
                        doesn&apos;t click through to a review site.
                      </div>
                      <div className="pt-3 flex items-center gap-1 py-2 lg:py-6 lg:gap-3">
                        <Switch />
                        <Label className="text-[10px] text-[#6D6D6D] md:text-xl lg:text-[22px] md:font-normal leading-3 tracking-tight font-bold">
                          Enable Follow-up Email (12 hours after first contact)
                        </Label>
                      </div>
                      <div className=" flex w-full gap-2  items-center justify-start rounded-2xl py-2 md:py-6 bg-[#C6C6C6]">
                        <div className="w-[1.9px] h-[39.2px] md:h-[70px] md:w-[3px] flex justify-start rounded-full shrink-0 bg-[#631363] fill-[#631363]" />
                        <div className="text-[10px] text-[#6D6D6D] md:text-xl lg:text-[22px] md:font-normal py-2 md:py-4 leading-3 tracking-tight font-bold">
                          Reminder: Follow-up SMSes cost the same number of
                          credits as the first message. If you have insufficient
                          credits no Follow-up SMS will be sent.
                        </div>
                      </div>
                      <div className="text-[10px] text-[#6D6D6D] md:text-xl  pt-2 md:pt-6 lg:text-[22px] md:font-normal leading-3 tracking-tight font-bold">
                        SMS Text
                      </div>
                      <TextEditor />
                      <div className="text-[10px] text-[#6D6D6D] md:text-lg lg:text-[20px] md:font-normal leading-3 tracking-tight font-bold">
                        {text}
                      </div>
                    </div>
                  </div>
                  <div className="w-full pr-0 md:pr-4 pt-2 lg:pt-0">
                    <PhoneLayout />
                  </div>
                </div>
              </div>
              <div className=" flex justify-end w-full px-[5%] py-4 lg:py-6">
                <Button
                  variant="outline"
                  onClick={handleNextPage}
                  className=" bg-[#40F440] font-bold text-[#27272D]">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full md:hidden justify-center mt-10 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default SmsSettings;
