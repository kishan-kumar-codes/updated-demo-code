// app/api/deals/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';
import * as jwt from 'jsonwebtoken';

// Define the expected response structure for TypeScript
interface AddDealResponse {
  addcrmDeal: {
    crmDeal: {
      dealName: string;
      description: string;
      company: {
        id: string;
        name: string;
      };
      startAt: string;
      stage: string;
      type: string;
      amount: number;
    };
  };
}

// Initialize GraphQL client
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    'Dg-Auth': process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Define the mutation for creating a deal
const addDealMutation = `
  mutation AddcrmDeal(
    $dealName: String!,
    $description: String!,
    $company: crmCompanyRef!,
    $startAt: String!,
    $stage: String!,
    $type: String!,
    $amount: Int!,
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

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const body = JSON.parse(rawBody);

    const {
      token,
      dealName,
      description,
      company,
      startAt,
      stage,
      type,
      amount,
      userId,
    } = body;

    // Verify the token
    // jwt.verify(token.sessionToken, process.env.SECRET!);

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

    // Execute the GraphQL mutation
    const data = await client.request<AddDealResponse>(addDealMutation, variables);
    const deal = data.addcrmDeal?.crmDeal;

    if (!deal) {
      return NextResponse.json({ error: 'Deal creation failed' }, { status: 400 });
    }

    return NextResponse.json(deal, { status: 200 });
  } catch (error) {
    console.error('Error creating deal:', error);
    return NextResponse.json({ error: 'Failed to create deal' }, { status: 500 });
  }
}
