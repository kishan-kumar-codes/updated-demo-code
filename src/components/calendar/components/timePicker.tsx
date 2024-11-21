import React, { useState } from "react";

import TimeKeeper from "@redchili/react-timekeeper";

function TimePicker() {
  const [time, setTime] = useState("12:34pm");
  const [activeTimeMode, setActiveTimeMode] = useState("AM");

  return (
    <div className="relative">
      <TimeKeeper time={time} onChange={(data) => setTime(data.formatted12)} />
      <div className="flex flex-col absolute right-[42px] top-8">
        <button
          onClick={() => setActiveTimeMode("AM")}
          className={`h-[31px] w-[32px] rounded-tl-3xl text-[12px] ${activeTimeMode === "AM" ? "bg-palatinatePurple text-white" : "text-palatinatePurple"}  font-bold rounded-tr-3xl border-[2px] border-palatinatePurple`}>
          AM
        </button>
        <button
          onClick={() => setActiveTimeMode("PM")}
          className={`h-[31px] w-[32px] rounded-bl-3xl text-[12px] ${activeTimeMode === "PM" ? "bg-palatinatePurple text-white" : "text-palatinatePurple"} text-palatinatePurple font-bold rounded-br-3xl border-[2px] border-palatinatePurple`}>
          PM
        </button>
      </div>
    </div>
  );
}

export default TimePicker;
