import React from "react";

import {
  LineChart,
  LocationSvg,
  TeamSvg,
  ReviewListSvg,
  CustomerSvg,
  CompleteReviewListSvg,
  LeaderBoardSvg,
  GoogleReviewSvg,
  TeamCheckInSvg,
  ReviewRatingSvg,
  CityActivitySvg,
  CheckInListSvg,
  PageViewSvg,
} from "@/svgs/review-dashboard/svgs";
import { ReviewReportCard } from "../reviewdashboard/ReviewReportCard";
import {
  ReviewActivitySvgs,
  ReviewCompletedSvgs,
  ReviewLeaderBoardSvgs,
  ReviewPerformanceSvgs,
  ReviewReviewListSvgs,
  ReviewSvgs,
  ReviewTeamSvgs,
} from "@/svgs/review-dashboard-mobile/svgs";

/**
 * Interface for ReviewItem which represents a report item in the review dashboard.
 *
 * @interface ReviewItem
 * @property {number} id - Unique identifier for the review item.
 * @property {number} number - Numeric data related to the review item.
 * @property {string} title - Title of the review item.
 * @property {string} des - Description of the review item.
 * @property {React.ReactElement} svg - SVG icon associated with the review item.
 */
interface ReviewItem {
  id: number;
  number: number;
  title: string;
  des: string;
  href?: string;
  svg: React.ReactElement;
  desktopsvg: React.ReactElement;
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
 * Array of review report data to be displayed.
 * Each item contains an id, number, title, description, and an SVG icon.
 */
const ReviewReportData: ReviewItem[] = [
  {
    id: 1,
    number: 37,
    href: "/review-dashboard/Location-Performance-Report",
    title: "Location Performance",
    des: "A breakdown of your overall Location performance for a given month.",
    svg: <ReviewPerformanceSvgs />,
    desktopsvg: <LineChart />,
  },
  {
    id: 2,
    number: 161,
    title: "Location Activity",
    href: "/review-dashboard/Location-Activity-Report",
    des: "A breakdown of your overall Location performance for a given month.",
    svg: <ReviewActivitySvgs />,
    desktopsvg: <LocationSvg />,
  },
  {
    id: 3,
    number: 140,
    title: "Review Request List",
    href: "/review-dashboard/Review-Request-Report",
    des: "An interactive team view of Review Requests. Drill-in on any column.",
    svg: <ReviewReviewListSvgs />,
    desktopsvg: <ReviewListSvg />,
  },
  {
    id: 4,
    number: 132,
    title: "Completed Reviews List",
    href: "/review-dashboard/Completed-Review-List-Report",
    des: "A list of all review requests for a given time period.",
    svg: <ReviewCompletedSvgs />,
    desktopsvg: <CompleteReviewListSvg />,
  },
  {
    id: 5,
    number: 166,
    title: "Leaderboard",
    href: "/review-dashboard/Leaderboard-Report",
    des: "List of all the customers that your business has sent review requests to.",
    svg: <ReviewLeaderBoardSvgs />,
    desktopsvg: <LeaderBoardSvg />,
  },
  {
    id: 6,
    number: 524,
    title: "Team Review Request",
    href: "/review-dashboard/Team-Review-Request",
    des: "A list of all completed reviews for a given time period.",
    svg: <ReviewTeamSvgs />,
    desktopsvg: <TeamSvg />,
  },
  {
    id: 7,
    number: 859,
    title: "Reviews",
    href: "/review-dashboard/Reviews",
    des: "A list of all completed reviews for a given time period.",
    svg: <ReviewSvgs />,
    desktopsvg: <ReviewRatingSvg />,
  },
];

/**
 * ReviewReport component to display a grid of review report cards.
 * Each card is rendered using the ReviewReportCard component.
 *
 * @returns {JSX.Element} The rendered ReviewReport component.
 */
const ReviewReport = (): JSX.Element => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3 md:gap-8 gap-2 w-full px-0 md:px-[8%] lg:px-[10%]">
        {ReviewReportData.map((item, index) => (
          <div
            key={index}
            className="flex m-1 items-center justify-center w-full gap-2">
            <ReviewReportCard key={index} {...item} />
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-7 md:mt-2 md:px-8  px-0 w-full items-end">
        <button
          className="bg-[#631363] rounded-3xl md:rounded-xl py-3  px-4"
          style={typography}>
          Request Reviews
        </button>
      </div>
    </>
  );
};

export default ReviewReport;
