"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import LayoutView from "../calendar/layout/page";
import CustomSelect from "./components/customSelect";

const Calendar30 = () => {
  const [rescheduleEnabled, setRescheduleEnabled] = useState(true);
  const [time, setTime] = useState(0);

  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate: any) => {
    setDate(selectedDate);
  };

  return (
    <LayoutView
      Childrens={
        <div className="relative pb-[30px] h-full overflow-y-scroll w-full bg-cultured">
          <div className="mx-[18px] mt-[19px] pb-[38px] bg-chinesWhite rounded-lg">
            <div className="bg-palatinatePurple flex pl-[16px] py-[11px] text-[16px] font-bold rounded-lg text-white">
              <h4>John’s Calendar</h4>
            </div>
            <div className="h-full px-[16px]">
              <div className="flex flex-col justify-center items-center rounded-xl mt-[18px]  p-[11px]  h-[59px] bg-white">
                <h5 className="text-[16px] font-bold text-palatinatePurple">
                  Monday
                </h5>
                <h5 className="text-[14px]  text-darkSilverColor">
                  June 17, 2024
                </h5>
              </div>
              <div className=" text-[14px] font-bold text-darkSilverColor mt-[18px] mb-[10px]">
                Time Zone
              </div>
              <div className=" flex bg-white h-[27px] items-center px-1 rounded-lg">
                <span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.70206 13.6209C10.4021 13.6209 13.302 10.6209 13.302 7.02087C13.302 3.32087 10.3021 0.420898 6.70206 0.420898C3.10206 0.420898 0.102051 3.42087 0.102051 7.02087C0.102051 10.6209 3.10206 13.6209 6.70206 13.6209ZM1.60205 9.62091H4.30205C4.60205 10.7209 5.10205 11.7209 5.80205 12.7209C3.90205 12.4209 2.40205 11.2209 1.60205 9.62091ZM5.00204 5.22089H8.40205C8.60205 6.42089 8.60205 7.62086 8.40205 8.82086H5.00204C4.70204 7.62086 4.70204 6.32089 5.00204 5.22089ZM6.60205 12.4209C5.90205 11.5209 5.40205 10.6209 5.10205 9.62091H8.00204C7.80204 10.6209 7.30205 11.5209 6.60205 12.4209ZM7.50204 12.7209C8.20204 11.7209 8.70204 10.7209 9.00204 9.62091H11.9021C11.0021 11.2209 9.40204 12.4209 7.50204 12.7209ZM12.502 7.02087C12.502 7.62087 12.4021 8.22089 12.2021 8.72089H9.20206C9.40206 7.52089 9.40206 6.32089 9.20206 5.22089H12.2021C12.4021 5.72089 12.502 6.42087 12.502 7.02087ZM11.802 4.32086H9.00204C8.70204 3.22086 8.20204 2.22086 7.50204 1.32086C9.40204 1.52086 11.002 2.72086 11.802 4.32086ZM8.10205 4.32086H5.20206C5.50206 3.32086 6.00206 2.42087 6.70206 1.52087C7.30206 2.42087 7.80205 3.32086 8.10205 4.32086ZM5.80205 1.32086C5.10205 2.22086 4.60205 3.22086 4.30205 4.32086H1.60205C2.40205 2.72086 3.90205 1.62086 5.80205 1.32086ZM4.10205 5.22089C3.90205 6.42089 3.90205 7.62086 4.10205 8.82086H1.20206C1.00206 8.22086 0.902054 7.62087 0.902054 7.02087C0.902054 6.42087 1.00206 5.82089 1.20206 5.22089H4.10205Z"
                      fill="#6D6D6D"
                    />
                  </svg>
                </span>
                <CustomSelect
                  id=""
                  className="flex-1 text-[12px] text-darkSilverColor outline-none border-none"
                  name=""
                  childrens={
                    <>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </>
                  }
                />
              </div>

              <div className="flex flex-col justify-center items-center  ">
                <h5 className="text-[18px] mt-[21px] font-bold text-palatinatePurple">
                  Choose Time Slot
                </h5>
                <h5 className="text-[14px] mt-[9px]  text-darkSilverColor">
                  Duration: 30 Mins{" "}
                </h5>
              </div>

              <div className="flex gap-1">
                <button
                  onClick={() => setTime(1)}
                  className=" text-[16px] font-bold text-darkSilverColor mt-[14px] h-[36px] w-full rounded-xl bg-none border-darkSilverColor border flex justify-center items-center">
                  11:00 PM
                </button>
                {time === 1 && (
                  <button
                    onClick={() => setTime(0)}
                    className=" text-[16px] font-bold text-white mt-[14px] h-[36px] w-full rounded-xl bg-palatinatePurple  flex justify-center items-center">
                    Select
                  </button>
                )}
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => setTime(2)}
                  className="text-[16px] font-bold text-darkSilverColor mt-[14px] h-[36px] w-full rounded-xl bg-none border-darkSilverColor border flex justify-center items-center">
                  12:00 PM
                </button>
                {time === 2 && (
                  <button
                    onClick={() => setTime(0)}
                    className=" text-[16px] font-bold text-white mt-[14px] h-[36px] w-full rounded-xl bg-palatinatePurple  flex justify-center items-center">
                    Select
                  </button>
                )}
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => setTime(3)}
                  className="text-[16px] font-bold text-darkSilverColor mt-[14px] h-[36px] w-full rounded-xl bg-none border-darkSilverColor border flex justify-center items-center">
                  1:00 PM
                </button>
                {time === 3 && (
                  <button
                    onClick={() => setTime(0)}
                    className=" text-[16px] font-bold text-white mt-[14px] h-[36px] w-full rounded-xl bg-palatinatePurple  flex justify-center items-center">
                    Select
                  </button>
                )}
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => setTime(4)}
                  className="text-[16px] font-bold text-darkSilverColor mt-[14px] h-[36px] w-full rounded-xl bg-none border-darkSilverColor border flex justify-center items-center">
                  2:00 PM
                </button>
                {time === 4 && (
                  <button
                    onClick={() => setTime(0)}
                    className=" text-[16px] font-bold text-white mt-[14px] h-[36px] w-full rounded-xl bg-palatinatePurple  flex justify-center items-center">
                    Select
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Calendar30;
