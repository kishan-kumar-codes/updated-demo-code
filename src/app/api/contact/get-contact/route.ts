
import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';

// Define types for the GraphQL response
interface UserContact {
  id: string;
  firstName: string;
  lastName: string;
  company: {
    id: string;
    name: string;
  };
  email: string;
  phoneNumber_1: string;
  phoneNumber_2: string;
  background: string;
  contactLogo: string;
  tag: string;
  hasNewsLetter: boolean;
  title: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}

interface GetUserResponse {
  getUser: {
    crmContacts: UserContact[];
  };
}

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    'Dg-Auth': process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Define the query to fetch all contacts
const getAllContactQuery = `
query GetContactsByUser($userId: ID!) {
  getUser(id: $userId) {
    crmContacts {
      id
      firstName
      lastName
      company {
        id
        name
        logo
      }
      email
      phoneNumber_1
      phoneNumber_2
      background
      logo
      tag
      hasNewsLetter
      title
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
}
`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse the JSON body
    const { userId } = body; // Get the userId from the request body


    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Make GraphQL request to fetch the contacts
    const data = await client.request<GetUserResponse>(getAllContactQuery, { userId });

    const contacts = data?.getUser?.crmContacts; // Access the crmContacts field

    if (!contacts || contacts.length === 0) {
      console.warn('No contacts found'); // Warn if no contacts are returned
    }

    console.log("contacts:++++++++",contacts);
    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
  }
}
