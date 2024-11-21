import { FourSquareSvgs } from "@/svgs/seo-screens/svgs";
import React from "react";
import { TooltipIcon } from "./Tooltip";
import { DisableLocationSvgs } from "@/svgs/citations-builder/svgs";

export const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

interface BuilderItemCardProps {
  label: string;
  id: string;
  bgColor?: string;
  width?: string;
  labelSvg: React.ReactElement;
  titleSvg: React.ReactElement;
  isLocation?: boolean;
  message: string;
}

/**
 * BuilderItemCard component
 *
 * Displays a card with a label, an optional location icon, and a tooltip icon.
 * Includes a checkbox for selection and uses provided SVGs for display.
 *
 * @param {string} label - The label to display on the card.
 * @param {string} id - The unique ID for the checkbox input.
 * @param {React.ReactElement} labelSvg - The SVG to display alongside the label.
 * @param {React.ReactElement} titleSvg - The SVG to display as the location icon (optional).
 * @param {string} [width=400] - The width of the card.
 * @param {string} [bgColor] - The background color of the card.
 * @param {boolean} [isLocation=false] - Flag to indicate if the location icon should be displayed.
 * @returns {JSX.Element} The rendered component.
 */
const BuilderItemCard = ({
  label,
  id,
  labelSvg,
  titleSvg,
  isLocation = false,
  message,
}: BuilderItemCardProps): JSX.Element => {
  return (
    <div
      className={`flex  items-center h-[45px] w-full rounded-2xl border bg-[#E0E0E0] md:bg-[#F4F4F4]`}>
      <div className="w-full h-full flex justify-between items-center px-5">
        <div className="flex w-full h-full">
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {/* Hidden checkbox for selection */}
            <input type="checkbox" id={id} name="reviewSite" value={label} />

            <div className="gap-3 flex items-center h-full w-full">
              {/* SVG and label */}
              {labelSvg}
              <span
                className="text-xs md:text-[20px]"
                style={{ ...Typography, fontWeight: 700 }}>
                {label}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 ">
          {/* Tooltip icon and optional location icon */}
          <TooltipIcon message={message} />
          {isLocation && titleSvg}
        </div>
      </div>
    </div>
  );
};

export default BuilderItemCard;
