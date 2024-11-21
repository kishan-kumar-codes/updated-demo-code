"use client";

import Image from "next/image";
import GroupImg from "@/assets/images/hubspark/Group.png";
import Google from "@/assets/images/hubspark/google.png";
import Facebook from "@/assets/images/hubspark/facebook.png";
import Apple from "@/assets/images/hubspark/apple.png";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

function AuthButton({ src, provider }: { src: string; provider: string }) {
  return (
    <>
      <button
        onClick={(event) => {
          event.preventDefault();
          signIn(provider, {
            redirect: true,
            callbackUrl:
              process.env.NEXT_PUBLIC_NODE_ENV === "production"
                ? process.env.NEXT_PUBLIC_PROD_ENV
                : process.env.NEXT_PUBLIC_BASE_URL,
          });
        }}
        className="flex items-center border-2 bg-white justify-center w-full py-3 mb-2 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
        <Image
          className="w-auto"
          alt="google"
          width={20}
          height={20}
          src={src}
        />
      </button>
    </>
  );
}
export default function Page() {
  return (
    <div className="flex flex-col bg-[#F4F4F4]">
      <div className="flex justify-end">
        <Image
          alt="GroupImage"
          src={GroupImg}
          className="w-auto h-auto"
          priority
          width={178}
          height={133}
        />
      </div>
      <div>
        <div className="container flex flex-col mx-auto rounded-lg pt-6 md:pt-1 my-1">
          <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
            <div className="flex items-center justify-center w-full lg:p-12">
              <form
                action={""}
                className="flex items-center w-[80%] md:w-[33%]">
                <div className="flex flex-col w-full h-full pb-6 text-center rounded-3xl">
                  <h3 className="mb-3 text-4xl font-semibold text-dark-grey-900  text-start text-[#631363] ">
                    Login
                  </h3>
                  <p className="mb-4 text-start text-[#606060]">
                    Please sigin in to continue
                  </p>

                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="flex items-center w-full px-5 py-4 mr-2 bg-[#E0E0E0] text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  />
                  <input
                    id="password"
                    type="password"
                    autoComplete=""
                    placeholder="Password"
                    className="flex items-center w-full px-5 py-4 mb-5 mr-2 bg-[#E0E0E0] text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  />
                  <div className="flex flex-row justify-between mb-8">
                    <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        value=""
                        className="sr-only peer"
                      />
                      <Link
                        href="/forgetpassword"
                        className="ml-3 text-[#631363] text-sm font-base text-grey-900">
                        Forgot your Password?
                      </Link>
                    </label>
                  </div>
                  <div className="flex my-1 justify-end">
                    <button className="w-[30%]  px-2 py-3 mb-2 text-sm font-bold leading-none  transition duration-300 md:w-28 rounded-xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500 text-[#27272D] bg-[#40F440]">
                      Login
                    </button>
                  </div>
                  <div className="flex items-center mb-3">
                    <hr className="h-0 border-b  border-solid border-[#631363] grow" />
                    <p className="mx-6 text-grey-600">or Login with</p>
                    <hr className="h-0 border-b border-solid border-[#631363] grow" />
                  </div>

                  <AuthButton src={Google.src} provider="google" />
                  {/* <AuthButton src={Facebook.src} provider="facebook_business" /> */}
                  <AuthButton src={Facebook.src} provider="facebook" />
                  {/* <AuthButton src={Apple.src} provider="apple" /> */}
                  <p className="text-sm leading-relaxed text-[#606060]">
                    Don`&apos;t have an account?{" "}
                    <Link href="/signup" className="font-bold text-[#631363]">
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
