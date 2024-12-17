
import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';

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
      logo
      company {
        name
      }
      email
      phoneNumber_1
      phoneNumber_2
      background
      tag
      hasNewsLetter
      title
    }
  }
`;

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  console.log(id)

  if (!id) {
    return NextResponse.json({ error: 'Missing contact ID' }, { status: 400 });
  }

  try {
    // Make the GraphQL request to fetch all contacts
    const data: any = await client.request(getAllContactsQuery);

    const contacts = data.querycrmContact;

    if (!contacts || contacts.length === 0) {
      console.warn('No contacts found');
      return NextResponse.json({ error: 'No contacts found' }, { status: 404 });
    }

    // Filter the contact by ID
    const contact = contacts.find((contact: any) => contact.id === id);

    if (!contact) {
      console.warn(`Contact with ID ${id} not found`);
      return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
    }

    return NextResponse.json(contact, { status: 200 });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
  }
}