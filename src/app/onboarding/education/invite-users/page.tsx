"use client";

import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Layout from "../../layout";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
import Image from "next/image";
import ProgressBar from "../../layout/progressBar";
import { MyContext } from "../../../../utils/MyContext";
import { useSession } from "next-auth/react";

const TeamSetup: React.FC = () => {
  const context = useContext(MyContext);
  const { data: session, status } = useSession();
  const signedInUser = session?.user?.email;
  const [employee1Contact, setEmployee1Contact] = useState("");
  const [employee2Contact, setEmployee2Contact] = useState("");
  const [employee3Contact, setEmployee3Contact] = useState("");
  const router = useRouter();

  const handleSkip = async () => {
    // router
    //   .push("/onboarding/education/provisioning")
    //   .catch((error) => console.error("Navigation error:", error));
    try {
      await router.push("/onboarding/education/schedule-call");
      // await router.push("/onboarding/education/integrations");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
  };

  const handleContinue = async () => {
    const inviteEmailList = [
      signedInUser,
      employee1Contact,
      employee2Contact,
      employee3Contact,
    ].filter((email): email is string => Boolean(email));

    if (context) {
      context.updateContextData({ inviteEmailList });
    }
    try {
      await router.push("/onboarding/education/schedule-call");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
    // router
    //   .push("/onboarding/education/provisioning")
    //   .catch((error) => console.error("Navigation error:", error));
  };

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="flex items-center flex-col px-[43px] overflow-y-auto overflow-x-hidden h-full">
          <ProgressBar count={10} />

          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="text-[22px] lg:text-[40px] lg:leading-[42px] lg:w-[40%] leading-normal text-darkSilverColor font-bold mt-[27px]">
              Who else talks to your customers?
            </h1>
            <p className="text-[14px] lg:text-[30px] mt-6 lg:mt-12 lg:w-[48%] lg:leading-8 text-center text-darkSilverColor">
              Make customer communication a breeze by adding your team. They
              will be invited as Team Leaders with the ability to invite others.
              You can always change this later.
            </p>
          </div>

          <div
            className="w-full flex flex-col lg:w-[40%] justify-start lg:justify-center items-center"
            style={{ position: "relative", marginTop: "26px" }}>
            <p
              className="text-[14px] text-start w-[289px] lg:w-full lg:text-[30px] text-darkSilverColor"
              style={{ fontWeight: "bold" }}>
              Your team
            </p>
            <input
              type="text"
              value={signedInUser ? signedInUser : undefined}
              readOnly
              className="w-[289px] lg:w-full h-[33px] mt-[11px] text-[12px] text-[#6D6D6D] pl-[18px] py-[10px] lg:text-[22px] lg:py-7 rounded-xl lg:rounded-3xl"
            />
            <svg
              width="20"
              height="20"
              style={{
                position: "absolute",
                right: "1280px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
              viewBox="-4 0 32 32">
              <path
                d="M26,12H24V7h-.069A7.993,7.993,0,0,0,8.069,7H8v5H6a2,2,0,0,0-2,2V30a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V14A2,2,0,0,0,26,12ZM12,8a4,4,0,0,1,8,0v4H12ZM23,28H9a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1H23a1,1,0,0,1,1,1V27A1,1,0,0,1,23,28Z"
                fill="#ccc"></path>
              <circle cx="16" cy="22" r="2" fill="#ccc"></circle>
            </svg>
          </div>

          <div className="w-full flex justify-center items-center">
            <input
              type="text"
              placeholder="Employee #1's mobile phone or email"
              value={employee1Contact}
              onChange={(e) => setEmployee1Contact(e.target.value)}
              className="w-[289px] lg:w-[40%] bg-white h-[33px] mt-[11px] text-[12px] text-darkSilverColor pl-[18px] py-[10px]  lg:text-[22px] lg:py-7 rounded-xl lg:rounded-3xl"
            />
          </div>

          <div className="w-full flex justify-center items-center">
            <input
              type="text"
              placeholder="Employee #2's mobile phone or email"
              value={employee2Contact}
              onChange={(e) => setEmployee2Contact(e.target.value)}
              className="w-[289px] lg:w-[40%] bg-white h-[33px] mt-[11px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] lg:text-[22px] lg:py-7 rounded-xl lg:rounded-3xl"
            />
          </div>

          <div className="w-full flex justify-center items-center">
            <input
              type="text"
              placeholder="Employee #3's mobile phone or email"
              value={employee3Contact}
              onChange={(e) => setEmployee3Contact(e.target.value)}
              className="w-[289px] lg:w-[40%] bg-white h-[33px] mt-[11px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] lg:text-[22px] lg:py-7 rounded-xl lg:rounded-3xl"
            />
          </div>
          <div className="flex justify-center mt-[24px] mb-10">
            <button
              className="text-[16px] lg:text-[36px] font-bold text-white py-[10px] w-[120px] text-center  bg-palatinatePurple rounded-2xl lg:rounded-3xl lg:w-[202px]"
              onClick={handleSkip}
              style={{ cursor: "pointer" }}>
              Skip
            </button>
            <button
              className="text-[16px] lg:text-[36px] font-bold text-white py-[10px] w-[183px] text-center bg-palatinatePurple rounded-2xl lg:rounded-3xl lg:w-[312px]"
              onClick={handleContinue}
              style={{ marginLeft: "10px", cursor: "pointer" }}>
              Continue
            </button>
          </div>
          <div className="relative bottom-2 lg:hidden mt-[15px]">
            <Image src={hubSparkLogo} alt="Hub Spark Logo" />
          </div>
        </div>
      }
    />
  );
};

export default TeamSetup;
