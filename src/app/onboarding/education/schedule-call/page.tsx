"use client";

import React from "react";
import Layout from "../../layout";
import { useRouter } from "next/navigation";
import Image from "next/image";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
import ProgressBar from "../../layout/progressBar";

const ScheduleCall: React.FC = () => {
  const router = useRouter();
  const handleExploreOnMyOwn = async () => {
    // routers
    //   .push("/onboarding/education/final")
    //   .catch((error) => console.error("Navigation error:", error));
    try {
      await router.push("/onboarding/education/final");
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

          {/* <div className="text-center mt-[28px]">
            <h2 className="text-[22px] font-bold text-darkSilverColor ">
              Reserve a time with one of our HubSpark experts
            </h2>
            <p className="text-[14px] font-bold text-darkSilverColor mt-[12px]">
              Schedule a 30 minute call and we&apos;ll help you get HubSpark set
              up, so you can make the most out of your 14-day free trial.
            </p>
          </div> */}
          <div className="flex flex-col w-full items-center">
            <div className="text-center w-full hidden lg:flex justify-center  lg:text-[45px] text-[#6D6D6D] pt-2 font-bold">
              Schedule a Call
            </div>
            <button
              className="text-[16px] lg:w-[40%] md:text:xl lg:text-[36px] font-bold text-white py-[10px] w-[221px] text-center mt-[44px] bg-palatinatePurple rounded-xl lg:rounded-3xl"
              onClick={handleExploreOnMyOwn}
              style={{ cursor: "pointer" }}>
              I&apos;ll explore on my own
            </button>
            <button
              className="text-[16px] lg:text-[36px] font-bold text-white py-[10px] px-[24px] lg:px-6 text-center mt-[12px] lg:w-[35%] bg-palatinatePurple rounded-xl lg:rounded-3xl"
              onClick={handleScheduleACall}
              style={{ cursor: "pointer", marginLeft: "10px" }}>
              Schedule a call
            </button>
          </div>
          <div className="absolute bottom-14 lg:hidden">
            <Image src={hubSparkLogo} alt="Hub Spark Logo" />
          </div>
        </div>
      }
    />
  );
};

export default ScheduleCall;
