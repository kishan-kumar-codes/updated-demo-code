import { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient } from "graphql-request";

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    "Content-Type": "application/json",
    "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Query to fetch companies by user ID
const getCompaniesByUserQuery = `
  query GetCompaniesByUser($userId: ID!) {
    getUser(id: $userId) {
      crmCompanies {
        id
        name
        business {              
          id
          name
        }
        size
        address
        city
        zipCode
        state
        website
        user {
          id
          firstName
          lastName
          email
        }
        linkedin
        phoneNumber
        accountManager
        logo
      }
    }
  }
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const { userId } = req.body; // Get the userId from the request body
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }


    // Fetch data from GraphQL API, passing userId as a variable
    const data = await client.request(getCompaniesByUserQuery, { userId });
    const companies = data?.getUser?.crmCompanies; // Safely access the query result

    // Check if companies array is undefined or empty
    if (!companies || companies.length === 0) {
      throw new Error("No companies found for this user");
    }

    res.status(200).json(companies); // Return the list of companies
  } catch (error) {
    console.error("Error fetching companies:", error);
    res.status(500).json({ error: "Failed to fetch companies" });
  }
}
