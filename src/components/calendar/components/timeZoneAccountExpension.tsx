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
                GMT-04:00 America/New_York (EDT)
                <span className={isOpen ? 'rotate-180' : 'rotate-0'}>
                    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.2002 4.5L0 0.300049H8.5L4.2002 4.5Z" fill="#6D6D6D" />
                    </svg>

                </span>
            </button>


            {isOpen && (<>
                <div className="mt-2 p-4  rounded-lg ">
                    <input
                        type="text"
                        placeholder=" Search Timezone"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 h-[31px] text-[12px] outline-none border-none bg-chinesWhite rounded-lg "
                    />
                    <h5 className='text-[12px] mt-[11px] font-bold text-palatinatePurple text-center'>Recomended Timezones</h5>

                    <div className='max-h-[280px] overflow-y-scroll'>
                        <div className='w-full h-[1px] bg-chinesWhite mt-[10px]'></div>
                        <div className='text-[12px] text-darkSilverColor mt-[13px]'>
                            <h5>GMT-07:00 America/Los_Angeles (PDT)</h5>
                            <h5>Timezone (Contact)</h5>
                        </div>
                        <div className='text-[12px] text-darkSilverColor mt-[13px]'>
                            <h5>GMT-04:00 America/New_York (EDT)</h5>
                            <h5>Timezone (Account)</h5>
                        </div>
                        <div className='text-[12px] text-darkSilverColor mt-[13px]'>
                            <h5>GMT+03:00 Africa/Cairo (EEST)</h5>
                            <h5>Timezone (System)</h5>
                        </div>
                        <div className='flex justify-center mt-[15px]'>
                            <h5 className='text-[12px] font-bold text-palatinatePurple'>All Timezones</h5>
                        </div>
                        <div className='w-full h-[1px] bg-chinesWhite mt-[10px]'></div>
                        <div className='mt-[10px] text-darkSilverColor text-[12px]'>
                            <h5>GMT-12:00 Etc/GMT+12 (-12)</h5>
                            <h5>GMT-11:00 Pacific/Midway (SST)</h5>
                            <h5>GMT-10:00 Pacific/Honolulu (HST)</h5>
                        </div>
                    </div>

                </div>

            </>
            )}
        </div>
    );
};

export default ExpandableList;
