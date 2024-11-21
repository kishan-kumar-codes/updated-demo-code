"use client";
// import { HeaderBarMobile } from "@/components/citations-builder/HeadBar";
import Header from "@/components/Reputation-mobile/Header";
import React, { useState } from "react";
import LoadingTab from "./LoadingTab";
import InputBarField from "@/components/citations-builder/InputBarField";
import TextEditor from "../Email-Settings/TextEditor";
import ReviewWidgetFileUpload from "../ReviewWidgetFIleUpload";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
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
import { Label } from "@/components/ui/label";
const typography: React.CSSProperties = {
  color: "#631363",
  fontFamily: "Arial",
};
const NegativeLandingSettings = ({ options, activeTab, onTabChange }: any) => {
  const [text, setText] = useState("");

  const handeCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const textData = `You can use {{FirstName}} and {{BusinessName}} as
placeholders in your SMS text. {{FirstName}} will be taken
from the CSV file. {{BusinessName}} will be taken from
Reputation Manager report settings.`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 w-full gap-2 lg:gap-8 pt-0 md:pt-2  px-4 lg:px-8">
      {" "}
      <div className="col-span-1 lg:col-span-3">
        <div className="py-2 md:py-6">
          <LoadingTab
            options={options}
            activeTab={activeTab}
            onTabChange={onTabChange}
          />
        </div>
        <div className="text-[#6D6D6D] pb-2 pt-2 md:pt-0 text-[10px] md:text-xl w-full md:w-[85%] tracking-tight lg:text-[22px] md:font-normal font-bold leading-3 md:leading-6 lg:leading-7">
          After leaving additional feedback, customers will be invited to leave
          a public review on your chosen external site(s).
        </div>
        <div className="flex items-center gap-2 py-2 md:py-6">
          <Switch />
          <Label className=" text-[#6D6D6D] text-xs md:text-xl w-full tracking-tight lg:text-[22px] md:font-normal font-bold">
            {" "}
            Enable Voucher
          </Label>
        </div>
        <div className="flex flex-col items-center gap-2 py-2">
          <Label className=" text-[#6D6D6D] text-xs md:text-xl w-full tracking-tight lg:text-[22px] md:font-normal font-bold">
            {" "}
            Voucher Code
          </Label>
          <Input className="rounded-2xl" />
        </div>
        <div
          className="pb-1 md:text-2xl lg:text-[28px] md:font-normal font-bold py-2 md:py-3 text-xs"
          style={{
            ...typography,
            color: "#6D6D6D",
          }}>
          Thank You Text:
        </div>
        <div className="flex w-full min-h-20 rounded-xl bg-[#F4F4F4]">
          <TextEditor />
        </div>
        <div className="text-[#6D6D6D] py-2 pb-2 text-[10px] md:text-lg lg:text-[20px] md:font-normal md:py-4 font-bold leading-3 md:leading-6 lg:leading-7">
          {textData}
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2">
        <div className="w-full flex flex-col gap-2 bg-[#F4F4F4] rounded-2xl p-4">
          <ReviewWidgetFileUpload />
          <hr className="my-2 border-[#E0E0E0]" />
          <div className="w-full flex flex-col justify-center py-2 md:py-4 items-center gap-3">
            <div className="text-[#6D6D6D] tracking-tight  text-xs  text-start md:text-xl lg:text-[22px] md:font-normal w-full  px-2 font-bold leading-4">
              Thank you for your feedback.
            </div>
            <div className="text-[#6D6D6D] py-2 tracking-tight text-xs  md:text-xl lg:text-[22px] md:font-normal leading-3 md:leading-6 lg:leading-7  w-full  px-2 font-normal">
              We take your feedback very seriously and will be making sure we
              improve our service based on your comments. We appreciate the time
              you have taken to share your thoughts on your experience.
            </div>
            <div className="text-[#6D6D6D]  tracking-tight text-xs  md:text-xl lg:text-[22px] md:font-normal  w-full  px-2 font-normal leading-normal">
              If you like, you can share your feedback on one of these sites:
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
        </div>
      </div>
    </div>
  );
};

export default NegativeLandingSettings;
