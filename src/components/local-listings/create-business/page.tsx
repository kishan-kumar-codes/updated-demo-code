"use client";

import React, { useState } from "react";

const CreateBusiness: React.FC = () => {
  // Data to be sent in the POST request
  const requestData = {
    publishers: [
      {
        publisher: "four-square",
        public_listing: true,
      },
    ],
    business: {
      name: "developer09",
      legal_name: "developerComp09",
      addresses: [
        {
          street: "3075 N COLLEGE AVE",
          city: "FAYETTEVILLE",
          state: "AR",
          zip: "72703",
          country: "US",
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
              email_address: "developer@05.com",
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
          website_address: "http://developer09.com",
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
      date_business_started: "04/2024",
      payment_methods: [
        {
          method: "american_express",
        },
      ],
    },
  };

  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/lde/createBusiness", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle HTTP errors
        console.error(`HTTP error! status: ${response.status}`);
        setError(
          `HTTP error! status: ${response.status} ErrorDetails: ${data.details}`
        );
        return;
      }

      console.log("Business created successfully", data);
      setResponseData(data);
    } catch (error) {
      // Handle other types of errors (e.g., network errors)
      console.error("Error creating business:", error);
      setError("Error creating business");
    }
  };

  return (
    <div>
      <h1>Create A New Business</h1>
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

export default CreateBusiness;
