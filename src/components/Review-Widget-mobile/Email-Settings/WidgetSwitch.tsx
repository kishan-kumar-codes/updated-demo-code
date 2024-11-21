import { useState } from "react";

const typography: React.CSSProperties = {
  color: "#631363",
  fontFamily: "Arial",
};

interface WidgetSwitch {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
export default function WidgetSwitch({
  activeTab,
  setActiveTab,
}: WidgetSwitch) {
  return (
    <div className="flex w-full  justify-start items-center py-0 md:py-4 pt-2 ">
      <div className="flex w-full items-center  ">
        <span
          onClick={() => setActiveTab("Email")}
          className="text-[#6D6D6D]  text-[8px] p-2 md:text-xl lg:text-[22px] md:font-normal flex border border-[#6D6D6D] rounded-l-full cursor-pointer   text-center items-center justify-center"
          style={{
            ...typography,
            color: activeTab === "Email" ? "#FFFFFF" : "#6D6D6D",
            backgroundColor: activeTab === "Email" ? "#631363" : "#fff ",
          }}>
          Email
        </span>
        <span
          onClick={() => setActiveTab("Follow-up Email")}
          className="text-[#6D6D6D] text-[8px] p-2 md:text-xl lg:text-[22px] md:font-normal flex border border-[#6D6D6D] rounded-r-full  cursor-pointer text-center  items-center justify-center"
          style={{
            ...typography,

            color: activeTab === "Follow-up Email" ? "#FFFFFF" : "#6D6D6D",
            backgroundColor:
              activeTab === "Follow-up Email" ? "#631363" : "#fff",
          }}>
          Follow-up Email
        </span>
      </div>
    </div>
  );
}
