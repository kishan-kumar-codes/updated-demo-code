import { StarRatingMobile } from "@/utils/helper";
// import { ReviewCard } from "../review-dashboard-mobile/ReviewCard";
import Review1 from "@/assets/images/hubspark/review1.png";
import Review2 from "@/assets/images/hubspark/review2.png";
import Review3 from "@/assets/images/hubspark/review3.png";
import JSONPLACHOLDER from "@/assets/images/hubspark/jsonplaceholder.png";
import Image from "next/image";
import Header from "@/components/Reputation-mobile/Header";
import { Switch } from "@/components/ui/switch";

import { RecentGoogleIcon, RecentRevIcon } from "@/icons/marketing/icons";
import { ReputationSearchSvgsMain } from "@/svgs/review-dashboard-mobile/svgs";
import { RecentRev1Icon } from "@/icons/review-dashboard/icons";

import useWidgetSelectors from "@/hooks/useWidgetSelector";

import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";
import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
export default function SelectReviews({ recentarry, setSelectedReviews }: any) {
  const [selectedReviews, setSelectedReviewsState] = useState([...recentarry]);

  useEffect(() => {
    // Update the parent state whenever the selected reviews change
    setSelectedReviews(selectedReviews);
  }, [selectedReviews, setSelectedReviews]);

  const handlePositionChange = (index: number, newPosition: number) => {
    const updatedReviews = [...selectedReviews];
    const [movedItem] = updatedReviews.splice(index, 1); // Remove the item from its current position
    updatedReviews.splice(newPosition, 0, movedItem); // Insert it at the new position
    setSelectedReviewsState(updatedReviews); // Update local state
  };

  const handleSelectChange = (index: number) => {
    const updatedReviews = [...selectedReviews];
    updatedReviews[index].selected = !updatedReviews[index].selected; // Toggle selection
    setSelectedReviewsState(updatedReviews); // Update local state
  };

  return (
    <div className="bg-[#F4F4F4]">
      <CitationNavbar heading="Reputation" isHeaderVisible={false} />
      {/* <Header title="Reputation" /> */}
      <div className="w-full flex gap-2 mt-4 flex-col bg-[#F4F4F4] px-[5%]">
        <div className=" rounded-xl md:bg-[#E0E0E0] md:rounded-3xl bg-[#F4F4F4]">
          <div className="bg-[#631363] text-[18px] md:text-xl lg:text-[26px] text-white p-2 md:p-4 font-semibold  md:rounded-3xl rounded-xl">
            Select Reviews
          </div>

          <div className="px-0 md:px-6 pt-0 md:pt-8">
            <button className="flex z-50 mt-2 gap-2 cursor-pointer h-8 md:h-10 justify-center items-center bg-[#631363] border w-fit focus:outline-none rounded-lg px-3 appearance-none">
              <Filter size={18} fill="#fff" color="#FFF" />
              <span className="text-center text-[#FFFFFF] text-[18px] md:text-xl lg:text-[26px] font-semibold">
                Filter
              </span>
            </button>
            <div className=" py-2 bg-[#F4F4F4] lg:py-16 md:rounded-[45px] my-0 md:my-6  p-0 md:p-6">
              <div className="flex gap-2 overflow-y-auto flex-col">
                {selectedReviews.map((item, index) => (
                  <div className="flex w-full gap-2" key={index}>
                    <div className="flex flex-col px-[3%] mb-0 md:mb-4 lg:px-[3%]  w-full md:w-[80%] h-full rounded-2xl md:rounded-[45px] py-1 bg-[#E0E0E0]">
                      <div className="flex w-full gap-2 justify-between">
                        <div className="flex w-full flex-col gap-0.5 py-0 md:py-2">
                          <div className="flex py-0 md:py-2 justify-start items-center">
                            <Image
                              className="w-9 h-9 md:w-12 md:h-12 lg:w-16 lg:h-16 flex-shrink-0"
                              alt="Icons"
                              width={24}
                              height={24}
                              src={item.img}
                            />
                            <div className="pl-3 w-28 md:w-32 lg:w-44 h-fit">
                              {item.svgRating}
                            </div>
                          </div>
                          <div className="font-family-Glacial_Indifference-Bold-Helvetica text-[16.04px] md:text-xl lg:text-[26px] w-full flex-shrink-0 font-bold text-[#6D6D6D]">
                            {item.title}
                          </div>
                          <div className="font-family-Glacial_Indifference-Bold-Helvetica flex  items-end py-0 pb-2 md:py-2 justify-start flex-wrap w-full text-[6px] md:text-base font-normal text-[#6D6D6D] ">
                            <div className="text-xs md:text-lg lg:text-xl pr-2 leading-normal md:leading-5 lg:leading-6">
                              {item.des}
                            </div>
                            <div className="flex border-b-2 w-full -px-8 box-content border-[#8C8C8C]" />
                            <div className="text-end  text-xs md:text-lg lg:text-xl w-full">
                              07-30-34
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center lg:flex-row mb-0 md:mb-4 gap-2 md:gap-4 w-[20%] items-center flex-col">
                      <div className="flex flex-col gap-1">
                        <div className="text-xs text-[#6D6D6D] md:text-lg lg:text-xl ">
                          Position
                        </div>
                        <Select
                          onValueChange={(value) =>
                            handlePositionChange(index, parseInt(value) - 1)
                          }>
                          <SelectTrigger className="bg-[#631363] rounded-xl text-white">
                            <SelectValue
                              className="font-bold"
                              placeholder={`${index + 1}`}
                            />
                          </SelectTrigger>
                          <SelectContent className="bg-white w-fit font-bold text-[#6D6D6D]">
                            <SelectGroup>
                              {selectedReviews.map((_, i) => (
                                <SelectItem
                                  key={i}
                                  className="hover:bg-[#E0E0E0]"
                                  value={String(i + 1)}>
                                  {i + 1}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <div className="text-xs text-[#6D6D6D] py-1 md:text-lg lg:text-xl ">
                          Select
                        </div>
                        <Switch
                          checked={item.selected || false}
                          onCheckedChange={() => handleSelectChange(index)}
                          id="ui-mode"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
