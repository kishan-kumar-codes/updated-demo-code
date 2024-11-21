import React from "react";
interface WEbChatCardProps {
  title: string;
  content: string;
  children?: React.ReactNode;
}

const WEbChatCard = ({ title, content, children }: WEbChatCardProps) => {
  return (
    <div className="w-full flex flex-col gap-1 lg:gap-2 p-0  lg:p-2">
      <span className="text-[#6D6D6D] w-full text-sm md:text-base lg:text-xl font-semibold leading-normal">
        {title}
      </span>
      <div className="w-full flex flex-col px-2 py-2 lg:py-3 lg:px-3 gap-1 bg-[#F4F4F4] rounded-xl">
        <span className="text-[#6D6D6D] w-full text-xs md:text-sm lg:text-lg  font-normal leading-4">
          {content}
        </span>
        <hr className="w-full h-0.5 bg-[#E0E0E0]" />
        <div className="w-full min-h-[40px] flex flex-col font-semibold gap-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WEbChatCard;
