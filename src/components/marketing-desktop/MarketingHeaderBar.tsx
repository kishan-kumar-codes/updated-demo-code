import React, { useMemo } from "react";

/**
 * HeadBarProps interface
 * 
 * This interface defines the properties for the MarketingHeaderBar component.
 * 
 * @property {string} title - The title displayed in the header bar.
 * @property {() => void} [handleClick] - Optional click handler for the header bar.
 */
interface HeadBarProps {
  title: string;
  handleClick?: () => void;
}

/**
 * MarketingHeaderBar component
 * 
 * This component renders a header bar with a title and supports an optional click handler.
 * The TitleStyle object is memoized to prevent unnecessary re-creation on every render.
 *
 * @param {HeadBarProps} props - The properties to pass to the component.
 * @returns {JSX.Element} The rendered MarketingHeaderBar component.
 */
const MarketingHeaderBar = ({ title, handleClick }: HeadBarProps): JSX.Element => {
  // Memoize the TitleStyle object to prevent re-creation on every render
  const TitleStyle = useMemo(() => ({
    color: "#FFF",
    fontFamily: "Arial",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  }), []);

  return (
    <div
      className={`flex z-20 ml-5 bg-[#631363] w-[90%] justify-start items-center h-[60px] rounded-3xl ${handleClick ? "cursor-pointer" : ""}`}
      onClick={handleClick}
    >
      <span className="flex px-5 ml-7 py-4" style={TitleStyle}>
        {title}
      </span>
    </div>
  );
};

// Memoize the MarketingHeaderBar component to avoid unnecessary re-renders when props don't change
export default React.memo(MarketingHeaderBar);
