import React from "react";
import NumCard from "./NumCard";
import {
  DashBoardBlueSvgs,
  DashBoardGoogleSvgs,
  DashBoardGreenSvgs,
  DashBoardOrangeSvgs,
  DashBoardPinkSvgs,
  DashBoardRedSvgs,
} from "@/svgs/review-dashboard-mobile/svgs";
import {
  RecentR1Icon,
  RecentR2Icon,
  RecentR3Icon,
  RecentR4Icon,
} from "@/icons/review-dashboard/icons";
import { GoogleIcon } from "@/icons/marketing/icons";
import { StarRating } from "@/pages/demo";
import { GoogleReviewSvg } from "@/svgs/review-dashboard/svgs";
import { StarRatingComponents, StarRatingMobile } from "@/utils/helper";
import Review1 from "@/assets/images/hubspark/review1.png";
import Review2 from "@/assets/images/hubspark/review2.png";
import Review3 from "@/assets/images/hubspark/review3.png";
import Review4 from "@/assets/images/hubspark/review4.png";
import Review5 from "@/assets/images/hubspark/review5.png";
import Review6 from "@/assets/images/hubspark/review6.png";
import {
  R2IconF21Mobile,
  R2IconFbMobile,
  R2IconG2Mobile,
  R2IconGoogleMobile,
  R2IconRedMobile,
  R2IconTripMobile,
} from "@/icons/reviewRequest-desktop/icons";

const NumOfReview = [
  {
    title: "44",
    mainSvg: <R2IconGoogleMobile />,
    desktopSvg: Review1,
    starComponent: <StarRatingMobile rating={5} />,
    cornerSvg: <DashBoardGoogleSvgs />,
  },
  {
    title: "32",
    mainSvg: <R2IconRedMobile />,
    desktopSvg: Review2,
    starComponent: <StarRatingMobile rating={4} />,
    cornerSvg: <DashBoardRedSvgs />,
  },
  {
    title: "20",
    mainSvg: <R2IconFbMobile />,
    desktopSvg: Review3,
    starComponent: <StarRatingMobile rating={4.5} />,
    cornerSvg: <DashBoardBlueSvgs />,
  },
  {
    title: "04",
    mainSvg: <R2IconTripMobile />,
    desktopSvg: Review4,
    starComponent: <StarRatingMobile rating={3.5} />,
    cornerSvg: <DashBoardGreenSvgs />,
  },
  {
    title: "44",
    mainSvg: <R2IconG2Mobile />,
    desktopSvg: Review5,
    starComponent: <StarRatingMobile rating={4.5} />,
    cornerSvg: <DashBoardOrangeSvgs />,
  },
  {
    title: "40",
    mainSvg: <R2IconF21Mobile />,
    desktopSvg: Review6,
    starComponent: <StarRatingMobile rating={4.5} />,
    cornerSvg: <DashBoardPinkSvgs />,
  },
];

const typography: React.CSSProperties = {
  color: "#F4F4F4",
  fontFamily: "Arial",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const NumberOfReview = () => {
  return (
    <div className="flex flex-col w-full py-4">
      <div className="w-full grid grid-cols-2 md:grid-cols-3  justify-center items-center gap-4 md:gap-12 lg:gap-16 px-2 md:px-[8%] lg:px-[16%]">
        {NumOfReview.map((item, index) => (
          <NumCard
            key={index}
            title={item.title}
            mainSvg={item.mainSvg}
            desktopSvg={item.desktopSvg}
            starComponent={item.starComponent}
            cornerSvg={item.cornerSvg}
          />
        ))}
      </div>
      <div className="flex justify-end mt-7 md:mt-4 w-full items-end">
        <button
          className="bg-[#631363] rounded-3xl md:rounded-xl py-3  px-4"
          style={typography}>
          Request Reviews
        </button>
      </div>
    </div>
  );
};

export default NumberOfReview;
