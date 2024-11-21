import React from "react";
import HeadBar from "./HeadBar";
import InputBarField from "./InputBarField";

/**
 * AboutBusiness component
 *
 * This component renders a section to input the business description.
 * It includes a header and a text field for the business description.
 *
 * @returns {JSX.Element} The rendered component
 */
const AboutBusiness: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col my-3 w-full">
      {/* Header bar with the title */}
      <HeadBar title="About The Business" />
      <div className="flex rounded-3xl -mt-10 z-0 min-h-[160px] justify-start px-4 md:px-7 md:max-w-full md:min-h-fit bg-[#E0E0E0] py-3">
        <div className="my-9 w-full">
          {/* Input field for the business description */}
          <InputBarField
            label="Business Description*"
            placeHolder="Type your business description"
            textField={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBusiness;
