"use client";

import React, { useState } from "react";

const GetBusiness: React.FC = () => {
  const [businessId, setBusinessId] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!businessId) {
      setError("Please provide a valid business ID.");
      return;
    }

    try {
      const response = await fetch(`/api/lde/getBusiness/${businessId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        // Handle HTTP errors
        console.error(`HTTP error! status: ${response.status}`);
        setError(`HTTP error! status: ${response.status}`);
        return;
      }

      const data = await response.json();
      console.log("Business retrieved successfully", data);
      setResponseData(data);
    } catch (error) {
      // Handle other types of errors (e.g., network errors)
      console.error("Error retrieving business:", error);
      setError("Error retrieving business");
    }
  };

  return (
    <div>
      <h1>Get Business By Id</h1>
      <input
        type="text"
        placeholder="Enter Business ID"
        value={businessId}
        onChange={(e) => setBusinessId(e.target.value)}
        style={{ margin: "10px" }}
      />
      <button onClick={handleSubmit} style={{ cursor: "pointer" }}>
        Submit
      </button>
      {responseData && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default GetBusiness;
