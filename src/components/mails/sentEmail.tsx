"use client";
import React, { FC, useState } from "react";
import InboxIcon from "../../assets/images/sent-mail.svg";
import MessageBox from "../messageBox";
import LayoutView from "../Layout/LayoutView";
import "../../app/globals.css";
import Link from "next/link";

interface TabsProps {
  menuName: string;
  link: string;
}
interface SentEmailProps {}
const SentEmail: FC<SentEmailProps> = () => {
  const [tabs] = useState<TabsProps[]>([
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
            userName="To:Juliet Small"
            title="Thank You for Your Interest"
            message="
      Thank you for reaching out and expressing interest
      in our services. We're excited to have the...
    "
            time="8:05"
            type="email"
          />
        </Link>
      }
      tabs={tabs}
      searchType="Email"
      component="EmailView"
    />
  );
};

export default SentEmail;
