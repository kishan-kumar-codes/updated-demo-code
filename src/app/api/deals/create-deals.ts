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

// Mutation to create a deal
const addDealMutation = `
  mutation AddcrmDeal(
    $dealName: String!,
    $description: String!,
    $company: crmCompanyRef!,
    $startAt: String!,
    $stage: String!,
    $type: String!,
    $amount: Int!
    $userId: ID!
  ) {
    addcrmDeal(
      input: [{
        dealName: $dealName,
        description: $description,
        company: $company,
        startAt: $startAt,
        stage: $stage,
        type: $type,
        amount: $amount,
        user: { id: $userId }
      }]
    ) {
      crmDeal {
        dealName
        description
        company {  
          id
          name
        }
        startAt
        stage
        type
        amount

      }
    }
  }
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    // Get raw body and parse it manually
    const rawBody = await getRawBody(req);
    const body = JSON.parse(rawBody.toString());

    const {
      token,
      dealName,
      description,
      company,
      startAt,
      stage,
      type,
      amount,
      userId
    } = body;

    // Verify the token
    jwt.verify(token.sessionToken, process.env.SECRET!);

    const variables = {
      dealName,
      description,
      company: { id: company },
      startAt,
      stage,
      type,
      userId,
      amount: parseInt(amount, 10),
    };

    const data = await client.request(addDealMutation, variables);
    const deal = data?.addcrmDeal?.crmDeal;

    if (!deal) {
      throw new Error("Deal creation failed");
    }

    res.status(200).json(deal);
  } catch (error) {
    console.error("Error creating deal:", error);
    res.status(500).json({ error: "Failed to create deal" });
  }
}
