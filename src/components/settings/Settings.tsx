import { MenuIcon } from "@/svgs/checkIn/svgs";
import React from "react";
import Tab from "./Tabs";

const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};
const CheckInStyle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};
const Settings = () => {
  return (
    <div className="flex flex-col w-full md:w-[430px]   absolute top-0 items-center lg:w-[450px] h-[900px]">
      <div className="flex rounded-b-3xl  items-center  justify-center w-full md:w-[450px] h-[60px] bg-[#E0E0E0]">
        <div className="flex px-5 ml-7 py-4">
          <MenuIcon />
        </div>
        <div className="flex -ml-10 justify-center items-center flex-grow">
          <span style={CheckInStyle}>Settings</span>
        </div>
      </div>
      <div className="flex -ml-28 justify-start px-2 py-5">
        <span className="text-[#6D6D6D]" style={Typography}>
          Steven’s Rockstars - Account Settings
        </span>
      </div>
      <div className="flex flex-col items-center ">
        <Tab />
        <div className="flex   relative -ml-2  z-20 -mt-16 justify-center items-center w-[430px]    bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default Settings;
