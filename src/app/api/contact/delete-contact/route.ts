
import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    'Dg-Auth': process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Define the mutation to delete a contact by ID
const deleteContactMutation = `
  mutation DeleteContact($id: ID!) {
    deleteContact(filter: { id: [$id] }) {
      contact {
        id
        firstName
        lastName
      }
    }
  }
`;

export async function DELETE(req: NextRequest) {
  try {
    // Parse the request body (we expect the contact ID to be sent in the body)
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: 'Contact ID is required' }, { status: 400 });
    }

    // Execute the mutation with the provided contact ID
    const data = await client.request(deleteContactMutation, { id });

    console.log('Deleted contact:', data); // Log data for debugging

    return NextResponse.json(
      { success: true, message: 'Contact deleted successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting contact:', error);
    return NextResponse.json({ error: 'Failed to delete contact' }, { status: 500 });
  }
}
