import React, { useMemo } from "react";
import { RecentReviewCard } from "./RecentReviewCard";
import { StarRating } from "@/pages/demo";
import { RecentRev1Icon } from "@/icons/review-dashboard/icons";
import { RecentGoogleIcon, RecentRevIcon } from "@/icons/marketing/icons";

/**
 * Interface for the RecentReviewItem which represents an item in the recent reviews list.
 *
 * @interface RecentReviewItem
 * @property {number} id - Unique identifier for the review item.
 * @property {React.ReactElement} logo - Logo SVG component.
 * @property {string} title - Title or name of the reviewer.
 * @property {string} des - Description or review content.
 * @property {React.ReactElement} svgRating - Star rating component.
 */
interface RecentReviewItem {
  id: number;
  logo: React.ReactElement;
  title: string;
  des: string;
  svgRating: React.ReactElement;
}

/**
 * Array of recent review items to be displayed.
 * Each item contains an id, logo, title, description, and a star rating.
 */
const RecentArray: RecentReviewItem[] = [
  {
    id: 1,
    logo: <RecentGoogleIcon />,
    title: "Name Surname",
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla",
    svgRating: <StarRating rating={2} />,
  },
  {
    id: 2,
    logo: <RecentRevIcon />,
    title: "Name Surname",
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla",
    svgRating: <StarRating rating={3} />,
  },
  {
    id: 3,
    logo: <RecentRev1Icon />,
    title: "Name Surname",
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla",
    svgRating: <StarRating rating={5} />,
  },
];

/**
 * RecentReview component to display a list of recent review items.
 * Each item is rendered using the RecentReviewCard component.
 *
 * @returns {JSX.Element} The rendered RecentReview component.
 */
const RecentReview = (): JSX.Element => {
  // Memoizing the RecentArray to prevent unnecessary re-renders
  const memoizedRecentArray = useMemo(() => RecentArray, []);

  return (
    <div className="flex flex-col w-full gap-6">
      {memoizedRecentArray.map((item, index) => (
        <div key={index}>
          <RecentReviewCard key={index} {...item} />
        </div>
      ))}
    </div>
  );
};

export default RecentReview;
