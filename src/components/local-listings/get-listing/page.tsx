"use client";

import React, { useState } from "react";

const GetListing: React.FC = () => {
  const [businessId, setBusinessId] = useState("");
  const [listingData, setListingData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!businessId) {
      setError("Please provide a valid business ID.");
      return;
    }

    try {
      const response = await fetch(`/api/lde/getListing/${businessId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        setError(`HTTP error! status: ${response.status}`);
        return;
      }

      const data = await response.json();
      console.log("Listing retrieved successfully", data);
      setListingData(data);
    } catch (error) {
      console.error("Error retrieving listing:", error);
      setError("Error retrieving listing");
    }
  };

  return (
    <div>
      <h1>Get Business Listing By ID</h1>
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
      {listingData && (
        <div>
          <h3>Listing Data:</h3>
          <pre>{JSON.stringify(listingData, null, 2)}</pre>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default GetListing;
