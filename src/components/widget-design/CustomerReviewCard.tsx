"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { StarRatingMobile } from "@/utils/helper";
import { useSelector, useDispatch } from "react-redux";
import { setWidget } from "@/store/slices/widgetSlice";
import useWidgetSelectors from "@/hooks/useWidgetSelector";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

/**
 * CSS properties for Typography.
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
 * Interface for the RecentReviewCardProps.
 * Represents the properties for the RecentReviewCard component.
 *
 * @interface RecentReviewCardProps
 * @property {React.ReactElement} logo - Logo SVG component.
 * @property {string} title - Title or name of the reviewer.
 * @property {string} des - Description or review content.
 * @property {React.ReactElement} svgRating - Star rating component.
 */
interface RecentReviewCardProps {
  logo: React.ReactElement;
  title: string;
  des: string;
  rating: number;
  respond: boolean;
  img: StaticImageData;
  recent: boolean;
  index: number;
  svgRating: React.ReactElement;
}

export const convertDate = (dateStr: string, format: string) => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  if (format === "MMDDYYYY") {
    return `${month}.${day}.${year}`;
  } else if (format === "DDMMYYYY") {
    return `${day}.${month}.${year}`;
  } else {
    throw new Error('Invalid format specified. Use "MMDDYYYY" or "DDMMYYYY".');
  }
};

/**
 * RecentReviewCard component to display a recent review item.
 *
 * @param {RecentReviewCardProps} props - The properties for the RecentReviewCard component.
 * @returns {JSX.Element} The rendered RecentReviewCard component.
 */
