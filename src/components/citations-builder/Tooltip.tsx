import { CitiationInfoSvgs } from "@/svgs/citation-desktop/svgs";
import { LineSvgs } from "@/svgs/citations-builder/svgs";
import { InfoSvgs } from "@/svgs/seo-screens/svgs";

const Typography: React.CSSProperties = {
  color: "#631363",
  fontFamily: "Arial",
  // fontSize: "9px",
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
export default function Tooltip({
  message,
  children,
}: {
  message: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative flex max-w-max z-50 flex-col items-center justify-center">
      <div className="absolute left-[20px] -top-16 rotate-180 ml-auto mr-auto min-w-max -translate-x-1/2 scale-0 transform rounded-3xl p-2 px-3 py-2 text-xs font-medium transition-all duration-500 group-hover:scale-100">
        <div className="flex max-w-xs flex-col items-center shadow-lg">
          {/* <div className="flex clip-bottom h-2 w-4 ml-4 bg-[#631363]"></div> */}
          <div
            className="flex clip-bottom"
            style={{
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent", // Left side of the triangle
              borderRight: "8px solid transparent", // Right side of the triangle
              borderBottom: "8px solid #631363", // Triangle pointing upward with color
              marginLeft: "16px", //
            }}></div>

          <div className=" rotate-180 w-[150px] h-full bg-[#631363] p-2 text-center text-xs text-white rounded-xl">
            {message}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

/**
 * TooltipIcon component
 *
 * A specific implementation of the Tooltip component that displays an icon with a tooltip message. This variant
 * includes a "Learn More" text and an icon from the LineSvgs collection.
 *
 * @returns {JSX.Element} The rendered TooltipIcon component.
 */
export const TooltipIcon = ({ message }: any): JSX.Element => {
  return (
    <Tooltip message={message}>
      <div className="cursor-pointer flex flex-col gap-1 lg:w-[90px]">
        <span style={Typography} className="text-[9px] lg:text-[16px]">
          Learn More
        </span>
        <div className=" ">
          {" "}
          <LineSvgs />
        </div>
      </div>
    </Tooltip>
  );
};

/**
 * InfoTooltip component
 *
 * A specific implementation of the Tooltip component that displays an icon with a tooltip message. This variant
 * includes an icon from the InfoSvgs collection.
 *
 * @returns {JSX.Element} The rendered InfoTooltip component.
 */
export const InfoTooltip = () => {
  return (
    <Tooltip message="This Citation allows you to hide the address.">
      <div className="cursor-pointer flex flex-col gap-1 ">
        <div className="">
          {" "}
          <InfoSvgs />
        </div>
      </div>
    </Tooltip>
  );
};

export const CitationInfoTooltip = () => {
  return (
    <Tooltip message="This Citation allows you to hide the address.">
      <div className="cursor-pointer flex flex-col gap-1 ">
        <div className="">
          {" "}
          <CitiationInfoSvgs />
        </div>
      </div>
    </Tooltip>
  );
};
