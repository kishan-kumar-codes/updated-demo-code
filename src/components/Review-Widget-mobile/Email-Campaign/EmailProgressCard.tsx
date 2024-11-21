import React from "react";

interface ProgressBarCardProps {
  title1: string;
  border?: string;
  value: number; // Expecting a value (not necessarily a percentage)
  color: string;
  width?: string;
  isMobile?: boolean;
}

const Typography: React.CSSProperties = {
  fontFamily: "Arial",
};

const EmailProgressCard = ({
  title1,
  border = "rounded-r-full",
  value,
  color,
}: ProgressBarCardProps) => {
  // Calculate the widths of the inner progress bars based on the value and title1

  return (
    <div className="flex w-full my-2 justify-center items-center">
      <div
        className="flex flex-col gap-2"
        style={{ width: "100%", height: "full" }}>
        <div
          className="gap-2 flex flex-col h-[20px] rounded-full"
          style={{ width: "100%" }}>
          <div className={`flex h-[20px] w-full ${border}`}>
            <div
              className={`rounded-full h-[15px]  w-full  text-center flex justify-center items-center`}
              style={{ background: color }}
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <span
              className="text-[10px] font-bold md:text-[28px] lg:text-[30px] md:font-normal"
              style={{ ...Typography, color: "#6D6D6D" }}>
              {title1}
            </span>
            <span
              className="text-[10px] font-bold md:text-[28px] lg:text-[30px] md:font-normal"
              style={{ ...Typography, color: "#6D6D6D" }}>
              {" "}
              {value}/ {value}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailProgressCard;
