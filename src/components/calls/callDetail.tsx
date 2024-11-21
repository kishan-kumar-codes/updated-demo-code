import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import user from "../../assets/images/user.svg";

interface CallDetailsProps {
  avatar: string;
  userName?: string;
  cellNmbr: any;
  time: string;
  type: string;
}

const CallDetails: FC<CallDetailsProps> = ({
  avatar,
  userName = "",
  cellNmbr,
  time,
  type,
}) => {
  const fullName = userName
    ? userName
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
    : "";
  return (
    <Link
      href={{
        pathname: "/calls/outgoingCall",
        query: { name: "test" },
      }}
    >
      <div className="call-detail w-full ripple  p-2 my-2 bg-chinesWhite rounded-md">
        <div className="flex w-full items-center ">
          <span className="avatar p-1 small w-8 h-8 text-xs bg-white flex items-center justify-center rounded-full flex-shrink-0">
            <Image src={user} sizes="" alt="user" />
          </span>
          <div className="ml-3 w-full ">
            <div className="flex text-sm  text-darkSilverColor justify-between">
              {userName}

              <span className="text-right text-darkSilverColor text-xs font-normal">
                {time}
              </span>
            </div>
            <div className="text-PhilippineGray text-xs">
              {cellNmbr ? cellNmbr : ""}
            </div>
            <div
              className={`flex ${
                type?.includes("Incoming")
                  ? "text-blue"
                  : type?.includes("Outgoing")
                  ? "text-limeGreen"
                  : "text-red"
              }  items-center`}
            >
              <div className=" text-xs">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="text-xs rounded px-1 font-semibold">{type}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CallDetails;
