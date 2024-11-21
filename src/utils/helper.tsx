import {
  EmptyStarMobile,
  FullStarMobile,
  HalfStarMobile,
} from "@/svgs/review-dashboard-mobile/svgs";
import { EmptyStarRatings, FullStarRatings } from "@/svgs/settings/svgs";

interface StarRating {
  rating: number;
  width?: string;
  height?: string;
}
export const StarRatingComponents: React.FC<StarRating> = ({
  rating,
  width,
}) => {
  const starElements = [];

  // Loop to create star elements based on the rating
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      // Full stars
      starElements.push(<FullStarRatings key={i} />);
    } else {
      // Empty stars
      starElements.push(<EmptyStarRatings key={i} />);
    }
  }

  return (
    <div className="star-rating flex" style={{ width }}>
      {starElements}
    </div>
  );
};

export const StarRatingMobile: React.FC<StarRating> = ({ rating }) => {
  const starElements = [];

  // Loop to create star elements based on the rating
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      // Full stars
      starElements.push(<FullStarMobile key={i} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      // Half star for decimals
      starElements.push(<HalfStarMobile key={i} />);
    } else {
      // Empty stars
      starElements.push(<EmptyStarMobile key={i} />);
    }
  }

  return (
    <div className="star-rating flex w-full flex-shrink md:w-fit">
      {starElements}
    </div>
  );
};
export const MeetiIcon = [
  {
    id: 1,
    name: "Google",
    logoImg: "/meet.png",
  },
  {
    id: 2,
    name: "Zoom",
    logoImg: "/zoom.png",
  },
];

export const Color = [
  {
    id: 1,
    color: "#0f9131",
  },
  {
    id: 2,
    color: "#0fc9d6",
  },
  {
    id: 3,
    color: "#e3d622",
  },
  {
    id: 4,
    color: "#e3225c",
  },
];
