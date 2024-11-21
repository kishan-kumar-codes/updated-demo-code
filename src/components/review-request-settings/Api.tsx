import React from "react";
import HeadBar from "../citations-builder/HeadBar";
const textStyle: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
};
const Api = () => {
  return (
    <div className=" flex flex-col gap-2 py-4 ">
      <HeadBar title="API Information" />
      <HeadBar title="Widget for Map View" />
      <HeadBar title="Widget for Reviews" />
      <div className="flex rounded-3xl z-10 min-h-[160px] justify-start px-5   bg-[#E0E0E0] py-3">
        <div>
          <div>
            <span className="w-full h-full" style={textStyle}>
              Review Sites will be presented to your customers when they are
              sent a customer feedback request via one of the HubSpark mobile
              applications, or the admin portal.
            </span>
          </div>
        </div>
      </div>
      <HeadBar title="Widget for Locations" />
      <HeadBar title="Widget for Compound" />

      <div className="flex my-10"></div>
    </div>
  );
};

export default Api;
