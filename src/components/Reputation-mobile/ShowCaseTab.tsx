"use client";

import useWidgetSelectors from "@/hooks/useWidgetSelector";
import ShowcaseReview from "@/components/Reputation-mobile/ShowCaseReputation";
import SelectReviews from "@/components/Reputation-mobile/SelectReview";
import WidgetDesign from "@/components/widget-design/WidgetDesign";
import Review1 from "@/assets/images/hubspark/review1.png";
import Review2 from "@/assets/images/hubspark/review2.png";
import Review3 from "@/assets/images/hubspark/review3.png";
import { StarRatingMobile } from "@/utils/helper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { setWidget } from "@/store/slices/widgetSlice";
import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";
import { RecentGoogleIcon, RecentRevIcon } from "@/icons/marketing/icons";
import { ReputationSearchSvgsMain } from "@/svgs/review-dashboard-mobile/svgs";
import { RecentRev1Icon } from "@/icons/review-dashboard/icons";
import { useState } from "react";
import Loader from "./Loader";

const RecentArray = [
  {
    id: 1,
    logo: <RecentGoogleIcon />,
    img: Review1,
    title: "Cindy Brennan",
    des: "From the moment I called, their customer service was outstanding–friendly, responsive, and efficient.",
    svgRating: <StarRatingMobile rating={5} />,
    selected: true,
  },

  {
    id: 2,
    logo: <RecentRevIcon />,
    img: Review2,
    title: "Maddie Connor",
    des: "They exceeded my expectations in every way, and I am grateful for their dedication to excellence.  ",
    svgRating: <StarRatingMobile rating={5} />,
    selected: true,
  },
  {
    id: 3,
    logo: <RecentRev1Icon />,
    img: Review3,
    title: "James Clarke",
    respond: true,
    des: "I would recommend it for those seeking a unique atmosphere and culinary flair but with a caveat about the service and pricing.",
    svgRating: <StarRatingMobile rating={3} />,
    selected: true,
  },
];

export default function ShowCaseReview() {
  const { showCaseReview, selectReviews, widgetDesign } = useWidgetSelectors();
  const [selectedReviews, setSelectedReviews] = useState(RecentArray);
  const [bundle, setBundle] = useState<string | null>(null);
  const [bundleLoading, setBundleLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const updateWidgetState = (
    showCase: boolean,
    selectReview: boolean,
    widgetDesign: boolean
  ) => {
    dispatch(
      setWidget({
        showCaseReview: showCase,
        selectReviews: selectReview,
        widgetDesign: widgetDesign,
      })
    );
  };

  const handleCancel = () => {
    if (selectReviews) {
      updateWidgetState(true, false, false); // Go back to ShowCaseReview
    } else if (widgetDesign) {
      updateWidgetState(false, true, false); // Go back to SelectReviews
    }
  };

  const handleBundling = async () => {
    setBundleLoading(true);
    try {
      const response = await fetch("/api/widget/bundle", { method: "POST" });
      const data = await response.json(); // Type the response data
      if (data) {
        console.log(data.message || "Bundling completed");
        setBundle(data.message);
        console.log("data:", data);
      }
    } catch (error) {
      // Type the error to catch errors from fetch
      if (error instanceof Error) {
        alert("Bundling failed: " + error.message);
      } else {
        alert("Bundling failed due to an unknown error");
      }
    } finally {
      setBundleLoading(false);
    }
  };

  const handleNextOrFinish = async () => {
    if (selectReviews) {
      updateWidgetState(false, false, true); // Move to WidgetDesign
    } else if (widgetDesign) {
      await handleBundling();
      updateWidgetState(true, false, false); // Finish, go back to ShowCaseReview
    }
  };

  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      {/* {bundleLoading && <Loader/>} */}
      {showCaseReview && (
        <ShowcaseReview bundle={bundle} bundleLoading={bundleLoading} />
      )}
      {selectReviews && (
        <SelectReviews
          setSelectedReviews={setSelectedReviews}
          recentarry={selectedReviews}
        />
      )}
      {widgetDesign && <WidgetDesign selectedReviews={selectedReviews} />}

      {!showCaseReview && (
        <div className="flex sticky py-2 bg-[#F4F4F4] bottom-0 justify-between px-5 md:px-14 items-center w-full">
          {/* Cancel Button */}
          <button
            onClick={handleCancel}
            className="flex z-50 mt-2 text-[10px] md:text-base lg:text-[20px] font-semibold gap-2 cursor-pointer h-8 md:h-10 justify-center items-center bg-[#BA0416] text-white border w-fit focus:outline-none rounded-lg px-3 md:px-5">
            <span className="text-center w-fit font-semibold">
              {widgetDesign ? "Back" : "Cancel"}
            </span>
          </button>

          {/* Breadcrumb Navigation */}
          <Breadcrumb className="pt-1 whitespace-nowrap">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => updateWidgetState(false, true, false)}
                  className={`text-[10px] md:text-base lg:text-[20px] font-bold text-[#6D6D6D] tracking-tight ${selectReviews ? "underline-offset-4 underline font-semibold" : "no-underline font-normal"}`}>
                  Select Reviews
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => updateWidgetState(false, false, true)}
                  className={`text-[10px] md:text-base lg:text-[20px] font-bold text-[#6D6D6D] tracking-tight ${widgetDesign ? "underline-offset-4 md:underline-offset-[6px] underline font-semibold" : "no-underline font-normal"}`}>
                  Widget Design
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Next or Finish Button */}
          <button
            onClick={handleNextOrFinish}
            className={`${!!bundle ? "cursor-not-allowed" : ""} flex z-50 mt-2 gap-2 cursor-pointer h-8 md:h-10 justify-center text-black items-center bg-[#40F440] border w-fit focus:outline-none rounded-lg  ${widgetDesign ? "px-2 md:px-4" : "px-3 md:px-5"}`}>
            <div className="text-center items-center text-[10px] md:text-base lg:text-[20px] w-fit flex font-bold">
              {bundleLoading ? "Loading..." : widgetDesign ? "Finish" : "Next"}
              <span>
                <ChevronRight size={16} />
              </span>
            </div>
          </button>
        </div>
      )}

      <div className="flex md:hidden w-full mt-5 justify-center items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
    </div>
  );
}
