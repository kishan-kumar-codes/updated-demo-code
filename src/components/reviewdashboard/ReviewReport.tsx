import React from "react";
import { ReviewReportCard } from "./ReviewReportCard";
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
  svg: React.ReactElement;
  desktopsvg: React.ReactElement | undefined;
}

/**
 * Array of review report data to be displayed.
 * Each item contains an id, number, title, description, and an SVG icon.
 */
const ReviewReportData: ReviewItem[] = [
  {
    id: 1,
    number: 0,
    title: "Location Performance",
    des: "A breakdown of your overall Location performance for a given month.",
    svg: <LineChart />,
    desktopsvg: undefined,
  },
  {
    id: 2,
    number: 0,
    title: "Location Activity",
    des: "A breakdown of your overall Location performance for a given month.",
    svg: <LocationSvg />,
    desktopsvg: undefined,
  },
  {
    id: 3,
    number: 0,
    title: "Team Review Requests",
    des: "An interactive team view of Review Requests. Drill-in on any column.",
    svg: <TeamSvg />,
    desktopsvg: undefined,
  },
  {
    id: 4,
    number: 0,
    title: "Review Request List",
    des: "A list of all review requests for a given time period.",
    svg: <ReviewListSvg />,
    desktopsvg: undefined,
  },
  {
    id: 5,
    number: 0,
    title: "Customers",
    des: "List of all the customers that your business has sent review requests to.",
    svg: <CustomerSvg />,
    desktopsvg: undefined,
  },
  {
    id: 6,
    number: 0,
    title: "Completed Reviews List",
    des: "A list of all completed reviews for a given time period.",
    svg: <CompleteReviewListSvg />,
    desktopsvg: undefined,
  },
  {
    id: 7,
    number: 0,
    title: "Leaderboard",
    des: "See how the team stacks up. Request/Completed counts and Average/Total ratings.",
    svg: <LeaderBoardSvg />,
    desktopsvg: undefined,
  },
  {
    id: 8,
    number: 0,
    title: "Google Reviews",
    des: "A list of your Google My Business reviews for a given period.",
    svg: <GoogleReviewSvg />,
    desktopsvg: undefined,
  },
  {
    id: 9,
    number: 0,
    title: "Team Check-Ins",
    des: "An interactive team view of check-ins. Click on any user to see details.",
    svg: <TeamCheckInSvg />,
    desktopsvg: undefined,
  },
  {
    id: 10,
    number: 0,
    title: "Review Ratings",
    des: "A list of all completed reviews for a given time period that includes the answers to sub-questions.",
    svg: <ReviewRatingSvg />,
    desktopsvg: undefined,
  },
  {
    id: 11,
    number: 0,
    title: "City Activity",
    des: "The City Activity report is a good way to keep track of the various cities you’ve serviced.",
    svg: <CityActivitySvg />,
    desktopsvg: undefined,
  },
  {
    id: 12,
    number: 0,
    title: "Check-Ins List",
    des: "A list of all check-ins for a given time period.",
    svg: <CheckInListSvg />,
    desktopsvg: undefined,
  },
  {
    id: 13,
    number: 0,
    title: "Page Views",
    des: "See organic and crawler activity on your integrated pages.",
    svg: <PageViewSvg />,
    desktopsvg: undefined,
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:lg:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
      {ReviewReportData.map((item, index) => (
        <div key={index} className="flex m-2">
          <ReviewReportCard key={index} {...item} />
        </div>
      ))}
    </div>
  );
};

export default ReviewReport;
