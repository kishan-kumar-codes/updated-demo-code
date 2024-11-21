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
      <div className="flex rounded-3xl flex-col z-10 min-h-[160px] justify-start w-full bg-[#E0E0E0]">
        <div className="w-full rounded-xl text-white text-[16px] font-bold pl-5 py-2.5 bg-[#631363]">
          Contact Search Preferences
        </div>
        <div className="flex flex-col w-full gap-2 pt-6 px-5">
          <div className="flex items-center space-x-2">
            <Switch id="Allow-Duplicate-Contact" />
            <Label className="text-[#6D6D6D]" htmlFor="Allow-Duplicate-Contact">
              Allow Duplicate Contact
            </Label>
          </div>
          <div className="flex gap-1 pt-1 flex-col">
            <Label className="text-[#6D6D6D] text-xs pl-1  flex gap-2 font-bold">
              Find Existing Contacts Based On
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-white font-bold text-xs text-[#6D6D6D] rounded-2xl">
                <SelectValue
                  className="bg-white"
                  placeholder="Select a Contact"
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectItem value="1">Contact 1</SelectItem>
                  <SelectItem value="2">Contact 2</SelectItem>
                  <SelectItem value="3">Contact 3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-1 pt-1 flex-col pb-6">
            <Label className="text-[#6D6D6D] text-xs flex pl-1  gap-2 font-bold">
              Second Preference For Search (Optional)
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-white font-bold text-xs text-[#6D6D6D] rounded-2xl">
                <SelectValue
                  className="bg-white"
                  placeholder="Select a Contact"
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectItem value="1">Contact 1</SelectItem>
                  <SelectItem value="2">Contact 2</SelectItem>
                  <SelectItem value="3">Contact 3</SelectItem>
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
