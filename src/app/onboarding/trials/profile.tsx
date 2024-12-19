"use client";

import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import Layout from "../layout";
import Image from "next/image";
import { MyContext } from "../../../utils/MyContext";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
// import ProgressBar from "@/pages/onboarding/layout/progressBar";
import ProgressBar from "../layout/progressBar";
import { useSession } from "next-auth/react";
import { useClientMediaQuery } from "../../../utils/srchooksuseClientMediaQuery";
//import DesktopOnboardingProfile from "../../onboardingDesktop/trials/profile";
interface ProfileProps {
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
  onProfileComplete: () => void;
}
const Profile: React.FC<ProfileProps> = ({ setProfile, onProfileComplete }) => {
  const router = useRouter();
  const context = useContext(MyContext);
  //const { updateContextData } = context;
  const isMobile = useClientMediaQuery("(max-width: 769px)");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") {
      //router.push("/onboarding/trials/business-info");
      router.push("/");
    }
  }, [status, router]);
  const [error, setError] = useState<string | null>(null);
  const handleContinueClick = async () => {
    if (context) {
      context.updateContextData({ firstName, lastName });
      console.log("made it here");
    }
    console.log("made it here");
    if (firstName && lastName) {
      onProfileComplete(); // Notify parent that profile is complete
      //router.push("/onboarding/trials/business-info");
    } else {
      console.log("Please fill out all fields.");
    }
    /*try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: session?.user?.accessToken,
          firstName: firstName,
          lastName: lastName,
          email: session?.user?.email,
        }),
      });
      if (!response.ok) {
        if (response.status === 500) {
          const data = await response.json();
          if (data.error === "Failed to refresh access token") {
            // Token refresh failed, prompt user to log in again
            setError("Session expired. Please log in again.");
            return;
          }
        }
        throw new Error("Failed to update profile");
      }
      const updatedUser = await response.json();
      session.user.firstName = updatedUser.firstName;
      session.user.lastName = updatedUser.lastName;*/
    // Navigate to the next page
    /*try {
        await router.push("/onboarding/trials/business-info");
        // Optionally, handle successful navigation here if needed
      } catch (error) {
        console.error("An error occurred during navigation:", error);
      }*/
    /*} catch (error) {
      console.error("Profile update error:", error);
      setError("Failed to update profile");
    }*/
  };
  return (
    <>
      <div className="flex justify-center">
        <ProgressBar count={2} />
      </div>
      <div className="relative h-full flex items-center justify-center w-full flex-col mt-[27px] px-[43px]">
        <div className="text-[22px] font-bold w-full text-darkSilverColor text-center">
          <h1 className="lg:text-[45px]" style={{ fontWeight: "bold" }}>
            Let&apos;s start by setting up your profile.
          </h1>
        </div>
        <p className="text-[16px] lg:text-[26px] text-center w-full text-darkSilverColor mt-[22px]">
          Set up your profile.
        </p>
        <div className="flex flex-col w-full items-center justify-center">
          <label
            className="text-start w-full lg:w-[40%] text-[14px] lg:text-[28px] font-bold text-darkSilverColor mt-[12px]"
            style={{ fontWeight: "bold" }}>
            First name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full lg:w-[40%] bg-white h-[33px] text-[12px] lg:text-[22px] text-darkSilverColor pl-[18px] py-[10px] lg:py-8 rounded-lg lg:rounded-xl"
          />
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <div className="text-[14px] lg:text-[28px]  font-bold w-full lg:w-[40%] text-darkSilverColor">
            <label style={{ fontWeight: "bold" }}>Last name</label>
          </div>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full lg:w-[40%] bg-white h-[33px] text-[12px] lg:text-[22px] text-darkSilverColor pl-[18px] py-[10px] lg:py-8 rounded-lg lg:rounded-xl"
          />
        </div>
        <div className="flex justify-center flex-col items-center gap-4 w-full">
          <button
            className="text-[16px] font-bold text-white py-[10px] mt-[25px] lg:text-[32px] w-[221px] text-center bg-palatinatePurple rounded-lg lg:rounded-2xl"
            onClick={handleContinueClick}
            style={{ cursor: "pointer" }}>
            Continue
          </button>
          <div className="lg:hidden flex justify-center left-[25%]">
            <Image src={hubSparkLogo} alt="Hub Spark Logo" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
