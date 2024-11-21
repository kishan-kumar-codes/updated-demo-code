import Link from "next/link";
import React from "react";

/**
 * Base typography styles for text elements.
 *
 * @constant
 * @type {React.CSSProperties}
 */
const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontSize: "36.559px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * Style for the report number.
 * Extends base typography styles with specific color and font size.
 *
 * @constant
 * @type {React.CSSProperties}
 */
const ReportNum: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: "61.801px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * Style for the report title.
 * Extends base typography styles with specific color and font size.
 *
 * @constant
 * @type {React.CSSProperties}
 */
const ReportText: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: "20.891px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * Style for the report subtitle or description.
 * Extends base typography styles with specific color and font size.
 *
 * @constant
 * @type {React.CSSProperties}
 */
const ReportSubText: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: "13.057px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

/**
 * Props for the ReviewReportCard component.
 *
 * @interface ReviewReportProps
 * @property {number} number - The numeric value displayed on the card.
 * @property {string} title - The title of the report.
 * @property {string} des - A brief description of the report.
 * @property {React.ReactElement} svg - An SVG icon associated with the report.
 * @property {boolean} isMobile - Whether the component is displayed on mobile.
 */
interface ReviewReportProps {
  number: number;
  title: string;
  des: string;
  svg: React.ReactElement;
  desktopsvg: React.ReactElement | undefined;
  isMobile?: boolean;
  href?: string;
}

/**
 * ReviewReportCard component displays a card with a numeric value, title, description, and an SVG icon.
 *
 * @param {ReviewReportProps} props - The properties for the ReviewReportCard component.
 * @returns {JSX.Element} The rendered ReviewReportCard component.
 */
export const ReviewReportCard = ({
  number,
  title,
  des,
  href = "/",
  isMobile = false,
  svg,
  desktopsvg,
}: ReviewReportProps): JSX.Element => {
  return (
    <div className="flex [font-family:'Glacial_Indifference-Bold',Helvetica] cursor-pointer rounded-3xl flex-col p-2 md:px-4 px-2 h-full w-full bg-[#E0E0E0]">
      <Link href={href}>
        <div className="flex mx-1 p-1 justify-between">
          <div className="text-[#6D6D6D] text-3xl md:text-5xl font-semibold">
            <span>{number}</span>
          </div>
          <div className="w-[45px] items-center flex md:hidden h-[45px] rounded-full bg-[#FFFFFF]">
            <span className="flex items-center py-2 justify-center">{svg}</span>
          </div>
          <div className="w-[75px] hidden items-center md:flex justify-center  h-[75px] rounded-full bg-[#FFFFFF]">
            <span className="flex items-center py-2 justify-center">
              {desktopsvg}
            </span>
          </div>
        </div>
        <div className="flex p-1 flex-col py-0 md:py-2 w-full gap-2 md:gap-1">
          <span className="text-[#6D6D6D] text-xs md:text-lg font-semibold">
            {title}
          </span>
          <span className="text-[#6D6D6D] leading-tight md:text-base text-[8px] font-normal">
            {des}
          </span>
        </div>
      </Link>
    </div>
  );
};
