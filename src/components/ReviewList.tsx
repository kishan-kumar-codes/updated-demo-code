// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';
// import Image from 'next/image';
// import { StarRatingMobile } from '@/utils/helper';


// interface ReviewListProps {
//     showRatings?: boolean;
// }

// const ReviewList: React.FC<ReviewListProps> = ({ showRatings }) => {
//     const reviews = useSelector((state: RootState) => state.reviews.reviews);

//     return (
//         <div className="review-list">
//             {/* <h3>Reviews:</h3> */}
            
//             {reviews.map((review, index) => (
//                     <div
//                       key={index}
//                       className="flex flex-col px-[3%] md:px-[3%]  w-full h-full rounded-2xl py-1 md:py-2.5 bg-[#E0E0E0] mt-6">
//                       <div className="flex w-full gap-2 justify-between">
//                         <div className="flex w-fit items-center py-1 md:py-2">
                         
//                         </div>
//                         <div className="flex w-full flex-col gap-0.5 py-1 md:py-2">
//                           <div className="w-full flex">
//                             <div className="w-16 md:w-28 h-fit">
//                               {" "}
//                               <StarRatingMobile rating={review.rating} />
//                             </div>
//                           </div>
//                           <div className="font-family-Glacial_Indifference-Bold-Helvetica text-[9.04px] w-full flex-shrink-0 md:text-[16px] font-semibold text-[#6D6D6D]">
//                             {review.reviewerName}
//                           </div>
//                           <div className="font-family-Glacial_Indifference-Bold-Helvetica  flex  items-end py-0 pb-2 md:pb-0 justify-start flex-wrap w-full font-normal text-[#6D6D6D] ">
//                             <div className="text-[6px] md:text-xs">
//                               {review.content}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
                  
//         </div>
//     );
// };

// export default ReviewList;


"use client"

import React from 'react';
import { StarRatingMobile } from '@/utils/helper';
import Image from 'next/image';
import WidgetDesign from './widget-design/WidgetDesign';

import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Pencil } from "lucide-react";
import WidgetTabBar from "@/components/widget-design/Tabbar";
import { Laptop } from "lucide-react";
import { Smartphone } from "lucide-react";
import Review1 from "@/assets/images/hubspark/review1.png";
import { RecentGoogleIcon } from "@/icons/marketing/icons";
import { CustomerReviewCard } from "@/components/widget-design/CustomerReviewCard";
import { useEffect, useState } from "react";
import PhoneLayout from "@/components/widget-design/PhoneLayout";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setWidget } from "@/store/slices/widgetSlice";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import useWidgetSelectors from "@/hooks/useWidgetSelector";
import { DecimalStar } from "./CustomComponents/DecimalStar";

const RecentArray = [
  {
    id: 1,
    logo: <RecentGoogleIcon />,
    img: Review1,
    title: "Cindy Brennan",
    respond: true,
    recent: false,
    rating: 5,
    des: "From the moment I called, their customer service was outstanding–friendly, responsive, and efficient.",
    svgRating: <StarRatingMobile rating={5} />,
  },
];

const reviewCard = Array.from({ length: 25 }, (_, index) => ({
  ...RecentArray[0],
  id: index + 1,
}));

interface ReviewListProps {
    showRatings?: boolean;
    config?:any
}

