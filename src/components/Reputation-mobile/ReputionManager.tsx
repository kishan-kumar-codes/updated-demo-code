"use client";
import CountryListDropdown from "./CountryDisplayName";
import CustomDatePicker from "./CustomDatePicker";
import Header from "./Header";
import React, { useCallback, useState } from "react";
import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SquareCheckBoxButton from "../citations-builder/SquareCheckBox";
import { ChevronDown, ChevronUp } from "lucide-react";
import Review1 from "@/assets/images/hubspark/review1.png";

// import { RecentArray } from "../review-dashboard-mobile/RecentReviews";
import { ReviewCard } from "../review-dashboard-mobile/ReviewCard";
import ShowcaseReviews from "./ShowCaseReputation";
import { DatePickerWithRange } from "../CustomComponents/MiniDatePickerRange";
import { useRouter } from "next/navigation";
import ShowcaseReview from "./ShowCaseReputation";

import {
  RepuSearchSvgs,
  ReputationSearchSvgs,
  ReputationSearchSvgsMain,
} from "@/svgs/review-dashboard-mobile/svgs";
import { StaticImageData } from "next/image";
import { StarRatingMobile } from "@/utils/helper";
import { RecentGoogleIcon, RecentRevIcon } from "@/icons/marketing/icons";
import { RecentRev1Icon } from "@/icons/review-dashboard/icons";
import Review2 from "@/assets/images/hubspark/review2.png";
import Review3 from "@/assets/images/hubspark/review3.png";
import LocationDropdown from "./CountryDisplayName";
import { Button } from "../ui/button";
import { Filter } from "lucide-react";

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

export const RecentArray: RecentReviewItem[] = [
  {
    id: 1,
    logo: <RecentGoogleIcon />,
    img: Review1,
    title: "Cindy Brennan",
    respond: true,
    recent: true,
    des: "From the moment I called, their customer service was outstanding–friendly, responsive, and efficient.",
    svgRating: <StarRatingMobile rating={5} />,
  },

  {
    id: 2,
    logo: <RecentRevIcon />,
    img: Review2,
    title: "Maddie Connor",
    respond: false,
    recent: true,
    des: "They exceeded my expectations in every way, and I am grateful for their dedication to excellence.  ",
    svgRating: <StarRatingMobile rating={5} />,
  },
  {
    id: 3,
    logo: <RecentRev1Icon />,
    img: Review3,
    title: "James Clarke",
    respond: true,
    recent: true,
    des: "I would recommend it for those seeking a unique atmosphere and culinary flair but with a caveat about the service and pricing.",
    svgRating: <StarRatingMobile rating={3} />,
  },
  {
    id: 4,
    logo: <RecentGoogleIcon />,
    img: Review1,
    title: "Cindy Brennan",
    respond: true,
    recent: true,
    des: "From the moment I called, their customer service was outstanding–friendly, responsive, and efficient.",
    svgRating: <StarRatingMobile rating={5} />,
  },

  {
    id: 5,
    logo: <RecentRevIcon />,
    img: Review2,
    title: "Maddie Connor",
    respond: false,
    recent: true,
    des: "They exceeded my expectations in every way, and I am grateful for their dedication to excellence.  ",
    svgRating: <StarRatingMobile rating={5} />,
  },
  {
    id: 6,
    logo: <RecentRev1Icon />,
    img: Review3,
    title: "James Clarke",
    respond: true,
    recent: true,
    des: "I would recommend it for those seeking a unique atmosphere and culinary flair but with a caveat about the service and pricing.",
    svgRating: <StarRatingMobile rating={3} />,
  },
];

