import { MenuIcon } from "@/svgs/checkIn/svgs";
import React from "react";
import DashoardTab from "./DashoardTab";
import ReviewNavbar from "./ReviewNavbar";

const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

// Define the CheckInStyle which extends Typography
const reputationStyle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: "22px",
};

const ReviewDashboardMobile = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col md:w-full w-full items-center  bg-[#F4F4F4] ">
        <div className="w-full justify-center relative flex flex-col ">
          <ReviewNavbar heading={" Review Dashboard"} />
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <DashoardTab />
          <div className="flex w-full md:hidden mt-10 justify-center  items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDashboardMobile;
