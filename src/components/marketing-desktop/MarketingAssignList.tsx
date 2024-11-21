import React from "react";

/**
 * AssignListProps interface
 * 
 * This interface defines the properties for the MarketingAssignList component.
 * 
 * @property {string} [label] - The label for the assign list.
 */
interface AssignListProps {
  label?: string;
}

const typography: React.CSSProperties = {
  color: "#F4F4F4",
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const labelStyle: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * MarketingAssignList component
 *
 * This component renders a list item with a label and an assign button.
 *
 * @param {AssignListProps} props - The properties to pass to the component.
 * @returns {JSX.Element} The rendered MarketingAssignList component.
 */
const MarketingAssignList = ({ label }: AssignListProps): JSX.Element => {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="flex w-full justify-center items-center gap-6 px-10">
        <span style={labelStyle}>
          {label}
        </span>
        <button
          style={typography}
          className="flex bg-[#631363] text-white py-2 px-4 rounded-2xl"
        >
          Assign
        </button>
      </div>
    </div>
  );
};

export default MarketingAssignList;
