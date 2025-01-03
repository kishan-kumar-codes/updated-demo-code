"use client";

import React, { useState } from "react";
import LayoutView from "../layout";
import SideBarMeeting from "../components/SideBarMeeting";

const CalendarSettings = () => {
  const [rescheduleEnabled, setRescheduleEnabled] = useState(true);
  const [cancelEnabled, setCancelEnabled] = useState(true);

  return (
    <LayoutView
      Childrens={
        <div className="relative flex pb-[30px] h-full overflow-y-scroll w-full bg-cultured">
          <div className="hidden md:block">
            <SideBarMeeting />
          </div>
          <div className="mx-[18px] flex-1 h-fit mt-[19px] pb-[38px] bg-chinesWhite rounded-lg">
            <div className="bg-palatinatePurple flex pl-[16px] py-[11px] text-[16px] font-bold rounded-lg text-white">
              <h4>Notifications & Additional Options</h4>
            </div>
            <div className="min-h-screen flex justify-center lg:justify-start lg:px-4 items-start">
              <div className="rounded-lg w-full  px-6 pb-0">
                {/* Header */}
                <div className="w-full border-b py-3">
                  <p className="text-[13px] font-bold  text-darkSilverColor">
                    Configure notification and additional options
                  </p>
                </div>

                {/* Content */}
                <div className="mt-4 space-y-4">
                  {/* Notification Type */}
                  <div className="border-b w-full pb-5">
                    <label className="block text-[12px] text-darkSilverColor font-bold mb-2">
                      Select Type Of Notification
                    </label>
                    <select className="block w-full lg:w-[300px] h-[27px] bg-[#f4f4f4]  outline-none text-[12px] text-darkSilverColor rounded-lg">
                      <option>Acknowledgement Email</option>
                      <option>Reminder Email</option>
                      <option>Summary Email</option>
                    </select>
                  </div>

                  {/* Notification Recipients */}
                  <div>
                    <div className="space-y-2">
                      <div className="py-5 border-b">
                        <label className="block text-[12px] text-darkSilverColor font-bold mb-2">
                          Who Should Receive This Notification?
                        </label>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-[12px] w-[12px] text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <span className="ml-2 text-[10px] font-bold text-darkSilverColor">
                            Contact
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-[12px] w-[12px] text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <span className="ml-2 text-[10px] font-bold text-darkSilverColor">
                            Assigned User
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-[12px] w-[12px] text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <span className="ml-2 text-[10px] font-bold text-darkSilverColor">
                            Additional Emails
                          </span>
                        </div>
                      </div>

                      <div className="py-5 border-b">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-[12px] w-[12px] text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <span className="ml-2 text-[10px] font-bold text-darkSilverColor">
                            Allow Google / Outlook Calendar to send invitation &
                            update emails to attendees.
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-[12px] w-[12px] text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <span className="ml-2 text-[10px] font-bold text-darkSilverColor">
                            Assign contacts to their respective calendar team
                            members each time an appointment is booked.
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Rescheduling and Cancellation */}
                  <div className="py-5 border-b">
                    <h3 className="text-[12px] text-darkSilverColor font-bold mb-2">
                      Cancellation And Rescheduling Policy
                    </h3>
                    <div className="space-y-4">
                      {/* Rescheduling */}
                      <div className="flex items-center justify-between lg:flex-row-reverse lg:justify-end gap-4">
                        <span className="text-[10px] font-bold text-darkSilverColor">
                          Allow Rescheduling of Meeting
                        </span>
                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={rescheduleEnabled}
                            onChange={() =>
                              setRescheduleEnabled(!rescheduleEnabled)
                            }
                          />
                          <span className="slider"></span>
                        </label>
                      </div>
                      {rescheduleEnabled && (
                        <div className="flex items-center justify-between lg:w-[60%] space-x-2 lg:space-x-4">
                          <span className="text-[10px] font-bold text-darkSilverColor">
                            Rescheduling link will expire
                          </span>

                          <div className="flex space-x-2 lg:space-x-0 rounded-lg w-full lg:w-fit overflow-hidden">
                            <input
                              type="number"
                              className=" h-[27px]  outline-none text-[12px] lg:w-[100px] text-darkSilverColor rounded-lg lg:rounded-none w-20"
                              placeholder="10"
                            />
                            <select className="block w-full h-[27px] lg:w-[100px] border-l lg:bg-[#f4f4f4] lg:rounded-none outline-none text-[12px] text-darkSilverColor rounded-lg">
                              <option>Minutes</option>
                              <option>Hours</option>
                            </select>
                          </div>

                          <span className="text-[10px] font-bold text-darkSilverColor">
                            before the meeting
                          </span>
                        </div>
                      )}

                      {/* Cancellation */}
                      <div className="flex items-center justify-between lg:flex-row-reverse lg:justify-end gap-4">
                        <span className="text-[10px] font-bold text-darkSilverColor">
                          Allow Cancellation of Meeting
                        </span>
                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={cancelEnabled}
                            onChange={() => setCancelEnabled(!cancelEnabled)}
                            className=""
                          />
                          <span className="slider"></span>
                        </label>
                      </div>
                      {cancelEnabled && (
                        <div className="flex items-center justify-between lg:w-[60%] space-x-2 lg:space-x-4">
                          <span className="text-[10px] font-bold text-darkSilverColor">
                            Cancellation link will expire
                          </span>

                          <div className="flex space-x-2 lg:space-x-0 rounded-lg w-full lg:w-fit overflow-hidden">
                            <input
                              type="number"
                              className=" h-[27px]  outline-none text-[12px] lg:w-[100px] text-darkSilverColor rounded-lg lg:rounded-none w-20"
                              placeholder="10"
                            />
                            <select className="block w-full h-[27px] border-l lg:w-[100px] lg:bg-[#f4f4f4] lg:rounded-none outline-none text-[12px] text-darkSilverColor rounded-lg">
                              <option>Minutes</option>
                              <option>Hours</option>
                            </select>
                          </div>

                          <span className="text-[10px] font-bold text-darkSilverColor">
                            before the meeting
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="lg:w-[60%] py-5">
                    <label className="block text-[12px] text-darkSilverColor font-bold mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      className="w-full py-5 outline-none bg-[#f4f4f4] rounded-xl shadow-sm focus:ring-purple-500 focus:border-purple-500"
                      rows={3}></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default CalendarSettings;
