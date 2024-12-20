"use client";

import React from "react";
interface LoaderProps {
  message?: string;
}

const Loader = ({ message }: LoaderProps) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-[200px] w-full">
      <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] border-4 border-[#631363]/30 border-t-[#631363] rounded-full animate-spin" />
      <p className="text-[#631363] text-lg md:text-xl lg:text-2xl">
        {!message ? "Wait! Loading..." : message}
      </p>
    </div>
  );
};

export default Loader;
