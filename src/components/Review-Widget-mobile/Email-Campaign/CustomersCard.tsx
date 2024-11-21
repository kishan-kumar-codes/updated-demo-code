import {
  FBShareSvgs,
  IGShareSvg,
  InShareSAvgs,
  ReviewDeleteSvgs,
  ShareArrowSvgs,
  ShareIconReview,
  XShareSAvgs,
} from "@/svgs/review-dashboard-mobile/svgs";
import { StarRatingComponents } from "@/utils/helper";
import React from "react";
import Image from "next/image";
import { Trash } from "lucide-react";

import { R2IconGoogleMobile } from "@/icons/reviewRequest-desktop/icons";

const typography: React.CSSProperties = {
  color: "#FFF",
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  overflowWrap: "break-word",
};

interface ReviewRequestCardProps {
  User?: string;
  Customer?: string;
  Requested?: string;
  Via?: string;
  Location?: string;
  Status?: string;
  Review?: React.ReactNode;
  completed?: string;
  Response?: string;
  isShare?: boolean;
  height?: string;
}

const reviews = [
  {
    user: "NPSTest GR (email partially visible:mykhailo.haie...)",
    customer: "Visited Review Site",
    rating: "Jan 12th 2023",
    requested: "01-15-2024 5:40 PM",
    via: "10",
    location:
      "Thank you for rating; please could you tell us what exactly you liked about Rúla Búla Tempe Irish Pub?",
    review: R2IconGoogleMobile,
    response: "Share Publicly",
    delete: "ji",
  },
];

const CustomersCard: React.FC = () => {
  return (
    <>
      <div className="pb-2">
        {reviews.map((review, index) => (
          <div className="flex w-full" key={index}>
            <div
              key={index}
              className=" text-white rounded-2xl pb-4 w-full overflow-hidden">
              <div className=" w-full">
                <div className="flex w-full bg-white">
                  {" "}
                  <div className="bg-[#631363] rounded-t-xl text-white border-b w-[100px] md:min-w-[25%] lg:min-w-[20%] text-xs md:text-[24px] lg:text-[26px] md:font-normal leading-3 md:leading-6 lg:leading-7 p-2 md:p-4">
                    Customer Details
                  </div>{" "}
                  <div className="text-[#6D6D6D] px-2 md:px-6 leading-3 md:leading-6 lg:leading-7 bg-[#FFFFFF] md:text-xl lg:text-[22px] md:font-normal rounded-tr-2xl p-2 text-xs break-words w-full md:w-[60%]">
                    {review.user}
                  </div>{" "}
                </div>
                <div className="flex w-full">
                  <div className="bg-[#631363] border-b w-[100px] md:min-w-[25%] lg:min-w-[20%]  text-xs  md:text-[24px] lg:text-[26px]  md:font-normal leading-3 md:leading-6 lg:leading-7  p-2 md:p-4">
                    Status
                  </div>{" "}
                  <div className="text-[#6D6D6D] bg-[#F4F4F4] md:bg-[#E0E0E0] md:px-6 px-2 w-full p-2 flex items-center text-xs break-words">
                    <button className="bg-[#40F440]  text-[#27272D] text-[10px] md:text-xl lg:text-[22px] md:font-normal font-semibold p-1 px-2 rounded-3xl">
                      {" "}
                      {review.customer}
                    </button>
                  </div>{" "}
                </div>
                <div className="flex w-full">
                  <div className="bg-[#631363] md:min-w-[25%] lg:min-w-[20%]  text-xs  md:text-[24px] lg:text-[26px] md:font-normal leading-3 md:leading-6 lg:leading-7 border-b w-[100px]  p-2 md:p-4">
                    Date Sent
                  </div>{" "}
                  <div className="text-[#6D6D6D] bg-white  md:text-xl lg:text-[22px] md:font-normal px-2 md:px-6 w-full text-xs p-2 break-words">
                    {review.rating}
                  </div>{" "}
                </div>
                <div className="flex w-full">
                  <div className="bg-[#631363] md:min-w-[25%] lg:min-w-[20%]  text-xs  md:text-[24px] lg:text-[26px] md:font-normal leading-3 md:leading-6 lg:leading-7 border-b w-[100px] p-2 md:p-4 ">
                    Rating
                  </div>
                  <div className="text-[#6D6D6D] bg-[#F4F4F4] md:bg-[#E0E0E0] md:px-6  w-full p-2 text-xs break-words">
                    {" "}
                    <div className="rounded-full border-[4px]   px-2 w-fit p-1 md:text-xl lg:text-[22px] md:font-normal text-[12px] border-[#40F440]">
                      {review.via}
                    </div>
                  </div>{" "}
                </div>
                <div className="flex w-full">
                  <div className="bg-[#631363] md:min-w-[25%] lg:min-w-[20%]  text-xs  md:text-[24px] lg:text-[26px] md:font-normal leading-3 md:leading-6 lg:leading-7 border-b w-[100px] p-2 md:p-4 ">
                    Feedback
                  </div>
                  <div className="text-[#6D6D6D] w-full  px-2 md:px-6 bg-white p-2 text-[10px] md:text-xl lg:text-[22px] md:font-normal break-words leading-3 md:leading-6 lg:leading-7">
                    {" "}
                    {review.location}
                  </div>{" "}
                </div>
                <div className="flex w-full">
                  <div className="bg-[#631363] md:min-w-[25%] lg:min-w-[20%]  text-xs  md:text-[24px] lg:text-[26px] md:font-normal leading-4 md:leading-6 lg:leading-7 border-b w-[100px]  p-2 md:p-4">
                    {" "}
                    Visited Review Sites
                  </div>
                  <div className="w-full p-2 bg-[#F4F4F4] flex items-center md:bg-[#E0E0E0] ">
                    <div className="text-[#6D6D6D] px-2  md:px-6 text-xs break-words">
                      {" "}
                      <R2IconGoogleMobile />
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  {" "}
                  <div className="bg-[#631363] md:min-w-[25%] lg:min-w-[20%]  rounded-b-xl text-xs  md:text-[24px] lg:text-[26px] md:font-normal leading-3 md:leading-6 lg:leading-7 w-[100px] rounded-bl-2xl p-[5.5px] md:p-4">
                    {" "}
                    Permissions
                  </div>
                  <div className="text-[#6D6D6D] p-2 px-2 md:px-6 text-xs rounded-br-2xl md:text-xl lg:text-[22px] md:font-normal bg-[#FFF]  break-words w-full">
                    {review.response}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-1.5">
              <Trash size={16} color="#AA0F0F" fill="#AA0F0F" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomersCard;
