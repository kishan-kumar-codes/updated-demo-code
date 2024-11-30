import { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient } from "graphql-request";

export const config = {
  api: {
    bodyParser: true, // Enable body parser to read the incoming request body
  },
};

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    "Content-Type": "application/json",
    "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Define the mutation to delete a contact by ID
const deleteContactMutation = `
  mutation DeleteContact($id: ID!) {
    deleteContact(filter: { id: [$id] }) {
      contact {
        id
        firstName
        lastName
      }
    }
  }
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "DELETE") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { id } = req.body; // Expecting the contact ID in the request body

  if (!id) {
    return res.status(400).json({ error: "Contact ID is required" });
  }

  try {
    // Execute the mutation with the provided contact ID
    const data = await client.request(deleteContactMutation, { id });

    console.log('Deleted contact:', data); // Log data for debugging

    res.status(200).json({ success: true, message: "Contact deleted successfully", data });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({ error: "Failed to delete contact" });
  }
}
