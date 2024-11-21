"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import Header from "@/components/Reputation-mobile/Header";
import { ChevronDown } from "lucide-react";
import React from "react";
// import { HeadBar } from "../citations-builder/HeadBar";
import { InfoTooltipReputation } from "@/components/Reputation-mobile/TooltipReputation";
import SpeedMeter from "./SpeedMeter";
import EmailProgressCard from "./EmailProgressCard";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";
import {
  BudgetDownloadSvgs,
  Circle1Svgs,
  Circle2Svg,
  Circle3Svgs,
  Circle4Svgs,
  Funnel1Svgs,
  Funnel2Svgs,
  Funnel3Svgs,
  Funnel4Svgs,
} from "@/svgs/Review-Widget-mobile/svgs";
import CustomersCard from "./CustomersCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
const typography: React.CSSProperties = {
  color: "#631363",
  fontFamily: "Arial",
};

interface GetReviewsTableType {
  dateLastSent: string;
  templateUsed: string;
  campaignType: string;
  ratingType: string;
  averageScore: string;
  actions: string;
}

interface EmailCampaignProps {
  isNps: GetReviewsTableType | null;
  setShowReview: (boolean: boolean) => void;
}

const EmailCampaign = ({ isNps, setShowReview }: EmailCampaignProps) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F4F4F4] w-full h-full">
      <CitationNavbar heading="Review Widget" isHeaderVisible={false} />
      <div className="w-full flex justify-end items-center py-4 px-4 md:px-[5%] ">
        <Button
          onClick={(prev) => setShowReview(!prev)}
          className="bg-[#40F440] tracking-tight font-[Arial] md:px-4 md:py-6 rounded-xl text-xs md:text-lg lg:text-xl md:font-normal font-bold flex"
          variant="outline">
          <ChevronLeft />
          Back to Get Review Campaigns
        </Button>
      </div>
      <div className="flex flex-col w-full justify-center items-center h-full  ">
        <div className="flex flex-col gap-7 justify-center items-center w-full h-full ">
          <div className="flex flex-col w-[90%] pt-0 md:pt-2 h-full ">
            <div className="flex rounded-2xl z-10 justify-start  w-full bg-[#E0E0E0]">
              <div className="flex flex-col w-full gap-5">
                <div className="bg-[#631363] pl-[3%] text-white font-[Arial] text-[16px] md:text-[24px] lg:text-[26px] md:font-normal font-bold flex  w-full rounded-2xl py-2 md:py-4">
                  Email Campaign {isNps?.dateLastSent}
                </div>
                <div className="w-full px-0 md:px-5">
                  <div className="flex pt-0 font-bold md:font-normal md:pt-4 w-full pb-4">
                    <div
                      style={{ ...typography }}
                      className="flex flex-col px-4 text-[16px] md:text-[24px] lg:text-[26px] md:font-normal">
                      NPS Feedback Score
                    </div>
                    <InfoTooltipReputation />
                  </div>
                  <div className="flex w-full px-2">
                    <div className="flex flex-col w-full rounded-2xl font-bold md:font-normal bg-[#F4F4F4]">
                      <div
                        style={{ ...typography }}
                        className="flex flex-col p-4 w-fit text-[16px] md:text-[24px] lg:text-[26px] md:font-normal">
                        NPS Score
                      </div>
                      <SpeedMeter />
                    </div>
                  </div>
                  <div className="px-2 mt-4">
                    <div className="flex flex-col w-full py-2 rounded-2xl pb-8 bg-[#F4F4F4] ">
                      <div
                        style={{ ...typography }}
                        className="flex font-bold flex-col p-2 md:p-4 pl-3 text-[16px] md:text-[24px] lg:text-[26px] md:font-normal">
                        Breakdown
                      </div>
                      <div className="flex flex-col w-full items-center px-4 pb-2 md:pb-6 ">
                        <div className="flex w-full p-2 gap-2 items-center">
                          <div className="text-[#6D6D6D] text-lg md:text-[30px] lg:text-[32px] md:font-normal font-bold leading-normal">
                            100 =
                          </div>
                          <div className="flex  text-lg font-bold  md:text-[30px] lg:text-[32px] md:font-normal leading-normal justify-center text-center border-2 rounded-xl border-[#6BC43C] px-3 h-full text-[#6D6D6D] items-center ">
                            100
                          </div>
                          -
                          <div className="flex  text-lg font-bold md:text-[30px] lg:text-[32px] md:font-normal leading-normal justify-center text-center border-2 rounded-xl border-[#FE0000] px-3 h-full text-[#6D6D6D] items-center ">
                            --
                          </div>
                        </div>
                        <div className="flex w-full px-2 gap-2 items-center justify-start md:justify-center">
                          <div className="text-[#6D6D6D] text-lg md:text-[28px] lg:text-[30px] md:font-normal font-bold leading-normal">
                            NPS
                          </div>
                          <div className="flex text-lg md:text-[28px] lg:text-[30px] md:font-normal font-bold leading-normal justify-center text-center rounded-xl text-[#6BC43C] px-2 h-full items-center ">
                            Promoters
                          </div>
                          <div className="flex  text-lg md:text-[28px] lg:text-[30px] md:font-normal font-bold leading-normal justify-center text-center rounded-xl text-[#FE0000] px-1 h-full items-center ">
                            Detractors
                          </div>
                        </div>
                        <div className="flex flex-col w-full p-2 gap-4 md:gap-8 items-center">
                          <EmailProgressCard
                            title1="Promoters"
                            border="rounded-full"
                            value={100}
                            color="#6BC43C"
                          />
                          <EmailProgressCard
                            title1="Passives"
                            border="rounded-full"
                            value={100}
                            color="#0042FC"
                          />
                          <EmailProgressCard
                            title1="Detractors"
                            border="rounded-full"
                            value={100}
                            color="#FE0000"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full rounded-2xl py-3 mt-4 bg-[#F4F4F4] ">
                      <div
                        style={{ ...typography }}
                        className="flex flex-col text-[14px]  md:text-[28px] lg:text-[30px] md:font-normal font-bold pl-4 pt-2">
                        Feedback Funnel
                      </div>
                      <div className="flex px-3 justify-start md:justify-center w-full">
                        <div className="flex md:justify-end w-1/2 pl-2 md:pl-0 justify-center md:w-full">
                          <div className="flex flex-col justify-center md:items-end items-center  w-1/2 md:w-fit">
                            {" "}
                            <div className="flex w-full   relative flex-col items-center">
                              <Funnel1Svgs />
                              <div className="absolute inset-y-[29px]  flex justify-center">
                                <Circle1Svgs />
                              </div>
                              <div className="absolute  w-[11px] h-full shrink-0 flex items-center text-[#F4F4F4] text-lg font-bold leading-normal">
                                1
                              </div>
                            </div>
                            <div className="flex w-full   relative flex-col items-center">
                              <Funnel2Svgs />
                              <div className="absolute inset-y-[35px]  flex justify-center">
                                <Circle2Svg />
                              </div>
                              <div className="absolute  w-[11px] h-full shrink-0 flex items-center text-[#F4F4F4] text-lg font-bold leading-normal">
                                1
                              </div>
                            </div>
                            <div className="flex w-full   relative flex-col items-center">
                              <Funnel3Svgs />
                              <div className="absolute inset-y-[38px]  flex justify-center">
                                <Circle3Svgs />
                              </div>
                              <div className="absolute  w-[11px] h-full shrink-0 flex items-center text-[#F4F4F4] text-md font-bold leading-normal">
                                1
                              </div>
                            </div>
                            <div className="flex w-full   relative flex-col items-center">
                              <Funnel4Svgs />
                              <div className="absolute inset-y-[20px]  flex justify-center">
                                <Circle4Svgs />
                              </div>
                              <div className="absolute  w-[11px] h-full shrink-0 flex items-center text-[#F4F4F4] text-[10px] font-bold leading-normal">
                                1
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center items-center pl-0 md:pl-2 py-10 gap-3 md:gap-1.5 w-1/2 md:w-full">
                          <div className="flex w-full gap-1">
                            <div className="flex flex-col text-xs md:text-xl lg:text-[22px] md:font-normal text-[#6D6D6D]">
                              Sent
                            </div>
                            <InfoTooltipReputation />
                          </div>
                          <div className="flex w-full gap-1">
                            <div className="flex flex-col text-xs md:text-xl lg:text-[22px] md:font-normal text-[#6D6D6D]">
                              Opened
                            </div>
                            <InfoTooltipReputation />
                          </div>
                          <div className="flex w-full gap-1">
                            <div className="flex flex-col text-xs md:text-xl lg:text-[22px] md:font-normal text-[#6D6D6D]">
                              Left Feedback
                            </div>
                            <InfoTooltipReputation />
                          </div>
                          <div className="flex w-full gap-1">
                            <div className="flex flex-col text-xs md:text-xl flex-shrink-0 lg:text-[22px] md:font-normal text-[#6D6D6D]">
                              Visited Review Site
                            </div>
                            <InfoTooltipReputation />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ ...typography }}
                      className="flex flex-col w-full px-3 py-4 text-[14px] md:text-xl lg:text-[26px] md:font-normal font-bold">
                      Customers 1
                    </div>
                    <div className="flex justify-between items-center w-full px-4 pb-4">
                      <div className="flex text-[#6D6D6D]   font-bold p-1 rounded-lg text-[10px]">
                        <Select>
                          <SelectTrigger className="bg-white font-bold md:font-normal">
                            <SelectValue placeholder="Rating" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectGroup>
                              <SelectItem value="1">Option 1</SelectItem>
                              <SelectItem value="2">Option 2</SelectItem>
                              <SelectItem value="3">Option 3</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="items-center flex gap-1 bg-[#F4F4F4] p-1 px-2 rounded-lg">
                        <BudgetDownloadSvgs />{" "}
                        <div className="flex text-[#6D6D6D] font-medium  text-xs md:text-xl lg:text-[22px] md:font-normal">
                          CSV
                        </div>
                      </div>
                    </div>
                    <CustomersCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center md:hidden mt-10 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default EmailCampaign;
