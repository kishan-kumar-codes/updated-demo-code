"use client";

import LayoutView from "../layout";
import React, { useState } from "react";
import Google from "../icons/google.svg";
import Image from "next/image";
import { LinkCalendar } from "../components/linkCalendarPopup";
import { ConflictCalendar } from "../components/conflictCalendar";
import CalendarModal from "../components/popupDialog";

const Calendar2: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <LayoutView
      Childrens={
        <div className="h-full flex items-center justify-center w-full bg-cultured">
          <div className="px-[15px] mt-[21px]  flex flex-col items-center">
            <div className="w-[82px] h-[82px] lg:h-[110px]  lg:w-[110px] flex justify-center items-center rounded-full bg-chinesWhite">
              <Image src={Google} alt="" />
            </div>
            <h5 className="text-[12px] lg:text-[22px] mt-[21px] text-darkSilverColor">
              Google Account (johndoe@companyname.com)
            </h5>
            <button
              onClick={() => setShowPopup(true)}
              className="py-[12px] px-[15px] font-bold lg:text-[22px] bg-palatinatePurple rounded-lg text-white text-[12px] mt-[21px]">
              Sign In With Google
            </button>
          </div>

          {showPopup && step == 1 && (
            <div className="w-full bg-black h-full fixed bg-opacity-20 top-0">
              <LinkCalendar
                handleClose={() => setShowPopup(false)}
                handleStep={() => setStep(2)}
              />
            </div>
          )}
          {showPopup && step == 2 && (
            <div className="w-full bg-black h-full fixed bg-opacity-20 top-0">
              <ConflictCalendar
                handleClose={() => setShowPopup(false)}
                handleStep={() => setStep(3)}
              />
            </div>
          )}
          {showPopup && step == 3 && (
            <div className="w-full bg-black h-full fixed bg-opacity-20 top-0">
              <CalendarModal handleClose={() => setShowPopup(false)} />
            </div>
          )}
        </div>
      }
    />
  );
};

export default Calendar2;
