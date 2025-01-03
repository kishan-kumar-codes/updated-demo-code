import React, { FC } from "react";

interface MessageProps {
  message: {
    userId: string;
    avatar: string;
    message: string;
    timeStamp: string;
  };
}

const Message: FC<MessageProps> = ({ message }) => {
  if (!message) {
    return null;
  }

  const loggedUserId: string = "own";

  return (
    <div
      className={`${
        message.userId === loggedUserId ? "flex-row-reverse" : ""
      }  chat  relative flex  mb-6 items-end`}>
      <div className="avatar">
        <div
          className={`${
            message.userId === loggedUserId
              ? "bg-limeGreen mine"
              : "bg-palatinatePurple"
          } usr-img opacity-70 flex mt-4 justify-center text-[13px] items-center h-12 w-12 rounded-full`}>
          <div className="userName text-chinesWhite  font-bold">
            {message.avatar}
          </div>
        </div>
      </div>
      <div className={` message mx-3 mb-0 -bottom-4 text-white p-4 pb-0 `}>
        <div
          className={`msg-content text-[11px] lg:text-lg text-md rounded-3xl relative  ${
            message.userId === loggedUserId
              ? "bg-limeGreen mine rounded-br-xl"
              : "bg-palatinatePurple other rounded-bl-xl"
          } p-4`}>
          {message.message}
        </div>
        <div
          className={` text-xs ${
            message.userId === loggedUserId ? "right-1" : " right-4"
          } timeStamp absolute  text-lightSilverColor  `}>
          {message.timeStamp}
        </div>
      </div>
    </div>
  );
};

export default Message;
