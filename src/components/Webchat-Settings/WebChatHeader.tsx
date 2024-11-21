import React, { useCallback, useEffect, useRef, useState } from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import HeadBar from "../citations-builder/HeadBar";
import { WebchatSettingIcon4Svg } from "@/svgs/Webchat-Settings/svgs";
import ChatDropDown from "./ChatDropDown";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setWebChat } from "@/store/slices/webChatSettingSlice";
import useWebChatSelectors from "@/hooks/useWebChatSelector";
import WebChatView from "./WebChatView";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WebChatHeader = () => {
  const [webHeader, setWebHeader] = React.useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    uploadAvtar,
    showWebChatBubbleMessage,
    userName,
    windowsOpens,
    teamheader,
    message,
  } = useWebChatSelectors();

  const dispatch = useDispatch();
  // const members = [
  //   { value: "option1", label: "When user clicks" },
  //   { value: "option2", label: "Always Open" },
  //   { value: "option3", label: "Automatically after 5 seconds" },
  //   { value: "option4", label: "Automatically after 10 seconds" },
  //   { value: "option5", label: "Automatically after 15 seconds" },
  // ];

  // Callback function for handling member selection
  const handleSelect = useCallback(
    (value: string) => {
      // Dispatch the value selected by the user
      dispatch(
        setWebChat({
          windowsOpens: value,
        })
      );
    },
    [dispatch]
  );

  const [windowOpenTimeout, setWindowOpenTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  useEffect(() => {
    const autoOpenValue = "true"; // Initial value to show the window
    dispatch(setWebChat({ windowsOpens: autoOpenValue }));

    // Automatically dispatch "open after 5 seconds"
    const timerId = setTimeout(() => {
      const autoOpenAfter5Seconds = "open after 5 seconds";
      dispatch(setWebChat({ windowsOpens: autoOpenAfter5Seconds }));
    }, 5000); // 5 seconds

    // Cleanup on unmount
    return () => clearTimeout(timerId);
  }, [dispatch]);

  const handleWindowOpen = (value: string) => {
    // Clear any existing timeout to prevent multiple dispatches
    if (windowOpenTimeout) {
      clearTimeout(windowOpenTimeout);
    }

    // Reset to false before handling new value
    dispatch(setWebChat({ windowsOpens: "false" }));

    // Handle different cases based on selected value
    if (value === "1") {
      // When user clicks
      dispatch(setWebChat({ windowsOpens: "false" }));
    } else if (value === "true") {
      // Always Open
      dispatch(setWebChat({ windowsOpens: "true" }));
    } else {
      // For automatic opening based on delay
      const delayMap: { [key: string]: number } = {
        "5": 5000, // Automatically after 5 seconds
        "10": 10000, // Automatically after 10 seconds
        "15": 15000, // Automatically after 15 seconds
      };

      const delay = delayMap[value];
      if (delay) {
        const timeout = setTimeout(() => {
          dispatch(setWebChat({ windowsOpens: "true" }));
        }, delay);

        setWindowOpenTimeout(timeout);
      }
    }
  };

  // Cleanup timeout if component unmounts or value changes
  useEffect(() => {
    return () => {
      if (windowOpenTimeout) {
        clearTimeout(windowOpenTimeout);
      }
    };
  }, [windowOpenTimeout]);

  const handleHeaderNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      setWebChat({
        userName: event.target.value,
      })
    );
  };

  const handleHeaderChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(
      setWebChat({
        teamheader: event.target.value,
      })
    );
  };
  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(
      setWebChat({
        showWebChatBubbleMessage: event.target.value,
      })
    );
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(
          setWebChat({
            uploadAvtar: reader.result as string,
          })
        );
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center rounded-2xl w-full bg-[#E0E0E0] h-full">
      <div className="flex h-full flex-col w-full gap-4 lg:gap-8 pt-2 p-4 lg:p-8">
        <div className="flex items-center justify-start lg:justify-between">
          {" "}
          <div className="text-[#631363] text-sm md:text-lg lg:text-[22px] pt-2 font-bold leading-normal">
            Team Avatar
          </div>
          <div className="flex gap-3 lg:gap-16 items-center pl-4 lg:pl-0 pt-2">
            <div className="flex flex-col items-center gap-1">
              <div
                onClick={() => {
                  fileInputRef.current?.click(); // Trigger file input on click
                }}
                className={`cursor-pointer flex justify-center items-center  w-14 h-14 bg-[#F4F4F4] rounded-full`}>
                {uploadAvtar !== "" ? (
                  <Image
                    src={uploadAvtar}
                    width={100}
                    height={100}
                    alt="Uploaded Avtar"
                    className="w-14 h-14 rounded-full"
                  />
                ) : (
                  <WebchatSettingIcon4Svg color={"#6D6D6D"} />
                )}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleImageUpload} // Handle image upload
                />
              </div>
              <div className="text-[#631363] font-bold text-[10px] md:text-xs leading-[normal]">
                Upload Image
              </div>
            </div>
            <input
              type="text"
              placeholder="Name"
              value={userName}
              onChange={handleHeaderNameChange}
              className="flex w-28 h-10 p-2 items-center pl-5 rounded-2xl focus:outline-none bg-[#F4F4F4] text-[#6D6D6D] text-xs font-normal"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between   gap-2">
          <div className="text-[#631363] text-sm md:text-lg lg:text-[22px] font-bold leading-normal">
            Window Opens
          </div>
          <div className="lg:max-w-xs w-full">
            <Select onValueChange={handleWindowOpen}>
              <SelectTrigger className="w-[180px] bg-[#F4F4F4] rounded-lg">
                <SelectValue
                  className="text-[#6D6D6D]"
                  placeholder="Always Open"
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem className="text-[#6D6D6D]" value="1">
                  When user Click
                </SelectItem>
                <SelectItem className="text-[#6D6D6D]" value="true">
                  Always Open
                </SelectItem>
                <SelectItem className="text-[#6D6D6D]" value="5">
                  Automatically after 5 seconds
                </SelectItem>
                <SelectItem className="text-[#6D6D6D]" value="10">
                  Automatically after 10 seconds
                </SelectItem>
                <SelectItem className="text-[#6D6D6D]" value="15">
                  Automatically after 15 seconds
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2">
          <div className="text-[#631363] text-sm md:text-lg lg:text-[22px] font-bold leading-normal">
            Header
          </div>
          <div className="flex w-full lg:max-w-xs h-24">
            <textarea
              value={teamheader}
              onChange={handleHeaderChange}
              className="w-full p-3 focus:outline-none pl-3 rounded-2xl text-[#6D6D6D] text-sm font-normal h-full bg-[#F4F4F4] resize-none"
              placeholder="Let’s chat"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between  items-start lg:items-center  gap-2">
          <div className="text-[#631363] text-sm md:text-lg lg:text-[22px] font-bold leading-normal">
            Message
          </div>
          <div className="flex w-full h-24 lg:max-w-xs pb-4">
            <textarea
              value={showWebChatBubbleMessage}
              onChange={handleMessageChange}
              className="w-full p-3 focus:outline-none pl-3 rounded-2xl text-[#6D6D6D] text-sm font-normal h-full bg-[#F4F4F4] resize-none"
              placeholder="Have a question? Ask us, we are here to help!"
            />
          </div>
        </div>
      </div>

      <div className="min-w-[33%] border-l-2 border-[#CCCCCC] hidden relative justify-center flex-col lg:flex">
        <div className="w-full md:text-[24px] text-[32px] absolute top-6 text-[#6D6D6D] pt-4 font-bold text-center">
          Webchat Settings
        </div>
        <div className="py-20">
          <WebChatView />
        </div>
      </div>
    </div>
  );
};

export default WebChatHeader;
