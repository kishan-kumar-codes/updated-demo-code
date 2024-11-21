"use client";
import React from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";

import HeadBar from "../citations-builder/HeadBar";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import ChatDropDown from "./ChatDropDown";
import ProfileQA from "./ProfileQA";
import WebChatFQA from "./WebChatFQA";
import useWebChatSelectors from "@/hooks/useWebChatSelector";
import { useDispatch } from "react-redux";
import { setWebChat } from "@/store/slices/webChatSettingSlice";

const WebChatBot = () => {
  const dispatch = useDispatch();
  const { automatedResponse, botName } = useWebChatSelectors();
  const [chatBot, setChatBot] = React.useState(false);
  // const members = [
  //   { value: "option1", label: "Bluffton - RB" },
  //   { value: "option2", label: "Bluffton - RB" },
  // ];

  // Callback function for handling member selection
  const handleSelect = React.useCallback(
    ({ label, value }: { label: string; value: string }) =>
      console.log("Selected option:", { label, value }),
    []
  );
  const handleBotActiveChange = (value: boolean) => {
    dispatch(
      setWebChat({
        botName: value,
      })
    );
  };
  const [webChattabActive, setWebChatTabActive] =
    React.useState<string>("profile");
  const handleWebChatTab = (value: string) => setWebChatTabActive(value);
  return (
    <div className="flex flex-col justify-center rounded-2xl bg-[#E0E0E0] items-center w-full h-full">
      <div className="flex rounded-3xl min-h-[160px] p-0 lg:p-10 justify-start px-5  w-full bg-[#E0E0E0] py-3">
        <div className="flex flex-col w-full gap-2 pt-2">
          <div className="w-full flex justify-between">
            <Label
              htmlFor="airplane-mode"
              className="text-[#631363] text-sm md:text-lg lg:text-[24px] font-bold leading-normal">
              Spark
            </Label>
            <Switch
              checked={botName}
              onCheckedChange={handleBotActiveChange}
              id="open-webchat"
            />
          </div>
          <div className="w-full gap-3 flex-col h-full flex">
            <span className="text-[#6D6D6D] text-[11px] md:text-base lg:text-[22px] w-full lg:w-[80%] font-bold leading-normal md:leading-5 lg:leading-7">
              Have Spark automatically respond to your customers. When Spark
              cannot answer a question, a default message will be sent.
              <strong className="text-[#631363]">
                {" "}
                Edit the information in your profile.
              </strong>
            </span>
            <div className="flex flex-col gap-2 lg:flex-row justify-between">
              <div className="text-[#631363] lg:whitespace-nowrap text-sm  md:text-lg flex mt-2 font-bold lg:text-[24px] leading-normal">
                Preview Automated Responses For
              </div>
              <div className="lg:max-w-[400px] w-full">
                {" "}
                <ChatDropDown
                  options={automatedResponse}
                  onSelect={handleSelect}
                />
              </div>
            </div>
            <div className="flex justify-center my-1 items-center w-full lg:w-[35%] h-10 gap-1">
              <div
                className={`flex justify-center text-[#3D3D3D] items-center cursor-pointer w-1/2 h-10 md:text-base lg:text-[22px] font-normal gap-1 ${webChattabActive === "profile" ? "bg-[#40F440]" : "bg-[#F4F4F4]"} rounded-l-xl`}
                onClick={() => handleWebChatTab("profile")}>
                Profile Q&A
              </div>
              <div
                className={`flex justify-center text-[#3D3D3D]  items-center cursor-pointer w-1/2 h-10 font-semibold gap-1 md:text-base lg:text-[22px] ${webChattabActive === "fqa" ? "bg-[#40F440]" : "bg-[#F4F4F4]"} rounded-r-xl`}
                onClick={() => handleWebChatTab("fqa")}>
                FAQ
              </div>
            </div>
            {webChattabActive === "profile" ? (
              <>
                {" "}
                <span className="text-[#631363] text-sm md:text-lg flex  font-bold leading-normal">
                  Edit Profile Q&A In Profile Settings
                </span>
              </>
            ) : (
              ""
            )}
            {webChattabActive === "profile" ? <ProfileQA /> : <WebChatFQA />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebChatBot;
