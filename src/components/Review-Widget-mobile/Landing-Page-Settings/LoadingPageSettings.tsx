"use client";
// import { HeaderBarMobile } from "@/components/citations-builder/HeadBar";
import Header from "@/components/Reputation-mobile/Header";
import NegativeLandingSettings from "./NegativeLanding";
import React, { useState } from "react";
import LoadingTab from "./LoadingTab";
import InputBarField from "@/components/citations-builder/InputBarField";
import TextEditor from "../Email-Settings/TextEditor";
import ReviewWidgetFileUpload from "../ReviewWidgetFIleUpload";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";
import {
  GoogleReviewSvg,
  // GoogleSideReviewSvgs,
} from "@/svgs/review-dashboard/svgs";
import { FbSvgs, GoogleSvgs } from "@/svgs/seo-screens/svgs";
import {
  R2IconFbMobile,
  R2IconGoogleMobile,
} from "@/icons/reviewRequest-desktop/icons";
import ToggleSwitchComponent from "../Email-Settings/SwitchComponent";
import { Button } from "@/components/ui/button";
const typography: React.CSSProperties = {
  color: "#631363",
  fontFamily: "Arial",
};
const LoadingPageSettings = ({
  setCurrentTab,
}: {
  setCurrentTab: (loading: string) => void;
}) => {
  const [activeTab, setActiveTab] = useState("Positive Landing Page 1");
  const [text, setText] = useState("");

  const handeCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };
  const tabOptions = [
    { label: "Positive Landing Page 1", value: "Positive Landing Page 1" },
    { label: "Positive Landing Page 2", value: "Positive Landing Page 2" },
    { label: "Negative Landing Page 1", value: "Negative Landing Page 1" },
    { label: "Negative Landing Page 2", value: "Negative Landing Page 2" },
  ];

  const handleNextPage = () => {
    setCurrentTab("kiosk");
  };

  const textData = `You can use {{FirstName}} and {{BusinessName}} as
placeholders in your SMS text. {{FirstName}} will be taken
from the CSV file. {{BusinessName}} will be taken from
Reputation Manager report settings.`;

  return (
    <div className="flex justify-center flex-col items-center w-full h-full bg-[#F4F4F4]">
      <CitationNavbar heading="Review Widget" isHeaderVisible={false} />
      <div className="flex flex-col w-full justify-center items-center h-full  ">
        <div className="flex flex-col gap-7 justify-center items-center w-full h-full bg-[#F4F4F4] ">
          {/* <Header
            title={" Review Widget"}
            displayName=" Loading-Page-Settings"
          /> */}
          <div className="flex flex-col w-[93%]    h-full py-2 md:py-6 ">
            {/* <HeaderBarMobile title="Loading Page Settings" /> */}

            <div className="flex rounded-3xl z-10 justify-start h-full w-full bg-[#E0E0E0] pb-8">
              <div className="flex flex-col w-full h-full gap-4">
                <div className="bg-[#631363] pl-[5%] md:pl-[3%] md:text-2xl lg:text-[26px] md:font-normal text-[16px] font-bold text-white font-[Arial] flex  w-full rounded-2xl py-2">
                  Landing Page Settings
                </div>
                {activeTab === "Positive Landing Page 1" ? (
                  <div className="grid grid-cols-1 lg:grid-cols-5 w-full gap-2 lg:gap-8 pt-0 md:pt-2  px-4 lg:px-8">
                    {" "}
                    <div className="col-span-1 lg:col-span-3">
                      <div className="py-2 lg:py-6">
                        <LoadingTab
                          options={tabOptions}
                          activeTab={activeTab}
                          onTabChange={handleActiveTab}
                        />
                      </div>
                      <div className="text-[#6D6D6D] pb-2 pt-2 lg:pt-0 text-[10px] md:text-xl w-full md:w-[85%] tracking-tight lg:text-[22px] md:font-normal font-bold leading-3 md:leading-6 lg:leading-7">
                        After leaving additional feedback, customers will be
                        invited to leave a public review on your chosen external
                        site(s).
                      </div>
                      <div
                        className="pb-1 md:text-2xl lg:text-[28px] md:font-normal py-2 md:py-3 text-xs font-bold"
                        style={{
                          ...typography,
                          color: "#6D6D6D",
                        }}>
                        Thank You Text:
                      </div>
                      <div className="flex w-full min-h-20 rounded-xl bg-[#F4F4F4]">
                        <TextEditor />
                      </div>
                      <div className="text-[#6D6D6D] py-1 pb-2 text-[10px] md:text-lg lg:text-[20px] md:font-normal md:py-4 font-bold leading-3 md:leading-6 lg:leading-6">
                        {textData}
                      </div>
                    </div>
                    <div className=" col-span-1 lg:col-span-2">
                      <div className="w-full flex flex-col gap-2 bg-[#F4F4F4] rounded-2xl p-4">
                        <ReviewWidgetFileUpload />
                        <hr className="my-2 border-[#E0E0E0]" />
                        <div className="w-full flex flex-col justify-center items-center gap-3">
                          <div className="text-[#6D6D6D] tracking-tight text-center text-xs  md:text-xl lg:text-[22px] md:font-normal w-full  px-2 font-bold leading-4">
                            Thank you for your feedback - we really appreciate
                            it.
                          </div>
                          <div className="text-[#6D6D6D]  tracking-tight text-xs  md:text-xl lg:text-[22px] md:font-normal  w-full text-center px-2 font-normal leading-normal">
                            We’d love it if you left a review on these sites:
                          </div>
                          <div className=" flex flex-shrink-0 justify-center pl-2 pt-2 md:pt-8 gap-5 px-2 items-center w-full">
                            <div>
                              <R2IconGoogleMobile />
                            </div>
                            <div className=" w-fit flex px-[53px] lg:px-8  py-2    items-center justify-center shrink-0 bg-[#631363] rounded-3xl md:rounded-xl text-white text-center text-xs md:text-xl lg:text-2xl md:font-normal tracking-tight font-bold leading-normal">
                              Review us on Google
                            </div>
                          </div>
                          <div className=" flex flex-shrink-0 justify-center pl-2 gap-5 px-2 items-center w-full">
                            <div>
                              <R2IconFbMobile />
                            </div>
                            <div className=" w-fit px-[46px] lg:px-5 py-2 flex   items-center justify-center shrink-0 bg-[#631363] rounded-3xl md:rounded-xl text-white text-center text-xs md:text-xl lg:text-2xl md:font-normal tracking-tight font-bold leading-normal">
                              Review us on Facebook
                            </div>
                          </div>
                        </div>
                        <div className="w-full flex flex-col px-[5%] pt-2 md:pt-10">
                          <div className="text-[#6D6D6D] text-[10px] md:text-xl py-1 w-full md:font-normal tracking-tight lg:text-[22px]  font-bold leading-normal">
                            Your Feedback Text:
                          </div>
                          <div className="text-[#6D6D6D] text-[10px] md:text-xl w-full md:font-normal tracking-tight lg:text-[22px]  font-bold leading-normal">
                            Please Provide Your Feedback Here
                          </div>
                        </div>
                        <div className="px-[5%] flex flex-col gap-4">
                          <textarea
                            className="w-full h-[120px]  rounded-xl p-3 bg-[#E0E0E0] focus:outline-none"
                            onChange={(e) => setText(e.target.value)}
                          />
                          <div
                            className="text-[#631363] text-xs md:text-xl md:font-normal tracking-tight lg:text-[22px]  font-bold leading-normal w-24 md:w-fit my-1 cursor-pointer  hover:bg-[#918f8f] border border-[#631363] rounded-xl px-3 py-1"
                            onClick={handeCopy}>
                            COPY TEXT
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <NegativeLandingSettings
                    options={tabOptions}
                    activeTab={activeTab}
                    onTabChange={handleActiveTab}
                  />
                )}

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
        </div>
        <div className="flex w-full justify-center mt-10 md:hidden items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default LoadingPageSettings;
