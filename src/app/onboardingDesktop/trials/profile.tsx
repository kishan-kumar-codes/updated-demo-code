// components/Profile.tsx

import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import Layout from "../layout";
import Image from "next/image";
import { MyContext } from "../../../utils/MyContext";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
// import ProgressBar from "@/pages/onboardingDesktop/layout/progressBar";
import ProgressBar from "../layout/progressBar";
import { useSession } from "next-auth/react";

const Profile: React.FC = () => {
  const router = useRouter();
  const context = useContext(MyContext);

  const { data: session, status } = useSession();
  console.log("session", session);
  // const sessionToken  = session<Session>

  if (session) {
    localStorage.setItem(
      "sessionToken",
      String(session?.session[0]?.sessionToken)
    );
    localStorage.setItem(
      "sessionRefreshToken",
      String(session?.session[0]?.refreshToken)
    );
  }
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/onboardingDesktop/trials/business-info");
    }
  }, [status, router]);

  const [firstName, setFirstName] = useState(session?.user?.firstName || "");
  const [lastName, setLastName] = useState(session?.user?.lastName || "");
  const [error, setError] = useState<string | null>(null);

  const handleContinueClick = async () => {
    if (context) {
      context.updateContextData({ firstName, lastName });
    }

    // try {
    //   const response = await fetch("/api/profile/update-profile", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       token: session?.session[0],
    //       firstName: firstName,
    //       lastName: lastName,
    //       email: session?.email,
    //     }),
    //   });

    //   if (!response.ok) {
    //     if (response.status === 500) {
    //       const data = await response.json();
    //       if (data.error === "Failed to refresh access token") {
    //         // Token refresh failed, prompt user to log in again
    //         setError("Session expired. Please log in again.");
    //         return;
    //       }
    //     }
    //     throw new Error("Failed to update profile");
    //   }

    //   const updatedUser = await response.json();
    //   session.user.firstName = updatedUser.firstName;
    //   session.user.lastName = updatedUser.lastName;

    //   // Navigate to the next page
    // router
    //   .push("/onboardingDesktop/trials/business-info")
    //   .catch((error) => console.error("Navigation error:", error));
    try {
      await router.push("/onboardingDesktop/trials/business-info");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
    // } catch (error) {
    //   console.error("Profile update error:", error);
    //   setError("Failed to update profile");
    // }
  };

  return (
    <Layout
      hHeading=""
      Childrens={
        <>
          <div className="px-[43px] flex items-center flex-col relative ">
            <ProgressBar count={2} />
          </div>
          <div className="relative h-full flex items-center justify-start w-full flex-col mt-[27px] px-[43px] ">
            <div className="text-[22px] font-bold text-darkSilverColor text-center max-w-[400px]">
              <h1 style={{ fontWeight: "bold" }}>
                Let&apos;s start by setting up your profile.
              </h1>
            </div>
            <p className="text-[16px] text-darkSilverColor mt-[22px]">
              Set up your profile.
            </p>
            <div className="max-w-[350px] w-full">
              <div style={{ width: "100%" }}>
                <div className="text-[14px] font-bold text-darkSilverColor mt-[12px]">
                  <label style={{ fontWeight: "bold" }}>First name</label>
                </div>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-white h-[33px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg"
                />
              </div>

              <div style={{ width: "100%", marginTop: "5px" }}>
                <div className="text-[14px] font-bold text-darkSilverColor">
                  <label style={{ fontWeight: "bold" }}>Last name</label>
                </div>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-white h-[33px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg"
                />
              </div>

              <div className="flex justify-center w-full">
                <button
                  className="text-[16px] font-bold text-white py-[10px] mt-[25px] w-[221px] text-center bg-palatinatePurple rounded-2xl"
                  onClick={handleContinueClick}
                  style={{ cursor: "pointer" }}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default Profile;
