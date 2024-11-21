"use client";
// import { HeaderBarMobile } from "@/components/citations-builder/HeadBar";
import InputBarField from "@/components/citations-builder/InputBarField";
import Header from "@/components/Reputation-mobile/Header";
import React, { useState } from "react";
import EmailTabSettings from "./EmailTabSettings";
import FollowUpEmailSettings from "./FollowUpEmailSettings";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const WidgetEmailSetting = ({
  setCurrentTab,
}: {
  setCurrentTab: (email: string) => void;
}) => {
  const [activeTab, setActiveTab] = useState("Email");

  const handleNextPage = () => {
    setCurrentTab("sms");
  };
  return (
    <div className="flex justify-center flex-col items-center bg-[#F4F4F4]  w-full">
      <CitationNavbar heading="Review Widget" isHeaderVisible={false} />
      <div className="flex flex-col w-full justify-center items-start h-full bg-[#F4F4F4] ">
        <div className="flex flex-col gap-2 md:gap-7 justify-center items-center w-full h-full ">
          {/* <Header
            title={" Review Widget"}
            displayName=" Review-Email-Settings"
          /> */}
          .
          <div className="flex flex-col w-[90%]  h-full ">
            {/* <HeaderBarMobile title="Email Settings" /> */}
            <div className="flex flex-col rounded-3xl z-10 justify-start w-full bg-[#E0E0E0]">
              <div className="flex flex-col w-full gap-2 ">
                <div className="bg-[#631363] pl-[5%] md:pl-[3%] text-white font-[Arial] text-[16px] md:text-2xl lg:text-[26px] md:font-normal font-bold flex  w-full rounded-2xl py-2">
                  Email Settings
                </div>{" "}
                <EmailTabSettings
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <FollowUpEmailSettings
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>
              <div className=" flex justify-end w-full px-[5%] py-4 lg:py-10">
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

        <div className="flex w-full justify-center md:hidden mt-10 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default WidgetEmailSetting;
