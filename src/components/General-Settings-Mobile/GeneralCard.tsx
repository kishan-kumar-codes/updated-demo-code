import Link from "next/link";
import React from "react";
interface IGeneralCardProps {
  logoSvg: React.ReactElement<any>;
  title: string;
  href: string;
}
const GeneralCard = ({ logoSvg, title, href }: IGeneralCardProps) => {
  return (
    <>
      <Link href={href}>
        <div className="flex flex-col h-[132px]  lg:h-[275px] w-full lg:max-w-[276px] bg-[#FFFFFF] rounded-xl lg:rounded-3xl">
          <div className="flex flex-col justify-center items-center gap-3 lg:gap-4 h-full w-full">
            <span className=" w-14 h-14 p-3 lg:p-7 lg:h-[118px] lg:w-[118px] flex text-center justify-center items-center rounded-full bg-[#E0E0E0]  cursor-pointer">
              {" "}
              {logoSvg}
            </span>
            <span className="text-[#6D6D6D] text-center text-[16px] lg:text-[30px] font-bold leading-normal">
              {title}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default GeneralCard;
