import React from "react";

import CircleNumList from "../CircleNumList";
import ReviewWidgetFileUpload from "../ReviewWidgetFIleUpload";

const RatingAndImgContainer = () => {
  return (
    <div className="w-full flex flex-col gap-2 pt-2">
      <div className="w-full flex flex-col gap-2 bg-[#F4F4F4] rounded-t-2xl p-4">
        <ReviewWidgetFileUpload />
        <hr className="my-2 border-[#E0E0E0]" />
        <div className="w-full flex flex-col gap-1 lg:gap-2">
          <div className="text-[#6D6D6D] text-[12px] md:text-lg lg:text-[20px] font-normal">
            Hi FirstName
          </div>
          <div className="text-[#6D6D6D] text-[12px] py-1 lg:py-2 md:text-lg lg:text-[20px] leading-3 md:leading-5 lg:leading-6  font-normal">
            Thank you for using BusinessName. We really appreciate your
            business.
          </div>
          <div className="text-[#6D6D6D] py-1 lg:py-4 w-full lg:w-[65%] text-[12px] md:text-lg lg:text-[20px] leading-3 md:leading-5 lg:leading-6  font-bold md:font-normal">
            How likely is it that you would recommend BusinessName to a friend
            or colleague?
          </div>
        </div>
        <CircleNumList isChecked={true} />
        <div className="w-full flex justify-between items-center py-1 lg:py-4">
          <div className="text-[#6D6D6D] text-[12px] md:text-lg lg:text-[20px] font-normal">
            1 - Not Likely
          </div>
          <div className="text-[#6D6D6D] text-[12px] md:text-lg lg:text-[20px] font-normal">
            10 - Very Likely
          </div>
        </div>
      </div>

      <div className="w-full flex my-1 justify-center items-center flex-col gap-4">
        <div className="text-[#6D6D6D] text-[12px] md:text-lg lg:text-[20px] text-center leading-3 md:leading-5 lg:leading-6  font-normal">
          You are receiving this email because you are a user <br /> or customer
          of BusinessName.
        </div>
        <div className="text-[#6D6D6D] text-[12px] leading-3 md:leading-5 lg:leading-6  md:text-lg lg:text-[20px] text-center font-normal w-48">
          Our mailing address is: BusinessName Address City, Postcode
        </div>
      </div>
      <div className="w-full h-16 flex flex-col justify-center items-center gap-2 bg-[#F4F4F4] rounded-b-2xl p-4">
        <div className="text-[#631363] md:font-normal font-medium text-[12px] md:text-lg lg:text-[20px]  underline">
          Click here to unsubscribe
        </div>
      </div>
    </div>
  );
};

export default RatingAndImgContainer;
