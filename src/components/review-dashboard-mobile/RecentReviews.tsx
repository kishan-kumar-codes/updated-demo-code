import React, { useMemo } from "react";
import RecentReview from "../reviewdashboard/RecentReview";
import {
  R2IconFbMobile,
  R2IconGoogleMobile,
  R2IconRedMobile,
} from "@/icons/reviewRequest-desktop/icons";
import { StarRatingMobile } from "@/utils/helper";
import { RecentReviewCard } from "../reviewdashboard/RecentReviewCard";
import { RecentGoogleIcon, RecentRevIcon } from "@/icons/marketing/icons";
import { RecentRev1Icon } from "@/icons/review-dashboard/icons";
import { ReviewCard } from "./ReviewCard";
import Review1 from "@/assets/images/hubspark/review1.png";
import Review2 from "@/assets/images/hubspark/review2.png";
import Review3 from "@/assets/images/hubspark/review3.png";
import { StaticImageData } from "next/image";
interface RecentReviewItem {
  id: number;
  logo: React.ReactElement;
  title: string;
  des: string;
  recent: boolean;
  respond: boolean;
  img: StaticImageData;
  svgRating: React.ReactElement;
}
const typography: React.CSSProperties = {
  color: "#F4F4F4",
  fontFamily: "Arial",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};
/**
 * Array of recent review items to be displayed.
 * Each item contains an id, logo, title, description, and a star rating.
 */
export const RecentArray: RecentReviewItem[] = [
  {
    id: 1,
    logo: <RecentGoogleIcon />,
    img: Review1,
    title: "Cindy Brennan",
    respond: true,
    recent: false,
    des: "From the moment I called, their customer service was outstanding–friendly, responsive, and efficient.",
    svgRating: <StarRatingMobile rating={5} />,
  },

  {
    id: 2,
    logo: <RecentRevIcon />,
    img: Review2,
    title: "Maddie Connor",
    respond: false,
    recent: false,
    des: "They exceeded my expectations in every way, and I am grateful for their dedication to excellence.  ",
    svgRating: <StarRatingMobile rating={5} />,
  },
  {
    id: 3,
    logo: <RecentRev1Icon />,
    img: Review3,
    title: "James Clarke",
    respond: true,
    recent: false,
    des: "I would recommend it for those seeking a unique atmosphere and culinary flair but with a caveat about the service and pricing.",
    svgRating: <StarRatingMobile rating={3} />,
  },
];
const RecentReviews = () => {
  const memoizedRecentArray = useMemo(() => RecentArray, []);

  return (
    <div className="py-6">
      <div className="flex flex-col w-full gap-6 md:px-8 px-0 pt-4">
        {memoizedRecentArray.map((item, index) => (
          <div key={index}>
            <ReviewCard key={index} {...item} />
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-7 md:mt-4 md:px-8  px-0 w-full items-end">
        <button
          className="bg-[#631363] rounded-3xl md:rounded-xl py-3  px-4"
          style={typography}>
          Request Reviews
        </button>
      </div>
    </div>
  );
};

export default RecentReviews;
