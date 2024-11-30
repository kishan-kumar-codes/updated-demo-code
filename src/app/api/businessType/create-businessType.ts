import { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient } from "graphql-request";
import * as jwt from "jsonwebtoken";
import getRawBody from "raw-body";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parser
  },
};

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    "Content-Type": "application/json",
    "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Mutation to add business type
const addBusinessMutation = `
  mutation AddBusinessType($name: String!, $userId: ID!) {
    addBusinessType(
      input: [{
        name: $name,
        user: { id: $userId }
      }]
    ) {
      businessType {
        name
      }
    }
  }
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const rawBody = await getRawBody(req);
    const body = JSON.parse(rawBody.toString());
    console.log("body", body);
    const { token, name, userId } = body;

    // Decode token
    const decodedToken = jwt.verify(token.sessionToken, process.env.SECRET!);

    // Sanitize and remove '0x' prefix from userId
    // const sanitizedUserId = userId.replace(/^0x/, "");
    const variables = { name, userId: userId };

    console.log("Variables being passed to mutation:", variables);  // Add logging here

    // Request to GraphQL API
    const data = await client.request(addBusinessMutation, variables);
    const businessType = data.addBusinessType.businessType;

    if (!businessType) {
      throw new Error("Business Type creation failed");
    }

    res.status(200).json(businessType);
  } catch (error) {
    console.error("Error creating Business Type:", error);
    res.status(500).json({ error: "Failed to create Business Type" });
  }
}
