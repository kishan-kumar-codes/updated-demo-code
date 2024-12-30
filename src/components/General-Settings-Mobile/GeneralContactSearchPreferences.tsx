"use client";
import React from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import { Switch } from "../ui/switch";
import ChatDropDown from "../Webchat-Settings/ChatDropDown";
import RepuationDropDown from "../Reputation-mobile/RepuationDropDown";
import InputBarField from "../citations-builder/InputBarField";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const GeneralContactSearchPreferences = () => {
  return (
    <div className="flex w-full gap-3 flex-col ">
      {/* <HeaderBarMobile title="Contact Search Preferences" /> */}
      <div className="flex rounded-xl lg:rounded-3xl flex-col z-10 min-h-[160px] justify-start w-full bg-[#E0E0E0]">
        <div className="w-full rounded-xl text-white text-[16px] font-bold pl-5 py-2.5 lg:text-[26px] lg:py-4 bg-[#631363]">
          Contact Search Preferences
        </div>
        <div className="flex flex-col w-full gap-2 pt-6 px-5 lg:px-16">
          <div className="flex items-center space-x-2 py-0 lg:py-3">
            <Switch id="Allow-Duplicate-Contact" />
            <Label
              className="text-[#6D6D6D] lg:font-bold text-[12px] lg:text-[22px]"
              htmlFor="Allow-Duplicate-Contact">
              Allow Duplicate Contact
            </Label>
          </div>
          <div className="flex gap-1 pt-1 lg:pt-4 flex-col">
            <Label className="text-[#6D6D6D] text-[10px]  lg:text-[22px] pl-1  flex gap-2 font-bold">
              Find Existing Contacts Based On
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-[#F4F4F4] lg:h-[48px] h-[26px] lg:bg-white mt-0 lg:text-[18px] lg:mt-1  font-bold text-xs text-[#6D6D6D] rounded-[10px] lg:rounded-2xl">
                <SelectValue
                  className="bg-[#F4F4F4] lg:bg-white"
                  placeholder="Select a Contact"
                />
              </SelectTrigger>
              <SelectContent className="bg-[#F4F4F4] lg:bg-white">
                <SelectGroup>
                  <SelectItem className="text-[10px] lg:text-[22px]" value="1">
                    Contact 1
                  </SelectItem>
                  <SelectItem className="text-[10px] lg:text-[22px]" value="2">
                    Contact 2
                  </SelectItem>
                  <SelectItem className="text-[10px] lg:text-[22px]" value="3">
                    Contact 3
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-1 pt-1 lg:pt-4 flex-col pb-6">
            <Label className="text-[#6D6D6D] text-[10px]  lg:text-[22px] flex pl-1  gap-2 font-bold">
              Second Preference For Search (Optional)
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-[#F4F4F4] lg:h-[48px] h-[26px] lg:bg-white lg:text-[18px] mt-0 lg:mt-1 font-bold text-xs text-[#6D6D6D] rounded-[10px] lg:rounded-2xl">
                <SelectValue
                  className="bg-[#F4F4F4] lg:bg-white"
                  placeholder="Select a Contact"
                />
              </SelectTrigger>
              <SelectContent className="bg-[#F4F4F4] lg:bg-white">
                <SelectGroup>
                  <SelectItem className="text-[10px] lg:text-[22px]" value="1">
                    Contact 1
                  </SelectItem>
                  <SelectItem className="text-[10px] lg:text-[22px]" value="2">
                    Contact 2
                  </SelectItem>
                  <SelectItem className="text-[10px] lg:text-[22px]" value="3">
                    Contact 3
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralContactSearchPreferences;
