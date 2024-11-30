import React, { useState, ReactNode } from "react";

interface ExpansionPanelProps {
  title: string;
  children: ReactNode;
}

const ExpansionPanel: React.FC<ExpansionPanelProps> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-chinesWhite mb-4">
      <div
        className="flex items-center rounded-lg justify-between cursor-pointer bg-palatinatePurple h-[40px]"
        onClick={toggleExpansion}
      >
        <h2 className="text-[16px] text-white pl-[14px] p-[10px] font-bold ">
          {title}
        </h2>
      </div>
      {expanded && (
        <div className={`px-4 pb-4 ${expanded ? "block" : "hidden"} `}>
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpansionPanel;
