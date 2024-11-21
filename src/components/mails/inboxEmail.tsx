"use client";
import React, { FC, useState } from "react";
import InboxIcon from "../../assets/images/sent-mail.svg";
import MessageBox from "../messageBox";
import LayoutView from "../Layout/LayoutView";
import Link from "next/link";

interface tabsProbs {
  menuName: string;
  link: string;
}

const InboxEmail = ({}) => {
  const [tabs] = useState<tabsProbs[]>([
    {
      menuName: "Inbox",
      link: "/mails/inboxEmail",
    },
    {
      menuName: "Sent",
      link: "/mails/sentEmail",
    },
    {
      menuName: "Draft",
      link: "/mails/draftEmail",
    },
  ]);
  return (
    <LayoutView
      Childrens={
        <Link href="/mails/View">
          <MessageBox
            icon={InboxIcon}
            userName="Veronica May"
            title="Availability Check"
            message="
            I'm considering your services and wanted to check on
            its current availability. Can you let me know?...
    "
            type="email"
            time=""
          />
        </Link>
      }
      tabs={tabs}
      searchType="Email"
      component="EmailView"
    />
  );
};

export default InboxEmail;
