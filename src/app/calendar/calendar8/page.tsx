"use client";

import LayoutView from "../layout";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventsList from "../components/eventList";
import FAB from "../components/FAB";
import "react-calendar/dist/Calendar.css";
import MainCalendar from "../components/MainCalendar";
import TabNavigation from "@/components/tabNavigation";

interface Event {
  date: string; // Use a string format like 'YYYY-MM-DD'
  events: { name: string; time: string; status: string; initials: string }[];
}

const Calendar2 = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [date, setDate] = useState(new Date());
  const handleDateChange = (selectedDate: any) => {
    setDate(selectedDate);
    setSelectedDate(date);
  };

  const formattedDate = selectedDate.toISOString().split("T")[0];

  const eventsData: Event[] = [
    {
      date: "2024-06-20",
      events: [
        {
          name: "Jane Doe",
          time: "4:00 PM - 4:30 PM (EDT)",
          status: "Confirmed",
          initials: "JD",
        },
      ],
    },
    {
      date: "2024-06-24",
      events: [
        {
          name: "Jane Doe",
          time: "2:00 PM - 2:30 PM (EDT)",
          status: "Confirmed",
          initials: "JD",
        },
      ],
    },
  ];

  return (
    <LayoutView
      Childrens={
        <div className=" h-fit flex flex-col md:flex-row-reverse px-10 gap-4 pb-[30px] w-full ">
          <div className="md:w-[75%] hidden md:block">
            <MainCalendar
              selectedDate={formattedDate}
              onDateChange={(date) => setSelectedDate(new Date(date))}
              events={eventsData}
            />
          </div>
          <div className="md:bg-[#e0e0e0] p-[100px] relative mt-2 py-10 md:px-5 px-0 md:w-[25%] rounded-md">
            <div className=" bg-[#e0e0e0] pb-10 mt-[19px] rounded-lg">
              <div className=" rounded-lg ">
                <div className="bg-palatinatePurple flex pl-[16px] md:hidden py-[11px] text-[16px] font-bold rounded-lg text-white">
                  <h4>John’s Calendar</h4>
                </div>
                <Calendar
                  onChange={handleDateChange}
                  value={date}
                  className="border-none rounded-md bg-[#e0e0e0] md:bg-white"
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
        </div>
      }
    />
  );
};

export default Calendar2;
