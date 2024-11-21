"use client";

import React, { useState } from "react";
import Header from "../Reputation-mobile/Header";
// import { HeadBar } from "../citations-builder/HeadBar";
import { MenuIcon } from "@/svgs/checkIn/svgs";
import { InfoTooltipReputation } from "../Reputation-mobile/TooltipReputation";
import InputBarField from "../citations-builder/InputBarField";
import ReviewWidgetFIleUpload from "./ReviewWidgetFIleUpload";
import CircleNumContainerCard from "./CircleNumContainerCard";
import SquareCheckBoxButton from "../citations-builder/SquareCheckBox";
import { ThumbpsUpdownSvgs } from "@/svgs/Review-Widget-mobile/svgs";
import { StarRating } from "@/pages/demo";
import CircleNumList from "./CircleNumList";
import ReviewBudgetProgressBar from "./ReviewBudgetProgressBar";
import { Input } from "../ui/input";
import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";
import { Label } from "../ui/label";
import { StarRatingMobile } from "@/utils/helper";
import StarRatings from "../CustomComponents/StarHoverRating";
import { Button } from "../ui/button";

const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};
const typography: React.CSSProperties = {
  color: "#631363",
  fontFamily: "Arial",
};

const reputationStyle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: "22px",
};

const ReviewWidgetMobile = ({
  setCurrentTab,
}: {
  setCurrentTab: (email: string) => void;
}) => {
  const [isNPSChecked, setIsNPSChecked] = useState(true);
  const [isthumbsChecked, setthumbsChecked] = useState(false);
  const [isStarChecked, setStarChecked] = useState(false);
  const [isProgress, setProgress] = useState(50);

  const [rating, setRating] = useState(0);

  const handleNextPage = () => {
    setCurrentTab("email");
  };

  const handleCheckboxChange = (type: any) => {
    switch (type) {
      case "NPS":
        setIsNPSChecked(true);
        setthumbsChecked(false);
        setStarChecked(false);
        break;
      case "Thumbs":
        setIsNPSChecked(false);
        setthumbsChecked(true);
        setStarChecked(false);
        break;
      case "Stars":
        setIsNPSChecked(false);
        setthumbsChecked(false);
        setStarChecked(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col w-full justify-center items-center h-full  ">
        <div className="flex flex-col gap-7 justify-center items-center w-full bg-[#F4F4F4] min-h-[700px]">
          {/* <Header title={" Review Widget"} displayName="Review-WidgetHeader" /> */}
          <CitationNavbar heading="Review Widget" isHeaderVisible={false} />
          <div className="flex flex-col w-[92%] py-2 md:py-4 lg:py-6 h-full ">
            <div className="flex  flex-col rounded-2xl justify-start w-full bg-[#E0E0E0]">
              <div className="flex flex-col w-full gap-2">
                <div className="bg-[#631363] pl-[5%] md:pl-[3%] lg:pl-[4%] text-white font-[Arial] text-[16px] font-bold md:font-normal md:text-2xl lg:text-[26px] flex  w-full rounded-2xl py-2">
                  Internal Feedback + Public Review
                </div>
                <div className="w-full md:px-6 lg:px-[52px] grid grid-cols-1 gap-1 md:gap-4 lg:gap-8 md:grid-cols-2 px-4">
                  <div className="col-start-1 md:col-start-1">
                    <div
                      className="text-[14px] font-bold py-0 md:py-2.5 md:text-lg lg:text-[22px] md:font-normal"
                      style={{ ...typography }}>
                      Template Name
                    </div>
                    <div className="flex gap-1 pb-1 w-full">
                      <Label
                        style={{ ...typography, color: "#6D6D6D" }}
                        className="flex flex-col text-[12px] font-bold md:text-xl  lg:text-[20px] md:font-normal">
                        Name Your New Template
                      </Label>
                      <InfoTooltipReputation />
                    </div>
                    <Input className="text-xs rounded-2xl" placeholder="" />
                    <div
                      className="pt-2 md:pt-5 lg:pt-8 text-[14px] font-bold py-0 md:py-2 md:text-lg lg:text-[22px] md:font-normal"
                      style={{ ...typography }}>
                      Upload Logo
                    </div>
                    <div className="text-[#6D6D6D] text-[10px] md:py-2 md:text-lg lg:text-[20px] md:font-normal py-1 pb-2 font-bold leading-normal md:leading-5 lg:leading-5">
                      This will be displayed on your branded emails and feedback
                      pages. If no logo is uploaded, the business name will be
                      displayed instead.
                    </div>
                    <div className="flex py-2 w-full ">
                      <ReviewWidgetFIleUpload isInfo={true} />
                    </div>
                  </div>
                  <div className="col-start-1 md:col-start-2">
                    <div
                      className="font-bold pt-0 md:pt-4 text-[14px] md:text-lg lg:text-[22px] md:font-normal"
                      style={{ ...typography }}>
                      Select Your Internal Feedback Type
                    </div>
                    <div className="text-[#6D6D6D] text-[10px] font-bold md:text-lg lg:text-[20px] md:font-normal py-1 lg:py-2.5 leading-3 md:leading-5">
                      Choose the type of score to include in this template:
                    </div>
                    <div className="flex flex-col w-full gap-2 lg:gap-3 my-3 py-4 bg-[#F4F4F4] p-3 min-h-[200px] rounded-2xl">
                      <SquareCheckBoxButton
                        onChange={() => handleCheckboxChange("NPS")}
                        label={"Net Promoter Score (NPS)"}
                        id={"net-nps"}
                        checked={isNPSChecked}
                        // fontSizeMobile={14}
                      />
                      <CircleNumList isChecked={isNPSChecked} />
                      <SquareCheckBoxButton
                        checked={isthumbsChecked}
                        onChange={() => handleCheckboxChange("Thumbs")}
                        label={"Thumbs Up / Down"}
                        id={"Thumbs-Down"}
                        // fontSizeMobile={14}
                      />
                      <ThumbpsUpdownSvgs isthumbsChecked={isthumbsChecked} />
                      <div className="pt-1">
                        {" "}
                        <SquareCheckBoxButton
                          checked={isStarChecked}
                          onChange={() => handleCheckboxChange("Stars")}
                          label={"5 Stars"}
                          id={"5-Stars"}
                          // fontSizeMobile={14}
                        />
                      </div>
                      <StarRating isStarChecked={isStarChecked} rating={5} />
                    </div>
                  </div>
                  <div className="col-start-1 md:col-start-2">
                    <div
                      className={`w-full flex-col ${isthumbsChecked ? "hidden" : "flex"}`}>
                      {isNPSChecked && (
                        <>
                          <div
                            className="pt-3 md:pt-0 font-bold text-[14px] md:text-lg lg:text-[22px] md:font-normal"
                            style={{ ...typography }}>
                            Set Your Positive Score Threshold
                          </div>
                          <div className="text-[#6D6D6D] text-[10px] md:py-2 md:text-lg lg:text-[20px] md:font-normal py-1 tracking-tight font-bold leading-normal md:leading-5 lg:leading-5">
                            Use the slider below to determine what is considered
                            a positive or negative score.
                          </div>
                        </>
                      )}
                      <div className="flex flex-col w-full gap-3 my-4 py-4 bg-[#F4F4F4] p-3 min-h-[100px] rounded-2xl">
                        {isNPSChecked && (
                          <div className="p-0 md:p-1 ">
                            {" "}
                            <CircleNumList isChecked={isNPSChecked} />
                            <div className="py-1">
                              <ReviewBudgetProgressBar
                                progressValue={isProgress}
                                setProgressValue={setProgress}
                              />
                            </div>
                            <div className=" w-full flex justify-center gap-2 md:pt-2 items-center">
                              <div
                                className=" text-center leading-normal md:leading-5 lg:leading-5 font-bold tracking-tight text-[8px] md:text-lg lg:text-[20px] md:font-normal"
                                style={{
                                  ...typography,
                                  color: "#6D6D6D",
                                }}>
                                Score of 1- 5 is a negative score
                              </div>
                              <div
                                className=" font-bold leading-normal md:leading-5 lg:leading-5 tracking-tight text-[8px] md:text-lg lg:text-[20px] md:font-normal"
                                style={{
                                  ...typography,
                                  color: "#6D6D6D",
                                }}>
                                Score of 6- 10 is a positive score
                              </div>
                            </div>
                          </div>
                        )}
                        {isStarChecked && (
                          <div className="flex justify-center w-full items-center pt-0 md:pt-4">
                            <div className="w-fit p-4">
                              <StarRatings
                                rating={rating}
                                onRatingChange={setRating}
                              />
                              {/* <StarRatingMobile rating={4} /> */}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* <CircleNumList isChecked={true} /> */}
                  <div className="col-start-1 md:col-start-1 md:row-start-2">
                    <div
                      className="pt-1 lg:pt-2 text-[14px] font-bold md:text-lg lg:text-[22px] md:font-normal"
                      style={{ ...typography }}>
                      Enable Additional Feedback Step
                    </div>
                    <div className="text-[#6D6D6D] pt-1 md:pt-3 text-[10px] md:text-lg lg:text-[20px] md:font-normal tracking-tight font-bold leading-normal md:leading-5 lg:leading-5">
                      Ask customers to write feedback about their experience
                      before inviting them to leave a public review. This step
                      displays after a customer has submitted their internal
                      feedback score.
                    </div>
                    <div className="flex flex-col w-full py-4 gap-2">
                      <SquareCheckBoxButton
                        label={"Off"}
                        id={"Off"}
                        // fontSizeMobile={14}
                      />
                      <SquareCheckBoxButton
                        label={"All Responses"}
                        id={"All-Responses"}
                        // fontSizeMobile={14}
                      />
                      <SquareCheckBoxButton
                        label={"Negative Only"}
                        id={"Negative-Only"}
                        // fontSizeMobile={14}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex justify-end w-full px-[5%] py-4 lg:py-10">
                <Button
                  variant="outline"
                  onClick={handleNextPage}
                  className=" bg-[#40F440] font-bold text-[#27272D]">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full md:hidden justify-center my-10 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default ReviewWidgetMobile;
