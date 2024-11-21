import React from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment';

const localizer = momentLocalizer(moment);

interface MyCalendarProps {
    myEventsList: Event[];
}

const EventComponent = ({ event }: { event: Event }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{event.title}</span>
            <input type="text" placeholder="Add note" />
        </div>
    );
};

const MyCalendar: React.FC<MyCalendarProps> = ({ myEventsList }) => {
const handleSelectSlot = ()=> {console.log("endsald")}
    return (

        <div>
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                views={{ day: true }} // Only show Day view
                defaultView="day" // Set default view to Day
                style={{ height: '100%' }}
                components={{ event: EventComponent }}
                selectable // Enable selection of slots
                onSelectSlot={handleSelectSlot} // Handle slot selection (empty function)
            />
        </div>
    )
};

export default MyCalendar;
