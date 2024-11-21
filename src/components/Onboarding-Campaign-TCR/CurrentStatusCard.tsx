import { OnboardingRightTickSvgs } from "@/svgs/Onboarding-Campaign-TCR/svgs";
import React from "react";

export interface CurrentStatusCardProps {
  currentTItle: string[];
  title: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5?: string;
  title6?: string;
  svg?: React.ReactElement;
}
const CurrentStatusCard = ({
  title1,
  title,
  title6,
  title2,
  title3,
  title4,
  title5,
  svg,
  currentTItle,
}: CurrentStatusCardProps) => {
  return (
    <div className="w-full flex items-center itext-center ">
      <div className="flex text-center w-20 h-16 text-[#FFF] text-xs rounded-lg bg-[#631363] items-center justify-center">
        {title}
      </div>
      <div className="flex w-full flex-col h-16">
        <div className="flex w-full bg-[#E0E0E0] [font-family:Arial] text-[9px]  leading-[normal] text-[#631363]  justify-center  text-center items-center rounded-2xl h-10 px-3 font-[700]">
          {currentTItle.map((title, index) => (
            <span
              key={index}
              className=" flex flex-1 justify-center font-bold items-center"
            >
              {title}
            </span>
          ))}
        </div>
        <div className="flex w-full bg-[#F4F4F4] [font-family:Arial] text-[10px] font-bold leading-[normal] text-[#6D6D6D] justify-center  text-center items-center rounded-2xl h-10 px-3">
          {title1 && (
            <span className=" flex flex-1 justify-center items-center">
              {" "}
              {title1}
            </span>
          )}
          {title2 && (
            <span className=" flex flex-1 justify-center items-center">
              {" "}
              {title2}
            </span>
          )}
          {title3 && (
            <span className=" flex flex-1 justify-center items-center">
              {" "}
              {title3}
            </span>
          )}
          {title4 && (
            <span className=" flex flex-1 justify-center items-center">
              {" "}
              {title4}
            </span>
          )}
          {title5 && (
            <span className=" flex flex-1 justify-center items-center">
              {" "}
              {title5}
            </span>
          )}

          {title6 && (
            <span className="flex flex-1 flex-col text-center  justify-center items-center">
              {svg ? svg : <OnboardingRightTickSvgs />}
              {title6}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentStatusCard;
