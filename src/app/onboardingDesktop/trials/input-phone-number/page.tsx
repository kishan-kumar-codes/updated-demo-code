"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import MobileNumberInput from "../../../../components/onboardingDesktop/MobileNumberInput";
import Layout from "../../layout";

import ProgressBar from "../../layout/progressBar";
import { MyContext } from "../../../../utils/MyContext";

const Phone = () => {
  const context = useContext(MyContext);
  // const { contextData, updateContextData } = context;
  const [mobileNumber, setMobileNumber] = React.useState("");
  const router = useRouter();

  const handleMobileNumberChange = (mobileNumber: string) => {
    setMobileNumber(mobileNumber);
  };

  const handleSendCode = async () => {
    // Validate mobile number
    if (mobileNumber.length < 10) {
      alert("Please enter a valid mobile number.");
      return;
    }

    if (context) {
      context.updateContextData({ phoneNumber: mobileNumber });
    }
    // updateContextData({ phoneNumber: mobileNumber });
    // Send code
    // ... add code to send SMS code
    try {
      await router.push("/onboardingDesktop/trials/verify-account?product=");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
    // router
    //   .push("/onboardingDesktop/trials/verify-account?product=")
    //   .catch((error) => {});
  };

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="flex-1 px-[43px] flex items-center flex-col">
          <ProgressBar count={4} />

          <div className="flex flex-col text-center mt-[27px] max-w-[350px] w-full">
            <div className="mx-auto text-[22px] bg-[#F4F4F4] text-darkSilverColor font-bold">
              Enter your mobile number
            </div>
            <div className="mx-auto w-full">
              <MobileNumberInput
                onMobileNumberChange={handleMobileNumberChange}
              />
            </div>
            <button
              className="mx-auto  text-[16px] font-bold text-white py-[10px] mt-[14px] w-[221px] text-center bg-palatinatePurple rounded-2xl"
              onClick={handleSendCode}
              style={{ cursor: "pointer" }}>
              Send Code
            </button>
          </div>
          <div className="flex flex-col text-center mt-[21px]">
            <h5 className="mx-auto text-[14px] text-darkSilverColor">
              By continuing, you authorize HubSpark to send text messages to the
            </h5>
            <div className=" mx-auto text-[14px] text-darkSilverColor">
              mobile number provided. Message/data rates may apply.
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Phone;
