"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface TabProps {
  tabName: string;
  tabUrl: string;
}

interface TabNavigationProps {
  tabData: TabProps[];
}

export default function TabNavigation({ tabData = [] }: TabNavigationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentTab = searchParams?.get("name");
  const currentTabName = searchParams?.get("tabName");

  return (
    <div className="flex w-full overflow-x-auto mx-auto pb-2 justify-center">
      {tabData.length > 0
        ? tabData.map((tab, i) => (
            <Link
              key={i}
              href={{
                pathname:
                  tab.tabName === "Invoice ID#"
                    ? "/Payment/transactions"
                    : tab.tabUrl,
                query: {
                  name: tab.tabName,
                },
              }}
              className={cn(
                "font-bold text-[27px] text-darkSilverColor w-[300px] flex h-[77px] justify-center mx-2 items-center rounded-xl",
                currentTab === tab.tabName || currentTabName === tab.tabName
                  ? "bg-limeGreen"
                  : "bg-chinesWhite"
              )}>
              {tab.tabName}
            </Link>
          ))
        : null}
    </div>
  );
}
