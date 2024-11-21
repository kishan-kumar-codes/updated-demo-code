"use client";

import React, { useState } from "react";
import LayoutView from "../calendar/layout/page";

const CalendarSettings = () => {
  const [rescheduleEnabled, setRescheduleEnabled] = useState(true);
  const [cancelEnabled, setCancelEnabled] = useState(true);

  return (
    <LayoutView
      Childrens={
        <div className="relative pb-[30px] h-full overflow-y-scroll w-full bg-cultured">
          <div className="mx-[18px] mt-[19px] pb-[38px] bg-chinesWhite rounded-lg">
            <div className="bg-palatinatePurple flex pl-[16px] py-[11px] text-[16px] font-bold rounded-lg text-white">
              <h4>Notifications & Additional Options</h4>
            </div>
            <div className="min-h-screen flex justify-center items-start">
              <div className="rounded-lg w-full max-w-lg p-6 pb-0">
                {/* Header */}
                <p className="text-[10px] font-bold text-darkSilverColor">
                  Configure notification and additional options
                </p>

                {/* Content */}
                <div className="mt-4 space-y-4">
                  {/* Notification Type */}
                  <div>
                    <label className="block text-[12px] text-darkSilverColor font-bold mb-2">
                      Select Type Of Notification
                    </label>
                    <select className="block w-full h-[27px]  outline-none text-[12px] text-darkSilverColor rounded-lg">
                      <option>Acknowledgement Email</option>
                      <option>Reminder Email</option>
                      <option>Summary Email</option>
                    </select>
                  </div>

                  {/* Notification Recipients */}
                  <div>
                    <label className="block text-[12px] text-darkSilverColor font-bold mb-2">
                      Who Should Receive This Notification?
                    </label>
                    <div className="space-y-2">
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

                  {/* Rescheduling and Cancellation */}
                  <div>
                    <h3 className="text-[12px] text-darkSilverColor font-bold mb-2">
                      Cancellation And Rescheduling Policy
                    </h3>
                    <div className="space-y-4">
                      {/* Rescheduling */}
                      <div className="flex items-center justify-between">
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
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] font-bold text-darkSilverColor">
                            Rescheduling link will expire
                          </span>
                          <input
                            type="number"
                            className=" h-[27px]  outline-none text-[12px] text-darkSilverColor rounded-lg w-20"
                            placeholder="10"
                          />
                          <select className="block w-full h-[27px]  outline-none text-[12px] text-darkSilverColor rounded-lg">
                            <option>Minutes</option>
                            <option>Hours</option>
                          </select>
                          <span className="text-[10px] font-bold text-darkSilverColor">
                            before the meeting
                          </span>
                        </div>
                      )}

                      {/* Cancellation */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-darkSilverColor">
                          Allow Cancellation of Meeting
                        </span>
                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={cancelEnabled}
                            onChange={() => setCancelEnabled(!cancelEnabled)}
                          />
                          <span className="slider"></span>
                        </label>
                      </div>
                      {cancelEnabled && (
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] font-bold text-darkSilverColor">
                            Cancellation link will expire
                          </span>
                          <input
                            type="number"
                            className=" h-[27px]  outline-none text-[12px] text-darkSilverColor rounded-lg w-20"
                            placeholder="10"
                          />
                          <select className="block w-full h-[27px]  outline-none text-[12px] text-darkSilverColor rounded-lg">
                            <option>Minutes</option>
                            <option>Hours</option>
                          </select>
                          <span className="text-[10px] font-bold text-darkSilverColor">
                            before the meeting
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-[12px] text-darkSilverColor font-bold mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      className="w-full  outline-none rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
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
