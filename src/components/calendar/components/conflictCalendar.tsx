import Switch from "../icons/switch.svg";
import CalendarPlus from "../icons/calendarPlus.svg";
import GoogleCalendar from "../icons/googleCalendar.svg";
import NotAllowed from "../icons/notAllowed.svg";
import Image from "next/image";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
interface PropsInterface {
  handleClose: () => void;
}
export const ConflictCalendar: React.FC<PropsInterface> = ({ handleClose }) => {
  return (
    <div className="fixed top-2/4 left-2/4  -translate-x-2/4 -translate-y-2/4 rounded-lg px-[14px] w-[304px] z-10 h-[363px] bg-cultured  ">
      <div className="flex justify-between items-start mt-[13px]">
        <h5 className="text-[20px] font-bold text-darkSilverColor ">
          Conflict Calendars
        </h5>
        <span onClick={() => handleClose()} className="cursor-pointer">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.89981 8.90015C8.5998 9.20015 8.1999 9.10015 7.9999 8.90015L4.69985 5.60011L1.3998 8.90015C1.0998 9.20015 0.699902 9.10015 0.499902 8.90015C0.199902 8.60015 0.199902 8.20013 0.499902 8.00013L3.79971 4.70008L0.499902 1.40015C0.199902 1.10015 0.199902 0.70013 0.499902 0.50013C0.799902 0.30013 1.1998 0.20013 1.3998 0.50013L4.69985 3.80006L7.9999 0.50013C8.2999 0.20013 8.69981 0.30013 8.89981 0.50013C9.0998 0.70013 9.19981 1.20015 8.89981 1.40015L5.59976 4.70008L8.89981 8.00013C9.19981 8.20013 9.19981 8.60015 8.89981 8.90015Z"
              fill="#6D6D6D"
            />
          </svg>
        </span>
      </div>

      <p className="text-[10px] font-bold text-darkSilverColor mt-[21px]">
        Add additional calendars to be checked to prevent double bookings
      </p>

      <div className="flex mt-[17px]">
        <Image
          className="w-[19px] h-[19px] mr-[8px]"
          src={GoogleCalendar}
          alt=""
        />
        <p className="text-[12px] text-darkSilverColor">
          johndoe@companyname.com
        </p>
      </div>

      <p className="mt-[19px] text-[10px] font-bold text-darkSilverColor">
        Check these calendars for conflicts
      </p>

      <div className="mt-[13px] bg-white h-[129px] rounded-lg overflow-y-auto py-[8px] px-[10px]">
        <div className="flex items-center">
          <Checkbox className=" border border-slate-600 rounded-sm" />
          <p className="text-[12px] text-darkSilverColor ml-[7px]">
            johndoe@companyname.com
          </p>
        </div>
        <p className="text-[10px] mt-[4px] text-darkSilverColor ml-[19px]">
          Linked calendar is checked for conflict by default
        </p>
        <div className="flex items-center mt-[9px]">
          <Checkbox className="border border-slate-600 rounded-sm" />
          <p className="text-[12px] text-darkSilverColor ml-[7px]">
            Calendar 1
          </p>
        </div>
        <div className="flex items-center mt-[9px]">
          <Checkbox className="border border-slate-600 rounded-sm" />
          <p className="text-[12px] text-darkSilverColor ml-[7px]">
            Calendar 2
          </p>
        </div>
        <div className="flex items-center mt-[9px]">
          <Checkbox className="border border-slate-600 rounded-sm" />
          <p className="text-[12px] text-darkSilverColor ml-[7px]">
            Calendar 3
          </p>
        </div>
      </div>

      <div className="flex justify-end mt-[20px]">
        <button
          onClick={() => handleClose()}
          className="py-[8px] px-[14px] text-[12px] font-bold rounded-lg bg-limeGreen">
          Save
        </button>
        <button
          onClick={() => handleClose()}
          className="py-[8px] px-[14px] text-[12px] font-bold bg-red text-white ml-[12px] rounded-lg">
          Cancel
        </button>
      </div>
    </div>
  );
};
