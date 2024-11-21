// components/AppointmentForm.tsx
"use client";
import { useState } from "react";
import LayoutView from "../calendar/layout/page";
import ExpandableList from "./components/calendarExpension";
import TimemZoneExpension from "./components/timeZoneAccountExpension";
import DatePicker from "../calendar/components/datePicker";
import TimePicker from "../calendar/components/timer";
import EndTimerPicker from "../calendar/components/endTimePicker";

const AppointmentForm: React.FC = () => {
  const [calendar, setCalendar] = useState("Chosen Calendar");
  const [timezone, setTimezone] = useState("GMT-04:00 America/New_York (EDT)");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [appointmentTitle, setAppointmentTitle] = useState("");
  const [description, setDescription] = useState("");
  const [meetingLocation, setMeetingLocation] = useState("");
  const [appointmentStatus, setAppointmentStatus] = useState("Confirmed");
  const [status, setStatus] = useState(false);
  const [calendarDefault, setCalendarDefault] = useState(true);

  return (
    <LayoutView
      Childrens={
        <div className="relative pb-[30px] h-full overflow-y-scroll w-full bg-cultured">
          <div className="mx-[18px] mt-[19px] pb-[36px] bg-chinesWhite rounded-lg">
            <div className="bg-palatinatePurple flex pl-[16px] py-[11px] text-[16px] font-bold rounded-lg text-white">
              <h4>Schedule Appointment</h4>
            </div>
            <div className="px-[10px] max-w-lg mx-auto rounded-lg">
              {/* <h2 className="text-xl font-bold text-gray-800 mb-4">Schedule Appointment</h2> */}

              <div className="relative mt-[11px] bg-cultured px-[10px] py-[8px] flex items-center mb-4 rounded-lg">
                <div className="rounded-full bg-palatinatePurple w-12 h-12 flex items-center justify-center text-white text-lg">
                  JD
                </div>
                <div className="ml-4">
                  <p className="text-[16px] text-darkSilverColor font-bold">
                    Jane Doe
                  </p>
                  <p className="text-[16px] text-darkSilverColor">
                    +12345678912
                  </p>
                  <p className="text-[16px] text-darkSilverColor">
                    janedoe@gmail.com
                  </p>
                </div>
                <div className="absolute right-[13px] top-[9px]">
                  <span>
                    <svg
                      width="19"
                      height="21"
                      viewBox="0 0 19 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.9673 4.92062L12.6862 5.22067H12.5866C12.1889 5.22067 11.7914 4.92062 11.7914 4.42062C11.7914 4.02062 12.0894 3.7207 12.4871 3.6207L13.8796 3.5206C10.7971 1.5206 6.62083 1.9207 3.93609 4.6207C1.45022 7.0207 0.853606 10.8206 2.44457 13.9206C2.64344 14.3206 2.44427 14.7206 2.14597 14.9206C2.04653 15.0206 1.94729 15.0206 1.84786 15.0206C1.54955 15.0206 1.25105 14.8207 1.15162 14.6207C-0.737645 10.9207 0.0581256 6.5206 2.94174 3.5206C6.12366 0.320597 10.9958 -0.179305 14.6749 2.1207L14.4758 0.920622C14.3764 0.520622 14.6748 0.120598 15.0725 0.0205976C15.4703 -0.0794024 15.8679 0.220695 15.9673 0.620695L16.564 3.92062C16.6635 4.42062 16.3651 4.82062 15.9673 4.92062Z"
                        fill="#6D6D6D"
                      />
                      <path
                        d="M13.879 18.9207C12.5864 19.6207 11.0946 19.9207 9.60303 19.9207C7.8132 19.9207 6.02327 19.4207 4.53175 18.5207L4.73081 19.7208C4.83024 20.1208 4.53184 20.5208 4.1341 20.6208C4.1341 20.6208 4.03496 20.6208 3.93552 20.6208C3.53778 20.6208 3.23929 20.3207 3.23929 20.0207L2.64258 16.7208C2.64258 16.6208 2.64258 16.6207 2.64258 16.5207C2.64258 16.5207 2.64258 16.5207 2.64258 16.4207V16.3207C2.64258 16.3207 2.64268 16.2208 2.74211 16.2208L2.84164 16.1208C2.84164 16.1208 2.84174 16.1208 2.94117 16.1208H3.04022L6.32187 15.8207C6.71961 15.8207 7.11715 16.1207 7.11715 16.5207C7.11715 16.9207 6.81914 17.3207 6.4214 17.3207L5.02892 17.4207C8.1114 19.4207 12.2877 19.0207 14.9724 16.3207C17.4583 13.9207 18.0549 10.1207 16.4639 7.02068C16.2651 6.62068 16.4642 6.22068 16.7625 6.02068C17.1603 5.82068 17.558 6.02073 17.7569 6.32073C20.4416 10.8207 18.5525 16.5207 13.879 18.9207Z"
                        fill="#6D6D6D"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div></div>

              <div className="mb-4">
                <label className="block text-darkSilverColor font-bold text-[12px] mb-1">
                  Calendar
                </label>
                {/* <select
                  value={calendar}
                  onChange={(e) => setCalendar(e.target.value)}
                  className="w-full px-3 py-2 border-none text-[12px] outline-none rounded"
                >
                  <option>Chosen Calendar</option>
                  <option>Work Calendar</option>
                  <option>Personal Calendar</option>
                </select> */}
                <ExpandableList />
              </div>

              <div className="mb-4">
                <label className="block text-darkSilverColor font-bold text-[12px] mb-1">
                  Timezone (Account)
                </label>
                {/* <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full px-3 py-2 border-none outline-none text-[12px] rounded"
                >
                  <option>GMT-04:00 America/New_York (EDT)</option>
                  <option>GMT-07:00 America/Los_Angeles (PDT)</option>
                </select> */}
                <TimemZoneExpension />
              </div>

              <div className="flex items-center justify-center mb-4 rounded-tl-lg rounded-bl-lg ">
                <button
                  onClick={() => setStatus(false)}
                  className={`${status ? "bg-cultured text-palatinatePurple " : "bg-palatinatePurple text-white "}  px-4 py-2 rounded-tl-2xl rounded-bl-2xl  `}>
                  Standard
                </button>
                <button
                  onClick={() => setStatus(true)}
                  className={`${status ? "bg-palatinatePurple text-white" : "bg-cultured text-palatinatePurple"} px-4 py-2   rounded-tr-2xl rounded-br-2xl `}>
                  Custom
                </button>
              </div>

              <div className="flex items-center">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.62315 15.5205C3.54632 15.5205 0.165527 12.1205 0.165527 8.02051C0.165527 3.92051 3.54632 0.520508 7.62315 0.520508C11.7 0.520508 15.0808 3.92051 15.0808 8.02051C15.0808 12.2205 11.7 15.5205 7.62315 15.5205ZM7.62315 1.92053C4.24236 1.92053 1.55801 4.72051 1.55801 8.02051C1.55801 11.4205 4.3418 14.1206 7.62315 14.1206C11.0039 14.1206 13.6888 11.3205 13.6888 8.02051C13.6888 4.62051 11.0039 1.92053 7.62315 1.92053Z"
                      fill="#40F440"
                    />
                    <path
                      d="M7.62251 8.72058C7.22477 8.72058 6.92676 8.42051 6.92676 8.02051V5.32056C6.92676 4.92056 7.22477 4.62061 7.62251 4.62061C8.02025 4.62061 8.31875 4.92056 8.31875 5.32056V8.02051C8.31875 8.42051 8.02025 8.72058 7.62251 8.72058Z"
                      fill="#40F440"
                    />
                    <path
                      d="M7.62251 11.4205C7.22477 11.4205 6.92676 11.1206 6.92676 10.7206C6.92676 10.3206 7.22477 10.0205 7.62251 10.0205C8.02025 10.0205 8.31875 10.3206 8.31875 10.7206C8.31875 11.1206 8.02025 11.4205 7.62251 11.4205Z"
                      fill="#40F440"
                    />
                  </svg>
                </span>
                <p className="text-[10px] font-bold ml-1 text-darkSilverColor ">
                  {status
                    ? "Allows you to create an appointment with custom date range"
                    : "Allows you to create an appointment in the available slots"}
                </p>
              </div>

              {status ? (
                <>
                  <div className="mb-4 mt-[20px]">
                    <label className="block text-darkSilverColor text-[12px] font-bold mb-1">
                      Start Time
                    </label>

                    <DatePicker />
                  </div>

                  <div className="mb-4">
                    <label className="block text-darkSilverColor text-[12px] font-bold mb-1">
                      End Time
                    </label>
                    <div className="flex items-center bg-[#f4f4f4] rounded px-[10px]">
                      <span>
                        <svg
                          width="19"
                          height="22"
                          viewBox="0 0 19 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M16.0843 3.12061H14.4932V1.52051C14.4932 1.02051 14.0955 0.520508 13.4989 0.520508C12.9023 0.520508 12.5045 0.920508 12.5045 1.52051V3.12061H6.83704V1.52051C6.83704 1.02051 6.4393 0.520508 5.84269 0.520508C5.24608 0.520508 4.84834 0.920508 4.84834 1.52051V3.12061H3.25728C1.86519 3.12061 0.671875 4.22058 0.671875 5.72058V18.5205C0.671875 19.9205 1.76576 21.1206 3.25728 21.1206H15.9848C17.3769 21.1206 18.5702 20.0205 18.5702 18.5205V5.72058C18.5702 4.22058 17.4764 3.12061 16.0843 3.12061ZM16.681 18.4205C16.681 18.8205 16.3826 19.0205 16.0843 19.0205H3.35681C2.95907 19.0205 2.76011 18.7205 2.76011 18.4205V8.22058H16.681V18.4205Z"
                            fill="#631363"
                          />
                          <path
                            d="M10.914 10.5205V15.9205C10.914 16.0205 10.8143 16.1206 10.7149 16.1206H9.52149C9.42206 16.1206 9.32291 16.0205 9.32291 15.9205V12.3206C9.32291 12.3206 9.32282 12.3206 9.22338 12.3206C9.02451 12.5206 8.72601 12.6206 8.52714 12.7206C8.32827 12.8206 8.12979 12.9205 7.93092 13.0205C7.83149 13.1205 7.63232 12.9206 7.63232 12.8206V12.0205C7.63232 11.9205 7.73195 11.8206 7.83139 11.8206C8.32856 11.6206 8.7264 11.4206 8.92527 11.2206C9.22358 11.0206 9.42215 10.7205 9.62102 10.4205C9.62102 10.3205 9.72065 10.3206 9.82009 10.3206H10.8144C10.8144 10.3206 10.914 10.4205 10.914 10.5205Z"
                            fill="#631363"
                          />
                        </svg>
                      </span>
                      <select
                        value={slot}
                        onChange={(e) => setSlot(e.target.value)}
                        className="w-full px-3 py-2 outline-none bg-[#f4f4f4] text-[12px] rounded">
                        <option>3:00 PM - 3:30 PM</option>
                        <option>4:00 PM - 4:30 PM</option>
                      </select>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4 mt-[20px]">
                    <label className="block text-darkSilverColor text-[12px] font-bold mb-1">
                      Date
                    </label>
                    <div className="flex px-[10px] items-center bg-cultured rounded">
                      <svg
                        width="19"
                        height="22"
                        viewBox="0 0 19 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.0843 3.12061H14.4932V1.52051C14.4932 1.02051 14.0955 0.520508 13.4989 0.520508C12.9023 0.520508 12.5045 0.920508 12.5045 1.52051V3.12061H6.83704V1.52051C6.83704 1.02051 6.4393 0.520508 5.84269 0.520508C5.24608 0.520508 4.84834 0.920508 4.84834 1.52051V3.12061H3.25728C1.86519 3.12061 0.671875 4.22058 0.671875 5.72058V18.5205C0.671875 19.9205 1.76576 21.1206 3.25728 21.1206H15.9848C17.3769 21.1206 18.5702 20.0205 18.5702 18.5205V5.72058C18.5702 4.22058 17.4764 3.12061 16.0843 3.12061ZM16.681 18.4205C16.681 18.8205 16.3826 19.0205 16.0843 19.0205H3.35681C2.95907 19.0205 2.76011 18.7205 2.76011 18.4205V8.22058H16.681V18.4205Z"
                          fill="#631363"
                        />
                        <path
                          d="M10.914 10.5205V15.9205C10.914 16.0205 10.8143 16.1206 10.7149 16.1206H9.52149C9.42206 16.1206 9.32291 16.0205 9.32291 15.9205V12.3206C9.32291 12.3206 9.32282 12.3206 9.22338 12.3206C9.02451 12.5206 8.72601 12.6206 8.52714 12.7206C8.32827 12.8206 8.12979 12.9205 7.93092 13.0205C7.83149 13.1205 7.63232 12.9206 7.63232 12.8206V12.0205C7.63232 11.9205 7.73195 11.8206 7.83139 11.8206C8.32856 11.6206 8.7264 11.4206 8.92527 11.2206C9.22358 11.0206 9.42215 10.7205 9.62102 10.4205C9.62102 10.3205 9.72065 10.3206 9.82009 10.3206H10.8144C10.8144 10.3206 10.914 10.4205 10.914 10.5205Z"
                          fill="#631363"
                        />
                      </svg>

                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3 py-2  outline-none bg-[#f4f4f4] text-[12px]  rounded"
                      />
                    </div>
                    {/* <DatePicker /> */}
                  </div>

                  <div className="mb-4">
                    <label className="block text-darkSilverColor text-[12px] font-bold mb-1">
                      Slot
                    </label>
                    {/* <div className='flex items-center bg-white rounded px-[10px]'> */}
                    {/* <span>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.2002 0.400391C4.7002 0.400391 0.200195 4.90039 0.200195 10.4004C0.200195 15.9004 4.7002 20.4004 10.2002 20.4004C15.7002 20.4004 20.2002 15.9004 20.2002 10.4004C20.2002 4.90039 15.7002 0.400391 10.2002 0.400391ZM10.2002 17.8003C6.1002 17.8003 2.7002 14.5003 2.7002 10.3003C2.7002 6.10029 6.0002 2.80029 10.2002 2.80029C14.4002 2.80029 17.7002 6.10029 17.7002 10.3003C17.7002 14.5003 14.3002 17.8003 10.2002 17.8003Z" fill="#631363" />
                          <path d="M13.8999 9.1001H11.3999V6.6001C11.3999 5.9001 10.7997 5.40039 10.1997 5.40039C9.49971 5.40039 9 6.0001 9 6.6001V10.3003C9 11.0003 9.59971 11.5 10.1997 11.5H13.8999C14.5999 11.5 15.0996 10.9003 15.0996 10.3003C15.1996 9.70029 14.5999 9.1001 13.8999 9.1001Z" fill="#631363" />
                        </svg>

                      </span> */}
                    {/* <select
                        value={slot}
                        onChange={(e) => setSlot(e.target.value)}
                        className="w-full px-3 py-2 border-none outline-none text-[12px] rounded"
                      >
                        <option>3:00 PM - 3:30 PM</option>
                        <option>4:00 PM - 4:30 PM</option>
                      </select> */}
                    <EndTimerPicker />
                    {/* </div> */}
                    {/* <TimePicker /> */}
                  </div>
                </>
              )}

              <div className="mb-4 flex items-center">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.62315 15.5205C3.54632 15.5205 0.165527 12.1205 0.165527 8.02051C0.165527 3.92051 3.54632 0.520508 7.62315 0.520508C11.7 0.520508 15.0808 3.92051 15.0808 8.02051C15.0808 12.2205 11.7 15.5205 7.62315 15.5205ZM7.62315 1.92053C4.24236 1.92053 1.55801 4.72051 1.55801 8.02051C1.55801 11.4205 4.3418 14.1206 7.62315 14.1206C11.0039 14.1206 13.6888 11.3205 13.6888 8.02051C13.6888 4.62051 11.0039 1.92053 7.62315 1.92053Z"
                      fill="#40F440"
                    />
                    <path
                      d="M7.62251 8.72058C7.22477 8.72058 6.92676 8.42051 6.92676 8.02051V5.32056C6.92676 4.92056 7.22477 4.62061 7.62251 4.62061C8.02025 4.62061 8.31875 4.92056 8.31875 5.32056V8.02051C8.31875 8.42051 8.02025 8.72058 7.62251 8.72058Z"
                      fill="#40F440"
                    />
                    <path
                      d="M7.62251 11.4205C7.22477 11.4205 6.92676 11.1206 6.92676 10.7206C6.92676 10.3206 7.22477 10.0205 7.62251 10.0205C8.02025 10.0205 8.31875 10.3206 8.31875 10.7206C8.31875 11.1206 8.02025 11.4205 7.62251 11.4205Z"
                      fill="#40F440"
                    />
                  </svg>
                </span>
                <p className="text-[10px] text-darkSilverColor ml-1 font-bold">
                  Thu, Sep 05, 12:00 PM - 12:30 PM in contact’s timezone
                  (America/Los_Angeles)
                </p>
              </div>

              <div className="mb-4">
                {/* <label className="block text-darkSilverColor text-[12px] font-bold mb-1"></label> */}
                <input
                  type="text"
                  value={appointmentTitle}
                  placeholder="Appointment Title"
                  onChange={(e) => setAppointmentTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-[#f4f4f4] outline-none text-[12px] rounded-lg"
                />
              </div>

              <div className="mb-4">
                {/* <label className="block text-gray-700 font-bold mb-1"></label> */}
                <input
                  value={description}
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 text-[12px]  bg-[#f4f4f4] outline-none rounded-lg"
                />
              </div>

              <div className="flex items-center justify-center mb-4 rounded-tl-lg rounded-bl-lg ">
                <button
                  onClick={() => setCalendarDefault(true)}
                  className={`${!calendarDefault ? "bg-cultured text-palatinatePurple " : "bg-palatinatePurple text-white "}  px-4 py-2 rounded-tl-2xl rounded-bl-2xl  `}>
                  Calendar Default
                </button>
                <button
                  onClick={() => setCalendarDefault(false)}
                  className={`${!calendarDefault ? "bg-palatinatePurple text-white" : "bg-cultured text-palatinatePurple"} px-4 py-2   rounded-tr-2xl rounded-br-2xl `}>
                  Custom
                </button>
              </div>
              <div className="flex items-center">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.62315 15.5205C3.54632 15.5205 0.165527 12.1205 0.165527 8.02051C0.165527 3.92051 3.54632 0.520508 7.62315 0.520508C11.7 0.520508 15.0808 3.92051 15.0808 8.02051C15.0808 12.2205 11.7 15.5205 7.62315 15.5205ZM7.62315 1.92053C4.24236 1.92053 1.55801 4.72051 1.55801 8.02051C1.55801 11.4205 4.3418 14.1206 7.62315 14.1206C11.0039 14.1206 13.6888 11.3205 13.6888 8.02051C13.6888 4.62051 11.0039 1.92053 7.62315 1.92053Z"
                      fill="#40F440"
                    />
                    <path
                      d="M7.62251 8.72058C7.22477 8.72058 6.92676 8.42051 6.92676 8.02051V5.32056C6.92676 4.92056 7.22477 4.62061 7.62251 4.62061C8.02025 4.62061 8.31875 4.92056 8.31875 5.32056V8.02051C8.31875 8.42051 8.02025 8.72058 7.62251 8.72058Z"
                      fill="#40F440"
                    />
                    <path
                      d="M7.62251 11.4205C7.22477 11.4205 6.92676 11.1206 6.92676 10.7206C6.92676 10.3206 7.22477 10.0205 7.62251 10.0205C8.02025 10.0205 8.31875 10.3206 8.31875 10.7206C8.31875 11.1206 8.02025 11.4205 7.62251 11.4205Z"
                      fill="#40F440"
                    />
                  </svg>
                </span>
                <p className="text-[10px] font-bold ml-1 text-darkSilverColor ">
                  {!calendarDefault
                    ? "The user can set the meeting location specific to the appointment"
                    : "The meeting locaton will be set as configured in the calendar"}
                </p>
              </div>

              <div className="mb-4 mt-[20px]">
                <label className="block text-darkSilverColor text-[12px] font-bold mb-1">
                  Meeting Location
                </label>
                {calendarDefault ? (
                  <input
                    type="text"
                    placeholder="Calendar Default"
                    value={meetingLocation}
                    onChange={(e) => setMeetingLocation(e.target.value)}
                    className="w-full px-3 py-2 bg-[#f4f4f4]  outline-none text-[12px] rounded-lg"
                  />
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Custome"
                      value={meetingLocation}
                      onChange={(e) => setMeetingLocation(e.target.value)}
                      className="w-full px-3 py-2  outline-none bg-[#f4f4f4] text-[12px] rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="Enter Meeting Location"
                      value={meetingLocation}
                      onChange={(e) => setMeetingLocation(e.target.value)}
                      className="w-full px-3 py-2  outline-none bg-[#f4f4f4] mt-2 text-[12px] rounded-lg"
                    />
                  </>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-darkSilverColor text-[12px] font-bold mb-1">
                  Appointment Status
                </label>
                <select
                  value={appointmentStatus}
                  onChange={(e) => setAppointmentStatus(e.target.value)}
                  className="w-full px-3 bg-[#f4f4f4] py-2  outline-none text-[12px] rounded-lg">
                  <option>Confirmed</option>
                  <option>Tentative</option>
                </select>
              </div>

              <div className="flex justify-end">
                <button className=" py-2 bg-limeGreen text-[16px] w-[70px] font-bold rounded">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default AppointmentForm;
