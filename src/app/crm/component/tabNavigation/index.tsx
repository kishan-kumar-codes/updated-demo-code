"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Tab {
  link: string;
  menuName: string;
  menuString: string;
}

const TabNavigation: React.FC = () => {
  const pathname = usePathname();

  const tabs: Tab[] = [
    {
      link: "/crm/companies",
      menuName: "Companies",
      menuString: "/companies",
    },
    {
      link: "/crm/contacts",
      menuName: "Contact",
      menuString: "/contacts",
    },
    {
      link: "/crm/deals",
      menuName: "Deals",
      menuString: "/deals",
    },
  ];

  // Determine if the tab is active based on the pathname
  const isActive = (tab: Tab) => {
    return pathname?.includes(tab.menuString);
  };

  return (
    <div className="flex w-full rounded-xl bg-white md:hidden">
      {tabs.map((tab, ind) => (
        <Link key={ind} href={tab.link} className="w-full">
          <div
            className={`relative w-full flex justify-center items-center text-blackOlive textBreak ripple select-none text-[14px] tab border-x border-solid border-chinesWhite cursor-pointer text-center ${
              isActive(tab) ? "bg-limeGreen" : "bg-white"
            } h-[42px] ${ind === 0 ? "rounded-l-xl" : ""} ${
              ind === tabs.length - 1 ? "rounded-r-xl" : ""
            }`}>
            {tab.menuName}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TabNavigation;
