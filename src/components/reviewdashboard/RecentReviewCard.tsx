import React, { useMemo } from "react";

/**
 * CSS properties for Typography.
 * @type {React.CSSProperties}
 */
export const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontSize: "36.559px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * CSS properties for the RecentReplyText style.
 * @type {React.CSSProperties}
 */
const RecentReplyText: React.CSSProperties = {
  ...Typography,
  color: "#631363",
  fontSize: "20.984px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * CSS properties for the RecentReviewTitle style.
 * @type {React.CSSProperties}
 */
const RecentReviewTitle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: 26.559,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * CSS properties for the RecentTextStyle style.
 * @type {React.CSSProperties}
 */
const RecentTextStyle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: 21.336,
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "normal",
};

/**
 * Interface for the RecentReviewCardProps.
 * Represents the properties for the RecentReviewCard component.
 *
 * @interface RecentReviewCardProps
 * @property {React.ReactElement} logo - Logo SVG component.
 * @property {string} title - Title or name of the reviewer.
 * @property {string} des - Description or review content.
 * @property {React.ReactElement} svgRating - Star rating component.
 */
interface RecentReviewCardProps {
  logo: React.ReactElement;
  title: string;
  des: string;
  svgRating: React.ReactElement;
}

/**
 * RecentReviewCard component to display a recent review item.
 *
 * @param {RecentReviewCardProps} props - The properties for the RecentReviewCard component.
 * @returns {JSX.Element} The rendered RecentReviewCard component.
 */
export const RecentReviewCard = ({
  logo,
  svgRating,
  title,
  des,
}: RecentReviewCardProps): JSX.Element => {
  // Memoizing styles to prevent unnecessary recalculations
  const memoizedLogo = useMemo(() => logo, [logo]);
  const memoizedSvgRating = useMemo(() => svgRating, [svgRating]);
  const memoizedTitle = useMemo(() => title, [title]);
  const memoizedDes = useMemo(() => des, [des]);

  return (
    <div className="flex flex-col w-full h-full rounded-3xl py-3 min-w-[260px] bg-[#E0E0E0]">
      <div className="flex mx-10 gap-3 sm:gap-8 my-6">
        {memoizedLogo}
        {memoizedSvgRating}
      </div>
      <div className="flex flex-col gap-3 mx-10">
        <span
          className="font-family-Glacial_Indifference-Bold-Helvetica"
          style={RecentReviewTitle}
        >
          {memoizedTitle}
        </span>
        <span
          className="font-family-Glacial_Indifference-Bold-Helvetica"
          style={RecentTextStyle}
        >
          {memoizedDes}
        </span>
        <div className="flex border-b-2 w-full border-[#8C8C8C]" />
        <span
          style={RecentReplyText}
          className="font-family-Glacial_Indifference-Bold-Helvetica"
        >
          Reply
        </span>
      </div>
    </div>
  );
};
