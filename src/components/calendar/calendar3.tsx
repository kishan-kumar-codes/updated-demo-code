"use client";

import LayoutView from "../calendar/layout/page";
import React, { useEffect, useState } from "react";
import Calendar from "../calendar/icons/calendarLarge.svg";
import GoogleCalendar from "../calendar/icons/googleCalendar.svg";
import LeftCalendar2 from "../calendar/icons/calendar2.svg";
import { ConflictCalendar } from "../calendar/components/conflictCalendar";
import { LinkCalendar } from "../calendar/components/linkCalendarPopup";

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
        <div className="relative h-full  pb-[30px] w-full bg-cultured">
          <div className="mx-[18px] h-full mt-[19px] bg-chinesWhite rounded-xl">
            <div className="bg-palatinatePurple flex pl-[16px] py-[11px] text-[16px] font-bold rounded-xl text-white">
              <h4>Calendar Configuration</h4>
            </div>
            <div className="px-[20px]">
              <div className="flex mt-[21px] ">
                <Image src={Calendar} alt="" />
                <div className="ml-[16px]">
                  <h5 className="text-[14px] font-bold text-palatinatePurple">
                    Linked Calendar
                  </h5>
                  <h5 className="mt-[5px] text-[10px] font-bold text-darkSilverColor">
                    Sync bookings with your linked calendar
                  </h5>
                </div>
              </div>
              <div className="flex mt-[19px] h-[47px] items-center px-[14px] bg-white rounded-xl">
                <Image src={GoogleCalendar} alt="" />
                <div className="flex w-full justify-between ml-[6px]">
                  <h5 className="text-[12px] text-darkSilverColor">
                    johndoe@companyname.com
                  </h5>
                  <h5
                    onClick={() => setIsShowLink(true)}
                    className="cursor-pointer text-[12px] text-palatinatePurple font-bold">
                    Edit
                  </h5>
                </div>
              </div>

              <div className="flex mt-[47px] ">
                <Image src={LeftCalendar2} alt="" />
                <div className="ml-[16px]">
                  <h5 className="text-[14px] font-bold text-palatinatePurple">
                    Conflict Calendars
                  </h5>
                  <h5 className="mt-[5px] text-[10px] font-bold text-darkSilverColor">
                    Add additional calendars to be checked to prevent double
                    bookings
                  </h5>
                </div>
              </div>
              <div className="flex mt-[19px] h-[47px] items-center px-[14px] bg-white rounded-lg">
                <Image src={GoogleCalendar} alt="" />
                <div className="flex w-full justify-between ml-[6px]">
                  <h5 className="text-[12px] text-darkSilverColor">
                    johndoe@companyname.com
                  </h5>
                  <h5
                    onClick={() => setIsShowConflict(true)}
                    className="cursor-pointer text-[12px] text-palatinatePurple font-bold">
                    Edit
                  </h5>
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
