import React from "react";
import HeadBar from "../citations-builder/HeadBar";
import InputBarField from "../citations-builder/InputBarField";

const MyPassword = () => {
  return (
    <div className=" flex flex-col py-4 gap-2">
      <HeadBar title="Change Your Password" />
      <div className="flex rounded-3xl z-10 min-h-[160px] justify-start px-5 bg-[#E0E0E0] py-3">
        <div className="py-10  w-full">
          <div className="flex flex-col gap-2 pt-4 ">
            <InputBarField
              direction="flex"
              gap={20}
              width={250}
              label="Current password"
              placeHolder=""
            />
            <InputBarField
              direction="flex"
              gap={20}
              width={250}
              label="New password"
              placeHolder=""
            />
            <InputBarField
              direction="flex"
              gap={20}
              width={250}
              label="Confirm new password"
              placeHolder=""
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
