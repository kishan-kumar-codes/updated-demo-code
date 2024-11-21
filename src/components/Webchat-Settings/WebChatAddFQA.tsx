"use client";
import React from "react";
import Header from "../Reputation-mobile/Header";
import ChatDropDown from "./ChatDropDown";
import WebChatFaqQuestionCard from "./WebChatFaqQuestionCard";
import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useWebChatSelectors from "@/hooks/useWebChatSelector";

const WebChatAddFQA = () => {
  const members = [
    { value: "option1", label: "Add FAQs" },
    { value: "option2", label: "Add an FAQ Bulk Import" },
  ];

  const { faq } = useWebChatSelectors();

  // Callback function for handling member selection
  const handleSelect = React.useCallback(
    ({ label, value }: { label: string; value: string }) =>
      console.log("Selected option:", { label, value }),
    []
  );
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-[#F4F4F4]">
      <CitationNavbar heading="Webchat Settings" isHeaderVisible={false} />
      <div className="flex flex-col w-full pt-4 justify-center items-center h-full">
        <div className="flex flex-col gap-7 justify-center items-center w-full">
          {/* <Header title={"Webchat Settings"} displayName=" Webchat Settings" /> */}
          <div className="flex flex-col gap-2 w-[95%] px-4 h-full min-h-[500px]">
            <div className="flex justify-between items-center   w-full">
              <span className="text-[#6D6D6D] text-xl lg:text-[38.02px] font-bold leading-normal">
                82 FAQs
              </span>
              {/* <ChatDropDown
                options={members}
                onSelect={handleSelect}
                width="130px"
                bgColor="none"
                color="#631363"
                border="border-2 font-bold border-[#631363] p-1 rounded-lg shadow-lg"
              /> */}
              <Select>
                <SelectTrigger className="w-[130px] border text-[#631363] font-bold border-[#631363]">
                  <SelectValue
                    className="font-bold lg:text-[22px] text-[#631363]"
                    placeholder="Select a item"
                  />
                </SelectTrigger>
                <SelectContent className="bg-white placeholder:font-bold text-[#631363]">
                  <SelectGroup>
                    <SelectItem className="font-bold " value="faq">
                      Add an FAQ
                    </SelectItem>
                    <SelectItem className="font-bold" value="bulk">
                      Add an FAQ <br /> Bulk Import
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3 w-full">
              {faq.map((item, index) => (
                <WebChatFaqQuestionCard
                  key={index}
                  QuesNum={`Q${index + 1}`}
                  Question={item.qus}
                  Answer={item.ans}
                  location={item.location}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center mt-10 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default WebChatAddFQA;
