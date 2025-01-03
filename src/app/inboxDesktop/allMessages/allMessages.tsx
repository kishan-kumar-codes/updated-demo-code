import React, { FC } from "react";
import MessageDetail from "./messageDetail";

interface AllMessagesProps {
  onMessageClick: (messageId: number) => void;
  isBulk: boolean
}

const AllMessages: FC<AllMessagesProps> = ({ onMessageClick, isBulk }) => {
  const dummyData: number[] = [1, 2, 3];
  return (
    <div>
      <div className="">
        {dummyData.map((messageId, i) => (
          <div className="flex items-center ">
            {

              isBulk && <input type="checkbox" className="mr-[23px] h-[23px] w-[23px]" />
            }
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

          </div>

        ))}
      </div>
    </div>
  );
};

export default AllMessages;
