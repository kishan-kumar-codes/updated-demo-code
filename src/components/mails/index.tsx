"use client";

import React, { FC, useEffect, useState } from "react";
import InboxEmail from "./inboxEmail";
import DraftEmail from "./draftEmail";
import SentEmail from "./sentEmail";
import { usePathname } from "next/navigation";

interface EmailViewProps {}

interface TabProps {
  menuName: string;
  link: string;
  active: boolean;
}

const EmailView: FC<EmailViewProps> = () => {
  const fullPath = usePathname();
  const path = fullPath?.split("/")[2];
  const [renderComponent, setRenderComponent] = useState<any>(path);

  const tabs: TabProps[] = [
    {
      menuName: "Inbox",
      link: "/mailPages/inboxEmail",
      active: renderComponent === "InboxEmail",
    },
    {
      menuName: "Sent",
      link: "/MailPages/SentEmail",
      active: renderComponent === "SentEmail",
    },
    {
      menuName: "Draft",
      link: "/MailPages/DraftEmail",
      active: renderComponent === "draftEmail",
    },
  ];

  const renderEmailComponent = () => {
    switch (renderComponent) {
      case "InboxEmail":
        return <InboxEmail />;
      case "SentEmail":
        return <SentEmail />;
      case "DraftEmail":
        return <DraftEmail />;
      default:
        return <InboxEmail />;
    }
  };

  return <InboxEmail />;
};

export default EmailView;
