
import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    'Dg-Auth': process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Define the query to fetch a company by name
const getCompanyByNameQuery = `
  query($name: String!) {
    crmcompanyByName(name: $name) {
      name
      business
      size
      address
      city
      zipCode
      state
      website
      linkedin
      phoneNumber
      accountManager
      logo
    }
  }
`;

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name'); // Extract name from query parameters

  if (!name || typeof name !== 'string') {
    return NextResponse.json({ error: 'Missing or invalid company name' }, { status: 400 });
  }

  try {
    const variables = { name };
    const data: any = await client.request(getCompanyByNameQuery, variables);

    const company = data.crmcompanyByName;

    if (!company) {
      console.warn('Company not found'); // Log if company is not found
      return NextResponse.json({ error: 'Company not found' }, { status: 404 });
    }

    return NextResponse.json(company, { status: 200 });
  } catch (error) {
    console.error('Error fetching company:', error); // Log the error details
    return NextResponse.json({ error: 'Failed to fetch company' }, { status: 500 });
  }
}
