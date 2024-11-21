"use client";

import LayoutView from "../calendar/layout/page";
import React, { useEffect, useState } from "react";
import Calendar from "../calendar/icons/calendarLarge.svg";
import GoogleCalendar from "../calendar/icons/googleCalendar.svg";
import LeftCalendar2 from "../calendar/icons/calendar2.svg";
import { ConflictCalendar } from "../calendar/components/conflictCalendar";
import ContactList from "./contactList";

import Image from "next/image";

const Calendar2 = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [isShowConflict, setIsShowConflict] = useState(true);
  return (
    <LayoutView
      Childrens={
        <div className="relative pb-[30px] w-full bg-cultured">
          <div className="mx-[18px] h-full mt-[19px] bg-chinesWhite rounded-lg">
            <ContactList />
          </div>
        </div>
      }
    />
  );
};

export default Calendar2;
