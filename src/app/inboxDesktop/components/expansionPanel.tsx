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
    <div className="mt-[5.6px] px-[8px] z-30 bg-white rounded-xl cursor-pointer">
      <div
        className="flex items-center justify-between h-[33px]"
        onClick={toggleExpansion}
      >
        <h2 className="text-[13px] 2xl:text-[16px] text-darkSilverColor p-[10px] font-bold ">
          {title}
        </h2>
        <span className={expanded ? 'rotate-180' : ''}><svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.69912 4.80018L8.19912 1.30018C8.49912 1.00018 8.39912 0.600179 8.19912 0.300179C7.89912 0.000178933 7.49912 0.100179 7.19912 0.300179L4.19912 3.30018L1.19912 0.300179C0.899121 0.100179 0.498828 0.100179 0.398828 0.300179C0.0988281 0.600179 0.0988281 1.00018 0.398828 1.30018L3.89883 4.80018C4.09883 5.00018 4.59912 5.00018 4.69912 4.80018Z" fill="#6D6D6D" />
        </svg>
        </span>
      </div>
      {expanded && (
        <div className={` w-full px-[10px] pb-4  ${expanded ? "block" : "hidden"} `}>
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpansionPanel;
