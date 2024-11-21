"use client";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

interface TabBarType {
  setSelectedTab: (tab: string) => void;
  selectedTab: string;
}

export default function MarketingTab({
  selectedTab,
  setSelectedTab,
}: TabBarType) {
  return (
    <>
      <div className="flex flex-col gap-2 pt-4 px-2">
        <div className="flex text-sm flex-grow w-full justify-between text-[#3D3D3D]">
          <div
            onClick={() => setSelectedTab("new-opportunites")}
            className={`${
              selectedTab === "new-opportunites"
                ? "bg-[#40F440]"
                : "bg-[#FFFFFF]"
            } border flex items-center justify-center text-xs md:text-[18px] text-center flex-1 h-11 rounded-tl-2xl rounded-bl-2xl flex-grow pl-1`}>
            New Opportunities
          </div>
          <div
            onClick={() => setSelectedTab("paid-campaign")}
            className={`${
              selectedTab === "paid-campaign" ? "bg-[#40F440]" : "bg-[#FFFFFF]"
            }  border flex items-center text-xs md:text-[18px] justify-center  text-center flex-1 h-11 flex-grow`}>
            Paid Campaigns
          </div>
          <div
            onClick={() => setSelectedTab("organic-campaign")}
            className={`${
              selectedTab === "organic-campaign"
                ? "bg-[#40F440]"
                : "bg-[#FFFFFF]"
            }   flex items-center justify-center text-xs md:text-[18px] text-wrap   border text-center flex-1 h-11 flex-grow`}>
            Organic Campaigns
          </div>
          <div
            onClick={() => setSelectedTab("follow-up")}
            className={`${
              selectedTab === "follow-up" ? "bg-[#40F440]" : "bg-[#FFFFFF]"
            }  rounded-tr-2xl flex items-center justify-center text-xs md:text-[18px] text-wrap  rounded-br-2xl border text-center flex-1 h-11 flex-grow`}>
            Follow up Campaigns
          </div>
        </div>
      </div>
    </>
  );
}
