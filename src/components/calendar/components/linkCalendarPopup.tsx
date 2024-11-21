import Switch from '../icons/switch.svg';
import CalendarPlus from '../icons/calendarPlus.svg';
import GoogleCalendar from '../icons/googleCalendar.svg';
import NotAllowed from '../icons/notAllowed.svg';
import Image from 'next/image';
import React from 'react';

interface PropsInterface{
    handleClose: () => void
}

export const LinkCalendar:React.FC<PropsInterface> = ({handleClose}) => {
    return (
        <div className="fixed top-2/4 left-2/4  -translate-x-2/4 -translate-y-2/4 rounded-lg px-[14px] w-[304px] z-10 h-[363px] bg-cultured pb-[10px] ">
            <div className="flex justify-between items-start mt-[13px]">
                <h5 className="text-[20px] font-bold text-darkSilverColor ">Linked Calendar</h5>
                <span onClick={() => handleClose()} className="cursor-pointer">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.89981 8.90015C8.5998 9.20015 8.1999 9.10015 7.9999 8.90015L4.69985 5.60011L1.3998 8.90015C1.0998 9.20015 0.699902 9.10015 0.499902 8.90015C0.199902 8.60015 0.199902 8.20013 0.499902 8.00013L3.79971 4.70008L0.499902 1.40015C0.199902 1.10015 0.199902 0.70013 0.499902 0.50013C0.799902 0.30013 1.1998 0.20013 1.3998 0.50013L4.69985 3.80006L7.9999 0.50013C8.2999 0.20013 8.69981 0.30013 8.89981 0.50013C9.0998 0.70013 9.19981 1.20015 8.89981 1.40015L5.59976 4.70008L8.89981 8.00013C9.19981 8.20013 9.19981 8.60015 8.89981 8.90015Z" fill="#6D6D6D" />
                    </svg>
                </span>
            </div>

            <p className="text-[10px] font-bold text-darkSilverColor mt-[21px]">
                All new events created in the system will be added to
                your linked calendar and all events in the linked
                calendar will be synced to the system.
            </p>

            <div className="h-[68px] bg-white rounded-lg mt-[22px] flex justify-evenly items-center">
                <div className='flex flex-col items-center'>
                    <Image  src={CalendarPlus} alt='' />
                    <p className='text-[10px] '>System</p>
                </div>
                <Image src={Switch} alt='' />
                <div className='flex flex-col items-center'>
                    <Image className='w-[28px] h-[28px]' src={GoogleCalendar} alt='' />
                    <p className='text-[10px]'>Linked Calendar</p>
                </div>
            </div>

            <p className='mt-[19px] text-[10px] font-bold text-darkSilverColor'>Which third-party calendar should we add new
                events to?</p>

            <div className='flex mt-[20px]'>
                <input type="radio" name="" id="" />
                <Image className='mx-[10px] ' src={GoogleCalendar} alt='' />
                <p className='text-[10px] text-darkSilverColor'>johndoe@companyname.com</p>
            </div>
            <div className='flex mt-[10px]'>
                <input type="radio" name="" id="" />
                <Image className='mx-[10px] ' src={NotAllowed} alt='' />
                <p className='text-[10px] text-darkSilverColor'> Do not add new events to any calendar</p>
            </div>

            <div className='flex justify-end mt-[20px]'>
                <button onClick={() => handleClose()} className='py-[8px] px-[14px] text-[12px] font-bold rounded-lg bg-limeGreen'>Save</button>
                <button onClick={() => handleClose()} className='py-[8px] px-[14px] text-[12px] font-bold bg-red text-white ml-[12px] rounded-lg'>Cancel</button>
            </div>
        </div>
    )
}