const ReviewList: React.FC<ReviewListProps> = ({ showRatings  ,config}) => {
    const reviews = useSelector((state: RootState) => state.reviews.reviews);
    const [phoneLayout, setPhoneLayout] = useState("Desktop");
    const dispatch = useDispatch();
  
    const { showCaseReview, selectReviews, widgetDesign, carouselWidget } =
      useWidgetSelectors();
  
    // const customizeBackground = useSelector(
    //   (state: RootState) => state.widget.customizeBackground
    // );
    const customizeRadius = useSelector(
      (state: RootState) => state.widget.customizeRadius
    );
    const customizeBorder = useSelector(
      (state: RootState) => state.widget.customizeBorder
    );
  
    const customizeSize = useSelector(
      (state: RootState) => state.widget.customizeSize
    );
  
    const displayLayout = useSelector(
      (state: RootState) => state.widget.noOfLayout
    );
    const customizeShadow = useSelector(
      (state: RootState) => state.widget.customizeShadow
    );
    const setCustomizeShadow = useSelector(
      (state: RootState) => state.widget.setCustomizeShadow
    );
  
    const customizeTitleText = useSelector(
      (state: RootState) => state.widget.customizeTitleText
    );
    const customizeWidgetTitle = useSelector(
      (state: RootState) => state.widget.customizeWidgetTitle
    );
    const isFullScreen = useSelector(
      (state: RootState) => state.widget.isFullScreen
    );
    const customizeTextBgColor = useSelector(
      (state: RootState) => state.widget.customizeTextBackGround
    );
    const displayHeight = useSelector(
      (state: RootState) => state.widget.layoutWidgetHeight
    );
  
    const selectedFonts = useSelector(
      (state: RootState) => state.widget.customizeFont
    );
  
    const noOfReviewsToShows = useSelector(
      (state: RootState) => state.widget.noofReviewstoShow
    );
    const handleSmallScreen = useSelector(
      (state: RootState) => state.widget.handleSmallScreen
    );
  
    const rotateSlides = useSelector(
      (state: RootState) => state.widget.rotateSlides
    );
  
    const transitionStyle = useSelector(
      (state: RootState) => state.widget.transitionStyle
    );
  
    const transitionSpeed = useSelector(
      (state: RootState) => state.widget.transitionSpeed
    );
    const showSlideArrows = useSelector(
      (state: RootState) => state.widget.showSlideArrows
    );
  
    const showSlideDots = useSelector(
      (state: RootState) => state.widget.showSlideDots
    );
  
    const displayReview = useSelector(
      (state: RootState) => state.widget.displayReview
    );
  
    const mappedArray = reviewCard.slice(0, noOfReviewsToShows);
  
    const smallTextSize = Math.round(customizeSize) + 13;
    const mediumTextSize = Math.round(customizeSize) + 26;
    const smallTextSizeDesc = Math.round(customizeSize) + 14;
    const mediumTextSizeDesc = Math.round(customizeSize) + 20;
    const smallTextSizeRating = Math.round(customizeSize) + 15;
    const mediumTextSizeRating = Math.round(customizeSize) + 20;
  
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (!api) return;
  
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
  
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }, [api]);
  
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
        <>

        <div
        style={{
          backgroundColor: config.customizeBackground,
          borderRadius: `${customizeRadius}px`,
        }}
        className={`${isFullScreen ? "w-full" : " w-full"} flex-col h-fit md:py-10 py-4 px-1 md:px-4 ${customizeShadow ? "shadow-lg shadow-current" : "shadow-none"} ${isFullScreen ? "block md:block" : "hidden md:block"}`}>
        <div className="flex px-2 md:px-0 justify-between">
          <div
            style={{
              color: customizeTextBgColor,
              fontFamily: selectedFonts,
              fontSize: smallTextSize,
            }}
            className={` ${phoneLayout === "Phone" ? "hidden" : "flex"} whitespace-nowrap text-xs items-center leading-7 md:text-3xl lg::text-[36px]  py-4 font-bold`}>
            <style jsx>{`
              @media (min-width: 768px) {
                div {
                  font-size: ${mediumTextSize}px;
                }
              }
            `}</style>{" "}
            {customizeTitleText}
          </div>
          <div
            style={{
              color: customizeTextBgColor,
              fontFamily: selectedFonts,
            }}
            className="flex w-full flex-col">
            {displayReview && (
              <>
                <div
                  style={{
                    color: customizeTextBgColor,
                    fontFamily: selectedFonts,
                    fontSize: smallTextSizeDesc,
                  }}
                  className={` ${phoneLayout === "Phone" ? "hidden" : "flex"} text-[10px] justify-end md:text-xl lg:text-[24px] pt-2 text-center font-normal leading-5 md:font-bold`}>
                  <style jsx>{`
                    @media (min-width: 768px) {
                      div {
                        font-size: ${mediumTextSizeDesc}px;
                      }
                    }
                  `}</style>{" "}
                  501 Total Reviews
                </div>
                <div
                  className={` ${phoneLayout === "Phone" ? "hidden" : "flex"} flex justify-end items-center w-full gap-2`}>
                  <div className="w-20 h-fit">
                    {" "}
                    <DecimalStar rating={4.69} />
                  </div>
                  <span
                    style={{
                      color: customizeTextBgColor,
                      fontFamily: selectedFonts,
                      fontSize: smallTextSizeRating,
                    }}
                    className="text-[10px] md:text-[24px]  font-bold">
                    <style jsx>{`
                      @media (min-width: 768px) {
                        div {
                          font-size: ${mediumTextSizeRating}px;
                        }
                      }
                    `}</style>{" "}
                    4.69
                  </span>
                </div>
              </>
            )}

            <div className="hidden w-full md:flex pt-2 justify-end">
              <div
                onClick={() => setPhoneLayout("Desktop")}
                className={`bg-[#631363] ${phoneLayout === "Desktop" ? "bg-[#631363]" : "bg-[#F4F4F4]"} cursor-pointer  px-6 py-2 rounded-l-2xl`}>
                {" "}
                <Laptop
                  color={`${phoneLayout === "Desktop" ? "#FFFFFF" : "#631363"}`}
                />
              </div>
              <div
                onClick={() => setPhoneLayout("Phone")}
                className={`rounded-r-2xl cursor-pointer px-6 py-2 ${phoneLayout === "Phone" ? "bg-[#631363]" : "bg-[#F4F4F4]"}  `}>
                <Smartphone
                  color={`${phoneLayout === "Phone" ? "#FFFFFF" : "#631363"}`}
                />
              </div>
            </div>
          </div>
        </div>
        {phoneLayout === "Desktop" ? (
          <div>
            {carouselWidget ? (
              <div className="mx-auto px-10 py-10 max-w-fit">
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
                    {mappedArray.map((item, index) => (
                      <>
                        <CarouselItem
                          className={`space-x-2 py-2`}
                          key={index}>
                          <CustomerReviewCard index={index} {...item} />
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
            ) : (
              <div
                className={`py-2 md:py-4 mt-0 md:mt-4 grid overflow-auto auto-cols-min auto-rows-min justify-items-start scrollbar-hide gap-0 md:gap-1 grid-cols-${displayLayout} w-full`}
                style={{ height: `${displayHeight}px` }}>
                {mappedArray.map((item, index) => (
                  <div className="w-full h-fit py-2" key={index}>
                    <CustomerReviewCard index={index} {...item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <PhoneLayout mappedArray={mappedArray} />
        )}
      </div>
      </>
    );
};

export default ReviewList;
