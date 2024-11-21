"use client";

import React, { useState } from "react";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";
import { Mail } from "lucide-react";
import { Link } from "lucide-react";
import { Monitor } from "lucide-react";
import { useRouter } from "next/navigation";
import EmailCampaign from "@/components/Review-Widget-mobile/Email-Campaign/EmailCampaign";

import GetReviewsTable from "./GetReviewsTable";

interface GetReviewsTableType {
  dateLastSent: string;
  templateUsed: string;
  campaignType: string;
  ratingType: string;
  averageScore: string;
  actions: string;
}

const emailData = [
  {
    dateLastSent: "12th Jan 2023",
    templateUsed: "nps dtr all",
    campaignType: "+ Internal Feedback",
    ratingType: "NPS",
    averageScore: "World Class 100",
    actions: "View",
  },
  {
    dateLastSent: "5th Dec 2022",
    templateUsed: "! (copy)",
    campaignType: "+ Internal Feedback",
    ratingType: "NPS",
    averageScore: "N/A",
    actions: "View",
  },
];

const linkData = [
  {
    dateLastSent: "20th Jun 2022",
    templateUsed: "! (copy)",
    campaignType: "+ Internal Feedback",
    ratingType: "NPS",
    averageScore: "Good 25",
    actions: "View",
  },
];
const kioskdata = [
  {
    dateLastSent: "20th Jun 2022",
    templateUsed: "! (copy)",
    campaignType: "+ Internal Feedback",
    ratingType: "NPS",
    averageScore: "N/A",
    actions: "View",
  },
];

const GetReviews = () => {
  const [isNps, setNps] = useState<GetReviewsTableType | null>(null);
  const [showReview, setShowReview] = useState<boolean>(false);

  const handleViewClick = (data: GetReviewsTableType) => {
    setNps(data);
    setShowReview(true);
  };
  const router = useRouter();
  return (
    <>
      {showReview ? (
        <EmailCampaign setShowReview={setShowReview} isNps={isNps} />
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-full bg-[#F4F4F4]">
          <CitationNavbar heading="Review Widget" isHeaderVisible={false} />
          <div className="flex flex-col w-full justify-center items-center h-full pb-10  ">
            <div className="flex flex-col gap-4 justify-center px-0 md:px-[3%] pt-2 md:pt-8 items-center w-full">
              <div className="flex flex-col w-full h-full bg-transparent rounded-3xl pb-4 md:pb-16 md:bg-[#E0E0E0]">
                <div className="w-full p-0 md:p-3 px-8 lg:px-12 shrink-0 text-[#6D6D6D] rounded-3xl md:text-2xl lg:text-[26px] md:font-normal md:text-white font-[Arial] text-[20px] bg-transparent md:bg-[#631363] text-xl font-bold leading-normal">
                  Get Reviews
                </div>
                <div className="w-full p-0 md:p-3 px-8 lg:px-12 rounded-3xl md:text-2xl lg:text-[26px] md:font-normal font-[Arial] text-[14px] pb-2 shrink-0 text-[#631363] text-md font-bold leading-normal">
                  Campaigns
                </div>
                <div className="md:justify-start px-4 lg:px-12 justify-end w-full flex pr-2">
                  <button
                    onClick={() => router.push("/review-widget")}
                    className=" text-xs md:text-[22px] lg:text-[24px] md:font-normal font-bold leading-normal  my-1  text-[#27272D] cursor-pointer bg-[#40F440]    rounded-2xl px-3 py-3">
                    + Start A Review Generation Campaign
                  </button>
                </div>
                <div className="flex gap-2 pb-2  pt-4 lg:pt-8 items-center">
                  {/* <MailBudgetSvgs /> */}

                  <div className="w-full  shrink-0 text-[#6D6D6D]  md:text-[22px] lg:text-[36px] md:font-normal font-[Arial] text-sm font-bold leading-normal">
                    <div className="flex gap-2 px-4 lg:px-12 items-center">
                      <Mail color="#6D6D6D" />
                      <div> Email Mode</div>
                    </div>{" "}
                  </div>
                </div>
                <GetReviewsTable
                  handleViewClick={handleViewClick}
                  data={emailData}
                />
                <div className="w-full pt-4 md:pt-8 pb-2 px-4 lg:px-12 shrink-0 text-[#6D6D6D]  md:text-[22px] lg:text-[36px] md:font-normal font-[Arial] text-sm font-bold leading-normal">
                  <div className="flex gap-2 items-center">
                    <Link color="#6D6D6D" />
                    <div> Link Mode</div>
                  </div>{" "}
                </div>
                <GetReviewsTable
                  handleViewClick={handleViewClick}
                  data={linkData}
                />
                <div className="w-full pt-4 md:pt-8 pb-2  px-4 lg:px-12 shrink-0 text-[#6D6D6D]  md:text-[22px] lg:text-[36px] md:font-normal font-[Arial] text-sm font-bold leading-normal">
                  <div className="flex gap-2 items-center">
                    <Monitor color="#6D6D6D" />
                    <div> Kiosk Mode</div>
                  </div>{" "}
                </div>
                <GetReviewsTable
                  handleViewClick={handleViewClick}
                  data={kioskdata}
                />
              </div>
            </div>
          </div>
          <div className="flex md:hidden w-full justify-center mt-10 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
        </div>
      )}
    </>
  );
};

export default GetReviews;
