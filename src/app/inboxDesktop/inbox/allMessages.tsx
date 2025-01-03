import React, { FC } from "react";
import MessageDetail from "./messageDetail";

interface AllMessagesProps {
  onMessageClick: (messageId: number) => void;
}

const AllMessages: FC<AllMessagesProps> = ({ onMessageClick }) => {
  const dummyData: number[] = [1, 2, 3];
  return (
    <div>
      <div className="">
        {dummyData.map((messageId, i) => (
          <MessageDetail
            key={i}
            onClick={() => onMessageClick(messageId)}
            avatar={""}
            message={"First test message from my web app "}
            userName={"Name Surname"}
            type={""}
            time={"12:10"}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default AllMessages;
