import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';
import * as jwt from 'jsonwebtoken';

const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    'Dg-Auth': process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Mutation to add business type (corrected based on schema)
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

export async function POST(req: NextRequest) {
  try {
    // Read the raw body using the .text() method on the ReadableStream
    const rawBody = await req.text();
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++", rawBody);

    if (!rawBody) {
      return NextResponse.json({ error: 'No body received' }, { status: 400 });
    }

    const body = JSON.parse(rawBody);
    console.log('body', body);
    const { name, userId } = body;

    // Decode token (optional, if you need authentication)
    // const decodedToken = jwt.verify(token.sessionToken, process.env.SECRET!);

    const variables = { name, userId };

    console.log('Variables being passed to mutation:', variables); // Add logging here

    // Request to GraphQL API
    const data: any = await client.request(addBusinessMutation, variables);
    const businessType = data.addBusinessType.businessType;
console.log("businessType",businessType)
    if (!businessType) {
        console.log('+++++++++++++++++not added+++++++++++++++++++++')
      throw new Error('Business Type creation failed');
    }

    return NextResponse.json(businessType, { status: 200 });
  } catch (error) {
    console.error('Error creating Business Type:', error);
    return NextResponse.json({ error: 'Failed to create Business Type' }, { status: 500 });
  }
}
