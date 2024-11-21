import React from "react";
import Example from "../marketing-screens/chart";

/**
 * Props for the ChartFieldCard component.
 * 
 * @property {string} label - The label text for the card.
 * @property {string} labelValue - The value associated with the label.
 * @property {string} title - The title text for the card.
 * @property {string} titleValue - The value associated with the title.
 * @property {string} [fontSize] - Optional font size for the text.
 */
interface CardProps {
  label: string;
  labelValue: string;
  title: string;
  titleValue: string;
  fontSize?: string;
}

// Default styles for typography used in the component.
const typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * ChartFieldCard component
 * 
 * @param {CardProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered ChartFieldCard component.
 */
const ChartFieldCard: React.FC<CardProps> = ({
  label,
  labelValue,
  title,
  titleValue,
  fontSize = "18px",
}: CardProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="flex-col my-10 flex w-[370px] bg-[#FAFAFA] justify-center  rounded-lg px-3 py-3 ">
        <div className="flex justify-end items-end flex-col gap-2 ">
          <span style={{...typography, fontSize: `${fontSize}`}}>{label}</span>
          <span style={{ ...typography, color: "#631363",fontSize: `${fontSize}` }}>{labelValue}</span>
        </div>
        {/* Render the Example chart component */}
        <div className="flex -ml-3 w-[370px] h-[200px] justify-center items-center">
          <Example />
        </div>
      </div>
      <div className="flex w-[370px]  justify-between px-3 py-3 items-center bg-[#FAFAFA] rounded-lg ">
        <span style={{ ...typography, fontSize: `${fontSize}` }}>{title}</span>
        <span
          style={{ ...typography, fontSize: `${fontSize}`, color: "#631363" }}
        >
          ${titleValue}
        </span>
      </div>
    </div>
  );
};

export default ChartFieldCard;
