"use client";
import React from "react";

const BundleButton: React.FC = () => {
  const handleBundleClick = async () => {
    try {
      const response = await fetch("/api/widget/bundle", { method: "POST" });
      const data: { message?: string } = await response.json(); // Type the response data
      if (data) alert(data.message || "Bundling completed");
      console.log("data:", data);
    } catch (error) {
      // Type the error to catch errors from fetch
      if (error instanceof Error) {
        alert("Bundling failed: " + error.message);
      } else {
        alert("Bundling failed due to an unknown error");
      }
    }
  };

  return (
    <div>
      <h1>Trigger Bundling</h1>
      <button onClick={handleBundleClick} className="border">
        {" "}
        Bundle Now
      </button>
    </div>
  );
};

export default BundleButton;
