"use client";

import React, { FC, useState } from "react";
import AllMessages from "./allMessages";
import LayoutView from "../Layout/LayoutView";
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";
import DesktopAllMessageView from "../../app/inboxDesktop/allMessages";
import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";
import { useSearchParams } from "next/navigation";
import MessagingInterface from "./chats/CreateMessage";

interface InboxViewProps {
  currentView: string;
  setSelectedMessage?: (messageId: number) => void;
  setCurrentView?: (view: string) => void;
}

interface tabsProbs {
  menuName: string;
  link: string;
}

const InboxView: FC<InboxViewProps> = ({
  currentView,
  setSelectedMessage,
  setCurrentView,
}) => {
  const [tabs, setTabs] = useState<tabsProbs[]>([
    {
      menuName: "All Messages",
      link: "",
    },
    {
      menuName: "Create Message",
      link: "",
    },
  ]);

  const searchParams = useSearchParams();
  const messageType = searchParams?.get("name");

  const handleMessageClick = (messageId: number) => {
    setSelectedMessage(messageId);
    setCurrentView("Chats");
  };
  return (
    <LayoutView
      Childrens={
        <>
          {messageType === "Create Message" ? (
            <MessagingInterface />
          ) : (
            <AllMessages onMessageClick={handleMessageClick} />
          )}
        </>
      }
      tabs={tabs}
      searchType="Conversation"
      component="InboxView"
    />
  );
};

export default InboxView;
