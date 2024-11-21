"use client";

import React, { FC, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MyContext } from "@/utils/MyContext";
import globalChatIcon from "../assets/images/globalChat-icon.svg";
import globalChatIconWhite from "../assets/images/globalChat-icon-white.svg";
import InboxIcon from "../assets/images/inbox-icon.svg";
import InboxIconWhite from "../assets/images/inbox-icon-white.svg";
import messageIcon from "../assets/images/message-icon.svg";
import messageIconWhite from "../assets/images/message-icon-white.svg";
import phoneIcon from "../assets/images/phone-icon.svg";
import phoneIconWhite from "../assets/images/phone-icon-white.svg";

interface BottomNavigationProps {
  component?: string;
}

const BottomNavigation: FC<BottomNavigationProps> = ({ component }) => {
  // const { currentView, setCurrentView } = useContext(MyContext);
  const context = useContext(MyContext);
  const [activeTab, setActiveTab] = useState(component);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Update activeTab based on the current pathname
    if (pathname?.includes("/inbox")) {
      setActiveTab("InboxView");
    } else if (
      pathname?.includes("/calls") ||
      pathname?.includes("/allContacts")
    ) {
      setActiveTab("CallView");
    } else if (pathname?.includes("/mails")) {
      setActiveTab("EmailView");
    } else if (pathname?.includes("/globalChat")) {
      setActiveTab("GlobalChatsView");
    }
  }, [pathname]);

  const setTab = (tab: string) => {
    // setCurrentView(tab);
    setActiveTab(tab);

    if (tab === "EmailView") {
      router.push("/mails?name=Inbox");
    } else if (tab === "CallView") {
      router.push("/calls?name=All Calls");
    } else if (tab === "InboxView") {
      router.push("/inbox?name=All Messages");
    } else if (tab === "GlobalChatsView") {
      router.push("/globalChat?name=All Conversion");
    }
    if (context) {
      context.updateContextData({ searchTerm: tab });
    }
  };

  return (
    <nav
      className="bottom-navigation h-[46px] w-full"
      aria-label="Bottom Navigation">
      <div className="flex w-full text-darkSilverColor z-50 justify-evenly bg-limeGreen rounded-t-3xl shadow-sm shadow-blackOlive items-center">
        <button
          onClick={() => setTab("InboxView")}
          className={`call p-2 ripple ${activeTab === "InboxView" ? "active" : ""}`}
          aria-label="Inbox"
          aria-current={activeTab === "InboxView" ? "page" : undefined}>
          <Image
            src={activeTab === "InboxView" ? messageIconWhite : messageIcon}
            width={30}
            height={30}
            alt="Message Chat Icon"
          />
        </button>
        <button
          onClick={() => setTab("CallView")}
          className={`call p-2 ripple ${activeTab === "CallView" ? "active" : ""}`}
          aria-label="Calls"
          aria-current={activeTab === "CallView" ? "page" : undefined}>
          <Image
            src={activeTab === "CallView" ? phoneIconWhite : phoneIcon}
            width={30}
            height={30}
            alt="Call Icon"
          />
        </button>
        <button
          onClick={() => setTab("EmailView")}
          className={`call p-2 ripple ${activeTab === "EmailView" ? "active" : ""}`}
          aria-label="Email"
          aria-current={activeTab === "EmailView" ? "page" : undefined}>
          <Image
            src={activeTab === "EmailView" ? InboxIconWhite : InboxIcon}
            width={30}
            height={30}
            alt="Inbox Chat Icon"
          />
        </button>
        <button
          onClick={() => setTab("GlobalChatsView")}
          className={`call p-2 ripple relative ${activeTab === "GlobalChatsView" ? "active" : ""}`}
          aria-label="Global Chats"
          aria-current={activeTab === "GlobalChatsView" ? "page" : undefined}>
          <Image
            src={
              activeTab === "GlobalChatsView"
                ? globalChatIconWhite
                : globalChatIcon
            }
            width={30}
            height={30}
            alt="Global Chat Icon"
          />
        </button>
      </div>
    </nav>
  );
};

export default BottomNavigation;
