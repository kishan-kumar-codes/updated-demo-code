import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';

// Define the expected response types from the GraphQL API
interface BusinessType {
  id: string;
  name: string;
}

interface GetUserResponse {
  getUser: {
    BusinessTypes: BusinessType[];
  };
}

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    'Dg-Auth': process.env.DGRAPH_GRAPHQL_KEY!, // Replace with your auth key if needed
  },
});

// Query to fetch business types by user ID
const getBusinessTypeUserQuery = `
query GetBusinessTypeUser($userId: ID!) {
  getUser(id: $userId) {
    BusinessTypes {
      id
      name
    }
  }
}
`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Fetch data from GraphQL API with explicit response typing
    const data = await client.request<GetUserResponse>(getBusinessTypeUserQuery, { userId });
    const businessTypes = data?.getUser?.BusinessTypes;

    // Instead of throwing an error, return an empty array if no business types exist
    if (!businessTypes || businessTypes.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(businessTypes, { status: 200 });
  } catch (error) {
    console.error('Error fetching Business Type:', error);
    return NextResponse.json({ error: 'Failed to fetch Business Types' }, { status: 500 });
  }
}
