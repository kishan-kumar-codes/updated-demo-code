import { GerneralViewSvgs } from "@/svgs/General-Settings-Mobile/svgs";
import React from "react";

const GeneralHistoryCard = ({ review }: any) => {
  return (
    <div className="w-full">
      <div className="flex w-full">
        <div className=" text-white rounded-2xl pb-4 w-full overflow-hidden">
          <div className=" w-full">
            <div className="flex w-full">
              {" "}
              <div className="bg-[#631363] text-white border-b  w-[218px] text-[14px] p-2">
                Transaction ID
              </div>{" "}
              <div className="text-[#6D6D6D] bg-[#FFFFFF] rounded-tr-2xl p-2 text-xs break-words w-full">
                {review.id}
              </div>{" "}
            </div>
            <div className="flex w-full">
              <div className="bg-[#631363] border-b whitespace-nowrap tracking-tight  w-[218px]  text-[14px] p-2">
                Sub-Account Name
              </div>{" "}
              <div className="text-[#6D6D6D] bg-[#F4F4F4] w-full p-2 text-xs break-words">
                {review.date}
              </div>{" "}
            </div>
            <div className="flex w-full">
              <div className="bg-[#631363] border-b  w-[218px]  text-[14px] p-2">
                Billing Date
              </div>{" "}
              <div className="text-[#6D6D6D] bg-white w-full text-xs p-2 break-words">
                {review.desc}
              </div>{" "}
            </div>
            <div className="flex w-full">
              <div className="bg-[#631363] border-b  w-[218px] p-2  text-[14px]">
                Activity Date
              </div>
              <div className="text-[#6D6D6D] bg-[#F4F4F4] font-bold w-full p-2 text-xs break-words">
                {" "}
                {review.cardDetails}
              </div>{" "}
            </div>
            <div className="flex w-full">
              <div className="bg-[#631363] border-b  w-[218px] p-2  text-[14px]">
                Description
              </div>
              <div className="text-[#6D6D6D] w-full bg-white p-2 text-xs break-words">
                {" "}
                {review.amount}
              </div>{" "}
            </div>
            <div className="flex w-full">
              <div className="bg-[#631363] border-b  w-[218px]  text-[14px] p-2">
                {" "}
                Amount
              </div>
              <div className="w-full bg-[#F4F4F4] p-2">
                <div className="text-[#631363]  text-xs break-words">
                  {" "}
                  {review.status}
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="bg-[#631363] border-b  w-[218px]  text-[14px] p-2">
                {" "}
                Total Balance
              </div>
              <div className="w-full bg-white p-2">
                <div className="text-[#631363]   text-xs break-words">
                  {" "}
                  {review.balance}
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="bg-[#631363] rounded-bl-lg border-b  w-[218px] text-xs p-2">
                {" "}
              </div>
              <div className="w-full p-2 bg-[#F4F4F4]">
                <div className="text-[#6D6D6D] text-xs flex gap-2 break-words">
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
