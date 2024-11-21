import React, { FC } from "react";
import CallDetail from "./callDetail";

import user from "../../assets/images/user.svg";
import "../../app/globals.css";

interface AllCallsProps {}

interface DummyDataInterFace {
  avatar: any | string;
  cellNmbr: string;
  userName: string;
  type: string;
  time: string;
}

const AllCalls: FC<AllCallsProps> = () => {
  const dummyData: DummyDataInterFace[] = [
    {
      avatar: user,
      cellNmbr: "(305) 555-3653",
      type: "Outgoing Call",
      time: "12:10",
      userName: "Lily Broke",
    },
    {
      avatar: user,
      cellNmbr: "(305) 555-3653",
      type: "Incoming Call",
      time: "12:10",
      userName: "Lily Broke",
    },
    {
      avatar: user,
      cellNmbr: "(305) 555-3653",
      type: "Missed Call",
      time: "12:10",
      userName: "Lily Broke",
    },
    {
      avatar: user,
      cellNmbr: "(305) 555-3653",
      type: "Missed Call",
      time: "12:10",
      userName: "Lily Broke",
    },
    {
      avatar: user,
      cellNmbr: "(305) 555-3653",
      type: "Missed Call",
      time: "12:10",
      userName: "Lily Broke",
    },
    {
      avatar: user,
      cellNmbr: "(305) 555-3653",
      type: "Missed Call",
      time: "12:10",
      userName: "Lily Broke",
    },
    {
      avatar: user,
      cellNmbr: "(305) 555-3653",
      type: "Missed Call",
      time: "12:10",
      userName: "Lily Broke",
    },
    {
      avatar: user,
      cellNmbr: "(305) 555-3653",
      type: "Missed Call",
      time: "12:10",
      userName: "Lily Broke",
    },
  ];
  return (
    <div>
      <span className="text-lg text-darkSilverColor px-3">Today</span>
      <div className="px-3 ">
        {dummyData.map((info, ind) => (
          <CallDetail
            key={ind}
            avatar={info.avatar}
            cellNmbr={info.cellNmbr}
            userName={info.userName}
            type={info.type}
            time={info.time}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCalls;
