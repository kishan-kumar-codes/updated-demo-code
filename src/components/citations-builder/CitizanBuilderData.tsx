"use client";
import React, { useState } from "react";
import HeadBar from "./HeadBar";
import InputBarField from "./InputBarField";
import SquareCheckBoxButton from "./SquareCheckBox";
import ListDropDown from "./ListDropDown";
import SocialMedia from "./SocialMedia";
import {
  FacebookSvgs,
  Instasvgs,
  LinkdinSvgs,
  PinterestSvgs,
  TwitterSvgs,
} from "@/svgs/citations-builder/svgs";
import Link from "next/link";
import { useRouter } from "next/navigation";

import SelectComponent from "./SelectComp";

// Styles for text and payment sections
const textStyle: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontStyle: "normal",
  wordWrap: "break-word",
  fontWeight: 700,
  lineHeight: "118%", // 11.8px
  letterSpacing: "0.5px",
};

const paymentStyle: React.CSSProperties = {
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

interface Option {
  value: string;
  label: string;
}

const industryOptions: Option[] = [
  {
    value: "Smart Thermostat Installation",
    label: "Smart Thermostat Installation",
  },
  {
    value: "Refrigeration Services (for Restaurants/Businesses)",
    label: "Refrigeration Services (for Restaurants/Businesses)",
  },
  {
    value: "Roof Coating for Energy Efficiency",
    label: " Roof Coating for Energy Efficiency",
  },
  {
    value: "Eco-Friendly Carpet Cleaning Services",
    label: "Eco-Friendly Carpet Cleaning Services",
  },
  { value: "Pet Stain and Odor Removal", label: "Pet Stain and Odor Removal" },
];

const departmentOptions: Option[] = [
  { value: "Roofing", label: "Roofing" },
  { value: "Hvac", label: "Hvac" },
  { value: "Carpet Cleaning", label: "Carpet Cleaning" },
  { value: "Fieldpiece", label: "Fieldpiece" },
  { value: "PBR Metal Panel", label: "PBR Metal Panel" },
];

/**
 * CitizanBuilderData component
 *
 * This component provides a form for users to enter citation builder data,
 * including business contact details, payment methods, business categories,
 * and social media links. The form is styled and includes various input
 * fields and dropdowns for additional information.
 *
 * @returns {JSX.Element} The rendered CitizanBuilderData component.
 */
const CitizanBuilderData = (): JSX.Element => {
  const [categories, setCategories] = useState<string>("");

  const router = useRouter();
  // Handle category change
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategories(event.target.value);
  };

  const handleNext = async () => {
    try {
      await router.push("/citations-builder/final");
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
  };
  // Handle dropdown selection
  // const handleSelect = (option: { label: string; value: string }) => {
  //   console.log("Selected option:", option);
  // };

  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <div className="w-full rounded-2xl ">
      <div className="flex bg-[#E0E0E0] rounded-2xl pb-8 md:pb-0  flex-col w-full">
        <HeadBar title="Citation Builder Data" />

        <div className="flex rounded-3xl -mt-10 z-0 min-h-[160px] justify-start px-5 md:max-w-full  pt-3">
          <div className="mt-9 w-full">
            {/* Instructions and placeholders */}
            <span
              className="break-words text-[10px] md:tracking-normal tracking-normal w-full text-xs md:text-lg"
              style={textStyle}>
              Here you can provide additional, optional information such as
              Business Location contact details, working hours, photos, etc.
              This information is required if you plan to use our Citation
              Builder directory submission service for this location.
            </span>
            <br />
            <br />
            <span
              className="break-words text-[10px]  md:tracking-normal tracking-normal w-full text-xs md:text-lg"
              style={textStyle}>
              Enter the contact details that you want to be displayed on this
              client&apos;s directory listings. HubSpark will never use this
              information to directly contact your clients.
            </span>
            <br />
            <br />

            {/* Input fields */}
            <div className="flex justify-between flex-col md:flex-row w-full">
              <div className="w-full flex-1">
                <InputBarField
                  label="Business contact first name"
                  placeHolder=""
                />
                <InputBarField
                  label="Business contact last name"
                  placeHolder=""
                />
                <InputBarField label="Business contact email" placeHolder="" />
                <InputBarField label="Mobile phone number" placeHolder="" />
                <InputBarField label="Business fax number" placeHolder="" />
              </div>
              <div className="w-full flex-1 flex-col md:pl-24 pl-0 justify-end items-end text-end">
                <InputBarField
                  filesLabel="Business contact first name"
                  placeHolder=""
                  files={true}
                  filesHelperText="jpeg / jpg / png format only. Max size 2 MB."
                />
                <InputBarField
                  filesLabel="Location Photos (up to 3)"
                  placeHolder=""
                  files={true}
                  filesHelperText="jpeg / jpg / png format only. Max size 2 MB"
                />
              </div>
            </div>

            {/* Payment methods section */}
            <div
              className="text-[#6D6D6D] text-[10px] py-3 md:py-5 md:text-lg md:text-[#631363] lg:text-[24px]"
              style={paymentStyle}>
              Payment methods accepted
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 py-1 justify-start items-center gap-1 lg:gap-2">
              <SquareCheckBoxButton label="Cash" id="Cash" />
              <SquareCheckBoxButton label="Visa" id="Visa" />
              <SquareCheckBoxButton label="Financing " id="Financing" />
              <SquareCheckBoxButton
                label="Personal Check"
                id="Personal Check"
              />
              <SquareCheckBoxButton label="Invoice" id="Invoice" />
              <SquareCheckBoxButton label="Traveler" id="Traveler’s Check" />
              <SquareCheckBoxButton label="Mastercard" id="Mastercard" />
              <SquareCheckBoxButton label="Insurance" id="Insurance" />
              <SquareCheckBoxButton label="ATM / Debit" id="ATM / Debit" />
              <SquareCheckBoxButton label="PayPal" id="PayPal" />
              <SquareCheckBoxButton label="Discover" id="Discover" />
              <SquareCheckBoxButton label="American " id="American Express" />
            </div>

            {/* Extra business categories */}
            <div
              className="text-[#6D6D6D] text-xs py-2 md:py-5 md:text-lg md:text-[#631363] lg:text-[24px]"
              style={paymentStyle}>
              Extra business categories (recommended)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectComponent
                options={industryOptions}
                placeholder="Select an categories"
                label="Industry"
                onSelect={handleSelect}
              />
              <SelectComponent
                options={industryOptions}
                placeholder="Select an categories"
                label="Department"
                onSelect={handleSelect}
              />
              <SelectComponent
                options={industryOptions}
                placeholder="Select an categories"
                label="Software Solutions"
                onSelect={handleSelect}
              />
              <SelectComponent
                options={industryOptions}
                placeholder="Select an categories"
                label="Department"
                onSelect={handleSelect}
              />
              <SelectComponent
                options={industryOptions}
                placeholder="Select an categories"
                label="Software Solutions"
                onSelect={handleSelect}
              />
            </div>

            {/* List of services/products */}
            <div
              className="text-[#6D6D6D] text-xs pt-3 pb-2 md:pt-5 md:text-lg md:text-[#631363]  lg:text-[24px]"
              style={paymentStyle}>
              List of services / products
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <SelectComponent
                options={departmentOptions}
                placeholder="Select a service"
                label="Industry"
                onSelect={handleSelect}
              />
              <SelectComponent
                options={departmentOptions}
                placeholder="Select a service"
                label="Department"
                onSelect={handleSelect}
              />
              <SelectComponent
                options={departmentOptions}
                placeholder="Select a service"
                label="Software Solutions"
                onSelect={handleSelect}
              />
              <SelectComponent
                options={departmentOptions}
                placeholder="Select a service"
                label="Department"
                onSelect={handleSelect}
              />
              <SelectComponent
                options={departmentOptions}
                placeholder="Select a service"
                label="Software Solutions"
                onSelect={handleSelect}
              />
            </div>

            {/* Social media links */}
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 md:py-18 pt-4 ">
              <SocialMedia
                label={"Facebook (recommended)"}
                svg={<FacebookSvgs />}
              />
              <SocialMedia
                label={"Linkedin (recommended)"}
                svg={<LinkdinSvgs />}
              />
              <SocialMedia label={"X (recommended)"} svg={<TwitterSvgs />} />
              <SocialMedia
                label={"Instagram (recommended)"}
                svg={<Instasvgs />}
              />
              <SocialMedia
                label={"Pinterest (recommended)"}
                svg={<PinterestSvgs />}
              />
            </div>
          </div>
        </div>
        <div className=" hidden md:flex md:flex-col items-center md:items-end w-full py-4 space-y-4  ">
          <button
            onClick={handleNext}
            className="bg-[#40F440] w-full md:w-[300px] lg:w-[365px] px-6 py-2 font-bold text-black rounded-md lg:rounded-xl text-lg lg:text-[36px] md:mr-[28px] lg:mr-[48px] ">
            <Link href="/citations-builder/final">Save</Link>
          </button>
          <div className="flex w-full md:w-[300px] lg:w-[365px] space-x-2 md:mr-[28px] lg:mr-[48px] ">
            <button className="bg-[#631363] flex-1 px-3 py-1 font-bold text-white rounded-md lg:rounded-xl text-[12px] lg:text-[20px]">
              Cancel Update
            </button>
            <button className="bg-[#DB0020] flex-1 px-3 py-1 font-bold text-white rounded-md lg:rounded-xl text-[12px] lg:text-[20px]">
              Delete Location
            </button>
          </div>
        </div>
      </div>

      <div className=" md:hidden flex flex-col items-center md:items-end w-full py-4 space-y-4">
        <button
          onClick={handleNext}
          className="bg-[#40F440] flex justify-center items-center w-full px-6 py-2 lg:py-3 pb-2 font-bold text-black rounded-md lg:rounded-xl text-lg h-[33px] text-[20px]">
          <Link href="/citations-builder/final">Save</Link>
        </button>
        <div className="flex w-full justify-around ">
          <button className="bg-[#631363] whitespace-nowrap px-3 py-1 font-bold text-white rounded-md lg:rounded-xl w-[106px] h-[29px] text-[12px] lg:text-[12px]">
            Cancel Update
          </button>
          <button className="bg-[#DB0020] whitespace-nowrap px-3 py-1 font-bold text-white rounded-md lg:rounded-xl w-[106px] h-[29px] text-[12px] lg:text-[20px]">
            Delete Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default CitizanBuilderData;
