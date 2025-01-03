import React, { FC, useState } from "react";
import MessageDetail from "./messageDetail";
import { Checkbox } from "../ui/checkbox";

interface AllMessagesProps {
  onMessageClick: (messageId: number) => void;
}

const AllMessages: FC<AllMessagesProps> = ({ onMessageClick }) => {
  const dummyData: number[] = [1, 2, 3];
  const [isBulkAction, setBulkAction] = useState(false);
  const [checkedMessages, setCheckedMessages] = useState<number[]>([]);

  const handleCheckMessage = (messageId: number, isChecked: boolean) => {
    if (isChecked) {
      setCheckedMessages([...checkedMessages, messageId]);
    } else {
      setCheckedMessages(checkedMessages.filter((id) => id !== messageId));
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setCheckedMessages(dummyData);
    } else {
      setCheckedMessages([]);
    }
  };

  return (
    <div>
      <div className="px-2 py-2">
        <div className="py-[6px] mb-[8px] pr-[14px] w-[full] bg-white rounded-md">
          <div className="ml-[55px] ">
            <div className="flex justify-between ">
              <h5 className="text-[14px] font-bold text-darkSilverColor">
                Bulk Actions
              </h5>
              <span>
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.59956 10.1C9.19956 10.5 8.49956 10.5 8.09956 10.1L4.99946 6.99995L1.89961 10.1C1.49961 10.5 0.799609 10.5 0.399609 10.1C-0.000390619 9.70005 -0.000390619 9.00005 0.399609 8.60005L3.49946 5.49995L0.399609 2.4001C-0.000390619 2.0001 -0.000390619 1.3001 0.399609 0.900098C0.799609 0.500098 1.49961 0.500098 1.89961 0.900098L4.99946 3.99995L8.09956 0.900098C8.49956 0.500098 9.19956 0.500098 9.59956 0.900098C9.99956 1.3001 9.99956 2.0001 9.59956 2.4001L6.49946 5.49995L9.59956 8.60005C9.99956 9.00005 9.99956 9.70005 9.59956 10.1Z"
                    fill="#6D6D6D"
                  />
                </svg>
              </span>
            </div>

            <div className="flex">
              <span className="text-[12px]  flex items-center text-darkSilverColor">
                Show all
                <span className="ml-[6px]">
                  <svg
                    width="9"
                    height="5"
                    viewBox="0 0 9 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.59961 4.50024L0.499512 0.300293H8.79956L4.59961 4.50024Z"
                      fill="#6D6D6D"
                    />
                  </svg>
                </span>
              </span>
              <span className="text-[12px] ml-[10px] flex items-center text-darkSilverColor">
                Interactions older than 15 mins{" "}
                <span className="ml-[6px]">
                  <svg
                    width="9"
                    height="5"
                    viewBox="0 0 9 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.59961 4.50024L0.499512 0.300293H8.79956L4.59961 4.50024Z"
                      fill="#6D6D6D"
                    />
                  </svg>
                </span>
              </span>
            </div>
          </div>
          <div className="flex ml-[33px] ">
            <Checkbox
              checked={checkedMessages.length === dummyData.length}
              onCheckedChange={(checked) => handleSelectAll(checked as boolean)}
            />
            <div className="flex ml-[11px] justify-between w-full">
              <div className="text-[14px] font-bold text-darkSilverColor">
                {checkedMessages.length} of {dummyData.length}
              </div>
              <div
                onClick={() => setBulkAction(!isBulkAction)}
                className="relative flex items-center text-[14px] font-bold text-darkSilverColor">
                Actions
                <span className="text-palatinatePurple ml-[5px]">
                  <svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.1 5.4999L8.69985 1.8998C8.99985 1.5998 8.89985 1.1998 8.69985 0.899805C8.39985 0.699805 7.99995 0.699805 7.79995 0.899805L4.69985 3.9999L1.6 0.899805C1.3 0.599805 0.9 0.599805 0.6 0.899805C0.3 1.1998 0.3 1.5998 0.6 1.8998L4.19985 5.4999C4.39985 5.6999 4.9 5.6999 5.1 5.4999Z"
                      fill="#631363"
                    />
                  </svg>
                </span>
                {isBulkAction && (
                  <div className="absolute w-[175px] flex flex-col justify-evenly pl-[19px]  bg-white border border-palatinatePurple -right-1 z-30 top-7  rounded-3xl  h-[102px]">
                    <h5 className="text-[10px] text-darkSilverColor cursor-pointer hover:text-palatinatePurple">
                      Mark All As Read
                    </h5>
                    <h5 className="text-[10px] text-darkSilverColor cursor-pointer hover:text-palatinatePurple">
                      Mark All As Unread
                    </h5>
                    <h5 className="text-[10px] text-darkSilverColor cursor-pointer hover:text-palatinatePurple">
                      Bulk Actions
                    </h5>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
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
            isChecked={checkedMessages.includes(messageId)}
            onCheck={(isChecked) => handleCheckMessage(messageId, isChecked)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllMessages;
