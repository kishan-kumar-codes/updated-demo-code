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

  return (
    <div className="flex w-full overflow-x-auto mx-auto pb-2 justify-center">
      {tabData.length > 0
        ? tabData.map((tab, i) => (
            <Link
              key={i}
              href={{
                pathname:
                  tab.tabName === "Invoice ID#"
                    ? "/Payment/transactions/transactionView"
                    : tab.tabUrl,
                query: {
                  name: tab.tabName,
                  ...(tab.tabName === "Invoice ID#" && {
                    id: "31ef2e8ecb6f85be80fc8c10",
                  }),
                },
              }}
              className={cn(
                "font-bold text-[27px] text-darkSilverColor w-[300px] flex h-[77px] justify-center mx-2 items-center rounded-xl",
                currentTab === tab.tabName ? "bg-limeGreen" : "bg-chinesWhite"
              )}>
              {tab.tabName}
            </Link>
          ))
        : null}
    </div>
  );
}
