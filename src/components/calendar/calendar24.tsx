"use client";

import React, { useState } from "react";
import LayoutView from "../calendar/layout/page";
import BigCalendar from "./components/reactFullCalendar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar24 = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate: any) => {
    setDate(selectedDate);
  };

  return (
    <LayoutView
      Childrens={
        <div className="relative pb-[30px] h-full overflow-y-scroll w-full bg-[#eoeoeo]">
          <BigCalendar />

          <Calendar
            onChange={handleDateChange}
            value={date}
            className="border-none mx-auto ts mt-4 full-calendar"
          />
        </div>
      }
    />
  );
};

export default Calendar24;
