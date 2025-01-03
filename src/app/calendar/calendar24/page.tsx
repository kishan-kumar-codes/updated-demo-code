"use client";

import React, { useState } from "react";
import Calendar from "react-calendar"; // Install using `npm install react-calendar`
import "react-calendar/dist/Calendar.css";
import LayoutView from "../layout";
import MainCalendar from "../components/MainCalendar"; // Import the main calendar component
import EventsList from "../components/eventList";

interface Event {
  date: string; // Use a string format like 'YYYY-MM-DD'
  events: { name: string; time: string; status: string; initials: string }[];
}

// Mock Event Data
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

const SidebarWithCalendar = () => {
  // Initialize selectedDate as a Date object
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // Handle date change
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  // Format selected date for event matching
  const formattedDate = selectedDate.toISOString().split("T")[0];

  // Get events for the selected date
  const getEventsForDate = (date: string) => {
    const eventData = eventsData.find((event) => event.date === date);
    return eventData ? eventData.events : [];
  };

  const events = getEventsForDate(formattedDate);

  return (
    <LayoutView
      Childrens={
        <div className="flex flex-col-reverse md:flex-row gap-4 px-4 md:px-10 w-full h-fit">
          {/* Sidebar */}
          <div className="w-full md:w-[25%] mt-[970px] md:mt-2 md:bg-[#e0e0e0] rounded-md p-4 shadow-lg">
            {/* Calendar */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                className="rounded-lg text-sm md:bg-[#e0e0e0]"
                tileContent={({ date }) => {
                  const dateStr = date.toISOString().split("T")[0];
                  return eventsData.some((event) => event.date === dateStr) ? (
                    <div className="bg-palatinatePurple h-1 w-1 rounded-full mx-auto mt-1"></div>
                  ) : null;
                }}
                tileClassName={({ date }) => {
                  const dateStr = date.toISOString().split("T")[0];
                  return dateStr === formattedDate
                    ? "bg-purple-200 rounded-lg"
                    : "";
                }}
              />
            </div>

            {/* Event List */}
            <div className="hidden md:block">
              <EventsList />
            </div>
          </div>

          {/* Main Calendar */}
          <div className="w-full h-fit">
            <MainCalendar
              selectedDate={formattedDate}
              onDateChange={(date) => setSelectedDate(new Date(date))}
              events={eventsData}
            />
          </div>

          {/* Mobile Floating Add Button */}
          <button className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 md:hidden">
            +
          </button>
        </div>
      }
    />
  );
};

export default SidebarWithCalendar;
