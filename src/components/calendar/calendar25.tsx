// components/MeetingDetailsForm.tsx
"use client";

import { useState } from "react";
import LayoutView from "../calendar/layout/page";
import MultiSelect from "../calendar/components/multiSelect";
// import TextEditor from '../calendar/components/textEditor'
import dynamic from "next/dynamic";

const TextEditor = dynamic(() => import("../calendar/components/textEditor"), {
  ssr: false, // Disable server-side rendering for this component
});

const MeetingDetailsForm: React.FC = () => {
  const [calendarName, setCalendarName] = useState("");
  const [description, setDescription] = useState("");
  const [group, setGroup] = useState("");
  const [customURL, setCustomURL] = useState("/widget/bookings/");
  const [meetingTitle, setMeetingTitle] = useState("");
  const [inviteOptimization, setInviteOptimization] = useState("availability");
  const [selectedTeamMember, setSelectedTeamMember] = useState("John Doe");
  const [priority, setPriority] = useState("Medium Priority");
  const [meetingLocation, setMeetingLocation] = useState("");
  const [eventColor, setEventColor] = useState("#FF5E5E");

  return (
    <LayoutView
      Childrens={
        <div className="relative pb-[30px] h-full overflow-y-scroll w-full bg-cultured">
          <div className="mx-[18px] mt-[19px] pb-[36px] bg-chinesWhite rounded-lg">
            <div className="bg-palatinatePurple flex pl-[16px] py-[11px] text-[16px] font-bold rounded-lg text-white">
              <h4>Meeting Details</h4>
            </div>
            <div className="p-6 max-w-lg mx-auto  rounded-lg ">
              <p className="text-[10px] text-darkSilverColor font-bold mb-4">
                These are the details which will be shown in the calendar list
                page.
              </p>

              {/* Calendar Logo Upload */}
              <div className="mb-4">
                <label className="block text-[12px] text-darkSilverColor font-bold   mb-1">
                  Calendar Logo
                </label>
                <div className="w-full h-[97px]  bg-cultured  flex flex-col items-center justify-center text-center rounded-lg">
                  <div>
                    <svg
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.0135 38.22C29.3413 38.22 37.7135 29.8478 37.7135 19.5201C37.7135 9.19236 29.3413 0.820129 19.0135 0.820129C8.68583 0.820129 0.313477 9.19236 0.313477 19.5201C0.313477 29.8478 8.68583 38.22 19.0135 38.22Z"
                        fill="#E0E0E0"
                      />
                      <path
                        d="M19.3141 20.3201C19.1141 20.1201 18.9141 19.9201 18.4141 19.9201C17.9141 19.9201 17.7142 20.1201 17.5142 20.3201L15.1141 22.72C14.9141 22.92 14.7141 23.2201 14.7141 23.5201C14.7141 24.2201 15.3141 24.72 15.9141 24.72C16.2141 24.72 16.5141 24.6201 16.7141 24.3201L17.1141 23.9201V28.3201C17.1141 29.0201 17.6141 29.5201 18.3141 29.5201C19.0141 29.5201 19.5142 29.0201 19.5142 28.3201V23.9201L19.9141 24.3201C20.1141 24.5201 20.4141 24.72 20.7141 24.72C21.3141 24.72 21.9141 24.2201 21.9141 23.5201C21.9141 23.2201 21.8142 22.92 21.5142 22.72L19.3141 20.3201ZM25.7141 15.72C25.4141 12.62 22.8141 10.22 19.7141 10.22C16.8141 10.22 14.3141 12.3201 13.8141 15.0201H13.7141C11.0141 15.0201 8.91406 17.2201 8.91406 19.8201C8.91406 22.4201 11.1141 24.6201 13.7141 24.6201H14.0142C13.8142 24.2201 13.7141 23.8201 13.7141 23.4201C13.7141 23.0201 13.8142 22.62 14.0142 22.22H13.7141C12.4141 22.22 11.3141 21.1201 11.3141 19.8201C11.3141 18.5201 12.4141 17.4201 13.7141 17.4201L15.8141 17.5201L16.2141 15.5201C16.5141 13.8201 18.0141 12.6201 19.8141 12.6201C21.7141 12.6201 23.2141 14.0201 23.4141 15.9201L23.5142 17.22L24.6141 17.8201C25.4141 18.2201 25.8141 19.0201 25.8141 19.9201C25.8141 21.2201 24.7141 22.3201 23.4141 22.3201H23.1141C23.3141 22.7201 23.4141 23.1201 23.4141 23.5201C23.4141 23.9201 23.3141 24.42 23.1141 24.72H23.4141C26.1141 24.72 28.2141 22.5201 28.2141 19.9201C28.1141 18.1201 27.1141 16.62 25.7141 15.72Z"
                        fill="#631363"
                      />
                    </svg>
                  </div>
                  <p className=" text-darkSilverColor text-[8px]  font-bold">
                    <span className="text-palatinatePurple text-[10px]">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                    <br />
                    PNG, JPEG, JPG or GIF (max. size 2.5mb)
                  </p>
                </div>
              </div>

              {/* Calendar Name */}
              <div className="mb-4">
                <label className="block text-darkSilverColor font-bold text-[12px] mb-1">
                  Calendar Name
                </label>
                <input
                  type="text"
                  value={calendarName}
                  onChange={(e) => setCalendarName(e.target.value)}
                  className="w-full px-2  outline-none h-[27px] border-none rounded-lg bg-cultured"
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block text-darkSilverColor font-bold text-[12px] mb-1">
                  Description
                </label>
                {/* <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border-none outline-none bg-cultured rounded-lg h-[164px]"
                  placeholder="Write description..."
                /> */}
                <TextEditor />
              </div>

              {/* Group */}
              <div className="mb-4">
                <label className="block text-darkSilverColor font-bold text-[12px] mb-1">
                  Group
                </label>
                <input
                  type="text"
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                  className="w-full px-3 py-2 border-none outline-none rounded-lg bg-cultured h-[27px]"
                />
              </div>

              {/* Custom URL */}
              <div className="mb-4">
                <label className="block text-darkSilverColor font-bold text-[12px] mb-1">
                  Custom URL
                </label>
                <div className="flex">
                  <input
                    type="text"
                    value={customURL}
                    onChange={(e) => setCustomURL(e.target.value)}
                    className="w-full px-3 py-2 rounded-bl-lg border-none outline-none bg-cultured rounded-tl-lg h-[27px]"
                    placeholder="/widget/bookings/"
                  />
                  {/* <input
                    type="text"
                    className="ml-2 w-1/3 px-3 py-2 border-none outline-none rounded-lg h-[27px]"
                    value="newcalendar12"
                    readOnly
                  /> */}
                  <button className="px-[15px] text-[12px] h-[27px] bg-cultured text-darkSilverColor font-bold rounded-tr-lg rounded-br-lg">
                    newcalendar12
                  </button>
                </div>
              </div>

              {/* Meeting Invite Title */}
              <div className="mb-4">
                <label className="block text-darkSilverColor font-bold text-[12px] mb-1">
                  Meeting Invite Title
                </label>
                <input
                  type="text"
                  value={meetingTitle}
                  onChange={(e) => setMeetingTitle(e.target.value)}
                  className="w-full px-3 py-2 border-none outline-none bg-cultured rounded-lg h-[27px]"
                />
              </div>

              {/* Meeting Invite Optimization */}
              <div className="mb-4  flex flex-col">
                <label className="block text-darkSilverColor font-bold text-[12px] mb-1">
                  Meeting Invite Title
                </label>
                <div className="flex">
                  <input
                    type="radio"
                    id="availability"
                    name="optimization"
                    value="availability"
                    checked={inviteOptimization === "availability"}
                    onChange={() => setInviteOptimization("availability")}
                    className="mr-2 "
                  />
                  <label
                    htmlFor="availability"
                    className="mr-4 text-[10px] text-darkSilverColor">
                    Optimize For Availability
                  </label>
                </div>
                <div className="flex mt-[16px]">
                  <input
                    type="radio"
                    id="distribution"
                    name="optimization"
                    value="distribution"
                    checked={inviteOptimization === "distribution"}
                    onChange={() => setInviteOptimization("distribution")}
                    className="mr-2"
                  />
                  <label
                    htmlFor="distribution"
                    className="text-[10px] text-darkSilverColor">
                    Optimize For Equal Distribution
                  </label>
                </div>
              </div>

              {/* Select Team Members */}
              <div className="mb-4">
                <label className="block text-[12px] text-darkSilverColor font-bold mb-1">
                  Select Team Members
                </label>
                {/* <select
                  value={selectedTeamMember}
                  onChange={(e) => setSelectedTeamMember(e.target.value)}
                  className="w-full px-3 h-[27px] text-[12px]  bg-cultured   border-none outline-none rounded-lg mt-[6px] mb-[11px]"
                >
                  <option>John Doe</option>
                  <option>Jane Doe</option>
                  <option>John Smith</option>
                  <option>Jane Smith</option>
                  <option>Jane Doe</option>
                </select> */}
                <MultiSelect
                  className="w-full  min-h-[27px] text-[12px]  bg-[#f4f4f4]   outline-none rounded-lg mt-[6px] mb-[11px]"
                  onRemove={() => null}
                  onSelect={() => null}
                  options={[
                    {
                      id: 1,
                      name: "John Doe",
                    },
                    {
                      id: 2,
                      name: "John Smith",
                    },
                    {
                      id: 3,
                      name: "Jane Doe",
                    },
                  ]}
                  selectedValues={[]}
                />
                <div className="flex items-center">
                  <select
                    value={selectedTeamMember}
                    onChange={(e) => setSelectedTeamMember(e.target.value)}
                    className="w-full px-3 h-[27px] text-[12px] border-none outline-none rounded">
                    <option>John Doe</option>
                    <option>Jane Doe</option>
                  </select>

                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="ml-2 px-3 h-[27px] text-[12px] border-none outline-none rounded">
                    <option>Medium Priority</option>
                    <option>High Priority</option>
                    <option>Low Priority</option>
                  </select>

                  <button className="ml-2 text-red">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path d="M6 19c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V7H6v12zm7-6h2v5h-2v-5zm-4 0h2v5H9v-5zm6-10h-3l-1-1H9L8 3H5v2h14V3h-3z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Meeting Location */}
              <div className="mb-4 ">
                <label className="block text-darkSilverColor text-[12px] font-bold mb-1">
                  Meeting Location
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={meetingLocation}
                    onChange={(e) => setMeetingLocation(e.target.value)}
                    className="w-[50%] px-2  outline-none h-[27px]  rounded-bl-lg bg-[#f4f4f4] rounded-tl-lg"
                  />
                  <button className=" w-[50%] px-1 text-[12px] font-bold  h-[27px] text-palatinatePurple bg-cultured rounded-br-lg rounded-tr-lg">
                    Add Display Label
                  </button>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="px-[15px] py-[8px] bg-palatinatePurple text-white font-bold rounded-lg">
                  Add Location
                </button>
              </div>

              {/* Event Color */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-1">
                  Event Color
                </label>
                <div className="flex space-x-2">
                  {[
                    "#FF5E5E",
                    "#FF965E",
                    "#FFCA5E",
                    "#FFE15E",
                    "#5EFF6B",
                    "#5EFFDA",
                    "#5EB3FF",
                    "#5E6EFF",
                    "#9C5EFF",
                    "#D25EFF",
                  ].map((color) => (
                    <div
                      key={color}
                      className={`w-[22px] h-[22px] rounded cursor-pointer`}
                      style={{ backgroundColor: color }}
                      onClick={() => setEventColor(color)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default MeetingDetailsForm;
