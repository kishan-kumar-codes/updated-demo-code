import React from "react";
import Header from "./header";
import BottomBar from "./bottomBar";
import HeadBar from "@/components/citations-builder/HeadBar";
import CitationNavbar from "../../../components/review-dashboard-mobile/ReviewNavbar";

interface layoutProps {
  Childrens: React.ReactNode;
  hHeading: string;
}

const index: React.FC<layoutProps> = ({ Childrens, hHeading }) => {
  function showDrawer() {}
  return (
    <div className="min-h-screen flex flex-col bg-cultured ">
      {/* <Header module="Account Setup" /> */}
      <CitationNavbar heading="Account Setup" isHeaderVisible={false} />
      <div className="hidden w-full text-center lg:text-[50px] text-[#6D6D6D] font-bold justify-center lg:flex">
        Account Setup
      </div>
      <div className="flex-1 overflow-y-auto">{Childrens}</div>
      <BottomBar />
    </div>
  );
};

export default index;
