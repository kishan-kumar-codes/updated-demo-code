"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Layout from "../../layout";
// import ProgressBar from "@/pages/onboarding/layout/progressBar";
import ProgressBar from "../../layout/progressBar";
import { useClientMediaQuery } from "../../../../utils/srchooksuseClientMediaQuery";
import DesktopOnboardingVerifyAccount from "../../../onboardingDesktop/trials/verify-account/page";
import Image from "next/image";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";

const Verify = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const isMobile = useClientMediaQuery("(max-width: 769px)");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formattedValue = value.replace(/[^0-9]/g, "");

    if (formattedValue.length <= 4) {
      setCode(formattedValue);
      setError(""); // Clear any previous error

      if (formattedValue.length === 4) {
        setLoading(true);
        setTimeout(async () => {
          // Verify code

          if (formattedValue === "3904") {
            // Code is correct, proceed with navigation
            // router
            //   .push("/onboarding/education/business-goals")
            //   .catch((error) => console.error("Navigation error:", error));
            try {
              await router.push("/onboarding/education/business-goals");
              // Optionally, handle successful navigation here if needed
            } catch (error) {
              console.error("An error occurred during navigation:", error);
            }
          } else {
            // Code is incorrect, handle error
            setError("The entered code is incorrect.");
            setLoading(false);
          }
        }, 2000); // 2 seconds delay to show loading spinner
      }
    }
  };

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="px-[43px] flex items-center flex-col">
          <ProgressBar count={5} />

          <div className="flex flex-col items-center text-center mt-[27px]">
            <h1 className="text-[22px] md:text-3xl py-0 lg:py-4 lg:text-[45px] text-darkSilverColor font-bold">
              Perfect! We just texted you a code.
            </h1>
            <p className="text-[14px] md:text-xl tracking-tight lg:max-w-[55%] lg:leading-8 lg:text-[30px] text-darkSilverColor mt-[24px]">
              We sent a 4-digit code to <strong>(702)750-7081 </strong>. Enter
              the code to continue setting up
            </p>
            <input
              type="text"
              placeholder="Enter 4-digit code"
              value={code}
              onChange={handleChange}
              className="w-full bg-white md:w-[55%] lg:w-[40%] h-[33px] lg:mt-16 mt-[13px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] md:py-4 lg:py-8 lg:text-[30px]  rounded-2xl lg:rounded-3xl"
            />
            {loading && <div className="md:text-[26px]">Loading...</div>}
            {error && <div style={{ color: "red" }}>{error}</div>}{" "}
            {/* Display error when code is incorrect */}
          </div>
          <div className="text-[15px] lg:text-[30px] lg:max-w-[40%] lg:leading-8 mt-6 lg:mt-12 text-darkSilverColor text-center">
            Didn&apos;t get the code?{" "}
            <Link
              style={{ textDecoration: "none" }}
              href="/onboarding/trials/verify-account?product=">
              <span
                className="text-palatinatePurple lg:text-[30px]"
                style={{ cursor: "pointer" }}>
                Resend{" "}
              </span>
            </Link>
            or{" "}
            <Link
              style={{ textDecoration: "none" }}
              href="/onboarding/trials/verify-account?product=">
              <span
                className="lg:text-[30px] pb-0 lg:pb-10"
                style={{ cursor: "pointer" }}>
                Update your mobile number
              </span>
            </Link>
            <div className="absolute lg:hidden transform translate-x-16 translate-y-16 pt-6 md:pt-10 ">
              <Image src={hubSparkLogo} alt="Hub Spark Logo" />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Verify;
