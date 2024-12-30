import { GerneralViewSvgs } from "@/svgs/General-Settings-Mobile/svgs";
import React from "react";

const GeneralHistoryCard = ({ review }: any) => {
  return (
    <div className="w-full">
      <div className="flex w-full">
        <div className=" text-white rounded-2xl pb-4 w-full overflow-x-scroll">
          <div className=" flex flex-col lg:flex-row h-full w-full">
            <div className="flex lg:flex-col h-full w-full">
              {" "}
              <div className="bg-[#631363] lg:text-[20px] lg:whitespace-nowrap lg:border lg:border-[#CCC] py-0 lg:py-3 text-white border-b w-[110px] lg:w-full text-xs p-2">
                Transaction ID
              </div>{" "}
              <div className="text-[#6D6D6D] h-full bg-[#FFFFFF] lg:bg-[#E0E0E0] lg:border lg:border-[#CCC] rounded-tr-2xl lg:rounded-tr-none p-2 lg:text-[18px] text-xs break-words w-full">
                {review.id}
              </div>{" "}
            </div>
            <div className="flex w-full lg:flex-col">
              <div className="bg-[#631363] lg:text-[20px] lg:whitespace-nowrap lg:border lg:border-[#CCC] py-0 lg:py-3 border-b w-[110px] lg:w-full text-xs p-2">
                Sub-Account Name
              </div>{" "}
              <div className="text-[#6D6D6D] lg:text-[18px] bg-[#F4F4F4] lg:bg-[#E0E0E0] lg:border lg:border-[#CCC] h-full w-full  p-2 text-xs break-words lg:leading-5">
                {review.date}
              </div>{" "}
            </div>
            <div className="flex w-full lg:flex-col">
              <div className="bg-[#631363] lg:text-[20px] lg:whitespace-nowrap lg:border lg:border-[#CCC] py-0 lg:py-3 border-b w-[110px] lg:w-full  text-xs p-2">
                Billing Date
              </div>{" "}
              <div className="text-[#6D6D6D]  lg:leading-5 lg:text-[18px] bg-white lg:bg-[#E0E0E0] lg:border lg:border-[#CCC] h-full w-full text-xs p-2 break-words">
                {review.desc}
              </div>{" "}
            </div>
            <div className="flex w-full lg:flex-col">
              <div className="bg-[#631363] lg:text-[20px] lg:whitespace-nowrap lg:border lg:border-[#CCC] py-0 lg:py-3 border-b w-[110px] lg:w-full p-2 text-xs">
                Activity Date
              </div>
              <div className="text-[#6D6D6D]  lg:leading-5 lg:text-[18px] bg-[#F4F4F4] lg:bg-[#E0E0E0] lg:border lg:border-[#CCC] h-full font-bold w-full p-2 text-xs break-words">
                {" "}
                {review.cardDetails}
              </div>{" "}
            </div>
            <div className="flex w-full lg:flex-col">
              <div className="bg-[#631363] lg:text-[20px] lg:border lg:whitespace-nowrap lg:border-[#CCC] py-0 lg:py-3 border-b w-[110px] lg:w-full p-2 text-xs">
                Description
              </div>
              <div className="text-[#6D6D6D] lg:text-[18px] w-full bg-white lg:bg-[#E0E0E0] lg:border lg:border-[#CCC] h-full p-2 text-xs break-words">
                {" "}
                {review.amount}
              </div>{" "}
            </div>
            <div className="flex w-full lg:flex-col">
              <div className="bg-[#631363] lg:whitespace-nowrap lg:text-[20px] lg:border lg:border-[#CCC] py-0 lg:py-3 border-b w-[110px] lg:w-full text-xs p-2">
                {" "}
                Amount
              </div>
              <div className="w-full p-2 bg-[#F4F4F4] lg:border h-full  lg:border-[#CCC] lg:bg-[#E0E0E0]">
                <div className="text-[#631363]  text-xs lg:text-[18px] break-words">
                  {" "}
                  {review.status}
                </div>
              </div>
            </div>
            <div className="flex w-full lg:flex-col">
              <div className="bg-[#631363] lg:text-[20px] lg:whitespace-nowrap lg:border lg:border-[#CCC] py-0 lg:py-3 border-b w-[110px] lg:w-full text-xs p-2">
                {" "}
                Total Balance
              </div>
              <div className="w-full p-2 bg-[#F4F4F4] lg:border h-full  lg:border-[#CCC] lg:bg-[#E0E0E0]">
                <div className="text-[#631363]  text-xs lg:text-[18px] break-words">
                  {" "}
                  {review.balance}
                </div>
              </div>
            </div>
            <div className="flex w-full lg:flex-col">
              <div className="bg-[#631363] rounded-bl-lg lg:rounded-bl-none border-b w-[110px] py-1 lg:py-5  lg:w-full text-xs p-2">
                {" "}
              </div>
              <div className="w-full p-2 bg-white lg:bg-[#E0E0E0] lg:border h-full  lg:border-[#CCC]  py-1 lg:py-3">
                <div className="text-[#6D6D6D] text-xs lg:text-[18px]  flex gap-2 break-words">
                  <GerneralViewSvgs /> View
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <Image
                  alt="Share"
                  className="object-contain w-5 h-5 m-1"
                  src={TrashDesk}
                /> */}
        </div>
      </div>
    </div>
  );
};

export default GeneralHistoryCard;
