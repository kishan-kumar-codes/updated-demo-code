"use client";
import { useState } from "react";

const CounterTextArea = () => {
  const [text, setText] = useState("");
  const charLimit = 150;

  const handleChange = (e: { target: { value: string; }; }) => {
    // Allow setting the text only if it's within the character limit
    if (e.target.value.length <= charLimit) {
      setText(e.target.value);
    }
  };

  return (
    <div className="relative w-full">
      <textarea
        className="w-full h-[100px] bg-[#F4F4F4] text-[12px] rounded-2xl p-2"
        placeholder="Enter your SMS text here"
        value={text}
        onChange={handleChange}
        // Remove the disabled prop to allow text deletion
      />
      <span className="absolute bottom-2 right-4 text-[#6D6D6D] text-[10px] font-bold leading-normal">
        {charLimit - text.length} characters remaining
      </span>
    </div>
  );
};

export default CounterTextArea;
