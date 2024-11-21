import React from "react";
interface Props {
  currentStep: number;
  handleNextStep: (value: number) => void;
}
const CampiagnProgressStepper = ({ currentStep, handleNextStep }: Props) => {
  return (
    <>
      <div className="flex w-full gap-2 items-center px-8">
        <div className="flex flex-col gap-1 items-center">
          <span
            className={`text-[#631363] cursor-pointer ${currentStep === 1 ? "bg-[#631363] text-[#FFF]" : ""} z-50 border border-[#631363]  w-10 flex justify-center font-bold items-center h-10 rounded-full`}
            onClick={() => handleNextStep(1)}
          >
            {" "}
            1{" "}
          </span>
        </div>
        <hr className="h-0.5 w-full flex z-20  justify-center items-center bg-[#631363]" />
        <div className="flex flex-col gap-1 items-center ">
          <span
            className={`text-[#631363] cursor-pointer z-50 border border-[#631363] ${currentStep === 2 ? "bg-[#631363] text-[#FFF]" : ""}  w-10 flex justify-center font-bold items-center h-10 rounded-full`}
            onClick={() => handleNextStep(2)}
          >
            {" "}
            2{" "}
          </span>
        </div>
        <hr className="h-0.5 w-full flex z-20  justify-center items-center bg-[#631363]" />
        <div className="flex flex-col gap-1 items-center">
          <span
            className={`text-[#631363] cursor-pointer z-50 border border-[#631363] ${currentStep === 3 ? "bg-[#631363] text-[#FFF]" : ""} w-10 flex justify-center font-bold items-center h-10 rounded-full`}
            onClick={() => handleNextStep(3)}
          >
            {" "}
            3{" "}
          </span>
        </div>
      </div>
      <div className="flex w-full gap-2 justify-between items-center px-3">
        <span className="text-[#6D6D6D] w-20 text-xs text-center font-normal leading-normal">
          Use Case Selection
        </span>
        <span className="text-[#6D6D6D] w-20 text-xs text-center font-normal leading-normal">
          Carrier Terms Preview
        </span>
        <span className="text-[#6D6D6D] w-20 text-xs text-center font-normal leading-normal">
          Campaign Details
        </span>
      </div>
    </>
  );
};

export default CampiagnProgressStepper;
