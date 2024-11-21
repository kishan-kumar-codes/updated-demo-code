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
      <div className="flex w-full justify-between px-3 bg-[#631363] text-white py-3 rounded-t-2xl">
        <div className="flex flex-col">
          <span className=" text-xs font-bold leading-normal">
            {summary.title}
          </span>
          <span className=" text-xs font-normal leading-normal">
            {summary.date}
          </span>
        </div>
        <span className=" text-[22px] font-bold leading-normal">$532.26</span>
      </div>
      <div className="flex w-full justify-between px-3 bg-[#FFFFFF]  text-[#6D6D6D] py-1">
        <span className=" text-xs font-normal leading-normal">Calls (255)</span>

        <span className=" text-xs font-bold leading-normal ">$432</span>
      </div>
      <div className="flex w-full justify-between px-3 bg-[#F4F4F4]  text-[#6D6D6D] py-1">
        <span className=" text-xs font-normal leading-normal">SMS (36)</span>

        <span className=" text-xs font-bold leading-normal">$100.26</span>
      </div>
    </div>
  );
};

export default SummaryCard;
