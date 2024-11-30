import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";
import React, { useState, ReactNode } from "react";

interface ExpansionPanelProps {
  title: string;
  children: ReactNode;
}

const ExpansionPanel: React.FC<ExpansionPanelProps> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  const isMax = useClientMediaQuery("(min-width: 1024px)");

  const toggleExpansion = () => {
    if (!isMax) {
      setExpanded(!expanded);
    }
  };

  return (
    <div className="mb-4 rounded-xl bg-[#E0E0E0] lg:bg-[#F4F4F4]">
      <div
        className="flex items-center rounded-xl justify-between cursor-pointer bg-palatinatePurple h-[40px] lg:justify-center md:py-3 md:h-[60px]"
        onClick={toggleExpansion}>
        <h2 className="text-[16px] text-white pl-[14px] p-[10px] font-bold md:text-[26px] md:text-center ">
          {title}
        </h2>
      </div>
      {expanded && (
        <div
          className={`px-4 bg-chinesWhite mt-2 rounded-md py-4 ${expanded ? "block" : "hidden"} lg:block lg:px-0 lg:py-0`}>
          {children}
        </div>
      )}
      {isMax && (
        <div
          className={`px-4 pb-4 ${expanded ? "block" : "hidden"} lg:block lg:px-0 lg:py-0`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpansionPanel;
