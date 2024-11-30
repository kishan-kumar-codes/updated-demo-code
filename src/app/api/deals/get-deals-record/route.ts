import { NextRequest, NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request";

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    "Content-Type": "application/json",
    "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Define the query to fetch a deal by name
const getDealByNameQuery = `
  query($dealName: String!) {
    dealByName(dealName: $dealName) {
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
`;

// Define TypeScript interfaces for the response
interface Company {
  id: string;
  name: string;
}

interface Deal {
  dealName: string;
  description: string;
  company: Company;
  startAt: string;
  stage: string;
  type: string;
  amount: number;
}

interface GraphQLResponse {
  dealByName: Deal | null;
}

export async function GET(req: NextRequest) {
  try {
    // Get the search parameters
    const { searchParams } = new URL(req.url);
    const dealName = searchParams.get("dealName");

    // Validate the deal name
    if (!dealName) {
      return NextResponse.json({ error: "Missing or invalid deal name" }, { status: 400 });
    }

    // Prepare the GraphQL variables
    const variables = { dealName };

    // Make the request to the GraphQL endpoint
    const data: GraphQLResponse = await client.request(getDealByNameQuery, variables);

    // Extract the deal from the response
    const deal = data?.dealByName;

    if (!deal) {
      return NextResponse.json({ error: "Deal not found" }, { status: 404 });
    }

    // Respond with the deal data
    return NextResponse.json(deal, { status: 200 });
  } catch (error) {
    console.error("Error fetching deal:", error); // Log the error details
    return NextResponse.json({ error: "Failed to fetch deal" }, { status: 500 });
  }
}
