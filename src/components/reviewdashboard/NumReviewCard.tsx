import React, { useMemo } from "react";

/**
 * Common typography styles.
 *
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
 * Styles for the review number.
 *
 * @type {React.CSSProperties}
 */
const ReviewNum: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: 70.814,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * Styles for the image container.
 *
 * @type {React.CSSProperties}
 */
const imgStyle: React.CSSProperties = {
  background: "lightgray",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

/**
 * Props interface for the NumReviewCard component.
 *
 * @interface ReviewCardProps
 * @property {React.ReactElement} logoSvg - The logo SVG element.
 * @property {string} number - The number of reviews.
 * @property {React.ReactElement} svgRating - The star rating SVG element.
 */
interface ReviewCardProps {
  logoSvg: React.ReactElement<any>;
  number: string;
  svgRating: React.ReactElement<any>;
}

/**
 * NumReviewCard component to display a review card with a logo, star rating, and number of reviews.
 *
 * @param {ReviewCardProps} props - The props for the component.
 * @returns {JSX.Element} The rendered NumReviewCard component.
 */
export const NumReviewCard = ({
  logoSvg,
  number,
  svgRating,
}: ReviewCardProps): JSX.Element => {
  // Memoize the props to avoid unnecessary re-renders
  const memoizedLogoSvg = useMemo(() => logoSvg, [logoSvg]);
  const memoizedSvgRating = useMemo(() => svgRating, [svgRating]);
  const memoizedNumber = useMemo(() => number, [number]);

  return (
    <div className="flex items-center gap-2 justify-center [font-family:'Glacial_Indifference-Bold',Helvetica] rounded-3xl flex-col max-md:h-[250px] max-md:w-[366px] sm:w-[289px] sm:h-[230.29px] bg-[#BCBCBC]">
      <div className="flex items-center justify-center pt-8">
        <span style={imgStyle}>{memoizedLogoSvg}</span>
      </div>
      <div className="flex items-center justify-center pb-1">
        {memoizedSvgRating}
      </div>
      <div className="flex pb-3 mx-3">
        <span style={ReviewNum}>{memoizedNumber}</span>
      </div>
    </div>
  );
};
