import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";

interface Tab {
  link: string;
  menuName: string;
  menuString: string;
}

const TabNavigation: FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("Contact");

  const handleTabClick = (menuName: string) => {
    setActiveTab(menuName);
  };

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

  return (
    <div className={`flex w-full rounded-xl bg-white`}>
      {tabs.map((tab, ind) => (
        <Link
          className="w-full"
          key={ind}
          href={{ pathname: tab.link, query: { name: tab.menuName } }}>
          <div
            onClick={() => handleTabClick(tab.menuName)}
            className={`relative w-full flex justify-center items-center text-blackOlive textBreak ripple select-none text-[14px]  tab border-x border-solid border-chinesWhite cursor-pointer  text-center ${
              router.query.name === tab.menuName ||
              router.pathname.includes(tab.menuString)
                ? " bg-limeGreen"
                : " "
            } h-[42px] ${ind == 0 ? "rounded-l-lg" : ""} ${
              ind === tabs.length - 1 ? "rounded-r-lg" : ""
            }`}>
            {tab.menuName}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TabNavigation;
