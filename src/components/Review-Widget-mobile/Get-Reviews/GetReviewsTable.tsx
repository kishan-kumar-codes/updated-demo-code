import { ReviewDeleteSvgs } from "@/svgs/review-dashboard-mobile/svgs";
import React from "react";
import { Trash } from "lucide-react";

interface GetReviewsTableType {
  dateLastSent: string;
  templateUsed: string;
  campaignType: string;
  ratingType: string;
  averageScore: string;
  actions: string;
}

// Define the props type for the GetReviewsTable component
interface GetReviewsTableProps {
  data: GetReviewsTableType[];
  handleViewClick: (data: GetReviewsTableType) => void;
}

const GetReviewsTable = ({ data, handleViewClick }: GetReviewsTableProps) => {
  return (
    <div className="w-full lg:px-12 flex flex-col h-full px-2">
      <div className="w-full flex h-[45px] md:h-[60px] lg:h-[85px] justify-center items-center bg-[#631363]">
        <div className="flex min-w-[16.66%] md:text-lg lg:text-[32px] md:font-normal flex-1  md:p-2 leading-4 md:leading-5 lg:leading-[32px] p-0.5 justify-center  w-full text-xs text-center text-[#FFF] border-l border-[#FFF] items-center h-full ">
          Date <br /> Last Sent
        </div>
        <div className="flex flex-1 min-w-[16.66%]  md:text-lg lg:text-[32px] md:p-2 leading-4 md:leading-5 lg:leading-[32px] md:font-normal p-0.5 justify-center w-full text-xs text-center text-[#FFF] border-l border-[#FFF] items-center h-full ">
          Template <br /> Used
        </div>
        <div className="flex flex-1 min-w-[16.66%]  md:text-lg lg:text-[32px] md:p-2 leading-4 md:leading-5 lg:leading-[32px] md:font-normal p-0.5 justify-center  w-full text-xs text-center text-[#FFF] border-l border-[#FFF] items-center h-full ">
          Campaign <br /> Type
        </div>
        <div className="flex flex-1 min-w-[16.66%]   md:text-lg lg:text-[32px] md:p-2 leading-4 md:leading-5 lg:leading-[32px] md:font-normal p-0.5 justify-center w-full text-xs text-center text-[#FFF] border-l border-[#FFF] items-center h-full ">
          Rating <br />
          Type
        </div>
        <div className="flex flex-1 min-w-[16.66%]  md:text-lg lg:text-[32px] md:p-2 leading-4 md:leading-5 lg:leading-[32px] md:font-normal  p-0.5 justify-center w-full text-xs text-center text-[#FFF] border-l border-[#FFF] items-center h-full ]">
          Average <br /> Score
        </div>
        <div className="flex flex-1 min-w-[16.66%]  md:text-lg lg:text-[32px] md:p-2 leading-4 md:leading-5 lg:leading-[32px] md:font-normal  p-0.5 justify-center w-full text-xs text-center pl-3 text-[#FFF] border-l border-[#FFF] items-center h-full ">
          Actions
        </div>
      </div>
      <div className="w-full flex flex-col h-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full flex h-[45px] md:h-[70px] lg:h-[85px] justify-center items-center odd:bg-[#F4F4F4] bg-[#FFF]">
            <div className="flex flex-1 min-w-[16.66%] p-[7px] lg:p-[10px] w-full text-[10px] text-center justify-center text-[#6D6D6D] border-l border-b border-[#CCCCCC] items-center h-full md:text-base lg:text-[30px] md:font-normal   ">
              {item.dateLastSent}
            </div>
            <div className="flex flex-1 min-w-[16.66%] p-[7px] lg:p-[10px] w-full text-[10px] justify-center text-center text-[#6D6D6D] border-l border-b border-[#CCCCCC] items-center h-full md:text-base lg:text-[30px] md:font-normal   ">
              {item.templateUsed}
            </div>
            <div className="flex flex-1 min-w-[16.66%] p-[7px] lg:p-[10px] w-full text-[10px] justify-center text-center text-[#6D6D6D] border-l border-b border-[#CCCCCC] items-center h-full md:text-base lg:text-[30px] md:font-normal   leading-3 md:leading-5 lg:leading-7">
              {item.campaignType}
            </div>
            <div className="flex flex-1 min-w-[16.66%] p-[7px] lg:p-[10px] w-full text-[10px] justify-center text-center text-[#6D6D6D] border-l border-b border-[#CCCCCC] items-center h-full md:text-base lg:text-[30px] md:font-normal   ">
              {item.ratingType}
            </div>
            <div className="flex flex-1 min-w-[16.66%] p-[7px] lg:p-[10px] w-full text-[10px] text-center justify-center text-[#6D6D6D] border-l border-b border-[#CCCCCC] items-center h-full md:text-base lg:text-[30px] md:font-normal  leading-3 md:leading-5 lg:leading-7  ">
              {item.averageScore}
            </div>
            <div className="flex w-full flex-1 min-w-[16.66%] px-0.5 flex-shrink-0 gap-0 md:gap-2 md:px-1.5 border-l h-full text-center justify-center items-center border-b border-r border-[#CCCCCC]">
              <button
                onClick={() => handleViewClick(item)}
                className="flex   text-[8px] justify-center text-center border rounded-xl md:rounded-2xl border-[#631363] px-1 md:px-[12px] text-[#631363] items-center md:text-[20px] lg:text-[22px] md:font-normal">
                View
              </button>{" "}
              <div className="flex text-[10px] justify-center text-center  text-[#6D6D6D] items-center h-full ">
                {/* <ReviewDeleteSvgs /> */}
                <Trash fill="#AA0F0F" color="#AA0F0F" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetReviewsTable;
