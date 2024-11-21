import React from "react";

/**
 * Common typography styles.
 */
export const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontStyle: "normal",
  lineHeight: "normal",
};

/**
 * Specific styles for the rating text.
 */
export const RatingTextStyle: React.CSSProperties = {
  ...Typography,
};

/**
 * Interface for the RadioButtonProps.
 * Represents the properties for the RadioButton component.
 *
 * @interface RadioButtonProps
 * @property {string} label - The text label for the radio button.
 * @property {string} id - The unique identifier for the radio button.
 * @property {number} [fontSize=16] - The font size for the label text. Defaults to 16.
 * @property {number} [fontWeight=700] - The font weight for the label text. Defaults to 700.
 */
interface RadioButtonProps {
  label: string;
  id: string;
  fontSize?: number;
  fontWeight?: number;
}

/**
 * RadioButton component renders a radio button with a label.
 * 
 * @param {RadioButtonProps} props - The properties object.
 * @param {string} props.label - The text label for the radio button.
 * @param {string} props.id - The unique identifier for the radio button.
 * @param {number} [props.fontSize=16] - The font size for the label text. Defaults to 16.
 * @param {number} [props.fontWeight=700] - The font weight for the label text. Defaults to 700.
 * @returns {JSX.Element} The rendered radio button component.
 */
const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  id,
  fontSize = 16,
  fontWeight = 700,
}: RadioButtonProps): JSX.Element => {
  return (
    <div>
      <div
        className={`gap-2 text-[${fontSize}px] font-[${fontWeight}]`}
        style={RatingTextStyle}
      >
        <input
          type="radio"
          id={id}
          name="reviewSite"
          value={label}
          className="hidden-radio visually-hidden"
        />
        <label htmlFor={id} className="custom-radio-label">
          {label}
        </label>
        <br />
      </div>
    </div>
  );
};

export default RadioButton;
