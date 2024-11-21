import React, { FC } from "react";
import GlobalChatDetail from "./globalChatDetail";
import Link from "next/link";
interface AllGlobalChatsProps {}

const AllGlobalChats: FC<AllGlobalChatsProps> = () => {
  const dummyData: number[] = [1, 2, 3, 4, 6];
  return (
    <div>
      <div className="px-2">
        {dummyData.map((_, ind) => (
          <Link key={ind} href="/globalChat/messageView">
            <GlobalChatDetail
              key={ind}
              avatar={""}
              message={"First test message from my web app "}
              userName={"Test"}
              type={"Billing"}
              time={"12:10"}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllGlobalChats;
