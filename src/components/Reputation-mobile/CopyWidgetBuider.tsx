"use client";

import { useState } from "react";

interface CopyFileContentProps {
  setIsCopy: (value: boolean) => void;
  bundleValue: string; // Accept bundleValue as a prop
}

const CopyFileContent = ({ setIsCopy, bundleValue }: CopyFileContentProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = async () => {
    try {
      // Copy the bundleValue directly to the clipboard
      await navigator.clipboard.writeText(bundleValue);
      setIsCopy(true);
      // Show tooltip for success
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    } catch (error) {
      // Handle clipboard copy error
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={handleCopy}
        className={`font-bold md:text-lg mt-0 md:mt-4 lg:text-[20px] border px-6 py-2 text-[10px] rounded-xl w-fit text-white text-center bg-[#631363]`}>
        Copy
        {showTooltip && (
          <div
            className="absolute bottom-full mb-2 w-max px-4 py-2 text-sm text-white bg-black rounded-md shadow-md"
            style={{ transform: "translateX(-50%)", left: "50%" }}>
            Code copied!
          </div>
        )}
      </button>
    </div>
  );
};

export default CopyFileContent;
