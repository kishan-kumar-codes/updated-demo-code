"use client";
import React, { FC, useState } from "react";
import LayoutView from "../Layout/LayoutView";
import MessageBox from "@/components/messageBox";
import InboxIcon from "../../assets/images/draft-mail.svg";
import Link from "next/link";

interface AllEmailsProps {}
interface tabsProbs {
  menuName: string;
  link: string;
}
const DraftEmail: FC<AllEmailsProps> = () => {
  const dummyData: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
        <div className="">
          {dummyData.map((_, ind) => (
            <Link key={ind} href="/mails/View">
              <MessageBox
                icon={InboxIcon}
                userName="Draft:Emil Crawford"
                title="Schedule a Consultation"
                message="
             We're thrilled to have you as a potential customer. We
                       invit...
             "
                time="11:44"
                type=""
              />
            </Link>
          ))}
        </div>
      }
      tabs={tabs}
      searchType="Email"
      component="EmailView"
    />
  );
};

export default DraftEmail;
