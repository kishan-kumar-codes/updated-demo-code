"use client";

import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Layout from "../../layout";
import Image from "next/image";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
// import ProgressBar from "@/pages/onboardingDesktop/layout/progressBar";
import ProgressBar from "../../layout/progressBar";
import { MyContext } from "../../../../utils/MyContext";

const Checklist = () => {
  const router = useRouter();
  const context = useContext(MyContext);
  // const { contextData, updateContextData } = context;

  const [checkedItems, setCheckedItems] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleSkip = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default form submission
    // router.push("/onboardingDesktop/education/upload").catch((error) => {});
    try {
      await router.push("/onboardingDesktop/education/upload");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
  };

  const handleContinue = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default form submission

    const goals = [
      "Get more customers",
      "Communicate better with my customers",
      "Convert website visitors into leads",
      "Make it easier for my customers to pay",
    ];

    const selectedGoals = goals.filter((goal, index) => checkedItems[index]);

    // updateContextData({ goals: selectedGoals });

    if (context) {
      context.updateContextData({ goals: selectedGoals });
    }

    // router
    //   .push("/onboardingDesktop/education/upload")
    //   .catch((error) => console.error("Navigation error:", error));
    try {
      await router.push("/onboardingDesktop/education/upload");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
  };

  const isAnyItemChecked = checkedItems.some((item) => item);

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="px-[43px] flex items-center flex-col relative h-full">
          <ProgressBar count={6} />

          <h1 className="text-center mt-[28px] text-[22px] text-darkSilverColor font-bold">
            What are your top goals right now?
          </h1>
          <p className="text-center mt-[34px] text-[14px] text-darkSilverColor max-w-[220px]">
            Tell us what you need. We&apos;ll do the rest. Select all that
            apply.
          </p>
          <div className="w-full max-w-[320px] text-left">
            <div className="mt-[33px]">
              <label>
                <input
                  type="checkbox"
                  checked={checkedItems[0]}
                  onChange={() => handleCheckboxChange(0)}
                  className="bg-limeGreen w-[14px] h-[14px]"
                />
                <span className="ml-[8px] text-[14px] text-darkSilverColor">
                  Get more customers
                </span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={checkedItems[1]}
                  onChange={() => handleCheckboxChange(1)}
                  className="bg-limeGreen w-[14px] h-[14px]"
                />
                <span className="ml-[8px] text-[14px] text-darkSilverColor">
                  Communicate better with my customers
                </span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={checkedItems[2]}
                  onChange={() => handleCheckboxChange(2)}
                  className="bg-limeGreen w-[14px] h-[14px]"
                />
                <span className="ml-[8px] text-[14px] text-darkSilverColor">
                  Convert website visitors into leads
                </span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={checkedItems[3]}
                  onChange={() => handleCheckboxChange(3)}
                  className="bg-limeGreen w-[14px] h-[14px]"
                />
                <span className="ml-[8px] text-[14px] text-darkSilverColor">
                  Make it easier for my customers to pay
                </span>
              </label>
            </div>
          </div>
          <div style={{ marginTop: "32px", display: "flex" }}>
            <button
              className="text-[16px] font-bold text-white py-[10px] px-[44px] text-center bg-palatinatePurple rounded-2xl"
              onClick={handleSkip}
              style={{ cursor: "pointer" }}>
              Skip
            </button>
            <button
              onClick={handleContinue}
              disabled={!isAnyItemChecked} // Disable the button if no items are checked
              style={{ cursor: isAnyItemChecked ? "pointer" : "not-allowed" }}
              className="text-[16px] font-bold text-white ml-[7px] py-[10px] w-[183px] text-center bg-palatinatePurple rounded-2xl">
              Continue
            </button>
          </div>
        </div>
      }
    />
  );
};

export default Checklist;
