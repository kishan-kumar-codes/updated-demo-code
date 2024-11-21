import React from "react";
import HeadBar from "./HeadBar";
import InputBarField from "./InputBarField";

/**
 * BusinessDetails component
 *
 * Renders a section with input fields for entering business details.
 * Includes fields for location name, address, city, state, zip code, country, phone number, and business category.
 *
 * @returns {JSX.Element} The rendered component.
 */
const BusinessDetails: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col my-3 w-full">
      <div className="flex rounded-3xl justify-start items-center flex-col md:min-w-full bg-[#E0E0E0] pb-3">
        <HeadBar title="Business Details" />
        <div className="my-4 px-4 grid md:grid-cols-2  md:w-[95%] grid-cols-1 gap-2 md:gap-4 w-full">
          <InputBarField
            label="Location Name (business name)*"
            placeHolder=""
          />
          <InputBarField label="Address Line 1*" placeHolder="" />
          <InputBarField label="Address Line 2*" placeHolder="" />
          <InputBarField label="Website Url*" placeHolder="" />
          <InputBarField label="City / Town*" placeHolder="" />
          <InputBarField label="State / Providence*" placeHolder="" />
          <InputBarField label="Zip / Postal Code*" placeHolder="" />
          <InputBarField label="Country*" placeHolder="" />
          <InputBarField label="Phone*" placeHolder="" />
          <InputBarField label="Business Category*" placeHolder="" />
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
