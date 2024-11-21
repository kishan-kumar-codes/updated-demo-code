import React, { useMemo } from "react";

interface HeadBarProps {
  title: string;
  handleClick?: () => void;
  width?: string;
}

/**
 * HeadBar component
 *
 * This component renders a header bar with a title. It supports an optional click handler
 * and customizable width. If a click handler is provided, the header will be clickable.
 *
 * @param {HeadBarProps} props - The properties for the HeadBar component.
 * @param {string} props.title - The title to be displayed in the header bar.
 * @param {() => void} [props.handleClick] - Optional click handler for the header bar.
 * @param {string} [props.width="400px"] - Optional width for the header bar. Default is "400px".
 *
 * @returns {JSX.Element} The rendered HeadBar component.
 */
const HeadBar = ({ title, handleClick }: HeadBarProps): JSX.Element => {
  // Memoize the TitleStyle object to prevent re-creation on every render
  const TitleStyle = useMemo(
    () => ({
      color: "#FFF",
      fontFamily: "Arial",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    }),
    []
  );

  return (
    <div
      className={`flex bg-[#631363] py-4 md:py-8 w-full justify-start items-center h-[38px] z-10 rounded-2xl ${handleClick ? "cursor-pointer" : ""}`}
      onClick={handleClick}>
      <span
        className="flex px-5 text-[16px] md:text-xl lg:text-[26px]"
        style={TitleStyle}>
        {title}
      </span>
    </div>
  );
};

// Memoize the HeadBar component to avoid unnecessary re-renders when props don't change
export default React.memo(HeadBar);
