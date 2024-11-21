"use client";

import React, { FC, useEffect, useState } from "react";
import LayoutView from "../Layout/LayoutView";
import AllCalls from "./allCalls";

import "../../app/globals.css";
interface CallViewProps {}

interface tabsProbs {
  menuName: string;
  link: string;
}

const CallView: FC<CallViewProps> = () => {
  const [tabs] = useState<tabsProbs[]>([
    {
      menuName: "All Calls",
      link: "/calls",
    },
    {
      menuName: "Contact",
      link: "/allContacts",
    },
  ]);

  return (
    <LayoutView
      Childrens={
        <>
          <AllCalls />
        </>
      }
      tabs={tabs}
      searchType="Calls"
      component="CallView"
    />
  );
};

export default CallView;
