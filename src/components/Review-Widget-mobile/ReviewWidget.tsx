"use client";

import React, { useState } from "react";
import ReviewWidgetMobile from "./ReviewWidgetMobile";
import WidgetEmailSetting from "./Email-Settings/WidgetEmailSetting";
import KioskLinkModeSettings from "./Kiosk-Link-Mode-Settings/KioskLinkModeSettings";
import LoadingPageSettings from "./Landing-Page-Settings/LoadingPageSettings";
import SmsSettings from "./Sms-Settings/SmsSettings";

const ReviewWidget = () => {
  const [currentTab, setCurrentTab] = useState("feedback");
  return (
    <div className="flex justify-center items-center w-full ">
      {currentTab == "feedback" && (
        <ReviewWidgetMobile setCurrentTab={setCurrentTab} />
      )}
      {currentTab == "email" && (
        <WidgetEmailSetting setCurrentTab={setCurrentTab} />
      )}
      {currentTab == "sms" && <SmsSettings setCurrentTab={setCurrentTab} />}
      {currentTab == "kiosk" && <KioskLinkModeSettings />}
      {currentTab == "loading" && (
        <LoadingPageSettings setCurrentTab={setCurrentTab} />
      )}
    </div>
  );
};

export default ReviewWidget;
