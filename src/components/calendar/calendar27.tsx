// components/AvailabilityForm.tsx
"use client";

import { useState } from "react";
import LayoutView from "../calendar/layout/page";
import ToggleSwitch from "./components/toggleSwitch";

interface Availability {
  enabled: boolean;
  start: string;
  end: string;
}

interface AvailabilityState {
  Mon: Availability;
  Tue: Availability;
  Wed: Availability;
  Thu: Availability;
  Fri: Availability;
  Sat: Availability;
  Sun: Availability;
}

const AvailabilityForm: React.FC = () => {
  const [availability, setAvailability] = useState<AvailabilityState>({
    Mon: { enabled: false, start: "08:00am", end: "08:00pm" },
    Tue: { enabled: false, start: "08:00am", end: "08:00pm" },
    Wed: { enabled: false, start: "08:00am", end: "08:00pm" },
    Thu: { enabled: false, start: "08:00am", end: "08:00pm" },
    Fri: { enabled: false, start: "08:00am", end: "08:00pm" },
    Sat: { enabled: false, start: "Closed", end: "Closed" },
    Sun: { enabled: false, start: "Closed", end: "Closed" },
  });

  const [lookBusy, setLookBusy] = useState(false);
  const [recurringMeeting, setRecurringMeeting] = useState(false);
  const [meetingInterval, setMeetingInterval] = useState(30);
  const [meetingDuration, setMeetingDuration] = useState(30);
  const [minSchedulingNotice, setMinSchedulingNotice] = useState(1);
  const [maxBookingsPerDay, setMaxBookingsPerDay] = useState(1);
  const [maxBookingsPerSlot, setMaxBookingsPerSlot] = useState(1);
  const [preBufferTime, setPreBufferTime] = useState(30);
  const [postBufferTime, setPostBufferTime] = useState(30);

  const toggleAvailability = (day: string) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        enabled: !prev[day].enabled,
      },
    }));
  };

  return (
    <LayoutView
      Childrens={
        <div className="relative pb-[30px] h-full overflow-y-scroll w-full bg-cultured">
          <div className="mx-[18px] mt-[19px] pb-[36px] bg-chinesWhite rounded-lg">
            <div className="bg-palatinatePurple flex pl-[16px] py-[11px] text-[16px] font-bold rounded-lg text-white">
              <h4>Availability</h4>
            </div>
            <div className="px-[17px] py-[15px] max-w-lg mx-auto  rounded-lg ">
              <p className="text-[12px] text-darkSilverColor font-bold mb-4">
                Set your availability for the calendar here.
              </p>

              {/* Weekly Available Hours */}
              {Object.keys(availability).map((day) => (
                <div
                  key={day}
                  className="mb-4 flex items-center justify-between">
                  <input
                    type="checkbox"
                    checked={availability[day].enabled}
                    onChange={() => toggleAvailability(day)}
                    className="mr-2 h-[30px]"
                  />
                  <span className="w-10 text-[12px] text-darkSilverColor font-bold text-center">
                    {day}
                  </span>
                  <input
                    type="text"
                    value={availability[day].start}
                    disabled={!availability[day].enabled}
                    className="w-[68px] text-[12px]  text-darkSilverColor font-bold px-3 py-2 bg-[#f4f4f4] h-[30px] rounded mr-2"
                    onChange={(e) =>
                      setAvailability((prev) => ({
                        ...prev,
                        [day]: { ...prev[day], start: e.target.value },
                      }))
                    }
                  />
                  <input
                    type="text"
                    value={availability[day].end}
                    disabled={!availability[day].enabled}
                    className="w-[68px] text-[12px] bg-[#f4f4f4] text-darkSilverColor font-bold px-3 py-2  h-[30px] rounded mr-2"
                    onChange={(e) =>
                      setAvailability((prev) => ({
                        ...prev,
                        [day]: { ...prev[day], end: e.target.value },
                      }))
                    }
                  />
                  <button className="text-red mr-2">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M6 19c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V7H6v12zm7-6h2v5h-2v-5zm-4 0h2v5H9v-5zm6-10h-3l-1-1H9L8 3H5v2h14V3h-3z" />
                    </svg>
                  </button>
                  <button className="text-green-500">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.14222 15.6201H11.2046C12.0013 15.6201 12.6984 14.9201 12.6984 14.1201V5.02014C12.6984 4.22014 12.0013 3.52014 11.2046 3.52014H2.14222C1.34554 3.52014 0.648438 4.22014 0.648438 5.02014V14.1201C0.648438 14.9201 1.34554 15.6201 2.14222 15.6201ZM3.63601 8.82019H5.92653V6.52014H7.42031V8.82019H9.71083V10.3202H7.42031V12.6201H5.92653V10.3202H3.63601V8.82019Z"
                        fill="#6D6D6D"
                      />
                      <path
                        d="M14.2908 0.420166H5.22852V1.92017H14.2908V11.0201H15.7846V1.92017C15.7846 1.12017 15.0875 0.420166 14.2908 0.420166Z"
                        fill="#6D6D6D"
                      />
                    </svg>
                  </button>
                </div>
              ))}

              <div className="flex justify-end">
                <button className="px-[16px] py-[12px] bg-palatinatePurple text-white rounded-lg mb-4">
                  Add Date Specific Hours
                </button>
              </div>
              {/* Look Busy */}
              <div className="mb-4 flex items-center">
                <ToggleSwitch />
                <label className="w-32 ml-[15px] text-darkSilverColor text-[12px]">
                  Look Busy
                </label>
                <input
                  type="checkbox"
                  checked={lookBusy}
                  onChange={() => setLookBusy(!lookBusy)}
                  className="mr-2"
                />
                <input
                  type="number"
                  disabled={!lookBusy}
                  className="w-24 px-3  border-none outline-none h-[27px] rounded-lg bg-cultured"
                  placeholder="%"
                />
              </div>

              {/* Recurring Meeting */}
              <div className="mb-4 flex">
                <ToggleSwitch />
                <label className="block ml-[15px] text-darkSilverColor text-[12px] mb-1">
                  Recurring Meeting
                </label>
                {/* <input
                  type="checkbox"
                  checked={recurringMeeting}
                  onChange={() => setRecurringMeeting(!recurringMeeting)}
                  className="mr-2"
                /> */}
              </div>

              {/* Meeting Settings */}
              <div className="mb-4">
                <label className="block text-darkSilverColor text-[12px] font-bold mb-1">
                  Meeting Interval
                </label>
                <div className="flex text-[12px]">
                  <input
                    type="number"
                    value={meetingInterval}
                    onChange={(e) =>
                      setMeetingInterval(parseInt(e.target.value))
                    }
                    className="w-3/5 px-3 py-2  outline-none h-[27px] rounded-tl-lg  rounded-bl-lg bg-[#f4f4f4]"
                  />
                  <button className="h-[27px] text-darkSilverColor flex items-center justify-center rounded-tr-lg rounded-br-lg bg-cultured w-2/5">
                    Days
                    <span className="ml-[29px] mr-[11px]">
                      <svg
                        width="9"
                        height="5"
                        viewBox="0 0 9 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.22857 4.42017L0.0458984 0.220215H8.51068L4.22857 4.42017Z"
                          fill="#6D6D6D"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-darkSilverColor text-[12px] font-bold mb-1">
                  Meeting Duration
                </label>
                <div className="flex text-[12px]">
                  <input
                    type="number"
                    value={meetingDuration}
                    onChange={(e) =>
                      setMeetingDuration(parseInt(e.target.value))
                    }
                    className="w-3/5 px-3 py-2   outline-none h-[27px] rounded-tl-lg  rounded-bl-lg bg-[#f4f4f4]"
                  />
                  <button className="h-[27px] text-darkSilverColor flex items-center justify-center rounded-tr-lg rounded-br-lg bg-cultured w-2/5">
                    Days
                    <span className="ml-[29px] mr-[11px]">
                      <svg
                        width="9"
                        height="5"
                        viewBox="0 0 9 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.22857 4.42017L0.0458984 0.220215H8.51068L4.22857 4.42017Z"
                          fill="#6D6D6D"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-darkSilverColor text-[12px]
                 font-bold mb-1">
                  Minimum Scheduling Notice
                </label>
                <div className="flex text-[12px]">
                  <input
                    type="number"
                    value={minSchedulingNotice}
                    onChange={(e) =>
                      setMinSchedulingNotice(parseInt(e.target.value))
                    }
                    className="w-3/5 px-3 py-2 outline-none h-[27px] rounded-tl-lg  rounded-bl-lg bg-[#f4f4f4]"
                  />
                  <button className="h-[27px] text-darkSilverColor flex items-center justify-center rounded-tr-lg rounded-br-lg bg-cultured w-2/5">
                    Days
                    <span className="ml-[29px] mr-[11px]">
                      <svg
                        width="9"
                        height="5"
                        viewBox="0 0 9 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.22857 4.42017L0.0458984 0.220215H8.51068L4.22857 4.42017Z"
                          fill="#6D6D6D"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-darkSilverColor text-[12px] font-bold mb-1">
                  Maximum Bookings Per Day
                </label>
                <div className="flex bg-[#f4f4f4] rounded-lg items-center">
                  <input
                    type="number"
                    value={maxBookingsPerDay}
                    onChange={(e) =>
                      setMaxBookingsPerDay(parseInt(e.target.value))
                    }
                    className="w-full mx-2 px-3   outline-none h-[27px] rounded-lg bg-[#f4f4f4] text-center"
                  />
                  <button
                    className="w-[26px] h-[14px] flex items-center justify-center bg-gray-200 border border-gray-300 rounded"
                    onClick={() =>
                      setMaxBookingsPerDay((prev) => Math.max(prev - 1, 1))
                    }>
                    -
                  </button>
                  <button
                    className="w-[26px] ml-[4px] mr-[10px] h-[14px] flex items-center justify-center bg-gray-200 border border-gray-300 rounded"
                    onClick={() => setMaxBookingsPerDay((prev) => prev + 1)}>
                    +
                  </button>
                </div>
                {/* <div className="flex items-center">
             
                  <input
                    type="number"
                    value={maxBookingsPerDay}
                    onChange={(e) => setMaxBookingsPerDay(parseInt(e.target.value))}
                    className="w-16 mx-2 px-3  border-none outline-none h-[27px] rounded-lg bg-white text-center"
                  />
                 
                </div> */}
              </div>

              <div className="mb-4">
                <label className="block text-darkSilverColor text-[12px] font-bold mb-1">
                  Maximum Bookings Per Slot (per user)
                </label>
                <div className="flex bg-[#f4f4f4] rounded-lg items-center">
                  <input
                    type="number"
                    value={maxBookingsPerSlot}
                    onChange={(e) =>
                      setMaxBookingsPerSlot(parseInt(e.target.value))
                    }
                    className="w-full mx-2 px-3   outline-none h-[27px] rounded-lg bg-[#f4f4f4] text-center"
                  />
                  <button
                    className="w-[26px] h-[14px] flex items-center justify-center bg-gray-200 border border-gray-300 rounded"
                    onClick={() =>
                      setMaxBookingsPerSlot((prev) => Math.max(prev - 1, 1))
                    }>
                    -
                  </button>
                  <button
                    className="w-[26px] ml-[4px] mr-[10px] h-[14px] flex items-center justify-center bg-gray-200 border border-gray-300 rounded"
                    onClick={() => setMaxBookingsPerSlot((prev) => prev + 1)}>
                    +
                  </button>
                </div>
                {/*            
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 bg-gray-200 border border-gray-300 rounded"
                    onClick={() => setMaxBookingsPerSlot(prev => Math.max(prev - 1, 1))}
                  >-</button>
                  <input
                    type="number"
                    value={maxBookingsPerSlot}
                    onChange={(e) => setMaxBookingsPerSlot(parseInt(e.target.value))}
                    className="w-16 mx-2 px-3  border-none outline-none h-[27px] rounded-lg bg-whitetext-center"
                  />
                  <button
                    className="px-2 py-1 bg-gray-200 border border-gray-300 rounded"
                    onClick={() => setMaxBookingsPerSlot(prev => prev + 1)}
                  >+</button>
                </div> */}
              </div>

              {/* Buffer Times */}
              <div className="mb-4">
                <label className="block text-darkSilverColor text-[12px] font-bold mb-1">
                  Pre Buffer Time
                </label>
                <div className="flex text-[12px]">
                  <input
                    type="number"
                    value={preBufferTime}
                    onChange={(e) =>
                      setPostBufferTime(parseInt(e.target.value))
                    }
                    className="w-3/5 px-3 py-2   outline-none h-[27px] rounded-tl-lg  rounded-bl-lg bg-[#f4f4f4]"
                  />
                  <button className="h-[27px] text-darkSilverColor flex items-center justify-center bg-cultured w-2/5">
                    Minutes
                    <span className="ml-[29px] mr-[11px]">
                      <svg
                        width="9"
                        height="5"
                        viewBox="0 0 9 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.22857 4.42017L0.0458984 0.220215H8.51068L4.22857 4.42017Z"
                          fill="#6D6D6D"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-darkSilverColor text-[12px] font-bold mb-1">
                  Post Buffer Time
                </label>
                <div className="flex text-[12px]">
                  <input
                    type="number"
                    value={postBufferTime}
                    onChange={(e) =>
                      setPostBufferTime(parseInt(e.target.value))
                    }
                    className="w-3/5 px-3 py-2   outline-none h-[27px] rounded-tl-lg  rounded-bl-lg bg-[#f4f4f4]"
                  />
                  <button className="h-[27px] text-darkSilverColor flex items-center justify-center bg-cultured w-2/5">
                    Minutes
                    <span className="ml-[29px] mr-[11px]">
                      <svg
                        width="9"
                        height="5"
                        viewBox="0 0 9 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.22857 4.42017L0.0458984 0.220215H8.51068L4.22857 4.42017Z"
                          fill="#6D6D6D"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default AvailabilityForm;
