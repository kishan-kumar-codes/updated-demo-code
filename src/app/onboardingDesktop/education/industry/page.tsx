"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import DropDown from "../../../../components/onboardingDesktop/DropDown";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
import Layout from "../../layout";
import Image from "next/image";
// import ProgressBar from "@/pages/onboardingDesktop/layout/progressBar";
import ProgressBar from "../../layout/progressBar";
import { MyContext } from "../../../../utils/MyContext";

const Industry = () => {
  const context = useContext(MyContext);
  // const { contextData, updateContextData } = context;
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

    // Navigate to the next page
    // router
    //   .push(`/onboardingDesktop/education/webchat`)
    //   .catch((error) => console.error("Navigation error:", error));
    try {
      await router.push("/onboardingDesktop/education/webchat");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
  };

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="text-center px-[43px] flex flex-col items-center h-full overflow-y-auto overflow-x-hidden">
          <ProgressBar count={8} />

          <h1 className="text-[22px] lg:text-[45px] text-darkSilverColor font-bold mt-[27px] mb-4">
            What&apos;s your industry?
          </h1>
          <div
            className="text-[14px] text-darkSilverColor font-bold"
            style={{ marginBottom: "10px" }}>
            <label style={{ fontWeight: "bold" }}>
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
              className="text-[14px] text-darkSilverColor font-bold"
              style={{ marginBottom: "10px" }}>
              <label style={{ fontWeight: "bold" }}>
                How many people work at your company?
              </label>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                gap: "10px",
              }}>
              {["Just Me", "2 - 4", "5 - 9", "10 - 24", "25 +"].map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => handleEmployeeSelection(option)}
                    className={`text-[14px] rounded-2xl ${
                      selectedEmployees === option
                        ? "bg-palatinatePurple text-white"
                        : "bg-darkSilverColor text-white"
                    }`}
                    style={{
                      padding: "8px 16px",
                      cursor: "pointer",
                    }}>
                    {option}
                  </button>
                )
              )}
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <div
              className="text-[14px] text-darkSilverColor font-bold"
              style={{ marginBottom: "10px" }}>
              <label style={{ fontWeight: "bold" }}>
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
                  className={`text-[14px] rounded-2xl ${
                    selectedRevenue === option
                      ? "bg-palatinatePurple text-white"
                      : "bg-darkSilverColor text-white"
                  }`}
                  style={{
                    padding: "8px 16px",
                    height: "33px",
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
              className="text-[16px] font-bold text-white py-[10px] w-[137px] text-center mt-[10px] bg-palatinatePurple rounded-lg"
              disabled={!canProceed()} // Button is disabled if not all conditions are met
              style={{ cursor: canProceed() ? "pointer" : "not-allowed" }}>
              Continue
            </button>
          </div>
        </div>
      }
    />
  );
};

export default Industry;
