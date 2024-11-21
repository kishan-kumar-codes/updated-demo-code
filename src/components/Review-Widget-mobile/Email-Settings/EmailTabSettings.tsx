import InputBarField from "@/components/citations-builder/InputBarField";
import WidgetSwitch from "./WidgetSwitch";
import React, { useState } from "react";
import EmailTextEditor from "./TextEditor";
import TextEditor from "./TextEditor";
import RatingAndImgContainer from "./RatingAndImgContainer";
import { Button } from "@/components/ui/button";

const typography: React.CSSProperties = {
  color: "#631363",
};

interface WidgetSwitch {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const emailText = `You can use {{ FirstName }} and {{ BusinessName }} as placeholders in your email text. {{ FirstName }} will be taken from the CSV file. {{ BusinessName }} will be taken from Reputation Manager report settings.`;
// const [activeTab, setActiveTab] = useState("Email");
const EmailTabSettings = ({ activeTab, setActiveTab }: WidgetSwitch) => {
  return (
    <>
      {activeTab == "Email" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2 md:gap-6  lg:gap-10 pt-2 px-4 md:px-[3%]">
            {" "}
            <div className="w-full flex flex-col">
              <WidgetSwitch activeTab={activeTab} setActiveTab={setActiveTab} />
              <div className="text-[#6D6D6D]  text-[10px] pt-2 lg:pt-4 md:text-xl lg:text-[22px] md:font-normal font-bold leading-3 tracking-tight md:leading-5 lg:leading-6">
                Use the fields below to customize the first email message that
                we send.
              </div>
              <div
                className=" text-[14px] md:text-xl lg:text-[22px] md:font-normal pt-2 md:pt-6 font-bold"
                style={{ ...typography }}>
                Email Text
              </div>
              <label
                className="text-[10px] md:text-xl lg:text-[22px] py-2 md:py-3  md:font-normal text-[#6D6D6D] font-bold"
                htmlFor="citations">
                Email Subject:
              </label>
              <input
                type="text"
                id="citations"
                placeholder="Please tell us your thoughts"
                className={`  py-2 md:py-3  text-[10px] md:text-xl lg:text-[20px] md:font-normal md:px-3 px-1 w-full rounded-2xl focus:outline-none  placeholder:pl-4 bg-[#F4F4F4]`}
              />
              <div className="text-[#6D6D6D] leading-3 tracking-tight md:leading-5 lg:leading-6 text-[10px] md:text-lg lg:text-[20px] md:font-normal  py-4 font-bold">
                {emailText}
              </div>
              <div
                className=" text-[10px] md:text-xl lg:text-[22px] mt-0 md:mt-4 lg:mt-10 font-bold md:font-normal"
                style={{ ...typography, color: "#6D6D6D" }}>
                Email Introductory Text:
              </div>
              <div className="flex w-full my-2 md:my-3 rounded-xl bg-[#F4F4F4]">
                <TextEditor />
              </div>
              <div className="text-[#6D6D6D] text-[10px] md:text-lg lg:text-[20px] md:font-normal font-bold leading-3 tracking-tight md:leading-5 lg:leading-6">
                {emailText}
              </div>
            </div>
            <div>
              <div
                className="pt-2 pb-1 text-[10px] md:text-xl lg:text-[22px] font-bold md:font-normal"
                style={{ ...typography, color: "#6D6D6D" }}>
                Email Sign-Off Text (Optional):
              </div>
              <div className="flex w-full my-0 md:my-3 min-h-20 rounded-xl bg-[#F4F4F4]">
                <TextEditor />
              </div>
              <div className="text-[#6D6D6D] leading-3 tracking-tight py-2 lg:py-4 md:leading-5 lg:leading-6 text-[10px] md:text-lg lg:text-[20px] md:font-normal font-bold">
                {emailText}
              </div>
              <div className="w-full flex flex-col gap-2 my-4">
                <RatingAndImgContainer />
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default EmailTabSettings;
