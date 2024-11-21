"use client";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { format, addDays } from "date-fns";
import { CalanderSvg } from "@/svgs/seo-screens/svgs";
import { SeoDropDownSvg } from "@/svgs/seo-desktop/svgs";
const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  lineHeight: "normal",
};

interface pickerProps {
  bgColor?: string;
}
const MyContainer = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className="flex relative w-full h-full"
      style={{
        paddingLeft: "110px",
        display: "flex",
        flexDirection: "column",
        background: "#FFF",
        color: "#6D6D6D",
      }}>
      <div className="flex absolute border-r-2 left-0 border-[#6D6D6D] right-20 -ml-16 pl-3 top-0  h-full  w-[170px]  text-left font-bold">
        <div className=" flex-col gap-1 ml-11 w-full h-full justify-start  py-2 flex pr-1">
          <span
            className="text-right cursor-pointer text-[14px] md:text-sm px-1 font-bold  p-1 pl-2 "
            style={{ ...Typography }}>
            Year to Date
          </span>
          <span
            className=" text-right text-[14px] md:text-sm  cursor-pointer px-1  p-1"
            style={{ ...Typography }}>
            This Month
          </span>
          <span
            className=" bg-[#631363] cursor-pointer text-right text-[14px] md:text-sm px-1 py-2 text-white p-1   rounded-r-2xl"
            style={{ ...Typography }}>
            This Week
          </span>
        </div>
      </div>
      <CalendarContainer className={className}>
        <div style={{ position: "relative" }}>{children}</div>
      </CalendarContainer>
    </div>
  );
};
const CustomDatePicker = ({ bgColor = "#F4F4F4" }: pickerProps) => {
  const today = new Date();
  const oneWeekLater = addDays(today, 7);

  const [page, setPage] = useState<string>("");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    today,
    oneWeekLater,
  ]);
  const [startDate, endDate] = dateRange;
  const formatDateRange = (start: Date | null, end: Date | null): string => {
    if (!start && !end) return "No date selected";
    if (start && !end) return `From ${format(start, "M d, yyyy")}`;
    if (!start && end) return `To ${format(end, "M d, yyyy")}`;
    return `${format(start!, "M d, yyyy")} - ${format(end!, "M d, yyyy")}`;
  };

  return (
    <>
      <div className="flex relative w-full h-full z-50 -ml-10  justify-start items-center">
        <DatePicker
          className={`w-[250px] flex  py-2 bg-[${bgColor}]  mt-4 text-[#6D6D6D] cursor-pointer opacity-0  rounded-lg focus:outline-none`}
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          calendarContainer={MyContainer}
          onChange={(update) => {
            setDateRange(update as [Date | null, Date | null]);
          }}
        />
      </div>
      <div className="flex sticky z-10 -mt-12 gap-2 top-10   w-full h-full   justify-start items-center">
        <div
          className={`text-[#6D6D6D] flex gap-2 items-center bg-[${bgColor}] py-3 px-4 w-full rounded-full`}>
          <span>
            <CalanderSvg />
          </span>
          <span
            className="w-full"
            style={{ fontFamily: "Arial", fontSize: "14px" }}>
            {formatDateRange(startDate, endDate)}
          </span>
          <span>
            <SeoDropDownSvg />
          </span>
        </div>
      </div>
    </>
  );
};

export default CustomDatePicker;
