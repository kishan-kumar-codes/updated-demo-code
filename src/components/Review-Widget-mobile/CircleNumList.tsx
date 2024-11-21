import React from "react";
import CircleNumContainerCard from "./CircleNumContainerCard";

// Define type for card configuration
interface CardConfig {
  number: number;
  bgColor1: string;
}

// Define card configurations
const cardConfigs: CardConfig[] = [
  { number: 1, bgColor1: "#FE0000" },
  { number: 2, bgColor1: "#FF3D00" },
  { number: 3, bgColor1: "#FF7B00" },
  { number: 4, bgColor1: "#FF9A00" },
  { number: 5, bgColor1: "#FFB902" },
  { number: 6, bgColor1: "#FFF600" },
  { number: 7, bgColor1: "#C2F900" },
  { number: 8, bgColor1: "#86FB00" },
  { number: 9, bgColor1: "#49FC00" },
  { number: 10, bgColor1: "#0BFE02" },
];

interface CircleNumListProps {
  isChecked?: boolean;
}
const CircleNumList: React.FC<CircleNumListProps> = ({ isChecked }) => {
  return (
    <div
      className="flex gap-1 my-2 w-full justify-between"
      style={{ opacity: isChecked ? 1 : 0.5 }}>
      {cardConfigs.map(({ number, bgColor1 }) => (
        <CircleNumContainerCard
          key={number}
          number={number}
          circleSize1={25}
          circleSize2={19}
          bgColor1={bgColor1}
          bgColor2="linear-gradient(90deg, #FFF 0.28%, #D3D3D3 100%)"
        />
      ))}
    </div>
  );
};

export default React.memo(CircleNumList);
