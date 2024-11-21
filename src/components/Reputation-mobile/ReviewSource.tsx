import React from "react";
import HeadBar from "../citations-builder/HeadBar";
import { LoadingReputationSvgs } from "@/svgs/Reputation-mobile/svgs";
import ListingItem from "./ListingItem";

const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  lineHeight: "normal",
};

const ReviewSource = () => {
  return (
    <div className="flex flex-col items-center gap-2 my-5">
      <div className="flex flex-col items-center w-full rounded-3xl justify-start bg-[#E0E0E0] pb-3">
        <HeadBar title="Review Sources" />
        <div className="my-3 flex justify-center items-center px-0 md:px-4 flex-col  w-full">
          <div
            className="break-words text-[10px] md:text-lg lg:text-xl font-[400] -tracking-tight px-4 py-1"
            style={Typography}>
            Using the checkboxes below, select the review sources you want to
            track. Once selected, click ‘Find My Listings’ to begin a real-time
            search for your business listings on these review sources. Your
            listings will then be displayed for you to modify should you need
            to. If no listing was found, you can add a new listing.
          </div>

          <div className="flex w-full items-center gap-2 my-5  px-3 py-2">
            <div className="flex items-center bg-[#F4F4F4] rounded-xl px-3 py-2 justify-center gap-2">
              <LoadingReputationSvgs />
              <span
                className="text-[12px] md:text-sm lg:text-lg"
                style={Typography}>
                We’re looking for your business listing on these review
                sources....
              </span>
            </div>
          </div>
          <ListingItem />
          <div className="flex  items-end justify-end w-full pr-2 my-3">
            <div
              className="flex text-center cursor-pointer text-xs md:text-lg lg:text-xl px-3 py-2.5 bg-[#40F440] rounded-xl"
              style={{ ...Typography, color: "#27272D", fontWeight: 700 }}>
              Find My Listings{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSource;
