import React from "react";

export function MapLoader() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[84vh] max-h-screen">
      <div className="flex space-x-2">
        <div className="w-3 h-6 bg-[#631363] rounded-full animate-blink"></div>
        <div className="w-3 h-6 bg-[#631363] rounded-full animate-blink animation-delay-200"></div>
        <div className="w-3 h-6 bg-[#631363] rounded-full animate-blink animation-delay-400"></div>
      </div>
    </div>
  );
}
