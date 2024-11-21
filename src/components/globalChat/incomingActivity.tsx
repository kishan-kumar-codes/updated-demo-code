import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import GoogleIcon from "../../assets/images/google-icon.svg";

interface IncomingActivityProps {
  userName: string;
  time: string;
  onClick?: () => void;
  avatar: string;
  message: string;
  type: string;
}

const IncomingActivity: FC<IncomingActivityProps> = ({
  userName = "",
  time,
}) => {
  const fullName = userName
    ? userName
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
    : "";
  return (
    <div className="call-detail w-full h-[70px] flex justify-center items-center mb-[10px]  border-[1px] border-solid border-darkSilverColor   bg-chinesWhite rounded-[15px]">
      <div className="ml-6">
        <Image src={GoogleIcon} className="w-[26px] h-[26px]" alt="avt" />
      </div>

      <div className="ml-3 w-full ">
        <div className="flex text-sm font-bold text-darkSilverColor justify-between">
          {userName}

          <div className="text-right text-darkSilverColor text-[11px] mr-2 font-normal">
            {time}
          </div>
        </div>
        <div className="text-darkSilverColor text-xs font-arial">
          Hi, I was wondering if you could share more details about pricing?
          Thank you
        </div>
      </div>
    </div>
  );
};

export default IncomingActivity;
