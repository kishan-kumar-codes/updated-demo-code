import React from "react";

// Define the properties for the AssignList component
/**
 * @property {string} label - The label text for the card.
 */
interface AssignListProps {
  label?: string;
}

// Define the styles for typography and label
const Typegraphy: React.CSSProperties = {
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
 * AssignList Component
 *
 * This component renders a label and an 'Assign' button.
 *
 * @param {AssignListProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered component.
 */
const AssignList: React.FC<AssignListProps> = ({
  label,
}: AssignListProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full items-center gap-6">
        <span style={labelStyle}>{label}</span>
        <button
          style={Typegraphy}
          className="flex bg-[#631363] text-white py-2 px-4 rounded-2xl"
        >
          Assign
        </button>
      </div>
    </div>
  );
};

export default AssignList;
