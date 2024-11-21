"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Layout from "../../layout";
// import ProgressBar from "@/pages/onboardingDesktop/layout/progressBar";
import ProgressBar from "../../layout/progressBar";

const Verify = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

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
            //   .push("/onboardingDesktop/education/business-goals")
            //   .catch((error) => {});
            try {
              await router.push("/onboardingDesktop/education/business-goals");
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

          <div className="flex flex-col items-center text-center mt-[30px]">
            <h1 className="text-[22px] text-darkSilverColor font-bold">
              Perfect! We just texted you a code.
            </h1>
            <p className="text-[14px] text-darkSilverColor mt-[24px] max-w-[260px]">
              We sent a 4-digit code to <strong>(716) 572-2802</strong>. Enter
              the code to continue setting up
            </p>
            <input
              type="text"
              placeholder="Enter 4-digit code"
              value={code}
              onChange={handleChange}
              className="w-full max-w-[350px] bg-white h-[50px] mt-[13px] text-[16px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg"
            />
            {loading && <div>Loading...</div>}
            {error && <div style={{ color: "red" }}>{error}</div>}{" "}
            {/* Display error when code is incorrect */}
          </div>
          <div
            className="text-[15px] text-darkSilverColor text-center max-w-[220px]"
            style={{ marginTop: "20px" }}>
            Didn&apos;t get the code?{" "}
            <Link
              style={{ textDecoration: "none" }}
              href="/onboardingDesktop/trials/verify-account?product=">
              <span
                className="text-palatinatePurple"
                style={{ cursor: "pointer" }}>
                Resend{" "}
              </span>
            </Link>
            or{" "}
            <Link
              style={{ textDecoration: "none" }}
              href="/onboardingDesktop/trials/verify-account?product=">
              <span
                style={{ cursor: "pointer" }}
                className="text-palatinatePurple">
                Update your mobile number
              </span>
            </Link>
          </div>
        </div>
      }
    />
  );
};

export default Verify;
