import React, { FC } from "react";
import Image from "next/image";

import ScreenView from "@/components/ScreenView";
import "../../app/globals.css";

const ReplyMessage = ({}) => {
  return (
    <ScreenView
      Childrens={
        <div className="h-full bg-cultured w-full px-5 relative">
          <div className="search mt-[30px] ml-[12px] ">
            <h5 className="text-darkSilverColor font-bold  text-xl">
              No Subject
            </h5>           
          </div>

          <div className="w-full h-[2px] bg-chinesWhite mt-[10px]" />

          <div className="message-header  mt-6 flex">
            <div className="logo">
              <Image
                src={""}
                alt={""}
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
            <div className="ripple select-none shadow-mde my-auto bg-chinesWhite text-darkSilverColor text-base py-2 px-1 rounded-xl mr-2">
              <button className="icon rotate-45"> &#x21b6;</button> Reply
            </div>
            <div className="ripple select-none shadow-md my-auto bg-chinesWhite text-darkSilverColor text-base py-2 px-2 rounded-xl mr-2">
              <button className="icon rotate-45"> &#x21b6;</button> Reply All
            </div>
            <div className="ripple select-none shadow-md my-auto bg-chinesWhite text-darkSilverColor text-base py-2 px-1  rounded-xl">
              <button className="icon -rotate-45"> &#x21b7;</button> Forward
            </div>
          </div>
        </div>
      }
    />
  );
};

export default ReplyMessage;
