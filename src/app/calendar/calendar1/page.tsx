"use client";

import LayoutView from "../layout";
import Searchbox from "../components/searchBox";
import Image from "next/image";
import SVGSetting from "../icons/setting.svg";
import SVGEye from "../icons/eye.svg";
import SVGCalendar from "../icons/calendar.svg";
import SVGCalendarSetting from "../icons/calendarSetting.svg";
import ThreeDot from "../icons/threeDot.svg";
import React, { useEffect, useState } from "react";
import Edit from "../icons/edit.svg";
import Toggle from "../icons/toggle.svg";
import Trash from "../icons/trash.svg";
import Share from "../icons/share.svg";
import Duplicate from "../icons/duplicate.svg";
import PopupDialog from "../components/popupDialog";
const tableColumnCss = {
  borderLeft: "1px solid #ccc",
  borderRight: "1px solid #ccc",
};

const tableRowCss = {
  borderTop: "1px solid #ccc",
  borderBottom: "1px solid #ccc",
};

const Calendar1 = () => {
  const [showOption, setShowOption] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <LayoutView
      Childrens={
        <div className="relative h-full w-full md:px-10 bg-cultured">
          <div className="px-4 lg:px-10">
            <div className="w-full md:w-[15%] lg:mr-10 float-right">
              <Searchbox Component=" Calendar" />
            </div>
            <div className="flex flex-col md:flex-row-reverse w-full gap-2">
              <div className="flex justify-end mt-5 md:flex-row-reverse gap-2 space-x-2 lg:space-x-4">
                <button
                  onClick={() => setShowPopup(true)}
                  className="flex items-center text-white py-2 lg:py-4 lg:px-6 px-4 lg:text-[20px] rounded-3xl bg-palatinatePurple text-xs   font-semibold">
                  <Image
                    src={SVGSetting}
                    className="w-4 h-4 lg:w-5 lg:h-5 mr-2"
                    alt="Setting"
                  />
                  Integrate Calendar
                </button>
                <button
                  onClick={() => setShowPopup(true)}
                  className="flex items-center text-white py-2 lg:py-4 lg:px-6 px-4 lg:text-[20px] rounded-3xl bg-palatinatePurple text-xs font-semibold">
                  <Image
                    src={SVGEye}
                    className="w-4 h-4 lg:w-5 lg:h-5 mr-2"
                    alt="Eye"
                  />
                  View Calendar
                </button>
              </div>
              <div className="flex justify-end mt-2 lg:mt-4 space-x-2 lg:space-x-4">
                <button
                  onClick={() => setShowPopup(true)}
                  className="flex items-center text-white py-2 lg:py-4 lg:px-6 px-4 lg:text-[20px] rounded-3xl bg-palatinatePurple text-xs  font-semibold">
                  <Image
                    src={SVGCalendar}
                    className="w-4 h-4 lg:w-5 lg:h-5 mr-2"
                    alt="Calendar"
                  />
                  Create Calendar
                </button>
                <button
                  onClick={() => setShowPopup(true)}
                  className="flex items-center text-white py-2 lg:py-4 lg:px-6 px-4 lg:text-[20px] rounded-3xl bg-palatinatePurple text-xs  font-semibold">
                  <Image
                    src={SVGCalendarSetting}
                    className="w-4 h-4 lg:w-5 lg:h-5 mr-2"
                    alt="Appointments"
                  />
                  Appointments
                </button>
              </div>
            </div>

            <div className="mt-5 lg:mt-10 md:bg-[#e0e0e0] h-[700px] md:mb-10 md:p-10 rounded-3xl">
              <table className="w-full">
                <thead>
                  <tr className="bg-palatinatePurple text-white text-xs lg:text-sm">
                    <th className="p-2 lg:py-4 lg:font-normal lg:text-[20px] lg:px-6 rounded-tl-3xl text-left">
                      Calendar Name
                    </th>
                    <th className="p-2 lg:py-4 lg:font-normal lg:text-[20px] lg:px-6 text-center">
                      Duration (mins)
                    </th>
                    <th className="p-2 lg:py-4 lg:font-normal lg:px-6  lg:text-[20px] text-center">
                      Status
                    </th>
                    <th className="p-2 lg:py-4 lg:font-normal lg:text-[20px] lg:px-6 text-center">
                      Date Updated
                    </th>
                    <th className="rounded-tr-3xl p-2 lg:py-3 lg:px-6"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    style={tableRowCss}
                    className="text-center text-xs lg:text-sm text-darkSilverColor bg-white">
                    <td
                      style={tableColumnCss}
                      className="py-2 px-2 lg:py-4 lg:px-6 lg:text-[20px] text-left">
                      John&apos;s Calendar
                    </td>
                    <td
                      style={tableColumnCss}
                      className="py-2 px-2 lg:py-4 lg:text-[20px] lg:px-6">
                      30
                    </td>
                    <td
                      style={tableColumnCss}
                      className="py-2 px-2 lg:py-4 lg:text-[20px] lg:px-6">
                      Active
                    </td>
                    <td
                      style={tableColumnCss}
                      className="py-2 px-2 lg:py-4 lg:text-[20px] lg:px-6">
                      08.14.2024
                    </td>
                    <td
                      style={tableColumnCss}
                      className="relative py-2 px-2 lg:py-3 lg:px-6 flex justify-center items-center">
                      <Image
                        onClick={() => setShowOption(!showOption)}
                        src={ThreeDot}
                        alt="Options"
                      />
                      {showOption && (
                        <div className="absolute top-full mt-2 end-0 lg:right-auto lg:top-full  lg:ml-2 py-3 w-36 lg:w-44 bg-white border border-palatinatePurple rounded-lg shadow-lg z-10">
                          <div className="flex items-center px-3 py-2 hover:bg-gray-100">
                            <Image src={Edit} alt="Edit" />
                            <span className="ml-2 text-xs lg:text-sm">
                              Edit
                            </span>
                          </div>
                          <div className="flex items-center px-3 py-2 hover:bg-gray-100">
                            <Image src={Duplicate} alt="Duplicate" />
                            <span className="ml-2 text-xs lg:text-sm">
                              Duplicate
                            </span>
                          </div>
                          <div className="flex items-center px-3 py-2 hover:bg-gray-100">
                            <Image src={Share} alt="Share" />
                            <span className="ml-2 text-xs lg:text-sm">
                              Share
                            </span>
                          </div>
                          <div className="flex items-center px-3 py-2 hover:bg-gray-100">
                            <Image src={Toggle} alt="Toggle" />
                            <span className="ml-2 text-xs lg:text-sm">
                              Deactivate Calendar
                            </span>
                          </div>
                          <div className="flex items-center px-3 py-2 hover:bg-gray-100">
                            <Image src={Trash} alt="Trash" />
                            <span className="ml-2 text-xs lg:text-sm text-red-500">
                              Delete Calendar
                            </span>
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
