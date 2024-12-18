"use client";

import React, { useContext } from "react";
import Layout from "../../layout";
import { useRouter } from "next/navigation";
import Image from "next/image";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
import ProgressBar from "../../layout/progressBar";
import { MyContext } from "../../../../utils/MyContext";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Final: React.FC = () => {
  const router = useRouter();
  const context = useContext(MyContext);
  //console.log(context);
  const { data: session, status } = useSession();
  //console.log("session user email:", session?.user?.email);

  const handleContinueClick = async () => {
    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session?.user?.email,
          firstName: context && context.contextData.firstName,
          lastName: context && context.contextData.lastName,
          businessInfo: context && context.contextData.businessInfo,
          goals: context && context.contextData.goals,
          image: context && context.contextData.image,
          jobTitle: context && context.contextData.jobTitle,
          selectedIndustry: context && context.contextData.selectedIndustry,
          selectedEmployees: context && context.contextData.selectedEmployees,
          selectedRevenue: context && context.contextData.selectedRevenue,
          emailList: context && context.contextData.emailList,
          businessWebsite: context && context.contextData.businessWebsite,
          inviteEmailList: context && context.contextData.inviteEmailList,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (
          response.status === 500 &&
          errorData.error === "Failed to refresh refresh token"
        ) {
          // Token refresh failed, prompt user to log in again
          console.error("Session expired. Please log in again.");
          // Implement your logic to redirect to login page or show a modal
          return;
        }
        throw new Error(errorData.error || "Failed to update profile");
      }

      const updatedUser = await response.json();
      context?.clearContext();

      // Navigate to the next page
      // router
      //   .push("/onboarding/trials/business-info")
      //   .catch((error) => console.error("Navigation error:", error));
      try {
        await router.push("/onboarding/trials/business-info");
        // Optionally, handle successful navigation here if needed
      } catch (error) {
        console.error("An error occurred during navigation:", error);
      }
    } catch (error) {
      console.error("Profile update error:", error);
    }
  };

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="h-full flex flex-col items-center w-full px-[43px]">
          <ProgressBar count={12} />
          <div className="text-center flex flex-col justify-center items-center mt-[28px]">
            <h2 className="text-[22px] leading-6 lg:w-[60%] lg:text-[45px] lg:leading-[44px] font-bold text-darkSilverColor ">
              Congrats! In two minutes, you will be able to accept payments from
              your customers!
            </h2>
          </div>
          <div className="flex flex-col  w-full items-center">
            {/* <button
              className="text-[16px] lg:text-[36px] lg:w-[50%]  font-bold text-white py-[10px] w-[300px] px-3 text-center mt-[44px] bg-palatinatePurple rounded-xl"
              onClick={handleContinueClick}
              style={{ cursor: "pointer" }}>
              Finish HubSpark Payments Setup
            </button> */}
            <button
              className="text-[16px] lg:text-[36px] font-bold text-white py-[10px] w-[221px] lg:w-[45%] text-center mt-[20px] bg-palatinatePurple rounded-xl lg:rounded-2xl"
              onClick={handleContinueClick}
              style={{ cursor: "pointer" }}>
              <Link href="/onboarding/merchent-onboarding">
                Finish HubSpark Payments Setup
              </Link>
            </button>
            <button
              className="text-[16px] lg:text-[36px] font-bold text-white py-[10px] w-[221px] lg:w-[30%] text-center mt-[20px] bg-palatinatePurple rounded-xl lg:rounded-2xl"
              onClick={handleContinueClick}
              style={{ cursor: "pointer" }}>
              <Link href="/documents/page">Go to Documents</Link>
            </button>

            <button
              className="text-[16px] lg:text-[36px] font-bold text-white py-[10px] w-[221px] lg:w-[30%] text-center mt-[20px] bg-palatinatePurple rounded-xl lg:rounded-2xl"
              onClick={handleContinueClick}
              style={{ cursor: "pointer" }}>
              <Link href="/citations-builder">
                {/* Skip This For Now */}
                Go to Citation Builder
              </Link>
            </button>
            <button
              className="text-[16px] lg:text-[36px] font-bold text-white py-[10px] w-[221px] lg:w-[30%] text-center mt-[20px] bg-palatinatePurple rounded-xl lg:rounded-2xl"
              onClick={handleContinueClick}
              style={{ cursor: "pointer" }}>
              <Link href="/get-reviews">
                {/* Skip This For Now */}
                Go to Reputation
              </Link>
            </button>
            <button
              className="text-[16px] lg:text-[36px] font-bold text-white py-[10px] w-[221px] lg:w-[30%] text-center mt-[20px] bg-palatinatePurple rounded-xl lg:rounded-2xl"
              onClick={handleContinueClick}
              style={{ cursor: "pointer" }}>
              <Link href="/crm/companies">
                {/* Skip This For Now */}
                Go to Crm
              </Link>
            </button>
            <button
              className="text-[16px] lg:text-[36px] font-bold text-white py-[10px] w-[221px] lg:w-[30%] text-center mt-[20px] bg-palatinatePurple rounded-xl lg:rounded-2xl"
              onClick={handleContinueClick}
              style={{ cursor: "pointer" }}>
              <Link href="/Payment/insights">
                {/* Skip This For Now */}
                Go to Payments
              </Link>
            </button>
          </div>
          <div className="lg:hidden py-4">
            <Image src={hubSparkLogo} alt="Hub Spark Logo" />
          </div>
        </div>
      }
    />
  );
};

export default Final;
