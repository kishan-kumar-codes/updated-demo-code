import React from "react";
import HeadBar from "../citations-builder/HeadBar";
import InputBarField from "../citations-builder/InputBarField";

const MyPassword = () => {
  return (
    <div className=" flex flex-col gap-2  -ml-3 mt-5 m-9 ">
      <HeadBar title="Change Your Password" />
      <div className="flex rounded-3xl -mt-14 z-10 min-h-[160px] w-[400px]  justify-start px-5 ml-5     bg-[#E0E0E0] py-3">
        <div className="pt-10  w-full">
          <div className="flex flex-col pt-4  mb-10 ">
            <InputBarField
              direction="flex"
              gap={20}
              width={250}
              label="Current password"
              placeHolder=""
              isMobile
            />
            <InputBarField
              direction="flex"
              gap={20}
              width={250}
              label="New password"
              placeHolder=""
              isMobile
            />
            <InputBarField
              direction="flex"
              gap={20}
              width={250}
              label="Confirm new password"
              placeHolder=""
              isMobile
            />
            <div className="flex-col  w-full items-start  pt-4   flex -ml-1 justify-start ">
              <span className="bg-[#40F440]   font-[500] text-black p-1 px-3 rounded-lg  ">
                Save New Password
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPassword;
