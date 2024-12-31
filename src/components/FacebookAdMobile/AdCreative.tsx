"use client";
import React from "react";
import ChatDropDown from "../Webchat-Settings/ChatDropDown";
import { Button } from "../ui/button";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import InputBarField from "../citations-builder/InputBarField";
import Image from "next/image";
import { FaceBookAdProps } from "./CreateNewCampaign";
// import {  useAppSelector } from "@/lib/hooks";
import { useAppSelector } from "@/hooks/hooks";
import { useAdCreativeHooks } from "@/lib/customHooks/FeedbackAds/AdCreativeHooks";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const AdCreative = ({ handleNextStep, handlePrevStep }: FaceBookAdProps) => {
  const {
    fileInputRef,
    triggerFileUpload,
    handleImageUpload,
    handlePreview,
    imageData,
    fileName,
    adCreativeData,
    setAdCreativeStatus,
    status,
    setAdCreativeData,
    asCreativeSubmit,
  } = useAdCreativeHooks();
  const Creative = useAppSelector((state) => state.FbadCreative);
  console.log("Creative", Creative);
  return (
    <div className="flex flex-col w-full">
      {/* <HeaderBarMobile title="Ad Creative" /> */}
      <div className="flex flex-col rounded-3xl z-10 min-h-[160px] justify-start w-full bg-[#E0E0E0]">
        <div
          // onClick={() => setToggle((prev) => !prev)}
          className="w-full rounded-xl text-white text-[16px] cursor-pointer lg:text-[26px] font-bold pl-5 py-2.5 lg:py-4 bg-[#631363] lg:rounded-2xl">
          Ad Creative
        </div>
        <div className="flex flex-col w-full gap-2 pt-4 px-2 lg:px-5">
          <div className="flex items-center justify-end my-2 gap-2">
            <Button className="border border-[#631363] text-xs lg:text-[22px] text-[#631363] bg-[#E0E0E0] py-3 h-8 lg:h-14 font-bold rounded-lg">
              Edit
            </Button>
            <Button
              className="border border-[#631363] text-[#631363] text-xs lg:text-[22px] bg-[#E0E0E0] py-3 h-8 lg:h-14 font-bold rounded-lg"
              onClick={handlePreview}>
              Preview
            </Button>
          </div>
          <div className="flex flex-col w-full gap-2 pb-5 px-2">
            <span className="text-[#6D6D6D] text-xs  lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
              Name
            </span>
            <Input className="rounded-xl bg-[#F4F4F4] h-8 lg:h-12" />
            <span className="text-[#6D6D6D] text-xs  lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
              Primary Text
            </span>
            <Input className="rounded-xl bg-[#F4F4F4] h-8 lg:h-12" />
            <span className="text-[#6D6D6D] text-xs  lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
              Body
            </span>
            <Textarea className="rounded-xl bg-[#F4F4F4]" />
            <span className="text-[#6D6D6D] text-xs  lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
              Object URL
            </span>
            <Input className="rounded-xl bg-[#F4F4F4] h-8 lg:h-12" />

            <span className="text-[#6D6D6D] text-xs lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
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
            <span className="text-[#6D6D6D] text-xs lg:text-[22px] pt-0 lg:pt-4 font-bold leading-normal">
              Image
            </span>
            <div className="h-[40px] lg:h-14 w-full flex items-center">
              <div className="flex-grow h-full text-[#6D6D6D] pl-6 items-center text-xs rounded-l-2xl bg-[#FFFFFF] flex justify-between">
                {fileName ? fileName : "No File Chosen"}
              </div>
              <Button
                onClick={triggerFileUpload}
                className="bg-[#631363] lg:h-14 text-[#FFF] -ml-1 font-normal rounded-r-2xl">
                Upload
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            {imageData && (
              <div className="my-4 ">
                <Image
                  src={imageData}
                  alt="Uploaded preview"
                  width={100}
                  height={70}
                  style={{ objectFit: "cover" }}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            )}
            <span className="text-[#6D6D6D] text-[10px] lg:text-[20px] font-normal leading-normal">
              Preview of the uploaded image
            </span>
            <div className="flex items-center justify-between my-2 lg:my-5 gap-2">
              <Button
                className="bg-[#631363] text-[#FFF] py-3 lg:h-14 text-xs lg:text-[22px] font-bold rounded-lg"
                onClick={handlePrevStep}>
                Previous
              </Button>
              <Button
                className="bg-[#40F440] text-[#27272D] py-3 lg:h-14 text-xs lg:text-[22px] font-bold rounded-lg"
                onClick={handleNextStep}>
                Publish Ad
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCreative;
