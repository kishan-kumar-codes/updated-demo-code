"use client";
import React, { useState } from "react";
import "../../../app/globals.css";

import Chats from "./chats";

export default function InboxChats() {
  const [isOpen, setIsOpen] = useState(false);

  function handleDrawer(isDrawerOpen: any) {
    setIsOpen(isDrawerOpen);
  }

  return (
    <>
      <Chats messageId="test" />
    </>
  );
}
