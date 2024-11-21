import { LineSvgs } from "@/svgs/citations-builder/svgs";
import { InfoSvgs } from "@/svgs/seo-screens/svgs";
import { ReviewWidgetInfoSvgs } from "@/svgs/Review-Widget-mobile/svgs";

const Typography: React.CSSProperties = {
  color: "#631363",
  fontFamily: "Arial",
  fontSize: "9px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

/**
 * Tooltip component
 *
 * A component that displays a tooltip with a message when hovering over its children. The tooltip appears on hover
 * and contains a styled box with a triangle pointer.
 *
 * @param {object} props - The properties for the Tooltip component.
 * @param {string} props.message - The message to be displayed inside the tooltip.
 * @param {React.ReactNode} props.children - The content that triggers the tooltip on hover.
 *
 * @returns {JSX.Element} The rendered Tooltip component.
 */
export default function TooltipReputation({
  message,
  children,
}: {
  message: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="group relative flex max-w-max z-10 flex-col items-start justify-center  ">
      <div className="absolute left-20 rotate-180 ml-auto mr-auto min-w-max -translate-x-1/2 scale-0 transform rounded-3xl p-2 px-3 py-2 text-xs font-medium transition-all duration-500 group-hover:scale-100">
        <div className="flex max-w-[100px] flex-col items-center ">
          <div
          className="absolute top-1/2 -translate-y-1/2 right-full mr-2 w-3 h-3 bg-[#631363] left-[110px]"
          style={{ clipPath: "polygon(100% 50%, 0% 0%, 0% 100%)" }}
        ></div>
          <div className="rounded rotate-180 my-4 w-[100px] h-full bg-[#631363] p-2 text-center justify-center text-xs text-white">
            {message}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export const InfoTooltipReputation = () => {
  return (
    <TooltipReputation message=" businesses.">
      <div className="cursor-pointer flex flex-col gap-1 ">
        <div className="">
          {" "}
          <InfoSvgs />
        </div>
      </div>
    </TooltipReputation>
  );
};

export const ReviewWidgetInfoTooltip = () => {
  return (
    <TooltipReputation message=" businesses.">
      <div className="cursor-pointer flex flex-col gap-1 ">
        <div className="">
          {" "}
          <ReviewWidgetInfoSvgs />
        </div>
      </div>
    </TooltipReputation>
  );
};
