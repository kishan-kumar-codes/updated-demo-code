
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (selectedDate:any) => {
        setDate(selectedDate);
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-purple-700">John’s Calendar</h3>
            <Calendar
                onChange={handleDateChange}
                value={date}
                className="border-none mx-auto mt-4"
            />
        </div>
    );
};

export default CalendarComponent;