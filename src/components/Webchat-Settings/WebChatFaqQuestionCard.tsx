"use client"; // Add this to ensure client-side rendering

import {
  EmojiSvgs,
  WebchatSettingLocationSvg,
} from "@/svgs/Webchat-Settings/svgs";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import ChatDropDown from "./ChatDropDown";
import { useDispatch } from "react-redux";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setWebChat } from "@/store/slices/webChatSettingSlice";
import useWebChatSelectors from "@/hooks/useWebChatSelector";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";

interface FaqProps {
  QuesNum: string;
  Answer?: string;
  Question: string;
  placeholder?: string;
  location: Array<string>;
  key?: number;
}
const WebChatFaqQuestionCard = ({
  QuesNum,
  Answer,
  Question,
  placeholder,
  location,
  key,
}: FaqProps) => {
  const dispatch = useDispatch();
  const { faq } = useWebChatSelectors();
  const [message, setMessage] = useState<string>("");
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false); // Emoji picker visibility state
  const handleEmojiSelect = (emoji: any) => {
    setMessage((prevMessage) => prevMessage + emoji.native);
    setEmojiPickerVisible(false); // Close the picker after selecting an emoji
  };
  const members = [
    { value: "option1", label: "Personalize" },
    { value: "option2", label: "Contact Address" },
    { value: "option3", label: "Order Status" },
    { value: "option4", label: "Order Number" },
  ];
  const members2 = [
    { value: "option1", label: "All Locations" },
    { value: "option2", label: "Contact Address" },
    { value: "option3", label: "Order Status" },
    { value: "option4", label: "Order Number" },
  ];

  // Callback function for handling member selection
  const handleSelect = React.useCallback(
    ({ label, value }: { label: string; value: string }) =>
      console.log("Selected option:", { label, value }),
    []
  );

  const handleQusChanege = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedFaq = faq.map((item) =>
      item.qus === Question ? { ...item, qus: event.target.value } : item
    );
    dispatch(setWebChat({ FAQ: updatedFaq }));
  };
  const handleAnsChanege = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedFaq = faq.map((item) =>
      item.qus === Question ? { ...item, ans: event.target.value } : item
    );
    dispatch(setWebChat({ FAQ: updatedFaq }));
  };

  const handleDeleteQuestion = () => {
    const updatedFaq = faq.filter((item) => item.qus !== Question);
    dispatch(setWebChat({ FAQ: updatedFaq }));
  };

  return (
    <div className="w-full flex px-0 lg:px-6" key={key}>
      <span className="text-[#631363] text-[13px] lg:text-[24px] font-bold leading-normal">
        {QuesNum}
      </span>
      <div className="w-full pl-2 gap-1 flex flex-col">
        <span className="text-[#6D6D6D] text-sm font-bold lg:text-[24px] leading-normal">
          {Question}
        </span>
        <span className="text-[#6D6D6D] flex gap-2 lg:text-[22px] items-center text-[10px] font-normal leading-normal">
          <WebchatSettingLocationSvg /> All Locations
        </span>
        <div className="w-full flex flex-col mt-3 p-4 gap-2 bg-[#FFF] rounded-xl">
          <div className="text-[#6D6D6D] flex text-[10px] lg:text-[22px] text-lg font-normal leading-normal">
            Answer
          </div>

          <div className="flex focus:outline-none rounded-xl resize-none bg-[#FFF] w-full lg:text-[24px] font-bold text-sm text-[#6D6D6D]">
            {Answer}
          </div>
        </div>
        <div className="flex justify-end w-full items-end gap-1 px-3 py-4">
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="text-xs font-bold leading-normal w-16 lg:px-8 lg:w-fit lg:text-[24px] my-1 cursor-pointer bg-[#40F440] rounded-lg px-3 py-2"
                type="button">
                Edit
              </button>
            </DialogTrigger>
            <div className="flex w-fit">
              <DialogContent className="w-[90%] flex-col flex bg-[#F4F4F4] rounded-2xl">
                <span className="text-[#6D6D6D] lg:text-[44px] text-xl font-bold leading-normal">
                  Edit FAQ
                </span>
                <div className="w-full mt-1 h-full flex flex-col">
                  <div className="w-full flex h-full flex-col gap-1">
                    <span className="text-[#6D6D6D] lg:text-[24px] text-xs font-bold leading-normal">
                      Question
                    </span>
                    <textarea
                      // placeholder="Testing Question 1"
                      value={Question}
                      onChange={handleQusChanege}
                      className="flex p-2 h-[70px] focus:outline-none rounded-xl lg:text-[24px] resize-none bg-[#FFF] w-full font-normal text-sm text-[#6D6D6D]"
                    />

                    <div className="relative justify-start flex flex-col items-center z-50 w-full">
                      <div className="text-[#6D6D6D] w-full text-xs lg:text-[24px] pt-2 font-bold leading-normal">
                        Answer
                      </div>
                      <textarea
                        placeholder="Answer Question 1"
                        rows={4}
                        onChange={handleAnsChanege}
                        value={Answer}
                        className="w-full  p-2 focus:outline-none pl-3 lg:text-[24px] rounded-2xl resize-none text-[#6D6D6D] text-sm font-normal leading-normal  bg-white"
                      />
                      <span
                        className=" absolute left-1 bottom-2 p-1 cursor-pointer"
                        onClick={() =>
                          setEmojiPickerVisible(!emojiPickerVisible)
                        }>
                        <EmojiSvgs />
                      </span>
                      <span
                        style={{ zIndex: 1000 }}
                        className="absolute w-1/2 right-1 bottom-0">
                        <ChatDropDown
                          options={members}
                          onSelect={handleSelect}
                          zIndex={50}
                          bgColor="#FFF"
                          color="#631363"
                        />
                      </span>
                      {emojiPickerVisible && (
                        <div className="flex z-50  -ml-28  ">
                          <Picker
                            data={data}
                            onEmojiSelect={handleEmojiSelect}
                            theme="light"
                          />
                        </div>
                      )}
                    </div>
                    <span className="text-[#6D6D6D] text-xs lg:text-[24px] pt-2 font-bold leading-normal">
                      Show On
                    </span>
                  </div>
                  <div>
                    <ChatDropDown
                      options={location.map((item) => ({
                        value: item,
                        label: item,
                      }))}
                      bgColor="#FFF"
                      zIndex={40}
                      onSelect={handleSelect}
                    />
                  </div>
                  <div className="flex justify-end w-full pt-4 items-center gap-3 px-3">
                    <DialogClose asChild>
                      <button
                        className=" text-xs font-bold leading-normal w-20 lg:px-6 my-1 lg:w-fit lg:text-[20px]  cursor-pointer bg-[#40F440]    rounded-lg px-3 py-2"
                        type="submit">
                        Save
                      </button>
                    </DialogClose>
                    <DialogClose asChild>
                      <button className=" text-xs font-bold leading-normal w-20 my-1 lg:px-6 lg:w-fit lg:text-[20px] text-white  cursor-pointer bg-[#BA0416]    rounded-lg px-3 py-2">
                        Cancel
                      </button>
                    </DialogClose>
                  </div>
                </div>
              </DialogContent>
            </div>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <button className="text-xs font-bold leading-normal w-20 lg:w-fit lg:text-[24px] my-1 text-white cursor-pointer bg-[#BA0416] rounded-lg px-3 lg:px-6 py-2">
                Delete
              </button>
            </DialogTrigger>
            <div className="w-fit justify-end items-end flex ">
              <DialogContent className="sm:max-w-md rounded-md bg-white w-[80%]">
                <DialogHeader>
                  <DialogTitle className="text-[#6D6D6D] lg:text-[24px]">
                    Delete {Question}
                  </DialogTitle>
                  <DialogDescription className="text-[#6D6D6D] py-4 text-base text-start">
                    Are you sure you want to delete this FAQ?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex gap-4 justify-between">
                  <DialogClose asChild>
                    <Button
                      className="bg-[#40F440] font-bold text-black"
                      type="button"
                      variant="secondary">
                      Cancel
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      className="bg-red-600 font-bold text-white"
                      onClick={handleDeleteQuestion}
                      type="button"
                      variant="secondary">
                      Delete
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default WebChatFaqQuestionCard;
