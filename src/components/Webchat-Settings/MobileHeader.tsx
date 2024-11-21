import React, { useMemo } from "react";

interface HeadBarProps {
  title: string;
  handleClick?: (key: string) => void;
  stateKey: string;
  component: any;
  isActive: boolean;

  // currentValue: boolean;s
  width?: string;
}

const MobileHeadBar = ({
  title,
  handleClick,
  stateKey,
  component,
  isActive,
  //   currentValue,
}: HeadBarProps): JSX.Element => {
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

  const onClickHandler = () => {
    if (handleClick) {
      handleClick(stateKey); // Only pass stateKey
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center rounded-2xl  gap-2 items-center w-full h-full">
        <div className="w-full bg-[#E0E0E0] rounded-2xl lg:bg-[#F4F4F4]">
          <div
            className={`flex bg-[#631363] py-4 md:py-8 w-full justify-start items-center h-[50px] rounded-2xl ${handleClick ? "cursor-pointer" : ""}`}
            onClick={onClickHandler}>
            <span
              className="flex px-5 text-[16px] md:text-xl lg:text-[26px]"
              style={TitleStyle}>
              {title}
            </span>
          </div>
          {isActive && component}
        </div>
      </div>
    </>
  );
};

// Memoize the HeadBar component to avoid unnecessary re-renders when props don't change
export default React.memo(MobileHeadBar);
