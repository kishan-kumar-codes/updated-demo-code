import { GerneralThreeDotsSvgs } from "@/svgs/General-Settings-Mobile/svgs";
import React from "react";

const UsersTable = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div className="w-full flex justify-center items-center bg-[#631363] h-10 rounded-t-3xl">
        <span className="text-[#FFF] flex flex-1 border-r-2 border-[#FFF] h-full items-center justify-center p-1 w-full text-xs text-center">
          Name
        </span>
        <span className="text-[#FFF] flex flex-1 border-r-2 border-[#FFF] h-full items-center justify-center p-1 w-full text-xs text-center">
          Role
        </span>
        <span className="text-[#FFF] flex flex-1 border-r-2 border-[#FFF] h-full items-center justify-center p-1 w-full text-xs text-center">
          Locations
        </span>
        <span className="text-[#FFF] flex flex-1 border-r-2 border-[#FFF] h-full items-center justify-center p-1 w-full text-xs text-center">
          Last <br />
          Updated
        </span>
        <span className="text-[#FFF] flex flex-1 border-r-2 border-[#FFF] h-full items-center justify-center p-1 w-full text-xs text-center">
          Last <br />
          Login
        </span>
        <span className="text-[#FFF] flex flex-1 h-full items-center justify-center p-0.5 w-full text-xs text-center"></span>
      </div>
      <div className="w-full flex justify-center items-center bg-[#E0E0E0] h-10 ">
        <span className="text-[#6D6D6D] flex flex-1 border-r-2 border-[#CCC] h-full items-center justify-center p-1 w-full text-xs text-center">
          John Doe
        </span>
        <span className="text-[#6D6D6D] flex flex-1 border-r-2 border-[#CCC] h-full items-center justify-center p-1 w-full text-xs text-center">
          Owner
        </span>
        <span className="text-[#6D6D6D] flex flex-1 border-r-2 border-[#CCC] h-full items-center justify-center p-1 w-full text-xs text-center">
          Enterprise
        </span>
        <span className="text-[#6D6D6D] flex flex-1 border-r-2 border-[#CCC] h-full items-center justify-center p-1 w-full text-xs text-center">
          Jun 12, <br />
          2024
        </span>
        <span className="text-[#6D6D6D] flex flex-1 border-r-2 border-[#CCC] h-full items-center justify-center p-1 w-full text-xs text-center">
          6 Days, <br />
          Ago
        </span>
        <span className="text-[#6D6D6D] flex flex-1 h-full items-center justify-center p-0.5 w-full text-xs text-center">
          <GerneralThreeDotsSvgs />
        </span>
      </div>
      <div className="w-full flex justify-center items-center bg-[#FFF] h-10 ">
        <span className="text-[#6D6D6D] flex flex-1 border-r-2 border-[#CCC] h-full items-center justify-center p-1 w-full text-xs text-center">
          John Doe
        </span>
        <span className="text-[#6D6D6D] flex flex-1 border-r-2 border-[#CCC] h-full items-center justify-center p-1 w-full text-xs text-center">
          Owner
        </span>
        <span className="text-[#6D6D6D] flex flex-1 border-r-2 border-[#CCC] h-full items-center justify-center p-1 w-full text-xs text-center">
          Enterprise
        </span>
        <span className="text-[#6D6D6D] flex flex-1 border-r-2 border-[#CCC] h-full items-center justify-center p-1 w-full text-xs text-center">
          Jun 12, <br />
          2024
        </span>
        <span className="text-[#6D6D6D] flex flex-1 border-r-2 border-[#CCC] h-full items-center justify-center p-1 w-full text-xs text-center">
          1 Week <br />
          Ago
        </span>
        <span className="text-[#6D6D6D] flex flex-1 h-full items-center justify-center p-0.5 w-full text-xs text-center">
          <GerneralThreeDotsSvgs />
        </span>
      </div>
    </div>
  );
};

export default UsersTable;
