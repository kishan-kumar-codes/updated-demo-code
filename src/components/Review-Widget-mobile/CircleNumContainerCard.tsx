import React from "react";

export interface CircleNumContainerCardProps {
  number: number;
  circleSize1: number;
  circleSize2: number;
  bgColor1: string; // Can be a gradient or a solid color
  bgColor2: string; // Solid color
}

const CircleNumContainerCard = ({
  number,
  circleSize1,
  circleSize2,
  bgColor1,
  bgColor2 = "#fff",
}: CircleNumContainerCardProps) => {
  const typography: React.CSSProperties = {
    color: "#6D6D6D",
    fontFamily: "Arial",
    lineHeight: "normal",
  };

  return (
    <div
      className="flex justify-center items-center h-[25px] w-[25px] md:h-[27px] md:w-[27px] lg:h-[44px] lg:w-[44px] rounded-full"
      style={{ background: bgColor1 }}>
      <div
        className="flex rounded-full h-[19px] w-[19px] md:h-[21px] md:w-[21px] lg:h-[34px] lg:w-[34px] items-center"
        style={{
          background: bgColor2,
        }}>
        <div
          className="flex text-[9px] md:text-[12px] lg:text-base justify-center items-center text-center font-bold md:font-normal w-full"
          style={typography}>
          {number}
        </div>
      </div>
    </div>
  );
};

export default CircleNumContainerCard;
