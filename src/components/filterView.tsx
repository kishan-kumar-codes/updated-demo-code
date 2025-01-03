import React, { useState } from "react";
import ExpensionPanel from "./expansionPanel";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { Checkbox } from "./ui/checkbox";
import { DatePickerWithRange } from "./CustomComponents/MiniDatePickerRange";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import zIndex from "@mui/material/styles/zIndex";

const FilterView = () => {
  const [active, setActive] = useState("Messages");
  const [locationActive, setLocationActive] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [timePeriodActive, setTimePeriodActive] = useState("Time Period");
  const [assignTo, setAssignTo] = useState("Assign To");
  const [reviewResourse, setreviewResourse] = useState(false);
  const [actions, setActions] = useState("Responded");
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [lastIncMsg, setLastIncMsg] = useState("Last incoming message");
  const [score, setScore] = useState("Experience Score");
  const [filterMenu, setFilterMenu] = useState({
    messages: ["All", "Messages", "Leads", "Reviews", "Surveys"],
    review: ["All", "Google", "Facebook", "HubSpark", "Direct Feedback"],
    reviewDate: [
      "All Time",
      "Yesterday",
      "Past 7 Days",
      "This Month",
      "Past 30 Days",
    ],

    timePeriod: [
      "All Time",
      "Yesterday",
      "Past 7 Days",
      "This Month",
      "Past 30 Days",
      "Past 3 Months",
      "Past 6 Months",
      "This Year",
      "Past 12 Months",
    ],
    location: [
      "Select All",
      "Company Location 1",
      "Company Location 2",
      "Company Location 3",
      "Company Location 4",
      "Company Location 5",
    ],
    assignTo: ["All", "Unassigned", "Billing", "Scheduling", "Custom"],
    surveyName: [
      "All",
      "Standard Survey",
      "Instant Feedback Pulse-AI",
      "Lush Landscaping Services",
      "Custom",
    ],
    surveyScore: ["All", "9-10", "7-8", "0-6", "NA"],
    lastIncMessage: [
      "All",
      "Apple Messages",
      "Appointment",
      "Contact Us",
      "Email",
      "Facebook",
      "Instagram",
      "Google",
      "Text",
      "Voice Call",
    ],
    actions: [
      "All",
      "Responded",
      "Not Responded",
      "Featured",
      "No Featured",
      "Updated",
    ],
    leadScore: [
      "All",
      "Apple Messages",
      "Appointment",
      "Webforms",
      "Email",
      "Facebook",
      "Instagram",
      "Google",
      "Referral",
      "Text",
      "Voice Call",
    ],
    ratings: [
      "All",
      "No Ratings",
      "1 Star",
      "2 Star",
      "3 Star",
      "4 Star",
      "5 Star",
    ],
    tag: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"],
    experienceScore: ["All", "9-10", "7-8", "0-6", "Unknown"],
  });

  // const handleDrawer = () => {
  //     showDrawer((prev: any) => !prev);
  // };

  return (
    <div className="absolute z-[100] pt-[16px] overflow-y-auto flex flex-col px-[8px] h-full lg:rounded-xl w-[241px] lg:w-[24%] bg-cultured border border-palatinatePurple">
      <div className=" mb-[16px] flex justify-around">
        <button className="border border-palatinatePurple py-[5px] px-[11px] text-[12px] font-bold text-darkSilverColor rounded-lg lg:text-[16px]">
          Clear
        </button>
        <button className=" bg-palatinatePurple py-[5px] px-[6px] text-[12px] lg:text-[16px] font-bold text-white rounded-lg">
          Save As
        </button>
        <button className="flex items-center  py-[5px] px-[6px] text-[12px] lg:text-[16px] bg-chinesWhite font-bold text-darkSilverColor rounded-lg">
          <span>
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.0002 1.30005C10.9002 1.00005 10.6 0.899902 10.3 0.899902H1.50022C1.20022 0.899902 1.00002 1.10005 0.800024 1.30005C0.700024 1.60005 0.700122 1.89985 0.900122 2.09985L4.40012 6.19995V9.3999C4.40012 9.4999 4.50007 9.69995 4.60007 9.69995C4.70007 9.69995 4.70002 9.69995 4.80002 9.69995C4.90002 9.69995 4.90022 9.69985 5.00022 9.59985L7.20017 8.09985C7.30017 7.99985 7.40012 7.90005 7.40012 7.80005V6.09985L10.9001 2C11.1001 1.8 11.1002 1.50005 11.0002 1.30005Z"
                fill="#631363"
              />
            </svg>
          </span>
          Filter By
        </button>
      </div>
      <ExpensionPanel
        title={active}
        children={
          <div>
            {filterMenu.messages.map((value) => (
              <h5
                onClick={() => setActive(value)}
                className={`text-[12px] lg:text-[16px] mt-[8px] ${
                  value === active
                    ? "text-palatinatePurple font-bold flex justify-between "
                    : "text-darkSilverColor"
                } `}>
                {value}
                {value === active && (
                  <span>
                    <svg
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.00039 1.7001L4.20034 6.50015C3.90034 6.80015 3.40034 6.80015 3.20034 6.50015L0.800195 4.10012C0.500195 3.80012 0.500195 3.40012 0.800195 3.10012C0.900195 3.00012 1.1002 2.90017 1.3002 2.90017C1.5002 2.90017 1.6002 3.00012 1.8002 3.10012L3.70034 5.00015L8.00039 0.700098C8.30039 0.400098 8.70039 0.400098 9.00039 0.700098C9.30039 0.900098 9.30039 1.4001 9.00039 1.7001Z"
                        fill="#631363"
                      />
                    </svg>
                  </span>
                )}
              </h5>
            ))}
          </div>
        }
      />
      <ExpensionPanel title="State" children={<div></div>} />
      <ExpensionPanel title="City" children="" />
      <ExpensionPanel
        title="Location"
        children={
          <div className="">
            <div className="w-[172px]  bg-cultured p-[5px] rounded-lg flex items-center">
              <span>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.71313 4.63184C8.71313 5.4562 8.3792 6.28061 7.8783 6.85766C7.79481 6.9401 7.79481 7.10489 7.8783 7.18733L7.96166 7.26984C8.87998 8.0942 9.71477 9.00095 10.6331 9.90775C10.7166 9.99018 10.8001 10.0727 10.8836 10.1551C11.0505 10.4024 11.0507 10.6496 10.8002 10.8145C10.6333 11.0618 10.2993 11.0618 10.1323 10.8145C9.88186 10.6496 9.71493 10.4024 9.54797 10.2375C8.79662 9.49559 8.0451 8.75361 7.29375 8.01168C7.12678 7.84681 7.0433 7.84683 6.87633 7.92927C4.87273 9.33068 2.11793 8.75361 0.782196 6.77515C-0.637025 4.79669 -0.0527214 2.07637 1.95088 0.757398C2.78572 0.180347 3.70396 -0.0669799 4.78924 0.0154558C6.87633 0.180327 8.71313 2.07633 8.71313 4.63184ZM4.28846 7.68202C6.1251 7.76446 7.62776 6.28059 7.79473 4.46701C7.87822 2.65342 6.37559 1.16952 4.53895 1.00464C4.45547 1.00464 4.45531 1.00464 4.37182 1.00464C2.53519 1.08708 1.03248 2.571 1.03248 4.38459C1.03248 6.19818 2.53531 7.59959 4.28846 7.68202Z"
                    fill="#6D6D6D"
                  />
                </svg>
              </span>
              <input
                className="bg-cultured text-darkSilverColor h-[11px] py-2 outline-none ml-[5px] w-full"
                type="text"
                placeholder="Search"
              />
            </div>
            {filterMenu.location.map((value) => (
              <div className="flex items-center mt-[12px] ">
                {/* <input
                  className=""
                  onInput={(e) =>
                    setLocationActive(e.currentTarget.checked ? value : "")
                  }
                  type="checkbox"
                /> */}
                <Checkbox className="border  border-slate-400 rounded-sm" />
                <h5
                  className={`ml-[6px] text-[12px] lg:text-[16px] font-normal ${
                    value === locationActive
                      ? "text-palatinatePurple"
                      : "text-darkSilverColor"
                  } `}>
                  {value}
                </h5>
              </div>
            ))}

            <div className="flex justify-end mt-[14px]">
              <button className="border border-palatinatePurple text-palatinatePurple text-[11px] lg:text-[14px] font-bold py-[5px] px-[14px] rounded-lg">
                Clear
              </button>
              <button className="ml-[4px] bg-limeGreen text-darkSilverColor text-[11px] lg:text-[14px] font-bold py-[5px] px-[14px] rounded-lg">
                Apply
              </button>
            </div>
          </div>
        }
      />
      {active === "Reviews" && (
        <>
          <ExpensionPanel
            title="Review Source"
            children={
              <div className="">
                <div className="w-[172px]  bg-cultured p-[5px] rounded-lg flex items-center">
                  <span>
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.71313 4.63184C8.71313 5.4562 8.3792 6.28061 7.8783 6.85766C7.79481 6.9401 7.79481 7.10489 7.8783 7.18733L7.96166 7.26984C8.87998 8.0942 9.71477 9.00095 10.6331 9.90775C10.7166 9.99018 10.8001 10.0727 10.8836 10.1551C11.0505 10.4024 11.0507 10.6496 10.8002 10.8145C10.6333 11.0618 10.2993 11.0618 10.1323 10.8145C9.88186 10.6496 9.71493 10.4024 9.54797 10.2375C8.79662 9.49559 8.0451 8.75361 7.29375 8.01168C7.12678 7.84681 7.0433 7.84683 6.87633 7.92927C4.87273 9.33068 2.11793 8.75361 0.782196 6.77515C-0.637025 4.79669 -0.0527214 2.07637 1.95088 0.757398C2.78572 0.180347 3.70396 -0.0669799 4.78924 0.0154558C6.87633 0.180327 8.71313 2.07633 8.71313 4.63184ZM4.28846 7.68202C6.1251 7.76446 7.62776 6.28059 7.79473 4.46701C7.87822 2.65342 6.37559 1.16952 4.53895 1.00464C4.45547 1.00464 4.45531 1.00464 4.37182 1.00464C2.53519 1.08708 1.03248 2.571 1.03248 4.38459C1.03248 6.19818 2.53531 7.59959 4.28846 7.68202Z"
                        fill="#6D6D6D"
                      />
                    </svg>
                  </span>
                  <input
                    className="bg-cultured text-darkSilverColor h-[11px] py-2 outline-none ml-[5px] w-full"
                    type="text"
                    placeholder="Search"
                  />
                </div>
                {filterMenu.review.map((value) => (
                  <div className="flex items-center mt-[12px] ">
                    {/* <input
                  className=""
                  onInput={(e) =>
                    setLocationActive(e.currentTarget.checked ? value : "")
                  }
                  type="checkbox"
                /> */}
                    <Checkbox className="border  border-slate-400 rounded-sm" />
                    <h5
                      className={`ml-[6px] text-[12px] lg:text-[16px] font-normal ${
                        value === locationActive
                          ? "text-palatinatePurple"
                          : "text-darkSilverColor"
                      } `}>
                      {value}
                    </h5>
                  </div>
                ))}

                <div className="flex justify-end mt-[14px]">
                  <button className="border border-palatinatePurple text-palatinatePurple text-[11px] lg:text-[14px] font-bold py-[5px] px-[14px] rounded-lg">
                    Clear
                  </button>
                  <button className="ml-[4px] bg-limeGreen text-darkSilverColor text-[11px] lg:text-[14px] font-bold py-[5px] px-[14px] rounded-lg">
                    Apply
                  </button>
                </div>
              </div>
            }
          />
          <ExpensionPanel
            title="Review Date"
            children={
              <div className="">
                <div>
                  {filterMenu.reviewDate.map((value) => (
                    <h5
                      onClick={() => setreviewResourse(value)}
                      className={`text-[12px] lg:text-[16px] mt-[8px] ${
                        value === reviewResourse
                          ? "text-palatinatePurple font-bold flex justify-between "
                          : "text-darkSilverColor"
                      } `}>
                      {value}
                      {value === reviewResourse && (
                        <span>
                          <svg
                            width="10"
                            height="7"
                            viewBox="0 0 10 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.00039 1.7001L4.20034 6.50015C3.90034 6.80015 3.40034 6.80015 3.20034 6.50015L0.800195 4.10012C0.500195 3.80012 0.500195 3.40012 0.800195 3.10012C0.900195 3.00012 1.1002 2.90017 1.3002 2.90017C1.5002 2.90017 1.6002 3.00012 1.8002 3.10012L3.70034 5.00015L8.00039 0.700098C8.30039 0.400098 8.70039 0.400098 9.00039 0.700098C9.30039 0.900098 9.30039 1.4001 9.00039 1.7001Z"
                              fill="#631363"
                            />
                          </svg>
                        </span>
                      )}
                    </h5>
                  ))}
                </div>
              </div>
            }
          />
        </>
      )}
      {active != "Reviews" && (
        <ExpensionPanel
          title={active === "Surveys" ? "Response Date" : "Time Period "}
          children={
            <div>
              {filterMenu.timePeriod.map((value) => (
                <h5
                  key={value}
                  onClick={() => {
                    setTimePeriodActive(value);
                    if (value === "Custom") {
                      setShowDatePicker(!showDatePicker); // Toggle date picker visibility
                    } else {
                      setShowDatePicker(false); // Hide date picker for other selections
                    }
                  }}
                  className={`text-[12px] lg:text-[16px] mt-[8px] ${
                    value === timePeriodActive
                      ? "text-palatinatePurple font-bold flex justify-between"
                      : "text-darkSilverColor"
                  }`}>
                  {value}
                  {value === timePeriodActive && (
                    <span>
                      <svg
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.00039 1.7001L4.20034 6.50015C3.90034 6.80015 3.40034 6.80015 3.20034 6.50015L0.800195 4.10012C0.500195 3.80012 0.500195 3.40012 0.800195 3.10012C0.900195 3.00012 1.1002 2.90017 1.3002 2.90017C1.5002 2.90017 1.6002 3.00012 1.8002 3.10012L3.70034 5.00015L8.00039 0.700098C8.30039 0.400098 8.70039 0.400098 9.00039 0.700098C9.30039 0.900098 9.30039 1.4001 9.00039 1.7001Z"
                          fill="#631363"
                        />
                      </svg>
                    </span>
                  )}
                </h5>
              ))}

              <div className="relative">
                <Popover>
                  <PopoverTrigger className="font-normal text-[#6D6D6D] text-xs pt-1 lg:text-[16px]  aria-selected:font-bold">
                    Custom
                  </PopoverTrigger>
                  <PopoverContent
                    style={{ zIndex: "1000" }}
                    className="z-[10000] border-0 bg-transparent shadow-none w-fit absolute left-[-71px]">
                    <DatePickerWithRange textSize={"sm"} />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          }
        />
      )}

      {active === "Reviews" && (
        <ExpensionPanel
          title="Ratings"
          children={
            <div className="">
              {filterMenu.ratings.map((value) => (
                <div className="flex items-center mt-[12px] ">
                  <Checkbox
                    className="border border-slate-400 rounded-sm"
                    onInput={() => setScore(value)}
                    type="checkbox"
                  />
                  <h5
                    className={`ml-[6px] text-[12px] lg:text-[16px] font-normal ${
                      value === score
                        ? "text-palatinatePurple"
                        : "text-darkSilverColor"
                    } `}>
                    {value}
                  </h5>
                </div>
              ))}
              <div className="flex justify-end mt-[14px]">
                <button className="ml-[4px] bg-limeGreen lg:text-[14px]  text-black text-[10px] font-bold py-[5px] px-[14px] rounded-lg">
                  Apply
                </button>
              </div>
            </div>
          }
        />
      )}
      {active === "Reviews" && (
        <ExpensionPanel
          title="Actions"
          children={
            <div className="">
              <div>
                {filterMenu.actions.map((value) => (
                  <h5
                    onClick={() => setActions(value)}
                    className={`text-[12px] lg:text-[16px] mt-[8px] ${
                      value === actions
                        ? "text-palatinatePurple font-bold flex justify-between "
                        : "text-darkSilverColor"
                    } `}>
                    {value}
                    {value === actions && (
                      <span>
                        <svg
                          width="10"
                          height="7"
                          viewBox="0 0 10 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.00039 1.7001L4.20034 6.50015C3.90034 6.80015 3.40034 6.80015 3.20034 6.50015L0.800195 4.10012C0.500195 3.80012 0.500195 3.40012 0.800195 3.10012C0.900195 3.00012 1.1002 2.90017 1.3002 2.90017C1.5002 2.90017 1.6002 3.00012 1.8002 3.10012L3.70034 5.00015L8.00039 0.700098C8.30039 0.400098 8.70039 0.400098 9.00039 0.700098C9.30039 0.900098 9.30039 1.4001 9.00039 1.7001Z"
                            fill="#631363"
                          />
                        </svg>
                      </span>
                    )}
                  </h5>
                ))}
              </div>
              <div className="flex justify-end mt-[14px]">
                <button className="ml-[4px] bg-limeGreen text-black text-[10px] lg:text-[14px] font-bold py-[5px] px-[14px] rounded-lg">
                  Apply
                </button>
              </div>
            </div>
          }
        />
      )}
      {active === "Reviews" && (
        <ExpensionPanel
          title="Tags"
          children={
            <div className="">
              {filterMenu.tag.map((value) => (
                <div className="flex items-center mt-[12px] ">
                  <Checkbox
                    className="border  border-slate-400 rounded-sm"
                    onInput={() => setScore(value)}
                  />
                  <h5
                    className={`ml-[6px] text-[12px] lg:text-[16px]  font-normal ${
                      value === score
                        ? "text-palatinatePurple"
                        : "text-darkSilverColor"
                    } `}>
                    {value}
                  </h5>
                </div>
              ))}
            </div>
          }
        />
      )}

      {active === "Surveys" && (
        <ExpensionPanel
          title="Survey Name"
          children={
            <div className="">
              <div className="w-[172px]  bg-cultured p-[5px] rounded-lg flex items-center">
                <span>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.71313 4.63184C8.71313 5.4562 8.3792 6.28061 7.8783 6.85766C7.79481 6.9401 7.79481 7.10489 7.8783 7.18733L7.96166 7.26984C8.87998 8.0942 9.71477 9.00095 10.6331 9.90775C10.7166 9.99018 10.8001 10.0727 10.8836 10.1551C11.0505 10.4024 11.0507 10.6496 10.8002 10.8145C10.6333 11.0618 10.2993 11.0618 10.1323 10.8145C9.88186 10.6496 9.71493 10.4024 9.54797 10.2375C8.79662 9.49559 8.0451 8.75361 7.29375 8.01168C7.12678 7.84681 7.0433 7.84683 6.87633 7.92927C4.87273 9.33068 2.11793 8.75361 0.782196 6.77515C-0.637025 4.79669 -0.0527214 2.07637 1.95088 0.757398C2.78572 0.180347 3.70396 -0.0669799 4.78924 0.0154558C6.87633 0.180327 8.71313 2.07633 8.71313 4.63184ZM4.28846 7.68202C6.1251 7.76446 7.62776 6.28059 7.79473 4.46701C7.87822 2.65342 6.37559 1.16952 4.53895 1.00464C4.45547 1.00464 4.45531 1.00464 4.37182 1.00464C2.53519 1.08708 1.03248 2.571 1.03248 4.38459C1.03248 6.19818 2.53531 7.59959 4.28846 7.68202Z"
                      fill="#6D6D6D"
                    />
                  </svg>
                </span>
                <input
                  className="bg-cultured h-[11px] py-2 text-darkSilverColor outline-none ml-[5px] w-full"
                  type="text"
                  placeholder="Search"
                />
              </div>
              {filterMenu.surveyName.map((value) => (
                <div className="flex items-center mt-[12px] ">
                  <Checkbox
                    className="border  border-slate-400 rounded-sm"
                    onInput={() => setAssignTo(value)}
                  />
                  <h5
                    className={`ml-[6px] text-darkSilverColor text-[12px] lg:text-[16px]  font-normal${
                      value === assignTo
                        ? "text-palatinatePurple"
                        : "text-darkSilverColor"
                    } `}>
                    {value}
                  </h5>
                </div>
              ))}
              <div className="flex justify-end mt-[14px]">
                <button className="ml-[4px] bg-limeGreen text-black text-[11px] lg:text-[14px]   font-bold py-[5px] px-[14px] rounded-lg">
                  Apply
                </button>
              </div>
            </div>
          }
        />
      )}
      {active === "Surveys" && (
        <ExpensionPanel
          title="Survey Score"
          children={
            <div className="">
              <div className="w-[172px]  bg-cultured p-[5px] rounded-lg flex items-center">
                <span>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.71313 4.63184C8.71313 5.4562 8.3792 6.28061 7.8783 6.85766C7.79481 6.9401 7.79481 7.10489 7.8783 7.18733L7.96166 7.26984C8.87998 8.0942 9.71477 9.00095 10.6331 9.90775C10.7166 9.99018 10.8001 10.0727 10.8836 10.1551C11.0505 10.4024 11.0507 10.6496 10.8002 10.8145C10.6333 11.0618 10.2993 11.0618 10.1323 10.8145C9.88186 10.6496 9.71493 10.4024 9.54797 10.2375C8.79662 9.49559 8.0451 8.75361 7.29375 8.01168C7.12678 7.84681 7.0433 7.84683 6.87633 7.92927C4.87273 9.33068 2.11793 8.75361 0.782196 6.77515C-0.637025 4.79669 -0.0527214 2.07637 1.95088 0.757398C2.78572 0.180347 3.70396 -0.0669799 4.78924 0.0154558C6.87633 0.180327 8.71313 2.07633 8.71313 4.63184ZM4.28846 7.68202C6.1251 7.76446 7.62776 6.28059 7.79473 4.46701C7.87822 2.65342 6.37559 1.16952 4.53895 1.00464C4.45547 1.00464 4.45531 1.00464 4.37182 1.00464C2.53519 1.08708 1.03248 2.571 1.03248 4.38459C1.03248 6.19818 2.53531 7.59959 4.28846 7.68202Z"
                      fill="#6D6D6D"
                    />
                  </svg>
                </span>
                <input
                  className="bg-cultured h-[11px] py-2 text-darkSilverColor outline-none ml-[5px] w-full"
                  type="text"
                  placeholder="Search"
                />
              </div>
              {filterMenu.surveyScore.map((value) => (
                <div className="flex items-center mt-[12px] ">
                  <Checkbox
                    className="border  border-slate-400 rounded-sm"
                    onInput={() => setAssignTo(value)}
                  />
                  <h5
                    className={`ml-[6px] text-darkSilverColor text-[12px] lg:text-[16px]  font-normal${
                      value === assignTo
                        ? "text-palatinatePurple"
                        : "text-darkSilverColor"
                    } `}>
                    {value}
                  </h5>
                </div>
              ))}
              <div className="flex justify-end mt-[14px]">
                <button className="ml-[4px] bg-limeGreen text-black text-[11px] lg:text-[14px] font-bold py-[5px] px-[14px] rounded-lg">
                  Apply
                </button>
              </div>
            </div>
          }
        />
      )}
      {active != "Reviews" && active !== "Surveys" && (
        <ExpensionPanel
          title="Assigned to"
          children={
            <div className="">
              <div className="w-[172px]  bg-cultured p-[5px] rounded-lg flex items-center">
                <span>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.71313 4.63184C8.71313 5.4562 8.3792 6.28061 7.8783 6.85766C7.79481 6.9401 7.79481 7.10489 7.8783 7.18733L7.96166 7.26984C8.87998 8.0942 9.71477 9.00095 10.6331 9.90775C10.7166 9.99018 10.8001 10.0727 10.8836 10.1551C11.0505 10.4024 11.0507 10.6496 10.8002 10.8145C10.6333 11.0618 10.2993 11.0618 10.1323 10.8145C9.88186 10.6496 9.71493 10.4024 9.54797 10.2375C8.79662 9.49559 8.0451 8.75361 7.29375 8.01168C7.12678 7.84681 7.0433 7.84683 6.87633 7.92927C4.87273 9.33068 2.11793 8.75361 0.782196 6.77515C-0.637025 4.79669 -0.0527214 2.07637 1.95088 0.757398C2.78572 0.180347 3.70396 -0.0669799 4.78924 0.0154558C6.87633 0.180327 8.71313 2.07633 8.71313 4.63184ZM4.28846 7.68202C6.1251 7.76446 7.62776 6.28059 7.79473 4.46701C7.87822 2.65342 6.37559 1.16952 4.53895 1.00464C4.45547 1.00464 4.45531 1.00464 4.37182 1.00464C2.53519 1.08708 1.03248 2.571 1.03248 4.38459C1.03248 6.19818 2.53531 7.59959 4.28846 7.68202Z"
                      fill="#6D6D6D"
                    />
                  </svg>
                </span>
                <input
                  className="bg-cultured h-[11px] py-2 text-darkSilverColor outline-none ml-[5px] w-full"
                  type="text"
                  placeholder="Search"
                />
              </div>
              {filterMenu.assignTo.map((value) => (
                <div className="flex items-center mt-[12px] ">
                  <Checkbox
                    className="border  border-slate-400 rounded-sm"
                    onInput={() => setAssignTo(value)}
                    type="checkbox"
                  />
                  <h5
                    className={`ml-[6px] text-darkSilverColor text-[12px] lg:text-[16px]  font-normal${
                      value === assignTo
                        ? "text-palatinatePurple"
                        : "text-darkSilverColor"
                    } `}>
                    {value}
                  </h5>
                </div>
              ))}
              <div className="flex justify-end mt-[14px]">
                <button className="ml-[4px] bg-limeGreen text-black text-[11px] lg:text-[14px] font-bold py-[5px] px-[14px] rounded-lg">
                  Apply
                </button>
              </div>
            </div>
          }
        />
      )}
      {active != "Reviews" && active !== "Surveys" && (
        <ExpensionPanel
          title="Last incoming message"
          children={
            <div className="">
              <div className="w-[172px]  bg-cultured p-[5px] rounded-lg flex items-center">
                <span>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.71313 4.63184C8.71313 5.4562 8.3792 6.28061 7.8783 6.85766C7.79481 6.9401 7.79481 7.10489 7.8783 7.18733L7.96166 7.26984C8.87998 8.0942 9.71477 9.00095 10.6331 9.90775C10.7166 9.99018 10.8001 10.0727 10.8836 10.1551C11.0505 10.4024 11.0507 10.6496 10.8002 10.8145C10.6333 11.0618 10.2993 11.0618 10.1323 10.8145C9.88186 10.6496 9.71493 10.4024 9.54797 10.2375C8.79662 9.49559 8.0451 8.75361 7.29375 8.01168C7.12678 7.84681 7.0433 7.84683 6.87633 7.92927C4.87273 9.33068 2.11793 8.75361 0.782196 6.77515C-0.637025 4.79669 -0.0527214 2.07637 1.95088 0.757398C2.78572 0.180347 3.70396 -0.0669799 4.78924 0.0154558C6.87633 0.180327 8.71313 2.07633 8.71313 4.63184ZM4.28846 7.68202C6.1251 7.76446 7.62776 6.28059 7.79473 4.46701C7.87822 2.65342 6.37559 1.16952 4.53895 1.00464C4.45547 1.00464 4.45531 1.00464 4.37182 1.00464C2.53519 1.08708 1.03248 2.571 1.03248 4.38459C1.03248 6.19818 2.53531 7.59959 4.28846 7.68202Z"
                      fill="#6D6D6D"
                    />
                  </svg>
                </span>
                <input
                  className="bg-cultured py-2 text-darkSilverColor h-[11px] outline-none ml-[5px] w-full"
                  type="text"
                  placeholder="Search"
                />
              </div>

              {filterMenu.lastIncMessage.map((value) => (
                <div className="flex items-center mt-[12px] ">
                  <Checkbox
                    className="border  border-slate-400 rounded-sm"
                    onInput={() => setLastIncMsg(value)}
                  />
                  <h5
                    className={`ml-[6px] text-[12px] lg:text-[16px]   text-darkSilverColor font-normal${
                      value === lastIncMsg
                        ? "text-palatinatePurple"
                        : "text-darkSilverColor"
                    } `}>
                    {value}
                  </h5>
                </div>
              ))}

              <div className="flex justify-end mt-[14px]">
                {/* <button className="border border-palatinatePurple text-palatinatePurple text-[10px] font-bold py-[5px] px-[14px] rounded-lg">
                Clear
              </button> */}
                <button className="ml-[4px] bg-limeGreen text-black text-[10px] lg:text-[14px] font-bold py-[5px] px-[14px] rounded-lg">
                  Apply
                </button>
              </div>
            </div>
          }
        />
      )}

      {active != "Leads" && (
        <ExpensionPanel
          title="Experience score"
          children={
            <div className="">
              {filterMenu.experienceScore.map((value) => (
                <div className="flex items-center mt-[12px] ">
                  <Checkbox
                    className="border  border-slate-400 rounded-sm"
                    onInput={() => setScore(value)}
                    type="checkbox"
                  />
                  <h5
                    className={`ml-[6px] text-[12px] lg:text-[16px] font-normal ${
                      value === score
                        ? "text-palatinatePurple"
                        : "text-darkSilverColor"
                    } `}>
                    {value}
                  </h5>
                </div>
              ))}
              <div className="flex justify-end mt-[14px]">
                <button className="ml-[4px] bg-limeGreen text-black text-[10px] lg:text-[14px] font-bold py-[5px] px-[14px] rounded-lg">
                  Apply
                </button>
              </div>
            </div>
          }
        />
      )}
      {active === "Leads" && (
        <ExpensionPanel
          title="Lead Score"
          children={
            <div className="">
              {filterMenu.leadScore.map((value) => (
                <div className="flex items-center mt-[12px] ">
                  <Checkbox
                    className="border  border-slate-400 rounded-sm"
                    onInput={() => setScore(value)}
                    type="checkbox"
                  />
                  <h5
                    className={`ml-[6px] text-[12px] lg:text-[16px] font-normal ${
                      value === score
                        ? "text-palatinatePurple"
                        : "text-darkSilverColor"
                    } `}>
                    {value}
                  </h5>
                </div>
              ))}
              <div className="flex justify-end mt-[14px]">
                <button className="ml-[4px] bg-limeGreen text-black text-[10px] lg:text-[14px] font-bold py-[5px] px-[14px] rounded-lg">
                  Apply
                </button>
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};

export default FilterView;
