import React from "react";

/**
 * Props for the Card component.
 *
 * @property {string} [label] - The label text for the card.
 * @property {React.ReactElement} [svgAction] - The SVG element for the action icon.
 * @property {React.ReactElement} [svgCall] - The SVG element for the call icon.
 * @property {React.ReactElement} [svglogo] - The SVG element for the logo.
 * @property {string} [btnText] - The text for the button.
 */
export interface CardProps {
  label?: string;
  svgAction?: React.ReactElement;
  svgCall?: React.ReactElement;
  svglogo?: React.ReactElement;
  btnText?: string;
}

// Define the styles for typography and label
const typography: React.CSSProperties = {
  color: "#F4F4F4",
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const labelStyle: React.CSSProperties = {
  ...typography,
  color: "#6D6D6D",
  fontSize: "20px",
};

/**
 * Card Component
 *
 * This component renders a card with an optional label, SVG icons, and a button.
 *
 * @param {CardProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered component.
 */
const Card: React.FC<CardProps> = ({
  label,
  svgAction,
  svglogo,
  svgCall,
  btnText,
}: CardProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center rounded-3xl -mt-4 mb-9 px-3 bg-[#E0E0E0] py-2">
      <div className="flex gap-3 justify-between items-center">
        <div className="flex w-24 h-full cursor-pointer gap-1">{svglogo}</div>
        <div className="flex w-full">
          <div className="flex flex-col gap-1 w-full">
            <span className="w-full" style={labelStyle}>
              {label}
            </span>
            <div className="flex gap-4 items-center py-2 px-3">
              <span className="cursor-pointer">{svgAction}</span>
              <span className="cursor-pointer">{svgCall}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-1 w-32 justify-end">
          <button
            style={typography}
            className="flex bg-[#631363] text-white py-2 px-4 rounded-2xl">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
