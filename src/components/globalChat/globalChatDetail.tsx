import React, { FC } from "react";
import Image from "next/image";

import globalInnerIcon from "../../assets/images/globa-inner-icon.svg";

interface GlobalChatDetailProps {
  avatar: string;
  userName?: string;
  message: string;
  time: string;
  type: string;
}

const GlobalChatDetail: FC<GlobalChatDetailProps> = ({
  avatar,
  userName = "",
  message,
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
    <div className="call-detail w-full relative flex items-center border border-solid border-palatinatePurple px-5 py-3 my-2 pb-5  rounded-2xl">
      <div className="flex w-full items-center ">
        <span className="avatar small w-8 h-8 text-xs palatinatePurple flex items-center justify-center  flex-shrink-0 ">
          <Image
            width={70}
            height={70}
            src={globalInnerIcon}
            className="palatinatePurple"
            alt="chat"
          />
        </span>
        <div className="ml-3 w-full ">
          <div className="flex text-sm font-bold text-darkSilverColor justify-between">
            {userName}
          </div>
          <div className="text-darkSilverColor text-xs font-normal">
            {message && message.length > 100
              ? message.substr(0, 100) + "..."
              : message}
          </div>
        </div>
      </div>
      <div className="flex justify-end"></div>
      <span className="text-right absolute bottom-1 right-2 text-darkSilverColor text-xs font-normal">
        {time}
      </span>
    </div>
  );
};

export default GlobalChatDetail;
