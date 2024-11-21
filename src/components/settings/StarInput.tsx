import React from "react";
interface starInputProps {
  svg: React.ReactElement;

  placeHolder?: string;
  width?: number;
}
const StarInput = ({ svg, placeHolder, width }: starInputProps) => {
  return (
    <div
      className={`flex w-full max-w-md  flex-shrink items-center justify-between my-2  relative`}
    >
      <label
        className="text-lg justify-start w-full  my-1 ml-2 flex"
        htmlFor="citations"
      >
        {svg}
      </label>

      <input
        type="text"
        id="citations"
        placeholder={placeHolder}
        className={`py-2 w-[${width}px] ml-2 px-3 italic rounded-2xl focus:outline-none`}
      />
    </div>
  );
};

export default StarInput;
