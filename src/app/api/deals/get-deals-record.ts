import { NextApiRequest, NextApiResponse } from 'next';
import { GraphQLClient } from 'graphql-request';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    'Dg-Auth': process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Define the query to fetch a company by name
const getDealByNameQuery = `
  query($dealName: String!) {
    dealByName(dealName: $dealName) {
      dealName
      description
      company
      startAt
      stage
      type
      amount
    }
  }
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { dealName } = req.query; // Extract name from query parameters

  if (!dealName || typeof dealName !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid deal name' });
  }

  try {
    const variables = { dealName };
    
    const data = await client.request(getDealByNameQuery, variables);
    
    const company = data.dealByName;

    if (!company) {
      console.warn('deal not found'); // Log if company is not found
      return res.status(404).json({ error: 'deal not found' });
    }

    res.status(200).json(company);
  } catch (error) {
    console.error('Error fetching deal:', error); // Log the error details
    res.status(500).json({ error: 'Failed to fetch deal' });
  }
}
