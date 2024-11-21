"use client";

import React, { FC, useState } from "react";
import AllGlobalChats from "./AllGlobalChats";
import LayoutView from "../Layout/LayoutView";
import DesktopInboxView from "../../app/inboxDesktop/inbox";
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";

import "../../app/globals.css";

interface GlobalChatsViewProps {}

interface tabsProbs {
  menuName: string;
  link: string;
}

const GlobalChatsView: FC<GlobalChatsViewProps> = () => {
  const [tabs, setTabs] = useState<tabsProbs[]>([
    {
      menuName: "All Conversion",
      link: "",
    },
  ]);
  const isMobile = useClientMediaQuery("(max-width: 769px)");
  if (isMobile) {
    return (
      <LayoutView
        Childrens={<AllGlobalChats />}
        tabs={tabs}
        searchType="Conversation"
        component="GlobalChatsView"
      />
    );
  } else
    return (
      <DesktopInboxView
        currentView=""
        setCurrentView={() => null}
        setSelectedMessage={() => null}
      />
    );
};

export default GlobalChatsView;
