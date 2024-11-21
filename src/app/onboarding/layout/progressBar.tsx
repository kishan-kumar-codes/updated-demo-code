import React, { FC } from "react";

interface ProgressBarProps {
  count: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ count }) => {
  const progressBoxes = new Array(count).fill(0);

  return (
    <div
      className={`w-[90vw] lg:w-[90vw] h-[19px] lg:h-[25px] ${count >= 12 ? "border-limeGreen" : "border-palatinatePurple"} border rounded-lg flex gap-[2px] mt-[19px]`}>
      {progressBoxes.map((_, i) => (
        <div
          key={i}
          className={`h-[100%] w-[8%] lg:w-[115px] ${count >= 13 ? "bg-limeGreen" : "bg-palatinatePurple"} ${
            i === 0 ? "rounded-tl-lg rounded-bl-lg" : ""
          } ${i === count - 1 ? "rounded-tr-lg rounded-br-lg" : ""}`}>
          .
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
