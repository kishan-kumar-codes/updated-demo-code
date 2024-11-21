"use client";
import React, { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";

const SpeedMeter = () => {
  const [dimensions, setDimensions] = useState({ width: 305, height: 210 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDimensions({ width: 305, height: 140 });
      } else if (window.innerWidth < 768) {
        setDimensions({ width: 305, height: 210 });
      } else if (window.innerWidth < 1024) {
        setDimensions({ width: 320, height: 190 });
      } else {
        setDimensions({ width: 320, height: 240 });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col h-fit items-center w-full ">
      <div className="flex w-full flex-col relative items-center pb-4 md:pb-8">
        <div className="z-50 relative">
          <ReactSpeedometer
            value={50}
            width={dimensions.width}
            height={dimensions.height}
            minValue={-100}
            maxValue={100}
            needleColor="black"
            segments={5}
            segmentColors={[
              "#FF4500",
              "#FFA500",
              "#FFD700",
              "#ADFF2F",
              "#32CD32",
            ]}
            needleTransitionDuration={4000}
            currentValueText={`${100}`}
            textColor={"#000000"}
            currentValuePlaceholderStyle=" { color: red }"
            ringWidth={77}
            // paddingHorizontal={24}
            paddingVertical={24}
          />
        </div>
        <div
          style={{
            width: dimensions.width,
          }}
          className={`pt-2 absolute bottom-[14%] md:bottom-[18%] lg:bottom-[19%] md:pt-0 text-lg h-10 z-10 rounded-b-3xl font-bold items-center text-center bg-[#6BC43C] `}></div>
      </div>
    </div>
  );
};

export default SpeedMeter;
