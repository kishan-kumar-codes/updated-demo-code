import { GerneralViewSvgs } from "@/svgs/General-Settings-Mobile/svgs";
import React from "react";
interface TeamEmpCardProps {
  name: string;
  email: string;
  phone: string;
  userType: string;
  action: React.ReactNode;
}
const GereralTeamEmpCard = ({
  name,
  email,
  phone,
  userType,
  action,
}: TeamEmpCardProps) => {
  return (
    <div className="flex relative w-full pb-2">
      <div className=" flex w-fit z-50 flex-col">
        <span className="text-[#FFFFFF] bg-[#631363] min-w-[40px] items-center text-xs md:text-xl lg:text-[30px] leading-normal flex border-b border-[#FFF]  py-1 lg:py-4 lg:px-6 px-2 rounded-tl-xl">
          Name
        </span>
        <span className="text-[#FFFFFF] bg-[#631363] min-w-[40px] text-xs items-center md:text-xl lg:text-[30px] leading-normal flex border-b border-[#FFF] lg:py-4 lg:px-6 py-1 px-2 ">
          Email
        </span>
        <span className="text-[#FFFFFF] bg-[#631363] min-w-[40px] text-xs items-center leading-normal md:text-xl lg:text-[30px] flex border-b border-[#FFF] lg:py-4 lg:px-6 py-1 px-2 ">
          Phone
        </span>
        <span className="text-[#FFFFFF] bg-[#631363] min-w-[40px] whitespace-nowrap text-xs items-center md:text-xl lg:text-[30px] leading-normal flex border-b lg:py-4 lg:px-6 border-[#FFF]  py-1 px-2 ">
          User Type.
        </span>
        <span className="text-[#FFFFFF] bg-[#631363] min-w-[40px] text-xs items-center leading-normal md:text-xl lg:text-[30px] flex border-b border-[#FFF] lg:py-4 lg:px-6 rounded-bl-xl py-1 px-2 ">
          Action
        </span>
      </div>
      <div className="w-full  bg-[#F4F4F4] rounded-tr-xl -ml-2  flex flex-col">
        <span className="text-[#6D6D6D] odd:bg-[#FFFFFF] w-full items-center text-xs lg:text-[26px] leading-normal flex  pl-3 lg:py-[11px] lg:px-6  py-1 px-2 rounded-tr-xl">
          {name}
        </span>
        <span className="text-[#6D6D6D] odd:bg-[#FFFFFF] w-full items-center text-xs lg:text-[26px] leading-normal flex pl-3  lg:py-[11px] lg:px-6   py-1 px-2 ">
          {email}
        </span>
        <span className="text-[#6D6D6D] odd:bg-[#FFFFFF] w-full items-center text-xs lg:text-[26px] leading-normal flex pl-3   lg:py-[11px] lg:px-6  py-1 px-2 ">
          {phone}
        </span>
        <span className="text-[#6D6D6D] odd:bg-[#FFFFFF] w-full items-center text-xs lg:text-[26px] font-bold leading-normal flex pl-3  lg:py-[11px] lg:px-6   py-1 px-2 ">
          {userType}
        </span>
        <span className="text-[#6D6D6D] odd:bg-[#FFFFFF] gap-2 w-full items-center text-xs lg:text-[26px]  leading-normal flex pl-3  lg:py-[23.5px] lg:px-6  py-3 px-2 ">
          {action}
        </span>
      </div>
    </div>
  );
};

export default GereralTeamEmpCard;
