"use client";
import { MenuIcon } from "@/svgs/checkIn/svgs";
import React, { useState } from "react";
import HeadBar from "../citations-builder/HeadBar";
import InputBarField from "../citations-builder/InputBarField";
import { InfoTooltipReputation } from "./TooltipReputation";
import RepuationDropDown from "./RepuationDropDown";
import SquareCheckBoxButton from "../citations-builder/SquareCheckBox";
import BusinessDetails from "../citations-builder/BusinessDetails";
import ReportCard from "./ReportCard";
import { GBPReputationSvgs } from "@/svgs/Reputation-mobile/svgs";
import ReviewSource from "./ReviewSource";
import ReputationModel from "./ReputationModels";
import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const ReputationMobile = () => {
  // List of team members
  const [showModal, setShowModal] = useState(false);
  const [isLocatioInfo, setIsLocationInfo] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Function to open the modal

  const handleRunReport = () => {
    setIsOpen(true);

    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const runReportAsync = async () => {
      await delay(3000);
      router.push("/reviews");
    };

    runReportAsync();
  };

  // Function to close the modal
  const closeModal = () => setShowModal(false);
  const members = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const location = [
    {
      value: "100 W Cypress Creek Rd, Ste 530, Ft Lauderdale, FL 33309",
      label: "100 W Cypress Creek Rd, Ste 530, Ft Lauderdale, FL 33309",
    },
  ];

  // Callback function for handling member selection
  const handleSelect = React.useCallback(
    ({ label, value }: { label: string; value: string }) =>
      console.log("Selected option:", { label, value }),
    []
  );

  const profileInfo =
    "By Default all Reputation Mangers reports come with HubSpark Branding. If you create a white-label profile you can brands the reports with you own logo and colors ";
  const emailInfo =
    "You can publish this report to an external  URL (outside HubSpark.com). This makes it easy to share with clients and others who don't have the login to HubSpark Reports are publish to an anonyumous URL and can be white-labelled with your existing white-label profile ";

  return (
    <div className="flex justify-center items-center w-full ">
      <div className="flex flex-col w-full absolute top-0 items-center bg-[#F4F4F4]">
        <CitationNavbar heading="Reputation" isHeaderVisible={false} />
        <div className="flex flex-col w-full md:w-[95%] lg:w-[92%] justify-center my-5 px-2">
          <div className="flex flex-col w-full items-center gap-2">
            {/* Header for the general settings */}

            {/* Client and Location Reference input fields */}
            <div className="flex flex-col w-full items-center rounded-3xl justify-start  bg-[#E0E0E0]">
              <HeadBar title="Location" />
              <div className="mb-2 md:mb-9 py-2 flex flex-col md:flex-row gap-3 w-full justify-start  px-4">
                <div className="flex w-full md:w-[50%] lg:w-[40%]">
                  {/* <div className="p-2 flex flex-col gap-0.5 lg:gap-2 w-full">
                    <Label
                      htmlFor="location-details"
                      className="text-xs md:text-lg gap-2 justify-start text-[#6D6D6D] font-semibold flex">
                      Which Location is this for?*
                    </Label>
                    <Input
                      className="bg-[#F4F4F4] rounded-xl text-[#6D6D6D]"
                      name="location-details"
                      readOnly
                      value={
                        "100 W Cypress Creek Rd, Ste 530, Ft Lauderdale, FL 33309"
                      }
                    />
                  </div> */}
                  <RepuationDropDown
                    options={location}
                    onSelect={handleSelect}
                    title="Which Location is this for?*"
                    infoComponent={<InfoTooltipReputation />}
                    isInfoVisible={isLocatioInfo}
                    setInfoVisible={setIsLocationInfo}
                    infoText={profileInfo}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 my-5 ">
            <div className="flex flex-col items-center rounded-3xl justify-start bg-[#E0E0E0] w-full pb-3">
              <HeadBar title="Connections" />
              <div className=" my-0 md:my-3 px-5 lg:px-8 mt-2 md:mt-6 flex gap-0 md:gap-3 lg:gap-4 justify-center items-center md:items-start md:justify-between w-full flex-col md:flex-row">
                <ReportCard
                  svgs={<GBPReputationSvgs />}
                  title={"Google Business Profile"}
                  desc={
                    "Get insights, respond to reviews and fetch new reviews daily"
                  }
                />
                <ReportCard
                  svgs={<GBPReputationSvgs />}
                  title={"Facebook"}
                  desc={
                    "Get insights, respond to reviews and fetch new reviews daily"
                  }
                />
              </div>
            </div>
          </div>
          <ReviewSource />
          <div className="flex flex-col items-cente pt-6 gap-2">
            {/* Header for the general settings */}

            {/* Client and Location Reference input fields */}
            <div className="flex flex-col items-center md:items-start rounded-3xl w-full justify-start bg-[#E0E0E0] pb-3">
              <HeadBar title="Email Alerts" />
              <div className="mb-6 flex flex-col gap-3 px-4 w-full md:w-[80%] lg:w-[70%] md:px-6 lg:px-8 py-0 md:py-2">
                <div className="py-2 text-[#6D6D6D] leading-3 md:leading-tight lg:leading-[1.25rem] text-xs md:text-lg lg:text-xl">
                  We can send you an email alert when getting your reviews is
                  completed. We can also send you an alert with details of any
                  new reviews you have received.
                </div>
                <RepuationDropDown
                  options={members}
                  onSelect={handleSelect}
                  title="Receive an email when this process is completed?"
                />
                <Label
                  htmlFor="email"
                  className="text-xs md:text-lg gap-2 justify-start text-[#6D6D6D] font-semibold flex">
                  Enter your email address(es):
                </Label>
                <Textarea
                  id="email"
                  className="rounded-xl text-xs md:text-base lg:text-[20px] gap-2 justify-start text-[#6D6D6D] font-normal italic flex"
                  // onChange={handleChangeValue}
                  // value={description}
                />
                <div
                  className="text-xs"
                  style={{
                    color: "#6D6D6D",
                    fontStyle: "italic",
                  }}>
                  Enter 1 email address per line: max 5 email addresses
                </div>
              </div>
              <div className="hidden md:flex  justify-end items-end gap-2 w-full my-4 px-5 ">
                <span
                  className="flex text-center p-2 px-4 bg-[#40F440] cursor-pointer rounded-md"
                  style={{
                    ...Typography,
                    color: "#27272D",
                    fontWeight: 700,
                  }}
                  onClick={handleRunReport}>
                  Run
                </span>
                <span
                  className="flex text-center p-2 px-4 bg-[#BA0416] cursor-pointer rounded-md"
                  style={{
                    ...Typography,
                    color: "#FFFFFF",
                    fontWeight: 700,
                  }}>
                  Cancel
                </span>
              </div>
            </div>
            <div className="flex md:hidden justify-end items-end gap-2 w-full my-4 px-5 ">
              <span
                className="flex text-center p-2 px-4 bg-[#40F440] cursor-pointer rounded-md"
                style={{ ...Typography, color: "#27272D", fontWeight: 700 }}
                onClick={handleRunReport}>
                Run
              </span>
              <span
                className="flex text-center p-2 px-4 bg-[#BA0416] cursor-pointer rounded-md"
                style={{ ...Typography, color: "#FFFFFF", fontWeight: 700 }}>
                Cancel
              </span>
            </div>
            <div className="flex md:hidden w-full mt-10 justify-center items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
          </div>
        </div>
        {showModal && <ReputationModel closeModal={closeModal} />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black z-50 bg-opacity-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-xl py-16 md:py-28 px-4 w-full max-w-md md:max-w-lg lg:max-w-3xl">
              <p className="text-xl md:text-3xl lg:text-5xl pb-4 py-6 font-bold text-center text-[#6D6D6D]">
                Currently Grabbing Reviews
              </p>
              <div className="flex justify-center space-x-2">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-3 bg-[#631363] rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      },
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReputationMobile;
