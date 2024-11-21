"use client";

import React, { useState } from "react";

const UpdateBusiness: React.FC = () => {
  const [businessId, setBusinessId] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState("");

  const updateData = {
    publishers: [
      {
        publisher: "apple-maps",
      },
    ],
    business: {
      name: "KumarNewwww",
      legal_name: "Kumar CompNewwww",
      addresses: [
        {
          street: "123 Main Road",
          city: "Bangalore",
          state: "Karnataka",
          zip: "560004",
          country: "IN",
        },
      ],
      contacts: [
        {
          first_name: "James",
          middle_name: "E.",
          last_name: "Smith",
          phones: [
            {
              phone_number: "(805) 445-2343",
              type: "landline",
            },
          ],
          emails: [
            {
              email_address: "kumar@123.com",
            },
          ],
        },
      ],
      phones: [
        {
          phone_number: "(805) 445-2343",
          type: "landline",
        },
      ],
      faxes: [
        {
          fax_number: "(805) 345-2355",
        },
      ],
      websites: [
        {
          website_address: "http://kumarcompany.com",
        },
      ],
      categories: [
        {
          name: "babysitter",
        },
      ],
      tags: [
        {
          name: "Free Wifi",
        },
      ],
      services: [
        {
          name: "Room Service",
        },
      ],
      images: [
        {
          source: "http://website.com/logo.png",
        },
      ],
      number_of_employees: "46",
      date_business_started: "02/2001",
      payment_methods: [
        {
          method: "american_express",
        },
      ],
    },
  };

  const handleSubmit = async () => {
    if (!businessId) {
      setError("Please provide a valid business ID.");
      return;
    }

    try {
      const response = await fetch(`/api/lde/updateBusiness/${businessId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        setError(`HTTP error! status: ${response.status}`);
        return;
      }

      const data = await response.json();
      console.log("Business updated successfully", data);
      setResponseData(data);
    } catch (error) {
      console.error("Error updating business:", error);
      setError("Error updating business");
    }
  };

  return (
    <div>
      <h1>Update Business By Id</h1>
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

export default UpdateBusiness;
