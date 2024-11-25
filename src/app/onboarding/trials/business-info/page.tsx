"use client";

import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import AutoComplete from "@/components/onboarding/AutoComplete";
import Layout from "../../layout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
import { Eye, EyeOff } from "lucide-react";
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";
import DesktopOnboardingBusinessProfile from "@/app/onboardingDesktop/trials/business-info/page";
import Profile from "@/app/onboarding/trials/profile";
import ProgressBar from "../../layout/progressBar";

export default function Trials() {
  const router = useRouter();
  const { data, status } = useSession();
  const [showEmailField, setShowEmailField] = useState(false);
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isProfileComplete, setIsProfileComplete] = useState(false);

  // Determine if the sign-in provider is Google or Facebook
  const provider = data?.provider;

  const onEmailClick = () => {
    setShowEmailField(true);
  };

  const onContinueWithEmail = () => {
    setShowPasswordField(true);
  };

  const onSignIn = async () => {
    setShowProfile(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.ok) {
      setShowProfile(true);
    }
  };

  const handleProfileComplete = () => {
    setIsProfileComplete(true);
  };

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="relative flex justify-center items-center flex-col">
          {data?.user &&
          (provider === "google" ||
            provider === "facebook_business" ||
            isProfileComplete) ? (
            <>
              <div className="absolute top-0">
                <ProgressBar count={3} />
              </div>
              <div className="mt-10 w-full">
                <AutoComplete />
              </div>
              <button
                className="text-[16px] md:text-[36px] font-bold text-white py-[10px] mt-[17px] w-[221px] md:w-[580px] md:mt-3 md:py-4 text-center bg-palatinatePurple rounded-2xl md:rounded-[30px]"
                onClick={() => signOut()}
                style={{ cursor: "pointer" }}>
                Sign Out
              </button>
              <div className="absolute lg:hidden transform bottom-0 translate-y-72">
                <Image src={hubSparkLogo} alt="Hub Spark Logo" />
              </div>
            </>
          ) : showProfile ? (
            <Profile
              setProfile={setShowProfile}
              onProfileComplete={handleProfileComplete}
            />
          ) : (
            <>
              <div className="absolute top-0">
                <ProgressBar count={1} />
              </div>
              <button
                className="text-[16px] font-bold text-white py-[10px] w-[221px] mt-[20%] md:mt-[10%] lg:mt-16 lg:w-[40%] lg:text-[40px] text-center bg-palatinatePurple lg:rounded-[35px] enter rounded-2xl"
                onClick={() => signIn("google")}
                style={{ cursor: "pointer" }}>
                Sign In with Google
              </button>
              <button
                className="text-[16px] font-bold text-white py-[10px] w-[221px] mt-[12px] md:mt-[16px] lg:mt-7 lg:w-[40%] lg:text-[40px] text-center bg-palatinatePurple lg:rounded-[35px] enter rounded-2xl"
                onClick={() => signIn("facebook_business")}
                style={{ cursor: "pointer" }}>
                Sign In with Facebook
              </button>
              {!showEmailField && (
                <p
                  className="text-[16px] font-bold text-white py-[10px] w-[221px] lg:w-[40%] lg:text-[40px] mt-[10px] lg:mt-[30px] text-center bg-palatinatePurple rounded-2xl lg:rounded-[35px] enter"
                  onClick={onEmailClick}
                  style={{ cursor: "pointer" }}>
                  Continue with Email
                </p>
              )}
              {showEmailField && !showPasswordField && (
                <>
                  <div className="flex flex-col w-full justify-center items-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-[221px] lg:w-[40%] bg-white h-[33px] mt-[13px] lg:mt-[30px] text-[12px] text-darkSilverColor pl-[18px] lg:text-xl py-[10px] lg:py-10 rounded-lg lg:rounded-[35px] outline-none"
                    />
                    <button
                      className="text-[16px] font-bold text-white py-[10px] mt-[10px] w-[221px] lg:w-[40%] lg:text-[40px] text-center bg-palatinatePurple rounded-2xl lg:rounded-[35px] enter"
                      onClick={onContinueWithEmail}
                      style={{ cursor: "pointer" }}>
                      Continue with Email
                    </button>
                  </div>
                </>
              )}
              {showEmailField && showPasswordField && (
                <div className="w-full flex flex-col justify-center items-center">
                  <div className="w-full text-center">
                    <input
                      type="email"
                      value={email}
                      placeholder="Enter your email"
                      disabled
                      className="w-[221px] lg:w-[40%] bg-white h-[33px] mt-[13px] text-[12px] lg:text-lg text-darkSilverColor pl-[18px] py-[10px] lg:py-10 rounded-xl lg:rounded-[35px]"
                    />
                  </div>
                  <div className="w-full flex justify-center text-center">
                    <div className="relative w-[60%] lg:w-[40%] text-center">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-[221px] bg-white h-[33px] lg:w-full mt-[6px] text-[12px] lg:text-lg text-darkSilverColor pl-[18px] py-[10px] lg:py-10 rounded-xl lg:rounded-[35px]"
                      />
                      {showPassword ? (
                        <div className="absolute top-1/2 transform -translate-y-1/2 right-4 lg:right-[10%] translate-x-1/2">
                          <Eye
                            color="#606060"
                            onClick={() => setShowPassword((prev) => !prev)}
                          />
                        </div>
                      ) : (
                        <div className="absolute transform -translate-y-1/2 top-1/2 right-4 lg:right-[10%] translate-x-1/2">
                          <EyeOff
                            color="#606060"
                            onClick={() => setShowPassword((prev) => !prev)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    className="text-[16px] font-bold text-white lg:w-[40%] py-[10px] lg:text-[40px] mt-[10px] w-[221px] text-center bg-palatinatePurple rounded-2xl lg:rounded-[35px]"
                    onClick={onSignIn}
                    style={{ cursor: "pointer" }}>
                    Sign In with Email
                  </button>
                </div>
              )}
              <div className="lg:hidden fixed bottom-16">
                <Image src={hubSparkLogo} alt="Hub Spark Logo" />
              </div>
            </>
          )}
        </div>
      }
    />
  );
}
