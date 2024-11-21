"use client";

import React, { useState } from "react";

const PresenceSearch: React.FC = () => {
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const [publisher, setPublisher] = useState("");

  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to handle loading status

  const handleSubmit = async () => {
    if (!id || !token || !publisher) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    const queryParams = new URLSearchParams({
      id,
      token,
      publisher,
    }).toString();
    const url = `/api/lde/presenceSearch?${queryParams}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      setIsLoading(false); // Reset loading state after the fetch operation
      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        setError(`HTTP error! status: ${response.status}`);
        return;
      }

      const data = await response.json();
      console.log("Search initiated successfully", data);
      setResponseData(data);
    } catch (error) {
      setIsLoading(false);
      console.error("Error initiating search:", error);
      setError("Error initiating search");
    }
  };

  return (
    <div>
      <h1>Presence Search</h1>
      <div>
        <label>
          ID:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label>
          Token:
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </label>
        <label>
          Publisher:
          <input
            type="text"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleSubmit} style={{ cursor: "pointer" }}>
        {isLoading ? "Loading..." : "Submit"}
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

export default PresenceSearch;
