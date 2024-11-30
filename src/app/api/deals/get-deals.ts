import { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient } from "graphql-request";


// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    "Content-Type": "application/json",
    "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Define the query to fetch all companies
const getAllDealsQuery = `
query GetDealsByUser($userId: ID!) {
  getUser(id: $userId) {
    crmDeals {
      id
      dealName
      description
      company{
        id
        name
      }
      startAt
      stage
      type
      amount
      user{
        id
        firstName
        lastName
        email
      }
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

    console.log("userId in getcompanies", userId);

    const data = await client.request(getAllDealsQuery, { userId });
    

    const deals = data?.getUser?.crmDeals; // Correct field for contacts
    
    if (!deals || deals.length === 0) {
      console.warn("No contact found"); // Warn if no contacts are returned
    }
        
    res.status(200).json(deals);
  } catch (error) {
    console.error("Error fetching deals:", error);
    res.status(500).json({ error: "Failed to fetch deals" });
  }
}
