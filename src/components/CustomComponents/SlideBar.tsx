"use client";

import { Button } from "@/components/ui/button";
import { BorderLinearProgress } from "./BorderLineProgress";
import MapStatic from "@/assets/images/hubspark/mapstatic.png";
import Image from "next/image";
import BarGraph from "./Bargraph";
import { useEffect, useState } from "react";
import LocalListings from "@/components/(seo)/locallistings/page";
import Rankings from "@/components/(seo)/rankings/page";
import CheckIns from "@/components/(seo)/checkins/page";
import LocalListingProgressCard from "../seo-screens/LocalListingProgressCard";

interface SlideBar {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

export default function SliderBar({ selectedTab, setSelectedTab }: SlideBar) {
  const [isMore, selectMore] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    setIsSmallScreen(isSmallScreen);
    if (!isSmallScreen) {
      selectMore(0);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSmallScreen]);

  const handleTabClick = (tab: string) => {
    if (!isSmallScreen) {
      setSelectedTab(tab);
    }
  };

  const Typography: React.CSSProperties = {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  };

  const CircleStyle: React.CSSProperties = {
    background:
      "linear-gradient(90deg, #64C08A -0.47%, #00A550 49.51%, #00914C 99.5%)",
  };
  const CircleStyle1: React.CSSProperties = {
    background:
      "linear-gradient(90deg, #FFE7A3 -0.47%, #FFCA05 49.52%, #FAAC18 99.5%)",
  };
  const CircleStyle2: React.CSSProperties = {
    background:
      "linear-gradient(90deg, #F37E5F -0.47%, #EC1C24 49.52%, #CF232A 99.5%)",
  };

