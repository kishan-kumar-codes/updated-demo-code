// app/page.tsx (or app/widget-page.tsx, etc.)
"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Widget: React.FC = () => {
  const [scriptSrc, setScriptSrc] = useState<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);



  const customizeBackground = useSelector(
    (state: RootState) => state.widget.customizeBackground
  );



  
  useEffect(() => {
    // Fetch the dynamically generated script filename
    fetch("/api/widget/get-widget-filename")
      .then((response) => response.json())
      .then((data) => {
        if (data.filename) {
          setScriptSrc(`/dist/${data.filename}`);
        } else {
          console.error("Failed to load widget filename.");
        }
      })
      .catch((error) =>
        console.error("Error fetching widget filename:", error)
      );
  }, []);

  useEffect(() => {
    if (scriptLoaded && window.renderReviewWidget) {
      window.renderReviewWidget("my-review-widget", {
        widgetId: "widget-id",
        title: "Customer Reviews",
        color: "#ff6600",
        displayMode: "compact",
        showAvatar: false,
        showRatings: true,
        customizeBackground:customizeBackground
      });
    }
  }, [scriptLoaded]);

  return (
    <>
      {scriptSrc && (
        <Script src={scriptSrc} onLoad={() => setScriptLoaded(true)} />
      )}
      <div id="my-review-widget"></div>
    </>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="w-full flex flex-col  items-center relative min-h-screen">
      <h1 className="text-[30px] font-[700]">Here's your Widget </h1>
      <Widget />
      <div className="w-full absolute  bottom-0  flex  py-2 bg-[#F4F4F4]  justify-start px-5 md:px-14 items-center ">
        <Link href="/showcase-reviews">
          <button className="flex z-50 mt-2 text-[10px] md:text-base lg:text-[20px] font-semibold gap-2 cursor-pointer h-8 md:h-10 justify-center items-center bg-[#BA0416] text-white border w-fit focus:outline-none rounded-lg px-3 md:px-5">
            <span className="text-center w-fit font-semibold">Back</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
