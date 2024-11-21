import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from "./timePicker";

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [isCalendar, setIsCalendar] = useState(true);

  const handleDateChange = (selectedDate: any) => {
    setDate(selectedDate);
  };
  return (
    <div className="w-full max-w-md bg-white mt-[5px] rounded-lg">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center text-darkSilverColor py-2 px-[14px] text-[12px] rounded-lg  bg-white">
          <span className="flex items-center">
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
            <span className="ml-[13px]">GMT-04:00 America/New_York (EDT)</span>
          </span>
          <span className={isOpen ? "rotate-180" : "rotate-0"}>
            <svg
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.2002 4.5L0 0.300049H8.5L4.2002 4.5Z" fill="#6D6D6D" />
            </svg>
          </span>
        </button>
      )}

      {isOpen && (
        <div className="h-[421px] w-[305px]">
          <div className="w-full h-[103px] flex flex-col items-center justify-center bg-palatinatePurple rounded-tl-2xl rounded-tr-2xl">
            <h5 className="text-[32px] font-bold text-cultured">Sun, Jun 16</h5>
            <div className="w-full flex justify-around">
              <span className="flex flex-col items-center">
                <svg
                  onClick={() => setIsCalendar(true)}
                  width="19"
                  height="21"
                  viewBox="0 0 19 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.0996 2.7002H14.4995V1.1001C14.4995 0.600098 14.0995 0.100098 13.4995 0.100098C12.8995 0.100098 12.4995 0.500098 12.4995 1.1001V2.7002H6.7998V1.1001C6.7998 0.600098 6.3998 0.100098 5.7998 0.100098C5.1998 0.100098 4.7998 0.500098 4.7998 1.1001V2.7002H3.19971C1.79971 2.7002 0.599609 3.80005 0.599609 5.30005V18.1001C0.599609 19.5001 1.69971 20.7002 3.19971 20.7002H15.9995C17.3995 20.7002 18.5996 19.6001 18.5996 18.1001V5.30005C18.5996 3.90005 17.4996 2.7002 16.0996 2.7002ZM16.6997 18C16.6997 18.4 16.3996 18.6001 16.0996 18.6001H3.2998C2.8998 18.6001 2.69971 18.3 2.69971 18V7.80005H16.6997V18Z"
                    fill="#F4F4F4"
                  />
                  <path
                    d="M10.8994 10.2001V15.6C10.8994 15.7 10.7997 15.7999 10.6997 15.7999H9.49951C9.39951 15.7999 9.2998 15.7 9.2998 15.6V11.9999C9.2998 11.9999 9.29971 11.9999 9.19971 11.9999C8.99971 12.1999 8.69951 12.3 8.49951 12.4C8.29951 12.5 8.09941 12.6001 7.89941 12.7001C7.79941 12.8001 7.59961 12.5999 7.59961 12.4999V11.7001C7.59961 11.6001 7.6998 11.4999 7.7998 11.4999C8.2998 11.2999 8.69941 11.1 8.89941 10.9C9.19941 10.7 9.39961 10.4 9.59961 10.1C9.59961 9.99999 9.6998 9.99989 9.7998 9.99989H10.7998C10.7998 9.89989 10.8994 10.1001 10.8994 10.2001Z"
                    fill="#F4F4F4"
                  />
                </svg>
                {isCalendar && (
                  <div className="w-[150%] h-[1px] bg-cultured mt-[10px]" />
                )}
              </span>

              <span className="flex flex-col items-center">
                <svg
                  onClick={() => setIsCalendar(false)}
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.5 0.300049C5 0.300049 0.5 4.80005 0.5 10.3C0.5 15.8 5 20.3 10.5 20.3C16 20.3 20.5 15.8 20.5 10.3C20.4 4.80005 16 0.300049 10.5 0.300049ZM10.5 17.7002C6.4 17.7002 3 14.4002 3 10.2002C3 6.1002 6.3 2.7002 10.5 2.7002C14.7 2.7002 18 6.0002 18 10.2002C17.9 14.4002 14.6 17.7002 10.5 17.7002Z"
                    fill="#F4F4F4"
                  />
                  <path
                    d="M14.2007 9H11.7007V6.5C11.7007 5.8 11.1005 5.30005 10.5005 5.30005C9.80049 5.30005 9.30078 5.9 9.30078 6.5V10.2002C9.30078 10.9002 9.90049 11.4001 10.5005 11.4001H14.2007C14.9007 11.4001 15.4004 10.8002 15.4004 10.2002C15.4004 9.6002 14.9007 9 14.2007 9Z"
                    fill="#F4F4F4"
                  />
                </svg>
                {!isCalendar && (
                  <div className="w-[150%] h-[1px] bg-cultured mt-[10px]" />
                )}
              </span>
            </div>
          </div>
          <div className="p-4 rounded-lg">
            {isCalendar ? (
              <Calendar
                onChange={handleDateChange}
                value={date}
                className="border-none calendar_2 mx-auto mt-4"
              />
            ) : (
              <TimePicker />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
