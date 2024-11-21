import Image from "next/image";

interface MessageBoxProps {
  icon: string;
  userName: string;
  title: string;
  message: string;
  time: string;
  type: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({
  icon,
  userName,
  title,
  message,
  time = "11 : 44",
  type,
}) => {
  return (
    <div className="w-full flex justify-center border-b-[0.5px] border-solid border-darkSilverColor h-[84px]">
      <div className="flex w-full items-center">
        <span className="avatar small shrink-0">
          <Image
            src={icon}
            className="h-[17.7px] w-[26.7px] shrink-0 "
            alt="Picture of the author"
          />
        </span>
        <div className="ml-[14px]">
          <div className="flex text-[14px] font-bold text-PhilippineGray  justify-between">
            {userName}

            <span className="text-right text-textLight text-[12px]  ">
              {time}
            </span>
          </div>
          <div className="">
            <h5 className="message-title italic font-arial text-[11px] text-PhilippineGray font-bold">
              {title}
            </h5>
          </div>
          <div>
            <h5 className="message-desc mt-1  font-arial text-[11px]  text-PhilippineGray">
              {message}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
