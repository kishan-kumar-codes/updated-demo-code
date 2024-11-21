import React, { useMemo } from "react";
import { NumReviewCard } from "./NumReviewCard";
import {
  RecentR1Icon,
  RecentR2Icon,
  RecentR3Icon,
  RecentR4Icon,
} from "@/icons/review-dashboard/icons";

import { GoogleIcon } from "@/icons/marketing/icons";
import { StarRating } from "@/pages/demo";

/**
 * Interface for the NumReviewItem which represents an item in the review list.
 *
 * @interface NumReviewItem
 * @property {number} id - Unique identifier for the review item.
 * @property {string} number - Number of reviews.
 * @property {React.ReactElement} svgRating - Star rating component.
 * @property {React.ReactElement} logoSvg - Logo SVG component.
 */
interface NumReviewItem {
  id: number;
  number: string;
  svgRating: React.ReactElement;
  logoSvg: React.ReactElement;
}

/**
 * Array of review items to be displayed.
 * Each item contains an id, number of reviews, star rating, and a logo SVG.
 */
const NumReviewArray: NumReviewItem[] = [
  {
    id: 1,
    number: "00",
    svgRating: <StarRating rating={2.5} />,
    logoSvg: <GoogleIcon />,
  },
  {
    id: 2,
    number: "00",
    svgRating: <StarRating rating={1} />,
    logoSvg: <RecentR1Icon />,
  },
  {
    id: 3,
    number: "00",
    svgRating: <StarRating rating={3} />,
    logoSvg: <RecentR2Icon />,
  },
  {
    id: 4,
    number: "00",
    svgRating: <StarRating rating={0} />,
    logoSvg: <RecentR3Icon />,
  },
  {
    id: 5,
    number: "00",
    svgRating: <StarRating rating={5} />,
    logoSvg: <RecentR4Icon />,
  },
  {
    id: 6,
    number: "00",
    svgRating: <StarRating rating={5} />,
    logoSvg: <GoogleIcon />,
  },
  {
    id: 7,
    number: "00",
    svgRating: <StarRating rating={1.5} />,
    logoSvg: <RecentR1Icon />,
  },
  {
    id: 8,
    number: "00",
    svgRating: <StarRating rating={5} />,
    logoSvg: <RecentR2Icon />,
  },
  {
    id: 9,
    number: "00",
    svgRating: <StarRating rating={0} />,
    logoSvg: <RecentR3Icon />,
  },
  {
    id: 10,
    number: "00",
    svgRating: <StarRating rating={4.5} />,
    logoSvg: <RecentR4Icon />,
  },
];

/**
 * NumReview component to display a grid of review items.
 * Each item is rendered using the NumReviewCard component.
 *
 * @returns {JSX.Element} The rendered NumReview component.
 */
const NumReview = (): JSX.Element => {
  // Memoize the props to avoid unnecessary re-renders
  const memoizedNumReviewArray = useMemo(() => NumReviewArray, []);

  return (
    <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6">
      {memoizedNumReviewArray.map(
        (item: NumReviewItem, index: number): JSX.Element => (
          <div key={index} className="flex m-2">
            <NumReviewCard key={index} {...item} />
          </div>
        )
      )}
    </div>
  );
};

export default NumReview;
