// components/ExpandableList.js
import { useState } from 'react';

const items = ['calendar1', 'calendar2', 'calendar3', 'calendar4', 'calendar4', 'calendar4', 'calendar4', 'calendar4', 'calendar4'];

const ExpandableList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full max-w-md bg-cultured mt-[5px] rounded-lg">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-darkSilverColor py-2 px-[14px] text-[12px] rounded-lg  bg-cultured"
            >
                Chosen Calendar
                <span className={isOpen ? 'rotate-180' : 'rotate-0'}>
                    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.2002 4.5L0 0.300049H8.5L4.2002 4.5Z" fill="#6D6D6D" />
                    </svg>

                </span>
            </button>

            {isOpen && (
                <div className="mt-2 p-4  rounded-lg ">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 h-[31px] text-[12px] outline-none border-none bg-chinesWhite rounded-lg "
                    />
                    <ul className="mt-2 max-h-[180px] overflow-y-scroll">
                        {filteredItems.map((item, index) => (
                            <li key={index} className="py-1 ripple hover:text-palatinatePurple text-[12px] text-darkSilverColor">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ExpandableList;
