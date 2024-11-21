"use client";
import React from "react";
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
  return (
    <div className="flex w-full gap-3 flex-col ">
      {/* <HeaderBarMobile title="Business Physical Address" /> */}
      <div className="flex rounded-3xl flex-col z-10 min-h-[160px] justify-start w-full bg-[#E0E0E0]">
        <div className="w-full rounded-xl text-white text-[16px] font-bold pl-5 py-2.5 bg-[#631363]">
          Business Physical Address
        </div>
        <div className="flex flex-col w-full px-5 gap-2 pt-4">
          <div className="flex gap-1 pt-1 flex-col">
            <Label className="text-[#6D6D6D] text-xs pl-1  flex gap-2 font-bold">
              Street Address <ReviewWidgetInfoTooltip />
            </Label>
            <Input className="rounded-2xl h-10 bg-white" />
          </div>
          <div className="flex gap-1 pt-1 ">
            <div className="flex gap-1 flex-col">
              <Label className="text-[#6D6D6D] text-xs pl-1  font-bold">
                City
              </Label>
              <Input className="rounded-2xl h-10 bg-white" />
            </div>
            <div className="flex gap-1  flex-col">
              <Label className="text-[#6D6D6D] text-xs pl-1  font-bold">
                Postal / Zip Code
              </Label>
              <Input className="rounded-2xl h-10 bg-white" />
            </div>
          </div>
          <div className="flex gap-1 pt-1 flex-col">
            <Label className="text-[#6D6D6D] text-xs pl-1  flex gap-2 font-bold">
              State / Prov / Region
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-white font-bold text-xs text-[#6D6D6D] rounded-2xl">
                <SelectValue
                  className="bg-white"
                  placeholder="Select a state"
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {states.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase()}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-1 pt-1 flex-col">
            <Label className="text-[#6D6D6D] text-xs pl-1  flex gap-2 font-bold">
              Country
            </Label>
            <Select>
              <SelectTrigger className="w-full font-bold  text-[#6D6D6D] text-xs bg-white rounded-2xl">
                <SelectValue
                  className="bg-white font-bold"
                  placeholder="Select a Country"
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectItem value="usa">USA</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-1 pt-1 flex-col">
            <Label className="text-[#6D6D6D] text-xs  pl-1 flex gap-2 font-bold">
              Time Zone*
            </Label>
            <Select>
              <SelectTrigger className="w-full font-bold  text-[#6D6D6D] text-xs  bg-white rounded-2xl">
                <SelectValue
                  className="bg-white font-bold"
                  placeholder="Select a TimeZone"
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectItem value="usa">12:00 hrs</SelectItem>
                  <SelectItem value="canada">24:00 hrs</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-1 pt-1 flex-col">
            <Label className="text-[#6D6D6D] flex text-xs pl-1  gap-2 font-bold">
              Platform Language <ReviewWidgetInfoTooltip />
            </Label>
            <Select>
              <SelectTrigger className="w-full font-bold  text-[#6D6D6D] text-xs bg-white rounded-2xl">
                <SelectValue
                  className="bg-white font-bold"
                  placeholder="Select a Language"
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectItem value="usa">English</SelectItem>
                  <SelectItem value="canada">Spanish</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-1 pt-1 flex-col">
            <Label className="text-[#6D6D6D] flex pl-1  text-xs gap-2 font-bold">
              Outbound Communication Language For Custom Values{" "}
              <ReviewWidgetInfoTooltip />
            </Label>
            <Select>
              <SelectTrigger className="w-full font-bold  text-[#6D6D6D] text-xs bg-white rounded-2xl">
                <SelectValue
                  className="bg-white font-bold"
                  placeholder="Select a Comm. Language"
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectItem value="usa">English</SelectItem>
                  <SelectItem value="canada">Spanish</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full flex justify-end pb-8">
            <Button className="bg-[#40F440] text-[##3D3D3D] py-3 font-bold rounded-xl">
              Update
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralBusinessPhysicalAddress;
