import React from "react";

const labelStyle: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

interface SocialMediaProps {
  label: string;
  svg: React.ReactElement;
  fontSize?: string;
}

/**
 * SocialMedia component
 *
 * A component that displays a label and an SVG icon for social media platforms.
 * The font size of the label can be customized via props.
 *
 * @param {SocialMediaProps} props - The properties for the SocialMedia component.
 * @param {string} props.label - The label text to be displayed above the icon.
 * @param {React.ReactElement} props.svg - The SVG icon to be displayed.
 * @param {string} [props.fontSize="10px"] - The font size for the label text.
 *
 * @returns {JSX.Element} The rendered SocialMedia component.
 */
const SocialMedia = ({
  label,
  svg,
  fontSize = "10px",
}: SocialMediaProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="flex my-2">
        <label
          className="font-semibold text-xs md:text-lg lg:text-[24px]"
          style={{ ...labelStyle }}>
          {label}
        </label>
      </div>
      <div className="flex w-full lg:w-[80%] bg-[#F4F4F4] rounded-2xl h-full p-[2px] lg:p-3">
        {svg}
        <input
          type="text"
          className="w-full h-full focus:outline-none rounded-2xl bg-[#F4F4F4] lg:text-[16px] ml-4"
        />
      </div>
    </div>
  );
};

export default SocialMedia;
