"use client";

import LayoutView from "../layout";
import React, { useEffect, useState } from "react";
import Calendar from "../icons/calendarLarge.svg";
import GoogleCalendar from "../icons/googleCalendar.svg";
import LeftCalendar2 from "../icons/calendar2.svg";
import { ConflictCalendar } from "../components/conflictCalendar";
import { LinkCalendar } from "../components/linkCalendarPopup";

import Image from "next/image";

const Calendar2 = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [isShowConflict, setIsShowConflict] = useState(false);
  const [isShowLink, setIsShowLink] = useState(false);
  const handleClose = () => {
    setIsShowConflict(false);
    setIsShowLink(false);
  };
  return (
    <LayoutView
      Childrens={
        <div className="relative h-full pb-[30px] w-full bg-cultured">
          <div className="mx-[18px] md:px-10 h-full mt-[19px] bg-chinesWhite md:bg-transparent rounded-lg">
            <div className="bg-palatinatePurple flex pl-[16px] py-[11px] md:py-[7px] lg:py-3 md:px-7 text-[16px] font-bold rounded-t-lg md:rounded-t-2xl text-white">
              <div className="lg:text-[24px]">Calendar Configuration</div>
            </div>
            <div className="">
              <div className="md:flex md:bg-chinesWhite py-3 px-[20px] mt-2 justify-between items-center">
                <div className="flex  ">
                  <Image src={Calendar} alt="" />
                  <div className="ml-[16px]">
                    <h5 className="text-[14px] md:text-[16px] lg:text-[22px] font-bold text-palatinatePurple">
                      Linked Calendar
                    </h5>
                    <h5 className="mt-[5px] text-[10px]  md:text-[12px] lg:text-[18px] font-bold text-darkSilverColor">
                      Sync bookings with your linked calendar
                    </h5>
                  </div>
                </div>
                <div className="flex md:w-[60%] lg:w-[50%] h-[47px] md:h-[35px] lg:h-[50px] items-center px-[14px] mt-[20px] md:mt-0 bg-[#F4F4F4]  rounded-lg">
                  <Image src={GoogleCalendar} alt="" />
                  <div className="flex w-full justify-between ml-[6px]">
                    <h5 className="text-[12px] lg:text-[18px] text-darkSilverColor">
                      johndoe@companyname.com
                    </h5>
                    <h5
                      onClick={() => setIsShowLink(true)}
                      className="cursor-pointer text-[12px] lg:text-[22px] text-palatinatePurple font-bold">
                      Edit
                    </h5>
                  </div>
                </div>
              </div>

              <div className="md:flex md:bg-chinesWhite py-3 px-[20px] mt-2 justify-between items-center">
                <div className="flex mt-[47px] w-full sm:w-[40%] md:mt-0 ">
                  <Image src={LeftCalendar2} alt="" />
                  <div className="ml-[16px]">
                    <h5 className="text-[14px] font-bold lg:text-[22px] text-palatinatePurple">
                      Conflict Calendars
                    </h5>
                    <h5 className="mt-[5px] text-[10px] lg:whitespace-nowrap md:text-[12px] lg:text-[18px] font-bold text-darkSilverColor">
                      Add additional calendars to be checked to prevent double
                      bookings
                    </h5>
                  </div>
                </div>
                <div className="flex md:w-[60%] lg:w-[50%] h-[47px] lg:h-[50px] md:h-[35px] items-center px-[14px] mt-[20px] md:mt-0 bg-[#F4F4F4] rounded-lg">
                  <Image src={GoogleCalendar} alt="" />
                  <div className="flex w-full justify-between ml-[6px]">
                    <h5 className="text-[12px] lg:text-[18px] text-darkSilverColor">
                      johndoe@companyname.com
                    </h5>
                    <h5
                      onClick={() => setIsShowConflict(true)}
                      className="cursor-pointer lg:text-[22px] text-[12px] text-palatinatePurple font-bold">
                      Edit
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Link Calendar Popup */}
          {isShowLink && (
            <>
              <div
                onClick={() => setIsShowLink(false)}
                className="fixed top-0 left-0 w-full h-full transparentBg"
              />
              <LinkCalendar handleClose={handleClose} />
            </>
          )}
          {/* Conflict Calendar Popup */}
          {isShowConflict && (
            <>
              <div
                onClick={() => setIsShowConflict(false)}
                className="fixed top-0 left-0 w-full h-full transparentBg"
              />
              <ConflictCalendar handleClose={handleClose} />
            </>
          )}
        </div>
      }
    />
  );
};

export default Calendar2;
