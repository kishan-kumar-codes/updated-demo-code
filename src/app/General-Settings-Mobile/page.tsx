import GeneralSettingsMobile from "@/components/General-Settings-Mobile/GeneralSettingsMobile";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col bg-[#F4F4F4] w-full min-h-screen ">
      <CitationNavbar isHeaderVisible={false} heading="General Settings" />
      <GeneralSettingsMobile />
    </div>
  );
};

export default page;
