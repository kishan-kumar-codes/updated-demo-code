import { StaticImageData } from "next/image";
import Image from "next/image";

import React from "react";
interface NumCardProps {
  cornerSvg: JSX.Element;
  desktopSvg: StaticImageData;
  title: string;
  mainSvg: JSX.Element;
  starComponent: JSX.Element;
}
const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "29.335px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const NumCard = ({
  cornerSvg,
  title,
  mainSvg,
  desktopSvg,
  starComponent,
}: NumCardProps) => {
  return (
    <div className="w-full flex pb-2 bg-[#E0E0E0] rounded-3xl ">
      <span className=" flex w-16 ">{cornerSvg}</span>
      <div className="flex gap-2 flex-col -ml-14 w-full  ">
        <span className="flex py-3 items-center justify-center">
          <Image className="w-12 md:w-fit" alt="Icons" src={desktopSvg} />
        </span>
        <span className="flex items-center justify-center">
          <div className="w-20 md:w-36 h-fit"> {starComponent}</div>
        </span>
        <span style={Typography} className="flex justify-center">
          {title}
        </span>
      </div>
    </div>
  );
};

export default NumCard;
