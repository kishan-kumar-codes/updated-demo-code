"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import AutoComplete from "./AutoComplete";
// import Layout from "../Layout/LayoutView";
import Layout from "../../app/onboardingDesktop/layout";
import Image from "next/image";
import ProgressBar from "@/app/onboardingDesktop/layout/progressBar";
import { useRouter } from "next/navigation";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Trials() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [showEmailField, setShowEmailField] = useState(false);
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailClick = () => {
    setShowEmailField(true);
  };

  const onContinueWithEmail = () => {
    setShowPasswordField(true);
  };

  const onSignIn = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/onboarding/trials/profile");
    }
  };

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="relative h-full flex items-center flex-col">
          {status === "authenticated" ? (
            <>
              <div className="w-full px-14 mb-8">
                <ProgressBar count={3} />
              </div>
              <div className="w-[350px]">
                <AutoComplete />
              </div>
              <Button className="w-[280px] mt-4" onClick={() => signOut()}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <div className="w-full px-14 mb-8">
                <ProgressBar count={1} />
              </div>
              <Button
                className="w-[350px] mb-5"
                onClick={() => signIn("google")}>
                Sign In with Google
              </Button>
              <Button className="w-[350px] mb-5">Sign In with Apple</Button>
              {!showEmailField && (
                <Button className="w-[350px] mb-5" onClick={onEmailClick}>
                  Continue with Email
                </Button>
              )}
              {showEmailField && !showPasswordField && (
                <div className="flex flex-col w-[350px]">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="mb-4"
                  />
                  <Button onClick={onContinueWithEmail}>
                    Continue with Email
                  </Button>
                </div>
              )}
              {showEmailField && showPasswordField && (
                <div className="flex flex-col w-[350px]">
                  <Input
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    disabled
                    className="mb-4"
                  />
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="mb-4"
                  />
                  <Button onClick={onSignIn}>Sign In with Email</Button>
                </div>
              )}
              <div className="flex justify-center mt-10">
                <h5 className="text-[20px] text-darkSilverColor">
                  Already have an account?
                  <span className="text-palatinatePurple font-medium cursor-pointer">
                    {" "}
                    Log in
                  </span>
                </h5>
              </div>
            </>
          )}
        </div>
      }
    />
  );
}
