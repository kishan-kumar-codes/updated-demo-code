"use client";

import React, { useState } from "react";
import ContactDetails from "./contactDetails";
import user from "../../assets/images/user.svg";
import ContactInfo from "@/components/ContactInfo";
import "../../app/globals.css";
import LayoutView from "../Layout/LayoutView";

interface ContactViewProps {}

const ContactView: React.FC<ContactViewProps> = () => {
  const [contact, setContact] = useState({});
  const [showInfoDialog, setShowInfoDialog] = useState(false);
  const [tabs] = useState([
    {
      menuName: "All Calls",
      link: "/calls",
    },
    {
      menuName: "Contact",
      link: "/allContacts",
    },
  ]);

  const dummyData = [
    {
      avatar: user,
      cellNmbr: "(305) 555-3653",
      type: "Outgoing Call",
      time: "12:10",
      userName: "Lily Broke",
    },
    {
      avatar: user,
      cellNmbr: "(305) 555-3653",
      type: "Incoming Call",
      time: "12:10",
      userName: "Lily Broke",
    },
    {
      avatar: user,
      cellNmbr: "(305) 555-3653",
      type: "Missed Call",
      time: "12:10",
      userName: "Lily Broke",
    },
  ];

  const showContactInfo = (data: any) => {
    if (data) {
      setContact(data);
      setShowInfoDialog(true);
    }
  };
  return (
    <LayoutView
      tabs={tabs}
      searchType="Contact"
      component="ContactView"
      Childrens={
        <>
          <div className="relative h-full w-full">
            <div className="bg-chinesWhite w-full  text-base text-palatinatePurple pl-2 font-semibold">
              A
            </div>
            <div className="">
              {dummyData.map((info, ind) => (
                <ContactDetails
                  key={ind}
                  avatar={info.avatar}
                  cellNmbr={info.cellNmbr}
                  userName={info.userName}
                  type={info.type}
                  time={info.time}
                  showContactInfo={showContactInfo}
                />
              ))}
            </div>
            {showInfoDialog && (
              <>
                <div
                  onClick={() => setShowInfoDialog(false)}
                  className="h-full absolute w-full z-[100]  top-0 left-0"
                />
                {showInfoDialog && (
                  <ContactInfo
                    contactInfo={contact}
                    infoDialog={showInfoDialog}
                  />
                )}
              </>
            )}
          </div>
        </>
      }
    />
  );
};

export default ContactView;
