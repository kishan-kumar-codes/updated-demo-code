import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleIcon from "@/assets/images/google-icon.svg";

interface MessageDetailProps {
  onClick: () => void;
  avatar: string;
  userName?: string;
  message: string;
  time: string;
  type: string;
  index?: number
}

const MessageDetail: FC<MessageDetailProps> = ({
  onClick,
  avatar,
  userName = "",
  message,
  time,
  type,
  index
}) => {
  const fullName = userName
    ? userName
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
    : "";
  const [show, setShow] = useState(null)
  const [tag, setTag] = useState('')

  const showChat = () => { };

  const showDiolg = (index: any) => {
    if (show === null)
      setShow(index)
    else
      setShow(null)
  }

  return (
    <div
      onClick={showChat}
      className="call-detail relative w-[510px] h-[90px]  2xl:h-[122px] flex justify-center items-center mb-[10px]  border-[1px] border-solid border-palatinatePurple   bg-chinesWhite rounded-[15px]"
    >
      {/* <Link
        className="flex justify-center items-center w-full"
        href={{
          pathname: "/inbox/chats",
          query: { name: userName },
        }}
      > */}
      <div className="ml-6">
        <Image src={GoogleIcon} className="w-[40px] 2xl:h-[44px] 2xl:w-[44px] h-[40px]" alt="avt" />
      </div>

      <div className="ml-[21px] w-full ">
        <div className="flex text-[18px]  2xl:text-[22px] font-bold text-darkSilverColor justify-between">
          {userName}

          <div className="text-right text-darkSilverColor text-[10px] 2xl:text-[18px] mr-2 font-normal relative">
            {time}

          </div>


        </div>
        <div className="text-darkSilverColor text-[14px] 2xl:text-[18px] font-arial mr-[48px]">
          Hi, I was wondering if you could share more details about pricing?
          Thank you
        </div>
      </div>
      {/* </Link> */}
      <div onClick={() => showDiolg(index)} className=" cursor-pointer absolute right-6 top-12 2xl:top-16">
        <span><svg width="5" height="17" viewBox="0 0 5 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.3999 4.5C3.50447 4.5 4.3999 3.60457 4.3999 2.5C4.3999 1.39543 3.50447 0.5 2.3999 0.5C1.29533 0.5 0.399902 1.39543 0.399902 2.5C0.399902 3.60457 1.29533 4.5 2.3999 4.5Z" fill="#6D6D6D" />
          <path d="M2.3999 10.5C3.50447 10.5 4.3999 9.60457 4.3999 8.5C4.3999 7.39543 3.50447 6.5 2.3999 6.5C1.29533 6.5 0.399902 7.39543 0.399902 8.5C0.399902 9.60457 1.29533 10.5 2.3999 10.5Z" fill="#6D6D6D" />
          <path d="M2.3999 16.5C3.50447 16.5 4.3999 15.6046 4.3999 14.5C4.3999 13.3954 3.50447 12.5 2.3999 12.5C1.29533 12.5 0.399902 13.3954 0.399902 14.5C0.399902 15.6046 1.29533 16.5 2.3999 16.5Z" fill="#6D6D6D" />
        </svg>
        </span>
        <div>
          {show === index &&
            <div className=" h-[161px] w-[148px] flex flex-col justify-evenly items-start px-[8px]  absolute bg-white -right-1 rounded-lg border border-palatinatePurple z-40 -top-6" >
              <h5 onClick={() => setTag('SERVICE')} className=" px-[13px] py-[2px] text-[12px] 2xl:text-[14px]font-bold text-white rounded-md bg-[#1E7FC6]">SERVICE</h5>
              <h5 onClick={() => setTag('MARKETING')} className=" px-[13px] py-[2px] text-[12px] 2xl:text-[14px] font-bold text-white rounded-md bg-[#EA7513]">MARKETING</h5>
              <h5 onClick={() => setTag('SALES')} className="px-[13px] py-[2px] text-[12px] 2xl:text-[14px] font-bold text-white rounded-md bg-[#ED1150]">SALES</h5>
              <h5 onClick={() => setTag('SUPPORT')} className=" px-[13px] py-[2px] text-[12px] 2xl:text-[14px] font-bold text-white rounded-md bg-[#3B9E71]">SUPPORT</h5>
            </div>
          }

        </div>
      </div>
      {
        tag && <div className="absolute bottom-[10px] right-[38px] 2xl:right-[28px]">
          <h5 className={`px-[13px] text-[12px] 2xl:text-[14px] font-bold text-white rounded-md ${tag === 'SERVICE' ? 'bg-[#1E7FC6]' : tag === 'MARKETING' ? 'bg-[#EA7513]' : tag === 'SALES' ? 'bg-[#ED1150]' : 'bg-[#3B9E71]'}`}>{tag}</h5>
        </div>
      }
    </div>
  );
};

export default MessageDetail;
