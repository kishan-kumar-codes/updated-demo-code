"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Attachment from "../../assets/images/attachment.svg";
import FlyingEnvolop from "../../assets/images/flying-envolop.svg";
import ScreenView from "../ScreenView";
import "../../app/globals.css";

const NewEmail = ({}) => {
  return (
    <ScreenView
      Childrens={
        <div className="h-screen w-screen flex justify-center">
          <div className="h-full bg-cultured w-full px-5 relative">
            <div className="icon-dev flex justify-end mt-[16px] mr-[10px]">
              <label htmlFor="fileInput">
                <button className="flex items-center">
                  <input
                    id="fileInput"
                    type="file"
                    style={{ opacity: 0 }}
                    onChange={(e) => {
                      const file = e.target?.files?.[0];
                      if (file) {
                      }
                    }}
                  />
                  <Image
                    src={Attachment}
                    alt="attachment"
                    className="mr-[10px]"
                  />
                </button>
              </label>

              <button>
                <Image src={FlyingEnvolop} alt="sent" />
              </button>
            </div>

            <div className="from w-full flex border-b-2 border-solid border-chinesWhite ">
              <h5 className="ml-[16.5px] text-base font-arial font-bold text-darkSilverColor">
                From
              </h5>
              <input
                id="from"
                className="ml-[15px] mb-[11px] mt-[4px]  w-full bg-cultured text-[14px] text-darkSilverColor outline-none border-none "
              />
            </div>
            <div className="from w-full  mt-[16px] flex border-b-2 border-solid border-chinesWhite ">
              <h5 className="ml-[16.5px] text-base font-arial font-bold text-darkSilverColor">
                To
              </h5>
              <input
                id="from"
                className="ml-[15px] mb-[11px] mt-[4px]  w-full bg-cultured text-[14px] text-darkSilverColor outline-none border-none "
                value="janedoe@gmail.com"
              />
            </div>
            <div className="from w-full mt-[16px] flex border-b-2 border-solid border-chinesWhite ">
              <h5 className="ml-[16.5px] text-base font-arial font-bold text-darkSilverColor">
                Subject
              </h5>
              <input
                id="from"
                className="ml-[15px] mb-[11px] mt-[4px]  w-full bg-cultured text-[14px] text-darkSilverColor outline-none border-none "
                value="Here is your estimate."
              />
            </div>

            <div className="message-content-email mx-[5px] w-full mt-[10px]">
              <textarea className="px-[14px] py-[10px] h-auto w-full min-h-[80px]  outline-none border-none rounded-3xl bg-white text-xs font-arial text-darkSilverColor"></textarea>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default NewEmail;
