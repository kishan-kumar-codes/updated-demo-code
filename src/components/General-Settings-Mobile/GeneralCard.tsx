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
        <div className="flex flex-col h-40 w-full bg-[#FFFFFF] rounded-xl">
          <div className="flex flex-col justify-center items-center gap-3 h-full w-full">
            <span className=" w-14 h-14 flex text-center justify-center items-center rounded-full bg-[#E0E0E0]  cursor-pointer">
              {" "}
              {logoSvg}
            </span>
            <span className="text-[#6D6D6D] text-center text-lg font-bold leading-normal">
              {title}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default GeneralCard;
