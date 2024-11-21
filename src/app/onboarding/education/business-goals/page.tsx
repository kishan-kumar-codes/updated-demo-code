"use client";

import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Layout from "../../layout";
import Image from "next/image";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
// import ProgressBar from "@/pages/onboarding/layout/progressBar";
import ProgressBar from "../../layout/progressBar";
import { MyContext } from "../../../../utils/MyContext";
import { Checkbox } from "@/components/ui/checkbox";

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
    // router
    //   .push("/onboarding/education/user-details")
    //   .catch((error) => console.error("Navigation error:", error));
    try {
      await router.push("/onboarding/education/upload");
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
    //   .push("/onboarding/education/upload")
    //   .catch((error) => console.error("Navigation error:", error));

    try {
      await router.push("/onboarding/education/upload");
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

          <h1 className="text-center mt-[28px] leading-normal text-[22px] md:text-3xl lg:text-[45px]  text-darkSilverColor font-bold">
            What are your top goals right now?
          </h1>
          <p className="text-center mt-[34px] text-[14px] lg:leading-snug md:text-lg lg:text-[30px] lg:max-w-[40%] text-darkSilverColor">
            Tell us what you need. We&apos;ll do the rest. Select all that
            apply.
          </p>
          <div className="w-full flex flex-col justify-center items-center lg:max-w-[50%] text-start">
            <div>
              <div className="mt-[33px]">
                <label>
                  <Checkbox
                    checked={checkedItems[0]}
                    onCheckedChange={() => handleCheckboxChange(0)}
                    className="border border-black rounded-sm"
                  />
                  <span className="ml-[8px] text-[14px] md:text-lg lg:text-[30px]  text-darkSilverColor">
                    Get more customers
                  </span>
                </label>
              </div>
              <div>
                <label>
                  <Checkbox
                    checked={checkedItems[1]}
                    onCheckedChange={() => handleCheckboxChange(1)}
                    className="border border-black rounded-sm"
                  />
                  <span className="ml-[8px] text-[14px] md:text-lg lg:text-[30px] text-darkSilverColor">
                    Communicate better with my customers
                  </span>
                </label>
              </div>
              <div>
                <label>
                  <Checkbox
                    checked={checkedItems[2]}
                    onCheckedChange={() => handleCheckboxChange(2)}
                    className="border border-black rounded-sm"
                  />
                  <span className="ml-[8px] text-[14px] md:text-lg lg:text-[30px] text-darkSilverColor">
                    Convert website visitors into leads
                  </span>
                </label>
              </div>
              <div>
                <label>
                  <Checkbox
                    checked={checkedItems[3]}
                    onCheckedChange={() => handleCheckboxChange(3)}
                    className="border border-black rounded-sm"
                  />
                  <span className="ml-[8px] text-[14px] md:text-lg lg:text-[30px] text-darkSilverColor">
                    Make it easier for my customers to pay
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="my-7 flex gap-4">
            <button
              className="text-[16px] md:text-lg font-bold text-white py-[10px] px-[44px] text-center bg-palatinatePurple rounded-xl lg:rounded-xl lg:text-[36px] lg:px-10 lg:py-4"
              onClick={handleSkip}
              // style={{ cursor: isAnyItemChecked ? "pointer" : "not-allowed" }}
            >
              Skip
            </button>
            <button
              onClick={handleContinue}
              // style={{ cursor: isAnyItemChecked ? "pointer" : "not-allowed" }}
              className="text-[16px] font-bold md:text-lg text-white ml-[7px] md:ml-0 py-[10px] w-[192px] lg:w-[312px] text-center bg-palatinatePurple rounded-xl lg:rounded-2xl lg:text-[36px] lg:px-10 lg:py-4">
              Continue
            </button>
          </div>
          <div className="absolute lg:hidden bottom-[-86px] transform translate-x-0 ">
            <Image src={hubSparkLogo} alt="Hub Spark Logo" />
          </div>
        </div>
      }
    />
  );
};

export default Checklist;
