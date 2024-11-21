import React from "react";
import HeadBar from "./HeadBar";
import DayOptions from "./DayOptions";
import SquareCheckBoxButton from "./SquareCheckBox";

const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

/**
 * BusinessHours component
 *
 * Renders a section for inputting business hours. Includes options for each day of the week, instructions on time format,
 * and checkboxes for additional settings.
 *
 * @returns {JSX.Element} The rendered component.
 */
const BusinessHours: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col my-3 w-full">
      <HeadBar title="Business Hours" />
      <div className="flex rounded-3xl -mt-10 z-0 min-h-[160px] justify-start  px-5 w-full bg-[#E0E0E0] py-3">
        <div className="my-9 w-full flex flex-col justify-start">
          {/* Render options for each day of the week */}
          <DayOptions day={"Monday"} />
          <DayOptions day={"Tuesday"} />
          <DayOptions day={"Wednesday"} />
          <DayOptions day={"Thursday"} />
          <DayOptions day={"Friday"} />
          <DayOptions day={"Saturday"} />
          <DayOptions day={"Sunday"} />
          <div className="flex -ml-2 pl-2 py-2 md:py-4 w-full items-center">
            <span
              className="font-[400] text-[8px] lg:text-[26px]  md:text-base"
              style={Typography}>
              Please only use allowed working hours formats such as, 14:45, 2:45
              pm
            </span>
          </div>
          <div className="flex flex-col my-1 gap-2">
            {/* Checkbox options */}
            <SquareCheckBoxButton
              label="Apply to all"
              id="All-Sites-1"
              fontWeight={700}
            />
            <SquareCheckBoxButton
              label="Opening hours are not supplied"
              id="All-Sites-11"
              fontWeight={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
