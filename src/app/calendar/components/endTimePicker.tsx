import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


const EndTimerPicker = () => {
    const [date, setDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);


    const handleDateChange = (selectedDate: any) => {
        setDate(selectedDate);
    };
    return (
        <div className="w-full max-w-md bg-cultured mt-[5px] rounded-lg">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-darkSilverColor py-2 px-[14px] text-[12px] rounded-lg  bg-cultured"
            >
                <span className="flex items-center">
                    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0843 3.12061H14.4932V1.52051C14.4932 1.02051 14.0955 0.520508 13.4989 0.520508C12.9023 0.520508 12.5045 0.920508 12.5045 1.52051V3.12061H6.83704V1.52051C6.83704 1.02051 6.4393 0.520508 5.84269 0.520508C5.24608 0.520508 4.84834 0.920508 4.84834 1.52051V3.12061H3.25728C1.86519 3.12061 0.671875 4.22058 0.671875 5.72058V18.5205C0.671875 19.9205 1.76576 21.1206 3.25728 21.1206H15.9848C17.3769 21.1206 18.5702 20.0205 18.5702 18.5205V5.72058C18.5702 4.22058 17.4764 3.12061 16.0843 3.12061ZM16.681 18.4205C16.681 18.8205 16.3826 19.0205 16.0843 19.0205H3.35681C2.95907 19.0205 2.76011 18.7205 2.76011 18.4205V8.22058H16.681V18.4205Z" fill="#631363" />
                        <path d="M10.914 10.5205V15.9205C10.914 16.0205 10.8143 16.1206 10.7149 16.1206H9.52149C9.42206 16.1206 9.32291 16.0205 9.32291 15.9205V12.3206C9.32291 12.3206 9.32282 12.3206 9.22338 12.3206C9.02451 12.5206 8.72601 12.6206 8.52714 12.7206C8.32827 12.8206 8.12979 12.9205 7.93092 13.0205C7.83149 13.1205 7.63232 12.9206 7.63232 12.8206V12.0205C7.63232 11.9205 7.73195 11.8206 7.83139 11.8206C8.32856 11.6206 8.7264 11.4206 8.92527 11.2206C9.22358 11.0206 9.42215 10.7205 9.62102 10.4205C9.62102 10.3205 9.72065 10.3206 9.82009 10.3206H10.8144C10.8144 10.3206 10.914 10.4205 10.914 10.5205Z" fill="#631363" />
                    </svg>
                    <span className="ml-[13px]">3:00 PM - 3:30 PM</span>
                </span>
                <span className={isOpen ? 'rotate-180' : 'rotate-0'}>
                    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.2002 4.5L0 0.300049H8.5L4.2002 4.5Z" fill="#6D6D6D" />
                    </svg>

                </span>
            </button>
            {
                isOpen &&
                <div className="p-4 pl-[27px] text-[12px] text-darkSilverColor max-h-[180px] overflow-y-scroll  rounded-lg shadow-md">
                <h5 >11:00 AM - 11:30 AM</h5>
                <h5 className="mt-[12px] ripple hover:text-palatinatePurple">11:30 AM - 12:00 PM</h5>
                <h5 className="mt-[12px] ripple hover:text-palatinatePurple">12:00 PM - 12:30 PM</h5>
                <h5 className="mt-[12px] ripple hover:text-palatinatePurple">12:30 PM - 1:00 PM</h5>
                <h5 className="mt-[12px] ripple hover:text-palatinatePurple">12:30 PM - 1:00 PM</h5>
                <h5 className="mt-[12px] ripple hover:text-palatinatePurple">12:30 PM - 1:00 PM</h5>
                <h5 className="mt-[12px] ripple hover:text-palatinatePurple">12:30 PM - 1:00 PM</h5>
                <h5 className="mt-[12px] ripple hover:text-palatinatePurple">12:30 PM - 1:00 PM</h5>
                <h5 className="mt-[12px] ripple hover:text-palatinatePurple">12:30 PM - 1:00 PM</h5>
                <h5 className="mt-[12px] ripple hover:text-palatinatePurple">12:30 PM - 1:00 PM</h5>
                </div>
            }
        </div>
    )
}


export default EndTimerPicker