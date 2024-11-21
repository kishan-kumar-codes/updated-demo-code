"use client";
import { ProgressCirlceSvgs } from "@/svgs/Review-Widget-mobile/svgs";
import { progress } from "framer-motion";
import React, { useState, useRef } from "react";

interface ReviewWidget {
  firstColor?: string;
  secondColor?: string;
  progressValue: number;
  setProgressValue: (value: number) => void;
  maxValue?: number;
}

const ReviewBudgetProgressBar: React.FC<ReviewWidget> = ({
  firstColor,
  secondColor,
  progressValue,
  setProgressValue,
  maxValue = 100,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  React.useEffect(() => {
    const handleMove = (clientX: number) => {
      if (isDragging && progressBarRef.current) {
        const bar = progressBarRef.current.getBoundingClientRect();
        const newProgress = Math.max(
          0,
          Math.min(maxValue, ((clientX - bar.left) / bar.width) * maxValue)
        );
        setProgressValue(newProgress);
      }
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, setProgressValue, maxValue, progressValue]);

  const visualPercentage = (progressValue / maxValue) * 100;
  return (
    <div
      ref={progressBarRef}
      className="relative w-full h-2 rounded-full bg-gray-200"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}>
      <div
        className={`absolute top-0 left-0 h-full ${firstColor ? `bg-[${firstColor}]` : "bg-red-500"} rounded-l-full`}
        style={{ width: `${visualPercentage}%` }}
      />
      <div
        className={`absolute top-0 right-0 h-full ${secondColor ? `bg-[${secondColor}]` : "bg-green-500"} rounded-r-full`}
        style={{ width: `${100 - visualPercentage}%` }}
      />
      <div
        className="absolute top-0 -mt-1 w-4 h-4 bg-white border border-gray-400 rounded-full cursor-pointer"
        style={{ left: `calc(${visualPercentage}% - 8px)` }}>
        <ProgressCirlceSvgs />
      </div>
    </div>
  );
};

export default ReviewBudgetProgressBar;
