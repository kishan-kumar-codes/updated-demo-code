"use client";

import React, { useState } from "react";

const InitiateSearch: React.FC = () => {
  // Data to be sent in the POST request
  const requestData = {
    name: "pandio",
    street: "302 Washington St",
    zip: "92103",
    country: "US",
  };

  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/lde/initiateSearch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        // Handle HTTP errors
        console.error(`HTTP error! status: ${response.status}`);
        setError(`HTTP error! status: ${response.status}`);
        return;
      }

      const data = await response.json();
      console.log("Search initiated successfully", data);
      setResponseData(data);
    } catch (error) {
      console.error("Error initiating search:", error);
      setError("Error initiating search");
      // Handle other types of errors (e.g., network errors)
    }
  };

  return (
    <div>
      <h1>Initiate Search</h1>
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

export default InitiateSearch;
