import React, { useCallback, useState } from "react";
import ChatDropDown from "../Webchat-Settings/ChatDropDown";
import { Button } from "../ui/button";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import InputBarField from "../citations-builder/InputBarField";
import RadioButton from "../reviews/RadioButton";
import { ShadCustomDatePicker } from "./ShadCustomDatePicker";
import CountryListDropdown from "../Reputation-mobile/CountryDisplayName";
import { FaceBookAdProps } from "./CreateNewCampaign";
import AdsetPreview from "./AdsetPreview";
import { useCreateNewAdsetHooks } from "@/lib/customHooks/FeedbackAds/CreateNewAdsetHooks";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const CreateNewAdset = ({
  handleNextStep,
  handlePrevStep,
}: FaceBookAdProps) => {
  const {
    adSetStartDate,
    setAdSetStartDate,
    adSetEndDate,
    setAdSetEndDate,
    setAdSetCampaignName,
    setAdsetOptimizationGoal,
    setAdsetStatus,
    setAdsetCategory,
    setAdsetBillingEvents,
    setAdsetPublish,
    setAdsetAgeFrom,
    setAdsetAgeTo,
    adSetName,
    setAdsetName,
    adSetBidAmount,
    setAdsetBidAmount,
    adSetDailyBudget,
    setAdsetDailyBudget,
    isShowAdsetData,
    optimizationGoal,
    adSetCountry,
    objective,
    adSetSubmit,
    status,
    handleCountrySelect,
    handleRadioButtonSelect,
    category,
    billing,
    publish,
    age,
    ageRange,
    handleSubmitCreateAdSet,
  } = useCreateNewAdsetHooks();

  const campaignOptions = [
    "None",
    "App Installs",
    "Ad Recall Lift",
    "Engaged Users",
    "Event Responses",
    "Impressions",
    "Lead Generation",
    "Quality Lead",
    "Link Clicks",
    "Post Engagement",
    "Quality Call",
    "Reach",
    "Landing Page Views",
    "Visit Instagram Profile",
    "Value",
    "Thruplay",
    "Derived Events",
    "App Installs And Offsite Conversions",
    "Conversations",
    "In App Value",
    "Messaging Purchase Conversion",
    "Subscribers",
    "Remindres Set",
    "Meaningful Call Attempt",
    "Profile Visit",
    "Messaging Appointment Conversion",
  ];

  const destinationOptions = [
    "Website",
    "App",
    "Messenger",
    "Applinks Automatic",
    "Whatsapp",
    "Instagram Direct",
    "Facebook",
    "Messaging Messenger Whatsapp",
    "Messaging Instagram Direct Messenger",
    "Shop Automatic",
    "On Ad",
    "On Post",
    "On Event",
    "On Video",
    "On Page",
    "Instagram Profile",
    "Facebook Page",
    "Instagram Profile And Facebook Page",
  ];
  return (
    <div className="flex flex-col w-full">
      {/* <HeaderBarMobile title="Create New Adset" /> */}
      <div className="flex rounded-3xl flex-col z-10 min-h-[160px] justify-start   w-full bg-[#E0E0E0]">
        <div
          // onClick={() => setToggle((prev) => !prev)}
          className="w-full rounded-xl text-white text-[16px] cursor-pointer lg:text-[26px] font-bold pl-5 py-2.5 lg:py-4 bg-[#631363] lg:rounded-2xl">
          Create New Adset
        </div>
        <div className="flex flex-col w-full gap-2 py-3 lg:py-8 px-4">
          <div className="flex items-center justify-end my-2 gap-2">
            <Button className="bg-[#631363] text-xs lg:h-14 lg:text-[22px] text-[#FFF] py-3 font-bold rounded-lg">
              Ad Sets
            </Button>
            <Button className="border border-[#631363]  lg:h-14  text-xs lg:text-[22px] text-[#631363] bg-[#E0E0E0] py-3 font-bold rounded-lg">
              Edit
            </Button>
            <Button className="border border-[#631363] lg:h-14   text-xs lg:text-[22px] text-[#631363] bg-[#E0E0E0] py-3 font-bold rounded-lg">
              Preview
            </Button>
          </div>

          {isShowAdsetData ? (
            <div className="flex flex-col w-full gap-2 pb-5 px-2">
              <span className="text-[#6D6D6D] text-xs pl-2 lg:text-[22px] font-bold leading-normal">
                Choose A Campaign For Your AdSet
              </span>
              <div className="flex gap-1 flex-col">
                <Select>
                  <SelectTrigger className="w-full  font-bold h-8 lg:h-12 lg:text-[22px]  mt-0 lg:mt-1 text-[#6D6D6D] text-[10px] bg-[#F4F4F4] rounded-[10px] lg:rounded-2xl">
                    <SelectValue
                      className="bg-[#F4F4F4]  font-bold"
                      placeholder="Select your Campaign"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-[#F4F4F4] ">
                    <SelectGroup>
                      <SelectItem
                        className="text-[10px] lg:text-[22px]"
                        value="1">
                        Campaign 1
                      </SelectItem>
                      <SelectItem
                        className="text-[10px] lg:text-[22px]"
                        value="2">
                        Campaign 2
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <span className="text-[#6D6D6D] text-xs  lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
                AdSet Name
              </span>
              <Input className="rounded-xl bg-[#F4F4F4] h-8 lg:h-12" />
              <span className="text-[#6D6D6D] text-xs pl-2  pt-0 lg:pt-4 lg:text-[22px] font-bold leading-normal">
                Optimization Goal
              </span>
              <div className="flex gap-1 flex-col">
                <Select>
                  <SelectTrigger className="w-full font-bold h-8 lg:h-[48px] lg:text-[22px]  mt-0 lg:mt-1 text-[#6D6D6D] text-[10px] bg-[#F4F4F4] rounded-[10px] lg:rounded-2xl">
                    <SelectValue
                      className="bg-[#F4F4F4]  font-bold"
                      placeholder="Select Optimization Goal"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-[#F4F4F4]">
                    <SelectGroup>
                      {campaignOptions.map((option) => (
                        <SelectItem
                          key={option}
                          value={option.toLowerCase().replace(/\s+/g, "-")}
                          className="text-[10px] lg:text-[22px]">
                          {option}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <span className="text-[#6D6D6D] text-xs  pt-0 lg:pt-4 lg:text-[22px]  font-bold leading-normal">
                Status
              </span>
              <div className="flex gap-1 flex-col">
                <Select>
                  <SelectTrigger className="w-full font-bold h-8 lg:h-[48px] lg:text-[22px]  mt-0 lg:mt-1 text-[#6D6D6D] text-[10px] bg-[#F4F4F4] rounded-[10px] lg:rounded-2xl">
                    <SelectValue
                      className="bg-[#F4F4F4]  font-bold"
                      placeholder="Select Status"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-[#F4F4F4]">
                    <SelectGroup>
                      <SelectItem
                        className="text-[10px] lg:text-[22px]"
                        value="1">
                        Active
                      </SelectItem>
                      <SelectItem
                        className="text-[10px] lg:text-[22px]"
                        value="2">
                        Archived
                      </SelectItem>
                      <SelectItem
                        className="text-[10px] lg:text-[22px]"
                        value="3">
                        Deleted
                      </SelectItem>
                      <SelectItem
                        className="text-[10px] lg:text-[22px]"
                        value="4">
                        Paused
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <span className="text-[#6D6D6D] text-xs pt-0 lg:pt-4 lg:text-[22px] font-bold leading-normal">
                Category
              </span>
              <div className="flex gap-1 flex-col">
                <Select>
                  <SelectTrigger className="w-full font-bold h-8 lg:h-[48px] lg:text-[22px]  mt-0 lg:mt-1 text-[#6D6D6D] text-[10px] bg-[#F4F4F4] rounded-[10px] lg:rounded-2xl">
                    <SelectValue
                      className="bg-[#F4F4F4]  font-bold"
                      placeholder="Select a Category"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-[#F4F4F4]">
                    <SelectGroup>
                      {destinationOptions.map((option) => (
                        <SelectItem
                          key={option}
                          value={option.toLowerCase().replace(/\s+/g, "-")}
                          className="text-[10px] lg:text-[22px]">
                          {option}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <span className="text-[#6D6D6D] text-xs pt-0 lg:pt-4 lg:text-[22px] font-bold leading-normal">
                Locations
              </span>
              <div className="flex gap-1 flex-col">
                <Select>
                  <SelectTrigger className="w-full font-bold h-8 lg:h-[48px] lg:text-[22px]  mt-0 lg:mt-1 text-[#6D6D6D] text-[10px] bg-[#F4F4F4] rounded-[10px] lg:rounded-2xl">
                    <SelectValue
                      className="bg-[#F4F4F4]  font-bold"
                      placeholder="Select Country"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-[#F4F4F4]">
                    <SelectGroup>
                      <SelectItem
                        className="text-[10px] lg:text-[22px]"
                        value="1">
                        Select Country
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <span className="text-[#6D6D6D] text-xs  pt-0 lg:pt-4 lg:text-[22px] font-bold leading-normal">
                Billing Events
              </span>
              <div className="flex gap-1 flex-col">
                <Select>
                  <SelectTrigger className="w-full font-bold h-8 lg:h-[48px] lg:text-[22px]  mt-0 lg:mt-1 text-[#6D6D6D] text-[10px] bg-[#F4F4F4] rounded-[10px] lg:rounded-2xl">
                    <SelectValue
                      className="bg-[#F4F4F4]  font-bold"
                      placeholder="Select Optimization Goal"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-[#F4F4F4]">
                    <SelectGroup>
                      {campaignOptions.map((option) => (
                        <SelectItem
                          key={option}
                          value={option.toLowerCase().replace(/\s+/g, "-")}
                          className="text-[10px] lg:text-[22px]">
                          {option}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <span className="text-[#6D6D6D] text-xs pt-0 lg:pt-4 lg:text-[22px] font-bold leading-normal">
                Page To Publish
              </span>
              <div className="flex gap-1 flex-col">
                <Select>
                  <SelectTrigger className="w-full font-bold h-8 lg:h-[48px] lg:text-[22px]  mt-0 lg:mt-1 text-[#6D6D6D] text-[10px] bg-[#F4F4F4] rounded-[10px] lg:rounded-2xl">
                    <SelectValue
                      className="bg-[#F4F4F4]  font-bold"
                      placeholder="Select Status"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-[#F4F4F4]">
                    <SelectGroup>
                      <SelectItem
                        className="text-[10px] lg:text-[22px]"
                        value="1">
                        Test Page
                      </SelectItem>
                      <SelectItem
                        className="text-[10px] lg:text-[22px]"
                        value="2">
                        HubSpark
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <span className="text-[#6D6D6D] text-xs  pt-0 lg:pt-4 lg:text-[22px] font-bold leading-normal">
                Audience Controls
              </span>
              <div className="flex flex-col">
                <span className="text-[#6D6D6D] text-[11px] lg:text-[22px] pl-3 font-bold leading-normal">
                  Locations
                </span>
                <span className="text-[#6D6D6D] text-[10px] lg:text-[20px] pl-6 font-normal leading-normal">
                  Location:{" "}
                  {adSetCountry
                    ? adSetCountry?.Name?.charAt(0)
                        .toUpperCase()
                        .concat(adSetCountry?.Name?.slice(1))
                    : "United States"}
                </span>
              </div>
              <span className="text-[#6D6D6D] text-xs pt-0 lg:pt-4 lg:text-[22px] pl-3 font-bold leading-normal">
                Age
              </span>
              <div className="flex  w-full items-center gap-1">
                <div className="flex w-full gap-1 flex-col">
                  <Select>
                    <SelectTrigger className="w-full font-bold h-8 lg:h-[48px] lg:text-[22px]  mt-0 lg:mt-1 text-[#6D6D6D] text-[10px] bg-[#F4F4F4] rounded-[10px] lg:rounded-2xl">
                      <SelectValue
                        className="bg-[#F4F4F4]  font-bold"
                        placeholder="Select age"
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-[#F4F4F4]">
                      <SelectGroup>
                        <SelectItem
                          className="text-[10px] lg:text-[22px]"
                          value="1">
                          18
                        </SelectItem>
                        <SelectItem
                          className="text-[10px] lg:text-[22px]"
                          value="2">
                          25+
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex w-full gap-1 flex-col">
                  <Select>
                    <SelectTrigger className="w-full font-bold h-8 lg:h-[48px] lg:text-[22px]  mt-0 lg:mt-1 text-[#6D6D6D] text-[10px] bg-[#F4F4F4] rounded-[10px] lg:rounded-2xl">
                      <SelectValue
                        className="bg-[#F4F4F4]  font-bold"
                        placeholder="Select age"
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-[#F4F4F4]">
                      <SelectGroup>
                        <SelectItem
                          className="text-[10px] lg:text-[22px]"
                          value="1">
                          65+
                        </SelectItem>
                        <SelectItem
                          className="text-[10px] lg:text-[22px]"
                          value="2">
                          70+
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <span className="text-[#6D6D6D] text-xs pt-0 lg:pt-4 lg:text-[22px] pl-3 font-bold leading-normal">
                Gender
              </span>
              <div className="flex pl-3 items-center gap-6">
                <RadioGroup className="flex" defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label
                      className="text-[#6D6D6D] text-xs lg:text-[20px]"
                      htmlFor="r1">
                      All
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label
                      className="text-[#6D6D6D] text-xs lg:text-[20px]"
                      htmlFor="r2">
                      Male
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label
                      className="text-[#6D6D6D]  text-xs lg:text-[20px]"
                      htmlFor="r3">
                      Female
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <span className="text-[#6D6D6D] text-xs pt-0 lg:pt-4 lg:text-[22px]  font-bold leading-normal">
                Budget & Schedule
              </span>
              <div className="flex flex-col">
                <span className="text-[#6D6D6D] text-xs pb-4 lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
                  Bid Amount
                </span>
                <Input className="rounded-xl bg-[#F4F4F4] h-8 lg:h-12" />
                <span className="text-[#6D6D6D] text-xs pb-4  lg:text-[22px] pt-2 lg:pt-4 px-2  font-bold leading-normal">
                  Daily Budget
                </span>
                <Input className="rounded-xl bg-[#F4F4F4] h-8 lg:h-12" />
              </div>
              <span className="text-[#6D6D6D] text-[11px] lg:text-[20px] font-normal text-start leading-normal pl-2">
                &quot;You&apos;ll spend an average of $9.52 per day. Your
                maximum daily spend is $16.66 and your maximum weekly spend is
                $66.64. Learn more.&quot;
              </span>
              <span className="text-[#6D6D6D] text-xs pt-0 lg:pt-4 lg:text-[22px] font-bold leading-normal">
                Start Date
              </span>
              <div className="bg-[#F4F4F4] rounded-xl">
                <ShadCustomDatePicker
                  setDate={setAdSetStartDate}
                  date={adSetStartDate}
                />
              </div>

              <span className="text-[#6D6D6D] text-xs pt-0 lg:pt-4 lg:text-[22px] font-bold leading-normal">
                End Date
              </span>
              <div className="bg-[#F4F4F4] rounded-xl">
                <ShadCustomDatePicker
                  setDate={setAdSetEndDate}
                  date={adSetEndDate}
                />
              </div>
            </div>
          ) : (
            <AdsetPreview />
          )}
          <div className="flex items-center justify-between my-2 lg:my-5 gap-2">
            <Button
              className="bg-[#631363] text-[#FFF] py-3 lg:h-14 text-xs lg:text-[22px] font-bold rounded-lg"
              onClick={handlePrevStep}>
              Previous
            </Button>
            <div className="flex gap-2">
              <Button
                className="bg-[#631363] text-[#FFF] py-3 lg:h-14  text-xs lg:text-[22px] font-bold rounded-lg"
                onClick={handleSubmitCreateAdSet}>
                Create AdSet
              </Button>
              <Button
                className="bg-[#40F440] text-[#27272D] py-3 lg:h-14 text-xs lg:text-[22px] font-bold rounded-lg"
                onClick={handleNextStep}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewAdset;
