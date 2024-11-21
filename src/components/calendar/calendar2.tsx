"use client";

import LayoutView from "../calendar/layout/page";
import React, { useEffect, useState } from "react";
import Google from "../calendar/icons/google.svg";
import Image from "next/image";

const talbleColumnCss: React.CSSProperties = {
  borderLeft: "1px solid #ccc",
  borderRight: "1px solid #ccc",
};

const tableRowCss: React.CSSProperties = {
  borderTop: "1px solid #ccc",
  borderBottom: "1px solid #ccc",
};

const dialogCss: React.CSSProperties = {};

const Calendar2 = () => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <LayoutView
      Childrens={
        <div className="relative h-full w-full bg-cultured">
          <div className="px-[15px] mt-[21px] flex flex-col items-center">
            <div className="w-[82px] h-[82px] flex justify-center items-center rounded-full bg-chinesWhite">
              <Image src={Google} alt="" />
            </div>
            <h5 className="text-[12px] mt-[21px] text-darkSilverColor">
              Google Account (johndoe@companyname.com)
            </h5>
            <button
              onClick={() => setShowDialog(true)}
              className="py-[12px] px-[15px] bg-palatinatePurple rounded-xl font-bold text-white text-[12px] mt-[21px]">
              Sign In With Google
            </button>
          </div>
          {showDialog && (
            <div
              onClick={() => setShowDialog(false)}
              className="fixed top-0 left-0 transparentBg w-full h-full"></div>
          )}
        </div>
      }
    />
  );
};

export default Calendar2;
