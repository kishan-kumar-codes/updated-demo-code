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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name } = req.query; // Extract name from query parameters

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid company name' });
  }

  try {
    const variables = { name };

    const data = await client.request(getCompanyByNameQuery, variables);

    const company = (data as any).companyByName;

    if (!company) {
      console.warn('Company not found'); // Log if company is not found
      return res.status(404).json({ error: 'Company not found' });
    }

    res.status(200).json(company);
  } catch (error) {
    console.error('Error fetching company:', error); // Log the error details
    res.status(500).json({ error: 'Failed to fetch company' });
  }
}