export const CustomerReviewCard = ({
  logo,
  svgRating,
  title,
  rating,
  img,
  des,
  index,
}: RecentReviewCardProps): JSX.Element => {
  // Memoizing styles to prevent unnecessary recalculations
  const memoizedSvgRating = useMemo(() => svgRating, [svgRating]);
  const memoizedTitle = useMemo(() => title, [title]);
  const memoizedDes = useMemo(() => des, [des]);

  const dispatch = useDispatch();

  const {
    designPresetTab,
    shadowX,
    shadowY,
    shadowBlur,
    shadowSpread,
    displayLayout,
    shadowColor,
    customizeTextBgColor,
    customizTextAlignment,
    reviewBgColor,
    cornerRadius,
    showReviewerName,
    showReviewerSiteIcon,
    showBusinessDetails,
    showDateFormat,
    customizeSize,
    fontCharacter,
    customizeLinkColor,
    isExpanded,
    selectedFonts,
    setCustomizeShadow,
    noOfLayout,
    carouselWidget,
  } = useWidgetSelectors();

  // const { showCaseReview, selectReviews, widgetDesign, carouselWidget } =
  //   useWidgetSelectors();
  const dynamicStyles = {
    backgroundColor: reviewBgColor,
    borderRadius: `${cornerRadius}px`,
    boxShadow:
      noOfLayout === 2 || noOfLayout === 3 || carouselWidget
        ? "none"
        : `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px ${shadowColor}`,
  };

  const smallTextSize = Math.round(customizeSize) + 10;
  const mediumTextSize = Math.round(customizeSize) + 26;
  const smallTextSizeDesc = Math.round(customizeSize) + 7;
  const mediumTextSizeDesc = Math.round(customizeSize) + 20;

  const truncateString = (str: string, maxLength: number, index: number) => {
    const isExpandedCard = isExpanded[index] || false;

    const toggleExpand = () => {
      dispatch(
        setWidget({
          isExpanded: {
            ...isExpanded,
            [index]: !isExpandedCard,
          },
        })
      );
    };

    if (str.length > maxLength) {
      const truncated = str.substring(0, maxLength - 3) + "...";
      return (
        <span>
          {isExpandedCard ? str : truncated}
          <span
            className="underline inline-block pl-1"
            style={{ cursor: "pointer", color: customizeLinkColor }}
            onClick={toggleExpand}>
            {isExpandedCard ? " Read less" : " Read more"}
          </span>
        </span>
      );
    }
    return str;
  };

  return (
    <div className="w-full flex px-1">
      <div
        style={dynamicStyles}
        className={`px-[3%] ${designPresetTab === 1 && " border-2 border-[#E0E0E0]  "}  w-full h-full rounded-xl  ${designPresetTab === 2 ? "border-[#631363] border-2" : "border-none"}  py-1 `}>
        <div
          className={`flex w-full relative flex-row  ${customizTextAlignment === "end" ? "flex-row-reverse" : customizTextAlignment === "center" ? "flex-col" : "flex-row"} gap-2`}>
          {showReviewerSiteIcon && (
            <div
              className={`flex ${displayLayout === 1 ? "flex" : "hidden"}   gap-2 items-center py-1  ${customizTextAlignment === "end" ? "mt-3" : "mt-0"} justify-center ${customizTextAlignment === "center" ? "justify-center w-full md:py-0" : "md:justify-start w-fit md:py-2"} `}>
              <Image
                className="w-7 md:w-fit md:h-12 h-7"
                alt="Icons"
                src={img}
              />
            </div>
          )}

          <div
            className={`w-full ${customizTextAlignment === "center" ? "py-0" : "py-1 md:py-4"} items-${customizTextAlignment}  flex flex-col`}>
            <div
              className={`flex items-center ${customizTextAlignment === "center" ? "justify-center" : customizTextAlignment === "end" ? "justify-end" : "justify-start"} gap-2 w-full`}>
              <Image
                className={`w-7 ${displayLayout === 1 ? "hidden" : "flex"} md:w-fit h-7 md:h-12`}
                alt="Icons"
                src={img}
              />
              <div
                className={`w-20 md:w-28 ${noOfLayout === 2 || noOfLayout === 3 ? "pt-2" : "pt-0"} h-fit`}>
                {" "}
                <StarRatingMobile rating={5} />
              </div>
            </div>

            {showReviewerName && (
              <div
                style={{
                  color: customizeTextBgColor,
                  fontSize: `${smallTextSize}px`,
                  fontFamily: selectedFonts,
                }}
                className={`px-1 ${displayLayout === 3 ? "px-0.5" : displayLayout === 2 ? "px-2.5" : "px-0"} md:px-0 md:text-[26px] py-0.5 font-bold`}>
                <style jsx>{`
                  @media (min-width: 768px) {
                    div {
                      font-size: ${mediumTextSize}px;
                    }
                  }
                `}</style>{" "}
                {memoizedTitle}
              </div>
            )}
            {showBusinessDetails && (
              <div
                style={{
                  color: customizeTextBgColor,
                  fontSize: smallTextSizeDesc,
                  fontFamily: selectedFonts,
                }}
                className={` ${displayLayout === 3 ? "px-0.5" : displayLayout === 2 ? "px-2.5" : "px-0"}  px-1 md:px-0  md:text-[18px] ${!showReviewerName ? "pt-2" : "pt-0"} leading-4 md:leading-6 tracking-tighter font-normal  ${customizTextAlignment === "end" ? "text-end" : "text-start"} w-full`}>
                <style jsx>{`
                  @media (min-width: 768px) {
                    div {
                      font-size: ${mediumTextSizeDesc}px;
                    }
                  }
                `}</style>
                {truncateString(memoizedDes, fontCharacter, index)}
              </div>
            )}
          </div>
          {showDateFormat !== "hidden" && (
            <div
              style={{ color: customizeTextBgColor, fontFamily: selectedFonts }}
              className={`h-fit ${customizTextAlignment === "end" && showDateFormat !== "hidden" ? "left-0" : "right-0"} ${noOfLayout === 2 || noOfLayout === 3 ? "pt-0 text-[8px] md:text-xs" : "pt-4"} absolute top-0 `}>
              {" "}
              {convertDate("03.07.2024", showDateFormat)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
