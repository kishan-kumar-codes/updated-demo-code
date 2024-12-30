"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ReviewWidgetInfoTooltip } from "../Reputation-mobile/TooltipReputation";
import InputBarField from "../citations-builder/InputBarField";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import CountryListDropdown from "../Reputation-mobile/CountryDisplayName";
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

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const GeneralBusinessPhysicalAddress = () => {
  const [isToggle, setToggle] = useState(false);
  return (
    <div className="flex w-full gap-3 flex-col ">
      {/* <HeaderBarMobile title="Business Physical Address" /> */}
      <div className="flex rounded-xl lg:rounded-3xl flex-col z-10 min-h-fit justify-start w-full bg-[#E0E0E0]">
        <div
          onClick={() => setToggle((prev) => !prev)}
          className="w-full rounded-xl text-white text-[16px] cursor-pointer lg:text-[26px] font-bold pl-5 py-2.5 lg:py-4 bg-[#631363] lg:rounded-2xl">
          Business Physical Address
        </div>
        {isToggle && (
          <div className="flex flex-col w-full px-5 gap-2 pt-4 lg:px-16">
            <div className="flex gap-1 pt-1 lg:pt-4 flex-col">
              <Label className="text-[#6D6D6D] text-[10px] pl-1 lg:text-[22px] flex gap-2 font-bold">
                Street Address <ReviewWidgetInfoTooltip />
              </Label>
              <Input className="rounded-[10px] lg:rounded-2xl h-[26px] mt-0 lg:mt-1 lg:h-[48px] bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px]" />
            </div>
            <div className="flex gap-1 pt-1 lg:pt-4 w-full ">
              <div className="flex gap-1 flex-col w-full">
                <Label className="text-[#6D6D6D] text-[10px] lg:text-[22px] pl-1  font-bold">
                  City
                </Label>
                <Input className="rounded-[10px] lg:rounded-2xl h-[26px]  mt-0 lg:mt-1 lg:h-[48px] bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px]" />
              </div>
              <div className="flex gap-1 w-full flex-col">
                <Label className="text-[#6D6D6D] text-[10px] lg:text-[22px] pl-1  font-bold">
                  Postal / Zip Code
                </Label>
                <Input className="rounded-[10px] lg:rounded-2xl h-[26px]  mt-0 lg:mt-1 lg:h-[48px] bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px]" />
              </div>
            </div>
            <div className="flex gap-1 pt-1  lg:pt-4  flex-col">
              <Label className="text-[#6D6D6D] text-[10px] lg:text-[22px] pl-1  flex gap-2 font-bold">
                State / Prov / Region
              </Label>
              <Select>
                <SelectTrigger className="w-full bg-[#F4F4F4] lg:bg-white h-[26px] lg:h-[48px] mt-0 lg:mt-1 font-bold text-[10px] text-[#6D6D6D] lg:text-[22px] rounded-[10px] lg:rounded-2xl">
                  <SelectValue
                    className="bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px] "
                    placeholder="Select a state"
                  />
                </SelectTrigger>
                <SelectContent className="bg-[#F4F4F4] lg:bg-white ">
                  <SelectGroup>
                    {states.map((state) => (
                      <SelectItem
                        className="text-[10px] lg:text-[22px]"
                        key={state}
                        value={state.toLowerCase()}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-1 pt-1 lg:pt-4 flex-col">
              <Label className="text-[#6D6D6D] text-[10px] pl-1 lg:text-[22px] flex gap-2 font-bold">
                Country
              </Label>
              <Select>
                <SelectTrigger className="w-full font-bold h-[26px] lg:h-[48px] lg:text-[22px]  mt-0 lg:mt-1 text-[#6D6D6D] text-[10px] bg-[#F4F4F4] lg:bg-white rounded-[10px] lg:rounded-2xl">
                  <SelectValue
                    className="bg-[#F4F4F4] lg:bg-white font-bold"
                    placeholder="Select a Country"
                  />
                </SelectTrigger>
                <SelectContent className="bg-[#F4F4F4] lg:bg-white">
                  <SelectGroup>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="usa">
                      USA
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="canada">
                      Canada
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-1 pt-1 lg:pt-4 flex-col">
              <Label className="text-[#6D6D6D] text-[10px] lg:text-[22px] pl-1 flex gap-2 font-bold">
                Time Zone*
              </Label>
              <Select>
                <SelectTrigger className="w-full font-bold h-[26px] lg:h-[48px] lg:text-[22px]   mt-0 lg:mt-1 text-[#6D6D6D] text-[10px]  bg-[#F4F4F4] lg:bg-white rounded-[10px] lg:rounded-2xl">
                  <SelectValue
                    className="bg-[#F4F4F4] lg:bg-white font-bold"
                    placeholder="Select a TimeZone"
                  />
                </SelectTrigger>
                <SelectContent className="bg-[#F4F4F4] lg:bg-white">
                  <SelectGroup>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="usa">
                      12:00 hrs
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="canada">
                      24:00 hrs
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-1 pt-1 lg:pt-4 flex-col">
              <Label className="text-[#6D6D6D] flex text-[10px] pl-1 lg:text-[22px] gap-2 font-bold">
                Platform Language <ReviewWidgetInfoTooltip />
              </Label>
              <Select>
                <SelectTrigger className="w-full font-bold h-[26px]  lg:h-[48px] lg:text-[22px]  mt-0 lg:mt-1 text-[#6D6D6D] text-[10px] bg-[#F4F4F4] lg:bg-white rounded-[10px] lg:rounded-2xl">
                  <SelectValue
                    className="bg-[#F4F4F4] lg:bg-white font-bold"
                    placeholder="Select a Language"
                  />
                </SelectTrigger>
                <SelectContent className="bg-[#F4F4F4] lg:bg-white">
                  <SelectGroup>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="usa">
                      English
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="canada">
                      Spanish
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-1 pt-1 lg:pt-4 flex-col">
              <Label className="text-[#6D6D6D] flex pl-1 lg:text-[22px]  text-[10px] gap-0 lg:gap-2 font-bold">
                Outbound Communication Language For Custom Values{" "}
                <ReviewWidgetInfoTooltip />
              </Label>
              <Select>
                <SelectTrigger className="w-full lg:h-[48px] h-[26px] lg:text-[22px] mt-0 lg:mt-1 font-bold  text-[#6D6D6D] text-[10px] bg-[#F4F4F4] lg:bg-white rounded-[10px] lg:rounded-2xl">
                  <SelectValue
                    className="bg-[#F4F4F4] lg:bg-white font-bold text-[10px] lg:text-[22px]"
                    placeholder="Select a Comm. Language"
                  />
                </SelectTrigger>
                <SelectContent className="bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px]">
                  <SelectGroup>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="usa">
                      English
                    </SelectItem>
                    <SelectItem
                      className="text-[10px] lg:text-[22px]"
                      value="canada">
                      Spanish
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full flex justify-end pb-8 pt-0 lg:pt-6">
              <Button className="bg-[#40F440] w-[71px] h-[32px] lg:w-[151px] lg:h-[58px] text-[##3D3D3D] lg:text-[22px]   py-3 font-bold rounded-lg lg:rounded-xl">
                Update
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralBusinessPhysicalAddress;
