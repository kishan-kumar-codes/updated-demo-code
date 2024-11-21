import {
  BattrySvgsWidget,
  NetworkSvgsWidget,
  TImeMobileSvgsWidget,
  WifiSvgsWidget,
} from "@/svgs/Review-Widget-mobile/svgs";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import useWidgetSelectors from "@/hooks/useWidgetSelector";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PhoneLayoutCard } from "./PhoneLayoutCard";
import { Button } from "../ui/button";
import { DecimalStar } from "../CustomComponents/DecimalStar";

interface ReviewCard {
  id: number;
  logo: React.ReactNode;
  img: StaticImageData;
  title: string;
  respond: boolean;
  recent: boolean;
  rating: number;
  des: string;
  svgRating: React.ReactNode;
}

type MappedArray = ReviewCard[];

interface WidgetDesignProps {
  mappedArray: MappedArray;
}

const PhoneLayout: React.FC<WidgetDesignProps> = ({ mappedArray }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    console.log("Carousel API initialized:", api);
    console.log("Total slides:", api.scrollSnapList().length);
    console.log("Current slide index:", api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      console.log("Slide selected:", api.selectedScrollSnap());
      setCurrent(api.selectedScrollSnap() + 1);
    });

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

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
    displayReview,
    carouselWidget,
  } = useWidgetSelectors();

  const dynamicStyles = {
    backgroundColor: reviewBgColor,
    borderRadius: `${cornerRadius}px`,
    boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px ${shadowColor}`,
  };

  const smallTextSize = Math.round(customizeSize) + 10;
  const mediumTextSize = Math.round(customizeSize) + 26;
  const smallTextSizeDesc = Math.round(customizeSize) + 7;
  const mediumTextSizeDesc = Math.round(customizeSize) + 20;

  const reviews = mappedArray.slice(0, noOfReviewsToShows);

  const handlePrev = () => {
    if (api && api.canScrollPrev()) {
      api.scrollPrev();
    }
  };

  const handleNext = () => {
    if (api && api.canScrollNext()) {
      api.scrollNext();
    }
  };

  return (
    <div
      style={{
        height: `${displayHeight}px`,
      }}
      className="w-full flex justify-center items-start rounded-2xl shrink-0 sticky top-0 mt-4 md:mt-8">
      {/* iPhone-like container */}
      <div
        style={{
          height: carouselWidget ? "724px " : `${displayHeight + 24}px`,
        }}
        className={`relative w-[84%] ${carouselWidget ? "pb-[24px]" : "pb-[0px"} pr-2 md:pr-0 md:w-[390.3px]  shrink-0 rounded-[30px] border border-[#B9B6B5]  bg-white`}>
        {/* Notch cutout */}
        <div className="absolute border border-t-0  top-2 z-50 left-1/2 flex transform justify-center items-center gap-1 -translate-x-1/2 w-[80px] md:w-[133px] h-[20px] bg-white rounded-b-lg ">
          <div className=" w-7 h-1 bg-[#686867] rounded-full  " />{" "}
          <div className=" w-1 h-1 bg-[#686867] rounded-full " />
        </div>
        <div
          style={{
            height: carouselWidget ? "700px " : `${displayHeight}px`,
          }}
          className={`relative   w-[95%] md:w-[366.3px] bg-[#FFFFFF] border border-slate-300 z-10 pb-[70px] transform translate-x-2.5  translate-y-2 justify-center items-center shrink-0 rounded-[30px] `}>
          <div className="w-[90%] z-50 h-2 flex justify-between pt-3 ml-3 items-center">
            <div className="flex pl-1 md:pl-4">
              <TImeMobileSvgsWidget />
            </div>
            <div className="flex md:pr-2 pr-0 ">
              <NetworkSvgsWidget />
              <WifiSvgsWidget />
              <BattrySvgsWidget />
            </div>
          </div>
          <div
            className={`w-full relative transform translate-y-10 flex flex-col py-1 px-1 md:px-4 ${carouselWidget ? "h-fit" : "h-full"} justify-start items-start`}>
            <div className="flex w-full gap-1 justify-between px-1 md:px-2 pb-2">
              <div
                style={{
                  color: customizeTextBgColor,
                  fontFamily: selectedFonts,
                  fontSize: smallTextSize,
                }}
                className="text-xl leading-5 text-wrap w-[50%]  font-bold">
                {customizeTitleText}
              </div>
              {displayReview && (
                <div className="flex w-[50%] justify-start items-start flex-col">
                  <div
                    style={{
                      color: customizeTextBgColor,
                      fontFamily: selectedFonts,
                      fontSize: smallTextSize,
                    }}
                    className="text-base flex justify-start font-normal tracking-tighter">
                    501 Total Reviews
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <div className="w-20 md:w-28 h-fit">
                      {" "}
                      <DecimalStar rating={5.0} />
                    </div>
                    <span
                      style={{
                        color: customizeTextBgColor,
                        fontFamily: selectedFonts,
                        fontSize: smallTextSize,
                      }}
                      className="text-lg font-bold">
                      5.0
                    </span>
                  </div>
                </div>
              )}
            </div>
            {carouselWidget ? (
              <>
                <div className="py-4 px-2 w-full overflow-y-scroll scrollbar-hide">
                  <div className="mx-auto px-10 py-10 ">
                    <Carousel
                      fade={transitionStyle}
                      autoplay={rotateSlides}
                      transitionSpeed={transitionSpeed}
                      opts={{
                        loop: true,
                        duration: 30,
                      }}
                      setApi={setApi}
                      className={`w-full `}>
                      <CarouselContent>
                        {reviews.map((item, index) => (
                          <>
                            <CarouselItem
                              className={`space-x-2 py-2`}
                              key={index}>
                              <PhoneLayoutCard index={index} {...item} />
                            </CarouselItem>
                          </>
                        ))}
                      </CarouselContent>
                      {showSlideArrows === "yes" && (
                        <>
                          <CarouselPrevious />
                          <CarouselNext />
                        </>
                      )}
                      {showSlideDots === "yes" && (
                        <div className="py-2 flex gap-2 justify-center items-center text-center text-sm text-muted-foreground">
                          <div
                            onClick={handlePrev}
                            className={`h-2 w-2 cursor-pointer rounded-full bg-slate-500 hover:bg-slate-800 transition-opacity duration-300`}></div>
                          <div
                            onClick={handleNext}
                            className={`h-2 w-2 cursor-pointer rounded-full bg-slate-500 hover:bg-slate-800 transition-opacity duration-300 `}></div>
                        </div>
                      )}
                    </Carousel>
                  </div>
                </div>
              </>
            ) : (
              <div className="py-4 px-2 w-full overflow-y-scroll scrollbar-hide">
                {reviews.map((item, index) => (
                  <div className="w-full h-fit py-2" key={index}>
                    <PhoneLayoutCard index={index} {...item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneLayout;
