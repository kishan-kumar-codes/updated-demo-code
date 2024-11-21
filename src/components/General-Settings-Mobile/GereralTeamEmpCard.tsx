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
        <span className="text-[#FFFFFF] bg-[#631363] min-w-[40px] items-center text-xs  leading-normal flex border-b border-[#FFF]  py-1 px-2 rounded-tl-xl">
          Name
        </span>
        <span className="text-[#FFFFFF] bg-[#631363] min-w-[40px] text-xs items-center leading-normal flex border-b border-[#FFF]  py-1 px-2 ">
          Email
        </span>
        <span className="text-[#FFFFFF] bg-[#631363] min-w-[40px] text-xs items-center leading-normal flex border-b border-[#FFF]  py-1 px-2 ">
          Phone
        </span>
        <span className="text-[#FFFFFF] bg-[#631363] min-w-[40px] whitespace-nowrap text-xs items-center leading-normal flex border-b border-[#FFF]  py-1 px-2 ">
          User Type
        </span>
        <span className="text-[#FFFFFF] bg-[#631363] min-w-[40px] text-xs items-center leading-normal flex border-b border-[#FFF]  rounded-bl-xl py-1 px-2 ">
          Action
        </span>
      </div>
      <div className="w-full  bg-[#F4F4F4] rounded-tr-xl -ml-2  flex flex-col">
        <span className="text-[#6D6D6D] odd:bg-[#FFFFFF] w-full items-center text-xs  leading-normal flex  pl-3  py-1 px-2 rounded-tr-xl">
          {name}
        </span>
        <span className="text-[#6D6D6D] odd:bg-[#FFFFFF] w-full items-center text-xs  leading-normal flex pl-3    py-1 px-2 ">
          {email}
        </span>
        <span className="text-[#6D6D6D] odd:bg-[#FFFFFF] w-full items-center text-xs  leading-normal flex pl-3    py-1 px-2 ">
          {phone}
        </span>
        <span className="text-[#6D6D6D] odd:bg-[#FFFFFF] w-full items-center text-xs  font-bold leading-normal flex pl-3    py-1 px-2 ">
          {userType}
        </span>
        <span className="text-[#6D6D6D] odd:bg-[#FFFFFF] gap-2 w-full items-center text-xs  leading-normal flex pl-3    py-2 px-2 ">
          {action}
        </span>
      </div>
    </div>
  );
};

export default GereralTeamEmpCard;
