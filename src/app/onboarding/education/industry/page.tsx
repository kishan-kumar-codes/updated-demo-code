"use client";

import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import DropDown from "../../../../components/onboarding/DropDown";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
import Layout from "../../layout";
import Image from "next/image";
// import ProgressBar from "@/pages/onboarding/layout/progressBar";
import ProgressBar from "../../layout/progressBar";
// import { MyContext } from "../../../utils/MyContext";
import { MyContext } from "@/utils/MyContext";

const Industry = () => {
  const context = useContext(MyContext);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedEmployees, setSelectedEmployees] = useState<string | null>(
    null
  );
  const [selectedRevenue, setSelectedRevenue] = useState<string | null>(null);
  const router = useRouter();

  const handleEmployeeSelection = (option: string) => {
    setSelectedEmployees(option);
  };

  const handleRevenueSelection = (option: string) => {
    setSelectedRevenue(option);
  };

  // Check if all necessary fields are filled in
  const canProceed = () => {
    return (
      selectedIndustry &&
      (selectedIndustry !== "other" || searchTerm) &&
      selectedEmployees &&
      selectedRevenue
    );
  };

  const handleContinue = async () => {
    // Update the context with the selected values

    if (context) {
      context.updateContextData({
        selectedIndustry,
        searchTerm,
        selectedEmployees,
        selectedRevenue,
      });
    }
    // updateContextData({
    //   selectedIndustry,
    //   searchTerm,
    //   selectedEmployees,
    //   selectedRevenue,
    // });

    // Navigate to the next page
    // router
    //   .push(`/onboarding/education/webchat`)
    //   .catch((error) => console.error("Navigation error:", error));
    try {
      await router.push("/onboarding/education/webchat");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
  };

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="text-center px-[43px] flex flex-col items-center overflow-y-auto overflow-x-hidden">
          <ProgressBar count={8} />

          <h1 className="text-[22px] lg:text-[45px] text-darkSilverColor font-bold mt-[27px]">
            What&apos;s your industry?
          </h1>
          {/* <p className="text-[14px] text-darkSilverColor font-bold">
            Later on, we&apos;ll suggest strategies that have proved effective
            for businesses like yours.
          </p> */}
          <div
            className="text-[14px] text-darkSilverColor font-bold"
            style={{ marginBottom: "10px" }}>
            <label className="lg:text-[30px] lg:font-normal">
              What industry are you in?
            </label>
          </div>

          <div className="flex justify-center">
            <DropDown
              selectedIndustry={selectedIndustry}
              setSelectedIndustry={setSelectedIndustry}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <div
              className="text-[14px] lg:text-[30px] text-darkSilverColor font-bold"
              style={{ marginBottom: "10px" }}>
              <label style={{ fontWeight: "bold" }}>
                How many people work at your company?
              </label>
            </div>
            <div
              className="lg:text-[30px]"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                gap: "10px",
              }}>
              {["Just Me", "2-4", "5-9", "10-24", "25+"].map((option) => (
                <button
                  key={option}
                  onClick={() => handleEmployeeSelection(option)}
                  className={`text-[14px] whitespace-nowrap px-4 py-2 rounded-2xl lg:text-[26px] ${
                    selectedEmployees === option
                      ? "bg-palatinatePurple text-white"
                      : "bg-darkSilverColor text-white"
                  }`}
                  style={{
                    cursor: "pointer",
                  }}>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <div
              className="text-[14px] text-darkSilverColor font-bold"
              style={{ marginBottom: "10px" }}>
              <label
                className="text-[14px] lg:text-[30px] leading-normal"
                style={{ fontWeight: "bold" }}>
                What&apos;s your annual revenue?
              </label>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                "< $500k",
                "$500k - $1M",
                "$1M - $2M",
                "$2M - $5M",
                "$5M +",
                "Not sure",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => handleRevenueSelection(option)}
                  className={`text-[14px] lg:text-[26px] rounded-2xl ${
                    selectedRevenue === option
                      ? "bg-palatinatePurple text-white"
                      : "bg-darkSilverColor text-white"
                  }`}
                  style={{
                    padding: "8px 4px",
                    cursor: "pointer",
                  }}>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <button
              onClick={handleContinue}
              className="text-[16px] font-bold text-white py-[10px] px-8 lg:text-[36px] text-center mt-[10px] bg-palatinatePurple rounded-2xl lg:rounded-3xl mb-4 "
              disabled={!canProceed()} // Button is disabled if not all conditions are met
              style={{ cursor: canProceed() ? "pointer" : "not-allowed" }}>
              Continue
            </button>
            <div className="flex lg:hidden">
              <Image src={hubSparkLogo} alt="Hub Spark Logo" />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Industry;
