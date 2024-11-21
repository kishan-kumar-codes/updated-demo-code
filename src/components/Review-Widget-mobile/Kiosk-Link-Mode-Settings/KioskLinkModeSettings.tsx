"use client";
// import { HeaderBarMobile } from "@/components/citations-builder/HeadBar";
import Header from "@/components/Reputation-mobile/Header";
import React, { useState } from "react";

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
import LoadingTab from "../Landing-Page-Settings/LoadingTab";
import CircleNumList from "../CircleNumList";
import { Button } from "@/components/ui/button";
import ReviewModel from "../Review-Sites/ReviewModel";
import { useRouter } from "next/navigation";
const typography: React.CSSProperties = {
  color: "#631363",
  fontFamily: "Arial",
};
const KioskLinkModeSettings = () => {
  const [activeTab, setActiveTab] = useState("Rating Page");

  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const openModal = () => setShowModal(true);

  // Function to close the modal
  const closeModal = () => setShowModal(false);

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };
  const tabOptions = [
    { label: "Rating Page", value: "Rating Page" },
    { label: "Feedback Page", value: "Feedback Page" },
    { label: "Positive Feedback Step", value: "Positive Feedback Step" },
    { label: "Negative Feedback Step", value: "Negative Feedback Step" },
  ];

  const text = `You can use {{BusinessName}} as a placeholder in your
rating page text. {{BusinessName}} will be taken from
Reputation Manager report settings.`;

  const businesstext = `How likely is it that you would recommend
{{BusinessName}} to a friend or colleague?`;

  return (
    <div className="flex flex-col justify-center items-center w-full bg-[#F4F4F4]">
      <CitationNavbar heading="Review Widget" isHeaderVisible={false} />
      <div className="flex flex-col w-full justify-center items-center   ">
        <div className="flex flex-col gap-7 justify-center items-center w-full   bg-[#F4F4F4]">
          <div className="flex flex-col w-[90%] pt-2 md:pt-8">
            <div className="flex rounded-3xl z-10 justify-start w-full bg-[#E0E0E0]">
              <div className="flex flex-col w-full  gap-4">
                <div className="bg-[#631363] pl-[5%] md:pl-[3%] md:text-2xl lg:text-[26px] md:font-normal text-white font-[Arial] text-[16px] font-bold flex  w-full rounded-2xl py-2">
                  Kiosk & Link Mode Settings
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 w-full gap-2 lg:gap-8 pt-0  px-4 lg:px-8">
                  {" "}
                  <div className="col-span-1 lg:col-span-3">
                    <div className="pb-2 pt-2 md:pb-6">
                      <LoadingTab
                        options={tabOptions}
                        activeTab={activeTab}
                        onTabChange={handleActiveTab}
                      />
                    </div>
                    <div className="text-[#6D6D6D] py-2 md:py-4 md:pt-0 text-[10px] md:text-lg w-full md:w-[85%] tracking-tight lg:text-[20px] md:font-normal font-bold leading-3 md:leading-5 lg:leading-6">
                      These settings are applied to both Kiosk Mode and Link
                      Mode.
                    </div>
                    <div className="text-[#6D6D6D] py-2 md:py-4 md:pt-0 text-[10px] md:text-lg w-full md:w-[85%] tracking-tight lg:text-[20px] md:font-normal font-bold leading-3 md:leading-5 lg:leading-6">
                      Kiosk Mode allows you to request feedback from customers
                      on a tablet or kiosk at your business location.
                    </div>
                    <div className="text-[#6D6D6D] py-2 md:py-4 md:pt-0 text-[10px] md:text-lg w-full md:w-[85%] tracking-tight lg:text-[20px] md:font-normal font-bold leading-3 md:leading-5 lg:leading-6">
                      Link Mode generates a link that can be used and shared
                      anywhere such as on marketing materials, business cards,
                      and in email signatures.
                    </div>
                    <div
                      className="pb-1 md:text-xl lg:text-[22px] md:font-normal py-2 md:py-3 text-xs font-bold"
                      style={{
                        ...typography,
                        color: "#6D6D6D",
                      }}>
                      Introductory Text:
                    </div>
                    <div className="flex w-full min-h-20 rounded-xl bg-[#F4F4F4]">
                      <TextEditor />
                    </div>
                    <div className="text-[#6D6D6D] py-1 pb-2 text-[10px] md:text-lg lg:text-[20px] md:font-normal md:py-4 font-bold leading-normal">
                      {text}
                    </div>
                  </div>
                  <div className="col-span-1 lg:col-span-2 pb-4 ">
                    <div className="w-full flex flex-col gap-2 pt-2">
                      <div className="w-full flex flex-col gap-2 bg-[#F4F4F4] rounded-t-2xl p-4">
                        <ReviewWidgetFileUpload />
                        <hr className="my-2 border-[#E0E0E0]" />
                        <div className="w-full flex flex-col gap-1 justify-center items-center md:gap-2">
                          <div className="text-[#6D6D6D] py-1 md:py-4 w-full md:w-[65%] text-[12px] md:text-lg lg:text-[20px] font-bold md:font-normal">
                            How likely is it that you would recommend
                            BusinessName to a friend or colleague?
                          </div>
                        </div>
                        <CircleNumList isChecked={true} />
                        <div className="w-full flex justify-between items-center py-1 md:py-4">
                          <div className="text-[#6D6D6D] text-[12px] md:text-lg lg:text-[20px] font-normal">
                            1 - Not Likely
                          </div>
                          <div className="text-[#6D6D6D] text-[12px] md:text-lg lg:text-[20px] font-normal">
                            10 - Very Likely
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button
                            onClick={openModal}
                            variant="outline"
                            className="bg-[#40F440] font-bold">
                            Next
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showModal && <ReviewModel closeModal={closeModal} />}
        </div>
        <div className="flex w-full justify-center md:hidden mt-10 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default KioskLinkModeSettings;
