const events = [
    {
        id: 1,
        date: '17',
        day: 'Mon',
        time: '2:00 PM - 2:30 PM (EDT)',
        name: 'Jane Doe',
        status: 'Confirmed',
    },
    {
        id: 2,
        date: '14',
        day: 'Fri',
        time: '2:00 PM - 2:30 PM (EDT)',
        name: 'Jane Doe',
        status: 'Confirmed',
    },
];

const EventsList = () => {
    return (
        <div className="mt-4">
            {events.map((event) => (
                <div key={event.id} className="pr-[17px] mb-2 flex  rounded-lg ">
                    <div className="mx-[10px] flex-[.2] flex flex-col items-center">
                        <p className="font-bold text-palatinatePurple text-[20px]">{event.day}</p>
                        <p className="font-bold text-gray-700">{event.date}</p>
                    </div>
                    <div className="flex bg-white flex-[.8] items-center justify-between mt-2 pl-[14px] pr-[12px] rounded-lg py-[12px] text-palatinatePurple">
                        <div>
                            <p className="font-bold text-[16px]">{event.name}</p>
                            <p className="text-[14px]">{event.time}</p>
                            <span className="inline-block px-2 py-1 mt-1 text-xs font-bold text-white bg-palatinatePurple rounded">
                                {event.status}
                            </span>
                        </div>
                        <div className="flex-shrink-0 w-[29px] h-[29px] bg-palatinatePurple text-white rounded-full flex items-center justify-center">
                            JD
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventsList;
