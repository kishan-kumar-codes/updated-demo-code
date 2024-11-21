import React from "react";

const UseCaseTable = () => {
  const tabelStyle =
    "flex flex-1 w-full  items-center justify-center  border-r-4 border-[#641964] text-center rounded-t-xl text-[#FFF] text-[7px] h-10 bg-[#641964]";
  const rowStyle =
    "  flex flex-1 w-full  items-center justify-center  border-r-4 border-[#E0E0E0] text-center  text-[#6D6D6D] text-[7px] h-10 ";
  return (
    <div className=" flex w-full  flex-col mt-4">
      <div className="flex w-full rounded-t-3xl pb-5 text-[9px] h-16 bg-[#FFF]">
        <span className="text-[#641964] flex border-r-4 border-[#641964] h-full items-center text-[5px] justify-center p-1 w-20 text-center" />
        <span className="text-[#641964] flex  border-r-4 border-[#641964] h-full items-center text-[7px] justify-center p-1 w-1/4   text-center">
          ENTITY
        </span>{" "}
        <span className="text-[#641964] flex w-40 border-r-4 mr-1 border-[#641964]  h-full items-center text-[7px] justify-center p-1   text-center">
          EXTERNAL VETTING REQUIRED
        </span>
        <span className="text-[#641964] flex   h-full items-center justify-center p-1 w-1/2 text-[7px]  text-center">
          APPROVAL REQUIRED
        </span>
      </div>
      <div className="w-full flex items-center -mt-8">
        <span className={tabelStyle}>USE CARE</span>
        <span className={tabelStyle}></span>
        <span className="flex flex-1 w-full  items-center justify-center  border-r-4 border-[#E0E0E0] text-center rounded-t-xl text-[#FFF] text-[7px] h-10 bg-[#641964]">
          AT&T
        </span>

        <span className={tabelStyle}> T-Mobile </span>
        <span className="flex flex-1 w-full  items-center justify-center  border-r-4 border-[#E0E0E0] text-center rounded-t-xl text-[#FFF] text-[7px] h-10 bg-[#641964]">
          AT&T
        </span>
        <span className={tabelStyle}>T-Mobile</span>
      </div>
      <div className="w-full flex items-center odd:bg-[#FFF]  even:bg-[#F4F4F4] ">
        <span className={rowStyle}>USE CARE</span>
        <span className={rowStyle}> 501</span>
        <span className={rowStyle}>YES</span>
        <span className={rowStyle}>NO</span>
        <span className={rowStyle}>YES</span>
        <span className="flex flex-1 w-full  items-center justify-center   text-center  text-[#6D6D6D] text-[7px] h-10">
          NO
        </span>
      </div>
      <div className="w-full flex items-center odd:bg-[#FFF] even:bg-[#F4F4F4]  ">
        <span className={rowStyle}>USE CARE</span>
        <span className={rowStyle}> 501</span>
        <span className={rowStyle}>YES</span>
        <span className={rowStyle}>NO</span>
        <span className={rowStyle}>YES</span>
        <span className="flex flex-1 w-full  items-center justify-center   text-center  text-[#6D6D6D] text-[7px] h-10">
          NO
        </span>
      </div>
      <div className="w-full flex items-center odd:bg-[#FFF] even:bg-[#F4F4F4] ">
        <span className={rowStyle}>USE CARE</span>
        <span className={rowStyle}> 501</span>
        <span className={rowStyle}>YES</span>
        <span className={rowStyle}>NO</span>
        <span className={rowStyle}>YES</span>
        <span className="flex flex-1 w-full  items-center justify-center   text-center  text-[#6D6D6D] text-[7px] h-10">
          NO
        </span>
      </div>
    </div>
  );
};

export default UseCaseTable;
