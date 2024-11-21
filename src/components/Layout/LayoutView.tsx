"use client";

import TabNavigation from "../../components/tabNavigation";
import React, { ReactNode, useContext, useState } from "react";
import BottomNavigation from "../../components/bottomNavigation";
import SearchBox from "../../components/searchBox";
import Image from "next/image";
import DialPad from "../../assets/images/dialpad-icon.svg";
import NewMessage from "../../assets/images/new-message.svg";
import { MyContext } from "@/utils/MyContext";
import ScreenView from "../../components/ScreenView";
import FilterView from "../../components/filterView";
import Chat from "@/app/inboxDesktop/inbox/chat";

import "../../app/globals.css";
import Header from "@/components/header";
import Link from "next/link";

interface tabsInterface {
  menuName: string;
  link: string;
}

interface EmailViewProps {
  Childrens: ReactNode;
  tabs: tabsInterface[];
  searchType: string;
  component: string;
}

const EmailView: React.FC<EmailViewProps> = ({
  Childrens,
  tabs,
  searchType,
  component,
}) => {
  // const { currentView, setCurrentView } = useContext(MyContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showFilterDialog, setShowFilterDialog] = useState<boolean>(false);

  function handleDrawer(isDrawerOpen: boolean) {
    setIsOpen(isDrawerOpen);
  }

  const handleFilters = (isShow: boolean) => {
    setShowFilterDialog(isShow);
  };

  return (
    <ScreenView
      Childrens={
        <div className="relative flex flex-col w-full ">
          <div className="mt-4 px-5 lg:max-w-[40%] flex items-center">
            <SearchBox Component={searchType} />
            <button
              onClick={() => handleFilters(true)}
              className="ml-[7px]  w-[63px] flex items-center justify-around px-[8px] py-1  text-[12px] rounded-lg bg-palatinatePurple text-white ">
              <span className="mr-[6px]">
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.6999 1.19995C10.5999 0.899951 10.3 0.800049 9.99998 0.800049H1.19993C0.899926 0.800049 0.699975 0.999951 0.499975 1.19995C0.399975 1.49995 0.400073 1.8 0.600073 2L4.10007 6.1001V9.30005C4.10007 9.40005 4.20002 9.6001 4.30002 9.6001C4.40002 9.6001 4.39998 9.6001 4.49998 9.6001C4.59998 9.6001 4.59993 9.6 4.69993 9.5L6.90012 8C7.00012 7.9 7.10007 7.79995 7.10007 7.69995V6L10.6001 1.90015C10.8001 1.70015 10.7999 1.39995 10.6999 1.19995Z"
                    fill="white"
                  />
                </svg>
              </span>
              Filter
            </button>
          </div>

          <div className="w-full mt-4 lg:max-w-[40%] flex px-5">
            <TabNavigation tabs={tabs} gridColumns={0} />
          </div>
          <div className="flex-grow overflow-x-hidden flex overflow-y-auto mt-[14px] px-5">
            <div className="lg:min-w-[40%]">{Childrens}</div>
            <div className="hidden lg:flex fixed right-0 top-0 lg:min-w-[50%]">
              <Chat />
            </div>
          </div>

          {/* <div className="absolute z-10 right-4 px-3 bottom-20 key-btn flex justify-center items-center bg-palatinatePurple text-white w-12 h-12 rounded-full">
            {component === "CallView" ? (
              <Link href="./calls/callDialer">
                <Image
                  alt={"dialpad"}
                  className="filter invert"
                  src={DialPad}
                />
              </Link>
            ) : searchType === "Calls" ? (
              <Link href="/callPages/createContact">
                <Image alt={"New message"} width={16} src={NewMessage} />
              </Link>
            ) : component === "EmailView" ? (
              <Link href="/mails/newEmail">
                <Image alt={"New message"} width={16} src={NewMessage} />
              </Link>
            ) : component === "ContactView" ? (
              <Link href="/calls/createContact">
                <Image alt={"New message"} width={16} src={NewMessage} />
              </Link>
            ) : (
              <Link href="/globalChat/sendMessage">
                <Image alt={"New message"} width={16} src={NewMessage} />
              </Link>
            )}
          </div> */}

          <BottomNavigation />
          {showFilterDialog ? (
            <div className="h-full lg:h-[80vh] w-full flex flex-row-reverse absolute  right-0 lg:translate-y-[10%] lg:transform lg:translate-x-[-60%]">
              <div
                onClick={() => handleFilters(false)}
                className="flex-grow sm:transparentBg h-full"
              />
              <FilterView />
            </div>
          ) : (
            ""
          )}
        </div>
      }
    />
  );
};

export default EmailView;
