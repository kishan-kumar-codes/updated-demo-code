"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { FC, useState } from "react";

interface tabsProbs {
  menuName: string;
  link: string;
}

interface TabNavigationProps {
  tabs: tabsProbs[];
  gridColumns: number;
}

const TabNavigation: FC<TabNavigationProps> = ({ tabs = [], gridColumns }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>(
    tabs.length > 0 ? tabs[0].menuName : ""
  );

  const handleTabClick = (menuName: string) => {
    setActiveTab(menuName);
  };

  return (
    <nav
      className="flex textBreak w-12/12 w-full rounded-xl bg-white"
      aria-label="Tab Navigation">
      {tabs.map((tab, ind) => (
        <Link
          key={ind}
          className="flex textBreak w-12/12 w-full"
          href={{
            pathname: tab.link,
            query: { name: tab.menuName },
          }}>
          <div
            role="tab"
            aria-selected={searchParams?.get("name") === tab.menuName}
            onClick={() => handleTabClick(tab.menuName)}
            className={`w-full flex justify-center items-center text-blackOlive textBreak ripple select-none text-[14px] tab border-x border-solid border-chinesWhite cursor-pointer text-center ${
              searchParams?.get("name") === tab.menuName ? "bg-limeGreen" : ""
            } h-[42px]`}>
            {tab.menuName}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default TabNavigation;
