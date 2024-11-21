"use client";

import React, { useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import ReputationReviwModel from "../Reputation-mobile/RespondToReviewModal";

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
 * CSS properties for the RecentReplyText style.
 * @type {React.CSSProperties}
 */
const RecentReplyText: React.CSSProperties = {
  ...Typography,
  color: "#631363",
  fontSize: "15.984px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * CSS properties for the RecentReviewTitle style.
 * @type {React.CSSProperties}
 */
const RecentReviewTitle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: 17.559,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * CSS properties for the RecentTextStyle style.
 * @type {React.CSSProperties}
 */
const RecentTextStyle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: 13.559,
  fontStyle: "normal",
  fontWeight: 400,
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
  respond: boolean;
  img: StaticImageData;
  recent: boolean;
  svgRating: React.ReactElement;
}

/**
 * RecentReviewCard component to display a recent review item.
 *
 * @param {RecentReviewCardProps} props - The properties for the RecentReviewCard component.
 * @returns {JSX.Element} The rendered RecentReviewCard component.
 */
export const ReviewCard = ({
  logo,
  svgRating,
  title,
  img,
  des,
  recent,
  respond,
}: RecentReviewCardProps): JSX.Element => {
  // Memoizing styles to prevent unnecessary recalculations
  const memoizedLogo = useMemo(() => logo, [logo]);
  const memoizedSvgRating = useMemo(() => svgRating, [svgRating]);
  const memoizedTitle = useMemo(() => title, [title]);
  const memoizedDes = useMemo(() => des, [des]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModal = () => setShowModal(false);
  const showModals = () => setShowModal(true);

  return (
    <div className="flex flex-col px-[5%]  w-full h-full rounded-3xl md:rounded-[50px] py-1 md:py-4 bg-[#E0E0E0]">
      <div className="flex w-full flex-col gap-1">
        <div className="flex w-full gap-2 items-center py-1 md:py-2 justify-center md:justify-start">
          <div className="w-full flex items-center">
            <Image className="w-12 md:w-fit" alt="Icons" src={img} />
            <div className="w-full flex">
              {" "}
              <div className="pl-3 w-28 md:w-32 h-fit">
                {" "}
                {memoizedSvgRating}
              </div>
            </div>
          </div>
          {recent && (
            <button
              className={`bg-[#631363] font-bold ${respond ? "bg-[#631363] text-white px-5" : "bg-[#E0E0E0] border px-7 border-[#631363] text-[#631363]"} rounded-2xl md:rounded-3xl text-xs md:text-xl lg:text-[26px] p-2`}
              onClick={showModals}>
              {respond ? "Respond" : "View"}
            </button>
          )}
        </div>
        <div className="flex w-full md:w-full items-end gap-4">
          <div className="font-family-Glacial_Indifference-Bold-Helvetica text-[14px] w-full flex-shrink-0 md:text-xl lg:text-[26px] font-semibold text-[#6D6D6D]">
            {memoizedTitle}
          </div>
          <div className="w-full hidden md:flex">{memoizedSvgRating}</div>
        </div>
        <div className="font-family-Glacial_Indifference-Bold-Helvetica tracking-tight flex items-end justify-start flex-wrap w-full  text-xs md:text-lg lg:text-[20px] font-normal text-[#6D6D6D] ">
          {memoizedDes}
        </div>
      </div>
      <div className="flex flex-col w-full py-4 pt-2">
        <div className="flex border-b-2 w-full -px-8  box-content border-[#8C8C8C]" />
        {showModal && (
          <ReputationReviwModel
            img={img}
            memoizedSvgRating={memoizedSvgRating}
            memoizedTitle={memoizedTitle}
            memoizedDes={memoizedDes}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};
