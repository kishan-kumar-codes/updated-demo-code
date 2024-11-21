"use client";
import { DropDownSvg } from "@/svgs/reviews/svgs";
import React from "react";

interface DayProps {
  day: string;
  isMobile?: boolean;
}

// Styles for labels and inputs
const labelStyle: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  // fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const inputStyle: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  // fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

/**
 * DayOptions component
 *
 * This component renders a form field for selecting business hours for a specific day.
 * It includes a dropdown to select between "Open" and "Close" states, and input fields
 * for specifying opening and closing times.
 *
 * @param {string} day - The day of the week to display.
 * @param {boolean} [isMobile=false] - Flag to adjust styles for mobile view.
 * @returns {JSX.Element} The rendered DayOptions component.
 */
const DayOptions: React.FC<DayProps> = ({ day }) => {
  return (
    <div className="flex w-full justify-center my-3">
      <div className={`flex items-center  gap-2 md:w-full md:gap-16`}>
        <label
          htmlFor="day"
          style={{ ...labelStyle }}
          className={`text-[10px]  md:text-[15px] w-7 mr-6 md:w-[32px] lg:text-[20px] lg:mr-16 `}>
          {day}
        </label>
        <div className="relative h-full  ">
          <select
            id="day"
            style={{ ...inputStyle }}
            className={`bg-[#F4F4F4] w-[69px]  min-w-[69px] min-h-[25px] mr-[5px] lg:pr-6 h-full text-[12px] md:text-[15px] cursor-pointer border border-transparent appearance-none  rounded-lg focus:outline-none block lg:p-2.5 md:w-44`}>
            <option
              style={{ ...inputStyle }}
              className="text-center bg-[#8C8C8C] bg-opacity-20 text-[12px] md:text-[15px] p-3 h-10 py-4 lg:text-[20px]">
              Open
            </option>
            <option
              className="text-center bg-[#8C8C8C] bg-opacity-20 h-10 p-3 py-4 px-4 text-[12px] md:text-[15px] lg:text-[20px]"
              style={{ ...inputStyle }}>
              Close
            </option>
          </select>
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            <DropDownSvg />
          </div>
        </div>
        <input
          type="time"
          placeholder="hh:mm"
          className={`p-2 text-center bg-[#F4F4F4] cursor-pointer rounded-lg focus:outline-none w-22 text-[12px] md:w-44 md:text-[15px]}`}
        />
        <span
          style={{ ...labelStyle }}
          className="text-center text-[12px] md:text-[15px] lg:text-[21px]">
          to
        </span>
        <input
          type="time"
          placeholder="hh:mm"
          className={`p-2  text-center bg-[#F4F4F4] cursor-pointer rounded-lg focus:outline-none w-22 text-[12px] md:w-44 md:text-[15px]}`}
        />
      </div>
    </div>
  );
};

export default DayOptions;
