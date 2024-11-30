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

// Define the query to fetch all contacts
const getAllContactsQuery = `
  query {
    querycrmContact {
      id
      firstName
      lastName
      company {
        name
      }
      email
      phoneNumber_1
      phoneNumber_2
      background
      contactLogo
      tag
      hasNewsLetter
      title
    }
  }
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { id } = req.query; // Extract ID from query parameters

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid contact ID' });
  }

  try {

    const data = await client.request(getAllContactsQuery);

    const contacts = data.querycrmContact;

    if (!contacts || contacts.length === 0) {
      console.warn('No contacts found'); // Log if no contacts are found
      return res.status(404).json({ error: 'No contacts found' });
    }

    // Filter the contact by ID
    const contact = contacts.find((contact) => contact.id === id);

    if (!contact) {
      console.warn(`Contact with ID ${id} not found`); // Log if the specific contact is not found
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.status(200).json(contact);
  } catch (error) {
    console.error('Error fetching contacts:', error); // Log the error details
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
}
