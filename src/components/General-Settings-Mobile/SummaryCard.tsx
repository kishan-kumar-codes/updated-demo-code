import React from "react";
interface Summary {
  title: string;
  date: string;
}

interface SummaryCardProps {
  summary: Summary;
}
const SummaryCard: React.FC<SummaryCardProps> = ({ summary }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full justify-between px-3 bg-[#631363] text-white py-3 lg:py-5 rounded-t-2xl">
        <div className="flex flex-col lg:flex-row gap-2">
          <span className=" text-xs lg:text-[20px] font-bold leading-normal">
            {summary.title}
          </span>
          <span className=" text-xs lg:text-[20px] font-normal leading-normal">
            {summary.date}
          </span>
        </div>
        <span className=" text-[22px] font-bold leading-normal">$532.26</span>
      </div>
      <div className="flex w-full justify-between px-3 bg-[#FFFFFF]  text-[#6D6D6D] py-1 lg:py-3">
        <span className=" text-xs font-normal lg:text-[18px]  leading-normal">
          Calls (255)
        </span>
        <span className=" text-xs font-bold lg:text-[16px]  leading-normal ">
          $432
        </span>
      </div>
      <div className="flex w-full justify-between px-3 bg-[#F4F4F4]  text-[#6D6D6D] py-1 lg:py-3">
        <span className=" text-xs font-normal lg:text-[18px] leading-normal">
          SMS (36)
        </span>

        <span className=" text-xs font-bold lg:text-[16px] leading-normal">
          $100.26
        </span>
      </div>
    </div>
  );
};

export default SummaryCard;
