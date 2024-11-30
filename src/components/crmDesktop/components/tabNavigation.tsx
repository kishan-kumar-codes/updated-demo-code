"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback } from "react";

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

  const isActive = useCallback(
    (tab: Tab) => {
      return pathname === tab.link || pathname?.includes(tab.menuString);
    },
    [pathname]
  );

  return (
    <div className="flex w-full max-w-fit md:gap-4 h-full items-center justify-center lg:gap-14 rounded-xl bg-white">
      {tabs.map((tab, ind) => (
        <Link
          key={ind}
          href={tab.link}
          className="w-full flex items-center h-full">
          {/* <div
            className={`relative w-full flex justify-center items-center text-blackOlive textBreak ripple select-none text-[14px] tab border-x border-solid border-chinesWhite cursor-pointer text-center ${
              isActive(tab) ? "bg-limeGreen" : ""
            } h-[42px] ${ind === 0 ? "rounded-l-lg" : ""} ${
              ind === tabs.length - 1 ? "rounded-r-lg" : ""
            }`}> 
            {tab.menuName}
          </div> */}
          <div
            className={`md:text-[15px] flex h-full lg:text-[28px] items-center relative ${
              isActive(tab) ? "flex flex-col  rounded-md" : ""
            }  text-[#6D6D6D] flex gap-2 font-bold`}>
            <div className="h-full pt-3">{tab.menuName}</div>
            <div
              className={`md:h-[6px] lg:h-2  w-full ${
                isActive(tab) ? "flex flex- bg-[#631363]  rounded-md" : ""
              }  absolute bottom-0 rounded-md`}></div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TabNavigation;
