import { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient } from "graphql-request";

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    "Content-Type": "application/json",
    "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Define the correct query to fetch all contacts
const getAllContactQuery = `
query GetContactsByUser($userId: ID!) {
  getUser(id: $userId) {
    crmContacts {
      id
      firstName
      lastName
      company{
        id
        name
      }
      email
      phoneNumber_1
      phoneNumber_2
      background
      contactLogo
      tag
      hasNewsLetter
      title
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
    console.log('userId:....................',userId)
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }


    const data = await client.request(getAllContactQuery, { userId });

    const contact = data?.getUser?.crmContacts; // Correct field for contacts

    if (!contact || contact.length === 0) {
      console.warn("No contact found"); // Warn if no contacts are returned
    }
        
    res.status(200).json(contact);
  } catch (error) {
    console.error("Error fetching contact:", error);
    res.status(500).json({ error: "Failed to fetch contact" });
  }
}
