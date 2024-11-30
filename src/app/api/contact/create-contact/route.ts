import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';
import * as jwt from 'jsonwebtoken';

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    'Dg-Auth': process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Mutation to create a company contact
const addContactMutation = `
  mutation addcrmContact(
    $firstName: String!,
    $lastName: String!,
    $company: crmCompanyRef!,
    $email: String!,
    $phoneNumber_1: String!,
    $phoneNumber_2: String!,
    $background: String!,
    $logo: [String!]!,
    $tag: String!,
    $hasNewsLetter: Boolean!,
    $title: String!,
    $userId: ID!
  ) {
    addcrmContact(
      input: [{
        firstName: $firstName,
        lastName: $lastName,
        company: $company,
        email: $email,
        phoneNumber_1: $phoneNumber_1,
        phoneNumber_2: $phoneNumber_2,
        background: $background,
        logo: $logo,
        tag: $tag,
        hasNewsLetter: $hasNewsLetter,
        title: $title,
        user: { id: $userId }
      }]
    ) {
      crmContact {
        firstName
        lastName
        company {
          id
          name
        }
        email
        phoneNumber_1
        phoneNumber_2
        background
        logo
        tag
        hasNewsLetter
        title
      }
    }
  }
`;

// Define TypeScript interfaces for the response
interface Contact {
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
  logo: string;
  tag: string;
  hasNewsLetter: boolean;
  title: string;
}

interface GraphQLResponse {
  addcrmContact: {
    crmContact: Contact;
  };
}

export async function POST(req: NextRequest) {
  try {
    // Parse the raw body text
    const rawBody = await req.text();
    const body = JSON.parse(rawBody);

    const {
      token,
      firstName,
      lastName,
      company,
      email,
      phoneNumber_1,
      phoneNumber_2,
      background,
      logo,
      tag,
      hasNewsLetter,
      title,
      userId,
    } = body;

    // Validate company reference
    const companyRef = company ? { id: company } : null;

    // Set up GraphQL mutation variables
    const variables = {
      firstName,
      lastName,
      company: companyRef,  // Use the valid company reference or null
      email,
      phoneNumber_1,
      phoneNumber_2,
      background,
      logo,
      tag,
      hasNewsLetter,
      title,
      userId,
    };

    // Make GraphQL request to add a contact
    const data = await client.request<GraphQLResponse>(addContactMutation, variables);

    // Ensure data is available and structured as expected
    const contact = data?.addcrmContact?.crmContact;

    if (!contact) {
      return NextResponse.json({ error: 'Contact creation failed' }, { status: 400 });
    }

    // Return the created contact
    return NextResponse.json(contact, { status: 200 });
  } catch (error) {
    console.error('Error creating contact:', error);
    return NextResponse.json({ error: 'Failed to create contact' }, { status: 500 });
  }
}
