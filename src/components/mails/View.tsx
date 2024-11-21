"use client";
import React, { FC } from "react";
import Image from "next/image";
import ScreenView from "@/components/ScreenView";
import "../../app/globals.css";

const MessageView = ({}) => {
  return (
    <ScreenView
      Childrens={
        <div className="h-full bg-cultured w-full px-5 relative">
          <div className="search ">
            <input
              type="text"
              className="w-full bg-cultured outline-none border-solid border-b-2 border-chinesWhite p-3 text-darkSilverColor font-bold  text-xl"
              placeholder="No Subject"
            />
          </div>

          <div className="message-header  mt-6 flex">
            <div className="logo">
              <Image
                alt="user icon"
                src={""}
                width={29}
                height={29}
                className="bg-limeGreen rounded-full"
              />
            </div>
            <div className="message-header-content flex flex-col ml-3 justify-center">
              <div>
                <span className="text-x font-bold text-darkSilverColor  ">
                  Erik Haynes
                </span>
                <span className="time-stamp ml-2 text-xs font-normal text-PhilippineGray">
                  Mar 12
                </span>
              </div>
              <span className="text-sm text-darkSilverColor">to me</span>
            </div>
          </div>
          <div className="message-body  ">
            <div className="message-body ml-3  text-sm mt-5 text-darkSilverColor">
              <span>
                I hope this email finds you well. I came across your services
                and am interested in learning more.
              </span>
            </div>
          </div>

          <div className="buttons absolute bottom-5 left-0 grid grid-cols-3 gap-2 w-full px-5">
            <button className="ripple select-none shadow-mde my-auto bg-chinesWhite text-darkSilverColor text-base py-2 px-1 rounded-xl mr-2">
              <button className="icon rotate-45"> &#x21b6;</button> Reply
            </button>
            <button className="ripple select-none shadow-md my-auto bg-chinesWhite text-darkSilverColor text-base py-2 px-2 rounded-xl mr-2">
              <button className="icon rotate-45"> &#x21b6;</button> Reply All
            </button>
            <button className="ripple select-none shadow-md my-auto bg-chinesWhite text-darkSilverColor text-base py-2 px-1  rounded-xl">
              <button className="icon -rotate-45"> &#x21b7;</button> Forward
            </button>
          </div>
        </div>
      }
    />
  );
};

export default MessageView;
