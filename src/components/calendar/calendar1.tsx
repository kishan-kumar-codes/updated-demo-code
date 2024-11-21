"use client";

import LayoutView from "../calendar/layout/page";
import Searchbox from "../calendar/components/searchBox";
import Image from "next/image";
import SVGSetting from "./icons/setting.svg";
import SVGEye from "./icons/eye.svg";
import SVGCalendar from "./icons/calendar.svg";
import SVGCalendarSetting from "./icons/calendarSetting.svg";
import ThreeDot from "./icons/threeDot.svg";
import React, { useEffect, useState } from "react";
import Edit from "../calendar/icons/edit.svg";
import Toggle from "../calendar/icons/toggle.svg";
import Trash from "../calendar/icons/trash.svg";
import Share from "../calendar/icons/share.svg";
import Duplicate from "../calendar/icons/duplicate.svg";
import PopupDialog from "./components/popupDialog";

const talbleColumnCss: React.CSSProperties = {
  borderLeft: "1px solid #ccc",
  borderRight: "1px solid #ccc",
};

const tableRowCss: React.CSSProperties = {
  borderTop: "1px solid #ccc",
  borderBottom: "1px solid #ccc",
};

const dialogCss: React.CSSProperties = {};

const Calendar1 = () => {
  const [showOption, setShowOption] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  //showPopup

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <LayoutView
      Childrens={
        <div className="relative h-full w-full bg-cultured">
          <div className="px-[15px]">
            <Searchbox Component=" Calendar" />
            <div className="flex justify-end mt-[20px]">
              <button
                onClick={() => setShowPopup(true)}
                className="pl-[8px] text-white flex pr-[13px] rounded-3xl py-[7px] bg-palatinatePurple text-[10px] ">
                <Image
                  src={SVGSetting}
                  className="w-[13px] h-[12px] mr-[7px]"
                  alt="Setting"
                />
                Integrate Calendar
              </button>
              <button
                onClick={() => setShowPopup(true)}
                className="pl-[8px] ml-[3px] text-white flex pr-[13px] rounded-3xl py-[7px] bg-palatinatePurple text-[10px] ">
                <Image
                  src={SVGEye}
                  className="w-[13px] h-[12px] mr-[7px]"
                  alt="Eye"
                />
                View Calendar
              </button>
            </div>
            <div className="flex justify-end mt-[7px]">
              <button
                onClick={() => setShowPopup(true)}
                className="pl-[8px] text-white flex pr-[13px] rounded-3xl py-[7px] bg-palatinatePurple text-[10px] ">
                <Image
                  src={SVGCalendar}
                  className="w-[13px] h-[12px] mr-[7px]"
                  alt="Setting"
                />
                Create Calendar
              </button>
              <button
                onClick={() => setShowPopup(true)}
                className="pl-[8px] ml-[3px] text-white flex pr-[13px] rounded-3xl py-[7px] bg-palatinatePurple text-[10px] ">
                <Image
                  src={SVGCalendarSetting}
                  className="w-[13px] h-[12px] mr-[7px]"
                  alt="Setting"
                />
                Appointments
              </button>
            </div>
            <div className="mt-[20px]">
              <table>
                <thead className="">
                  <tr className="bg-palatinatePurple text-white text-[13px] py-[10px]">
                    <th className="pr-[9px] pl-[20px] py-1 rounded-tl-3xl font-normal ">
                      Calendar Name
                    </th>
                    <th className="px-[9px] font-normal">Duration (mins)</th>
                    <th className="px-[9px] font-normal">Status</th>
                    <th className="px-[9px] font-normal">Date Updated</th>
                    <th className="rounded-tr-3xl px-[20px]"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    style={tableRowCss}
                    className="text-center text-[12px]  text-darkSilverColor bg-white ">
                    <td style={talbleColumnCss} className="py-[10px] px-[10px]">
                      John&apos;s Calendar
                    </td>
                    <td style={talbleColumnCss} className="py-[10px] px-[10px]">
                      30
                    </td>
                    <td style={talbleColumnCss} className="py-[10px] px-[10px]">
                      Active
                    </td>
                    <td style={talbleColumnCss} className="py-[10px] px-[10px]">
                      08.14.2024
                    </td>
                    <td
                      style={talbleColumnCss}
                      className="relative flex justify-center items-center mt-[10px] py-[10px] px-[10px]">
                      <Image
                        onClick={() => setShowOption(!showOption)}
                        src={ThreeDot}
                        className=""
                        alt="Setting"
                      />
                      {showOption && (
                        <div className="absolute py-[11px] pl-[10px] top-[31px] right-[21px] h-[164px] w-[144px] bg-white border border-palatinatePurple rounded-lg">
                          <div className="flex justify-start mt-[] ripple">
                            <Image
                              src={Edit}
                              className="hover:text-red"
                              alt="Setting"
                            />
                            <h5 className="ml-[6px] text-[12px] hover:text-gray-400">
                              Edit
                            </h5>
                          </div>
                          <div className="flex justify-start mt-[14px]">
                            <Image
                              src={Duplicate}
                              className="hover:text-red"
                              alt="Setting"
                            />
                            <h5 className="ml-[6px] text-[12px] hover:text-gray-400">
                              Duplicate
                            </h5>
                          </div>
                          <div className="flex justify-start mt-[14px]">
                            <Image
                              src={Share}
                              className="hover:text-red"
                              alt="Setting"
                            />
                            <h5 className="ml-[6px] text-[12px] hover:text-gray-400">
                              Share
                            </h5>
                          </div>
                          <div className="flex justify-start mt-[14px]">
                            <Image
                              src={Toggle}
                              className="hover:text-red"
                              alt="Setting"
                            />
                            <h5 className="ml-[5px] text-[12px] hover:text-gray-400">
                              Deactivate Calendar
                            </h5>
                          </div>
                          <div className="flex justify-start mt-[14px]">
                            <Image
                              src={Trash}
                              className="hover:text-red"
                              alt="Setting"
                            />
                            <h5 className="ml-[6px] text-[12px] text-red">
                              Delete Calendar
                            </h5>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {showPopup && <PopupDialog handleClose={handleClose} />}
        </div>
      }
    />
  );
};

export default Calendar1;