  return (
    <>
      {isClient && (
        <div className="pb-2 px-2 md:px-0 flex w-full justify-center">
          <div className="flex flex-col w-full  px-0">
            <div className="w-full flex flex-col gap-2">
              <div className="flex gap-2 lg:gap-1 pt-0 md:pt-10 bg-[#F4F4F4] lg:px-8 flex-col lg:flex-row justify-between w-full md:px-16">
                {isMore === 1 ? (
                  <LocalListings />
                ) : (
                  <div
                    onClick={() => handleTabClick("local")}
                    className="w-full lg:min-w-[33%] flex-1 cursor-pointer px-2">
                    <div
                      className={` ${
                        selectedTab === "local"
                          ? "text-[#631363]"
                          : "text-[#6D6D6D] "
                      }  text-xl md:text-2xl lg:text-[26px] py-2 font-semibold`}>
                      Local Listings
                    </div>
                    <div
                      className={`rounded-xl lg:min-w-[33%] lg:min-h-[180px] border-2 py-4 lg:py-8 px-2 lg:px-4 flex bg-[#E0E0E0] ${
                        selectedTab === "local"
                          ? "border-[#631363]"
                          : "border-transparent"
                      } justify-between  items-center gap-2`}>
                      <div className=" flex justify-center  items-center gap-2 md:gap-6 lg:gap-3 w-full">
                        <div className=" flex flex-col gap-3 lg:gap-2 py-2 justify-start items-start">
                          <div className="flex gap-3 justify-start items-center">
                            <span
                              style={CircleStyle}
                              className="w-[10px] h-[10px] rounded-full"></span>
                            <span
                              className="text-xs md:text-lg lg:text-[20px]"
                              style={{ ...Typography, color: "#6D6D6D" }}>
                              Good
                            </span>
                          </div>
                          <div className="flex gap-3 justify-start items-center">
                            <span
                              style={CircleStyle1}
                              className="w-[10px]  h-[10px] rounded-full"></span>
                            <span
                              className=" text-xs md:text-lg lg:text-[20px]"
                              style={{ ...Typography, color: "#6D6D6D" }}>
                              Incorrect
                            </span>
                          </div>
                          <div className="flex gap-3 justify-start items-center">
                            <span
                              style={CircleStyle2}
                              className="w-[10px] h-[10px] rounded-full"></span>
                            <span
                              className=" text-xs md:text-lg lg:text-[20px] whitespace-nowrap"
                              style={{ ...Typography, color: "#6D6D6D" }}>
                              Doesn’t exist
                            </span>
                          </div>
                        </div>
                        <div className="lg:m-3 py-2 justify-start w-full items-center border-l-2 border-[#6D6D6D]">
                          <div className="-mt-2 overflow-hidden w-full lg:overflow-clip">
                            <LocalListingProgressCard
                              title1="131"
                              value={60}
                              color="linear-gradient(90deg, #00914C -0.03%, #00A550 49.97%, #64C08A 99.98%)"
                            />
                            <LocalListingProgressCard
                              title1="180 "
                              value={80}
                              color=" linear-gradient(90deg, #FAAC18 -0.03%, #FFCA05 49.96%, #FFE7A3 99.94%)"
                            />
                            <LocalListingProgressCard
                              title1="97"
                              value={40}
                              color=" linear-gradient(90deg, #CF232A -0.04%, #EC1C24 49.97%, #F37E5F 99.98%)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end lg:hidden md:text-lg w-full font-bold text-[#631363] px-2">
                      <Button variant="ghost" onClick={() => selectMore(1)}>
                        More...
                      </Button>
                    </div>
                  </div>
                )}
                {isMore === 2 ? (
                  <Rankings />
                ) : (
                  <div
                    onClick={() => handleTabClick("rank")}
                    className="w-full lg:min-w-[33%] flex-1 md:py-[6px] py-0  px-1 cursor-pointer">
                    <div
                      className={` ${
                        selectedTab === "rank"
                          ? "text-[#631363]"
                          : "text-[#6D6D6D] "
                      } text-xl md:text-2xl lg:text-[26px] font-semibold py-1`}>
                      Rankings
                    </div>
                    <div className="w-full lg:min-h-[180px]  lg:min-w-[33%]">
                      <div
                        className={`flex border-2   rounded-xl ${
                          selectedTab === "rank"
                            ? "border-[#631363]"
                            : "border-transparent"
                        }  border bg-[#E0E0E0]`}>
                        <div className="gap-2 flex justify-start items-center flex-col w-[45%] pt-2 lg:pt-8 md:px-0 lg:px-2">
                          <div className="text-[#6D6D6D] md:text-lg lg:text-[20px] text-nowrap text-xs text-center font-semibold">
                            Selected Keyword
                          </div>
                          <Button
                            variant="outline"
                            className="bg-[#631363] text-white lg:px-2 lg:text-[15px] h-fit px-2 py-2 lg:py-1 md:w-fit  font-normal text-center lg::ml-2 ml-1 text-[9px] md:text-xs lg:text-sm rounded-xl">
                            {" "}
                            Target Keyword
                          </Button>
                        </div>
                        <div className="border-[#631363] w-[90%] lg:w-[55%] h-[144px] lg:h-[178px] border-2 bg-white rounded-lg">
                          <Image
                            alt="map"
                            className="w-full h-full rounded-xl object-cover"
                            src={MapStatic}
                            priority={true}
                            quality={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end  lg:hidden w-full font-bold text-[#631363] px-2">
                      <Button onClick={() => selectMore(2)} variant="ghost">
                        More...
                      </Button>
                    </div>
                  </div>
                )}
                {isMore === 3 ? (
                  <CheckIns />
                ) : (
                  <div
                    onClick={() => handleTabClick("checkins")}
                    className="w-full lg:min-w-[33%] flex-1 px-2 cursor-pointer">
                    <div
                      className={` ${
                        selectedTab === "checkins"
                          ? "text-[#631363]"
                          : "text-[#6D6D6D] "
                      } text-nowrap flex shrink-0 lg:min-w-[33%]  w-fit text-xl  lg:text-[32px] mt-1  font-semibold py-1`}>
                      <div className="w-fulltext-xl  md:text-2xl tracking-tighter lg:text-[26px] whitespace-nowrap">
                        {" "}
                        Check-ins & Review Requests
                      </div>
                    </div>
                    <div
                      className={`flex py-2 lg:min-h-[180px] lg:py-[28px] border-2  ${
                        selectedTab === "checkins"
                          ? "border-[#631363]"
                          : "border-transparent"
                      }  border rounded-lg py-4 mt-1 px-2 bg-[#E0E0E0]`}>
                      <BarGraph />
                    </div>
                    <div className="flex justify-end md:text-lg lg:hidden w-full font-bold text-[#631363] px-2">
                      <Button onClick={() => selectMore(3)} variant="ghost">
                        More...
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
