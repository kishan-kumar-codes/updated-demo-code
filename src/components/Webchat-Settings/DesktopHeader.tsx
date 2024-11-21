import React, { useMemo } from "react";

interface HeadBarProps {
  title: string;
  handleClick?: (key: string) => void;
  stateKey: string;
  isActive: boolean; // New prop for active state
  width?: string;
}

const DesktopHeadBar = ({
  title,
  handleClick,
  stateKey,
  isActive, // Destructure the new prop
}: HeadBarProps): JSX.Element => {
  const TitleStyle = useMemo(
    () => ({
      fontFamily: "Arial",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    }),
    []
  );

  const onClickHandler = () => {
    if (handleClick) {
      handleClick(stateKey);
    }
  };

  return (
    <div
      className={`flex py-4 md:py-8 w-fit justify-start gap-1 items-center h-[50px] rounded-2xl ${handleClick ? "cursor-pointer" : ""}`}
      onClick={onClickHandler}>
      <span
        className={`flex border-b-2 pb-4 z-50 border-[#631363] text-[#6D6D6D] md:px-0 lg:px-3 text-[16px] md:text-xl lg:text-[26px] ${isActive ? "border-b-4 border-[#631363]" : "border-transparent"}`} // Change color based on active state
        style={TitleStyle}>
        {title}
      </span>
    </div>
  );
};

// Memoize the HeadBar component
export default React.memo(DesktopHeadBar);