// Centralized Styles
export const styles = {
  typography: {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  checkIn: {
    color: "#6D6D6D",
    fontSize: "22px",
  },
  button: {
    default:
      "flex z-50 gap-2 cursor-pointer h-full justify-center items-center focus:outline-none rounded-lg appearance-none",
    clear: "border border-[#5F1762] py-2 px-3 w-full",
    saveAs: "bg-[#631363] py-2 px-4 w-full",
    filters: "bg-[#E0E0E0] px-3 w-full",
  },
  input: {
    default:
      "flex w-full h-9 appearance-none pl-10 rounded-2xl focus:outline-none",
    searchBar: "bg-[#E0E0E0]",
    filter: "bg-[#f4f4f4]",
  },
};

const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

interface SearchBarProps {
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FilterModalProps {
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

// SearchBar Component
const SearchBar: React.FC<SearchBarProps> = React.memo(({ setShowFilters }) => {
  const handleClick = useCallback(
    () => setShowFilters((prev) => !prev),
    [setShowFilters]
  );

  return (
    <div className="flex gap-3 z-20 items-center w-[90%] my-4">
      <div className="flex z-10 items-center justify-center relative w-[80%]">
        <input
          className="flex w-full h-9 appearance-none pl-10 rounded-2xl focus:outline-none bg-[#FFFFFF] border "
          placeholder="Search Messages"
        />
        <div className="absolute inset-y-0 justify-center items-center left-2 flex p-2">
          <RepuSearchSvgs />
        </div>
      </div>

      <button
        className="flex z-50 gap-2 cursor-pointer h-9 justify-center items-center bg-[#631363] border w-2/6 focus:outline-none rounded-lg px-3 appearance-none"
        onClick={handleClick}>
        <ReputationSearchSvgsMain />
        <span
          className="text-center text-[15px] w-10"
          style={{ ...Typography, fontSize: "13px", color: "#FFFFFF" }}>
          Filters
        </span>
      </button>
    </div>
  );
});
SearchBar.displayName = "SearchBar";

// FilterModal Component
const FilterModal: React.FC<FilterModalProps> = React.memo(
  ({ showFilters, setShowFilters }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [rating, setRating] = useState(false);
    const [source, setSource] = useState(false);
    const [location, setLocation] = useState(false);

    const handleToggleLocation = useCallback(
      () => setLocation((prev) => !prev),
      []
    );
    const handleToggleRating = useCallback(
      () => setRating((prev) => !prev),
      []
    );
    const handleToggleSource = useCallback(
      () => setSource((prev) => !prev),
      []
    );
    const handleToggleFilters = useCallback(
      () => setShowFilters((prev) => !prev),
      [setShowFilters]
    );
    const handleToggleDatePicker = useCallback(
      () => setShowDatePicker((prev) => !prev),
      []
    );

    if (!showFilters) return null;

    return (
      <div className="border-[#5F1762] w-full  p-4 rounded-2xl bg-[#F4F4F4]">
        <div className="flex gap-2 flex-wrap items-center w-full">
          <Button
            variant="outline"
            className="border-[#5F1762] text-[14px] font-bold md:text-xl lg:text-2xl text-[#6D6D6D]"
            onClick={handleToggleFilters}>
            Clear
          </Button>
          <Button
            className="border-[#631363] text-[14px] font-bold md:text-xl lg:text-2xl bg-[#631363] text-white"
            onClick={handleToggleFilters}>
            Save As
          </Button>
          <Button
            className="border-[#5F1762] bg-[#E0E0E0] text-[#6D6D6D]"
            onClick={handleToggleFilters}>
            <Filter size={16} color="#631363" fill="#631363" />
            <span
              className="text-center font-bold pl-1 text-[14px] md:text-xl lg:text-2xl"
              style={{ color: "#6D6D6D" }}>
              Filters
            </span>
          </Button>
        </div>
        <div className="mt-4">
          {/* <div className="flex z-10 items-center justify-center relative w-full">
            <input
              className="flex w-full h-9 md:h-12 text-xs md:text-xl text appearance-none pl-10 rounded-2xl focus:outline-none bg-[#ffffff]"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 justify-center items-center left-2 flex p-2">
              <RepuSearchSvgs />
            </div>
          </div>
          <hr className="my-4 border-[#631363] bg-[#631363]" />
          <div className="flex w-full">
            <LocationDropdown />
          </div> */}
          <FilterSection
            title="Location"
            showSection={location}
            toggleSection={handleToggleLocation}
            component={
              <div className="flex flex-col justify-center my-2 gap-1 md:gap-2 px-4 w-full">
                <div className="flex  z-10 items-center justify-center relative w-[100%]">
                  <input
                    className={`${styles.input.default} py-4 md:py-6 ${styles.input.filter}`}
                    placeholder="Search"
                  />
                  <div className="absolute inset-y-0 justify-center items-center left-2 flex p-2">
                    <RepuSearchSvgs />
                  </div>
                </div>
                <SquareCheckBoxButton label="SelectAll" id="SelectAll" />
                <SquareCheckBoxButton label="Customer Location 1" id="1" />
                <SquareCheckBoxButton label="Customer Location 2" id="2" />
                <SquareCheckBoxButton label="Customer Location 3" id="3" />
                <SquareCheckBoxButton label="Customer Location 4" id="4" />
                <SquareCheckBoxButton label="Customer Location 5" id="5" />
                <div className="flex p-2 justify-end gap-2">
                  <Button className="w-fit py-0 h-7 md:h-10 md:text-lg lg:text-2xltext-xs px-4 rounded-lg bg-[#40F440] font-semibold text-black mt-3">
                    Apply
                  </Button>
                </div>
              </div>
            }
          />

          <FilterSection
            title="Date Range"
            showSection={showDatePicker}
            toggleSection={handleToggleDatePicker}
            component={<DatePickerWithRange showDate={showDatePicker} />}
          />

          <FilterSection
            title="Ratings"
            showSection={rating}
            toggleSection={handleToggleRating}
            component={
              <div className="flex flex-col my-2 gap-2 px-4 w-full">
                <SquareCheckBoxButton label="All" id="All" />
                <SquareCheckBoxButton label="9-10" id="9-10" />
                <SquareCheckBoxButton label="7-8" id="7-8" />
                <SquareCheckBoxButton label="0-6" id="0-6" />
                <SquareCheckBoxButton label="Unknown" id="Unknown" />
                <div className="flex p-2 justify-end gap-2">
                  <Button className="w-fit py-0 h-7 md:h-10 md:text-lg lg:text-2xltext-xs px-4 rounded-lg bg-[#40F440] font-semibold text-black mt-3">
                    Apply
                  </Button>
                </div>
              </div>
            }
          />

          <FilterSection
            title="Sources"
            showSection={source}
            toggleSection={handleToggleSource}
            component={
              <div className="flex flex-col justify-center my-2 gap-2 px-4 w-full">
                <div className="flex  z-10 items-center justify-center relative w-[100%]">
                  <input
                    className={`${styles.input.default} py-4 md:py-6 ${styles.input.filter}`}
                    placeholder="Search"
                  />
                  <div className="absolute inset-y-0 justify-center items-center left-2 flex p-2">
                    <RepuSearchSvgs />
                  </div>
                </div>
                <SquareCheckBoxButton label="Google" id="Google" />
                <SquareCheckBoxButton label="Yelp" id="Yelp" />
                <SquareCheckBoxButton label="Foursquare" id="Foursquare" />
                <SquareCheckBoxButton label="Facebook" id="Facebook" />
                <SquareCheckBoxButton label="Yellowpages" id="Yellowpages" />
                <div className="flex p-2 justify-end gap-2">
                  <Button className="w-fit py-0 h-7 md:h-10 md:text-lg lg:text-2xltext-xs px-4 rounded-lg bg-[#40F440] font-semibold text-black mt-3">
                    Apply
                  </Button>
                </div>
              </div>
            }
          />
        </div>
      </div>
    );
  }
);
FilterModal.displayName = "FilterModal";

// Reusable FilterSection Component
interface FilterSectionProps {
  title: string;
  showSection: boolean;
  toggleSection: () => void;
  component: React.ReactNode;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  showSection,
  toggleSection,
  component,
}) => (
  <div
    className={`mt-4 bg-[#fff] ${showSection ? "border-2" : "border-none"}  rounded-2xl `}>
    <div
      className={`flex justify-between w-full px-3 items-center bg-[#ffffff] rounded-2xl`}>
      <button
        onClick={toggleSection}
        className={`flex items-center font-bold text-xs md:text-lg lg:text-2xl justify-between -ml-3 w-full py-2.5 px-4 rounded-2xl text-[#6D6D6D] bg-[#ffffff] outline-none cursor-pointer`}>
        {title}
      </button>
      {showSection ? (
        <ChevronUp className="flex -ml-4" size={20} />
      ) : (
        <ChevronDown size={20} />
      )}
    </div>
    {showSection && component}
  </div>
);

// ReputionManger Component
const ReputionManger: React.FC = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(1);
  const router = useRouter();

  const handleShowcase = () => {
    router.push("/showcase-reviews");
  };

  return (
    <div className="flex justify-center items-center w-full h-full ">
      <div className="flex flex-col w-full items-center bg-[#F4F4F4] h-full overflow-y-auto">
        <CitationNavbar heading="Reputation" isHeaderVisible={false} />

        <div className="flex px-0 md:px-10 lg:hidden w-full justify-center">
          <SearchBar setShowFilters={setShowFilters} />
          <div
            className={`absolute right-3 max-w-lg md:right-16 top-[72px] md:top-[160px] md:border-3  ${showFilters && "border-[#5F1762] shadow-lg border-2"} bg-[#F4F4F4] rounded-lg  z-30  md:h-fit min-h-screen md:min-h-[70vh]`}>
            <FilterModal
              showFilters={showFilters}
              setShowFilters={setShowFilters}
            />
          </div>
        </div>
        <div className="w-full justify-between gap-0 md:gap-6 pt-0 md:pt-6 lg:justify-start flex px-6 md:px-[75px] lg:px-[6%] pb-4">
          <button
            onClick={() => setTab(1)}
            className={` ${tab === 1 ? "bg-[#40F440] lg:bg-[#F4F4F4] lg:text-[#631363]" : "bg-[#FFFFFF] md:bg-[#F4F4F4]"} text-[14px] md:text-2xl lg:text-[26px] w-full lg:w-fit rounded-l-3xl p-2`}>
            Reviews
          </button>
          <button
            onClick={handleShowcase}
            className={` ${tab === 2 ? "bg-[#40F440] md:bg-[#F4F4F4]" : "bg-[#FFFFFF] md:bg-[#F4F4F4]"} w-full lg:w-fit text-[14px] md:text-2xl lg:text-[26px] rounded-r-3xl p-2`}>
            Showcase Reviews
          </button>
        </div>
        <div className="flex z-20 w-full px-6 md:px-[75px] lg:px-[6%] max-h-[75vh] gap-6">
          <div className="w-full flex pb-4 flex-col lg:min-w-[60%] gap-2 overflow-y-auto scrollbar-hide md:gap-4 lg:gap-6">
            {RecentArray.map((item, index) => (
              <ReviewCard key={index} {...item} />
            ))}
          </div>
          <div
            className={` hidden lg:flex lg:min-w-[30%] justify-center w-fit md:border-3 border-[#5F1762] shadow-lg border-2 bg-[#F4F4F4] rounded-lg  z-30  md:h-fit min-h-screen md:min-h-[70vh]`}>
            <FilterModal
              showFilters={true}
              setShowFilters={() => setShowFilters(true)}
            />
          </div>
        </div>
        <div className="flex md:hidden w-full  mt-5 justify-center items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};
ReputionManger.displayName = "ReputionManger";

export default ReputionManger;
