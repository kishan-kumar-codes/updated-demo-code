import useWidgetSelectors from "@/hooks/useWidgetSelector";
import { StarRatingMobile } from "@/utils/helper";
import Image, { StaticImageData } from "next/image";
import { convertDate } from "./CustomerReviewCard";
import { useDispatch } from "react-redux";
import { setWidget } from "@/store/slices/widgetSlice";
import React from "react";

export interface ReviewCard {
  id?: number;
  logo?: React.ReactNode;
  img?: StaticImageData;
  title?: string;
  respond?: boolean;
  recent?: boolean;
  rating?: number;
  des?: string;
  index: number;
  svgRating?: React.ReactNode;
}

export const PhoneLayoutCard = ({
  logo,
  svgRating,
  title,
  rating,
  img,
  des,
  index,
}: ReviewCard): JSX.Element => {
  const {
    shadowColor,
    shadowX,
    shadowY,
    shadowBlur,
    shadowSpread,
    reviewBgColor,
    cornerRadius,
    designPresetTab,
    customizeTextBgColor,
    showReviewerName,
    showReviewerSiteIcon,
    showBusinessDetails,
    showDateFormat,
    customizTextAlignment,
    customizeTitleText,
    selectedFonts,
    noOfReviewsToShows,
    displayHeight,
    isExpanded,
    customizeLinkColor,
    fontCharacter,
    customizeSize,
    setCustomizeShadow,
    rotateSlides,
    transitionStyle,
    transitionSpeed,
    showSlideArrows,
    showSlideDots,
    carouselWidget,
  } = useWidgetSelectors();

  const dynamicStyles = {
    backgroundColor: reviewBgColor,
    borderRadius: `${cornerRadius}px`,
    boxShadow: carouselWidget
      ? "none"
      : `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px ${shadowColor}`,
  };

  const dispatch = useDispatch();

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
    <div
      style={dynamicStyles}
      className={`flex flex-col mt-4 px-2 ${designPresetTab === 1 ? "border-2 border-[#E0E0E0]" : ""} shadow-none w-full ${designPresetTab === 2 ? "border-[#631363] border-2" : "border-none"} py-1`}>
      <div className="flex w-full flex-col md:flex-row gap-2">
        <div className="w-full py-2 px-2 relative">
          {showReviewerSiteIcon && (
            <div
              className={`flex w-full gap-1 items-center md:gap-0 h-fit ${customizTextAlignment === "end" ? "flex-row-reverse items-center" : customizTextAlignment === "center" ? "flex-col justify-center items-center py-0.5" : "md:flex-row"}`}>
              {img && (
                <Image
                  className="w-7 h-7 md:h-10 md:ml-0 md:w-fit"
                  alt="Icons"
                  src={img}
                />
              )}
              <div
                className={`${customizTextAlignment === "end" ? "md:pr-2 pr-0" : customizTextAlignment === "center" ? "text-center" : "text-start"} pt-0 md:pt-2`}>
                <div className="w-20 md:w-28 h-fit">
                  {rating && <StarRatingMobile rating={rating} />}
                </div>
              </div>
            </div>
          )}
          {showDateFormat !== "hidden" && (
            <div
              style={{ color: customizeTextBgColor, fontFamily: selectedFonts }}
              className={`h-fit ${customizTextAlignment === "end" ? "left-0" : "right-0"} pt-4 absolute top-0 right-0 text-xs font-normal`}>
              {convertDate("03.07.2024", showDateFormat)}
            </div>
          )}
          {showReviewerName && (
            <div
              style={{
                color: customizeTextBgColor,
                fontFamily: selectedFonts,
                fontSize: `${smallTextSize}px`,
              }}
              className={`text-base ${customizTextAlignment === "end" ? "text-right" : customizTextAlignment === "center" ? "text-center" : "text-start"} py-0.5 font-bold`}>
              <style jsx>{`
                @media (min-width: 768px) {
                  div {
                    font-size: ${mediumTextSize}px;
                  }
                }
              `}</style>
              {title}
            </div>
          )}
          {showBusinessDetails && des && (
            <div
              style={{
                color: customizeTextBgColor,
                fontFamily: selectedFonts,
                fontSize: smallTextSizeDesc,
              }}
              className={`text-sm leading-tight ${!showReviewerName ? "pt-2" : "pt-0"} ${customizTextAlignment === "end" ? "text-end" : customizTextAlignment === "center" ? "text-center" : "text-start"} tracking-tighter font-normal w-full`}>
              <style jsx>{`
                @media (min-width: 768px) {
                  div {
                    font-size: ${mediumTextSizeDesc}px;
                  }
                }
              `}</style>
              {truncateString(des, fontCharacter, index)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
