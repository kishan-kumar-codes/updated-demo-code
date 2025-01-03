import React, { useState } from "react";
import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment, { Moment } from "moment";

const localizer = momentLocalizer(moment);

interface MyCalendarProps {
  myEventsList: Event[];
}

const MyCalendar: React.FC<MyCalendarProps> = ({ myEventsList }) => {
  const [currentDate, setCurrentDate] = useState<Moment>(moment());

  // Calculate the start and end dates for the current week
  const startOfWeek = currentDate.clone().startOf("week");
  const endOfWeek = currentDate.clone().endOf("week");

  const handlePreviousWeek = () => {
    setCurrentDate((prevDate) => prevDate.clone().subtract(1, "week"));
  };

  const handleNextWeek = () => {
    setCurrentDate((prevDate) => prevDate.clone().add(1, "week"));
  };

  const hours = Array.from({ length: 24 }).map((_, hourIndex) =>
    moment().hour(hourIndex).minute(0).format("h:mm A")
  );

  return (
    <div className="w-full h-screen bg-gray-100">
      {/* Desktop View */}
      <div className="hidden md:block p-4">
        {/* Desktop Header */}
        <div className="flex items-center text-[#681E5C] gap-2 mb-4">
          <button
            onClick={handlePreviousWeek}
            className="text-2xl font-bold"
          >
            &lt;
          </button>
          <button onClick={handleNextWeek} className="text-2xl font-bold">
            &gt;
          </button>
          <h1 className="text-lg font-semibold">
            {startOfWeek.format("MMM D")} - {endOfWeek.format("D, YYYY")}
          </h1>
        </div>

        {/* Week Header */}
        <div className="grid grid-cols-8 bg-[#681E5C] justify-between w-full text-white rounded-md overflow-hidden text-center">
          <div className="py-3 font-bold"></div>
          {Array.from({ length: 7 }).map((_, index) => {
            const day = startOfWeek.clone().add(index, "days");
            return (
              <div key={index} className="py-3">
                <div>{day.format("ddd")}</div>
                <div className="font-semibold">{day.format("D")}</div>
              </div>
            );
          })}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-8 gap-0 border-t border-gray-300 bg-white mt-2">
          {/* Hour Sidebar */}
          <div className="border-r border-gray-300">
            {hours.map((hour, index) => (
              <div
                key={index}
                className="h-16 flex items-center justify-center text-gray-500 text-sm border-b last:border-b-0"
              >
                {hour}
              </div>
            ))}
          </div>

          {/* Day Columns */}
          {Array.from({ length: 7 }).map((_, dayIndex) => (
            <div
              key={dayIndex}
              className="relative border-r last:border-r-0 border-gray-200"
            >
              {hours.map((_, hourIndex) => (
                <div
                  key={hourIndex}
                  className="h-16 border-b last:border-b-0 border-gray-200"
                >
                  {dayIndex === 1 && hourIndex === 2 && (
                    <div className="absolute inset-x-2 top-2 bg-[#681E5C] text-white text-xs p-2 rounded shadow-md">
                      <div className="font-bold">2:00 - 4:30</div>
                      <div className="font-semibold">Meeting Title</div>
                      <div className="text-[10px]">Meeting Description</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        {/* Date Picker Strip */}
        <div className="flex overflow-x-auto w-full justify-between bg-white border-b">
          {Array.from({ length: 7 }).map((_, index) => {
            const day = startOfWeek.clone().add(index, "days");
            return (
              <button
                key={index}
                className={`flex-shrink-0 p-4 flex flex-col items-center ${
                  index === 1
                    ? "border-b-2 border-[#681E5C] text-[#681E5C]"
                    : ""
                }`}
              >
                <div className="text-sm">{day.format("ddd")}</div>
                <div className="font-bold text-lg">{day.format("D")}</div>
              </button>
            );
          })}
        </div>

        {/* Time Slots */}
        <div className="flex flex-col">
          {hours.map((hour, index) => (
            <div
              key={index}
              className="flex border-b last:border-b-0 min-h-[64px] relative"
            >
              {/* Time */}
              <div className="w-20 py-2 px-4 bg-gray-50 text-sm text-gray-500 flex items-start">
                {hour}
              </div>

              {/* Event space */}
              <div className="flex-1 p-2">
                {index === 2 && (
                  <div className="bg-[#681E5C] text-white rounded p-2 shadow-sm">
                    <div className="text-sm font-medium">2:00 - 4:30</div>
                    <div className="font-bold">Meeting Title</div>
                    <div className="text-xs">Meeting Description</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
