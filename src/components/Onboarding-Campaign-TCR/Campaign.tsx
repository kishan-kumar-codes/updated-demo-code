import React, { useCallback } from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import HeadBar from "../citations-builder/HeadBar";
import InputBarField from "../citations-builder/InputBarField";
import ChatDropDown from "../Webchat-Settings/ChatDropDown";

const Campaign = () => {
  const members = [
    { value: "option1", label: "Add FAQs" },
    { value: "option2", label: "Add an FAQ Bulk Import" },
  ];

  // Callback function for handling member selection
  const handleSelect = useCallback(
    ({ label, value }: { label: string; value: string }) =>
      console.log("Selected option:", { label, value }),
    []
  );
  return (
    <div className="flex w-full gap-3 flex-col ">
      <HeadBar title="Campaign Details" />
      <div className="flex rounded-3xl -mt-10 z-10 min-h-[160px] justify-start px-5  w-full bg-[#E0E0E0] py-3">
        <div className="flex flex-col w-full gap-2 pt-8">
          <div className="flex w-full gap-2">
            <div className="flex flex-col w-full gap-1">
              <span className="text-[#6D6D6D] text-xs font-bold leading-normal pl-2">
                Use-Case
              </span>
              <input
                type="text"
                className="w-full rounded-2xl border h-10 border-[#E0E0E0] font-bold p-2 focus:outline-none text-[#631363] placeholder-[#631363] text-xs  leading-normal"
                placeholder="2FA"
              />
            </div>{" "}
          </div>
          <span className="text-[#6D6D6D] text-xs font-bold leading-normal pl-2">
            Vertical*
          </span>
          <ChatDropDown
            options={members}
            onSelect={handleSelect}
            bgColor="#FFFFFF"
            // height="44px"
            // className="rounded-2xl"
          />
          <div className=" space-y-3 w-full">
            <span className="text-[#6D6D6D] -mt-6 text-xs font-bold leading-normal pl-2">
              Campaign Description*
            </span>
            <textarea
              placeholder=""
              rows={4}
              className="w-full   p-2 focus:outline-none pl-3 rounded-2xl resize-none text-[#6D6D6D] text-sm font-normal leading-normal  bg-[#F4F4F4]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
