"use client";

import LayoutView from "../calendar/layout/page";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import EventsList from "./components/eventList";
import FAB from "./components/FAB";
import "react-calendar/dist/Calendar.css";

const Calendar2 = () => {
  const [date, setDate] = useState(new Date());
  const handleDateChange = (selectedDate: any) => {
    setDate(selectedDate);
  };

  return (
    <LayoutView
      Childrens={
        <div className="relative h-full  pb-[30px] w-full bg-cultured">
          <div className="mx-[18px] h-full mt-[19px] bg-chinesWhite  rounded-lg">
            <div className=" bg-gray-100 rounded-lg ">
              <div className="bg-palatinatePurple flex pl-[16px] py-[11px] text-[16px] font-bold rounded-lg text-white">
                <h4>John’s Calendar</h4>
              </div>
              <Calendar
                onChange={handleDateChange}
                value={date}
                className="border-none  bg-chinesWhite"
              />
            </div>

            {/* Events Section */}
            <div className=" bg-chinesWhite">
              <EventsList />
            </div>

            {/* Floating Action Button */}
            <FAB />
          </div>
        </div>
      }
    />
  );
};

export default Calendar2;
