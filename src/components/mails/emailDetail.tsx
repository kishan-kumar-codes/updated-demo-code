"use client";
import React, { FC } from "react";
import InboxIcon from "../../assets/images/inbox-icon.svg";
import MessageBox from "../messageBox";

interface EmailDetailProps {
  time: any;
}

const EmailDetail: FC<EmailDetailProps> = ({ time }) => {
  return (
    <MessageBox
      icon={InboxIcon}
      userName="Draft:Emil Crawford"
      title="Schedule a Consultation"
      message="
    We're thrilled to have you as a potential customer. We
              invit...
    "
      time={time}
      type="email"
    />
  );
};

export default EmailDetail;
