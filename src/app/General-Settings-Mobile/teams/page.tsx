import GeneralInfo from "@/components/General-Settings-Mobile/GeneralInfo";
import GeneralTeams from "@/components/General-Settings-Mobile/GeneralTeams";
import React from "react";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";

const page = () => {
  return (
    <div className="flex flex-col justify-center bg-[#F4F4F4] items-center w-full ">
      <CitationNavbar heading="General Settings" isHeaderVisible={false} />
      <GeneralTeams />
    </div>
  );
};

export default page;
