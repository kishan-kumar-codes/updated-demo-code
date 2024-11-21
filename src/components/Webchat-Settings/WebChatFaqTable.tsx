import React from "react";

const WebChatFaqTable = () => {
  return (
    <div className="w-full flex items-center my-2 flex-col">
      <div className="w-full flex  justify-center h-[50px] items-center bg-[#631363] rounded-t-3xl">
        <span className="text-[#FFF] items-center justify-center flex flex-1 h-full p-1 w-full border-r border-[#FFF] text-sm lg:text-[18px] text-center font-normal lg:font-bold">
          Matched
        </span>
        <span className="text-[#FFF] items-center justify-center flex flex-1 h-full p-1 w-full border-r border-[#FFF] text-sm lg:text-[18px] text-center font-normal lg:font-bold">
          Spreadsheet <br /> column{" "}
        </span>
        <span className="text-[#FFF] items-center justify-center flex flex-1 h-full p-1 w-full border-r border-[#FFF] text-sm lg:text-[18px] text-center font-normal lg:font-bold">
          Sample <br /> data
        </span>
        <span className="text-[#FFF] flex flex-1 h-full items-center justify-center p-1 w-full border-r border-[#FFF] text-sm lg:text-[18px] text-center font-normal lg:font-bold">
          HubSpark <br />
          property{" "}
        </span>
      </div>
      <div className="w-full flex  justify-center h-[50px] items-center shadow-b-xl border  ">
        <div className="w-full  h-full items-center justify-center flex flex-1 l p-1     text-center">
          <span className="w-3 rounded-full h-3 items-center justify-center  bg-[#34C759]    text-center"></span>
        </div>
        <span className="text-[#6D6D6D] items-center justify-center flex flex-1 h-full p-1 w-full border-x   text-[10px] text-center lg:text-[18px]">
          Question*
        </span>
        <span className="text-[#6D6D6D] items-center justify-center flex flex-1 h-full p-1 w-full border-x  text-[10px] text-center lg:text-[18px] leading-3 lg:leading-5">
          Do you have medicines?
        </span>
        <span className="text-[#6D6D6D] flex flex-1 h-full items-center justify-center p-1 w-full   text-[10px] text-center lg:text-[18px]">
          Question
        </span>
      </div>
      <div className="w-full flex  justify-center h-[50px] items-center shadow-b-xl border  ">
        <div className="w-full  h-full items-center justify-center flex flex-1 l p-1     text-center">
          <span className="w-3 rounded-full h-3 items-center justify-center  bg-[#34C759]    text-center"></span>
        </div>
        <span className="text-[#6D6D6D] items-center justify-center flex flex-1 h-full p-1 w-full border-x   text-[10px] text-center lg:text-[18px]">
          Question*
        </span>
        <span className="text-[#6D6D6D] items-center justify-center flex flex-1 h-full p-1 w-full border-x  text-[10px] text-center leading-3 lg:leading-5 lg:text-[18px]">
          Do you have medicines?
        </span>
        <span className="text-[#6D6D6D] flex flex-1 h-full items-center justify-center p-1 w-full   text-[10px] text-center lg:text-[18px]">
          Question
        </span>
      </div>
      <div className="w-full flex  justify-center h-[50px] items-center shadow-b-xl border  rounded-b-3xl">
        <div className="w-full  h-full items-center justify-center flex flex-1 l p-1     text-center">
          <span className="w-3 rounded-full h-3 items-center justify-center  bg-[#34C759]    text-center"></span>
        </div>
        <span className="text-[#6D6D6D] items-center justify-center flex flex-1 h-full p-1 w-full border-x   text-[10px] text-center lg:text-[18px]">
          Question*
        </span>
        <span className="text-[#6D6D6D] items-center justify-center flex flex-1 h-full p-1 w-full border-x  text-[10px] text-center lg:text-[18px] leading-3 lg:leading-5">
          Do you have medicines?
        </span>
        <span className="text-[#6D6D6D] lg:text-[18px] flex flex-1 h-full items-center justify-center p-1 w-full   text-[10px] text-center">
          Question
        </span>
      </div>
    </div>
  );
};

export default WebChatFaqTable;
