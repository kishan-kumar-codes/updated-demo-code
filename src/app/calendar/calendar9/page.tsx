"use client";

import LayoutView from "../layout";
import React, { useEffect, useState } from "react";
import Calendar from "../icons/calendarLarge.svg";
import GoogleCalendar from "../icons/googleCalendar.svg";
import LeftCalendar2 from "../icons/calendar2.svg";
import { ConflictCalendar } from "../components/conflictCalendar";
import ContactList from "../contactList";
import MainCalendar from "../components/MainCalendar";
import Image from "next/image";

const Calendar2 = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [isShowConflict, setIsShowConflict] = useState(true);
  return (
    <LayoutView
      Childrens={
        <div className="relative pb-[30px] h-fit flex w-full bg-cultured">
          <div className="mx-[18px] w-full md:w-[25%] mt-[19px] bg-chinesWhite rounded-lg">
            <ContactList />
          </div>
          <div className="w-[75%] hidden md:block">
            <MainCalendar />
          </div>
        </div>
      }
    />
  );
};

export default Calendar2;
