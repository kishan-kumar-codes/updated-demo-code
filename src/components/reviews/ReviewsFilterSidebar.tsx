"use client";
import {
  DropDownSvg,
  LineSvg,
  LocationFilledSvg,
  SearchSvg,
} from "@/svgs/reviews/svgs";
import React, { useState } from "react";
import RadioButton from "./RadioButton";
import Ratings from "./Ratings";

/**
 * Common typography styles.
 */
export const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontSize: "36.559px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * Specific styles for the filter text.
 */
export const FilterTextStyle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

/**
 * Specific styles for the rating text.
 */
export const RatingTextStyle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: "18.208px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

/**
 * ReviewsFilterSidebar component renders the sidebar with various filter options.
 * 
 * @returns {JSX.Element} The rendered sidebar component.
 */
const ReviewsFilterSidebar: React.FC = (): JSX.Element => {
  const [selectDateRange, setSelectDateRange] = useState("option1");
  const [selectRange, setSelectRange] = useState("option1");

  /**
   * Handles the change event for the date range dropdown.
   * 
   * @param {React.ChangeEvent<HTMLSelectElement>} event - The change event object.
   */
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectDateRange(event.target.value);
  };

  /**
   * Handles the change event for the rating dropdown.
   * 
   * @param {React.ChangeEvent<HTMLSelectElement>} event - The change event object.
   */
  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectRange(event.target.value);
  };

  const options = [
    { value: "option1", label: "23-02-2022" },
    { value: "option2", label: "24-02-2022" },
    { value: "option3", label: "25-02-2022" },
  ];

  const ratings = [
    { value: "option1", label: "1 Star" },
    { value: "option2", label: "2 Star" },
    { value: "option3", label: "3 Star" },
  ];

  return (
    <div className="flex [font-family:'Glacial_Indifference-Bold',Helvetica] w-[400px] rounded-3xl min-h-[718px] bg-[#E0E0E0]">
      <div className="flex flex-col p-5 gap-5 w-full">
        <span style={FilterTextStyle}>Filters</span>
        <LineSvg />
        <div className="flex border h-12 rounded-full border-[#8C8C8C] relative">
          <div className="absolute inset-y-0 left-0 flex justify-center items-center py-2 px-4">
            <SearchSvg />
          </div>
          <input
            type="text"
            placeholder="Search Keyword"
            className="w-full h-full flex justify-center focus:outline-none bg-transparent border-transparent items-center rounded-full px-2 text-center"
          />
        </div>
        <LineSvg />
        <span className="py-2" style={FilterTextStyle}>
          Location
        </span>
        <div className="flex border h-12 rounded-lg border-[#8C8C8C] relative">
          <input
            type="text"
            placeholder="Search Location"
            className="w-full h-full flex justify-center focus:outline-none bg-transparent border-transparent items-center rounded-full px-2 text-center"
          />
          <div className="absolute inset-y-0 right-0 flex justify-center items-center py-2 px-4">
            <LocationFilledSvg />
          </div>
        </div>
        <span className="py-2" style={FilterTextStyle}>
          Date Range
        </span>
        <Ratings
          options={options}
          value={selectDateRange}
          onChange={handleOptionChange}
        />
        <LineSvg />
        <span style={FilterTextStyle}>Ratings</span>
        <div className="flex py-2 gap-2 justify-center items-center">
          <div className="flex flex-col gap-1">
            <span className="py-2" style={RatingTextStyle}>
              Min. Ratings
            </span>
            <Ratings
              options={ratings}
              value={selectRange}
              onChange={handleRatingChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="py-2" style={RatingTextStyle}>
              Max. Ratings
            </span>
            <Ratings
              options={ratings}
              value={selectRange}
              onChange={handleRatingChange}
            />
          </div>
        </div>
        <LineSvg />
        <span className="py-2" style={FilterTextStyle}>
          Review Site
        </span>
        <RadioButton fontWeight={500} label="All Sites" id="All-Sites-1" />
        <RadioButton fontWeight={500} label="Google" id="Google" />
        <RadioButton fontWeight={500} label="Foursquare" id="Foursquare" />
        <RadioButton fontWeight={500} label="Yelp" id="Yelp" />
      </div>
    </div>
  );
};

export default ReviewsFilterSidebar;
