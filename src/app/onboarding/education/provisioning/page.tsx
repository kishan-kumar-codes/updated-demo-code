"use client";
import React, { useState, useContext } from "react";
import Layout from "../../layout";
import { useRouter } from "next/navigation";
import Image from "next/image";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
import ProgressBar from "../../layout/progressBar";
import { MyContext } from "../../../../utils/MyContext";

const ScheduleCall: React.FC = () => {
  const router = useRouter();
  const context = useContext(MyContext);

  const handleExploreOnMyOwn = async () => {
    // router
    //   .push("/onboarding/education/schedule-call")
    //   .catch((error) => console.error("Navigation error:", error));
    try {
      await router.push("/onboarding/education/schedule-call");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
    // You can redirect them to a dashboard or main app page here, if desired.
  };

  const handleScheduleACall = () => {
    // Redirect to a scheduling page or open up a scheduling modal, etc.
  };

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="h-full flex flex-col items-center px-[43px]">
          <ProgressBar count={11} />
          <div className="text-center flex flex-col items-center mt-[28px]">
            <h2 className="text-[22px] font-bold text-center lg:text-[42px] lg:w-[50%] lg:leading-[42px] text-darkSilverColor ">
              We are already working on provisioning a business phone number to
              separate your work-life and personal-life.
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <button
              className="text-[16px] lg:text-[36px] font-bold text-white py-[10px] w-[221px] text-center mt-[44px] bg-palatinatePurple rounded-xl lg:rounded-3xl"
              onClick={handleExploreOnMyOwn}
              style={{ cursor: "pointer" }}>
              Continue
            </button>
          </div>
          <div className="absolute lg:hidden bottom-14">
            <Image src={hubSparkLogo} alt="Hub Spark Logo" />
          </div>
        </div>
      }
    />
  );
};

export default ScheduleCall;
