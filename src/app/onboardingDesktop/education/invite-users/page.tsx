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
    //   .push("/onboardingDesktop/education/provisioning")
    //   .catch((error) => console.error("Navigation error:", error));
    try {
      await router.push("/onboardingDesktop/education/provisioning");
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
    // router
    //   .push("/onboardingDesktop/education/provisioning")
    //   .catch((error) => console.error("Navigation error:", error));
    try {
      await router.push("/onboardingDesktop/education/provisioning");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
  };

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="flex items-center flex-col px-[43px] overflow-y-auto overflow-x-hidden h-full">
          <ProgressBar count={10} />

          <div className="text-center justify-center fle flex-col items-center">
            <h1 className="text-[22px] text-darkSilverColor font-bold mt-[27px] ">
              Who else talks to <br /> your customers?
            </h1>
            <p className="text-[14px] text-darkSilverColor mt-[mt-24px] max-w-[350px]">
              Make customer communication a breeze by adding your team. They
              will be invited as Team Leaders with the ability to invite others.
              You can always change this later.
            </p>
          </div>

          <div style={{ position: "relative", marginTop: "26px" }}>
            <p
              className="text-[14px] text-darkSilverColor"
              style={{ fontWeight: "bold" }}>
              Your team
            </p>
            <input
              type="text"
              value={signedInUser ?? ""}
              readOnly
              className="w-[289px] bg-white h-[33px] mt-[11px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg"
              style={{
                padding: "10px",
                paddingRight: "40px",
                boxSizing: "border-box",
                backgroundColor: "#EBECF0",
              }}
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

          <div>
            <input
              type="text"
              placeholder="Employee #1's mobile phone or email"
              value={employee1Contact}
              onChange={(e) => setEmployee1Contact(e.target.value)}
              className="w-[289px] bg-white h-[33px] mt-[11px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg"
              style={{
                padding: "10px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Employee #2's mobile phone or email"
              value={employee2Contact}
              onChange={(e) => setEmployee2Contact(e.target.value)}
              className="w-[289px] bg-white h-[33px] mt-[11px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg"
              style={{
                padding: "10px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Employee #3's mobile phone or email"
              value={employee3Contact}
              onChange={(e) => setEmployee3Contact(e.target.value)}
              className="w-[289px] bg-white h-[33px] mt-[11px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg"
              style={{
                padding: "10px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div className="flex justify-center mt-[24px]">
            <button
              className="text-[16px] font-bold text-white py-[10px] w-[120px] text-center  bg-palatinatePurple rounded-lg"
              onClick={handleSkip}
              style={{ cursor: "pointer" }}>
              Skip
            </button>
            <button
              className="text-[16px] font-bold text-white py-[10px] w-[183px] text-center bg-palatinatePurple rounded-lg"
              onClick={handleContinue}
              style={{ marginLeft: "10px", cursor: "pointer" }}>
              Continue
            </button>
          </div>
        </div>
      }
    />
  );
};

export default TeamSetup;
