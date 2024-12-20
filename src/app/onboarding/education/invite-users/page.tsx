"use client";

import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Layout from "../../layout";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
import Image from "next/image";
import ProgressBar from "../../layout/progressBar";
import { MyContext } from "../../../../utils/MyContext";
import { useSession } from "next-auth/react";
import { LockKeyhole } from "lucide-react";

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

          <div className="text-center flex flex-col w-full justify-center items-center">
            <h1 className="text-[22px] lg:text-[40px] lg:leading-[42px] lg:w-[40%] leading-normal text-darkSilverColor font-bold mt-[27px]">
              Who else talks to your customers?
            </h1>
            <p className="text-[14px] lg:text-[30px] w-full mt-6 lg:mt-12 lg:w-[48%] lg:leading-8 text-center text-darkSilverColor">
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
            <div className="relative w-full">
              <input
                type="text"
                value={signedInUser ? signedInUser : undefined}
                readOnly
                className="w-[289px] lg:w-full h-[33px] mt-[11px] text-[12px] text-[#6D6D6D] pl-4 py-[10px] lg:text-[22px] lg:py-7 rounded-xl lg:rounded-3xl"
              />

              <div className="absolute right-2 top-1 md:top-[1px] py-[10px]  lg:py-7">
                <LockKeyhole color="#6D6D6D" />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-start lg:justify-center items-center">
            <input
              type="text"
              placeholder="Employee #1's mobile phone or email"
              value={employee1Contact}
              onChange={(e) => setEmployee1Contact(e.target.value)}
              className="w-[289px] lg:w-[40%] bg-white h-[33px] mt-[11px] text-[12px] text-darkSilverColor pl-[18px] py-[10px]  lg:text-[22px] lg:py-7 rounded-xl lg:rounded-3xl"
            />
          </div>

          <div className="w-full flex flex-col  justify-start lg:justify-center items-center">
            <input
              type="text"
              placeholder="Employee #2's mobile phone or email"
              value={employee2Contact}
              onChange={(e) => setEmployee2Contact(e.target.value)}
              className="w-[289px] lg:w-[40%] bg-white h-[33px] mt-[11px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] lg:text-[22px] lg:py-7 rounded-xl lg:rounded-3xl"
            />
          </div>

          <div className="w-full flex flex-col justify-start lg:justify-center items-center">
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
