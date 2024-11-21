"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import LayoutView from "../calendar/layout/page";
import CustomSelect from "./components/customSelect";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Calendar30 = () => {
  const [rescheduleEnabled, setRescheduleEnabled] = useState(true);
  const [cancelEnabled, setCancelEnabled] = useState(true);
  const [value, setValue] = useState("");

  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate: any) => {
    setDate(selectedDate);
  };

  // const handleNumber = (val:any)=> {
  //     setValue(val)
  // }

  return (
    <LayoutView
      Childrens={
        <div className="relative pb-[30px] h-full overflow-y-scroll w-full bg-cultured">
          <div className="mx-[18px] mt-[19px] pb-[38px] bg-chinesWhite rounded-lg">
            <div className="bg-palatinatePurple flex pl-[16px] py-[11px] text-[16px] font-bold rounded-lg text-white">
              <h4>John’s Calendar</h4>
            </div>
            <div className="h-full px-[16px]">
              <div className="flex flex-col rounded-xl mt-[18px]  p-[11px]  h-[98px] bg-white">
                <div className="flex text-darkSilverColor text-[14px] ">
                  <span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.20203 0.620926C3.60203 0.620926 0.702026 3.52093 0.702026 7.12093C0.702026 10.7209 3.60203 13.6209 7.20203 13.6209C10.802 13.6209 13.702 10.7209 13.702 7.12093C13.702 3.52093 10.802 0.620926 7.20203 0.620926ZM7.20203 12.0209C4.50203 12.0209 2.20203 9.82093 2.20203 7.02093C2.20203 4.32093 4.40203 2.02093 7.20203 2.02093C9.90203 2.02093 12.202 4.22093 12.202 7.02093C12.102 9.82093 9.90203 12.0209 7.20203 12.0209ZM9.00201 6.22092L7.90202 6.72092V4.12093C7.90202 3.72093 7.60202 3.32092 7.10202 3.32092C6.70202 3.32092 6.30202 3.62093 6.30202 4.12093V7.92092C6.30202 8.22092 6.40202 8.42093 6.60202 8.52093C6.80202 8.62093 7.10202 8.72093 7.30202 8.52093L9.40202 7.52093C9.80202 7.32093 10.002 6.92093 9.80202 6.52093C9.80202 6.22093 9.40201 6.02092 9.00201 6.22092Z"
                        fill="#6D6D6D"
                      />
                    </svg>
                  </span>
                  <h5 className="ml-2">30 Mins</h5>
                </div>
                <div className="flex items-center mt-[10px] text-darkSilverColor text-[14px] ">
                  <span>
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.90201 6.1209V7.4209H4.20201V6.1209H2.90201ZM2.90201 8.7209V10.0209H4.20201V8.7209H2.90201ZM5.502 6.1209V7.4209H6.802V6.1209H5.502ZM5.502 8.7209V10.0209H6.802V8.7209H5.502ZM8.20201 6.1209V7.4209H9.502V6.1209H8.20201ZM8.20201 8.7209V10.0209H9.502V8.7209H8.20201ZM2.90201 6.1209V7.4209H4.20201V6.1209H2.90201ZM2.90201 8.7209V10.0209H4.20201V8.7209H2.90201ZM5.502 6.1209V7.4209H6.802V6.1209H5.502ZM5.502 8.7209V10.0209H6.802V8.7209H5.502ZM8.20201 6.1209V7.4209H9.502V6.1209H8.20201ZM8.20201 8.7209V10.0209H9.502V8.7209H8.20201ZM2.90201 6.1209V7.4209H4.20201V6.1209H2.90201ZM2.90201 8.7209V10.0209H4.20201V8.7209H2.90201ZM5.502 6.1209V7.4209H6.802V6.1209H5.502ZM5.502 8.7209V10.0209H6.802V8.7209H5.502ZM8.20201 6.1209V7.4209H9.502V6.1209H8.20201ZM8.20201 8.7209V10.0209H9.502V8.7209H8.20201Z"
                        fill="#6D6D6D"
                      />
                      <path
                        d="M10.802 1.5209H9.502V0.220901H8.20201V1.5209H4.20201V0.220901H2.90201V1.5209H1.60201C0.902005 1.5209 0.302002 2.12091 0.302002 2.82091V12.1209C0.302002 12.8209 0.902005 13.4209 1.60201 13.4209H10.902C11.602 13.4209 12.202 12.8209 12.202 12.1209V2.82091C12.102 2.12091 11.502 1.5209 10.802 1.5209ZM10.802 12.1209H1.502V4.2209H10.802V12.1209Z"
                        fill="#6D6D6D"
                      />
                    </svg>
                  </span>
                  <h5 className="ml-2">Mon, Jun 17, 2024</h5>
                </div>
                <div className="flex items-center mt-[10px] text-darkSilverColor text-[14px] ">
                  <span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.80202 13.2209C10.502 13.2209 13.402 10.2209 13.402 6.62088C13.402 2.92088 10.402 0.0208893 6.80202 0.0208893C3.20202 0.0208893 0.202026 3.02088 0.202026 6.62088C0.202026 10.3209 3.20202 13.2209 6.80202 13.2209ZM1.70203 9.22089H4.40202C4.70202 10.3209 5.20202 11.3209 5.90202 12.3209C4.10202 12.0209 2.50203 10.8209 1.70203 9.22089ZM5.10202 4.82089H8.50201C8.70201 6.02089 8.70201 7.22088 8.50201 8.42088H5.10202C4.80202 7.22088 4.80202 6.02089 5.10202 4.82089ZM6.80202 12.0209C6.10202 11.1209 5.60202 10.2209 5.30202 9.22089H8.20203C7.90203 10.2209 7.40202 11.2209 6.80202 12.0209ZM7.60202 12.3209C8.30202 11.3209 8.80202 10.3209 9.10202 9.22089H12.002C11.202 10.8209 9.50202 12.1209 7.60202 12.3209ZM12.602 6.62088C12.602 7.22088 12.502 7.82089 12.302 8.32089H9.30202C9.50202 7.12089 9.50202 5.92089 9.30202 4.82089H12.302C12.502 5.42089 12.602 6.02088 12.602 6.62088ZM11.902 3.92088H9.10202C8.80202 2.82088 8.30202 1.82088 7.60202 0.920883C9.50202 1.12088 11.102 2.32088 11.902 3.92088ZM8.20203 3.92088H5.30202C5.60202 2.92088 6.10202 2.02088 6.80202 1.12088C7.40202 2.02088 7.90203 3.02088 8.20203 3.92088ZM5.90202 0.920883C5.20202 1.82088 4.70202 2.82088 4.40202 3.92088H1.70203C2.60203 2.42088 4.10202 1.22088 5.90202 0.920883ZM4.20203 4.82089C4.00203 6.02089 4.00203 7.22088 4.20203 8.42088H1.30202C1.10202 7.82088 1.00201 7.22088 1.00201 6.62088C1.00201 6.02088 1.10202 5.42089 1.30202 4.82089H4.20203Z"
                        fill="#6D6D6D"
                      />
                    </svg>
                  </span>
                  <h5 className="ml-2">America/Los Angeles (PDT)</h5>
                </div>
              </div>
              <h5 className="text-[16px] font-bold text-palatinatePurple mt-[32px]">
                Enter Details
              </h5>

              <div>
                <label
                  className="text-[12px] font-bold text-darkSilverColor mt-[21px]"
                  htmlFor="">
                  {" "}
                  First Name*
                </label>
                <input className="w-full rounded-xl bg-white text-[12px] text-darkSilverColor h-[27px]" />
              </div>
              <div>
                <label
                  className="text-[12px] font-bold text-darkSilverColor mt-[21px]"
                  htmlFor="">
                  {" "}
                  Last Name*
                </label>
                <input className="w-full rounded-xl bg-white text-[12px] text-darkSilverColor h-[27px]" />
              </div>
              <div>
                <label
                  className="text-[12px] font-bold text-darkSilverColor mt-[21px]"
                  htmlFor="">
                  {" "}
                  Phone*
                </label>
                <div className="flex bg-white rounded-xl   px-[6px]">
                  <PhoneInput
                    defaultCountry="RU"
                    value={value}
                    className="outline-none w-full border-none"
                    onChange={setValue}
                  />
                  {/* <input className='w-full rounded-xl outline-none bg-white text-[12px] text-darkSilverColor h-[27px]' /> */}
                </div>
              </div>
              <div>
                <label
                  className="text-[12px] font-bold text-darkSilverColor mt-[21px]"
                  htmlFor="">
                  {" "}
                  Email*
                </label>
                <input className="w-full rounded-xl bg-white text-[12px] text-darkSilverColor h-[27px]" />
              </div>
              <div>
                <label
                  className="text-[12px] font-bold text-darkSilverColor mt-[21px]"
                  htmlFor="">
                  {" "}
                  Additional Information
                </label>
                <input className="w-full rounded-xl bg-white text-[12px] text-darkSilverColor h-[70px]" />
              </div>
              <div className="mt-[14px] flex items-start">
                <input type="checkbox" />
                <h5 className="ml-[6px] text-[12px] text-darkSilverColor">
                  I confirm that I want to receive content from this company
                  using any contact information I provide.
                </h5>
              </div>
              <div className="flex justify-center items-center">
                <button className="mt-[24px] px-[16px] text-blackOlive rounded-xl font-bold bg-limeGreen py-[8px] ripple ">
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Calendar30;
