import React, { FC } from "react";
import Image from "next/image";
import user from "../../assets/images/user.svg";

interface ContactDetailsProps {
  avatar: string;
  userName: string;
  cellNmbr: string;
  time: string;
  type: string;
  showContactInfo: (data: {
    avatar: string;
    userName: string;
    cellNmbr: string;
    time: string;
    type: string;
  }) => void;
}

const ContactDetails: FC<ContactDetailsProps> = ({
  avatar,
  userName = "",
  cellNmbr,
  time,
  type,
  showContactInfo,
}) => {
  const fullName = userName
    ? userName
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
    : "";

  return (
    <div
      onClick={() =>
        showContactInfo({ avatar, userName, cellNmbr, time, type })
      }
      className="call-detail w-full ripple px-4  p-2 my-2 e rounded-md"
    >
      <div className="flex w-full items-center cursor-pointer ">
        <span className="avatar p-1 small w-8 h-8 text-xs bg-white flex items-center justify-center rounded-full flex-shrink-0">
          <Image src={user} sizes="" alt="user" />
        </span>
        <div className="ml-3 w-full ">
          <div className="flex text-sm  text-darkSilverColor justify-between">
            {userName}
          </div>
          <div className="text-PhilippineGray text-xs">
            {cellNmbr ? cellNmbr : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
