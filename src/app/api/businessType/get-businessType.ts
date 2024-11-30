import { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient } from "graphql-request";

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    "Content-Type": "application/json",
    "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!, // Replace with your auth key if needed
  },
});

// Query to fetch business types by user ID
const getBusinessTypeUserQuery = `
query GetBusinessTypeUser($userId: ID!) {
  getUser(id: $userId) {
    businessTypes {
      id
      name
    }
  }
}
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    // Fetch data from GraphQL API
    const data = await client.request(getBusinessTypeUserQuery, { userId });
    const businessTypes = data?.getUser?.businessTypes;

    // Instead of throwing an error, return an empty array if no business types exist
    if (!businessTypes || businessTypes.length === 0) {
      return res.status(200).json([]);
    }

    res.status(200).json(businessTypes);
  } catch (error) {
    console.error("Error fetching Business Type:", error);
    res.status(500).json({ error: "Failed to fetch Business Types" });
  }
}

