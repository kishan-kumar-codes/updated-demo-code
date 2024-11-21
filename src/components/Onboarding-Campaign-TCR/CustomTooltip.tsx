import { ReviewWidgetInfoSvgs } from "@/svgs/Review-Widget-mobile/svgs";
import React from "react";
interface CustomTooltipProps {
  tooltipMessage: string;
}
export default function TooltipReputation({
  message,
  children,
}: {
  message: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="group relative flex max-w-max z-10 flex-col items-center justify-center">
      <div className="absolute left-24     rotate-180 ml-auto mr-auto min-w-max -translate-x-1/2 scale-0 transform rounded-3xl p-2 px-3 py-2 text-xs font-medium transition-all duration-500 group-hover:scale-100">
        <div className="flex max-w-[200px] -ml-20 flex-col items-center ">
           <div
            className="absolute top-1/2 -translate-y-1/2 right-full mr-2 w-3 h-3 bg-[#631363] left-[132px]"
            style={{ clipPath: "polygon(100% 50%, 0% 0%, 0% 100%)" }}
          ></div>
          <div className="rounded-xl rotate-180 my-4 h-full bg-[#631363] p-2 text-center justify-center text-xs text-white">
            {message}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export const CustomTooltip = ({ tooltipMessage }: CustomTooltipProps) => {
  return (
    <TooltipReputation message={tooltipMessage}>
      <div className="cursor-pointer flex flex-col gap-1 ">
        <div className="">
          {" "}
          <ReviewWidgetInfoSvgs />
        </div>
      </div>
    </TooltipReputation>
  );
};
